export type IRule =
   | 'required'
   | 'string'
   | 'email'
   | 'number'
   | 'date'
   | 'minLength:8'
   | 'maxlength:20'
   | 'date'
   | 'boolean';

export interface IFieldValidation {
   field: any;
   rules: IRule[];
   fieldName?: string;
}
