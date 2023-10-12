type TUser = {
	id: string
	name: string
	email: string
	isVerified: boolean
	role: string
	password: string
} | null

type TCard = {
	image: string
	title: string
	price: number
}
