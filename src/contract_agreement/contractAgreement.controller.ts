import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ContractAgreementService } from './contractAgreement.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ContractAgreementDto } from './contractAgreement.dto';


@Controller('contract/agreements')
export class ContractAgreementController {
  constructor(private readonly contractAgreementService: ContractAgreementService) { }

  @Get(':id')
  @Auth()
  async getAll(@Param('id') contractId: string) {
    return this.contractAgreementService.getAll(contractId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post(':id')
  @Auth()
  async create(@Body() dto: ContractAgreementDto, @Param('id') contractId: string) {
    return this.contractAgreementService.create(dto, contractId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(
    @Body() dto: ContractAgreementDto,
    @Param('id') contractAgreementId: string
  ) {
    return this.contractAgreementService.update(dto, contractAgreementId)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') contractAgreementId: string) {
    return this.contractAgreementService.delete(contractAgreementId)
  }
}
