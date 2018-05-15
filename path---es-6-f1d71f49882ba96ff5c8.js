webpackJsonp([0xece04982e217],{786:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Block scoping"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Let"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"function fn () {\n  let x = 0\n  if (true) {\n    let x = 1 // only inside this `if`\n  }\n}\n"}]}]},{type:"comment",value:' {data-line="2,4"} '},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Const"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const a = 1\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"let"}]},{type:"text",value:" is the new "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"var"}]},{type:"text",value:". Constants work just like "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"let"}]},{type:"text",value:", but can't be reassigned.\nSee: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#let--const"},children:[{type:"text",value:"Let and const"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Backtick strings"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Interpolation"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const message = `Hello ${name}`\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Multiline strings"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const str = `\nhello\nworld\n`\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Templates and multiline strings.\nSee: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#template-strings"},children:[{type:"text",value:"Template strings"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Binary and octal literals"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"let bin = 0b1010010\nlet oct = 0o755\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#binary-and-octal-literals"},children:[{type:"text",value:"Binary and octal literals"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"New methods"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"New string methods"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:'"hello".repeat(3)\n"hello".includes("ll")\n"hello".startsWith("he")\n"\\u1E9B\\u0323".normalize("NFC")\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#math--number--string--object-apis"},children:[{type:"text",value:"New methods"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Classes"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"class Circle extends Shape {\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Constructor"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  constructor (radius) {\n    this.radius = radius\n  }\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Methods"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  getArea () {\n    return Math.PI * 2 * this.radius\n  }\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Calling superclass methods"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  expand (n) {\n    return super.expand(n) * Math.PI\n  }\n"}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Static methods"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  static createFromDiameter(diameter) {\n    return new Circle(diameter / 2)\n  }\n}\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Syntactic sugar for prototypes.\nSee: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#classes"},children:[{type:"text",value:"Classes"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Exponent operator"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const byte = 2 ** 8\n// Same as: Math.pow(2, 8)\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Promises"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Making promises"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"new Promise((resolve, reject) => {\n  if (ok) { resolve(result) }\n  else { reject(error) }\n})\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"For asynchronous programming.\nSee: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#promises"},children:[{type:"text",value:"Promises"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Using promises"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"promise\n  .then((result) => { ··· })\n  .catch((error) => { ··· })\n"}]}]},{type:"comment",value:' {data-line="2,3"} '},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Promise functions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"Promise.all(···)\nPromise.race(···)\nPromise.reject(···)\nPromise.resolve(···)\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Async-await"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"async function run () {\n  const user = await getUser()\n  const tweets = await getTweets(user)\n  return [user, tweets]\n}\n"}]}]},{type:"comment",value:' {data-line="2,3"} '},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"async"}]},{type:"text",value:" functions are another way of using functions."}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"},children:[{type:"text",value:"async function"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Destructuring"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Destructuring assignment"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Arrays"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const [first, last] = ['Nikola', 'Tesla']\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Objects"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"let {title, author} = {\n  title: 'The Silkworm',\n  author: 'R. Galbraith'\n}\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Supports for matching arrays and objects.\nSee: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#destructuring"},children:[{type:"text",value:"Destructuring"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Default values"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const scores = [22, 33]\nconst [math = 50, sci = 50, arts = 50] = scores\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Result:\n// math === 22, sci === 33, arts === 50\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Default values can be assigned while destructuring arrays or objects."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Function arguments"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"function greet({ name, greeting }) {\n  console.log(`${greeting}, ${name}!`)\n}\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"greet({ name: 'Larry', greeting: 'Ahoy' })\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Destructuring of objects and arrays can be also be done in function arguments."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Default values"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"function greet({ name = 'Rauno' } = {}) {\n  console.log(`Hi ${name}!`);\n}\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"greet() // Hi Rauno!\ngreet({ name: 'Larry' }) // Hi Larry!\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Reassigning keys"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"function printCoordinates({ left: x, top: y }) {\n  console.log(`x: ${x}, y: ${y}`)\n}\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"printCoordinates({ left: 25, top: 90 })\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This example assigns "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"x"}]},{type:"text",value:" to the value of the "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"left"}]},{type:"text",value:" key."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Loops"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"for (let {title, artist} of songs) {\n  ···\n}\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The assignment expressions work in loops, too."}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Spread"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Object spread"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"with Object spread"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const options = {\n  ...defaults,\n  visible: true\n}\n"}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"without Object spread"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const options = Object.assign(\n  {}, defaults,\n  { visible: true })\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The Object spread operator lets you build new objects from other objects."}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator"},children:[{type:"text",value:"Object spread"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Array spread"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"with Array spread"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const users = [\n  ...admins,\n  ...editors,\n  'rstacruz'\n]\n"}]}]},{type:"comment",value:' {data-line="2,3"} '},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"without Array spread"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const users = admins\n  .concat(editors)\n  .concat([ 'rstacruz' ])\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The spread operator lets you build new arrays in the same way."}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator"},children:[{type:"text",value:"Spread operator"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Functions"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Function arguments"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Default arguments"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"function greet (name = 'Jerry') {\n  return `Hello ${name}`\n}\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Rest arguments"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"function fn(x, ...y) {\n  // y is an Array\n  return x * y.length\n}\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Spread"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"fn(...[1, 2, 3])\n// same as fn(1, 2, 3)\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Default, rest, spread.\nSee: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#default--rest--spread"},children:[{type:"text",value:"Function arguments"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Fat arrows"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Fat arrows"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"setTimeout(() => {\n  ···\n})\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"With arguments"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"readFile('text.txt', (err, data) => {\n  ...\n})\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Implicit return"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"numbers.map(n => n * 2)\n// No curly braces = implicit return\n// Same as: numbers.map(function (n) { return n * 2 })\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Like functions but with "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"this"}]},{type:"text",value:" preserved.\nSee: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#arrows-and-lexical-this"},children:[{type:"text",value:"Fat arrows"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Objects"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Shorthand syntax"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"module.exports = { hello, bye }\n// Same as: module.exports = { hello: hello, bye: bye }\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#enhanced-object-literals"},children:[{type:"text",value:"Object literal enhancements"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Methods"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const App = {\n  start () {\n    console.log('running')\n  }\n}\n// Same as: App = { start: function () {···} }\n"}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#enhanced-object-literals"},children:[{type:"text",value:"Object literal enhancements"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Getters and setters"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const App = {\n  get closed () {\n    return this.status === 'closed'\n  },\n  set closed (value) {\n    this.status = value ? 'closed' : 'open'\n  }\n}\n"}]}]},{type:"comment",value:' {data-line="2,5"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#enhanced-object-literals"},children:[{type:"text",value:"Object literal enhancements"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Computed property names"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"let event = 'click'\nlet handlers = {\n  [`on${event}`]: true\n}\n// Same as: handlers = { 'onclick': true }\n"}]}]},{type:"comment",value:' {data-line="3"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#enhanced-object-literals"},children:[{type:"text",value:"Object literal enhancements"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Modules"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Imports"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import 'helpers'\n// aka: require('···')\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import Express from 'express'\n// aka: const Express = require('···').default || require('···')\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import { indent } from 'helpers'\n// aka: const indent = require('···').indent\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import * as Helpers from 'helpers'\n// aka: const Helpers = require('···')\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import { indentSpaces as indent } from 'helpers'\n// aka: const indent = require('···').indentSpaces\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"import"}]},{type:"text",value:" is the new "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"require()"}]},{type:"text",value:".\nSee: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#modules"},children:[{type:"text",value:"Module imports"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Exports"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"export default function () { ··· }\n// aka: module.exports.default = ···\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"export function mymethod () { ··· }\n// aka: module.exports.mymethod = ···\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"export const pi = 3.14159\n// aka: module.exports.pi = ···\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"export"}]},{type:"text",value:" is the new "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"module.exports"}]},{type:"text",value:".\nSee: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#modules"},children:[{type:"text",value:"Module exports"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Generators"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Generators"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"function* idMaker () {\n  let id = 0\n  while (true) { yield id++ }\n}\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"let gen = idMaker()\ngen.next().value  // → 0\ngen.next().value  // → 1\ngen.next().value  // → 2\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"It's complicated.\nSee: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#generators"},children:[{type:"text",value:"Generators"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"For..of iteration"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"for (let i of iterable) {\n  ···\n}\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"For iterating through generators and arrays.\nSee: "},{type:"element",tagName:"a",properties:{href:"https://babeljs.io/learn-es2015/#iterators--forof"},children:[{type:"text",value:"For..of iteration"}]}]}]},frontmatter:{title:"ES2015+",category:"JavaScript",intro:"A quick overview of new JavaScript features in ES2015, ES2016, ES2017 and beyond.\n"}},relatedPages:{edges:[{node:{id:"SitePage /js-date",context:{nodePath:"/js-date",category:"JavaScript",title:"JavaScript Date"}}},{node:{id:"SitePage /js-fetch",context:{nodePath:"/js-fetch",category:"JavaScript",title:"fetch()"}}},{node:{id:"SitePage /js-speech",context:{nodePath:"/js-speech",category:"JavaScript",title:"JavaScript speech synthesis"}}},{node:{id:"SitePage /jsdoc",context:{nodePath:"/jsdoc",category:"JavaScript",title:"Jsdoc"}}},{node:{id:"SitePage /npm",context:{nodePath:"/npm",category:"JavaScript",title:"npm"}}},{node:{id:"SitePage /web-workers",context:{nodePath:"/web-workers",category:"JavaScript",title:"Web workers"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}},{node:{id:"SitePage /datetime",context:{nodePath:"/datetime",category:"",title:"Date & time formats"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/es6.md absPath of file >>> MarkdownRemark",nodePath:"/es6",nodeType:"sheet",title:"ES2015+",category:"JavaScript",weight:-10,updated:"2017-10-21T00:00:00.000Z"}}}});
//# sourceMappingURL=path---es-6-f1d71f49882ba96ff5c8.js.map