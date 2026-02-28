/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IS_LOCAL_STORAGE_CACHE_ENABLED: string;
  // Add more env variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
