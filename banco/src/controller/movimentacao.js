const MovimentacaoModel = require('../model/movimentacao');

class MovimentacaoController {
    async criarMovimentacao(movimentacao) {
        if (
            movimentacao === undefined
        ) {
            throw new Error('Categoria é obrigatória');
        }   
        const movimentacaoobj = await MovimentacaoModel.create({ movimentacao });

        return movimentacaoobj;
    }

    async buscarPorId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const movimentacaoobj = await MovimentacaoModel.findByPk(id);

        if (!movimentacaoobj) {
            throw new Error('Movimentação não encontrado');
        }

        return movimentacaoobj;
    }

    async alterarMovimentacao(id, Descricao, Data, Valor, idTipoMovimentacao, idCategoriaMovimentacao, idSubCategoriaMovimentacao) {
        if (
            id === undefined
            || Descricao === undefined
            || Data === undefined
            || Valor === undefined
            || idTipoMovimentacao === undefined
            || idCategoriaMovimentacao === undefined
            || idSubCategoriaMovimentacao === undefined

        ) {
            throw new Error('Todos os campos são obrigatórios');
        }

        const movimentacaoobj = await this.buscarPorId(id);

        movimentacaoobj.Descricao = Descricao;
        movimentacaoobj.Data = Data;
        movimentacaoobj.Valor = Valor;
        movimentacaoobj.idTipoMovimentacao = idTipoMovimentacao;
        movimentacaoobj.idCategoriaMovimentacao = idCategoriaMovimentacao;
        movimentacaoobj.idSubCategoriaMovimentacao = idSubCategoriaMovimentacao;

        movimentacaoobj.save();

        return movimentacaoobj;
    }

    async deletarMovimentacao(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const movimentacaoobj = await this.buscarPorId(id);

        movimentacaoobj.destroy();
    }

    async listarMovimentacoes() {
        return MovimentacaoModel.findAll();
    }
    
    async buscarPorCategoria(id) {
        return MovimentacaoModel.findAll({
            where: {
                idCategoriaMovimentacao: id
            }
        });
    }

    async buscarPorSubCategoria(id) {
        return MovimentacaoModel.findAll({
            where: {
                idSubCategoriaMovimentacao: id
            }
        });
    }
}

module.exports = new MovimentacaoController();