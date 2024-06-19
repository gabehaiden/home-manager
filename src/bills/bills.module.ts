import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillsController } from './bills.controller';
import { BillsService } from './bills.service';
import { Bills } from './entities/bills.entity';
import { Installments } from './installments/entities/installments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bills, Installments])],
  exports: [TypeOrmModule],
  controllers: [BillsController],
  providers: [BillsService],
})
export class BillsModule { }
