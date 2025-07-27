import { IUserRepository } from '@/src/domain/user/types';

export const ucDeleteUser = async (repo: IUserRepository, id: string) => {
   if (repo.getById(id) === null) {
      throw new Error(`User with id ${id} not found`);
   }

   await repo.delete(id);
};
