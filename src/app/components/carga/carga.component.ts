import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-items';
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  estaSobreElemento = false;
  archivos:FileItem[] = [];

  constructor(public _cargaImagenes:CargaImagenesService) {

   }

  ngOnInit() {
  }

  cargarImagenes(){
    this._cargaImagenes.cargarImagenFirebase( this.archivos)
  }

  limpiarArchivos(){
    this.archivos = [];
  }

}
