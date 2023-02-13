console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
console.log(hap(1,3)); //import문이 뒤에 있음에도 4출력 - 호이스팅 발생
import { hap } from "./module1.js";
console.log(3);
/* import문도 호이스팅이 일어남 */