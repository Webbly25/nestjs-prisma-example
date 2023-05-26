import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PostService {
	constructor(private readonly prisma: PrismaService) {}

	create(createPostInput: CreatePostInput) {
		return this.prisma.post.create({
			data: {
				title: createPostInput.title,
				content: createPostInput.content,
				author: { connect: { id: createPostInput.authorId } }
			}
		});
	}

	findAll() {
		return this.prisma.post.findMany();
	}

	findOne(id: number) {
		return this.prisma.post.findUniqueOrThrow({ where: { id } });
	}

	update(id: number, updatePostInput: UpdatePostInput) {
		return this.prisma.post.update({ where: { id }, data: updatePostInput });
	}

	remove(id: number) {
		return this.prisma.post.delete({ where: { id } });
	}
}
