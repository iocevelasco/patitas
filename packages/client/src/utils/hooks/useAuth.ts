import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { googleAuthProvider, auth } from 'src/config/firebase/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useAppDispatch, useAppSelector } from 'src/config/store'
import { selectIsAuth, userAuth } from 'src/config/store/slices/userSlice'
import { routes } from 'src/routes/paths'

export const OriginPathnameKey = 'originPathname'
export type LocationState = {
  state?: {
    [OriginPathnameKey]?: string
  }
}

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const isAuthenticated = useAppSelector(selectIsAuth)
  const { state } = useLocation() as LocationState
  const navigate = useNavigate()

  const actions = useMemo(
    () => ({
      login: async () => {
        try {
          await signInWithPopup(auth, googleAuthProvider).then(() => { 
            dispatch(userAuth({
              isAuth: true,
              name: auth.currentUser?.displayName,
              email: auth.currentUser?.email,
              photoURL: auth.currentUser?.photoURL,
              uid: auth.currentUser?.uid,
              token: auth.currentUser?.refreshToken,
            }))
          })
        } catch (error) {
          console.error(error)
        }
        if (state?.[OriginPathnameKey]) {
          navigate(state[OriginPathnameKey])
        }
      },
      logout: async () => {
        try {
            await signOut(auth).then(() => { 
              dispatch(userAuth({
                isAuth: false,
                name: null,
                email: null,
                photoURL: null,
                uid: null,
                token: null,
              }))
            })
          } catch (error) {
            console.error(error)
          }
        navigate(routes.public.home)
      },
    }),
    [dispatch, navigate, state]
  )

  return [isAuthenticated, actions] as [boolean, typeof actions]
}
