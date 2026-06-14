import Image from "next/image";
import type { Country } from "../model/countries";

type CountryCardProps = {
  country: Country;
};

export function CountryCard({ country }: CountryCardProps) {
  return (
    <article className="country-card">
      <Image
        src={`https://flagcdn.com/w40/${country.code}.png`}
        alt={`${country.name} flag for ${country.seoLabel}`}
        width={40}
        height={30}
        loading="lazy"
        sizes="40px"
      />
      <strong>{country.name}</strong>
      <span>{country.description}</span>
    </article>
  );
}
