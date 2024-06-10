export enum ShInputLayoutEnum {
  default = 'default',
  suffix = 'suffix',
  prefix = 'prefix',
}

export type ShInputLayout = keyof typeof ShInputLayoutEnum;
