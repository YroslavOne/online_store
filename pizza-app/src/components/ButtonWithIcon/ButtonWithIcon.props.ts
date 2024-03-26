import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonWithIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	image: string;
}
