import { Tags } from 'src/tags/entities/tags.entity';
import { Users } from 'src/user/entities/users.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Installments } from '../installments/entities/installments.entity';

@Entity()
export class Bills {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: number;

  @Column()
  value: number;

  @Column()
  installments_number: number;

  @ManyToOne(() => Users, (user) => user.bills)
  user: Users

  @ManyToOne(() => Tags, (tag) => tag.bills)
  tag: Tags;

  @OneToMany(() => Installments, (installment) => installment.bill)
  installments: Installments[]
}
