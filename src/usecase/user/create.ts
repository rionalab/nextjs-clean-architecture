import { cleanCreateUserInput } from '@/src/domain/user/factory';
import { IInputCreateUser, IUserRepository } from '@/src/domain/user/types';

export const ucCreateUser = async (
   repo: IUserRepository,
   input: IInputCreateUser
) => {
   const user = cleanCreateUserInput(input);
   await repo.create(user);

   return user;
};
