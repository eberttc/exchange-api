import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ExchangeModule } from './exchange/exchange.module';
import { Exchange } from './exchange/exchange';

@Module({
  imports: [ SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'exchange',
    models: [Exchange],
  }), ExchangeModule],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
