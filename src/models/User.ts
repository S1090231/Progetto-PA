import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

export class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;
  public credit!: number;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  credit: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
  },
}, {
  sequelize,
  modelName: 'User',
});
