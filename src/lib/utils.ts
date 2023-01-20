export const parseDate = (d: Date) : string => {
    const date = new Date(d);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return `${day.toString().padStart(2, '0')} ${monthNames[month]} ${year} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}