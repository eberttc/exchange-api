import { Inject, Injectable } from '@nestjs/common';
import { Exchange } from './exchange';
import { ExchangeRepository } from './exchange.repository';


@Injectable()
export class ExchangeService {
  constructor(
    private readonly repository: ExchangeRepository
  ) {}


  async getExchangeByCurrencies(originCurrency: string,finalCurrency: string) : Promise<Exchange> {
    return this.repository.findByCurrencies(originCurrency,finalCurrency);
 }
}