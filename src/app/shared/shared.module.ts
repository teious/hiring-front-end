import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class SharedModule {}
