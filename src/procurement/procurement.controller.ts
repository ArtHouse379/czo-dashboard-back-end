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
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { ProcurementDto } from './procurement.dto'
import { ProcurementService } from './procurement.service'

@Controller('procurements')
export class ProcurementController {
	constructor(private readonly procurementService: ProcurementService) {}

	@Get('all')
	@Auth()
	async getAll() {
		return this.procurementService.getAll()
	}

	@Get(':id')
	async getById(@Param('id') id: string) {
		return this.procurementService.getById(id)
	}

	@Get('users-procurements')
	@Auth()
	async getByUserId(@CurrentUser('id') userId: string) {
		return this.procurementService.getByUserId(userId)
	}

	@Get('customers-procurements/:id')
	@Auth()
	async getByCustomerId(@Param('id') customerId: string) {
		return this.procurementService.getByCustomerId(customerId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	async create(@Body() dto: ProcurementDto, @CurrentUser('id') userId: string) {
		return this.procurementService.create(dto, userId)
	}

	@HttpCode(200)
	@Put('connect-to-joint/:id/:joint-id')
	@Auth()
	async connectToJointProcurement(
		@Param('id') procurementId: string,
		@Param('joint-id') jointProcurementid: string
	) {
		return this.procurementService.connectToJointProcurement(
			procurementId,
			jointProcurementid
		)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async update(
		@Body() dto: ProcurementDto,
		@CurrentUser('id') userId: string,
		@Param('id') id: string
	) {
		return this.procurementService.update(dto, id, userId)
	}

	@HttpCode(200)
	@Put('change-manager/:id/:manager-id')
	@Auth()
	async changeManager(
		@Param('id') procurementId: string,
		@Param('manager-id') managerId: string
	) {
		return this.procurementService.changeManager(procurementId, managerId)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.procurementService.delete(id)
	}
}
