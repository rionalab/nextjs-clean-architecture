export interface IUserRepository {
   getById(id: string): Promise<IUser | null>;
   create(user: IUser): Promise<IUser>;
   update(user: IUser): Promise<IUser>;
   delete(id: string): Promise<void>;
   getAll(): Promise<IUser[]>;
}

export interface IUser {
   id: string;
   name: string;
   email: string;
}

export interface IInputCreateUser {
   name: string;
   email: string;
}

export interface IInputUpdateUser extends IInputCreateUser {
   id: string;
}

export interface IUserDTO extends IInputCreateUser {}
