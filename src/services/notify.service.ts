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

export function successNotify(options: NotifyOptions): Notify {
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

export function infoNotify(options: NotifyOptions): Notify {
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

export function errorNotify(options: NotifyOptions): Notify {
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

export function promiseNotify(loadMessage: string): NotifyPromise {
  const Notify = push.promise(loadMessage)

  const successNotify = ({ title, ...options }: NotifyOptions): Notify => {
    Notify.resolve(title)

    return {
      type: TYPE_SUCCESS,
      title,
      ...options
    }
  }

  const errorNotify = ({ title, ...options }: NotifyOptions): Notify => {
    Notify.reject(title)

    return {
      type: TYPE_ERROR,
      title,
      ...options
    }
  }

  return {
    resolve: successNotify,
    reject: errorNotify
  }
}
