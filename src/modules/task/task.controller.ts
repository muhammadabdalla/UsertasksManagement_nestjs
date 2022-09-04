import { Controller, Get } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller('tasks')
export class TaskController{
	constructor(
		private readonly taskService:TaskService
	){}

	@Get()
	async findAll(){
		const tasks = await this.taskService.findAll();
		return tasks;
	}
}