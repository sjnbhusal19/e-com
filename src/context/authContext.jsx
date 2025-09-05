import React from "react"
import supabase from "../../supaBaseClient"


export const SessionContext = React.createContext(null)

export function LoginProvider({children}) {

  const [session, setSession] = React.useState(null)


  React.useEffect(() => {
    const {data: { subscription }} = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          setSession(null)
        } else if (session) {
          setSession(session)
        }
      })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <SessionContext value={{session}}>
      {children}
    </SessionContext>
  )
}