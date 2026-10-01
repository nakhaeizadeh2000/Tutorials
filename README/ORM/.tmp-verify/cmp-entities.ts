import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: "cmp_users" })
export class CmpUser {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id!: number;

  @Column({ unique: true })
  email!: string;

  @OneToMany(() => CmpPost, (p) => p.author)
  posts!: CmpPost[];
}

@Entity({ name: "cmp_posts" })
export class CmpPost {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id!: number;

  @Column()
  title!: string;

  @ManyToOne(() => CmpUser, (u) => u.posts, { onDelete: "CASCADE" })
  @JoinColumn({ name: "authorId" })
  author!: CmpUser;
}
