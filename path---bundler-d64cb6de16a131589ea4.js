webpackJsonp([0x84a5e12c5b38],{732:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Commands"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"bundle                  # same as bundle install\nbundle install          # installs gems\nbundle install -j3      # faster (3 jobs)\nbundle update           # update all gems\nbundle update --source gemname  # update specified gem\n\nbundle outdated         # show outdated gems\ncd `bundle show rails`  # inspect a gem's dir\n\nbundle gem              # new gem skeleton\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Gems"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"gem 'hello'\ngem 'hello', group: 'development'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Github support"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"gem 'hello', github: 'rstacruz/hello'\ngem 'hello', github: 'rstacruz/hello', 'branch: master'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Grouping"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"group :development do\n  gem 'hello'\nend\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Deployment"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$ bundle install --without=test,development --deployment\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Local gem development"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In your Gemfile, define a Git source and a branch:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"gem 'hello', github: 'rstacruz/hello', branch: 'master'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"And then:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$ bundle config --global local.xxx ~/projects/xxx\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Rake Gem tasks"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"# Rakefile\nrequire 'bundler/gem_tasks'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Terminal:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$ rake release\n$ rake build\n"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Bundler",category:"Ruby",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /rbenv",context:{nodePath:"/rbenv",category:"Ruby",title:"rbenv"}}},{node:{id:"SitePage /activeadmin",context:{nodePath:"/activeadmin",category:"Ruby",title:"ActiveAdmin"}}},{node:{id:"SitePage /minitest",context:{nodePath:"/minitest",category:"Ruby",title:"Minitest"}}},{node:{id:"SitePage /rake",context:{nodePath:"/rake",category:"Ruby",title:"Rake"}}},{node:{id:"SitePage /rspec-rails",context:{nodePath:"/rspec-rails",category:"Ruby",title:"Rspec-rails"}}},{node:{id:"SitePage /rspec",context:{nodePath:"/rspec",category:"Ruby",title:"RSpec"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/bundler.md absPath of file >>> MarkdownRemark",nodePath:"/bundler",nodeType:"sheet",title:"Bundler",category:"Ruby",weight:0,updated:null}}}});
//# sourceMappingURL=path---bundler-d64cb6de16a131589ea4.js.map