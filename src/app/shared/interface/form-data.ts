export interface FormData {
  groupTitle?: string;
  groupLayout?: string;
  controlName: string;
  controlType: string;
  valueType?: string;
  currentValue?: string;
  placeholder?: string;
  optionsUrlmethod?: string;
  options?: Array<{
    optionName: string;
    value: string;
  }>;
  validators?: {
    required?: boolean;
    minlength?: number;
    maxlength?: number;
    pattern?: string;
  };
}
