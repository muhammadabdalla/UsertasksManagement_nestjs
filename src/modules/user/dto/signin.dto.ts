import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
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
		example: '12345',
		description: 'Password of the user'
	})
	@IsString()
	@IsNotEmpty()
	password: string;
}