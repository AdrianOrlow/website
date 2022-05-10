import React from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

export type Size = 'thin' | 'middle' | 'large';
export type Sizes = Record<Size, FlattenSimpleInterpolation>;

export type Background =
  | 'blue'
  | 'bluish'
  | 'whiteish'
  | 'red'
  | 'redish'
  | 'greenish'
  | 'facebook'
  | 'text'
  | 'twitter';
export type Backgrounds = Record<Background, FlattenSimpleInterpolation>;

export interface StyleProps {
  size?: Size;
  background?: Background;
  isFullWidth?: boolean;
  pulsating?: boolean;
}

export interface ButtonProps
  extends StyleProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  beforeIcon?: React.ReactNode;
  afterIcon?: React.ReactNode;
  as?: any;
  loading?: boolean;
}
