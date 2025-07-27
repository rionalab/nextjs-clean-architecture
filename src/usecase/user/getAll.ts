import { IUserRepository } from '@/src/domain/user/types';

export async function ucGetAllUsers(repo: IUserRepository) {
   return repo.getAll();
}
