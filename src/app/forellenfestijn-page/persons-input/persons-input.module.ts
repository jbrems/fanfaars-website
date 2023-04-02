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
import {
  InputFieldModule
} from "../input-field/input-field.module";

@NgModule({
  declarations: [PersonsInputComponent],
  imports: [CommonModule, ReactiveFormsModule, IconModule, InputFieldModule],
  exports: [
    PersonsInputComponent
  ]
})
export class PersonsInputModule {}