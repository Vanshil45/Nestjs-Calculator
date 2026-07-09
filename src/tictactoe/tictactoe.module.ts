import { Module } from '@nestjs/common';
import { TicTacToeService } from './tictactoe.service';
import { TicTacToeController } from './tictactoe.controller';

@Module({
  providers: [TicTacToeService],
  controllers: [TicTacToeController],
})
export class TicTacToeModule {}
