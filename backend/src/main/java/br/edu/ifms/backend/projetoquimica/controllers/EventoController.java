package br.edu.ifms.backend.projetoquimica.controllers;

import br.edu.ifms.backend.projetoquimica.classes.Eventos.Evento;
import br.edu.ifms.backend.projetoquimica.classes.Eventos.EventoRequestDTO;
import br.edu.ifms.backend.projetoquimica.classes.Eventos.EventoResponseDTO;
import br.edu.ifms.backend.projetoquimica.repositorios.EventoRepo;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("evento")
public class EventoController {

    @Autowired
    EventoRepo repository;

    @PostMapping
    public ResponseEntity postEvento(@RequestBody @Valid EventoRequestDTO body){
        Evento newEvento = new Evento(body);

        this.repository.save(newEvento);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity getEventos(){
        List<EventoResponseDTO> eventosList = this.repository.findAll().stream().map(EventoResponseDTO::new).toList();

        return ResponseEntity.ok(eventosList);
    }
}
