export function sag(weight: number, length: number, tension: number) {
  const T = tension * 1000; //tension in newton
  return (weight * (length ^ 2)) / (8 * T);
}

export function sagCalculator(id: number, tension: number) {
  if (id === 66 || id === 662) return sag(3.8612, 245, tension);
  if (id === 132) return sag(15.8858, 350, tension);
  if (id === 400) return sag(19.5902, 450, tension);
  if (id === 500) return sag(19.5902, 450, tension);
  return 0;
}
