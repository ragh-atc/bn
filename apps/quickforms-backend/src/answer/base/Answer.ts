/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { Question } from "../../question/base/Question";
import { Type } from "class-transformer";
import { Submission } from "../../submission/base/Submission";

@ObjectType()
class Answer {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => Question,
  })
  @ValidateNested()
  @Type(() => Question)
  question?: Question;

  @ApiProperty({
    required: false,
    type: () => Submission,
  })
  @ValidateNested()
  @Type(() => Submission)
  @IsOptional()
  submission?: Submission | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  value!: string;
}

export { Answer as Answer };