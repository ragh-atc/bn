/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SubmissionWhereUniqueInput } from "./SubmissionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SubmissionUpdateInput } from "./SubmissionUpdateInput";

@ArgsType()
class UpdateSubmissionArgs {
  @ApiProperty({
    required: true,
    type: () => SubmissionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubmissionWhereUniqueInput)
  @Field(() => SubmissionWhereUniqueInput, { nullable: false })
  where!: SubmissionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SubmissionUpdateInput,
  })
  @ValidateNested()
  @Type(() => SubmissionUpdateInput)
  @Field(() => SubmissionUpdateInput, { nullable: false })
  data!: SubmissionUpdateInput;
}

export { UpdateSubmissionArgs as UpdateSubmissionArgs };