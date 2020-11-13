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
    console.log('submit');
    this.nuevoMolde = <Molde> this.moldeFormGroup.value;
    //console.log(this.newBook instanceof Book);
    console.log(this.nuevoMolde);
    this.todosmoldes.push(this.nuevoMolde);
    console.log("Estos son todos los moldes");
    console.log(this.todosmoldes);
    this.nuevoMolde = new Molde();
  }
}

class Molde {
  public titulo: string;
  public descripcion: string;
}
