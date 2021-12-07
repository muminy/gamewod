import Flexible from "../Flexible";
import Link from "next/link";

export interface Props {
  children: React.ReactNode;
  morable?: string;
}

export default function CustomTitle({ children, morable }: Props) {
  return (
    <Flexible
      className="mb-4"
      justifyContent="justify-between"
      alignItem="items-center"
    >
      <h4 className="font-bold text-xl text-black text-opacity-90">
        {children}
      </h4>

      {morable && (
        <Link href={morable}>
          <a className="text-xs font-medium text-gray-400 hover:text-gray-900 duration-300">
            Tümünü Gör
          </a>
        </Link>
      )}
    </Flexible>
  );
}
