import axios from "axios";
import { ApiInstance } from "services/apis";

export const fetcher = (url: string) =>
  ApiInstance.get(url).then((response) => response.data);
