package br.edu.ifms.backend.projetoquimica.classes.usuarios;

public record RegisterDTO(String login, String password, UsuarioRole role) {
}
