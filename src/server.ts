import { app } from './app'
import { env } from './env'

const port = env.PORT
const host = '0.0.0.0'

app.listen({ port, host }).then((fullPath) => {
  console.log(`🚀HTTP Server Running on ${port} and path => ${fullPath}`)
})
