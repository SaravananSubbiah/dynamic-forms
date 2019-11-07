import { FormData } from './../../shared/interface/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, NgForm, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input()formData: FormData[];
  form: FormGroup;
  submitted: boolean;

  constructor(
    private fb: FormBuilder,
    private productSerive: ProductService) {}

  ngOnInit() {
    // const formGroup = {};

    // this.formData.forEach(formControl => {
    //   formGroup[formControl.controlName] = new FormControl('');
    // });

    // this.form = new FormGroup(formGroup);
    this.form = this.fb.group({
          fullName: [''],
          email: [''],
          skill: this.fb.group({
            skillName: [''],
            experienceInYears: [''],
            proficiency: ['']
          })
    });
  }

  onChange($event, deviceValue) {
    console.log(deviceValue);
    this.getOptions();
}

  getOptions() {
    const updateFormData = this.formData.find(u => u.controlName === 'Vehicle you own').options.push({optionName: 'I have a van', value: 'van'}); // 1
    //updateFormData.options.push({optionName: 'I have a bike', value: 'bike123'});
    // updateFormData.options.pop();
    //this.formData = {...this.formData, this.updateFormData};
    console.log('formData', this.formData);
    const prods = this.productSerive.getProducts();
    console.log(prods);
  }

  submitForm(formObj: NgForm) {
    console.log(formObj.value);
    console.log(formObj.value.Username);
    // this.submitted = true;
    const isValid = formObj.submitted && formObj.valid && formObj.touched;
    this.submitted = isValid;
  }

  resetForm(form: NgForm)  {
    form.resetForm();
  }
}
