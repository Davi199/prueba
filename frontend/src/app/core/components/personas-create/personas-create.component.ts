import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Own
//Types
import { Persona } from '@app/common/types/clases/Persona';
//Services
import { PersonaService } from '@app/common/services/persona.service';

@Component({
  selector: 'app-personas-create',
  templateUrl: './personas-create.component.html',
  styleUrls: ['./personas-create.component.css']
})
export class PersonasCreateComponent implements OnInit {

  persona:Persona = new Persona();
  constructor(private service:PersonaService, private router:Router) { }

  ngOnInit() {
  }

  Guardar(){
    this.service.createPersona(this.persona).subscribe(data=>{
      alert("Se agrego con exito...!!!");
      this.router.navigate(["list"]);
    });
  }

}
