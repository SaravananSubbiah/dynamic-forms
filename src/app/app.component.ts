import { FilterForm } from './shared/filter/filter-form';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = FilterForm;
  title = 'dynamic-forms';
}
