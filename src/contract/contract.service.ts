import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ContractDto } from './contract.dto';

@Injectable()
export class ContractService {
  constructor(private prisma: PrismaService) { }

  async getAll(procurementId: string) {
    return this.prisma.contract.findMany({
      where: {
        procurementId
      },
      include: {
        agreements: true
      }
    })
  }

  async create(dto: ContractDto, procurementId: string) {
    return this.prisma.contract.create({
      data: {
        ...dto,
        procurement: {
          connect: {
            id: procurementId,
          },
        },
      }
    });
  }

  async update(dto: ContractDto, contractId: string) {
    return this.prisma.contract.update({
      where: {
        id: contractId
      },
      data: dto
    })
  }

  async delete(contractId: string) {
    return this.prisma.contract.delete({
      where: {
        id: contractId
      }
    })
  }

}
