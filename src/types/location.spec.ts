export interface LocationProps {
  continentValue: string;
  onContinentChange: (value: string) => void;
  countryValue: string;
  onCountryChange: (value: string) => void;
}

export interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}
