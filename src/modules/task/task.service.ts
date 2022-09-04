import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "../base/base.repository";
import { TaskEntity } from "./task.entity";

@Injectable()
export class TaskService {
	constructor(
		@InjectRepository(TaskEntity) private readonly taskRepository: BaseRepository<TaskEntity>
	) { }

	async findAll() {
		const tasks = await this.taskRepository.findAllRecords();
		return tasks;
	}
}