import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const toastify = (msg) => {
  toast.success(msg)
}

export const toastifyError = (msg) => {
  toast.error(msg)
}
