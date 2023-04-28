import { Model, Column, Table, CreatedAt, UpdatedAt, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
})
export class Property extends Model<Property> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  })
  id!: number;

  @Column
  type!: string;

  @Column
  address!: string;

  @Column
  spaces!: number;

  @Column({
    type: DataType.FLOAT,
  })
  price!: number;

  @Column({
    type: DataType.ARRAY(DataType.JSON),
  })
  pictures!: object;

  @Column({
    type: DataType.INTEGER,
  })
  floors!: number;

  @Column({
    type: DataType.FLOAT,
  })
  covered_area!: number;

  @Column({
    type: DataType.FLOAT,
  })
  bathroom!: number;

  @Column({
    type: DataType.INTEGER,
  })
  bedroom!: number;

  @Column
  furnished!: Boolean;

  @Column
  description!: string;

  @Column
  service!: string;

  @Column
  situation!: string;

  @Column({
    type: DataType.FLOAT,
  })
  total_area!: number;

  @Column({
    type: DataType.FLOAT,
  })
  antiquity!: number;

  @Column
  operation!: string;

  @Column
  owner!: string;
}

// //ejemplo:
// @Table
// export class User extends Model<User> {
//  @Column
//  name!: string;

//  @Column
//  lastName!: string;

//  @CreatedAt
//  @Column
//  createdAt!: Date;

//  @UpdatedAt
//  @Column
//  updatedAt!: Date;
// }
// @Column({//aca irian nuestros atributos}) Asi mismo, tambien dentro de la clase deberiamos generar nuestras relaciones! No en un archivo afuera, te invito a que leas la documentacion de sequelize-typescript para que veas como se hace! Es muy sencillo.
