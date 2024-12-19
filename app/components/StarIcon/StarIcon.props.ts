import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface StarIconProps extends DetailedHTMLProps<HTMLAttributes<SVGElement>, SVGElement>  {
    className: string;
    setMouseEnter: () => void;
    setMouseLeave: () => void;
    setOnClick: () => void;
}