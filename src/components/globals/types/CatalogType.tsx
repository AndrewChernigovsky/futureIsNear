export type categoryT = {
	name?: string
	sizes?: string
	color?: string
	desc?: string
	weight?: string
	cost?: number
	path?: string
	id?: string
	image?: (size: number, color: string) => React.JSX.Element
	resizes?: string
	rate?: number
}
export type categoriesT = {
	name?: string
	sizes?: string
	color?: string
	desc?: string
	weight?: string
	cost?: number
	path?: string
	id?: string
	image?: (size: number, color: string) => React.JSX.Element
	resizes?: string
	rate?: number
}[]
