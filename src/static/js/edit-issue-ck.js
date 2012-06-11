// Generated by IcedCoffeeScript 1.2.0s
(function(){var a,b,c,d,e=[].slice;a={Deferrals:function(){function a(a){this.continuation=a;this.count=1;this.ret=null}a.prototype._fulfill=function(){if(!--this.count)return this.continuation(this.ret)};a.prototype.defer=function(a){var b=this;++this.count;return function(){var c,d;c=1<=arguments.length?e.call(arguments,0):[];a!=null&&(d=a.assign_fn)!=null&&d.apply(null,c);return b._fulfill()}};return a}(),findDeferral:function(){return null}};d=function(){};b={type:"obj",children:[{name:"book",props:{type:"str",title:'דו"ח'}},{name:"chapter",props:{type:"str",title:"פרק"}},{name:"chapter_part",props:{optional:!0,type:"str",title:"תת-פרק"}},{name:"subchapter",props:{optional:!0,type:"str",title:"תחום"}},{name:"subject",props:{type:"str",title:"כותרת"}},{name:"recommendation",props:{type:"text",title:"פירוט"}},{name:"result_metric",props:{type:"text",title:"מטרה"}},{name:"budget",props:{type:"obj",children:[{name:"description",props:{optional:!0,type:"text",title:"תיאור"}},{name:"millions",props:{type:"num",title:"סכום במיליונים"}},{name:"year_span",props:{type:"num",title:"על פני כמה שנים"}}],title:"עלות כספית"}},{name:"responsible_authority",props:{type:"obj",children:[{name:"main",props:{type:"str",title:"גורם ראשי"}},{name:"secondary",props:{optional:!0,type:"str",title:"גורמים משניים"}}],title:"גורם אחראי"}},{name:"tags",props:{optional:!0,type:"arr",eltype:{type:"str",title:"tag"},title:"תגיות"}},{name:"timeline",props:{type:"arr",eltype:{type:"obj",children:[{name:"milestone_name",props:{type:"str",title:"שם אבן הדרך"}},{name:"description",props:{optional:!0,type:"text",title:"תיאור מפורט"}},{name:"due_date",props:{optional:!0,type:"date",title:"תאריך יעד מתוכנן"}},{name:"start",props:{optional:!0,type:"bool",title:"האם זוהי נקודת ההתחלה של ההמלצה?"}},{name:"completion",props:{optional:!0,type:"bool",title:"האם זוהי נקודת הסיום של ההמלצה?"}}],title:"אבן דרך"},title:"לוח זמנים"}}]};c={type:"obj",children:[{name:"description",props:{type:"text",optional:!0,title:"דברי הסבר"}},{name:"implementation_status",props:{type:"select",options:[["NEW","טרם התחיל"],["STUCK","תקוע"],["IN_PROGRESS","בתהליך"],["FIXED","יושם במלואו"],["WORKAROUND","יושם חלקית"],["IRRELEVANT","יישום ההמלצה כבר לא נדרש"]],title:"סטטוס יישום"}},{name:"implementation_status_text",props:{type:"text",optional:!0,title:"הסבר לסטטוס היישום"}},{name:"links",props:{type:"arr",eltype:{type:"obj",children:[{name:"url",props:{type:"str",title:"URL"}},{name:"description",props:{type:"str",title:"תיאור"}}]},title:"קישורים"}}]};$(function(){var c;$("#savedialog").modal();$("#savedialog").modal("hide");c=new JSE($("#body"),b);$("#submit").click(function(){var a;a=c.getvalue();try{c.setvalue(a);$("#errors").html("&nbsp;");$("#saver input[name='data']").val(JSON.stringify(a));$("#saver").submit()}catch(b){$("#errors").html(b)}$("#body").html("");c.render();return $("#savedialog").modal("hide")});window.onhashchange=function(b){var e,f,g,h,i,j=this;i=d;g=a.findDeferral(arguments);f=window.location.hash;f=f.slice(1,f.length+1||9e9);$("#saver").attr("action","/base/"+f);(function(b){h=new a.Deferrals(b,{parent:g,filename:"edit-issue.iced",funcname:"onhashchange"});$.getJSON("/api/"+f,h.defer({assign_fn:function(){return function(){return e=arguments[0]}}(),lineno:23}));h._fulfill()})(function(){c.setvalue(e.base);$("#body").html("");return c.render()})};return window.onhashchange()})}).call(this);