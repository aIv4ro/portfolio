export interface ProjectI {
	name: string;
	description?: string;
	github: string;
	web?: string;
	image: string;
	tecnologies: Tecnology[];
}

export const enum Tecnology {
	Github = '/github.svg', Angular = '/angular.svg', HTML = '/html.svg', Javascript = '/javascript.svg',
	CSS = '/css.svg', CSharp = '/csharp.svg', Kotlin = '/kotlin.svg', NodeJS = '/nodejs.svg', MongoDB = '/mongodb.svg'
}