import type {
  NotifyOptions,
  Notify,
  TypeNotify,
  NotifyPromise
} from '@/types/notify'
import { push } from 'notivue'

const TYPE_ERROR: TypeNotify = 'error'
const TYPE_INFO: TypeNotify = 'info'
const TYPE_SUCCESS: TypeNotify = 'success'
const DEFAULT_MS_DURATION: number = 8000

export function successToast(options: NotifyOptions): Notify {
  const { title, message, url, msDuration } = options

  push.success({
    title,
    message,
    duration: msDuration || DEFAULT_MS_DURATION
  })

  return {
    type: TYPE_SUCCESS,
    title,
    message,
    url,
    msDuration
  }
}

export function infoToast(options: NotifyOptions): Notify {
  const { title, message, url, msDuration } = options

  push.info({
    title,
    message,
    duration: msDuration || DEFAULT_MS_DURATION
  })

  return {
    type: TYPE_INFO,
    title,
    message,
    url,
    msDuration
  }
}

export function errorToast(options: NotifyOptions): Notify {
  const { title, message, url, msDuration } = options

  push.error({
    title,
    message,
    duration: msDuration || DEFAULT_MS_DURATION
  })

  return {
    type: TYPE_ERROR,
    title,
    message,
    url,
    msDuration
  }
}

export function promiseToast(loadMessage: string): NotifyPromise {
  const Notify = push.promise(loadMessage)

  const successToast = ({ title, ...options }: NotifyOptions): Notify => {
    Notify.resolve(title)

    return {
      type: TYPE_SUCCESS,
      title,
      ...options
    }
  }

  const errorToast = ({ title, ...options }: NotifyOptions): Notify => {
    Notify.reject(title)

    return {
      type: TYPE_ERROR,
      title,
      ...options
    }
  }

  return {
    resolve: successToast,
    reject: errorToast
  }
}
