webpackJsonp([87451095166218],{858:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Jekyll"}]},{type:"comment",value:" {.-one-column} "},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jekyll-avatar"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jekyll-coffeescript"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jekyll-default-layout"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jekyll-feed"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jekyll-gist"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jekyll-github-metadata"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jekyll-mentions"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jekyll-optional-front-matter"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jekyll-paginate"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jekyll-readme-index"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jekyll-redirect-from"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jekyll-relative-links"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jekyll-sass-converter"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jekyll-seo-tag"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"jekyll-sitemap"}]},{type:"comment",value:" {.-four-column} "}]},{type:"text",value:"\n"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"As of github-pages v156. For an updated list, see: "},{type:"element",tagName:"a",properties:{href:"https://pages.github.com/versions/"},children:[{type:"text",value:"Dependency versions"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(pages.github.com)"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"GitHub Metadata"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Configuration"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"plugins:\n  - jekyll-github-metadata\n\nrepository: username/project\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Put this in your "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"_config.yml"}]},{type:"text",value:".\nSee: "},{type:"element",tagName:"a",properties:{href:"https://help.github.com/articles/repository-metadata-on-github-pages/"},children:[{type:"text",value:"Repository metadata on GitHub pages"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Listing repos"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"{% for repository in site.github.public_repositories %}\n  <a href='{{ repository.html_url }}'>\n    {{ repository.name }}\n  </a>\n{% endfor %}\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Link to repo"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"<a href='{{ site.github.repository_url }}'>\n  {{ site.github.project_title }}\n</a>\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Gists"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Configuration"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"plugins:\n  - jekyll-gist\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://github.com/jekyll/jekyll-gist"},children:[{type:"text",value:"jekyll-gist"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Usage"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"{% gist parkr/c08ee0f2726fd0e3909d %}\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This places a Gist in your page."}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Mentions"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Configuration"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"plugins:\n  - jekyll-mentions\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://github.com/jekyll/jekyll-mentions"},children:[{type:"text",value:"jekyll-mentions"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Usage"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"Hey @rstacruz, what do you think of this?\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Just mention anyone in any page. Their names will be turned into links."}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Redirects"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Configuration"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"plugins:\n    - jekyll-redirect-from\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://rubygems.org/gems/jekyll-redirect-from"},children:[{type:"text",value:"jekyll-redirect-from"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Usage"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"---\nredirect_from:\n  - /foo\n---\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Place on any page."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Redirecting"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"---\nredirect_to:\n  - /foo\n---\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Place on any page.\nSee: "},{type:"element",tagName:"a",properties:{href:"https://github.com/jekyll/jekyll-redirect-from#redirect-to"},children:[{type:"text",value:"redirect to"}]}]}]},frontmatter:{title:"Jekyll for GitHub pages",category:"Jekyll",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /gh-pages",context:{nodePath:"/gh-pages",category:"Jekyll",title:"GitHub pages"}}},{node:{id:"SitePage /jekyll",context:{nodePath:"/jekyll",category:"Jekyll",title:"Jekyll"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/jekyll-github.md absPath of file >>> MarkdownRemark",nodePath:"/jekyll-github",nodeType:"sheet",title:"Jekyll for GitHub pages",category:"Jekyll",weight:0,updated:"2017-08-26T00:00:00.000Z"}}}});
//# sourceMappingURL=path---jekyll-github-e525f0ed6468c15dba01.js.map