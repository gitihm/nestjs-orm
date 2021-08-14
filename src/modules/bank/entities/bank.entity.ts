import {
  Table,
  Model,
  Column,
  AutoIncrement,
  PrimaryKey,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import { Customer } from 'src/modules/customer/entities/customer.entity';
import { ProjectBank } from 'src/modules/project/entities/project.bank.entity';
import { Project } from 'src/modules/project/entities/project.entity';

@Table({
  tableName: 'bank',
  timestamps: true,
  paranoid: true,
})
// projectID: number
// name : string
// address : string
export class Bank extends Model<Bank> {
  @PrimaryKey
  @AutoIncrement
  @Column
  projectID: number;

  @Column
  name: string;

  @Column
  address: string;

  @HasMany(() => Customer)
  customers: Customer[];

  @BelongsToMany(() => Project, () => ProjectBank, 'ProjectID')
  projects: Project[];
}
