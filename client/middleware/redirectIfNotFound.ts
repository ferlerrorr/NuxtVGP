// client/middleware/redirectIfNotFound.ts
import { Middleware } from '@nuxt/types'

const redirectIfNotFound: Middleware = ({ route, redirect }) => {
  // List of valid routes or pages in your application
  const validRoutes: string[] = [
    '/'  // Home route
  ]


  if (!validRoutes.includes(route.path)) {
    return redirect('/') 
  }
}

export default redirectIfNotFound