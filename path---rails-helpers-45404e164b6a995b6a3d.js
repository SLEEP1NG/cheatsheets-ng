webpackJsonp([97996809753877],{1e3:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Date"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'distance_of_time_in_words(Time.now, project.end_date) #=> 3 hours\ndistance_of_time_in_words_to_now(project.end_date)    #=> 3 hours\n\ntime_ago_in_words 3.minutes.ago #=> "3 minutes"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Numbers"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'number_to_currency 20.33\nnumber_to_currency 20.33, precision: 0\nnumber_with_precision 3.14159, precision: 2\nnumber_to_percentage 32       #=> "32%"\nnumber_with_delimiter 2048    #=> "2,048"\nnumber_to_human 12000000      #=> "12 million"\nnumber_to_human_size 12000000 #=> "12 MB"\nnumber_to_phone "5551234"     #=> "555-1234"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Cache"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<% cache project do %>\n<% cache [project, current_user] do %>\n\n<% cache_if admin?, project do %>\n<% cache_unless admin?, project do %>\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Tags"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'tag("br")\ntag("img", src: "image.jpg")\ncontent_tag(:p, "Hello")\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Time select"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'# Creates a time select tag that, when POSTed, will be stored in the article\n# variable in the sunrise attribute.\ntime_select "article", "start_time"\n\n# All options are optional\ntime_select "article", "start_time", \\\n  include_seconds: true,\n  minute_step: 15,\n  prompt: true,\n  prompt: { hour: "Choose hr", minute: "Choose min", second: "Choose sec" },\n  ampm: true\n\n# For dates (all options are optional)\ndate_select "article", "written_on", \\\n  start_year: 1995,\n  use_month_numbers: true,\n  discard_day: true,\n  include_blank: true,\n  order: [:day, :month, :year],\n  default: 3.days.from_now,\n  default: { day: 20 },\n  prompt: { day: \'Select day\', month: \'Select month\', year: \'Select year\' }\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Time tag"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"time_tag Date.today \n#=> '<time datetime=\"2010-11-04\">November 04, 2010<%rtime>'\n\ntime_tag Time.now\n#=> '<time datetime=\"2010-11-04T17:55:45+01:00\">November 04, 2010 17:55</time>'\n\ntime_tag Date.yesterday, 'Yesterday'\n#=> '<time datetime=\"2010-11-03\">Yesterday<%rtime>'\n\ntime_tag Date.today, pubdate: true\n#=> '<time datetime=\"2010-11-04\" pubdate=\"pubdate\">November 04, 2010</time>'\n\ntime_tag Date.today, \\\n  format: :short_date # (en.time.formats.short_date)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Files"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"= form_for @post, multipart: true do |f|\n  = f.file_field :picture\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"i18n"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"t('folders')\nt('folders.save')\n\nl(Time.now)\n\nt('x_files', count: files.count)\n# files:\n#    one: 'one file'\n#    other: '%{count} files'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"* http://api.rubyonrails.org/classes/ActionView/Helpers.html\n"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Helpers",category:"Rails",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /arel",context:{nodePath:"/arel",category:"Rails",title:"Arel"}}},{node:{id:"SitePage /rails-features",context:{nodePath:"/rails-features",category:"Rails",title:"Rails features"}}},{node:{id:"SitePage /rails-gems",context:{nodePath:"/rails-gems",category:"Rails",title:"Rails gems"}}},{node:{id:"SitePage /rails-forms",context:{nodePath:"/rails-forms",category:"Rails",title:"Form helpers"}}},{node:{id:"SitePage /rails-controllers",context:{nodePath:"/rails-controllers",category:"Rails",title:"Controllers"}}},{node:{id:"SitePage /rails-i18n",context:{nodePath:"/rails-i18n",category:"Rails",title:"i18n"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/rails-helpers.md absPath of file >>> MarkdownRemark",nodePath:"/rails-helpers",nodeType:"sheet",title:"Helpers",category:"Rails",weight:0,updated:null}}}});
//# sourceMappingURL=path---rails-helpers-45404e164b6a995b6a3d.js.map