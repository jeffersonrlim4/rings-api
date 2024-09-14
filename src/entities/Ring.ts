import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class Ring extends Model {
  public id!: number;
  public nome!: string;
  public poder!: string;
  public portador!: string;
  public forjadoPor!: string;
  public imagem!: string;
}

Ring.init(
  {
    nome: { type: DataTypes.STRING, allowNull: false },
    poder: { type: DataTypes.STRING, allowNull: false },
    portador: { type: DataTypes.STRING, allowNull: false },
    forjadoPor: { type: DataTypes.STRING, allowNull: false },
    imagem: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    tableName: 'rings',
  }
);

export default Ring;
