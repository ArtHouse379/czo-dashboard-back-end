import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class UserDto {
    @IsEmail()
    @IsOptional()
    email?: string

    @IsString()
    @IsOptional()
    name?: string

    @IsString()
    @IsOptional()
    surname?: string

    @IsOptional()
    @MinLength(6, {
        message: 'Password must be at least 6 characters'
    })
    @IsString()
    password: string

    @IsString()
    @IsOptional()
    position?: string

    @IsString()
    @IsOptional()
    role?: string
}