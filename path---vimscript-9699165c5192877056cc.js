webpackJsonp([0xef529de9d488],{1064:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Start hacking"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'let name = "John"\necho "Hello, " . name\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You can either put this in a script ("},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"script.vim"}]},{type:"text",value:") and run it ("},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":source script.vim"}]},{type:"text",value:"), or you can type the commands individually in normal mode as "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":let"}]},{type:"text",value:" and "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":echo"}]},{type:"text",value:"."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Learn by example"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"function! SuperTab()\n  let l:part = strpart(getline('.'),col('.')-2,1)\n  if (l:part=~'^\\W\\?$')\n      return \"\\<Tab>\"\n  else\n      return \"\\<C-n>\"\n  endif\nendfunction\n\nimap <Tab> <C-R>=SuperTab()<CR>\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://www.vimbits.com/bits/46"},children:[{type:"text",value:"Here"}]},{type:"text",value:"'s another example with "},{type:"element",tagName:"a",properties:{href:"#functions"},children:[{type:"text",value:"functions"}]},{type:"text",value:", "},{type:"element",tagName:"a",properties:{href:"#variables"},children:[{type:"text",value:"variables"}]},{type:"text",value:" and "},{type:"element",tagName:"a",properties:{href:"#mapping"},children:[{type:"text",value:"mapping"}]},{type:"text",value:"."}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Variables"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Defining"}]},{type:"comment",value:" {.-prime} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'let var = "hello"\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Variable prefixes"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"let g:ack_options = '-s -H'    \" g: global\nlet s:ack_program = 'ack'      \" s: local (to script)\nlet l:foo = 'bar'              \" l: local (to function)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"s:"}]},{type:"text",value:" prefix is also available in function names. See "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":help local-variables"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Other prefixes"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"let w:foo = 'bar'    \" w: window\nlet b:state = 'on'   \" b: buffer\nlet t:state = 'off'  \" t: tab\necho v:var           \" v: vim special\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"let @/ = ''          \" @  register (this clears last search pattern)\necho $PATH           \" $  env\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Vim options"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"echo 'tabstop is ' . &tabstop\nif &insertmode\necho &g:option\necho &l:option\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Prefix Vim options with "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"&"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Operators"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"a + b             \" numbers only!\n'hello ' . name   \" concat\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"let var -= 2\nlet var += 5\nlet var .= 'string'   \" concat\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Strings"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Strings"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"let str = \"String\"\nlet str = \"String with \\n newline\"\n\nlet literal = 'literal, no \\ escaping'\nlet literal = 'that''s enough'  \" double '' => '\n\necho \"result = \" . re   \" concatenation\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Also see "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":help literal-string"}]},{type:"text",value:" and "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":help expr-quote"}]},{type:"text",value:".\nSee: "},{type:"element",tagName:"a",properties:{href:"http://learnvimscriptthehardway.stevelosh.com/chapters/26.html"},children:[{type:"text",value:"Strings"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"String functions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"strlen(str)    \" length\nlen(str)       \" same\nstrchars(str)  \" character length\n\nsplit(\"one two three\")       \"=> ['one', 'two', 'three']\nsplit(\"one.two.three\", '.')  \"=> ['one', 'two', 'three']\n\njoin(['a', 'b'], ',')  \"=> 'a,b'\n\ntolower('Hello')\ntoupper('Hello')\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Also see "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":help functions"}]},{type:"text",value:"\nSee: "},{type:"element",tagName:"a",properties:{href:"http://learnvimscriptthehardway.stevelosh.com/chapters/27.html"},children:[{type:"text",value:"String functions"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Functions"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Functions"}]},{type:"comment",value:" {.-prime} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'" prefix with s: for local script-only functions\nfunction! s:Initialize(cmd, args)\n  " a: prefix for arguments\n  echo "Command: " . a:cmd\n\n  return true\nendfunction\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://learnvimscriptthehardway.stevelosh.com/chapters/23.html"},children:[{type:"text",value:"Functions"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Namespacing"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"function! myplugin#hello()\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Calling functions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'call s:Initialize()\ncall s:Initialize("hello")\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Consuming return values"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'echo "Result: " . s:Initialize()\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Abortable"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"function! myfunction() abort\nendfunction\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Aborts when an error occurs."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Var arguments"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"function! infect(...)\n  echo a:0    \"=> 2\n  echo a:1    \"=> jake\n  echo a:2    \"=> bella\n\n  for s in a:000  \" a list\n    echon ' ' . s\n  endfor\nendfunction\n\ninfect('jake', 'bella')\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":help function-argument"}]},{type:"text",value:".  See: "},{type:"element",tagName:"a",properties:{href:"http://learnvimscriptthehardway.stevelosh.com/chapters/24.html"},children:[{type:"text",value:"Var arguments"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Loops"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'for s in list\n  echo s\n  continue  " jump to start of loop\n  break     " breaks out of a loop\nendfor\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"while x < 5\nendwhile\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Custom commands"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Custom commands"}]},{type:"comment",value:" {.-prime} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"command! Save :set fo=want tw=80 nowrap\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Custom commands start with uppercase letters. The "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"!"}]},{type:"text",value:" redefines a command if it already exists."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Commands calling functions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"command! Save call <SID>foo()\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"function! s:foo()\n  ...\nendfunction\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Commands with arguments"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"command! -nargs=? Save call script#foo(<args>)\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"What"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"What"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"-nargs=0"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"0 arguments, default"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"-nargs=1"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"1 argument, includes spaces"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"-nargs=?"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"0 or 1 argument"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"-nargs=*"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"0+ arguments, space separated"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"-nargs=+"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"1+ arguments, space reparated"}]}]}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Flow"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Conditionals"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'let char = getchar()\nif char == "\\<LeftMouse>"\n  " ...\nelseif char == "\\<RightMouse>"\n  " ...\nelse\n  " ...\nendif\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Truthiness"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'if 1 | echo "true"  | endif\nif 0 | echo "false" | endif\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'if 1       "=> 1 (true)\nif 0       "=> 0 (false)\nif "1"     "=> 1 (true)\nif "456"   "=> 1 (true)\nif "xfz"   "=> 0 (false)\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"No booleans. "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"0"}]},{type:"text",value:" is false, "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1"}]},{type:"text",value:" is true.\nSee: "},{type:"element",tagName:"a",properties:{href:"http://learnvimscriptthehardway.stevelosh.com/chapters/21.html"},children:[{type:"text",value:"Truthiness"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Operators"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"if 3 > 2\nif a && b\nif (a && b) || (c && d)\nif !c\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":help expression-syntax"}]},{type:"text",value:".\nSee: "},{type:"element",tagName:"a",properties:{href:"http://learnvimscriptthehardway.stevelosh.com/chapters/22.html"},children:[{type:"text",value:"Operators"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Strings"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"if name ==# 'John'     \" case-sensitive\nif name ==? 'John'     \" case-insensitive\nif name == 'John'      \" depends on :set ignorecase\n\n\" also: is#, is?, >=#, >=?, and so on\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Identity operators"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"a is b\na isnot b\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Checks if it's the same instance object."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Regexp matches"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"\"hello\" =~ '/x/'\n\"hello\" !~ '/x/'\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Single line"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"if empty(a:path) | return [] | endif\na ? b : c\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Use "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"|"}]},{type:"text",value:" to join lines together."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Boolean logic"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"if g:use_dispatch && s:has_dispatch\n  ···\nendif\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Lists"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Lists"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'let mylist = [1, two, 3, "four"]\n\nlet first = mylist[0]\nlet last  = mylist[-1]\n\n" Suppresses errors\nlet second = get(mylist, 1)\nlet second = get(mylist, 1, "NONE")\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Functions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"len(mylist)\nempty(mylist)\n\nsort(list)\nlet sortedlist = sort(copy(list))\n\nsplit('hello there world', ' ')\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Concatenation"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"let longlist = mylist + [5, 6]\nlet mylist += [7, 8]\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Sublists"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'let shortlist = mylist[2:-1]\nlet shortlist = mylist[2:]     " same\n\nlet shortlist = mylist[2:2]    " one item\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Push"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"let alist = [1, 2, 3]\nlet alist = add(alist, 4)\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Map"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'call map(files, "bufname(v:val)")  " use v:val for value\ncall filter(files, \'v:val != ""\')\n'}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Dictionaries"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Dictionaries"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'let colors = {\n  \\ "apple": "red",\n  \\ "banana": "yellow"\n}\n\necho colors["a"]\necho get(colors, "apple")   " suppress error\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":help dict"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Using dictionaries"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'remove(colors, "apple")\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"\" :help E715\nif has_key(dict, 'foo')\nif empty(dict)\nkeys(dict)\nlen(dict)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"max(dict)\nmin(dict)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"count(dict, 'x')\nstring(dict)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"map(dict, '<>> \" . v:val')\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Iteration"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"for key in keys(mydict)\n  echo key . ': ' . mydict(key)\nendfor\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Prefixes"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"keys(s:)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Prefixes ("},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"s:"}]},{type:"text",value:", "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"g:"}]},{type:"text",value:", "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"l:"}]},{type:"text",value:", etc) are actually dictionaries."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Extending"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'" Extending with more\nlet extend(s:fruits, { ... })\n'}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Casting"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'str2float("2.3")\nstr2nr("3")\nfloat2nr("3.14")\n'}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Numbers"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Numbers"}]},{type:"comment",value:" {.-prime} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'let int = 1000\nlet int = 0xff\nlet int = 0755   " octal\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":help Number"}]},{type:"text",value:".\nSee: "},{type:"element",tagName:"a",properties:{href:"http://learnvimscriptthehardway.stevelosh.com/chapters/25.html"},children:[{type:"text",value:"Numbers"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Floats"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"let fl = 100.1\nlet fl = 5.4e4\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":help Float"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Arithmetic"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'3 / 2     "=> 1, integer division\n3 / 2.0   "=> 1.5\n3 * 2.0   "=> 6.0\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Math functions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"sqrt(100)\nfloor(3.5)\nceil(3.3)\nabs(-3.4)\n\nsin() cos() tan()\nsinh() cosh() tanh()\nasin() acos() atan()\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Vim-isms"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Execute a command"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'execute "vsplit"\nexecute "e " . fnameescape(filename)\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Runs an ex command you typically run with "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":"}]},{type:"text",value:". Also see "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":help execute"}]},{type:"text",value:".\nSee: "},{type:"element",tagName:"a",properties:{href:"http://learnvimscriptthehardway.stevelosh.com/chapters/28.html"},children:[{type:"text",value:"Execute a command"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Running keystrokes"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'normal G\nnormal! G   " skips key mappings\n\nexecute "normal! gg/foo\\<cr>dd"\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Use "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":normal"}]},{type:"text",value:" to execute keystrokes as if you're typing them in normal mode. Combine with "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":execute"}]},{type:"text",value:" for special keystrokes.\nSee: "},{type:"element",tagName:"a",properties:{href:"http://learnvimscriptthehardway.stevelosh.com/chapters/29.html"},children:[{type:"text",value:"Running keystrokes"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Getting filenames"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'echo expand("%")      " path/file.txt\necho expand("%:t")    " file.txt\necho expand("%:p:h")  " /home/you/path/file.txt\necho expand("%:r")    " path/file\necho expand("%:e")    " txt\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":help expand"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Silencing"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"silent g/Aap/p\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Suppresses output. See "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":help silent"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Echo"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"echoerr 'oh it failed'\nechomsg 'hello there'\necho 'hello'\n\nechohl WarningMsg | echomsg \"=> \" . a:msg | echohl None\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Settings"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'set number\nset nonumber\nset number!     " toggle\nset numberwidth=5\nset guioptions+=e\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Prompts"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'let result = confirm("Sure?")\nexecute "confirm q"\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Built-ins"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'has("feature")  " :h feature-list\nexecutable("python")\nglobpath(&rtp, "syntax/c.vim")\n\nexists("$ENV")\nexists(":command")\nexists("variable")\nexists("+option")\nexists("g:...")\n'}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Mapping"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Mapping commands"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"nmap\nvmap\nimap\nxmap\nnnoremap\nvnoremap\ninoremap\nxnoremap\n...\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Explanation"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"[nvixso](nore)map\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:" │       └ don't recurse\n │\n └ normal, visual, insert,\n   eX mode, select, operator-pending\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Arguments"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<buffer>"}]},{type:"text",value:" | only in current buffer |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<silent>"}]},{type:"text",value:" | no echo |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<nowait>"}]},{type:"text",value:" | |"}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Syntax"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Highlights"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"hi Comment\n  term=bold,underline\n  gui=bold\n  ctermfg=4\n  guifg=#80a0ff\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Filetype detection"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]
},children:[{type:"text",value:"augroup filetypedetect\n  au! BufNewFile,BufRead *.json setf javascript\naugroup END\n\nau Filetype markdown setlocal spell\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Conceal"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'set conceallevel=2\nsyn match newLine "<br>" conceal cchar=}\nhi newLine guifg=green\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Region conceal"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'syn region inBold concealends matchgroup=bTag start="<b>" end="</b>"\nhi inBold gui=bold\nhi bTag guifg=blue\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Syntax"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'syn match :name ":regex" :flags\n\nsyn region Comment  start="/\\*"  end="\\*/"\nsyn region String   start=+"+    end=+"+     skip=+\\\\"+\n\nsyn cluster :name contains=:n1,:n2,:n3...\n\nflags:\n  keepend\n  oneline\n  nextgroup=\n  contains=\n  contained\n\nhi def link markdownH1 htmlH1\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Include guards"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"if exists('g:loaded_myplugin')\n  finish\nendif\n\n\" ...\n\nlet g:loaded_myplugin = 1\n"}]}]}]},frontmatter:{title:"Vim scripting",category:"Vim",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /tabular",context:{nodePath:"/tabular",category:"Vim",title:"Tabular"}}},{node:{id:"SitePage /vim-digraphs",context:{nodePath:"/vim-digraphs",category:"Vim",title:"Vim digraphs"}}},{node:{id:"SitePage /vim-easyalign",context:{nodePath:"/vim-easyalign",category:"Vim",title:"Vim Easyalign"}}},{node:{id:"SitePage /vim-help",context:{nodePath:"/vim-help",category:"Vim",title:"Vim helpfiles"}}},{node:{id:"SitePage /vim-rails",context:{nodePath:"/vim-rails",category:"Vim",title:"Vim-rails"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}},{node:{id:"SitePage /datetime",context:{nodePath:"/datetime",category:"",title:"Date & time formats"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/vimscript.md absPath of file >>> MarkdownRemark",nodePath:"/vimscript",nodeType:"sheet",title:"Vim scripting",category:"Vim",weight:-10,updated:"2017-08-30T00:00:00.000Z"}}}});
//# sourceMappingURL=path---vimscript-9699165c5192877056cc.js.map