
package br.edu.ifms.backend.projetoquimica.classes.Eventos;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigInteger;

@Table(name = "eventos")
@Entity(name = "eventos")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Evento {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String organizador;

    private String evento;

    private String datas;

    public Evento(EventoRequestDTO data){

        this.evento = data.evento();
        this.datas = data.datas();
        this.organizador = data.organizador();
    }
}