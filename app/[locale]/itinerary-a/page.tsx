import { getTranslations } from "next-intl/server";
import ItineraryLayout from "@/components/itinerary/ItineraryLayout";
import { itineraryA } from "@/data/itinerary-a";
import type { Locale } from "@/i18n/routing";

export default async function ItineraryAPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("itinerary");
  const safeLocale = (locale as Locale) in itineraryA ? (locale as Locale) : "en";

  return (
    <ItineraryLayout
      days={itineraryA[safeLocale]}
      title={t("springTitle")}
      subtitle={t("springSubtitle")}
      season={t("springSeason")}
    />
  );
}
