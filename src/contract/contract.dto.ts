import { IsOptional, IsString } from "class-validator";

export class ContractDto {

    @IsString()
    @IsOptional()
    startValue: string

    @IsString()
    @IsOptional()
    currentValue: string

    @IsString()
    @IsOptional()
    signatureDate: string

    @IsString()
    @IsOptional()
    terminationDate: string

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