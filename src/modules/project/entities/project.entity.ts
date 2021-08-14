import {
  Table,
  Model,
  Column,
  AutoIncrement,
  PrimaryKey,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import { Bank } from 'src/modules/bank/entities/bank.entity';
import { Customer } from 'src/modules/customer/entities/customer.entity';
import { ProjectBank } from './project.bank.entity';

@Table({
  tableName: 'project',
  timestamps: true,
  paranoid: true,
})
// bankID: number
// name : string

export class Project extends Model<Project> {
  @PrimaryKey
  @AutoIncrement
  @Column
  projectID: number;

  @Column
  name: string;
 
  @HasMany(()=>Customer)
  customers : Customer[]

  @BelongsToMany(()=>Bank,()=>ProjectBank)
  banks : Bank[]

}
