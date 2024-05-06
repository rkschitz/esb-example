const database = require('../config/database');

class SubCategoriaMovimentacao {
    constructor() {
        this.model = database.db.define('subCategoriaMovimentacao', {
            idSubCategoriaMovimentacao: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            SubCategoriaMovimentacao: {
                type: database.db.Sequelize.STRING
            },
            idCategoriaMovimentacao: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: 'categoriaMovimentacao',
                    key: 'idCategoriaMovimentacao'
                }
            }
        }); 
    }
}

module.exports = (new SubCategoriaMovimentacao).model;