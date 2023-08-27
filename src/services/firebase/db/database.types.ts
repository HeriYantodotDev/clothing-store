export interface UserData {
  displayName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  active: true;
}

export interface UserDataOptional {
  displayName?: string;
  email?: string;
  createdAt?: Date;
  updatedAt?: Date;
  active?: true;
}
