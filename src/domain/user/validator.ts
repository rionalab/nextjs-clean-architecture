import {
   rule,
   validateEmail,
   validateFields,
} from '@/src/shared/utils/validator';
import { IInputCreateUser, IInputUpdateUser } from './types';
import { msgIsInvalid, msgIsRequired } from '@/src/shared/constants/messages';
import { IFieldValidation } from '@/src/shared/types/validation';

const validateDRY = (input: any) => {
   const fieldValidation: IFieldValidation[] = [
      {
         field: input.name,
         rules: rule(['string', 'required']),
         fieldName: 'Name',
      },
      {
         field: input.email,
         rules: rule(['email']),
         fieldName: 'Email',
      },
   ];

   if (input.hasOwn('id')) {
      fieldValidation.push({
         field: input.id,
         rules: rule(['required']),
         fieldName: 'Id',
      });
   }

   const errors = validateFields(fieldValidation);

   if (errors.length > 0) {
      throw new Error(errors.join(', '));
   }
};

export const validateCreateUser = (input: IInputCreateUser) => {
   validateDRY(input);
};

export const validateUpdateUser = (input: IInputUpdateUser) => {
   validateDRY(input);
};
