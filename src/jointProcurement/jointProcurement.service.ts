import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { JointProcurementDto } from './jointProcurement.dto';

@Injectable()
export class JointProcurementService {
  constructor(private prisma: PrismaService) { }

  async getAll() {
    return this.prisma.jointProcurement.findMany({
      include: {
        procurements: true
      }
    })
  }

  async create(dto: JointProcurementDto) {
    return this.prisma.jointProcurement.create({ data: dto })
  }

  async update(dto: Partial<JointProcurementDto>, jointProcurementId: string) {
    return this.prisma.jointProcurement.update({
      where: {
        id: jointProcurementId
      },
      data: dto
    })
  }

  async delete(jointProcurementId: string) {
    return this.prisma.jointProcurement.delete({
      where: {
        id: jointProcurementId
      }
    })
  }
}
