export const secondsInDay = 86400000;
export const minutesInDay = 1440;

/**
 * Will return a new Date based on the start of the current week
 */
export function startOfWeek() : Date {
    const date = new Date();
    const diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
}

/**
 * Will return a week of dates starting at a given date and moving on for 6 more days.
 * @param date
 */
export function getAWeekOfDates(date : Date) : Date[] {
    return getASpecifiedAmountOfDatesFromDate(date, 7)
}


/**
 * Will return a week of dates starting at a given date and moving on for total sepcified number of dates.
 * @param date
 */
export function getASpecifiedAmountOfDatesFromDate(date : Date, total : number) : Date[] {
    const weekDates : Date[] = [date];
    for (let i = 1; i < total; i++) {
        const secondsToMoveForward = secondsInDay * i;
        const nextDate = new Date(date.getTime() + secondsToMoveForward);
        weekDates.push(nextDate)
    }
    return weekDates;
}

/**
 * Will return a new date with a specified amount of minutes added to the date
 * @param date
 * @param minutes
 */
export function addMinutes(date: Date, minutes: number) : Date {
    return new Date(date.getTime() + minutes * 60000);
}

/**
 * Will return a new date from a date and make it start at 00:00am
 * @param date
 */
export function makeStartOfDate(date : Date) : Date {
    return new Date(new Date(date).setUTCHours(0,0,0,0));
}

/**
 * Override the time of a specific date based on hours and minutes
 * @param date
 * @param hours
 * @param minutes
 */
export function setDateToSpecificTime(date : Date, hours : number, minutes : number) : Date {
    const localDate = new Date(new Date(date).setHours(hours, minutes, 0, 0));
    const utcDate = Date.UTC(localDate.getUTCFullYear(), localDate.getUTCMonth(), localDate.getUTCDate(), localDate.getUTCHours(), localDate.getUTCMinutes(), localDate.getUTCSeconds());
    return new Date(utcDate);
}

/**
 * Will return a string in two digits long '00' in hours of date supplied
 * @param date
 */
export function getDoubleHourString(date: Date) : string {
    return ('0' + date.getHours()).substr(-2);
}

/**
 * Will return a string in two digits long '00' in minutes of date supplied
 * @param date
 */
export function getDoubleMinutesString(date: Date) : string {
    return ('0' + date.getMinutes()).substr(-2);
}

/**
 * This will return if a date falls between two date times
 * @param dateToCheck
 * @param startDate
 * @param endDate
 */
export function dateIsWithinRange(dateToCheck: Date, startDate: Date, endDate: Date) : boolean {
    return (dateToCheck >= startDate && dateToCheck < endDate);
}