import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { Eintrag } from "./eintrag.entity";
import { EintragService } from "./eintrag.service";
import { EintragDto } from "./dto/eintrag.dto";
@Controller("eintrag")
export class EintragController {
  [x: string]: any;
  constructor(
    private readonly eintragService: EintragService //private authService: AuthService
  ) {}
  @Post("register")
  async push(@Body() body: EintragDto) {
    const eintrag: Eintrag = {
      id: body.id,
      kategorie: body.kategorie,
      fach: body.fach,
      beschreibung: body.beschreibung,
      titel: body.titel,
      date: body.date,
    };
    return await this.eintragService.save(eintrag);
  }

  @Get()
  async findAll(): Promise<EintragDto[]> {
    const eintrage = await this.eintragService.findAll();
    const dtos = eintrage.map((s) => {
      const dto: EintragDto = {
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
  findOne(@Param("id") id: string): Promise<Eintrag> {
    return this.eintragService.findById(id);
  }

  @Delete("delete/:userId")
  async deleteEintrag(@Param("userId") userId: string) {
    return await this.eintragService.deleteEintrag(userId);
  }

  @Put("edit/:userId")
  async changeEintrag(@Param("userId") userId: string, @Body() body) {
    return this.eintragService.editEintrag(userId, body);
  }
}
