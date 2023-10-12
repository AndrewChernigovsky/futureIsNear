import { prisma } from '../../../../prisma/prisma'

export async function POST(req: Request, res: Response) {
	const body = await req.json()
	const { email, password, name } = body

	const user: TUser = await prisma.user.findUnique({
		where: {
			email,
			password,
		},
	})

	if (user) {
		return new Response(
			JSON.stringify({
				msg: 'Пользователь уже зарегистрирован',
				data: user,
			}),
		)
	} else {
		const user: TUser = await prisma.user.create({
			data: {
				name,
				password,
				email,
				isVerified: false,
				role: 'user',
			},
		})

		return new Response(
			JSON.stringify({ msg: 'Пользователь создан успешно!', data: user }),
		)
	}
}
