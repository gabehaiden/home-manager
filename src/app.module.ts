import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { BillsModule } from './bills/bills.module';
import { HomeModule } from './home/home.module';
import { IncomeModule } from './income/income.module';
import { TagsModule } from './tags/tags.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.18.85.194',
      port: 5432,
      username: 'postgres',
      password: 'senha1',
      database: 'postgres',
      schema: 'home_bills',
      autoLoadEntities: true,
      logging: true
    }),
    AuthModule,
    UserModule,
    BillsModule,
    IncomeModule,
    TagsModule,
    AuthModule,
    HomeModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
