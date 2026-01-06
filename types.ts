export interface NavItem {
  label: string;
  path: string;
}

export interface Program {
  title: string;
  subtitle: string;
  price: string;
  tag?: string;
  linkText: string;
  isGreen?: boolean;
}