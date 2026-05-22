import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { QuestionModule } from "./modules/Question/question.module";
import { HealthController } from "./common/presentation/health.controller";

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URL || "mongodb://localhost:27017/test",
    ),
    QuestionModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
