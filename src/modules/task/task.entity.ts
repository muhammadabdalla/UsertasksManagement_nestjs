import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('task')
export class TaskEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: 'varchar',
		length: 255,
		nullable: false
	})
	title: string;

	@Column({
		type: 'varchar',
		length: 255,
		nullable: true
	})
	description: string;


	@ManyToOne(type => UserEntity, userEntity => userEntity.tasks)
	user: UserEntity;
}