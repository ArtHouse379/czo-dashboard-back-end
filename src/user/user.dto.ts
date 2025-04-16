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

	@IsOptional()
	isAdmin: boolean

	@IsOptional()
	isManager: boolean

	@IsOptional()
	isGuest: boolean
}
