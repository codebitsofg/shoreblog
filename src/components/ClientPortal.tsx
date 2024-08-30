import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
type ClientPortalInterface = {
  children: React.ReactNode
  show?: boolean
  onClose?: () => void
  selector: string
}

const ClientPortal = ({ children, selector, show }: ClientPortalInterface) => {
  const ref = useRef<Element | null>(null)
  const [domReady, setdomReady] = useState(false)
  useEffect(() => {
    const element = document.getElementById(selector)
    setdomReady(true)
    ref.current = element
  }, [selector])
  return show && ref.current && domReady
    ? createPortal(children, ref.current)
    : null
}
export default ClientPortal
