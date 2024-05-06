const categoriaMovimentacao = require('../models/categoriaMovimentacao');

class categoriaMovimentacaoController {
    async criarCategoria(categoriaMovimentacao) {
        if (
            categoriaMovimentacao === undefined
        ) {
            throw new Error('Categoria é obrigatória');
        }   
        const categoria = await categoriaMovimentacao.create({ categoriaMovimentacao });

        return categoria;
    }

    async buscarPorId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const categoria = await categoriaMovimentacao.findByPk(id);

        if (!categoria) {
            throw new Error('Categoria não encontrado');
        }

        return categoria;
    }

    async alterarCategoria(id, categoriaMovimentacao) {
        if (
            id === undefined
            || categoriaMovimentacao === undefined
        ) {
            throw new Error('Id e categoria são obrigatórios');
        }

        const categoria = await this.buscarPorId(id);

        categoria.categoriaMovimentacao = categoriaMovimentacao;

        categoria.save();

        return categoria;
    }

    async deletarCategoria(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const categoria = await this.buscarPorId(id);

        categoria.destroy();
    }

    async listarCategorias() {
        return categoriaMovimentacao.findAll();
    }
}

module.exports = new categoriaMovimentacaoController();