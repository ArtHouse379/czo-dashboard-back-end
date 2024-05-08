import { Module } from '@nestjs/common';
import { JointProcurementService } from './jointProcurement.service';
import { JointProcurementController } from './jointProcurement.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [JointProcurementController],
  providers: [JointProcurementService, PrismaService],
  exports: [JointProcurementService]
})
export class JointProcurementModule {}
