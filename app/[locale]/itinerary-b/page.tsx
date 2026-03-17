import { getTranslations } from "next-intl/server";
import ItineraryLayout from "@/components/itinerary/ItineraryLayout";
import { itineraryB } from "@/data/itinerary-b";
import type { Locale } from "@/i18n/routing";

export default async function ItineraryBPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("itinerary");
  const safeLocale = (locale as Locale) in itineraryB ? (locale as Locale) : "en";

  return (
    <ItineraryLayout
      days={itineraryB[safeLocale]}
      title={t("autumnTitle")}
      subtitle={t("autumnSubtitle")}
      season={t("autumnSeason")}
    />
  );
}
