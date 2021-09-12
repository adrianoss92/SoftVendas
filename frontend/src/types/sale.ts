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
  totalElements: number;
  totalPages: number;
  first: Boolean;
  number: number;
  numberOfElements?: number;
  size?: number;
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