import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Own
//Types
import { Persona } from '@app/common/types/clases/Persona';
//Services
import { PersonaService } from '@app/common/services/persona.service';

@Component({
  selector: 'app-personas-list',
  templateUrl: './personas-list.component.html',
  styleUrls: ['./personas-list.component.css']
})
export class PersonasListComponent implements OnInit {

  personas:Persona[];
  constructor(private service:PersonaService, private router:Router) { }

  ngOnInit() {
    this.service.getPersonas().subscribe(data=>{
      this.personas = data;
    });
  }

  Editar(persona:Persona):void{
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(persona:Persona){
    this.service.deletePersona(persona).subscribe(data=>{
      this.personas=this.personas.filter(p=>p!==persona);
      alert("Usuario Eliminado...");
    })
  }

}
