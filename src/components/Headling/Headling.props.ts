import { ReactNode, HTMLAttributes } from 'react';

export interface HeadlingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}
