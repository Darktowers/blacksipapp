import { Component } from '@angular/core';
import { AvionesService } from './services/api.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombreServicio = '';
  clickServicio = false;
  selectedItem = '';
  aviones = null;
  mostrarForm(nombre, event: any) {
    console.log(event);
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

}
