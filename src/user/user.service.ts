import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	create(createUserInput: CreateUserInput) {
		return this.prisma.user.create({ data: createUserInput });
	}

	findAll() {
		return this.prisma.user.findMany();
	}

	findOne(id: number) {
		return this.prisma.user.findUniqueOrThrow({ where: { id } });
	}

	update(id: number, updateUserInput: UpdateUserInput) {
		return this.prisma.user.update({ where: { id }, data: updateUserInput });
	}

	remove(id: number) {
		return this.prisma.user.delete({ where: { id } });
	}
}
