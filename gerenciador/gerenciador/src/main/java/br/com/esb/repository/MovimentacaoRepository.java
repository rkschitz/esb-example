package br.com.esb.repository;

import br.com.esb.entity.Movimentacao;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;

import java.util.List;

public class MovimentacaoRepository {

    @Inject
    EntityManager entityManager;

    public List<Movimentacao> findAll() {
        return entityManager.createQuery("SELECT m FROM Movimentacao m", Movimentacao.class).getResultList();
    }

    public Movimentacao findById(Integer id) {
        return entityManager.find(Movimentacao.class, id);
    }
}
