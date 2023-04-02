import { NgModule } from "@angular/core";
import { TimeInputComponent } from "./time-input.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import {
  SelectListModule
} from "../select-list/select-list.module";
import {
  IconModule
} from "../../shared/icon/icon.module";

@NgModule({
  declarations: [TimeInputComponent],
  imports: [CommonModule, ReactiveFormsModule, SelectListModule, IconModule],
  exports: [TimeInputComponent],
})
export class TimeInputModule {}