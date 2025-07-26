import { UserRepository } from '@/src/domain/user/repository';

export async function getAllUsers(repo: UserRepository) {
   return repo.getAll();
}
