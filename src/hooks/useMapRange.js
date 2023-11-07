const useMapRange = (value, x1, y1, x2, y2) => {
  const newValue = ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
  return newValue;
};
export default useMapRange;
