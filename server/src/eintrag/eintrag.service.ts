import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Eintrag } from "./eintrag.entity";
import { EintragDto } from "./dto/eintrag.dto";

@Injectable()
export class EintragService {
  constructor(
    @InjectRepository(Eintrag)
    private readonly eintragRepository: Repository<Eintrag>
  ) {}

  async create(eintragDto: EintragDto) {
    //const salt = await bcrypt.genSalt();
    const eintrag = new Eintrag();
    eintrag.id = eintragDto.id;
    eintrag.kategorie = eintragDto.kategorie;
    eintrag.fach = eintragDto.fach;
    eintrag.beschreibung = eintragDto.beschreibung;
    eintrag.date = eintragDto.date;
    eintrag.titel = eintragDto.titel;

    return this.eintragRepository.save(eintrag);
  }

  findAll(): Promise<Eintrag[]> {
    return this.eintragRepository.find();
  }

  findById(userId: string): Promise<any> {
    return this.eintragRepository.findOne({ id: userId });
  }

  save(eintrag: Eintrag) {
    return this.eintragRepository.save(eintrag);
  }

  async deletebyid(userId: string) {
    await this.eintragRepository.delete({ id: userId });
  }

  async deleteEintrag(id: string) {
    const eintrag = await this.eintragRepository.findOne({
      where: { id: id },
    });
    const userID = eintrag.id;
    console.log(
      new Date().getTime(),
      " Eintrag mit der ID ",
      id,
      " wurde gelöscht"
    );
    return userID;
  }

  async editEintrag(userId: string, body) {
    const eintrag = await this.eintragRepository.findOne({
      where: { userId: userId },
    });
    eintrag.kategorie = body.kategorie;
    eintrag.titel = body.titel;
    eintrag.fach = body.fach;
    eintrag.beschreibung = body.beschreibung;
    eintrag.date = body.date;
    this.save(eintrag);
    console.log("eintrag mit userId: " + userId + " wurde bearbeitet");
  }
}
