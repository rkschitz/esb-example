const subCategoriaMovimentacaoModel = require('../model/subCategoriaMovimentacao');

class subCategoriaMovimentacaoController {
    async criarSubCategoria(subCategoriaMovimentacao) {
        if (
            subCategoriaMovimentacao === undefined
        ) {
            throw new Error('SubCategoria é obrigatória');
        }   
        const subCategoriaObj = await subCategoriaMovimentacaoModel.create({ subCategoriaMovimentacao });

        return subCategoriaObj;
    }

    async buscarPorId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const subCategoriaObj = await subCategoriaMovimentacaoModel.findByPk(id);

        if (!subCategoriaObj) {
            throw new Error('SubCategoria não encontrado');
        }

        return subCategoriaObj;
    }

    async alterarSubCategoria(id, subCategoriaMovimentacao) {
        if (
            id === undefined
            || subCategoriaMovimentacao === undefined
        ) {
            throw new Error('Id e SubCategoria são obrigatórios');
        }

        const subCategoriaObj = await this.buscarPorId(id);

        subCategoriaObj.subCategoriaMovimentacao = subCategoriaMovimentacao;

        subCategoriaObj.save();

        return subCategoriaObj;
    }

    async deletarSubCategoria(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const subCategoriaObj = await this.buscarPorId(id);

        subCategoriaObj.destroy();
    }

    async listarSubCategorias() {
        return subCategoriaMovimentacaoModel.findAll();
    }
}

module.exports = new subCategoriaMovimentacaoController();