import { Column, Model, Table } from 'sequelize-typescript';

@Table({  
  tableName: "exchanges",
})
export class Exchange extends Model<Exchange> {
  @Column
  originCurrency: string;

  @Column
  finalCurrency: string;

  @Column({ defaultValue: true })
  date: boolean;

  @Column
  value: number;

}