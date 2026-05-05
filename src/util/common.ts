export const mapColors = (colorNames: string[], colors: string[]) => {
  return colorNames.map((name, index) => ({
    name,
    color: colors[index],
  }));
};