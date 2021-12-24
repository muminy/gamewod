import Flexible from "components/ui/Flexible";
import { FC } from "react";
import style from "./style.module.css";

// ** Team Props
export interface TeamProps {
  logo: string;
  name: string;
}

export default function Poll() {
  return (
    <div className="px-4 py-2 bg-white rounded-md border">
      <div className="font-semibold text-sm mb-2">Pick a winner</div>

      <Flexible>
        <Flexible
          justifyContent="justify-center"
          alignItem="items-center"
          className={style.pick}
        >
          <img src="https://img-cdn.hltv.org/teamlogo/w2EJ4p_IcYGMu0Cs2G4ZUn.png?ixlib=java-2.1.0&w=100&s=e285954f5def874e2ea44d1547339657" />
          <div className={style.tname}>Dignitas</div>
        </Flexible>

        <Flexible
          justifyContent="justify-center"
          alignItem="items-center"
          className={style.pick}
        >
          <img src="https://img-cdn.hltv.org/teamlogo/Y37ZjhQhf-74eg44YCXe_m.png?ixlib=java-2.1.0&w=100&s=07c7f78adddce9861546f8facb29e5ba" />
          <div className={style.tname}>Movistar Riders</div>
        </Flexible>
      </Flexible>
    </div>
  );
}
