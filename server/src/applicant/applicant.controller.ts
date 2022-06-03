import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseInterceptors,
  UploadedFile,
  HttpException,
  HttpStatus,
  UploadedFiles,
  Put,
} from "@nestjs/common";
import { Applicant } from "./applicant.entity";
import { ApplicantService } from "./applicant.service";
import { ApplicantDto } from "./dto/applicant.dto";
import { AnyFilesInterceptor } from "@nestjs/platform-express";
@Controller("eintrag")
export class ApplicantController {
  [x: string]: any;
  constructor(
    private readonly applicantService: ApplicantService //private authService: AuthService
  ) {}
  @Post("register")
  @UseInterceptors(AnyFilesInterceptor())
  async push(@Body() body: ApplicantDto) {
    const applicant: Applicant = {
      id: body.id,
      kategorie: body.kategorie,
      fach: body.fach,
      beschreibung: body.beschreibung,
      titel: body.titel,
      date: body.date,
    };
    return await this.applicantService.save(applicant);
  }

  @Get()
  async findAll(): Promise<ApplicantDto[]> {
    const applicants = await this.applicantService.findAll();
    const dtos = applicants.map((s) => {
      const dto: ApplicantDto = {
        id: s.id,
        kategorie: s.kategorie,
        fach: s.fach,
        titel: s.titel,
        beschreibung: s.beschreibung,
        date: s.date,
      };
      return dto;
    });
    return dtos;
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Applicant> {
    return this.applicantService.findById(id);
  }

  @Delete("delete/:userId")
  async deleteApplicant(@Param("userId") userId: string) {
    return await this.applicantService.deleteApplicant(userId);
  }

  @Put("edit/:userId")
  async changeApplicant(@Param("userId") userId: string, @Body() body) {
    return this.applicantService.editApplicant(userId, body);
  }
}
