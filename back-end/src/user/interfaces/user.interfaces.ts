export interface Project {
	id: number;
	name: string;
	descibe?: string;
	comment?: object[];
	price?: number;
	like: number;
	dislike: number;
}
export interface User {
	id: string;
	name: string;
	lastname: string;
	email: string;
	contact: string;
	password: string;
};