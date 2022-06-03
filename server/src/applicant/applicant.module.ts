import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Token } from "src/token/token.entity";
import { TokenService } from "src/token/token.service";
import Application from "src/application/application.entity";
import { ApplicationService } from "src/application/application.service";
import { ApplicantController } from "./applicant.controller";
import { Applicant } from "./applicant.entity";
import { ApplicantService } from "./applicant.service";

@Module({
  imports: [TypeOrmModule.forFeature([Applicant, Application, Token])],
  providers: [ApplicantService, ApplicationService, TokenService],
  controllers: [ApplicantController],
  exports: [ApplicantService, ApplicationService, TokenService],
})
export class ApplicantModule {}
