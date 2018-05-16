webpackJsonp([53624150648204],{830:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Intro"}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Queries"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Basic query"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"{ status }\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"↓"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"{ status: 'available' }\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Nesting"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"{ hero { name height } }\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"↓"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:'{ hero:\n    { name: "Luke Skywalker",\n      height: 1.74 } }\n'}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Lists"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"{ friends { name } }\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"↓"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:'{ friends:\n    [ { name: "Luke Skywalker" },\n      { name: "Han Solo" },\n      { name: "R2D2" } ] }\n'}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"GraphQL queries look the same for both single items or lists of items."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Lookups"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:'{\n  hero(id: "1000") { id name }\n}\n'}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"↓"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:'{ hero:\n    { id: "1000",\n    { name: "Luke Skywalker" } }\n'}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Aliases"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:'{\n  luke: hero(id: "1000") { name }\n  han: hero(id: "1001") { name }\n}\n'}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"↓"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:'{ luke:\n    { name: "Luke Skywalker" },\n    han:\n    { name: "Han Solo" } }\n'}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Operation names and variables"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Query"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"query FindHero($id: String!) {\n  hero(id: $id) { name }\n}\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Just to make things less ambiguous. Also, to use variables, you need an operation name."}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Variables"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"{ id: '1000' }\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Mutations"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Query"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"{ createReview($review) { id } }\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Variables"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"{ review: { stars: 5 } }\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"↓"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"{ createReview: { id: 5291 } }\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Mutations are just fields that do something when queried."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Multiple types"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:'{\n  search(q: "john") {\n    id\n    ... on User { name }\n    ... on Comment { body author { name } }\n  }\n}\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Great for searching."}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Over HTTP"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"GET"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"fetch('http://myapi/graphql?query={ me { name } }')\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"POST"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"fetch('http://myapi/graphql', {\n  body: JSON.stringify({\n    query: '...',\n    operationName: '...',\n    variables: { ... }\n  })\n})\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Schema"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Basic schemas"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"type Query {\n  me: User\n  users(limit: Int): [User]\n}\n\ntype User {\n  id: ID!\n  name: String\n}\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png"},children:[{type:"text",value:"sogko/graphql-shorthand-notation-cheat-sheet"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Built in types"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Scalar types"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Int"}]},{type:"text",value:" | Integer |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Float"}]},{type:"text",value:" | Float |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"String"}]},{type:"text",value:" | String |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Boolean"}]},{type:"text",value:" | Boolean |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"ID"}]},{type:"text",value:" | ID |"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Type definitions"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"scalar"}]},{type:"text",value:" | Scalar type |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"type"}]},{type:"text",value:" | Object type |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"interface"}]},{type:"text",value:" | Interface type |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"union"}]},{type:"text",value:" | Union type |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"enum"}]},{type:"text",value:" | Enumerable type |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"input"}]},{type:"text",value:" | Input object type |"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Type modifiers"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"String"}]},{type:"text",value:" | Nullable string |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"String!"}]},{type:"text",value:" | Required string |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"[String]"}]},{type:"text",value:" | List of strings |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"[String]!"}]},{type:"text",value:" | Required list of strings |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"[String!]!"}]},{type:"text",value:" | Required list of required strings |"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Mutations"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"type Mutation {\n  users(params: ListUsersInput) [User]!\n}\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Interfaces"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"interface Entity {\n  id: ID!\n}\n\ntype User implements Entity {\n  id: ID!\n  name: String\n}\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Enums"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"enum DIRECTION {\n  LEFT\n  RIGHT\n}\n\ntype Root {\n  direction: DIRECTION!\n}\n"}]}]},{type:"comment",value:' {data-line="1,2,3,4"} '},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Unions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"type Artist { ··· }\ntype Album { ··· }\n\nunion Result = Artist | Album\n\ntype Query {\n  search(q: String) [Result]\n}\n"}]}]},{type:"comment",value:' {data-line="4"} '},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://graphql.org/learn/queries/"},children:[{type:"text",value:"http://graphql.org/learn/queries/"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://graphql.org/learn/serving-over-http/"},children:[{type:"text",value:"http://graphql.org/learn/serving-over-http/"}]}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"GraphQL",category:null,intro:null}},relatedPages:{edges:[{node:{id:"SitePage /datetime",context:{nodePath:"/datetime",category:"",title:"Date & time formats"}}},{node:{id:"SitePage /strftime",context:{nodePath:"/strftime",category:"",title:"strftime format"}}},{node:{id:"SitePage /go",context:{nodePath:"/go",category:"",title:"Go"}}},{node:{id:"SitePage /homebrew",context:{nodePath:"/homebrew",category:"",title:"Homebrew"}}},{node:{id:"SitePage /semver",context:{nodePath:"/semver",category:"",title:"Semver"}}},{node:{id:"SitePage /bootstrap",context:{nodePath:"/bootstrap",category:"",title:"Bootstrap"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/graphql.md absPath of file >>> MarkdownRemark",nodePath:"/graphql",nodeType:"sheet",title:"GraphQL",category:"",weight:0,updated:"2017-09-23T00:00:00.000Z"}}}});
//# sourceMappingURL=path---graphql-ca28aec8bbd88de9111a.js.map