import { CreatePostInput } from './create-post.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
	@Field(() => Int)
	id: number;

	@Field(() => Boolean, { nullable: true })
	published?: boolean | null;
}
