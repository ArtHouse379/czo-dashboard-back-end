import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { JointProcurementService } from './jointProcurement.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { JointProcurementDto } from './jointProcurement.dto';


@Controller('joint-procurements')
export class JointProcurementController {
  constructor(private readonly jointProcurementService: JointProcurementService) { }

  @Get()
  @Auth()
  async getAll() {
    return this.jointProcurementService.getAll()
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: JointProcurementDto) {
    return this.jointProcurementService.create(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(
    @Body() dto: JointProcurementDto,
    @Param('id') jointProcurementId: string
  ) {
    return this.jointProcurementService.update(dto, jointProcurementId)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') jointProcurementId: string) {
    return this.jointProcurementService.delete(jointProcurementId)
  }
}
