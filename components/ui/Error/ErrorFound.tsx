import Link from "next/link";
import Flexible from "../Flexible";

export default function ErrorFound() {
  return (
    <Flexible
      alignItem="items-center"
      justifyContent="justify-center"
      className="flex-col dark:bg-dark-border bg-gray-200 bg-opacity-50 p-5 py-10 rounded-md"
    >
      <div className="text-lg font-medium">Bir sorunla karşılaştık</div>
      <p className="text-gray-400 mb-4 text-sm">Lütfen bunu bize bildiriniz</p>
      <Link href={"/tasks"}>
        <a className="bg-blue-600 text-white px-6 py-1.5 rounded-full">
          Bildir
        </a>
      </Link>
    </Flexible>
  );
}
