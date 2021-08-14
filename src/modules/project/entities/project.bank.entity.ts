import {
  Table,
  Model,
  Column,
  AutoIncrement,
  PrimaryKey,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Bank } from 'src/modules/bank/entities/bank.entity';
import { Customer } from 'src/modules/customer/entities/customer.entity';
import { Project } from './project.entity';

@Table({
  tableName: 'project_bank',
  timestamps: true,
  paranoid: true,
})
//   projectBankID : number
//   projectID: number
//   bankID: number
export class ProjectBank extends Model<ProjectBank> {
  @AutoIncrement
  @PrimaryKey
  @Column
  projectBankID: number;

  @ForeignKey(() => Project)
  @Column
  projectID: number;

  @BelongsTo(() => Project)
  project: Project;

  @ForeignKey(() => Bank)
  @Column
  bankID: number;

  @BelongsTo(() => Bank)
  bank: Bank;
}
