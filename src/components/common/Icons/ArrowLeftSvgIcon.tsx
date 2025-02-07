import { FC, SVGAttributes } from 'react';

type ArrowLeftSvgIconProps = SVGAttributes<SVGElement>;

export const ArrowLeftSvgIcon: FC<ArrowLeftSvgIconProps> = ({
  fill = 'currentColor',
  ...svgProps
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill={fill}
    role="img"
    {...svgProps}
  >
    <title>Arrow Left</title>
    <path
      fill="#000000"
      d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
    />
  </svg>
);
