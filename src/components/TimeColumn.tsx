const generateTimes = () => {
    const times = [];
    for (let hour = 9; hour <= 21; hour++) {
        const hourFormatted = hour > 12 ? hour - 12 : hour;
        const suffix = hour >= 12 && hour < 24 ? 'PM' : 'AM';
        times.push({
            time: `${hourFormatted}:00`,
            suffix: `${suffix}`,
        })
        if (hour !== 21) {
            times.push({
                time: `${hourFormatted}:30`,
                suffix: `${suffix}`,
            })
        }
    }
    return times;
};


const TimeColumn: React.FC = () => {
    const times = generateTimes();
    return (
        <div className="flex flex-col m-0 p-0 justify-between items-end mr-4 h-[720px]">
            {times.map((time, index) => {
                if (index % 2 === 0) {
                    return (
                        <div key={index} className="flex flex-row justify-center gap-x-1 items-center">
                            <span className="text-black text-sm">
                                {time.time}
                            </span>
                            <span className="text-gray-400 text-xs">
                                {time.suffix}
                            </span>
                        </div>
                    );
                }
                else {
                    return (
                        <div key={index} className="flex flex-row justify-center gap-x-2 items-center">
                            <span className="text-black text-xs">
                                {time.time}
                            </span>
                        </div>
                    )
                }
            })}
        </div>
    );
};

export default TimeColumn;