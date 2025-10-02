export const formatDate = (date: Date): string => {
  const pad = (n: number) => String(n).padStart(2, "0");

  const dd = pad(date.getDate());
  const mm = pad(date.getMonth() + 1);
  const yyyy = date.getFullYear();

  const HH = pad(date.getHours());
  const MM = pad(date.getMinutes());

  return `${dd}-${mm}-${yyyy} ${HH}:${MM}`;
};
