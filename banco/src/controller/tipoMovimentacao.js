const tipoMovimentacao = require('../model/tipoMovimentacao');

class subCategoriaMovimentacaoController {
    async criarTipoMovimentacao(tipoMovimentacao) {
        if (
            tipoMovimentacao === undefined
        ) {
            throw new Error('Tipo movimentação é obrigatória');
        }   
        const tipoMovimentacaoObj = await tipoMovimentacao.create({ tipoMovimentacao });

        return tipoMovimentacaoObj;
    }

    async buscarPorId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const tipoMovimentacaoObj = await tipoMovimentacao.findByPk(id);

        if (!tipoMovimentacaoObj) {
            throw new Error('Tipo movimentação não encontrado');
        }

        return tipoMovimentacaoObj;
    }

    async alterarTipoMovimentacao(id, tipoMovimentacao) {
        if (
            id === undefined
            || tipoMovimentacao === undefined
        ) {
            throw new Error('Id e tipo movimentação são obrigatórios');
        }

        const tipoMovimentacaoObj = await this.buscarPorId(id);

        tipoMovimentacaoObj.tipoMovimentacao = tipoMovimentacao;

        tipoMovimentacaoObj.save();

        return tipoMovimentacaoObj;
    }

    async deletarTipoMovimentacao(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const tipoMovimentacaoObj = await this.buscarPorId(id);

        tipoMovimentacaoObj.destroy();
    }

    async listarTipoMovimentacoes() {
        return tipoMovimentacao.findAll();
    }
}

module.exports = new subCategoriaMovimentacaoController();