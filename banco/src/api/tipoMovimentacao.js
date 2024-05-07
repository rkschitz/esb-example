const controller = require('../controller/tipoMovimentacao');
const controllerMovimentacao = require('../controller/movimentacao');

class TipoMovimentacaoApi {

    async criarTipoMovimentacao(req, res) {
        const tipoMovimentacao = req.body.tipoMovimentacao;

        try {
            const movimentacaoObj = await controller.criarTipoMovimentacao(tipoMovimentacao);
            return res.status(201).send(movimentacaoObj);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterarTipoMovimentacao(req, res) {
        const { id } = req.params;
        const tipoMovimentacao = req.body.tipoMovimentacao;

        try {
            const movimentacaoObj = await controller.alterarTipoMovimentacao(Number(id), tipoMovimentacao);
            return res.status(200).send(movimentacaoObj);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deletarTipoMovimentacao(req, res) {
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

    async listarTipoMovimentacoes(req, res) {
        try {
            const movimentacaoObjs = await controller.listarTipoMovimentacoes();
            return res.status(200).send(movimentacaoObjs);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async buscarPorId(req, res) {
        const { id } = req.params;

        try {
            const movimentacaoObj = await controller.buscarPorId(Number(id));
            return res.status(200).send(movimentacaoObj);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = new TipoMovimentacaoApi();