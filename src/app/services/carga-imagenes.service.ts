import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase'
import { FileItem } from '../models/file-items';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';

  constructor(private db:AngularFirestore) { }


  cargarImagenFirebase(imagenes:FileItem[]){
    console.log(imagenes)
  }


  private guardarImagen(imagen:{nombre:string, url:string}){

    this.db.collection(`/${this.CARPETA_IMAGENES}`)
      .add( imagen)

      
  }

}
