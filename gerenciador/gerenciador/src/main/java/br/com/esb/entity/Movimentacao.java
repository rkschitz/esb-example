package br.com.esb.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "movimentacao")
@Data
public class Movimentacao {

    @Id
    private Integer id;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "tipo")
    private String tipo;

    @Column(name = "data")
    private String data;

    @Column(name = "valor")
    private String valor;

    @Column(name = "categoria")
    private String categoria;

    @Column(name = "sub_categoria")
    private String subCategoria;


    @Column(name = "cpf_usuario")
    private String cpfUsuario;


}
