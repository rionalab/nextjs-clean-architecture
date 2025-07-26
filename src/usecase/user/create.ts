import { User } from '@/src/domain/user/entitiy';
import { createUser } from '@/src/domain/user/factory';
import { UserRepository } from '@/src/domain/user/repository';
import { CreateUserInput } from '@/src/domain/user/types';

export const createUserUseCase = async (
   repo: UserRepository,
   input: CreateUserInput
) => {
   const user = createUser(input);
   await repo.create(user);

   return user;
};
