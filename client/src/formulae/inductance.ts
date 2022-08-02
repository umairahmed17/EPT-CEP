export function inductiveReactanceFormula(
  Dab: number,
  Dbc: number,
  Dca: number,
  r: number
): number {
  const Deq = Math.pow(Dab * Dbc * Dca, 1 / 3);
  const Ds = r * 0.7788;
  const L = 2e-7 * Math.log(Deq / Ds);
  return 2 * Math.PI * 60 * L * 1000;
}

export function inductiveParallelReactanceFormula(
  Dab: number,
  Dbc: number,
  Dca: number,
  DaC: number,
  DbB: number,
  DcA: number,
  r: number
): number {
  const DaB = Math.sqrt(Math.pow(Dab, 2) + Math.pow(DaC, 2));
  const Dabp = Math.sqrt(Dab * DaB);
  const DbC = DaB;
  const Dbcp = Dabp;
  const Dcap = Math.sqrt(Dca * DcA);
  const Deq = Math.pow(Dabp * Dbcp * Dcap, 1 / 3);

  const DaA = Math.sqrt(Math.pow(Dca, 2) + Math.pow(DcA, 2));
  const GMRaA = Math.sqrt(DaA * r * 0.7788);
  const DcC = DaA;
  const GMRcC = Math.sqrt(DcC * r * 0.7788);
  const GMRbB = Math.sqrt(DbB * r * 0.7788);
  const Dsp = Math.pow(GMRaA * GMRbB * GMRcC, 1 / 3);
  return 2e-7 * Math.log(Deq / Dsp);
}
export function inductiveReactanceCalculator(
  id: number,
  Dab: number,
  Dbc: number,
  Dca: number
) {
  if (id === 66) return inductiveReactanceFormula(Dab, Dbc, Dca, 0.007075);
  if (id === 662)
    return inductiveParallelReactanceFormula(
      Dab,
      Dbc,
      Dca,
      2.13,
      2.13,
      2.13,
      0.007075
    );
  if (id === 132) return inductiveReactanceFormula(Dab, Dbc, Dca, 0.01431);
  if (id === 400) return inductiveReactanceFormula(Dab, Dbc, Dca, 0.01588);
  if (id === 500) return inductiveReactanceFormula(Dab, Dbc, Dca, 0.01588);
  return 0;
}
