import ItineraryLayout from "@/components/itinerary/ItineraryLayout";
import { itineraryA } from "@/data/itinerary-a";

export default function ItineraryAPage() {
  return (
    <ItineraryLayout
      days={itineraryA}
      title="春季之旅"
      subtitle="Madrid · Toledo · Córdoba · Sevilla · Granada"
      season="Spring Itinerary · 9 Days"
    />
  );
}
