import { DataTypes, Model, Sequelize } from 'sequelize';

export class User extends Model {
  declare id: number;

  declare name: string;

  declare age: number;

  declare occupation: string;
}

export function init(sequelize: Sequelize): void {
  User.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      }
    },
    {
      sequelize,
      tableName: 'users',
      paranoid: true
    }
  )
}