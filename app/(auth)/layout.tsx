import { ReactNode } from "react"
import { Toaster } from "sonner"
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.actions";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (isUserAuthenticated) redirect('/');
  return (

    <div className="auth-layout">
      <Toaster />
      {children}
    </div>
  )
}

export default AuthLayout
