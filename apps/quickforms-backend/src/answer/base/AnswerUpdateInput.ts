/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QuestionWhereUniqueInput } from "../../question/base/QuestionWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { SubmissionWhereUniqueInput } from "../../submission/base/SubmissionWhereUniqueInput";

@InputType()
class AnswerUpdateInput {
  @ApiProperty({
    required: false,
    type: () => QuestionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestionWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestionWhereUniqueInput, {
    nullable: true,
  })
  question?: QuestionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SubmissionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubmissionWhereUniqueInput)
  @IsOptional()
  @Field(() => SubmissionWhereUniqueInput, {
    nullable: true,
  })
  submission?: SubmissionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  value?: string;
}

export { AnswerUpdateInput as AnswerUpdateInput };