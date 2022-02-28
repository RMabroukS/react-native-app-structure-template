import React from 'react';
import {
  SvgProps
} from 'react-native-svg';
import Logo from './logo'



export type IconsName = "logo"
export type RotateTypes = 'left' | 'right' | 'top' | 'bottom';
export interface IconsProps {
  color?: string;
  width?: number;
  height?: number;
  name: IconsName;
  rotate?: RotateTypes;
  type?: "image" | "svg"
}



const getRotate = (rotate: string) => {
  switch (rotate) {
    case "top":
      return '90deg'
    case "bottom":
      return '270deg'
    case "left":
      return '0deg'
    case "right":
      return '-180deg'
    default:
      return "0deg"
  }
}


function Icon(props: IconsProps & SvgProps) {
  const style = { transform: [{ rotate: getRotate(props.rotate || "") }] }
  switch (props.name) {
    case 'logo':
      return <Logo {...props} style={[props.rotate && style, props.style]} />;
    default:
      return <Logo {...props} />
  }
}

export default Icon;
