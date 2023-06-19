import { ChangeEvent } from "react";

export interface InputProps {
  id: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface InputState {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
