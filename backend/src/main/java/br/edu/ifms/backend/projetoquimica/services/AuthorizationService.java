package br.edu.ifms.backend.projetoquimica.services;


import br.edu.ifms.backend.projetoquimica.repositorios.UsuarioRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthorizationService implements UserDetailsService {

    @Autowired
    UsuarioRepo repositorio;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repositorio.findByLogin(username);
    }
}
