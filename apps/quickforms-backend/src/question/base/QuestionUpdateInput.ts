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
import { AnswerUpdateManyWithoutQuestionsInput } from "./AnswerUpdateManyWithoutQuestionsInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { FormWhereUniqueInput } from "../../form/base/FormWhereUniqueInput";
import { EnumQuestionQuestionType } from "./EnumQuestionQuestionType";

@InputType()
class QuestionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AnswerUpdateManyWithoutQuestionsInput,
  })
  @ValidateNested()
  @Type(() => AnswerUpdateManyWithoutQuestionsInput)
  @IsOptional()
  @Field(() => AnswerUpdateManyWithoutQuestionsInput, {
    nullable: true,
  })
  answers?: AnswerUpdateManyWithoutQuestionsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dropdownOptions?: string | null;

  @ApiProperty({
    required: false,
    type: () => FormWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FormWhereUniqueInput)
  @IsOptional()
  @Field(() => FormWhereUniqueInput, {
    nullable: true,
  })
  form?: FormWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  label?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  options?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumQuestionQuestionType,
  })
  @IsEnum(EnumQuestionQuestionType)
  @IsOptional()
  @Field(() => EnumQuestionQuestionType, {
    nullable: true,
  })
  questionType?: "Text" | "Checkbox" | "Radio" | "Dropdown";
}

export { QuestionUpdateInput as QuestionUpdateInput };
