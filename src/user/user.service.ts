import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { AuthDto } from 'src/auth/dto/auth.dto'
import { PrismaService } from 'src/prisma.service'
import { UserDto } from './user.dto'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	getById(id: string) {
		return this.prisma.user.findUnique({
			where: {
				id
			},
			include: {
				tasks: true,
				procurements: true
			}
		})
	}

	getAll() {
		return this.prisma.user.findMany()
	}

	getByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: {
				email
			},
			include: {
				tasks: true,
				procurements: true
			}
		})
	}

	getByName(name: string) {
		return this.prisma.user.findMany({
			where: {
				name
			},
			include: {
				tasks: true,
				procurements: true
			}
		})
	}

	findManagers() {
		return this.prisma.user.findMany({
			where: {
				isManager: true
			},
			include: {
				tasks: true,
				procurements: true
			}
		})
	}

	findAdmins() {
		return this.prisma.user.findMany({
			where: {
				isAdmin: true
			},
			include: {
				tasks: true,
				procurements: true
			}
		})
	}

	async getProfile(id: string) {
		const profile = await this.getById(id)

		const totalTasks = profile.tasks.length
		const completedTasks = await this.prisma.task.count({
			where: {
				userId: id,
				isCompleted: true
			}
		})

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, ...rest } = profile

		return {
			user: rest,
			statistics: [
				{ label: 'Total', value: totalTasks },
				{ label: 'Completed tasks', value: completedTasks }
			]
		}
	}

	async create(dto: AuthDto) {
		const user = {
			email: dto.email,
			name: '',
			surname: '',
			password: await hash(dto.password)
		}

		return this.prisma.user.create({
			data: user
		})
	}

	async update(id: string, dto: UserDto) {
		let data = dto

		if (dto.password) {
			data = { ...dto, password: await hash(dto.password) }
		}

		return this.prisma.user.update({
			where: {
				id
			},
			data,
			select: {
				name: true,
				surname: true,
				email: true
			}
		})
	}
}
