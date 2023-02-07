const formatTime = (time: number) => {
    const timeString = new Date(time);
    const [hour, minutes, seconds] = [
        timeString.getHours(),
        timeString.getMinutes(),
        timeString.getSeconds(),
    ];

    return `${hour}:${minutes}:${seconds}`;
};

export default formatTime;
