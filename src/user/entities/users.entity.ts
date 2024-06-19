import { Bills } from 'src/bills/entities/bills.entity';
import { Home } from 'src/home/entities/home.entity';
import { Income } from 'src/income/entities/income.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birthDate: Date;

  @Column()
  login: string;

  @Column()
  password_hash: string;

  @ManyToOne(() => Home, (home) => home.users)
  home: Home

  @OneToMany(() => Bills, (bill) => bill.user)
  bills: Bills[]

  @OneToMany(() => Income, (income) => income.user)
  incomes: Income[]

}
