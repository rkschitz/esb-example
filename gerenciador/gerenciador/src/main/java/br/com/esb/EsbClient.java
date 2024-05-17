package br.com.esb;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

@Path("/")
@RegisterRestClient
public interface EsbClient {

    @GET
    @Path("/movimentacoes")
    @Produces(MediaType.APPLICATION_JSON)
    String getMovimentacoes();

    @GET
    @Path("/categoria/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    String getCategoria(@PathParam("id") Integer id);

    @GET
    @Path("/subCategoria/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    String getSubCategoria(@PathParam("id") Integer id);

    @GET
    @Path("/tipoMovimentacao/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    String getTipoMovimentacao(@PathParam("id") Integer id);





}
