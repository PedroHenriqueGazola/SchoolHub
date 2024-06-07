export enum ShButtonThemeEnum {
  solid = 'solid',
  outline = 'outline',
  transparent = 'transparent',
}

export type ShButtonTheme = keyof typeof ShButtonThemeEnum;

export enum ShButtonLayoutEnum {
  default = 'default',
  suffix = 'suffix',
  prefix = 'prefix',
  icon = 'icon',
}

export type ShButtonLayout = keyof typeof ShButtonLayoutEnum;

export enum ShButtonShapeEnum {
  default = 'default',
  rounded = 'rounded',
}

export type ShButtonShape = keyof typeof ShButtonShapeEnum;

export enum ShButtonSizeEnum {
  'full' = 'full',
  'xl' = 'xl',
  'lg' = 'lg',
  'base' = 'base',
  'xs' = 'xs',
}

export type ShButtonSize = keyof typeof ShButtonSizeEnum;
