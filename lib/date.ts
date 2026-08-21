const DAY_LABELS = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
const MONTH_LABELS = [
  "jan", "fev", "mar", "abr", "mai", "jun",
  "jul", "ago", "set", "out", "nov", "dez",
];

export function toDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function todayKey(): string {
  return toDateKey(new Date());
}

export function parseKey(key: string): Date {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function formatDayLabel(key: string): string {
  const date = parseKey(key);
  const today = todayKey();
  const yesterday = toDateKey(new Date(Date.now() - 86400000));
  if (key === today) return "Hoje";
  if (key === yesterday) return "Ontem";
  return `${DAY_LABELS[date.getDay()]}, ${date.getDate()} ${MONTH_LABELS[date.getMonth()]}`;
}

export function shortWeekday(key: string): string {
  return DAY_LABELS[parseKey(key).getDay()];
}

export function lastNDayKeys(n: number, from: Date = new Date()): string[] {
  const keys: string[] = [];
  for (let i = n - 1; i >= 0; i -= 1) {
    keys.push(toDateKey(new Date(from.getTime() - i * 86400000)));
  }
  return keys;
}
