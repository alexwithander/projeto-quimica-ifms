package br.edu.ifms.backend.projetoquimica.classes.Eventos;

public record EventoResponseDTO(String id, String organizador, String evento, String dataEvento) {
    public EventoResponseDTO(Evento evento){
        this(evento.getId(), evento.getOrganizador(), evento.getEvento(), evento.getDatas());
    }
}
