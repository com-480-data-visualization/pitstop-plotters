const startYear = 1958;
const endYear = 2023;

export const years = Array.from({ length: endYear - startYear + 1 }, (v, i) => startYear + i);