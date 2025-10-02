export const validateText = (text: string): string | null => {
  const value = text.trim();

  if (!value) return "Enter the text of the task";
  if (value.length < 3) return "Minimum 3 characters";
  if (/^\d+$/.test(value)) return "The task cannot consist only of numbers";

  return null;
};
