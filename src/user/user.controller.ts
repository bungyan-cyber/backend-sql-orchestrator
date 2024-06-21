import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('addMultiple')
  async addMultiple(@Body() body: { type: string, cmd_chain: { type: string, cmd: string }[] }) {
    return this.userService.addMultiple(body.cmd_chain);
  }
}
