/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */
import { Transform } from "class-transformer";
import { IsOptional } from "class-validator";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";


@Entity()
export class Applicant {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  kategorie: string;

  @Column()
  fach: string;

  @Column()
  titel: string;

  @Column()
  beschreibung: string;

  @Column()
  date: Date;

}
