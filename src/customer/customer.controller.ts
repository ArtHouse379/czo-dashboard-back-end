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
import { CustomerDto } from './customer.dto'
import { CustomerService } from './customer.service'

@Controller('customers')
export class CustomerController {
	constructor(private readonly customerService: CustomerService) {}

	@Get()
	@Auth()
	async getAll() {
		return this.customerService.getAll()
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') customerId: string) {
		return this.customerService.getById(customerId)
	}

	@Get('by-email')
	@Auth()
	async getByEmail(email: string) {
		return this.customerService.getByEmail(email)
	}

	@Get('by-code')
	@Auth()
	async getByCode(code: string) {
		return this.customerService.getByCode(code)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	async create(@Body() dto: CustomerDto) {
		return this.customerService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async update(@Body() dto: CustomerDto, @Param('id') id: string) {
		return this.customerService.update(id, dto)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.customerService.delete(id)
	}
}
