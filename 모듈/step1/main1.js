import number from "./module1.js";
import { insa, names, hap, Sonata } from "./module1.js";

console.log(number);
console.log(insa);
console.log(names);
console.log(hap);

const myCar = new Sonata(); //인스턴스화
console.log(`내 바퀴수는 ${myCar.wheeINum}`);
myCar.speedUp();
myCar.speedUp();
myCar.speedUp();
console.log(`속도는 ${myCar.speed}`);
