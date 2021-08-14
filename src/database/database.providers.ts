
import { Sequelize } from 'sequelize-typescript';
import { Bank } from 'src/modules/bank/entities/bank.entity';
import { Customer } from 'src/modules/customer/entities/customer.entity';
import { ProjectBank } from 'src/modules/project/entities/project.bank.entity';
import { Project } from 'src/modules/project/entities/project.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'orm',
        password: '123456',
        database: 'postgres',
      });
      sequelize.addModels([Customer,Project,Bank,ProjectBank]);
      await sequelize.sync();
      return sequelize;
    },
  },
];