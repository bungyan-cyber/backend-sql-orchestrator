import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    addMultiple(cmdChain: {
        type: string;
        cmd: string;
    }[]): Promise<{
        status: string;
        dbState: string[];
    }>;
}
