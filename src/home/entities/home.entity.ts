import { Tags } from 'src/tags/entities/tags.entity';
import { Users } from 'src/user/entities/users.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Home {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Users, (user) => user.home)
  users: Users[]

  @OneToMany(() => Tags, (tag) => tag.home)
  tags: Tags[]
}
