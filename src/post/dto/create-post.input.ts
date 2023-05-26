import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
	@Field(() => String)
	title: string;

	@Field(() => String, { nullable: true })
	content?: string | null;

	@Field(() => Int)
	authorId: number;
}
