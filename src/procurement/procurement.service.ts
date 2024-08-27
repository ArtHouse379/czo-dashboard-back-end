import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProcurementDto } from './procurement.dto';

@Injectable()
export class ProcurementService {
  constructor(private prisma: PrismaService) { }

  async getAll() {
    return this.prisma.procurement.findMany({
      include: {
        contracts: true
      }
    })
  }

  async getByUserId(userId: string) {
    return this.prisma.procurement.findMany({
      where: {
        userId: userId
      },
      include: {
        contracts: true
      }
    })
  }

  async getByCustomerId(customerId: string) {
    return this.prisma.procurement.findMany({
      where: {
        customerId: customerId
      },
      include: {
        contracts: true
      }
    })
  }

  async create(dto: ProcurementDto, userId: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {customerId, jointProcurementid, ...rest} = dto;

    return this.prisma.procurement.create({
      data: {
        ...rest,
        customer: {
          connect: {
            id: customerId
          }
        },
        manager: {
          connect: {
            id: userId,
          },
        }
      }
    })
  }

  async connectToJointProcurement(dto: ProcurementDto, procurementId: string, userId: string) {
    
    const { jointProcurementid } = dto;

    return this.prisma.procurement.update({
        where: {
          userId,
          id: procurementId
        },
        data: {
          jointProcurement: {
            connect: {
              id: jointProcurementid
            }
          }
        }
      })
  }

  async update(dto: Partial<ProcurementDto>, procurementId: string, userId: string) {
    return this.prisma.procurement.update({
      where: {
        userId,
        id: procurementId
      },
      data: dto
    })
  }

  async delete(procurementId: string) {
    return this.prisma.procurement.delete({
      where: {
        id: procurementId
      }
    })
  }
}
