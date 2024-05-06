
package br.edu.ifms.backend.projetoquimica.repositorios;

import br.edu.ifms.backend.projetoquimica.classes.Eventos.Evento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventoRepo extends JpaRepository<Evento, String> {
}
