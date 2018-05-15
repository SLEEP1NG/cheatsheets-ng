webpackJsonp([95253244421009],{945:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Opening"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"psd = PSD.new(file, parse_layer_images: true)\npsd.parse!\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Traversing"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"# Gets the root node.\n# A #<Node> can be a Group or a Layer.\nnode = psd.tree\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"node.root\nnode.descendants\nnode.ancestors\nnode.siblings\nnode.subtree\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"node.descendant_groups\nnode.descendant_layers\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Layer info"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:'node.name   #=> "Layer 2"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"node.top    #=> 3\nnode.left   #=> 3\nnode.bottom\nnode.right\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"# Note: these are interchanged (?)\nnode.width\nnode.height\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"node.visible?\nnode.hidden?\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"node.layer?\nnode.group?\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:'node.blending_mode  #=> "normal"\nnode.opacity        #=> 0..255\nnode.fill_opacity   #=> 0..255\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Layer text"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:'node.text                  #=> (Hash)\nnode.text[:value]          #=> "Text here"\nnode.text[:font][:name]    #=> "Arial"\nnode.text[:font][:sizes]   #=> [6.9]\nnode.text[:font][:colors]  #=> [[255,255,255,255]]\nnode.text[:font][:css]     #=> "font-family: ...;"\nnode.text[:left]           #=> 3\nnode.text[:top]\nnode.text[:right]\nnode.text[:bottom]\nnode.text[:transform]      #=> (Hash)\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Layer effects"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"fx = node.info[:object_effects]\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"fx.data['Scl ']   # ?\nfx.data['GrFl']   # Gradient fill\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Layer mask"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:'node.mask["mask_size"] == 0    # No mask\nnode.mask["mask_size"] == 20   # Has mask\nnode.mask["top"]\nnode.mask["left"]\nnode.mask["bottom"]\nnode.mask["right"]\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Reference"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/layervault/psd.rb"},children:[{type:"text",value:"layervault/psd.rb"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(github.com)"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"PSD.rb",category:"Ruby libraries",intro:"[PSD.rb](https://github.com/layervault/psd.rb) parses Photoshop documents in Ruby.\n"}},relatedPages:{edges:[{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}},{node:{id:"SitePage /factory_bot",context:{nodePath:"/factory_bot",category:"Ruby libraries",title:"Factory Bot"}}},{node:{id:"SitePage /meta-tags",context:{nodePath:"/meta-tags",category:"Ruby libraries",title:"Meta-tags gem"}}},{node:{id:"SitePage /ronn",context:{nodePath:"/ronn",category:"Ruby libraries",title:"Ronn"}}},{node:{id:"SitePage /slim",context:{nodePath:"/slim",category:"Ruby libraries",title:"Slim"}}},{node:{id:"SitePage /chunky_png",context:{nodePath:"/chunky_png",category:"Ruby libraries",title:"Chunky PNG"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/psdrb.md absPath of file >>> MarkdownRemark",nodePath:"/psdrb",nodeType:"sheet",title:"PSD.rb",category:"Ruby libraries",weight:0,updated:null}}}});
//# sourceMappingURL=path---psdrb-0ce6825a57dfeb6fc851.js.map