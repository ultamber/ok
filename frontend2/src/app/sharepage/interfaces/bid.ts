import {Creator} from './creator';
import {Product} from './product';

export interface Bid {
  _id: string;
  amount: number;
  time: Date;
  creator: Creator | string;
  product: Product | string;
}