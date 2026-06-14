/** Google Maps embed URL pinned to exact coordinates for local SEO and nearest-location accuracy. */
export function buildMapEmbed(lat: number, lng: number, label: string, zoom = 16) {
  const query = encodeURIComponent(label);
  return `https://maps.google.com/maps?q=${query}&ll=${lat},${lng}&z=${zoom}&output=embed`;
}

/** Direct directions link with coordinate fallback for mobile maps apps. */
export function buildDirectionsUrl(lat: number, lng: number, label: string) {
  const query = encodeURIComponent(label);
  return `https://www.google.com/maps/dir/?api=1&destination=${query}&destination_place_id=&travelmode=driving&dir_action=navigate&center=${lat},${lng}`;
}
