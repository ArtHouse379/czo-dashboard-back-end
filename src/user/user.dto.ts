import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator'

export class UserDto {
	@IsEmail()
	@IsOptional()
	email: string

	@IsString()
	@IsOptional()
	name: string

	@IsString()
	@IsOptional()
	surname: string

	@IsString()
	@IsOptional()
	@MinLength(6, {
		message: 'Password must be at least 6 characters'
	})
	password: string

	@IsString()
	@IsOptional()
	isAdmin: boolean

	@IsString()
	@IsOptional()
	isManager: boolean

	@IsString()
	@IsOptional()
	isGuest: boolean
}
