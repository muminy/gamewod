import { useAppSelector } from "store/hooks";

export default function useCurrentUser({ username }: { username?: string }) {
  const user = useAppSelector((state) => state.user);
  const isCurrent = user.user ? user.user.username === username : false;
  return [isCurrent];
}
