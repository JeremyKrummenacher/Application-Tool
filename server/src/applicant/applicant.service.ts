import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { from, Observable } from "rxjs";
import { Applicant } from "./applicant.entity";
import { ApplicantDto } from "./dto/applicant.dto";
import { ApplicationService } from "src/application/application.service";

@Injectable()
export class ApplicantService {
  constructor(
    @InjectRepository(Applicant)
    private readonly applicantRepository: Repository<Applicant>,
    private readonly applicationService: ApplicationService
  ) {}

  async create(applicantDto: ApplicantDto) {
    //const salt = await bcrypt.genSalt();
    const applicant = new Applicant();
    applicant.id = applicantDto.id;
    applicant.kategorie = applicantDto.kategorie;
    applicant.fach = applicantDto.fach;
    applicant.beschreibung = applicantDto.beschreibung;
    applicant.date = applicantDto.date;
    applicant.titel = applicantDto.titel;

    return this.applicantRepository.save(applicant);
  }

  findAll(): Promise<Applicant[]> {
    return this.applicantRepository.find({ relations: ["applicantfiles"] });
  }

  findById(userId: string): Promise<any> {
    return this.applicantRepository.findOne({ id: userId });
  }

  save(applicant: Applicant) {
    return this.applicantRepository.save(applicant);
  }

  async deletebyid(userId: string) {
    await this.applicantRepository.delete({ id: userId });
  }

  async deleteApplicant(id: string) {
    const applicant = await this.applicantRepository.findOne({
      where: { userId: id },
      relations: ["applicantfiles"],
    });
    const userID = applicant.id;
    console.log(
      new Date().getTime(),
      " Schnuppi mit der ID ",
      id,
      " wurde gelöscht"
    );
    return userID;
  }

  async editApplicant(userId: string, body) {
    const applicant = await this.applicantRepository.findOne({
      where: { userId: userId },
    });
    applicant.firstname = body.firstname;
    applicant.lastname = body.lastname;
    applicant.email = body.email;
    applicant.closed = body.closed;
    applicant.job = body.job;
    applicant.phonenumber = body.phonenumber;
    let closed1: boolean;
    if (body.closed == "true") {
      closed1 = true;
    } else if (body.closed == "false") {
      closed1 = false;
    }
    applicant.closed = closed1;
    applicant.rating = body.rating;
    applicant.notes = body.notes;
    this.save(applicant);
    console.log("applicant mit userId: " + userId + " wurde bearbeitet");
  }
}
