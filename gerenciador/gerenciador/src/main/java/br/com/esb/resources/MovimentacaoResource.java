package br.com.esb.resources;

import br.com.esb.entity.Movimentacao;
import com.google.gson.Gson;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

@Path("/gerenciador")
public class MovimentacaoResource {

    @GET
    public Response getMovimentacoes() throws IOException {
        URL url = new URL("http://localhost:3000/movimentacoes");
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();

        connection.setRequestMethod("GET");
        connection.connect();
        // get body
        String body = new String(connection.getInputStream().readAllBytes());
        connection.disconnect();

        List<Movimentacao> movimentacoes = new Gson().fromJson(body, List.class);

        return Response.ok(movimentacoes).build();
    }

}
