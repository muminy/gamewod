import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import { HeartFilledIconPath } from "constants/flaticons";
import style from "./style.module.css";

export default function Cover() {
  return (
    <Flexible className="flex-col mb-10" alignItem="items-center">
      <div className="text-2xl font-semibold text-gray-800">Mümin</div>
      <div className={style.username}>@admin</div>

      <Flexible alignItem="items-center" className="mt-6 space-x-2">
        <Flexible
          alignItem="items-center"
          className=" px-5 py-2 border h-[40px] text-sm rounded-full font-medium leading-[18px]"
        >
          Çaylak
        </Flexible>

        <Flexible
          alignItem="items-center"
          className="space-x-2 border px-5 h-[40px] text-sm rounded-full leading-[18px]"
        >
          <div className="font-medium mt-0.5">10.271</div>
          <div className="text-red-500">
            <Flaticon paths={HeartFilledIconPath} />
          </div>
        </Flexible>
      </Flexible>
    </Flexible>
  );
}
