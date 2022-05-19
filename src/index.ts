import Car from './classes/car';
import Device from './classes/device';

let bmw: Car = new Car('bmw X7', 'bmw');
let device: Device = new Device('iPhone13Pro', 'Apple');

console.log(bmw.getNameAndType());
console.log(device.getNameAndType());
