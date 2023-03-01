import {
  NgModule
} from "@angular/core";
import {
  PersonsInputComponent
} from "./persons-input.component";
import {
  CommonModule
} from "@angular/common";
import {
  ReactiveFormsModule
} from "@angular/forms";
import {
  IconModule
} from "../../shared/icon/icon.module";

@NgModule({
  declarations: [PersonsInputComponent],
  imports: [CommonModule, ReactiveFormsModule, IconModule],
  exports: [
    PersonsInputComponent
  ]
})
export class PersonsInputModule {}