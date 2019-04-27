import Beer from '../models/beer.model';
import BaseCtrl from './base';

export default class BeerCtrl extends BaseCtrl {
  model = Beer;
}