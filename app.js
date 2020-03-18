import createError from 'http-errors'
import express from 'express'
// import path from "path";
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'

import v1Router from './routes/v1'

const debug = require('debug')('jobtting-api-express:server')

const app = express()

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

app.use(logger('combined'))
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(helmet())
app.use(compression())
app.use(cors())

app.use('/v1', v1Router)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // console.log(err.message);
  // console.log(err.status);
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json({ message: error.message })
})

module.exports = app
