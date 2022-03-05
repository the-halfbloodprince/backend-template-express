//Importing Routes
import homeRoute from '../routes/home'

export default (app) => {
    app.use('/', homeRoute)
}