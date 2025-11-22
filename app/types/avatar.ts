export type Shape = 'square' | 'circle';
export type BackgroundType = 'solid' | 'linear' | 'radial' | 'pattern';

export interface Pattern {
  id: string;
  name: string;
  path: string;
}

export interface AvatarState {
  textColor: string;
  backgroundColor: string;
  font: string;
  fontWeight: string;
  sizePercentage: number;
  zoom: number;
  shape: Shape;
  backgroundType: BackgroundType;
  backgroundColors: string[];
  backgroundGradientAngle: number;
  activePattern: string | null;
}

export interface BackgroundStyle {
  backgroundColor?: string;
  background?: string;
  backgroundImage?: string;
}

export interface AvatarTemplate {
  id: string;
  name: string;
  textColor: string;
  font: string;
  fontWeight: string;
  sizePercentage: number;
  shape: Shape;
  backgroundType: BackgroundType;
  backgroundColors: string[];
  backgroundGradientAngle?: number;
  activePattern?: string | null;
}
