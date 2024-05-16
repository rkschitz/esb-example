package br.com.esb.services;

import br.com.esb.entity.Movimentacao;
import br.com.esb.repository.MovimentacaoRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;

import java.util.List;

@ApplicationScoped
public class MovimentacaoService {

    @Inject
    MovimentacaoRepository movimentacaoRepository;

    @Inject
    EntityManager entityManager;

    public void save() {
        entityManager.getTransaction().begin();
        entityManager.persist(movimentacaoRepository.findById(1));
        entityManager.getTransaction().commit();
    }

    public void update() {
        entityManager.getTransaction().begin();
        entityManager.merge(movimentacaoRepository.findById(1));
        entityManager.getTransaction().commit();
    }

    public void delete() {
        entityManager.getTransaction().begin();
        entityManager.remove(movimentacaoRepository.findById(1));
        entityManager.getTransaction().commit();
    }

    public List<Movimentacao> findAll() {
        return movimentacaoRepository.findAll();
    }

    public Movimentacao findById(Integer id) {
        return movimentacaoRepository.findById(id);
    }

}
