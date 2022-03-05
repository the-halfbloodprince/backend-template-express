//Import dependencies
import express from 'express'

//Local dependencies
import routeInitializer from './initialization/routes'

//Initialise app
const app = express()
const port = process.env.PORT || 8000

//Initialize routes
routeInitializer(app)

//App Listening
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})