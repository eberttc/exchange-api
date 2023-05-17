import { Controller, Get, Query } from "@nestjs/common";
import { Exchange } from "./exchange";
import { ExchangeService } from "./exchnage.service";

@Controller('exchanges')
export class ExchangeController {
  constructor(private readonly appService: ExchangeService) {}

  @Get()
  getExchange(@Query('originCurrency') originCurrency :string, @Query('finalCurrency') finalCurrency: string): Promise<Exchange> {
      return this.appService.getExchangeByCurrencies(originCurrency,finalCurrency);
  }
}
