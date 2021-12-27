import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { FUTU_INFO_API_ENDPOINT } from "../constants";

export const useFutuData = (path: string) => {
  return useSWR(`${FUTU_INFO_API_ENDPOINT}${path}`, fetcher);
};
