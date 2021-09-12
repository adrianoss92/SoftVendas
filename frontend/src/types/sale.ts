import { Seller } from './seller';
export type Sale = {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: Seller;
}

export type SalePage ={

  content?: Sale[];
  last: Boolean;
  totalElements: Number;
  totalPages: Number;
  first: Boolean;
  number: Number;
  numberOfElements?: Number;
  size?: Number;
  empty?: Boolean;

}

export type SaleSum = {
  salerName: string;
  sum: number;
}

export type SaleSuccess = {
  salerName: string;
  visited: number;
  deals: number;
}