import {Controller} from 'skalavel'

export class HomeController extends Controller {
  home() {
    this.htmlRes('<h1>Hello, World!</h1>')
  }
}