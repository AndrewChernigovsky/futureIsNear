// import { prisma } from '../../../../prisma/prisma'

// export async function POST(req: Request, res: Response) {
// 	const body = await req.json()
// 	const { email, password, name } = body

// 	const user: TUser = await prisma.user.findUnique({
// 		where: {
// 			email,
// 			password,
// 		},
// 	})

// 	return new Response(
// 		JSON.stringify({
// 			msg: user
// 				? 'Добро пожаловать, ' + name
// 				: 'Проверьте правильность введенных данных',
// 			data: user,
// 		}),
// 	)
// }
