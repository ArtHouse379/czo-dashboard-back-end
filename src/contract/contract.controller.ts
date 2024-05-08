import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ContractService } from './contract.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ContractDto } from './contract.dto';


@Controller('procurement/contracts')
export class ContractController {
  constructor(private readonly contractService: ContractService) { }

  @Get(':id')
  @Auth()
  async getAll(@Param('id') procurementId: string) {
    return this.contractService.getAll(procurementId)
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
  async update(
    @Body() dto: ContractDto,
    @Param('id') contractId: string
  ) {
    return this.contractService.update(dto, contractId)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') contractId: string) {
    return this.contractService.delete(contractId)
  }
}
