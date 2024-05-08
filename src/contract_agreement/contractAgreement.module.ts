import { Module } from '@nestjs/common';
import { ContractAgreementService } from './contractAgreement.service';
import { ContractAgreementController } from './contractAgreement.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ContractAgreementController],
  providers: [ContractAgreementService, PrismaService],
  exports: [ContractAgreementService]
})
export class ContractAgreementModule {}
