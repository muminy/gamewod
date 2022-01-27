import Flexible from "components/ui/Flexible";
import useCurrentUser from "hooks/useCurrentUser";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const [current] = useCurrentUser({
    username: router.query.username as string,
  });

  return (
    <Flexible className="flex-col mb-4" alignItem="items-center">
      <div className="rounded-md relative w-full group h-[260px] dark:bg-dark-border bg-gray-100">
        {current && (
          <div className="absolute hidden group-hover:block bottom-0 bg-gray-300 bg-opacity-20 text-sm rounded-md px-3 py-2 font-medium">
            Kapak Fotoğrafı Ekle
          </div>
        )}
      </div>
      <div className="w-[140px] h-[140px] group overflow-hidden relative dark:border-black dark:bg-dark-border bg-gray-200 rounded-full mt-[-100px] border-white border-4">
        {current && (
          <div className="absolute hidden w-full text-center group-hover:block bottom-0 bg-gray-300 bg-opacity-60 text-sm rounded-md px-3 py-2 font-medium">
            Ekle
          </div>
        )}
      </div>
    </Flexible>
  );
}
