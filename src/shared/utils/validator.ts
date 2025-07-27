import {
   msgInvalidMaxLength,
   msgInvalidMinLength,
   msgIsInvalid,
   msgIsMustNumber,
   msgIsMustString,
   msgIsRequired,
} from '../constants/messages';
import { IFieldValidation, IRule } from '../types/validation';

/*
digunakan sebagai helper untuk menjaga 
type-safety pada array rule

tanpa ini pengeeckan rule diperlakukan
seperti string bukan tuple
jadi akan lebih aman
*/
export const rule = <T extends readonly IRule[]>(r: T) => r;

export const validateEmail = (email: string) => {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateFields = (fields: IFieldValidation[]): string[] => {
   const errors: string[] = [];

   fields.forEach(({ field, rules, fieldName }) => {
      const _fieldName = fieldName || 'Field';

      for (const r of rules) {
         if (
            r === 'required' &&
            (field === null || field === undefined || field === '')
         ) {
            errors.push(msgIsRequired(_fieldName));
         }

         if (r === 'string' && typeof field !== 'string') {
            errors.push(msgIsMustString(_fieldName));
         }

         if (r === 'number' && typeof field !== 'string') {
            errors.push(msgIsMustNumber(_fieldName));
         }

         if (r === 'email') {
            if (typeof field !== 'string' || !validateEmail(field)) {
               errors.push(msgIsInvalid(_fieldName));
            }
         }

         if (r.startsWith('minLength:')) {
            const minLength = parseInt(r.split(':')[1], 10);
            if (typeof field === 'string' && field.length < minLength) {
               errors.push(msgInvalidMinLength(_fieldName, minLength));
            }
         }

         if (r.startsWith('maxlength:')) {
            const maxLength = parseInt(r.split(':')[1], 10);
            if (typeof field === 'string' && field.length > maxLength) {
               errors.push(msgInvalidMaxLength(_fieldName, maxLength));
            }
         }
      }
   });

   return errors;
};
