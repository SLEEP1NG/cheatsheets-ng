webpackJsonp([0x8eea350e8fb5],{710:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Format"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Basic file"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"---\n- hosts: production\n  remote_user: root\n  tasks:\n  - ···\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Place your modules inside "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"tasks"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Task formats"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"One-line"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"- apt: pkg=vim state=present\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Map"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"- apt:\n    pkg: vim\n    state: present\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Foldable scalar"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"- apt: >\n    pkg=vim\n    state=present\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Define your tasks in any of these formats. One-line format is preferred for short declarations, while maps are preferred for longer."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Modules"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Aptitude"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Packages"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"- apt:\n    pkg: nodejs\n    state: present # absent | latest\n    update_cache: yes\n    force: no\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Deb files"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:'- apt:\n    deb: "https://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Repositories"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:'- apt_repository:\n    repo: "deb https://··· raring main"\n    state: present\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Repository keys"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:'- apt_key:\n    id: AC40B2F7\n    url: "http://···"\n    state: present\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"git"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"- git:\n    repo: git://github.com/\n    dest: /srv/checkout\n    version: master\n    depth: 10\n    bare: yes\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/ansible/git_module"},children:[{type:"text",value:"git module"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"git_config"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"- git_config:\n    name: user.email\n    scope: global # local | system\n    value: hi@example.com\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/ansible/git_config_module"},children:[{type:"text",value:"git_config module"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"user"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:'- user:\n    state: present\n    name: git\n    system: yes\n    shell: /bin/sh\n    groups: admin\n    comment: "Git Version Control"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/ansible/user_module"},children:[{type:"text",value:"user module"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"service"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"- service:\n    name: nginx\n    state: started\n    enabled: yes     # optional\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/ansible/service_module"},children:[{type:"text",value:"service module"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Shell"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"shell"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"- shell: apt-get install nginx -y\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Extra options"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"- shell: echo hello\n  args:\n    creates: /path/file  # skip if this exists\n    removes: /path/file  # skip if this is missing\n    chdir: /path         # cd here before running\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Multiline example"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:'- shell: |\n    echo "hello there"\n    echo "multiple lines"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/ansible/shell_module"},children:[{type:"text",value:"shell module"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"script"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"- script: /x/y/script.sh\n  args:\n    creates: /path/file  # skip if this exists\n    removes: /path/file  # skip if this is missing\n    chdir: /path         # cd here before running\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/ansible/script_module"},children:[{type:"text",value:"script module"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Files"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"file"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"- file:\n    path: /etc/dir\n    state: directory # file | link | hard | touch | absent\n\n    # Optional:\n    owner: bin\n    group: wheel\n    mode: 0644\n    recurse: yes  # mkdir -p\n    force: yes    # ln -nfs\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/ansible/file_module"},children:[{type:"text",value:"file module"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"copy"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"- copy:\n    src: /app/config/nginx.conf\n    dest: /etc/nginx/nginx.conf\n\n    # Optional:\n    owner: user\n    group: user\n    mode: 0644\n    backup: yes\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/ansible/copy_module"},children:[{type:"text",value:"copy module"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"template"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"- template:\n    src: config/redis.j2\n    dest: /etc/redis.conf\n\n    # Optional:\n    owner: user\n    group: user\n    mode: 0644\n    backup: yes\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/ansible/template_module"},children:[{type:"text",value:"template module"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Local actions"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"local_action"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"- name: do something locally\n  local_action: shell echo hello\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"debug"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:'- debug:\n    msg: "Hello {{ var }}"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/ansible/debug_module"},children:[{type:"text",value:"debug module"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Ansible modules",category:"Ansible",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /ansible-examples",context:{nodePath:"/ansible-examples",category:"Ansible",title:"Ansible examples"}}},{node:{id:"SitePage /ansible-guide",context:{nodePath:"/ansible-guide",category:"Ansible",title:"Ansible quickstart"}}},{node:{id:"SitePage /ansible-roles",context:{nodePath:"/ansible-roles",category:"Ansible",title:"Ansible roles"}}},{node:{id:"SitePage /ansible",context:{nodePath:"/ansible",category:"Ansible",title:"Ansible"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/ansible-modules.md absPath of file >>> MarkdownRemark",nodePath:"/ansible-modules",nodeType:"sheet",title:"Ansible modules",category:"Ansible",weight:0,updated:"2017-10-03T00:00:00.000Z"}}}});
//# sourceMappingURL=path---ansible-modules-e69bc08aa2873c29178f.js.map