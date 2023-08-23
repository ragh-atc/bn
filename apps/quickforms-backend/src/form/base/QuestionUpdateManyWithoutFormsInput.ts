/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { QuestionWhereUniqueInput } from "../../question/base/QuestionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QuestionUpdateManyWithoutFormsInput {
  @Field(() => [QuestionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestionWhereUniqueInput],
  })
  connect?: Array<QuestionWhereUniqueInput>;

  @Field(() => [QuestionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestionWhereUniqueInput],
  })
  disconnect?: Array<QuestionWhereUniqueInput>;

  @Field(() => [QuestionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestionWhereUniqueInput],
  })
  set?: Array<QuestionWhereUniqueInput>;
}

export { QuestionUpdateManyWithoutFormsInput as QuestionUpdateManyWithoutFormsInput };
