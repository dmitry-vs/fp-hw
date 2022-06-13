// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  const teamsSorted = teams.sort((a, b) => b.score - a.score);
  return teamsSorted[0].name;
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
  const qs = Object.entries(qsObj)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
  return `?${qs}`;
};

// Задание 3
export const parseQs = (qs: string): QsObj => {
  const params = qs.substring(1).split('&');
  return Object.fromEntries(params.map((item) => item.split('=')));
};
