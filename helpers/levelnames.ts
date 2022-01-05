export default function userRank(level: number) {
  if (level === 1) {
    return "Çaylak";
  } else if (level === 2) {
    return "Kalfa";
  } else if (level === 3) {
    return "Usta";
  } else {
    return "Woow";
  }
}
