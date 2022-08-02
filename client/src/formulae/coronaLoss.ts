export function coronaLoss(
  Dab: number,
  Dbc: number,
  Dca: number,
  ad: number,
  r: number,
  Vr: number,
  L: number
) {
  const Deq = Math.pow(Dab * Dbc * Dca, 1 / 3);
  const D = Deq * 100;
  const R = r * 100;
  const Eo = 0.87 * 21.2 * ad * R * Math.log(D / R); //disruptive critical voltage per phase
  const En = Vr * (1 / Math.sqrt(3)); //per phase rms value
  const ratio = En / Eo;
  let F, covidloss;
  if (ratio > 1.8) {
    covidloss =
      (244 / ad) * (60 + 25) * Math.pow(En - Eo, 2) * Math.sqrt(R / D) * 1e-5; //kW/km/phase}
  } else {
    if (ratio <= 0.6) F = 0.012;
    else if (ratio > 0.6 && ratio <= 0.8) F = 0.018;
    else if (ratio < 0.8 && ratio <= 1) F = 0.05;
    else if (ratio > 1 && ratio <= 1.2) F = 0.08;
    else if (ratio > 1.2 && ratio <= 1.4) F = 0.3;
    else if (ratio > 1.4 && ratio <= 1.6) F = 1;
    else if (ratio > 1.6 && ratio <= 1.8) F = 3.5;
    else if (ratio > 1.8 && ratio <= 2) F = 6;
    else F = 8;

    covidloss =
      (21e-6 * 60 * Math.pow(En, 2) * F) / Math.pow(Math.log10(D / R), 2);
  }
  return covidloss * 3 * L;
}

export function coronaLossCalculator(
  id: number,
  Dab: number,
  Dbc: number,
  Dca: number,
  airDensity: number,
  length: number
) {
  if (id === 66 || id === 662)
    return coronaLoss(Dab, Dbc, Dca, airDensity, 0.007075, 66, length);
  if (id === 132)
    return coronaLoss(Dab, Dbc, Dca, airDensity, 0.01431, 132, length);
  if (id === 400)
    return coronaLoss(Dab, Dbc, Dca, airDensity, 0.01431, 400, length);
  if (id === 500)
    return coronaLoss(Dab, Dbc, Dca, airDensity, 0.01431, 500, length);
  return 0;
}
