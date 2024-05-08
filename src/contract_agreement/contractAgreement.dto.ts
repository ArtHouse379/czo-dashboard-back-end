import { IsOptional, IsString } from "class-validator";

export class ContractAgreementDto {

    @IsString()
    @IsOptional()
    signatureDate: string

    @IsString()
    @IsOptional()
    reason: string

    @IsString()
    @IsOptional()
    changes: string

}