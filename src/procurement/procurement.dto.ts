import { IsOptional, IsString } from 'class-validator'

export class ProcurementDto {
	@IsOptional()
	expectedValue: number

	@IsOptional()
	resultValue: number

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
