import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from '../../post/entities/post.entity';

@ObjectType()
export class User {
	@Field(() => Int)
	id: number;

	@Field(() => String, { nullable: true })
	name: string | null;

	@Field(() => String)
	email: string;

	@Field(() => [Post])
	posts: Post[];
}
