const controller = require('../controller/subCategoriaMovimentacao');
const controllerMovimentacao = require('../controller/movimentacao');

class SubCategoriaMovimentacaoApi {

    async criarSubCategoria(req, res) {
        const subCategoria = req.body.subCategoria;

        try {
            const categoria = await controller.criarSubCategoria(subCategoria);
            return res.status(201).send(categoria);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterarSubCategoria(req, res) {
        const { id } = req.params;
        const categoriaMovimentacao = req.body.categoriaMovimentacao;

        try {
            const categoria = await controller.alterarSubCategoria(Number(id), categoriaMovimentacao);
            return res.status(200).send(categoria);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deletarSubCategoria(req, res) {
        const { id } = req.params;
    
        const movimentacao = await controllerMovimentacao.buscarPorSubCategoria(Number(id))

        if(movimentacao.length > 0) {
            return res.status(400).send({ error: 'SubCategoria possui movimentações cadastradas' })
        }

        try {
            await controller.deletarSubCategoria(Number(id));
            return res.status(204).send({ message: 'SubCategoria deletada com sucesso'});
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listarSubCategoria(req, res) {
        try {
            const categorias = await controller.listarSubCategorias();
            return res.status(200).send(categorias);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async buscarPorId(req, res) {
        const { id } = req.params;

        try {
            const categoria = await controller.buscarPorId(Number(id));
            return res.status(200).send(categoria);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = new SubCategoriaMovimentacaoApi();