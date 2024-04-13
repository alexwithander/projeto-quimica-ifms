package br.edu.ifms.backend.projetoquimica.repositorios;

import br.edu.ifms.backend.projetoquimica.classes.usuarios.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface UsuarioRepo extends JpaRepository<Usuario, String> {
    UserDetails findByLogin (String login);
}
