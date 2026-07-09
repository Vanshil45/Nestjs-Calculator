import { Controller, Get, Post, Body } from '@nestjs/common';
import { TicTacToeService } from './tictactoe.service';

@Controller('tictactoe')
export class TicTacToeController {
  constructor(private readonly ticTacToeService: TicTacToeService) {}

  @Post('move')
  makeMove(@Body() move: {player: string, position: number}) {
    return this.ticTacToeService.makeMove(move.player, move.position);
  }

  @Get('status')
  getStatus() {
    return this.ticTacToeService.getStatus();
  }
}
