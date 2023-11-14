import { DataTypes, Model, Sequelize } from 'sequelize';

/**
 * Department Model for University Deparments
 */
export class Department extends Model {
  declare id: number;

  declare name: string;

  declare location: number;
}

export function init(sequelize: Sequelize) {
  Department.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize,
      tableName: 'departments'
    }
  )
}