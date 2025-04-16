import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { log } from 'node:console'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { UserDto } from './user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
	@Auth()
	async profile(@CurrentUser('id') id: string) {
		return this.userService.getProfile(id)
	}

	@Get('all')
	async getAll() {
		try {
			log('➡️ Запрос получен')
			const users = await this.userService.getAll()
			log('✔️ Пользователи найдены:', users)
			return users
		} catch (error) {
			error('❌ Ошибка в getAll:', error)
			throw error
		}
	}

	@Get('managers')
	async findManagers() {
		return this.userService.findManagers()
	}

	@Get('admins')
	async findAdmins() {
		return this.userService.findAdmins()
	}

	@Get(':id')
	async getUserById(@Param('id') userId: string) {
		return this.userService.getById(userId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put()
	@Auth()
	async updateProfile(@CurrentUser('id') id: string, @Body() dto: UserDto) {
		return this.userService.update(id, dto)
	}
}
