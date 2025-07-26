import { validateEmail } from '@/src/shared/utils/validator';
import { IInputCreateUser, IInputUpdateUser } from './types';

export const validateCreateUser = (input: IInputCreateUser) => {
   const { name, email } = input;

   if (!name) throw new Error('Name is required');
   if (!validateEmail(email)) throw new Error('Invalid email');
};

export const validateUpdateUser = (input: IInputUpdateUser) => {
   const { name, id, email } = input;

   if (!id) throw new Error('Id is required');
   if (!name) throw new Error('Name is required');
   if (!validateEmail(email)) throw new Error('Invalid email');
};
