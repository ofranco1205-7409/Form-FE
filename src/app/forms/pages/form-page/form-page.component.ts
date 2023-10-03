import { Component, OnInit, inject } from '@angular/core';
import { FormService } from '../../services/form.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormDefinition } from '../../interfaces/formulario';

@Component({
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent implements OnInit {
  private fb = inject(FormBuilder);
  private formService = inject(FormService);

  formDefinition: FormDefinition = {
    id: '',
    title: 'Formulario sin inicializar',
    description: 'Por favor inicialice con un formulario valido',
    sections: [],
  };

  ngOnInit(): void {
    this.formService.setFormDefinition('FI');
    this.formDefinition = this.formService.formDefinition;
  }
}
