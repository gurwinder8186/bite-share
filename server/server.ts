import express from 'express'
import * as Path from 'node:path'

import usersRoutes from './routes/users.ts'
import basketsRoutes from './routes/baskets.ts'
import matchesRoutes from './routes/matches.ts'
import messagesRoutes from './routes/messages.ts'
import pointsRoutes from './routes/points.ts'
import notificationsRoutes from './routes/notifications.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/baskets', basketsRoutes)
server.use('/api/v1/messages', messagesRoutes)
server.use('/api/v1/matches', matchesRoutes)
server.use('/api/v1/points', pointsRoutes)
server.use('/api/v1/notifications', notificationsRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('Public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
} else {
  server.use(express.static(Path.resolve('Public')))
}

export default server
