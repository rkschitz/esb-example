const database = require('../config/database');

class CategoriaMovimentacao {
    constructor() {
        this.model = database.db.define('categoriaMovimentacao', {
            idCategoriaMovimentacao: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            CategoriaMovimentacao: {
                type: database.db.Sequelize.STRING
            }
        }); 
    }
}

module.exports = (new CategoriaMovimentacao).model;