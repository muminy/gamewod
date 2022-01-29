import Link from "next/link";

interface IProps {
  type?: "404" | "500";
}

export default function NotFound(props: IProps) {
  const { type = "404" } = props;
  const is404Error = type === "404";

  return (
    <div className="flex flex-col justify-center mx-auto items-center min-h-[calc(100vh-120px)]">
      <div className="font-bold text-2xl">
        {is404Error ? "Birşey Bulamadık" : "Bir sorunla karşılaştık"}
      </div>

      <p className="text-gray-500 mb-4">
        Sorun olduğunu düşünüyorsanız lütfen bunu bize bildirin.
      </p>

      <Link href={"/tasks"}>
        <a className="bg-primary text-white px-7 py-2 font-medium rounded-full">
          Bildir
        </a>
      </Link>
    </div>
  );
}
