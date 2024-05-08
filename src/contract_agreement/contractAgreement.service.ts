import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ContractAgreementDto } from './contractAgreement.dto';

@Injectable()
export class ContractAgreementService {
  constructor(private prisma: PrismaService) { }

  async getAll(contractId: string) {
    return this.prisma.contractAgreement.findMany({
      where: {
        contractId
      }
    })
  }

  async create(dto: ContractAgreementDto, contractId: string) {
    return this.prisma.contractAgreement.create({
      data: {
        ...dto,
        contract: {
          connect: {
            id: contractId,
          },
        },
      }
    });
  }

  async update(dto: ContractAgreementDto, contractAgreementId: string) {
    return this.prisma.contractAgreement.update({
      where: {
        id: contractAgreementId
      },
      data: dto
    })
  }

  async delete(contractAgreementId: string) {
    return this.prisma.contractAgreement.delete({
      where: {
        id: contractAgreementId
      }
    })
  }

}
