import fruit from './foods'
import {choice, remove} from './helpers'

const chosen = choice(fruit);
console.log(`I'd like one ${chosen}, please.`);
console.log(`"Here you go: ${chosen}`);
console.log(`Delicious! May I have another?`);
remove(fruit, chosen);
console.log(`I'm sorry, we're all out. We have ${fruit.length} left.`);