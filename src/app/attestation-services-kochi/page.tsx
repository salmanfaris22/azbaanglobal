import { LOCATIONS } from "@/entities/location/model/locations";
import { LOCATION_PAGE_BY_SLUG } from "@/shared/config/location-pages";
import {
  buildLocationPageMetadata,
  buildLocationPageStructuredData,
} from "@/shared/lib/locationPageSeo";
import {
  LocationAttestationPage,
  LocationPageShell,
} from "@/views/location-attestation";

const PAGE = LOCATION_PAGE_BY_SLUG["attestation-services-kochi"];
const LOCATION = LOCATIONS.find((entry) => entry.key === PAGE.locationKey)!;

export const metadata = buildLocationPageMetadata(PAGE);

export default function AttestationServicesKochiPage() {
  const structuredData = buildLocationPageStructuredData(PAGE, LOCATION);

  return (
    <LocationPageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LocationAttestationPage page={PAGE} location={LOCATION} />
    </LocationPageShell>
  );
}
