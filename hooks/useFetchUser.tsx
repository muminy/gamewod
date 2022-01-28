import { fetcherV2 } from "lib/fetcher";
import { find_user } from "services/user/config";
import useSWR from "swr";

interface IProps {
  username: string;
}

export default function useFetchUser(props: IProps) {
  const { data, error } = useSWR(find_user(props.username), fetcherV2);
  return { loading: !error && !data, error, data };
}
