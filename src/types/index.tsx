export type Stats = {
  wins: number;
  ties: number;
  loss: number;
};

export type Player = boolean;

export type Game = {
  turn: Player;
  houses: Player[] | number[];
  gameOver: boolean;
};
