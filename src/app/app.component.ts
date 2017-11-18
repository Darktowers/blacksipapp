import { Component } from '@angular/core';
import { AvionesService } from './services/api.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombreServicio = '';
  usuario: any = {};
  clickServicio = false;
  selectedItem = '';
  aviones = null;
  formSuccess = false;
  guardando = false;
  form;
  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.compose([
        Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'),
        Validators.required
      ])),
      celular: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.compose([
        this.edadValidation,
        Validators.required,
      ])),

    });
  }
  edadValidation(control) {
    if (control.value < 18 || control.value > 100) {
      return { 'edad': true };
    }
  }
  onSubmit(usuario) {
    this.guardando = true;
    console.log(usuario);
    this.avionesService.guardarUsuario(usuario).subscribe(data => {
      if (data.status) {
        this.guardando = false;
        this.formSuccess = true;
        setTimeout(() => {
          this.formSuccess = false;
          this.form.reset();
        }, 5000);
      }
    });
  }
  mostrarForm(nombre, event: any) {
    this.nombreServicio = nombre;
    this.clickServicio = true;
    this.selectedItem = nombre;
    return false;
  }
  constructor(private avionesService: AvionesService) {
    this.getAviones();
  }
  getAviones() {
    this.avionesService.getAviones().subscribe(data => this.aviones = data);
  }
  ocultarForm() {
    this.selectedItem = '';
    this.form.reset();
    this.clickServicio = false;
  }

}
