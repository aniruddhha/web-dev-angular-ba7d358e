import { a } from './app-01'
import { sayHi } from './app-01'

import Animal from './app-03'
import { an1, an2 } from './app-03'

sayHi()

const an = new Animal(2, 2, 'oop')
an.identify()
an.sleep()
an.run()