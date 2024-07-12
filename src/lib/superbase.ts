import * as SecureStore from "expo-secure-store";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "";

const CHUNK_SIZE = 2048;

const ExpoSecureStoreAdapter = {
  getItem: async (key: string) => {
    let assembledData = "";
    for (let i = 0; ; i++) {
      const chunk = await SecureStore.getItemAsync(`${key}_chunk_${i}`);
      if (!chunk) break;
      assembledData += chunk;
    }
    return assembledData || null;
  },
  setItem: async (key: string, value: string) => {
    const chunks =
      value.match(new RegExp(".{1," + CHUNK_SIZE + "}", "g")) || [];
    await Promise.all(
      chunks.map((chunk, index) =>
        SecureStore.setItemAsync(`${key}_chunk_${index}`, chunk)
      )
    );
    await SecureStore.setItemAsync(
      `${key}_chunks_count`,
      chunks.length.toString()
    );
  },
  removeItem: async (key: string) => {
    const chunksCountStr = await SecureStore.getItemAsync(
      `${key}_chunks_count`
    );
    const chunksCount = parseInt(chunksCountStr || "0", 10);
    for (let i = 0; i < chunksCount; i++) {
      await SecureStore.deleteItemAsync(`${key}_chunk_${i}`);
    }
    await SecureStore.deleteItemAsync(`${key}_chunks_count`);
  },
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
