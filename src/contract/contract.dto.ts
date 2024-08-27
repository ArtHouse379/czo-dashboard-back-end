import { IsOptional, IsString } from "class-validator";
import Decimal from "decimal.js";

export class ContractDto {

    @IsString()
    @IsOptional()
    number: string

    @IsString()
    @IsOptional()
    prozorroLink: string

    @IsOptional()
    startValue: Decimal

    @IsOptional()
    currentValue: Decimal

    @IsString()
    @IsOptional()
    signatureDate: Date

    @IsString()
    @IsOptional()
    terminationDate: Date

    @IsString()
    @IsOptional()
    product: string

    @IsString()
    @IsOptional()
    unit: string

    @IsString()
    @IsOptional()
    scope: string

}