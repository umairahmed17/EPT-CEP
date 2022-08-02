import * as math from "mathjs";

export function efficiency(
  r20: number,
  xL: number,
  xC: number,
  Pr: number,
  Vr: number,
  pf: number,
  L: number,
  T: number
) {
  if (L <= 80) {
    const t = T + 40;
    const r75 = ((228 + t) / (228 + 20)) * r20;
    const z = math.multiply(
      math.add(r75, math.multiply(xL, math.complex(0, 1))),
      L
    );
    const I = (Pr * 1000000) / (Math.sqrt(3) * Vr * 1000 * pf);
    const theta = -Math.acos(pf);
    const x = I * Math.cos(theta);
    const y = I * Math.sin(theta);
    const Il = math.add(x, math.multiply(y, math.complex(0, 1)));
    const vr = (Vr * 1000) / Math.sqrt(3);
    const vs = math.add(math.multiply(Il, z), vr);

    const Vrnl = math.abs(vs as number);
    const Vrfl = vr;
    const VR = ((Vrnl - Vrfl) / Vrfl) * 100;

    const thetav = math.atan((vs as math.Complex).im / (vs as math.Complex).re);
    const thetai = math.atan((Il as math.Complex).im / (Il as math.Complex).re);
    const pfs = Math.cos(thetav + thetai);

    const PR = 3 * vr * math.abs(Il as number) * pf;
    const PS = 3 * math.abs(vs as number) * math.abs(Il as number) * pfs;

    return (PR / PS) * 100;
  } else if (L > 80 && L <= 240) {
    const t = T + 40;
    const r75 = ((228 + t) / (228 + 20)) * r20;
    const Z = math.multiply(
      math.add(r75, math.multiply(xL, math.complex(0, 1))),
      L
    );
    const y = 1 / xC;
    const Y = math.multiply(
      math.multiply(y, L),
      math.divide(1, math.complex(0, 1))
    );
    const A = math.add(math.divide(math.multiply(Z, Y), 2), 1);
    const D = A;
    const B = Z;
    const C = math.add(
      Y,
      math.divide(math.multiply(math.multiply(Z, Y), Y), 4)
    );
    const I = (Pr * 1000000) / (Math.sqrt(3) * Vr * 1000 * pf);
    const theta = -Math.acos(pf);
    const Ix = I * Math.cos(theta);
    const Iy = I * Math.sin(theta);
    const Ir = math.add(Ix, math.multiply(Iy, math.complex(0, 1))); //recieving end current
    const vr = (Vr * 1000) / Math.sqrt(3); //recieving end voltage line to neutral
    const vs = math.add(math.multiply(A, vr), math.multiply(B, Ir)); //sending end voltage(line to neutral)
    const Is = math.add(math.multiply(C, vr), math.multiply(D, Ir)); //sending end current

    const Vrnl = math.abs(math.divide(vs, A) as number);
    const Vrfl = vr;
    const VR = ((Vrnl - Vrfl) / Vrfl) * 100;

    const thetav = math.atan((vs as math.Complex).im / (vs as math.Complex).re);
    const thetai = math.atan((Is as math.Complex).im / (Is as math.Complex).re);
    const pfs = Math.cos(thetav + thetai);

    const PR = 3 * vr * math.abs(Ir as number) * pf;
    const PS = 3 * math.abs(vs as number) * math.abs(Is as number) * pfs;

    return (PR / PS) * 100;
  } else {
    const t = T + 40;
    const r75 = (228 + t) / (228 + 20);
    const z = math.multiply(
      math.add(r75, math.multiply(xL, math.complex(0, 1))),
      L
    );
    const y = math.multiply(
      math.divide(1, xC),
      math.divide(1, math.complex(0, 1))
    );
    const r = math.sqrt(math.multiply(z, y) as number);

    const Zc = math.sqrt(math.divide(z, y) as number);
    const A = math.cosh(math.multiply(r, L) as number);
    const D = A;
    const B = math.multiply(Zc, math.sinh(math.multiply(r, L) as number));
    const C = math.divide(math.sinh(math.multiply(r, L) as number), Zc);
    const I = (Pr * 1000000) / (Math.sqrt(3) * Vr * 1000 * pf);
    const theta = -Math.acos(pf);
    const Ix = I * Math.cos(theta);
    const Iy = I * Math.sin(theta);
    const Ir = math.add(Ix, math.multiply(Iy, math.complex(0, 1))); //recieving end current
    const vr = (Vr * 1000) / Math.sqrt(3); //recieving end voltage line to neutral
    const vs = math.add(math.multiply(A, vr), math.multiply(B, Ir)); //sending end voltage(line to neutral)
    const Is = math.add(math.multiply(C, vr), math.multiply(D, Ir)); //sending end current

    const Vrnl = math.abs(math.divide(vs, A) as number);
    const Vrfl = vr;
    const VR = ((Vrnl - Vrfl) / Vrfl) * 100;

    const thetav = math.atan((vs as math.Complex).im / (vs as math.Complex).re);
    const thetai = math.atan((Is as math.Complex).im / (Is as math.Complex).re);
    const pfs = Math.cos(thetav + thetai);

    const PR = 3 * vr * math.abs(Ir as number) * pf;
    const PS = 3 * math.abs(vs as number) * math.abs(Is as number) * pfs;

    return (PR / PS) * 100;
  }
}

export function efficiencyCalculator(
  id: number,
  xL: number,
  xC: number,
  Pr: number,
  pf: number,
  L: number,
  T: number
) {
  if (id === 66 || id === 662)
    return efficiency(0.281, xL, xC, Pr, 66, pf, L, T);
  if (id === 132) return efficiency(0.06915, xL, xC, Pr, 132, pf, L, T);
  if (id === 400) return efficiency(0.06915, xL, xC, Pr, 400, pf, L, T);
  if (id === 500) return efficiency(0.06915, xL, xC, Pr, 500, pf, L, T);
  return 0;
}
