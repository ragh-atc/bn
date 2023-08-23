import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FormModuleBase } from "./base/form.module.base";
import { FormService } from "./form.service";
import { FormController } from "./form.controller";

@Module({
  imports: [FormModuleBase, forwardRef(() => AuthModule)],
  controllers: [FormController],
  providers: [FormService],
  exports: [FormService],
})
export class FormModule {}
