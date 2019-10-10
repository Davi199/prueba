/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.david.ejemplo.controllers;

import com.david.ejemplo.exceptions.ResourceNotFoundException;
import com.david.ejemplo.models.Persona;
import com.david.ejemplo.repositories.PersonaRepository;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author david
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class PersonaController {
  
    @Autowired
    private PersonaRepository service;
    
    @GetMapping("/personas")
    public List<Persona>listar(){
        return service.findAll();        
    }
    
    @GetMapping("/personas/{id}")
    public Persona listarId(@PathVariable(value = "id")long id){
        return service.findById(id).orElseThrow(()-> new ResourceNotFoundException("Persona", "id", id));
    }
    
    @GetMapping("/usuarios/search")
	public List<Persona> getPersonasByNombresAndApellidos(@RequestParam(value = "nombres", required=false) String nombres, @RequestParam(value = "apellidos", required=false) String apellidos) {
	    return service.getPersonasByNombresAndApellidos(nombres, apellidos);
	}
    
    @PostMapping("/personas")
    public Persona agregar(@Valid @RequestBody Persona persona){
        return service.save(persona);
    }
    
    @PutMapping("/personas/{id}")
    public Persona editar(@Valid @RequestBody Persona nuevaPersona,@PathVariable(value = "id") long id){
        Persona persona = service.findById(id).orElseThrow(()-> new ResourceNotFoundException("Persona", "id", id));
        persona.setNombres(nuevaPersona.getNombres());
        persona.setApellidos(nuevaPersona.getApellidos());
        Persona personaActualizada = service.save(persona);
        return personaActualizada;
    }
    @DeleteMapping("/personas/{id}")
    public ResponseEntity<?> delete(@PathVariable(value = "id") long  id){
        Persona persona = service.findById(id).orElseThrow(()-> new ResourceNotFoundException("Persona", "id", id));
        service.delete(persona);
        return ResponseEntity.ok().build();
    }
    
}
