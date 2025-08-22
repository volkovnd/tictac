export const MAX_MOVES_BEFORE_DELETE = 8 as const

export const WIN_COMBINATIONS: Position[][] = [
  [
    {
      x: 0,
      y: 0,
    },
    {
      x: 1,
      y: 0,
    },
    {
      x: 2,
      y: 0,
    },
  ],
  [
    {
      x: 0,
      y: 1,
    },
    {
      x: 1,
      y: 1,
    },
    {
      x: 2,
      y: 1,
    },
  ],
  [
    {
      x: 0,
      y: 2,
    },
    {
      x: 1,
      y: 2,
    },
    {
      x: 2,
      y: 2,
    },
  ],
  [
    {
      x: 0,
      y: 0,
    },
    {
      x: 0,
      y: 1,
    },
    {
      x: 0,
      y: 2,
    },
  ],
  [
    {
      x: 1,
      y: 0,
    },
    {
      x: 1,
      y: 1,
    },
    {
      x: 1,
      y: 2,
    },
  ],
  [
    {
      x: 2,
      y: 0,
    },
    {
      x: 2,
      y: 1,
    },
    {
      x: 2,
      y: 2,
    },
  ],
  [
    {
      x: 0,
      y: 0,
    },
    {
      x: 1,
      y: 1,
    },
    {
      x: 2,
      y: 2,
    },
  ],
  [
    {
      x: 0,
      y: 2,
    },
    {
      x: 1,
      y: 1,
    },
    {
      x: 2,
      y: 0,
    },
  ],
] as const
