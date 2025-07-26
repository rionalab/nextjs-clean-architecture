import { UserRepository } from '@/src/domain/user/repository';

export const deleteuserUseCase = async (repo: UserRepository, id: string) => {
   if (repo.getById(id) === null) {
      throw new Error(`User with id ${id} not found`);
   }

   await repo.delete(id);
};
