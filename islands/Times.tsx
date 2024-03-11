import { get_times } from "../utils/adhan.ts";

const Times = () => {
  const times = get_times();

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {Object.keys(times).map((k) => {
        return (
          <div className="flex justify-center items-center gap-4">
            <h3 className="text-xl font-medium">{k.toUpperCase()}</h3>
            <p className="text-3xl font-bold">{times[k].formatedTime}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Times
