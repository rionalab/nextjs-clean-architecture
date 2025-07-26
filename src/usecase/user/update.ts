import { User } from '@/src/domain/user/entitiy';
import { UserRepository } from '@/src/domain/user/repository';
import { UpdateUserInput } from '@/src/domain/user/types';

export const updateUser = async (
   repo: UserRepository,
   input: UpdateUserInput
) => {
   const user = await repo.getById(input.id);
   if (!user) {
      throw new Error(`User with id ${input.id} not found`);
   }

   const updateUser = {
      ...user,
      name: input.name,
      email: input.email,
   };

   await repo.update(updateUser);

   return updateUser;
};
