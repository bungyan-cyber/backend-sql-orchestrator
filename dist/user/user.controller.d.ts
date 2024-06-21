import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    addMultiple(body: {
        type: string;
        cmd_chain: {
            type: string;
            cmd: string;
        }[];
    }): Promise<{
        status: string;
        dbState: string[];
    }>;
}
