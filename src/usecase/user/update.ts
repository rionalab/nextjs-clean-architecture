import { IInputUpdateUser, IUserRepository } from '@/src/domain/user/types';

export const ucUpdateUser = async (
   repo: IUserRepository,
   input: IInputUpdateUser
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
