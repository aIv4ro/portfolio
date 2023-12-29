import { ui } from './ui'

export const locales = Object.keys(ui)
export type Locale = keyof typeof ui
type ValueOf<T> = T[keyof T]

export function useTranslation<T extends Locale> (locale: T): (key: keyof typeof ui[T]) => ValueOf<typeof ui[T]> {
  return (key: keyof typeof ui[T]): ValueOf<typeof ui[T]> => {
    return ui[locale][key]
  }
}
