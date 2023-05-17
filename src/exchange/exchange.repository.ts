import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Exchange } from "./exchange";


@Injectable()
export class ExchangeRepository{
  constructor(
    @InjectModel(Exchange)
    private exchangeModel: typeof Exchange,
  ) {}

 
  findByCurrencies(origin: string, final: string): Promise<Exchange> {
    return this.exchangeModel.findOne({
      where: {
        originCurrency: origin,
        finalCurrency: final
      },
    });
  }
}