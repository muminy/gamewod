import axios from "axios";
import { ApiInstance, ApiV2 } from "services/apis";

export const fetcher = (url: string) =>
  ApiInstance.get(url).then((response) => response.data);

export const fetcherV2 = (url: string) =>
  ApiV2.get(url).then((response) => response.data);
