package br.com.esb.resources;

import br.com.esb.EsbClient;
import br.com.esb.dto.MovimentacaoEsbDto;
import br.com.esb.entity.Movimentacao;
import com.google.gson.Gson;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Response;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import java.util.ArrayList;
import java.util.List;

@Path("/gerenciador")
public class MovimentacaoResource {

    @Inject
    @RestClient
    EsbClient esbClient;

    @GET
    @Consumes("application/json")
    @Produces("application/json")
    public Response getMovimentacoes() {
        String body = esbClient.getMovimentacoes();


        Gson gson = new Gson();
        List<MovimentacaoEsbDto> movimentacoes = List.of(gson.fromJson(body, MovimentacaoEsbDto[].class));

        List<Movimentacao> movimentacaos = new ArrayList<>();
        for (MovimentacaoEsbDto movimentacaoDto : movimentacoes) {
           Movimentacao movimentacao = new Movimentacao();
           if (movimentacaoDto.getIdCategoriaMovimentacao() != null) {
               movimentacao.setCategoria(esbClient.getCategoria(movimentacaoDto.getIdCategoriaMovimentacao()));
           }
           if (movimentacaoDto.getIdSubCategoriaMovimentacao() != null) {
               movimentacao.setSubCategoria(esbClient.getSubCategoria(movimentacaoDto.getIdSubCategoriaMovimentacao()));
           }
           if (movimentacaoDto.getIdTipoMovimentacao() != null) {
               movimentacao.setTipo(esbClient.getTipoMovimentacao(movimentacaoDto.getIdTipoMovimentacao()));
           }

           movimentacao.setData(movimentacaoDto.getData());
           movimentacao.setDescricao(movimentacaoDto.getDescricao());
           movimentacao.setId(movimentacaoDto.getIdMovimentacao());
           movimentacao.setValor(movimentacaoDto.getValor());

           movimentacaos.add(movimentacao);

        }


        return Response.ok(new Gson().toJson(movimentacaos)).build();
    }

}
