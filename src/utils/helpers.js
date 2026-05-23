// 1. Format date:
export const formatDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

// 2. Truncate text:
export const truncateText = (text, maxLength) => {
  if (typeof text !== "string" || maxLength <= 0) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
};

// 3. Format salary:
export const formatSalary = (salary) => {
  if (salary === null || salary === undefined || salary === "") {
    return "Not specified";
  }

  const numericSalary = Number(salary);
  if (Number.isNaN(numericSalary) || numericSalary <= 0) {
    return "Not specified";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(numericSalary);
};