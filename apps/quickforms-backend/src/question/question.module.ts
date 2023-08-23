import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestionModuleBase } from "./base/question.module.base";
import { QuestionService } from "./question.service";
import { QuestionController } from "./question.controller";

@Module({
  imports: [QuestionModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestionController],
  providers: [QuestionService],
  exports: [QuestionService],
})
export class QuestionModule {}
