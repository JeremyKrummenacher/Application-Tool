import { Module, Global, DynamicModule } from "@nestjs/common";
import { EnvModule } from "./env.module";
import { EnvService } from "./env.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Applicant } from "./applicant/applicant.entity";
import Application from "./application/application.entity";
import Meeting from "./meeting/meeting.entity";

function DatabaseOrmModule(): DynamicModule {
  const config = new EnvService().read();

  return TypeOrmModule.forRoot({
    type: config.DB_TYPE,
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,

    autoLoadEntities: true,
    synchronize: true,

    entities: [Applicant, Application, Meeting],
  });
}

@Global()
@Module({
  imports: [EnvModule, DatabaseOrmModule()],
})
export class DatabaseModule {}
