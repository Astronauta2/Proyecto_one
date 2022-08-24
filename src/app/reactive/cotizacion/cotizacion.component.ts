import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoDeCuidadesService } from 'src/app/services/cuidades.service';
import { TipoDeDocumentosService } from 'src/app/services/tipo_de_documentos.service';
import { ApellidoPattern, emailPattern } from 'src/app/shared/validator/validaciones';
import Swal from 'sweetalert2';
import { CotizacionService } from 'src/app/services/proyecto.service';
import { delay } from 'rxjs';


@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  tipo_de_cuidades: string[] = [];
  tipo_de_documentos: string[] = [];

  miFormulario: FormGroup = this.fb.group({


    nombre: ['', [Validators.required]],
    cuidades: ['', Validators.required],
    apellido: ['', [Validators.pattern(ApellidoPattern), Validators.minLength(5), Validators.required]],
    fecha: [Validators.required],
    tipo_de_documento: ['', Validators.required],
    codigo: ['', Validators.required, Validators.minLength(2), Validators.maxLength(3)],
    telefono: [, [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
    numero_documento: [, [Validators.required, Validators.minLength(11)]],
    email: ['', [Validators.pattern(emailPattern), Validators.required]],
    condiciones: [true, Validators.requiredTrue]
  })


  constructor(
    private fb: FormBuilder,
    private tipodedocumentosService: TipoDeDocumentosService,
    private tipodecuidadesService: TipoDeCuidadesService,
    private cotizacionservice: CotizacionService


  ) { }




  ngOnInit() {
    this.miFormulario.reset({
      nombre: '',
      cuidades: '',
      apellido: '',
      fecha: '',
      tipo_de_documento: '',
      codigo: '',
      telefono: '',
      numero_documento: '',
      email: '',
      condiciones: false

    })

    // Selectores
    this.tipo_de_documentos = this.tipodedocumentosService.tipo_de_documentos;
    this.tipo_de_cuidades = this.tipodecuidadesService.tipo_de_cuidades;
  }


  campoNoEsValido(campo: string) {


    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;

  }

  async guardar() {


    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();

    const response = await this.cotizacionservice.addCotizacion(this.miFormulario.value);
    console.log(response);

    delay(100); {
      Swal.fire('Felicidades!', 'Se agrego la informacion correctamente', 'info');

      Swal.update({
        icon: 'success'
      })

    }
  }




}

