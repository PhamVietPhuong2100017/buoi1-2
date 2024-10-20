import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('th_ltweb', 'root', 'mat_khau', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;
