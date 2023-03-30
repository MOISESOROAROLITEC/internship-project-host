import { Injectable } from '@nestjs/common';
import { Project } from './interfaces/user.interfaces';

@Injectable()
export class UserService {
	projectPostedByUser = [
		{
			id: 1,
			name: "todo",
			describe: "create todo app",
			like: 0,
			dislike: 0
		},
		{
			id: 2,
			name: "e-vent hub",
			describe: "create e-vent hub app",
			like: 0,
			dislike: 0
		}]

	findProjectsPostedByUser(): Project[] {
		return this.projectPostedByUser;
	}
}
