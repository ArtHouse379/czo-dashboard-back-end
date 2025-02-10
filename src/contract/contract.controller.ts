import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { ContractDto } from './contract.dto'
import { ContractService } from './contract.service'

@Controller('contracts')
export class ContractController {
	constructor(private readonly contractService: ContractService) {}

	@Get()
	@Auth()
	async getAll() {
		return this.contractService.getAll()
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.contractService.getById(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post(':id')
	@Auth()
	async create(@Body() dto: ContractDto, @Param('id') procurementId: string) {
		return this.contractService.create(dto, procurementId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async update(@Body() dto: ContractDto, @Param('id') contractId: string) {
		return this.contractService.update(dto, contractId)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') contractId: string) {
		return this.contractService.delete(contractId)
	}
}
