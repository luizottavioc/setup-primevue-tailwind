export interface Notify {
  type: TypeNotify
  icon?: object
  title: string
  message?: string
  url?: string
  msDuration?: number
}

export type TypeNotify = 'error' | 'info' | 'success'

export type NotifyOptions = {
  title: string
  message?: string
  url?: string
  msDuration?: number
}

export interface NotifyPromise {
  resolve(options: NotifyOptions): Notify
  reject: (options: NotifyOptions) => Notify
}
