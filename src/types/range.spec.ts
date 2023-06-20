export interface RangeProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

export interface RangeState {
  value: number;
  onChange: (value: number) => void;
}
