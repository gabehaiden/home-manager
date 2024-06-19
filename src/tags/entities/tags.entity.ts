import { Bills } from 'src/bills/entities/bills.entity';
import { Home } from 'src/home/entities/home.entity';
import { Income } from 'src/income/entities/income.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  color: string

  @ManyToOne(() => Home, (home) => home.tags)
  home: Home

  @OneToMany(() => Income, (income) => income.tag)
  incomes: Income[]

  @OneToMany(() => Bills, (bill) => bill.tag)
  bills: Bills[]
}
