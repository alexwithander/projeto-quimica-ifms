package br.edu.ifms.backend.projetoquimica.classes;


import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "eventos")
@Entity(name = "eventos")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode

public class Evento {

    private String id;
    private String evento;
    private String organizador;

    private String role;


}
