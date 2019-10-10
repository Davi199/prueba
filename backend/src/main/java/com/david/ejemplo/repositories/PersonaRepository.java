/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.david.ejemplo.repositories;

import com.david.ejemplo.models.Persona;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author david
 */
@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long>{
    @Query("SELECT u FROM Persona u WHERE (:nombres IS NOT NULL AND :apellidos IS NOT NULL "
            + "AND u.nombres LIKE CONCAT('%',:nombres,'%') AND u.apellidos LIKE CONCAT('%',:apellidos,'%')) "
            + "OR (:nombres IS NOT NULL AND :apellidos IS NULL AND u.nombres LIKE CONCAT('%',:nombres,'%')) "
            + "OR (:apellidos IS NOT NULL AND nombres IS NULL AND u.apellidos LIKE CONCAT('%',:apellidos,'%')) "
            + "OR (:apellidos IS NULL AND :nombres IS NULL)")
    List<Persona> getPersonasByNombresAndApellidos(@Param("nombres") String nombres, @Param("apellidos") String apellidos);
}
