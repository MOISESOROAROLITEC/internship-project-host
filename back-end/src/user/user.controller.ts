import { Body, Controller, Get, Post } from '@nestjs/common';
import { Project } from './interfaces/user.interfaces';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) { }
	@Post()
	signin(): any[] {
		return;
	};

	// @Post("/log-in")
	@Get("/log-in")
	login(req = "", rou = ""): any[] {
		console.log(req, rou);
		return [{ name: "soro" }]
	};

	@Get()
	findProjectsPostedByUser(): Project[] {
		return this.userService.findProjectsPostedByUser();
	};
}
