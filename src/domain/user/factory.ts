import { Input } from 'antd';
import { IInputCreateUser, IInputUpdateUser } from './types';
import { validateCreateUser, validateUpdateUser } from './validator';

export const cleanCreateUserInput = (input: IInputCreateUser) => {
   validateCreateUser(input);

   return {
      id: '',
      email: input.email,
      name: input.name,
   };
};

export const cleanUpdateUserInput = (input: IInputUpdateUser) => {
   validateUpdateUser(input);

   return {
      id: input.id,
      email: input.email,
      name: input.name,
   };
};
