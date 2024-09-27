/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PORTAL_BASE_URL: string;
  readonly PORTAL_PARAM: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
