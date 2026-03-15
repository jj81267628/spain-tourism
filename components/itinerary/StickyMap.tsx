"use client";
import { useEffect, useRef } from "react";
import type { DayData } from "@/data/itinerary-a";

interface Props {
  days: DayData[];
  activeDay: number;
}

export default function StickyMap({ days, activeDay }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const polylineRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current || mapInstanceRef.current) return;

    import("leaflet").then((L) => {
      // Fix default icon
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, {
        center: days[0].coords,
        zoom: 6,
        zoomControl: false,
        attributionControl: false,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
      }).addTo(map);

      L.control.zoom({ position: "bottomright" }).addTo(map);

      // Add all markers
      days.forEach((day, i) => {
        const icon = L.divIcon({
          html: `<div style="
            width:32px;height:32px;
            background:${day.color};
            border:2px solid white;
            border-radius:50%;
            display:flex;align-items:center;justify-content:center;
            color:white;font-weight:bold;font-size:12px;
            box-shadow:0 2px 8px rgba(0,0,0,0.5);
          ">${day.day}</div>`,
          className: "",
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });
        const marker = L.marker(day.coords, { icon })
          .addTo(map)
          .bindPopup(`<b>Day ${day.day}: ${day.city}</b><br>${day.cityEs}`);
        markersRef.current.push(marker);
      });

      mapInstanceRef.current = map;
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current) return;
    import("leaflet").then((L) => {
      const map = mapInstanceRef.current;
      const currentDay = days[activeDay];
      if (!currentDay) return;

      map.flyTo(currentDay.coords, 10, { duration: 1.5 });

      if (polylineRef.current) {
        map.removeLayer(polylineRef.current);
      }

      const coords = days.slice(0, activeDay + 1).map((d) => d.coords);
      if (coords.length > 1) {
        polylineRef.current = L.polyline(coords, {
          color: currentDay.color,
          weight: 2,
          opacity: 0.8,
          dashArray: "6, 4",
        }).addTo(map);
      }
    });
  }, [activeDay, days]);

  return (
    <div className="relative w-full h-full">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
      />
      <div ref={mapRef} className="w-full h-full rounded-xl" />
      {/* Day indicator */}
      <div className="absolute top-4 left-4 glass-dark rounded-lg px-3 py-2 z-[1000]">
        <p className="text-white/60 text-xs">当前位置</p>
        <p className="text-white font-semibold text-sm">{days[activeDay]?.city}</p>
        <p className="text-white/50 text-xs">{days[activeDay]?.cityEs}</p>
      </div>
    </div>
  );
}
