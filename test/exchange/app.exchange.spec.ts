import { getModelToken } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { Exchange } from 'src/exchange/exchange';
import { ExchangeController } from 'src/exchange/exchange.controller';
import { ExchangeRepository } from 'src/exchange/exchange.repository';
import { ExchangeService } from 'src/exchange/exchnage.service';


describe('EnchangeController', () => {
  let appController: ExchangeController;
  let repository: ExchangeRepository;
  
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ExchangeController],
      providers: [ExchangeService,ExchangeRepository,{ provide: getModelToken(Exchange), useValue: jest.fn() }],
    }).compile();

    repository = app.get<ExchangeRepository>(ExchangeRepository);
    appController = app.get<ExchangeController>(ExchangeController);
  });

  describe('get exchange', () => {
    it('should return the exchange of the day"', async () => {
      const result = {originCurrency: 'USD', finalCurrency: 'PEN', value: 3.90} as Exchange
      jest.spyOn(repository, 'findByCurrencies').mockResolvedValue(result);

      const response: Exchange = await appController.getExchange('USD','PEN')
      expect(response.value).toBe(3.90);
      expect(response.finalCurrency).toBe('PEN');
    });
  });
});
