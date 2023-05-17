import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Exchange } from './exchange';
import { ExchangeController } from './exchange.controller';
import { ExchangeRepository } from './exchange.repository';
import { ExchangeService } from './exchnage.service';

@Module({
    imports: [SequelizeModule.forFeature([Exchange])],
    exports: [SequelizeModule],
    providers: [ExchangeService,ExchangeRepository],
    controllers: [ExchangeController],

})
export class ExchangeModule {}
