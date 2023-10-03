import { FormDefinition } from './../../interfaces/formulario';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css'],
})
export class FormHeaderComponent implements OnInit {
  formService = inject(FormService);

  formDefinition: FormDefinition = {
    id: 'F1',
    title: 'Formulario sin inicializar',
    description: 'Por favor inicialice con un formulario valido',
    sections: [],
  };

  ngOnInit() {
    this.formDefinition = this.formService.formDefinition;
  }
}
