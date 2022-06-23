import { FormArray, FormControl } from "@angular/forms";

export interface TableForm {
  testField: FormControl<string>;
  rows: FormArray;
}

export interface StoreState {
  table: any[];
  timeOuts: {};
}
