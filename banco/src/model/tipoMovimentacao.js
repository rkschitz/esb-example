const database = require('../config/database');

class TipoMovimentacao {
    constructor() {
        this.model = database.db.define('tipoMovimentacao', {
            idCategoriaMovimentacao: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            TipoMovimentacao: {
                type: database.db.Sequelize.STRING
            }
        });
    }
}

module.exports = (new TipoMovimentacao).model;