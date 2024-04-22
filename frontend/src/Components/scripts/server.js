import {Sequelize} from 'sequelize';

const db = new Sequelize('ardika', 'root', 'Lis01ty12!', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;~
