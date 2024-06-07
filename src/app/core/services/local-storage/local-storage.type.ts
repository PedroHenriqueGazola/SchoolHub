export interface LocalStorageItem {
  key: string;
  value: string | null;
}

export interface LocalStorageOptions {
  asString?: boolean;
  asBoolean?: boolean;
  asNumber?: boolean;
}
