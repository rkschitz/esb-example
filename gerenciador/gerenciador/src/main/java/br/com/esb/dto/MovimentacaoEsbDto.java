package br.com.esb.dto;

import lombok.Data;

@Data
public class MovimentacaoEsbDto {
    private Integer idMovimentacao;
    private String Descricao;
    private String Data;
    private String Valor;
    private Integer idTipoMovimentacao;
    private Integer idCategoriaMovimentacao;
    private Integer idSubCategoriaMovimentacao;
}
