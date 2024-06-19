import { Tags } from 'src/tags/entities/tags.entity';
import { Users } from 'src/user/entities/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Income {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  value: number;

  @Column()
  receivingDate: Date;

  @ManyToOne(() => Users, (user) => user.incomes)
  user: Users;

  @ManyToOne(() => Tags, (tag) => tag.incomes)
  tag: Tags;
}
