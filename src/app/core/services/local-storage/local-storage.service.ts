import { Injectable, afterNextRender } from '@angular/core';
import type { LocalStorageOptions } from './local-storage.type';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private localStorage!: Storage;

  constructor() {
    afterNextRender(() => {
      this.localStorage = window.localStorage;
    });
  }

  public set(key: string, value: any, options?: LocalStorageOptions): void {
    const valueToSave = this.parsePreference('set', value, options);

    this.localStorage?.setItem(key, valueToSave);
  }

  public get<T>(key: string, options?: LocalStorageOptions): T {
    let value = this.localStorage?.getItem(key);

    if (!value) {
      return null as any;
    }

    value = this.parsePreference('get', value, options);

    return value as T;
  }

  public remove(key: string): void {
    this.localStorage?.removeItem(key);
  }

  private parsePreference(
    type: 'get' | 'set',
    value: any,
    options?: LocalStorageOptions,
  ): any {
    if (options?.asString) {
      return value;
    }

    if (options?.asBoolean) {
      return this.valueAsBoolean(type, value);
    }

    if (options?.asNumber) {
      return this.valueAsNumber(type, value);
    }

    return this.valueAsObject(type, value);
  }

  private valueAsObject(type: 'get' | 'set', value: any): any {
    if (type === 'get') {
      return JSON.parse(value);
    }

    if (type === 'set') {
      return JSON.stringify(value);
    }

    return value;
  }

  private valueAsBoolean(type: 'get' | 'set', value: any): any {
    if (type === 'get') {
      return value === 'true';
    }

    if (type === 'set') {
      return String(value);
    }

    return value;
  }

  private valueAsNumber(type: 'get' | 'set', value: any): any {
    if (type === 'get') {
      return Number(value);
    }

    if (type === 'set') {
      return String(value);
    }

    return Number(value);
  }
}
