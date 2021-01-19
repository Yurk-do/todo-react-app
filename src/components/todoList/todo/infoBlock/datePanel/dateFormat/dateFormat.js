export const DateFormat = ({ dateTime }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(dateTime);
  const dateFormat = date.toLocaleString("ru-RU", options);
  return dateFormat;
};
