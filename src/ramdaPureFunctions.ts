import {
  concat,
  compose,
  join,
  last,
  map,
  prop,
  sortBy,
  toPairs,
  split,
  fromPairs,
  drop,
} from 'ramda';

// Задание 1
export type Team = { name: string; score: number };

export const getTopName = compose(prop('name'), last, sortBy(prop('score')));

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = compose(
  concat('?'),
  join('&'),
  map(join('=')),
  toPairs
);

// Задание 3
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const parseQs = compose(fromPairs, map(split('=')), split('&'), drop(1));
