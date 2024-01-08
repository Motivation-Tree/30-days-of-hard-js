"use server";

import { fsEnv } from "@/lib/getEnv";
import { redirect } from "next/navigation";

export async function initWordSearch(formData: FormData) {
  const word = formData.get("word")?.toString() || fsEnv.defaultWord;
  return redirect("/?word=" + word);
}
