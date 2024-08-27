import { IsOptional, IsString } from "class-validator";

export class ContractAgreementDto {

    @IsString()
    @IsOptional()
    number: string

    @IsString()
    @IsOptional()
    signatureDate: Date

    @IsString()
    @IsOptional()
    reason: string

    @IsString()
    @IsOptional()
    changes: string

}