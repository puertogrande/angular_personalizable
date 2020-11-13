import { Component, OnInit } from '@angular/core';
import{ GlobalVars} from '../common/globalVars';


@Component({
  selector: 'app-inicio-contenido',
  templateUrl: './inicio-contenido.component.html',
  styleUrls: ['./inicio-contenido.component.css']
})
export class InicioContenidoComponent implements OnInit {
  //seria mas recomendable crear una clase solo con los valores de titulo y descripcion
  modo:boolean = GlobalVars.modoCreacion;
  moldes:Molde[]=[];
  nuevoMolde:Molde = new Molde();  
  molde1:Molde = new Molde();
  molde2:Molde = new Molde();

  constructor() {
    this.moldes = []; 
    this.molde1.setTitulo("molde1ssssssssssss");
    this.molde1.setDescripcion("Esta es la descripción del modulo 1");
    this.molde2.setTitulo("molde2");
    this.molde2.setDescripcion("Esta es la descripción del modulo 2");
    this.moldes.push(this.molde1);
    this.moldes.push(this.molde2);
    console.log("estos son los moldes");
    console.log(this.moldes);
   }
  
  ngOnInit(): void {
  
   
  }
  crearMolde(){
     
    //introducimos el objeto en la lista y lo reinicializamos
    //moldes.push(nuevoMolde);
    //this.nuevoMolde = new(Molde);

  }
  
}

class Molde {
  titulo: String;
  descripcion: String;

  constructor() {
  
  }
  setTitulo(titulo:String){
    this.titulo = titulo;
  }
  setDescripcion(descripcion:String){
    this.descripcion = descripcion;
  }

}
