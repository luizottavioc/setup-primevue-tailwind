import 'notivue/notification.css'
import 'notivue/animations.css'

import { createNotivue } from 'notivue'

const notify = createNotivue({
  position: 'top-right',
  limit: 4,
  enqueue: true,
  avoidDuplicates: true,
  notifications: {
    global: {
      duration: 8000
    }
  }
})

export default notify
