import { fsEnv } from "@/lib/getEnv";

export const API = fsEnv.googleAiEndpoint + "?key=" + fsEnv.googleAiKey;
