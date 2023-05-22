import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: "primary" | "secondary" | "terciary";
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  children: string;
}
export interface IOptions {
  name: string;
}

export interface ISelectProps {
  name: string;
  label: string;
  children: string;
  array: Array<IOptions>;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}
