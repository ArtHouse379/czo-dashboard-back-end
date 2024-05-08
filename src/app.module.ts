import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { CustomerModule } from './customer/customer.module';
import { ProcurementModule } from './procurement/procurement.module';
import { ContractModule } from './contract/contract.module';
import { ContractAgreementModule } from './contract_agreement/contractAgreement.module';
import { JointProcurementModule } from './jointProcurement/jointProcurement.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    AuthModule, 
    UserModule, 
    TaskModule, 
    CustomerModule, 
    ProcurementModule,
    ContractModule,
    ContractAgreementModule,
    JointProcurementModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
