import {Task, log, global} from 'skalavel'

export class PrintPortTask extends Task {
  run() {
    log.info(`The configured port is ${global.fetch('port')}`)
  }
}