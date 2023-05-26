import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { PrismaModule } from 'nestjs-prisma';

@Module({
	imports: [PrismaModule],
	providers: [PostResolver, PostService]
})
export class PostModule {}
