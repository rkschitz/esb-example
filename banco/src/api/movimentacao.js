const controller = require('../controller/movimentacao');

class MovimentacaoApi {

    async criarMovimentacao(req, res) {
        const movimentacao = req.body.movimentacao;

        try {
            const movimentacaoObj = await controller.criarMovimentacao(movimentacao);
            return res.status(201).send(movimentacaoObj);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterarMovimentacao(req, res) {
        const { id } = req.params;
        const movimentacao = req.body.movimentacao;

        try {
            const movimentacaoObj = await controller.alterarMovimentacao(Number(id), movimentacao);
            return res.status(200).send(movimentacaoObj);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deletarMovimentacao(req, res) {
        const { id } = req.params;

        try {
            await controller.deletarMovimentacao(Number(id));
            return res.status(204).send({ message: 'Movimentacao deletada com sucesso'});
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listarMovimentacoes(req, res) {
        try {
            const movimentacaoObj = await controller.listarMovimentacoes();
            return res.status(200).send(movimentacaoObj);
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

module.exports = new MovimentacaoApi();