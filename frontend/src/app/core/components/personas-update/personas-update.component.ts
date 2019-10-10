import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Own
//Types
import { Persona } from '@app/common/types/clases/Persona';
//Services
import { PersonaService } from '@app/common/services/persona.service';

@Component({
  selector: 'app-personas-update',
  templateUrl: './personas-update.component.html',
  styleUrls: ['./personas-update.component.css']
})
export class PersonasUpdateComponent implements OnInit {

  persona:Persona = new Persona();
  constructor(private service:PersonaService, private router:Router) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPersonaById(+id).subscribe(data=>{
      this.persona = data;
    });
  }

  Actualizar(persona:Persona){
    this.service.updatePersona(persona).subscribe(data=>{
      this.persona = data;
      alert("Se actualiza con exito...!!!");
      this.router.navigate(["list"]);
    })
  }

  Atras(){
    this.router.navigate(["list"]);
  }

}
