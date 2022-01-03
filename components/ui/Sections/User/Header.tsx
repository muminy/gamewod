import Flexible from "components/ui/Flexible";

export default function Header() {
  return (
    <Flexible className="flex-col mb-4" alignItem="items-center">
      <div className="rounded-md w-full h-[260px] bg-gray-100"></div>
      <div className="w-[140px] h-[140px] bg-gray-200 rounded-full mt-[-100px] border-white border-4" />
    </Flexible>
  );
}
