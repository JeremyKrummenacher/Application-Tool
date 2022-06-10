import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EintragController } from "./eintrag.controller";
import { Eintrag } from "./eintrag.entity";
import { EintragService } from "./eintrag.service";

@Module({
  imports: [TypeOrmModule.forFeature([Eintrag])],
  providers: [EintragService],
  controllers: [EintragController],
  exports: [EintragService],
})
export class EintragModule {}
