import { Table, Model, Column, AutoIncrement, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Bank } from 'src/modules/bank/entities/bank.entity';
import { Project } from 'src/modules/project/entities/project.entity';

@Table({
  tableName: 'customer',
  timestamps: true,
  paranoid: true,
})

export class Customer extends Model<Customer> {

  @PrimaryKey
  @AutoIncrement
  @Column
  customerID: number;

  @Column
  name : string

  @ForeignKey(()=>Project)
  @Column
  projectID : number

  @BelongsTo(()=>Project)
  project:Project

  @ForeignKey(()=>Bank)
  @Column
  bankID : number

  @BelongsTo(()=>Bank)
  bank:Bank


}
