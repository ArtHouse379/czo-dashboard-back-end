import { IsOptional, IsString } from "class-validator";

export class JointProcurementDto {
    @IsString()
    @IsOptional()
    expectedValue: string
    
    @IsString()
    @IsOptional()
    resultValue: string
    
    @IsString()
    @IsOptional()
    announcedAt: string

    @IsString()
    @IsOptional()
    finishedAt: string

    @IsString()
    @IsOptional()
    product: string

    @IsString()
    @IsOptional()
    unit: string

    @IsString()
    @IsOptional()
    scope: string

    @IsString()
    @IsOptional()
    status: string

}