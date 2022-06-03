/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Applicant } from './applicant/applicant.entity';
import { ApplicantModule } from './applicant/applicant.module';
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database.module';
import { TokenModule } from './token/token.module';
import Meeting from './meeting/meeting.entity';
import { MeetingModule } from './meeting/meeting.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    ApplicantModule,
    TokenModule,
    TypeOrmModule.forFeature([Applicant, Meeting]),
    ApplicantModule, MeetingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
