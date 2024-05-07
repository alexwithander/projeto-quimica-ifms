package br.edu.ifms.backend.projetoquimica.classes.Eventos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigInteger;

public record EventoRequestDTO(
        @NotNull
        String organizador,

        @NotNull
        String evento,
        @NotNull
        String datas
) {
}

