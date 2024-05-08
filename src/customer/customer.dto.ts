import { IsOptional, IsString } from "class-validator";

export class CustomerDto {
    @IsString()
    @IsOptional()
    name: string

    @IsString()
    @IsOptional()
    email: string

    @IsString()
    @IsOptional()
    code: string

    @IsString()
    @IsOptional()
    phone: string
}