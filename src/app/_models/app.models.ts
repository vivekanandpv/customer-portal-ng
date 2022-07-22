export interface ServerResponse<T> {
  responseCode: number;
  message: string;
  body: T;
}

export interface CustomerViewModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  accounts: any[];
  active: boolean;
}

export interface CustomerCreateViewModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface CustomerUpdateViewModel {
  id: number;
  firstName: string;
  lastName: string;
}
