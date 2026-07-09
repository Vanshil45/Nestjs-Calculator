import { Injectable } from '@nestjs/common';

@Injectable()
export class TicTacToeService {
  private board: string[];
  private currentPlayer: string;
  private winner: string | null;

  constructor() {
    this.resetGame();
  }

  makeMove(player: string, position: number): string {
    if (this.winner) {
      return 'Game over. Please reset the game.';
    }
    if (this.currentPlayer !== player) {
      return `It's not ${player}'s turn.`;
    }
    if (this.board[position] !== '') {
      return 'Position already taken.';
    }
    this.board[position] = player;
    this.checkWinner();
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    return 'Move accepted.';
  }

  getStatus(): { board: string[], currentPlayer: string, winner: string | null } {
    return {
      board: this.board,
      currentPlayer: this.currentPlayer,
      winner: this.winner,
    };
  }

  private checkWinner() {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        this.winner = this.board[a];
        break;
      }
    }
  }

  private resetGame() {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.currentPlayer = 'X';
    this.winner = null;
  }
}
