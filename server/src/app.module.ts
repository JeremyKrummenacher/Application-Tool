import { EintragModule } from "./eintrag/eintrag.module";
import { Eintrag } from "./eintrag/eintrag.entity";
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    EintragModule,
    TypeOrmModule.forFeature([Eintrag]),
    EintragModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
