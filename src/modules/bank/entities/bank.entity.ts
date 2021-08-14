import {
  Table,
  Model,
  Column,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';

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
}
