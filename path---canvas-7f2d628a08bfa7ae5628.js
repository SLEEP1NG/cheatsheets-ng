webpackJsonp([0xc1f0929c16a2],{735:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Getting the context"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"var canvas = document.getElementById('c')\nvar c = canvas.getContext('2d')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Basic drawing"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// x = 10, y = 20, width = 200, height = 100\nc.fillStyle = '#ff0000'\nc.strokeStyle = '#ff00ff'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"c.lineWidth = 5\nc.lineCap = 'round'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"c.fillRect(10, 20, 200, 100)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"c.stroke()\nc.fill()\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Saving and restoring"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"c.save()\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"c.restore()\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Saves: "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"strokeStyle"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"fillStyle"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"globalAlpha"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"lineWidth"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"lineCap"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"lineJoin"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"miterLimit"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"shadowOffsetX"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"shadowOffsetY"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"shadowBlur"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"shadowColor"}]},{type:"text",value:"\n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"globalCompositeOperation"}]},{type:"text",value:", Transformations ("},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"translate"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"rotate"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"scale"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"transform"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"setTransform"}]},{type:"text",value:"), Clipping path"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Animation"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"onframe: function() {\n  c.clearRect(0, 0, w, h)\n}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Transformations"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"c.translate(0, 0)\nc.rotate(Math.PI*2/5)\nc.scale(1.0, 1.0)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"To rotate along origin:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"c.translate(ox, oy)\nc.rotate(theta)\nc.translate(-ox, -oy)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"To scale along origin:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"c.translate(-ox*x, -oy*y)\nc.scale(x, y)\nc.translate(ox/x, oy/y)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/en-US/docs/Canvas_tutorial/Transformations"},children:[{type:"text",value:"MDN: Transformations"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Image drawing"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"c.drawImage(image, dx, dy, [dw, dh]);\n/* `image` can be HTML Image/Canvas/Video */\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/en-US/docs/Canvas_tutorial/Using_images"},children:[{type:"text",value:"MDN: Images"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Colors, styles shadows"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"c.strokeStyle = '#ff00ff';\nc.fillStyle = '#ff00ff';\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"c.shadowOffsetX = 0;\nc.shadowOffsetY = 0;\nc.shadowOffsetBlur = 3.0;\nc.shadowColor = 'rgba(0,0,0,0.2)';\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/en-US/docs/Canvas_tutorial/Applying_styles_and_colors"},children:[{type:"text",value:"MDN: Styles"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Gradients"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"gr = c.createLinearGradient(x0,y0,x1,y1)\ngr = c.createRadialGradient(x0,y0,r0,x1,y1,r1)\npat = c.createPattern(image, 'repeat-x')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"c.fillStyle = gr\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Drawing"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"c.beginPath()\nc.moveTo(x,y)\nc.lineTo(x,y)\nc.quadraticCurveTo(cpx,cpy,x,y)\nc.bezierCurveTo(cp1x,cp1y,cp2x,cp2y)\nc.arcTo(...)\nc.arc(...)\nc.closePath()\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"More resources"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://www.nihilogic.dk/labs/canvas_sheet/HTML5_Canvas_Cheat_Sheet.pdf"},children:[{type:"text",value:"Canvas Cheatsheet PDF"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Canvas",category:"JavaScript",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /js-date",context:{nodePath:"/js-date",category:"JavaScript",title:"JavaScript Date"}}},{node:{id:"SitePage /js-fetch",context:{nodePath:"/js-fetch",category:"JavaScript",title:"fetch()"}}},{node:{id:"SitePage /js-speech",context:{nodePath:"/js-speech",category:"JavaScript",title:"JavaScript speech synthesis"}}},{node:{id:"SitePage /jsdoc",context:{nodePath:"/jsdoc",category:"JavaScript",title:"Jsdoc"}}},{node:{id:"SitePage /npm",context:{nodePath:"/npm",category:"JavaScript",title:"npm"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/canvas.md absPath of file >>> MarkdownRemark",nodePath:"/canvas",nodeType:"sheet",title:"Canvas",category:"JavaScript",weight:0,updated:null}}}});
//# sourceMappingURL=path---canvas-7f2d628a08bfa7ae5628.js.map