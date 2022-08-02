export function groundClearance(voltage: number) {
  return ((voltage - 33) / 33) * 0.3048 + 5.18;
}
