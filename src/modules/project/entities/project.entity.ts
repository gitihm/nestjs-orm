import {
  Table,
  Model,
  Column,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';

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
  bankID: number;

  @Column
  name: string;
 
}
