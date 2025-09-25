import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column('decimal')
  price: number;

  @Column({ nullable: true })
  image_url: string;
}
