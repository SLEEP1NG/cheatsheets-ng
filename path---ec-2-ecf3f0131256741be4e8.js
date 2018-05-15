webpackJsonp([0x9341247fccb8],{775:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Install"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$ sudo apt-get install ec2-api-tools ec2-ami-tools\n$ brew install ec2-api-tools ec2-ami-tools\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Pem files"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$ brew info ec2-api-tools\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Before you can use these tools you must export some variables to your $SHELL\nand download your X.509 certificate and private key from Amazon Web Services."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Your certificate and private key are available at\n"},{type:"element",tagName:"a",properties:{href:"http://aws-portal.amazon.com/gp/aws/developer/account/index.html?action=access-key"},children:[{type:"text",value:"aws-portal.amazon.com"}]},{type:"text",value:"."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Download two "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".pem"}]},{type:"text",value:" files, one starting with "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"pk-"}]},{type:"text",value:", and one starting with "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"cert-"}]},{type:"text",value:".\nYou need to put both into a folder in your home directory, "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"~/.ec2"}]},{type:"text",value:"."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Key pair"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"# To use public images (AMI's), you need an SSH keypair from EC2.\n  ec2-add-keypair my-keypair > ~/.ec2/my-keypair.pem\n  chmod 600 ec2-keypair.pem\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Start an instance"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"# Start an instance using a given AMI image:\n# (Use the Ubuntu locator, or ec2-describe-images)\n  ec2-run-instances ami-xxxxxx -k ec2-keypair\n\n# Open up ports (in the 'default' security group):\n  ec2-authorize default -p 22\n  ec2-authorize default -p 80\n\n# Connect\n  ssh -i ~/.ec2/my-keypair.pem root@ec2-xxx.amazonaws.com\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Management"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"# Show running instances\n  ec2-describe-instances\n\n# Kill an instance\n  ec2-terminate-instances i-yourinstance\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Misc"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'# Create a security group\n  ec2-add-group group_name -d "Description"\n\n# Show images (AMI\'s) owned by amazon, or me\n  ec2-describe-images -o self -o amazon\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Ubuntu images"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://cloud-images.ubuntu.com/locator/ec2/"},children:[{type:"text",value:"Ubuntu EC2 AMI locator"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Change certificates"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'EC2_CERT_PATH="$HOME/.ec2"\nexport EC2_PRIVATE_KEY="$(/bin/ls $EC2_CERT_PATH/pk-*.pem | /usr/bin/head -1)"\nexport EC2_CERT="$(/bin/ls $EC2_CERT_PATH/cert-*.pem | /usr/bin/head -1)"\n'}]}]}],data:{quirksMode:!1}},frontmatter:{title:"EC2 API tools",category:"Devops",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /docker-compose",context:{nodePath:"/docker-compose",category:"Devops",title:"docker-compose"}}},{node:{id:"SitePage /awscli",context:{nodePath:"/awscli",category:"Devops",title:"AWS CLI"}}},{node:{id:"SitePage /chef",context:{nodePath:"/chef",category:"Devops",title:"Chef"}}},{node:{id:"SitePage /deis",context:{nodePath:"/deis",category:"Devops",title:"Deis"}}},{node:{id:"SitePage /dockerfile",context:{nodePath:"/dockerfile",category:"Devops",title:"Dockerfile"}}},{node:{id:"SitePage /docker",context:{nodePath:"/docker",category:"Devops",title:"Docker CLI"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/ec2.md absPath of file >>> MarkdownRemark",nodePath:"/ec2",nodeType:"sheet",title:"EC2 API tools",category:"Devops",weight:0,updated:null}}}});
//# sourceMappingURL=path---ec-2-ecf3f0131256741be4e8.js.map