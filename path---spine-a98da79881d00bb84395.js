webpackJsonp([56582819389335],{1048:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Models"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'class User extends Spine.Model\n  @configure "User", "name", "address"\n\n  fullName: ->\n    [@first, @last].join \' \'\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"JavaScript"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"// Subclassing\nUser = Spine.Model.sub()\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Class methods"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".configure 'modelname', attributes...\n\n# Inheritance\n.include(Module)\n.extend(Module)\n\n.create(name: \"John\")\n\n.count()\n\n# Events\n.on 'refresh change', (user) -> ...\n.trigger 'event'\n\n.change (user) -> ...  # same as on('change')\n.fetch (user) -> ...   # same as on('fetch')\n\n# JSON\n.toJSON()         # all records\n.fromJSON(json)   # from json string\n.fromForm(el)\n\n# Data\n.records     # Hash of instances\n.attributes  # array of attributes (from .configure)\n\n# Convenience\n.toString()  #=> \"User\"\n\n# Find by ID\n.exists(1)\n.find(1)     # throws error\n\n# Find by something\n.select (u) u.name == 'bob'\n.findByAttribute 'name', 'bob'\n.findAllByAttribute 'name', 'bob'\n\n.all()\n.slice(6, 13)  # cloned copies of instances\n\n# Iterating\n.each (user) ->\n\n# Ends\n.first()\n.last()\n\n# Deleting\n.deleteAll()\n.destroyAll()\n.destroyAll({ ..options.. })\n.destroy(2)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Instance methods"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'user = new User();\n\nuser\n.isNew()\n.exists()\n\n# Validation\n.isValid()\n.validate()    # validate = (-> "Name required" unless @name)\n\n.attributes()  # hash of attr values\n.eql(other)    # equality check\n\n# Update\n.load(attrs)\n.reload()\n.fromForm(form)\n.updateAttribute("name", "john")\n.updateAttributes(name: "John")\n\n# Event\n.on \'event\', -> ...\n.trigger \'event\'\n\n# Retrieve\n.toJSON()\n\n# Persistence\n.save()\n\n.destroy()\n.dup()         # clone as unsaved\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Mixins"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"class User extends Spine.Model\n  @include MyModule\n  @extend MyModule\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Events"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".on 'create'\n.on 'update'\n.on 'destroy'\n\n.on 'save'    # create / update\n.on 'change'  # create / update / destroy\n\n.on 'refresh'\n.on 'error'    # validation error\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Ajax"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"class User extends Spine.Model\n  @extend Spine.Model.Ajax\n\n  @url: '/users'\n  @url: -> '/users'\n  scope: '2013'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Using"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'User.fetch()\nuser = new User()\n\nuser.url()            #=> "/users"\nuser.url(\'bands\')     #=> "/users/bands"\n\nuser.scope = \'admin\'\nuser.url()            #=> "/admin/users"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Host"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Spine.Model.host = 'http://endpoint'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Ajax mapping"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"read    → GET    /collection\ncreate  → POST   /collection (201 created)\nupdate  → PUT    /collection/id\ndestroy → DELETE /collection/id\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Associations"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"class Photo extends Spine.Model\n  @belongsTo 'album', 'Album'          # window['Album']\n  @belongsTo 'album', 'models/album'   # via require.js\n\nclass Album\n  @hasMany 'photos', 'models/photo'\n\nalbum.photos().all()\nalbum.photos().create(name: \"Vacation\")\nalbum.photos().find(id)\n\nphoto = Photo.create(album: album)\nphoto.album()\nphoto.album_id\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"See"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://spinejs.com/api/index"},children:[{type:"text",value:"http://spinejs.com/api/index"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://spinejs.com/api/models"},children:[{type:"text",value:"http://spinejs.com/api/models"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://spinejs.com/docs/ajax"},children:[{type:"text",value:"http://spinejs.com/docs/ajax"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://spinejs.com/docs/relations"},children:[{type:"text",value:"http://spinejs.com/docs/relations"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Spine",category:"JavaScript libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}},{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/spine.md absPath of file >>> MarkdownRemark",nodePath:"/spine",nodeType:"sheet",title:"Spine",category:"JavaScript libraries",weight:0,updated:null}}}});
//# sourceMappingURL=path---spine-a98da79881d00bb84395.js.map