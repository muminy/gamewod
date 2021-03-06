import { useAppSelector } from "store/hooks";

export default function useUserdata() {
  const user = useAppSelector((state) => state.user);

  return { data: user, loading: user.loading };
}
