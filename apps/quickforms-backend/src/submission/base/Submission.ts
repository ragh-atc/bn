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
import { Answer } from "../../answer/base/Answer";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { Form } from "../../form/base/Form";

@ObjectType()
class Submission {
  @ApiProperty({
    required: true,
    type: () => [Answer],
  })
  @ValidateNested()
  @Type(() => Answer)
  @IsOptional()
  answers?: Array<Answer>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  createdBy?: User;

  @ApiProperty({
    required: true,
    type: () => Form,
  })
  @ValidateNested()
  @Type(() => Form)
  form?: Form;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
}

export { Submission as Submission };
