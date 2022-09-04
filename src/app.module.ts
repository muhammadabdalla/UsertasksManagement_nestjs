import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from './middlewares/logger-middleware';
import { TaskEntity } from './modules/task/task.entity';
import { TaskModule } from './modules/task/task.module';
import { UserEntity } from './modules/user/user.entity';
import { UserModule } from './modules/user/user.module';

@Module({
	imports: [
		UserModule,
		TaskModule,
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: 'postgres',
			database: 'tasks-management-system-iti',
			entities: [UserEntity, TaskEntity],
			synchronize: true
		})
	],
	controllers: [],
	providers: [],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
		  .apply(LoggerMiddleware)
		  .forRoutes('/');
	  }
}
