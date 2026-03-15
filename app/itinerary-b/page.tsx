import ItineraryLayout from "@/components/itinerary/ItineraryLayout";
import { itineraryB } from "@/data/itinerary-b";

export default function ItineraryBPage() {
  return (
    <ItineraryLayout
      days={itineraryB}
      title="秋季之旅"
      subtitle="Barcelona · Valencia · Ibiza · Mallorca"
      season="Autumn Itinerary · 9 Days"
    />
  );
}
