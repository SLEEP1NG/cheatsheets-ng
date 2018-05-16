webpackJsonp([97053654170788],{953:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://docs.ractivejs.org/latest/options"},children:[{type:"text",value:"Initialization"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"new Ractive({\n  el: $('..'),\n  el: '#box',\n  template: '...', // required\n\n  // callbacks\n  init: function() {},    // on instantiate\n  complete: function() {}, // on finish animations\n\n  // objs\n  data: { ... },\n  partials: { ... },    // global: Ractive.partials\n  transitions: { ... }, // global: Ractive.transitions\n  components: { ... },\n  adaptors: [ ... ],\n\n  // options\n  magic: false\n  modifyArrays: true\n  twoway: true\n  noIntro: true // true = disable transition on initial render\n  lazy: false   // false = use keyevents, true = use change/blur\n  append: false // false = overwrite element, true = append\n  debug: false\n  sanitize: false\n})\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Instance methods"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Updating values"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"view.add('count', 1)       //=> promise\nview.subtract('count', 1)  //=> promise\nview.toggle('shown')       //=> promise\n\nview.set('a', true)\nview.set({ a: true })\nview.reset({ a: true })\nview.merge('list', [a,b,c])\n\nview.get('a')\nview.data.a\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Nodes and components"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"view.find('.klass')\nview.findAll('.klass')\nview.nodes\nview.nodes['hello']   // .find('#hello')\n\nview.findComponent('photo')\nview.findAllComponents('photo')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Events"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"view.on('event', function() { ... })\nview.off('event', fn)\nview.fire('event')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Others"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"view.update()\nview.updateModel()\n\nview.insert('.node .path')\n\nview.observe({ 'name': function() { ... } })\n\nview.toHTML()  //=> String\nview.render()\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Extend"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"View = Ractive.extend({\n  ...\n})\nnew View()\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/RactiveJS/Ractive/wiki/Components"},children:[{type:"text",value:"Components"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://github.com/RactiveJS/Ractive/issues/74"},children:[{type:"text",value:"https://github.com/RactiveJS/Ractive/issues/74"}]},{type:"text",value:"\n{:.center}"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Widget = Ractive.extend({ ... })\n\nractive = new Ractive({\n  el: 'main',\n  template: '<widget foo=\"bar\"/>',\n  components: {\n    widget: Widget\n  }\n});\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Partials"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'// Global partials\nRactive.partials.x = "<..>"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Events"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"view.on('teardown')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"DOM Events"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<button on-click='activate'>Activate!</button>\n\nview.on({\n  activate: function () { ... }\n});\n\n<button on-click='sort:name'>Sort by name</button>\nview.on('sort', function (e, column) {\n  console.log('sorting by #{column}');\n});\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Observing"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:' view.observe("name", function (name) {\n   console.log("Changed name to", name);\n }, { init: false });\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Markup"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Hello, {{name}}\nBody: {{{unescaped}}}\n\n<!-- each -->\n{{#mylist:i}}\n  <li>{{this.name}}</li>\n  <li>{{name}}</li>\n  <li>{{.}}</li> <!-- same as 'this' -->\n{{/mylist}}\n\n{{^user}}Not logged in{{/user}} <!-- if false -->\n{{#user}}Welcome, sire{{/user}} <!-- if true -->\n\n{{>partialName}}\n<component>\n\n{{#statusDogs[selected]}}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Transformed attributes"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This transforms the "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"list"}]},{type:"text",value:" attribute via a helper function called "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"sort()"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'{{# sort(list, "name") :num }}\n  <li>{{num}} - {{name}}</li>\n{{/ end. any text goes here }}\n\ndata: {\n  sort: function(array, column) { return array.whatever(); }\n}\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Transitions"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'<div intro="fade">\n<div intro="bump">\n<div intro="bump:{duration:400}">\n\nRactive.transitions.bump = function(t, params) {\n   params = t.processParams( params, {\n     duration: 400,\n     color: t.isIntro ? \'rgb(0,255,0)\' : \'rgb(255,0,0)\'\n   });\n\n  if (t.isIntro) {\n    /* enter */\n  } else {\n    /* exit */\n  }\n\n  t.complete();\n};\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://docs.ractivejs.org/latest/decorators"},children:[{type:"text",value:"Decorators"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<span decorator=\"tooltip:hello there\">Hover me</span>\n\ndecorators: {\n  tooltip: function (node, content) {\n    // setup code here\n    return {\n      teardown: function () {\n        // cleanup code here\n      }\n    }\n  }\n}\n\n<span decorator=\"tooltip:'a','b',2,'c'\">Hover me</span>\n\ntooltip: function (node, a, b, two, c) { ... }\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://docs.ractivejs.org/latest/adaptors"},children:[{type:"text",value:"Adaptors"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"myAdaptor = {\n  filter: function (object, keypath, ractive) {\n    // return `true` if a particular object is of the type we want to adapt\n  },\n  wrap: function (ractive, object, keypath, prefixer) {\n    // set up event bindings here\n    object.on('change', function () { ractive.set(prefixer({...})); });\n    // then return a wrapper:\n    return {\n      teardown: function () { .. },\n      // json representation\n      get: function () { return { a:2, b:3, c:4, ... }; },\n      // called on ractive.set\n      set: function (key, val) { },\n      // called on ractive.set on root (return false = die)\n      reset: function (data) { return false; }\n    };\n  }\n};\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://docs.ractivejs.org/latest/computed-properties"},children:[{type:"text",value:"Computed properties"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"new Ractive({\n  template: '{{area}}',\n  computed: {\n    area: function () { return this.get('width') * this.get('height'); }\n    area: '${width} * ${height}'\n    fullname: {\n      get: '${first} + \" \" + ${last}\"\n      set: function (name) { ... }\n    }\n  }\n});\n"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Ractive.js",category:"JavaScript libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}},{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/ractive.md absPath of file >>> MarkdownRemark",nodePath:"/ractive",nodeType:"sheet",title:"Ractive.js",category:"JavaScript libraries",weight:0,updated:null}}}});
//# sourceMappingURL=path---ractive-74e0eadeba584f52858d.js.map