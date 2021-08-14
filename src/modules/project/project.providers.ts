import { Repository } from 'src/constants/repository';
import { Project } from './entities/project.entity';

export const ProjectProvider = [
  {
    provide: Repository.CustomerRepository,
    useValue: Project,
  },
];
