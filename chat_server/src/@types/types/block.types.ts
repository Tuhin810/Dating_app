// @types/types/block.types.ts
export interface IBlock {
    user: string;       // The user who is blocking
    blockedto: string;  // The user being blocked
    roomId: string;     // Room ID where the block applies
  }
  