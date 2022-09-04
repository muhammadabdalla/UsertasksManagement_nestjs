import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
	@ApiProperty({
		example: 'Laila',
		description: 'The name of the user'
	})
	@IsString({
		message: 'First name must be string',
	})
	@IsNotEmpty()
	first_name: string;

	@ApiProperty({
		example: 'Mohamed',
		description: 'The last name of the user'
	})
	@IsString()
	@IsNotEmpty()
	last_name: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	password: string;

	@ApiProperty()
	@Transform(({ value }) => parseInt(value))
	@IsNumber()
	@IsNotEmpty()
	age: number;

	@ApiProperty()
	@IsString()
	@IsOptional()
	email?: string
}