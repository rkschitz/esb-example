const Sequelize = require('sequelize');

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.db = new Sequelize(
            'bancoruhan',
            'root',
            '',
            { host: 'localhost', dialect: 'mysql', define: { timestamps: true, freezeTableName: true } }
        )
    }
}

module.exports = new Database();