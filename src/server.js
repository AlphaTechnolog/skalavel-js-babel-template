import {Server, global, log} from 'skalavel'
import tasks from './tasks'
import router from './router'

const server = new Server()

server.setTasks(tasks)
server.setRouter(router)

server.listen(global.fetch('port'), () => {
  log.success('Server is listening successfully')
})