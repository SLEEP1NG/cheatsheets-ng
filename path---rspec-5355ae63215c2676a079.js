webpackJsonp([80401265739964],{981:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Invoking tests"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-sh"]},children:[{type:"text",value:"rake -T spec      # List spec tasks\n\nrake spec         # Run all\n\nrake spec/models/mymodel_spec.rb\nrake spec/models/mymodel_spec.rb:27\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Writing tests"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:'describe "A User (in general)" do\n  include UserSpecHelper\n\n  subject { Person.new }\n\n  let(:admin) { Person.new(role: :admin) }\n\n  context "setter methods" do\n    it "should do this" do\n      pending "some other thing"\n\n      expect(subject.name).to eq \'x\'\n    end\n  end\nend\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Before/after"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"before :each do\n  # before all tests\nend\n\nbefore do\n  # before this suite\nend\n\nafter do\n  # after this suite\nend\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Subjects"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"subject { CheckingAccount.new }\nit { is_expected.to be_empty }\n\n# also names: subject(:account) { ... }\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Expectations"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"target.should eq 1\ntarget.should_not eq 1\n\nexpect(target).to eq 1\nexpect(target).not_to eq 1\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Numeric"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"expect(5).to be < 6\nexpect(5).to == 5\nexpect(5).to equal value\nexpect(5).to be_between(1, 10)\nexpect(5).to be_within(0.05).of value\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Comparison"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"expect(x).to be value\nexpect(x).to satisfy { |arg| ... }\nexpect(x).to match /regexp/\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Predicate"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"expect(x).to be_zero    # FixNum#zero?\nexpect(x).to be_empty   # Array#empty?\nexpect(x).to have_key   # Hash#has_key?\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Objects"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"expect(obj).to be_an_instance_of MyClass\nexpect(obj).to be_a_kind_of MyClass\nexpect(obj).to respond_to :save!\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Control flow"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"expect { user.save! }.to raise_error\nexpect { user.save! }.to raise_error(ExceptionName, /msg/)\nexpect { user.save! }.to throw :symbol\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Enumerables/arrays"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"expect(list).to include(<object>)\n\nexpect(list).to have(1).things\nexpect(list).to have_at_least(2).things\nexpect(list).to have_at_most(3).things\n\nexpect(list).to have(2).errors_on(:field)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Change"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"expect { thing.approve! }.to \\\n  change(thing, :status)\n  .from(Status::AWAITING_APPROVAL)\n  .to(Status::APPROVED)\n\nexpect { thing.destroy }.to \\\n  change(Thing, :count)\n  .by(-1)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Doubles"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"book = double('book')\nbook = instance_double('Book', pages: 250)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Method stubs"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"allow(die).to receive(:roll)\nallow(die).to receive(:roll) { 3 }\nallow_any_instance_of(Die).to receive(:roll)\n\nexpect(die).to receive(:roll)\n  .with(1)\n  .with(1, true)\n  .with(boolean)\n  .with(anything)\n  .with(any_args)\n  .with(1, any_args)\n  .with(no_args)\n  .with(hash_including(a: 1))\n  .with(hash_excluding(a: 1))\n  .with(array_including(:a, :b))\n  .with(array_excluding(:a, :b))\n  .with(instance_of(Fixnum))\n  .with(kind_of(Numeric))\n  .with(<matcher>)\n\n  .once\n  .twice\n  .exactly(n).times\n  .at_least(:once)\n  .at_least(:twice)\n  .at_least(n).times\n  .at_most(:once)\n  .at_most(:twice)\n  .at_most(n).times\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://relishapp.com/rspec/rspec-mocks/docs"},children:[{type:"text",value:"https://relishapp.com/rspec/rspec-mocks/docs"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Spec helpers"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:'module UserSpecHelper\n  def valid_user_attributes\n    { :email => "joe@bloggs.com",\n      :username => "joebloggs",\n      :password => "abcdefg"}\n  end\nend\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"describe User do\n  include UserSpecHelper\n\n  ...\nend\n"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"RSpec",category:"Ruby",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /rbenv",context:{nodePath:"/rbenv",category:"Ruby",title:"rbenv"}}},{node:{id:"SitePage /activeadmin",context:{nodePath:"/activeadmin",category:"Ruby",title:"ActiveAdmin"}}},{node:{id:"SitePage /bundler",context:{nodePath:"/bundler",category:"Ruby",title:"Bundler"}}},{node:{id:"SitePage /minitest",context:{nodePath:"/minitest",category:"Ruby",title:"Minitest"}}},{node:{id:"SitePage /rake",context:{nodePath:"/rake",category:"Ruby",title:"Rake"}}},{node:{id:"SitePage /rspec-rails",context:{nodePath:"/rspec-rails",category:"Ruby",title:"Rspec-rails"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/rspec.md absPath of file >>> MarkdownRemark",nodePath:"/rspec",nodeType:"sheet",title:"RSpec",category:"Ruby",weight:0,updated:null}}}});
//# sourceMappingURL=path---rspec-5355ae63215c2676a079.js.map