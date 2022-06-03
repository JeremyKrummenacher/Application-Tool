/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsString, IsBoolean, IsOptional } from "class-validator";


export class ApplicantDto {
  @IsOptional()
  @IsString()
  id!: string; //| null;

  @IsString()
  kategorie: string;

  @IsString()
  fach: string;

  @IsString()
  titel: string;

  @IsString()
  beschreibung: string;

  //@IsDate()
  @Type(() => Date)
  date: Date;
}
