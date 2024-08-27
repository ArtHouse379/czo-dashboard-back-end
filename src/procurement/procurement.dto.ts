import { IsOptional, IsString } from "class-validator";
import Decimal from "decimal.js";

export class ProcurementDto {
    
    @IsOptional()
    expectedValue: Decimal
    
    @IsOptional()
    resultValue: Decimal
    
    @IsString()
    @IsOptional()
    announcedAt: Date

    @IsString()
    @IsOptional()
    finishedAt: Date

    @IsString()
    @IsOptional()
    prozorroId: string

    @IsString()
    @IsOptional()
    prozorroLink: string

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

    @IsString()
    @IsOptional()
    customerId: string

    @IsString()
    @IsOptional()
    jointProcurementid: string

}