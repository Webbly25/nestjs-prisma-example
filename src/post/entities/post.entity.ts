import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';

@ObjectType()
export class Post {
	@Field(() => Int)
	id: number;

	@Field(() => String)
	title: string;

	@Field(() => String, { nullable: true })
	content: string | null;

	@Field(() => Boolean)
	published: boolean;

	@Field(() => User)
	author: User;
}
