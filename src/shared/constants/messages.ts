export const msgIsRequired = (fieldName: string) => {
   return `${fieldName} is required`;
};

export const msgIsInvalid = (fieldName: string) => {
   return `${fieldName} is invalid`;
};

export const msgIsMustString = (fieldName: string) => {
   return `${fieldName} must be a string`;
};

export const msgIsMustNumber = (fieldName: string) => {
   return `${fieldName} is be a number`;
};

export const msgInvalidMinLength = (fieldName: string, minLength: number) => {
   return `${fieldName} must be at least ${minLength} characters long`;
};

export const msgInvalidMaxLength = (fieldName: string, minLength: number) => {
   return `${fieldName} must be at most ${minLength} characters`;
};
