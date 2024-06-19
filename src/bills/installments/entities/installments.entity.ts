import { Bills } from 'src/bills/entities/bills.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Installments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column()
  paymentDate: Date

  @Column()
  installmentNumber: number

  @ManyToOne(() => Bills, (bill) => bill.installments)
  bill: Bills
}
