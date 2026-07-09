import { Test, TestingModule } from '@nestjs/testing';
import { TicTacToeService } from './tictactoe.service';

describe('TicTacToeService', () => {
  let service: TicTacToeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicTacToeService],
    }).compile();

    service = module.get<TicTacToeService>(TicTacToeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should accept a valid move', () => {
    expect(service.makeMove('X', 0)).toBe('Move accepted.');
  });

  it('should not allow a move on a taken position', () => {
    service.makeMove('X', 0);
    expect(service.makeMove('O', 0)).toBe('Position already taken.');
  });

  it('should toggle players after a move', () => {
    service.makeMove('X', 0);
    expect(service.makeMove('O', 1)).toBe('Move accepted.');
  });

  it('should detect a winning condition', () => {
    service.makeMove('X', 0);
    service.makeMove('O', 3);
    service.makeMove('X', 1);
    service.makeMove('O', 4);
    service.makeMove('X', 2);
    expect(service.getStatus().winner).toBe('X');
  });
});
