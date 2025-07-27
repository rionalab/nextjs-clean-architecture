import { IUser, IUserRepository } from '@/src/domain/user/types';

const users = new Map<string, IUser>();

export const userService: IUserRepository = {
   create: async (user: IUser) => {
      if (users.has(user.id)) {
         throw new Error(`User with id ${user.id} already exists`);
      }
      users.set(user.id, user);
      return user;
   },
   getById: async (id: string) => {
      const user = users.get(id);
      if (!user) {
         throw new Error(`User with id ${id} not found`);
      }
      return user;
   },
   update: async (user: IUser) => {
      if (!users.has(user.id)) {
         throw new Error(`User with id ${user.id} not found`);
      }
      users.set(user.id, user);
      return user;
   },
   delete: async (id: string) => {
      if (!users.has(id)) {
         throw new Error(`User with id ${id} not found`);
      }
      users.delete(id);
   },
   getAll: async () => {
      return Array.from(users.values());
   },
};
