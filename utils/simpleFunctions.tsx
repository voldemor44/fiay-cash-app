export const areAllValuesNonEmpty = (obj: Record<string, string>): boolean => {
  return Object.values(obj).every((value) => value.trim() !== "");
};
