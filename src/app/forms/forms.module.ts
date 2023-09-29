import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsRoutingModule } from './forms-routing.module';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { FormBodyComponent } from './components/form-body/form-body.component';
import { FormfooterComponent } from './components/form-footer/form-footer.component';
import { FormSectionComponent } from './components/form-section/form-section.component';
import { FormQuestionComponent } from './components/form-question/form-question.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    FormPageComponent,
    FormHeaderComponent,
    FormBodyComponent,
    FormfooterComponent,
    FormSectionComponent,
    FormQuestionComponent,
  ],
  imports: [CommonModule, FormsRoutingModule, ReactiveFormsModule],
})
export class FormsModule {}