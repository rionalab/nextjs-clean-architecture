import { IUserRepository } from '@/src/domain/user/types';

export const ucGetUserById = (repo: IUserRepository, id: string) => {
   return repo.getById(id);
};
