import { FormData } from '../interface/form-data';

export const FilterForm: FormData[] = [
  {
    groupTitle: 'Section 1',
    controlName: 'Username',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Enter username',
    validators: {
      required: true,
      minlength: 5
    }
  },
  {
    groupTitle: 'Section 1',
    controlName: 'City',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Enter city name',
    validators: {
      required: true,
      minlength: 5
    }
  },
  {
    groupTitle: 'Section 1',
    controlName: 'Telephone',
    placeholder: 'Enter Phone',
    valueType: 'tel',
    controlType: 'text',
    validators: {
      required: true,
      minlength: 7,
      maxlength: 10
    }
  },
  {
    groupTitle: 'Section 1',
    controlName: 'Email',
    valueType: 'email',
    placeholder: 'Enter email',
    controlType: 'text',
    validators: {
      required: true,
      pattern: '[^ @]*@[^ @]*'
    }
  },
  {
    groupTitle: 'Section 1',
    controlName: 'Gender',
    placeholder: 'Select gender',
    controlType: 'select',
    options: [{
      optionName: 'Male',
      value: 'male'
    }, {
      optionName: 'Female',
      value: 'female'
    }],
    validators: {
      required: true
    }
  },
  {
    groupTitle: 'Section 1',
    groupLayout: 'row',
    controlName: 'Vehicle you own',
    placeholder: 'Select vehicle',
    controlType: 'radio',
    optionsUrlmethod: 'getOptions()',
    options: [{
      optionName: 'I have a bike',
      value: 'bike'
    }, {
      optionName: 'I have a car',
      value: 'car'
    }],
    validators: {
      required: true
    }
  }
];
