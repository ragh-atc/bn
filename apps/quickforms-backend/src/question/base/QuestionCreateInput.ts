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
import { AnswerCreateNestedManyWithoutQuestionsInput } from "./AnswerCreateNestedManyWithoutQuestionsInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { FormWhereUniqueInput } from "../../form/base/FormWhereUniqueInput";
import { EnumQuestionQuestionType } from "./EnumQuestionQuestionType";

@InputType()
class QuestionCreateInput {
  @ApiProperty({
    required: false,
    type: () => AnswerCreateNestedManyWithoutQuestionsInput,
  })
  @ValidateNested()
  @Type(() => AnswerCreateNestedManyWithoutQuestionsInput)
  @IsOptional()
  @Field(() => AnswerCreateNestedManyWithoutQuestionsInput, {
    nullable: true,
  })
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;

  @ApiProperty({
    required: true,
    type: () => FormWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FormWhereUniqueInput)
  @Field(() => FormWhereUniqueInput)
  form!: FormWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  label!: string;

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
    required: true,
    enum: EnumQuestionQuestionType,
  })
  @IsEnum(EnumQuestionQuestionType)
  @Field(() => EnumQuestionQuestionType)
  questionType!: "Text" | "Checkbox" | "Radio" | "Dropdown";
}

export { QuestionCreateInput as QuestionCreateInput };
