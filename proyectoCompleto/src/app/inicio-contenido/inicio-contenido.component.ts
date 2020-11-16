import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import{ GlobalVars} from '../common/globalVars';


@Component({
  selector: 'app-inicio-contenido',
  templateUrl: './inicio-contenido.component.html',
  styleUrls: ['./inicio-contenido.component.css']
})
export class InicioContenidoComponent implements OnInit {
  modo:boolean = GlobalVars.modoCreacion;
  moldeFormGroup: FormGroup;
  todosmoldes:Molde[];
  private nuevoMolde: Molde = new Molde();

  constructor(private fb: FormBuilder) {
    this.todosmoldes=[];
    this.moldeFormGroup = this.fb.group({
      titulo: new FormControl(''),
      descripcion: new FormControl('')
    });
   }
  
  ngOnInit(): void {
  }
  addMolde() {
    this.nuevoMolde = <Molde> this.moldeFormGroup.value;
    this.todosmoldes.push(this.nuevoMolde);
    this.nuevoMolde = new Molde();
  }
  changeMode(){
    if(GlobalVars.modoCreacion){
      GlobalVars.modoCreacion = false;
    }
    else{
      GlobalVars.modoCreacion = true;
    }
    this.modo = GlobalVars.modoCreacion ;
  }
 
}

class Molde {
  public titulo: string;
  public descripcion: string;
}

