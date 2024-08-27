import { Transform } from "class-transformer";
import { IsBoolean, IsEnum, IsOptional, IsString } from "class-validator";
import { Priority } from "prisma/generated/client";

export class TaskDto {

    @IsString()
    @IsOptional()
    createdAt: Date

    @IsString()
    @IsOptional()
    name: string

    @IsEnum(Priority)
    @IsOptional()
    @Transform(({ value }) => ('' + value).toLowerCase())
    priority: Priority

    @IsString()
    @IsOptional()
    status: string

    @IsString()
    @IsOptional()
    terminationDate: Date

    @IsBoolean()
    @IsOptional()
    isCompleted: boolean

    @IsString()
    @IsOptional()
    notes: string
}