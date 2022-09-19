const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const getDateTimeString = (date: Date) => {
    const day = date.getDay();
    const month = date.getMonth();
    const hours = date.getHours();
    const ampm = hours > 12 ? "pm" : "am";
    const minutes = `${date.getMinutes()}`.padStart(2, "0");
    return `${DAYS[day]} ${date.getDate()} ${MONTHS[month]} ${date.getFullYear()} at ${hours}:${minutes}${ampm}`;
}

export const getShortDateTimeString = (date: Date) => {
    const month = date.getMonth();
    return `${date.getDate()} ${MONTHS[month]} ${date.getFullYear()}`;
}

export default getDateTimeString;