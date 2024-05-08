import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProcurementService } from './procurement.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { ProcurementDto } from './procurement.dto';


@Controller('procurements')
export class ProcurementController {
  constructor(private readonly procurementService: ProcurementService) { }

  @Get('all')
  @Auth()
  async getAll() {
    return this.procurementService.getAll()
  }

  @Get('users-procurements')
  @Auth()
  async getByUserId(@CurrentUser('id') userId: string) {
    return this.procurementService.getByUserId(userId)
  }

  @Get('customers-procurements')
  @Auth()
  async getByCustomerId( customerId: string) {
    return this.procurementService.getByCustomerId(customerId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: ProcurementDto, @CurrentUser('id') userId: string) {
    return this.procurementService.create(dto, userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id/connect-to-joint')
  @Auth()
  async connectToJointProcurement(
    @Body() dto: ProcurementDto,
    @CurrentUser('id') userId: string,
    @Param('id') procurementId: string
  ) {
    return this.procurementService.connectToJointProcurement(dto, procurementId, userId)
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
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: string) {
    return this.procurementService.delete(id)
  }
}
