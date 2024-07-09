export default function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return { year };
}
