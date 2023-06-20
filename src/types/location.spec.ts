export interface LocationProps {
  continentValue: string;
  onContinentChange: (value: string) => void;
  countryValue: string;
  onCountryChange: (value: string) => void;
  availableCountries: string[];
  continentCountries: { [key: string]: string[] };
}

export interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}
