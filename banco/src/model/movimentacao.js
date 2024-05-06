
const database = require('../config/database');

class Movimentacao {
    constructor() {
        this.model = database.db.define('movimentacao', {
            idMovimentacao: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            Descricao: {
                type: database.db.Sequelize.STRING
            },
            Data: {
                type: database.db.Sequelize.DATE
            },
            Valor: {
                type: database.db.Sequelize.DECIMAL
            },
            idTipoMovimentacao: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: 'tipoMovimentacao',
                    key: 'idTipoMovimentacao'
                }
            },
            idCategoriaMovimentacao: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: 'categoriaMovimentacao',
                    key: 'idCategoriaMovimentacao'
                }
            },
            idSubCategoriaMovimentacao: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: 'subCategoriaMovimentacao',
                    key: 'idSubCategoriaMovimentacao'
                }
            }
        }); 
    }
}

module.exports = (new Movimentacao).model;