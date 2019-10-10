/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.david.ejemplo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * @author david
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
    
    private String tabla;
    private String columna;
    private Object valor;

    public ResourceNotFoundException(String tabla, String columna, Object valor) {
        super(String.format("%s inexistente con %s : '%s'", tabla, columna, valor));
        this.tabla = tabla;
        this.columna = columna;
        this.valor = valor;
    }

    public String getTabla() {
        return tabla;
    }

    public String getColumna() {
        return columna;
    }

    public Object getValor() {
        return valor;
    }
    
}
