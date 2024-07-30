import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // extends DetailedHTMLProps<
  //   ButtonHTMLAttributes<HTMLButtonElement>,
  //   HTMLButtonElement
  // > {
  children: ReactNode;
  appearance: 'primary' | 'ghost';
}
