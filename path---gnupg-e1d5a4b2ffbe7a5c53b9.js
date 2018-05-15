webpackJsonp([0xd60c7e1c6df6],{822:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Basics"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Exporting keys"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg -o key.gpg --export <KEY ID>\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Export key in ASCII:"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg -o key.asc --armor --export <KEY ID>\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Note:"}]},{type:"text",value:" Omitting the "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"-o|--output"}]},{type:"text",value:" option will print the key to "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"stdout"}]},{type:"text",value:"."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Importing keys"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg --import key.gpg\ngpg --import key.asc\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Only merge updates for keys already in key-ring:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg --import key.asc --merge-options merge-only\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Managing your keyring"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Generate a new key:"}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg --gen-key\n# or, generate a new key with dialogs for all options\ngpg --full-gen-key\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"List public keys:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg -k\ngpg --list-keys\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"List secret keys:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg -K\ngpg --list-secret-keys\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Using a keyserver"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Import keys from keyserver:"}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg --receive-keys <KEY IDS>\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Upload keys to keyserver:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg --send-keys <KEY IDS>\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Request updates from keyserver for keys already in your keyring:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg --refresh-keys\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Search keys from keyserver:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'gpg --search-keys "<SEARCH STRING>"\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Override keyserver from "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"~/.gnupg/gpg.conf"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg --keyserver <URL> ...\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Trusting a key"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg --edit-key <KEY ID>\n# In the interactive prompt:\ngpg> sign\ngpg> save\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"NOTE:"}]},{type:"text",value:" You can use the owner's email or name (or part thereof) instead of the key ID for "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"--edit-key"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Encrypting"}]},{type:"comment",value:" {.-two-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Public key encryption"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This will produce an encrypted file, "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"secret.txt.gpg"}]},{type:"text",value:", that can only be decrypted by the recipient:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg -e -o secret.txt.gpg -r <RECIPIENT> secret.txt\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"For "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<RECIPIENT>"}]},{type:"text",value:" you can use their key ID, their email, or their name (or part thereof)."}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'gpg -e -r <KEY ID> ...\ngpg -e -r "Bez" ...\ngpg -e -r "bezalelhermoso@gmail.com" ...\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Specifying multiple recipients"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg -e -r <RECIPIENT> -r <ANOTHER RECIPIENT> ... secret.txt\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"NOTE"}]},{type:"text",value:": Omitting "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"-o|--output"}]},{type:"text",value:" will produce an encrypted file named "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<ORIGINAL FILENAME>.gpg"}]},{type:"text",value:" by default."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Symmetric encryption"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Encrypt file using a shared key. You will be prompted for a passphrase."}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg --symmetric secret.txt\n# or\ngpg -c secret.txt\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Decrypting"}]},{type:"comment",value:" {.-one-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Decrypting a file"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg -d -o secret.txt secret.txt.gpg\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If the file is encrypted via symmetric encryption, you will be prompted for the passphrase."}]},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"NOTE"}]},{type:"text",value:": Omitting "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"-o|--output"}]},{type:"text",value:" will print the unencrypted contents to "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"stdout"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Signing & Verifying"}]},{type:"comment",value:" {.-two-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Signing"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg -o signed-file.txt.gpg -s file.txt\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This can be used during encryption to also sign encrypted files:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg -s -o secret.txt.gpg \\\n  -r <RECIPIENT> secret.txt\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Verifying a signature"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg --verify file.txt.gpg\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Viewing content of signed file"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg -d signed-file.txt.gpg\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Miscellaneous"}]},{type:"comment",value:" {.-two-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Components"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"List all components:"}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpgconf --list-components\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Kill a component:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpgconf --kill <COMPONENT> # i.e. gpgconf --kill dirmngr\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Kill all components:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpgconf --kill all\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Parsing keyring data"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Use "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"--with-colons"}]},{type:"text",value:" to produce an output that can easily be parsed i.e. with "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"awk"}]},{type:"text",value:", "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"grep"}]},{type:"text",value:". Fields are colon-separated."}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gpg -k --with-colons\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Field Quick Reference:"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"| Field # | Description |\n| 1       | Record type |\n| 2       | Validity |\n| 3       | Key length in bits |\n| 4       | Public key algorithm |\n| 5       | Key ID |\n| 6       | Creation date |\n| 7       | Expiry date |\n| 8       | Certificate S/N, UID hash, trust signature info |\n| 9       | Ownertrust |\n| 10      | User ID |\n| 11      | Signature class |\n| 12      | Key capabilities |\n| 13      | Issuer fingerprint |\n| 14      | Flag field |\n| 15      | S/N of token |\n| 16      | Hash algorithm |\n| 17      | Curve name |\n| 18      | Compliance flags |\n| 19      | Last update timestamp |\n| 20      | Origin |"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"a",properties:{href:"https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gnupg.git;a=blob_plain;f=doc/DETAILS"},children:[{type:"text",value:"GnuPG Details"}]},{type:"text",value:" for more details."}]}]},frontmatter:{title:"GnuPG",category:"CLI",intro:"[GnuPG](https://gnupg.org/) is a complete and free implementation of the OpenPGP standard.\n"}},relatedPages:{edges:[{node:{id:"SitePage /cron",context:{nodePath:"/cron",category:"CLI",title:"Cron"}}},{node:{id:"SitePage /httpie",context:{nodePath:"/httpie",category:"CLI",title:"httpie"}}},{node:{id:"SitePage /adb",context:{nodePath:"/adb",category:"CLI",title:"adb (Android Debug Bridge)"}}},{node:{id:"SitePage /composer",context:{nodePath:"/composer",category:"CLI",title:"composer"}}},{node:{id:"SitePage /fish-shell",context:{nodePath:"/fish-shell",category:"CLI",title:"Fish shell"}}},{node:{id:"SitePage /rsync",context:{nodePath:"/rsync",category:"CLI",title:"Rsync"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/gnupg.md absPath of file >>> MarkdownRemark",nodePath:"/gnupg",nodeType:"sheet",title:"GnuPG",category:"CLI",weight:0,updated:"2017-10-18T00:00:00.000Z"}}}});
//# sourceMappingURL=path---gnupg-e1d5a4b2ffbe7a5c53b9.js.map