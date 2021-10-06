import {Router, controllerLoader} from 'skalavel'
import {HomeController} from './controllers/HomeController'

const router = new Router()

router.get('/', controllerLoader(HomeController, 'home'))

export default router