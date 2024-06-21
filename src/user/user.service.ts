import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async addMultiple(cmdChain: { type: string, cmd: string }[]): Promise<{ status: string, dbState: string[] }> {
    const queryRunner = this.userRepository.manager.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      for (const cmd of cmdChain) {
        if (cmd.type === 'sql_safe') {
          await queryRunner.query(cmd.cmd);
        }
      }

      await queryRunner.commitTransaction();
      const users = await this.userRepository.find();
      const dbState = users.map(user => `(${user.uid}, '${user.username}', '${user.city}', ${user.friend ? user.friend.uid : 'NULL'})`);
      return { status: 'ok', dbState };
    } catch (err) {
      await queryRunner.rollbackTransaction();
      const users = await this.userRepository.find();
      const dbState = users.map(user => `(${user.uid}, '${user.username}', '${user.city}', ${user.friend ? user.friend.uid : 'NULL'})`);
      return { status: 'error', dbState };
    } finally {
      await queryRunner.release();
    }
  }
}
