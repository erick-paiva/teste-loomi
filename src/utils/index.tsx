export const removeStrings = (word: string | number) => {
  return +String(word).replace(/[^\d]+/g, "");
};
