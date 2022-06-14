export const generateArray = (length: number): number[] => {
  return Array.from({ length }, (_, index) => index);
};

export const generateRandomNumber = (
  min: number = 1,
  max: number = 100
): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
