export interface Lookup {
    label: string;
    value: string;
    checked?: boolean;
    indeterminate?: boolean;
    hidden?: boolean;
    children?: Lookup[];
  }