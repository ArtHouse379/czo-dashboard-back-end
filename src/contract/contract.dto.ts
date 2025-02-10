import { IsOptional, IsString } from 'class-validator'

export class ContractDto {
	@IsString()
	@IsOptional()
	number: string

	@IsString()
	@IsOptional()
	prozorroLink: string

	@IsOptional()
	startValue: number

	@IsOptional()
	currentValue: number

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
