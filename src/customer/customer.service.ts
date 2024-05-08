import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CustomerDto } from './customer.dto';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) { }

  getAll() {
    return this.prisma.customer.findMany({
      include: {
        procurements: true
      }
    })
  }

  getById(id: string) {
    return this.prisma.customer.findUnique({
      where: {
        id
      },
      include: {
        procurements: true
      }
    })
  }

  getByEmail(email: string) {
    return this.prisma.customer.findMany({
      where: {
        email
      },
      include: {
        procurements: true
      }
    })
  }

  async create(dto: CustomerDto) {
    const customer = {
      email: dto.email,
      name: dto.name || '',
      code: dto.code,
      phone: dto.phone || ''
    }

    return this.prisma.customer.create({
      data: customer
    })
  }

  async update(id: string, dto: CustomerDto) {
    const data = dto

    return this.prisma.customer.update({
      where: {
        id,
      },
      data
    })
  }

  async delete(id: string) {
    return this.prisma.customer.delete({
      where: {
        id: id
      }
    })
  }

}
