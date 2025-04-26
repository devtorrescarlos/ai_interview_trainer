import { ReactNode } from "react"
import { Toaster } from "sonner"

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (

    <div className="auth-layout">
      <Toaster />
      {children}
    </div>
  )
}

export default AuthLayout
