import { Table, Model, Column, AutoIncrement, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'customer',
  timestamps: true,
  paranoid: true,
})
// customerID: number
// name: string
// projectID: number
// bankID: number
export class Customer extends Model<Customer> {

  @PrimaryKey
  @AutoIncrement
  @Column
  customerID: number;

  @Column
  name : string

}
