import { DataTypes, Model, Sequelize } from 'sequelize';
import { Department } from './Deparment';

export class Student extends Model {
  declare id: number;

  declare firstName: string;

  declare lastName: string;

  declare age: number;

  declare occupation: string;

  declare departmentId: number;
}

export function init(sequelize: Sequelize) {
  Student.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      occupation: {
        type: DataTypes.STRING,
        allowNull: false
      },
      departmentId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: { model: 'departments', key: 'id' }
      }
    },
    {
      sequelize,
      tableName: 'students',
      paranoid: true
    }
  )
  Student.belongsTo(Department, { foreignKey: 'deparmentId' });
}