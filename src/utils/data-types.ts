export interface IIngredient {
  _id: string;
  name: string;
  type: 'bun' | 'sauce' | 'main';
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  uuid?: string;
}

export interface IUser {
  email: string;
  name: string;
  password: string;
}

export interface IOrder {
  ingredients: string[];
  _id: string;
  name: string;
  status: string;
  number: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOrderList {
  success: boolean;
  orders: IOrder[];
  total: number;
  totalToday: number;
}
