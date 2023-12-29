import { ui } from './ui'

export const locales = Object.keys(ui)
export type Locale = keyof typeof ui

export function useTranslation<T extends Locale> (locale: T): <V extends keyof typeof ui[T]> (key: V) => typeof ui[T][V] {
  return <V extends keyof typeof ui[T]> (key: V): typeof ui[T][V] => {
    return ui[locale][key]
  }
}
