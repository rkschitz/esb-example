const controller = require('../controller/categoriaMovimentacao');
const controllerMovimentacao = require('../controller/movimentacao');

class CategoriaMovimentacaoApi {

    async criarCategoria(req, res) {
        const categoriaMovimentacao = req.body.categoriaMovimentacao;

        try {
            const categoria = await controller.criarCategoria(categoriaMovimentacao);
            return res.status(201).send(categoria);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterarCategoria(req, res) {
        const { id } = req.params;
        const categoriaMovimentacao = req.body.categoriaMovimentacao;

        try {
            const categoria = await controller.alterarCategoria(Number(id), categoriaMovimentacao);
            return res.status(200).send(categoria);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deletarCategoria(req, res) {
        const { id } = req.params;
    
        const movimentacao = await controllerMovimentacao.buscarPorCategoria(Number(id))

        if(movimentacao.length > 0) {
            return res.status(400).send({ error: 'Categoria possui movimentações cadastradas' })
        }

        try {
            await controller.deletarCategoria(Number(id));
            return res.status(204).send({ message: 'Categoria deletada com sucesso'});
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listarCategoria(req, res) {
        try {
            const categorias = await controller.listarCategorias();
            return res.status(200).send(categorias);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = new CategoriaMovimentacaoApi();