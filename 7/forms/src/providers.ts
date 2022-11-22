import { InjectionToken, StaticProvider } from "@angular/core";

export const MyValueInjectionToken = new InjectionToken('MyValueInjectionToken');
export function createMyValueProvider(value: string): StaticProvider {
  return {
    provide: MyValueInjectionToken,
    useValue: value
  };
}