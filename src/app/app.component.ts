import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My app yiahh';
  nombreServicio = "";
  clickServicio = false;
  selectedItem = "" 
  lugares:any = [
    { cercania:1, active:true, nombre: 'Floreria'},
    { cercania:2, active:false, nombre: 'Donas'},
    { cercania:1, active:true, nombre: 'Veterinaria'},
    { cercania:3, active:true, nombre: 'Veterinaria'}
    
  ];
  mostrarForm(nombre,event:any){
    console.log(event);
    this.nombreServicio = nombre;
    this.clickServicio = true;
    this.selectedItem = nombre;
    return false;
  }
  constructor(){

  }

}
