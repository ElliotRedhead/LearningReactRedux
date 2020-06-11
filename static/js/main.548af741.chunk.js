(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t){e.exports={newCourse:{id:null,title:"",authorId:null,category:""},courses:[{id:1,title:"Securing React Apps with Auth0",slug:"react-auth0-authentication-security",authorId:1,category:"JavaScript"},{id:2,title:"React: The Big Picture",slug:"react-big-picture",authorId:1,category:"JavaScript"},{id:3,title:"Creating Reusable React Components",slug:"react-creating-reusable-components",authorId:1,category:"JavaScript"},{id:4,title:"Building a JavaScript Development Environment",slug:"javascript-development-environment",authorId:1,category:"JavaScript"},{id:5,title:"Building Applications with React and Redux",slug:"react-redux-react-router-es6",authorId:1,category:"JavaScript"},{id:6,title:"Building Applications in React and Flux",slug:"react-flux-building-applications",authorId:1,category:"JavaScript"},{id:7,title:"Clean Code: Writing Code for Humans",slug:"writing-clean-code-humans",authorId:1,category:"Software Practices"},{id:8,title:"Architecting Applications for the Real World",slug:"architecting-applications-dotnet",authorId:1,category:"Software Architecture"},{id:9,title:"Becoming an Outlier: Reprogramming the Developer Mind",slug:"career-reboot-for-developer-mind",authorId:1,category:"Career"},{id:10,title:"Web Component Fundamentals",slug:"web-components-shadow-dom",authorId:1,category:"HTML5"}],authors:[{id:1,name:"Cory House"},{id:2,name:"Scott Allen"},{id:3,name:"Dan Wahlin"}]}},40:function(e,t,a){e.exports=a(59)},52:function(e,t,a){},54:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),c=a(4),u=(a(45),a(11)),l=function(){return n.a.createElement("div",{className:"jumbotron"},n.a.createElement("h1",null,"FirstReact HomePage"),n.a.createElement("p",null,"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."),n.a.createElement(c.b,{to:"about",className:"btn btn-primary btn-lg"},"Learn More"))},s=function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"About"),n.a.createElement("p",null,"This app is made using React."))},i=function(){var e={color:"#F15B2A"};return n.a.createElement("nav",null,n.a.createElement(c.c,{to:"/",activeStyle:e,exact:!0},"Home")," | ",n.a.createElement(c.c,{to:"/courses",activeStyle:e},"Courses")," | ",n.a.createElement(c.c,{to:"/about",activeStyle:e},"About"))},h=function(){return n.a.createElement("h1",null,"Oops! Page not found.")},d=a(9),m=a(14),p=a.n(m),f=a(20),E=a(30),g=a(31),v=a(38),b=a(36),C=a(13);function S(e){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=2;break}return e.abrupt("return",t.json());case 2:if(400!==t.status){e.next=7;break}return e.next=5,t.text();case 5:throw a=e.sent,new Error(a);case 7:throw new Error("Network response was not ok.");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){throw console.error("API call failed. "+e),e}var A="http://localhost:3001/courses/";function _(){return function(e){return e({type:"BEGIN_API_CALL"}),fetch(A).then(S).catch(O).then((function(t){e(function(e){return{type:"LOAD_COURSES_SUCCESS",courses:e}}(t))})).catch((function(t){throw e({type:"API_CALL_ERROR"}),t}))}}function I(e){return function(t){return t(function(e){return{type:"DELETE_COURSE_OPTIMISTIC",course:e}}(e)),a=e.id,fetch(A+a,{method:"DELETE"}).then(S).catch(O);var a}}function R(){return function(e){return e({type:"BEGIN_API_CALL"}),fetch("http://localhost:3001/authors/").then(S).catch(O).then((function(t){e(function(e){return{type:"LOAD_AUTHORS_SUCCESS",authors:e}}(t))})).catch((function(t){throw e({type:"API_CALL_ERROR"}),t}))}}var j=a(5),w=function(e){var t=e.courses,a=e.onDeleteClick;return n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null,"Title"),n.a.createElement("th",null,"Author"),n.a.createElement("th",null,"Category"),n.a.createElement("th",null))),n.a.createElement("tbody",null,t.map((function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,n.a.createElement("a",{className:"btn btn-light",href:"http://pluralsight.com/courses/"+e.slug},"Watch")),n.a.createElement("td",null,n.a.createElement(c.b,{to:"/course/"+e.slug},e.title)),n.a.createElement("td",null,e.authorName),n.a.createElement("td",null,e.category),n.a.createElement("td",null,n.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return a(e)}},"Delete")))}))))},L=(a(52),function(){return n.a.createElement("div",{className:"loader"},"Loading...")}),N=a(12),P=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(E.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={redirectToAddCoursePage:!1},e.handleDeleteCourse=function(){var t=Object(f.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N.b.success("Course deleted"),t.prev=1,t.next=4,e.props.actions.deleteCourse(a);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),N.b.error("Delete failed."+t.t0.message,{autoClose:!1});case 9:case 10:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.courses,a=e.authors,r=e.actions;0===t.length&&r.loadCourses().catch((function(e){alert("Loading courses failed"+e)})),0===a.length&&r.loadAuthors().catch((function(e){alert("Loading authors failed"+e)}))}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,this.state.redirectToAddCoursePage&&n.a.createElement(u.a,{to:"/course"}),n.a.createElement("h2",null,"Courses"),this.props.loading?n.a.createElement(L,null):n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{style:{marginBottom:20},className:"btn btn-primary add-course",onClick:function(){return e.setState({redirectToAddCoursePage:!0})}},"Add Course"),n.a.createElement(w,{onDeleteClick:this.handleDeleteCourse,courses:this.props.courses})))}}]),a}(n.a.Component);var T=Object(C.b)((function(e){return{courses:0===e.authors.length?[]:e.courses.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{authorName:e.authors.find((function(e){return e.id===t.authorId})).name})})),authors:e.authors,loading:e.apiCallsInProgress>0}}),(function(e){return{actions:{loadCourses:Object(j.b)(_,e),loadAuthors:Object(j.b)(R,e),deleteCourse:Object(j.b)(I,e)}}}))(P),U=a(19),D=a(22),k=a(39),x=function(e){var t=e.name,a=e.label,r=e.onChange,o=e.placeholder,c=e.value,u=e.error,l="form-group";return u&&u.length>0&&(l+=" has-error"),n.a.createElement("div",{className:l},n.a.createElement("label",{htmlFor:t},a),n.a.createElement("div",{className:"field"},n.a.createElement("input",{type:"text",name:t,className:"form-control",placeholder:o,value:c,onChange:r}),u&&n.a.createElement("div",{className:"alert alert-danger"},u)))},B=function(e){var t=e.name,a=e.label,r=e.onChange,o=e.defaultOption,c=e.value,u=e.error,l=e.options;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:t},a),n.a.createElement("div",{className:"field"},n.a.createElement("select",{name:t,value:c,onChange:r,className:"form-control"},n.a.createElement("option",{value:""},o),l.map((function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.text)}))),u&&n.a.createElement("div",{className:"alert alert-danger"},u)))},J=function(e){var t=e.course,a=e.authors,r=e.onSave,o=e.onChange,c=e.saving,u=void 0!==c&&c,l=e.errors,s=void 0===l?{}:l;return n.a.createElement("form",{onSubmit:r},n.a.createElement("h2",null,t.id?"Edit":"Add"," Course"),s.onSave&&n.a.createElement("div",{className:"alert alert-danger",role:"alert"},s.onSave),n.a.createElement(x,{name:"title",label:"Title",value:t.title,onChange:o,error:s.title}),n.a.createElement(B,{name:"authorId",label:"Author",value:t.authorId||"",defaultOption:"Select Author",options:a.map((function(e){return{value:e.id,text:e.name}})),onChange:o,error:s.author}),n.a.createElement(x,{name:"category",label:"Category",value:t.category,onChange:o,error:s.category}),n.a.createElement("button",{type:"submit",disabled:u,className:"btn btn-primary"},u?"Saving...":"Save"))},F=a(33);var H={loadCourses:_,loadAuthors:R,saveCourse:function(e){return function(t,a){return t({type:"BEGIN_API_CALL"}),function(e){return fetch(A+(e.id||""),{method:e.id?"PUT":"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(S).catch(O)}(e).then((function(a){e.id?t(function(e){return{type:"UPDATE_COURSE_SUCCESS",course:e}}(a)):t(function(e){return{type:"CREATE_COURSE_SUCCESS",course:e}}(a))})).catch((function(e){throw t({type:"API_CALL_ERROR"}),e}))}}},M=Object(C.b)((function(e,t){var a=t.match.params.slug;return{course:a&&e.courses.length>0?function(e,t){return e.find((function(e){return e.slug===t}))||null}(e.courses,a):F.newCourse,courses:e.courses,authors:e.authors}}),H)((function(e){var t=e.courses,a=e.authors,o=e.loadAuthors,c=e.loadCourses,u=e.saveCourse,l=e.history,s=Object(k.a)(e,["courses","authors","loadAuthors","loadCourses","saveCourse","history"]),i=Object(r.useState)(Object(d.a)({},s.course)),h=Object(D.a)(i,2),m=h[0],p=h[1],f=Object(r.useState)({}),E=Object(D.a)(f,2),g=E[0],v=E[1],b=Object(r.useState)(!1),C=Object(D.a)(b,2),S=C[0],y=C[1];return Object(r.useEffect)((function(){0===t.length?c().catch((function(e){alert("Loading courses failed"+e)})):p(Object(d.a)({},s.course)),0===a.length&&o().catch((function(e){alert("Loading authors failed"+e)}))}),[a.length,t.length,o,c,s.course]),0===a.length||0===t.length?n.a.createElement(L,null):n.a.createElement(J,{course:m,errors:g,authors:a,onChange:function(e){var t=e.target,a=t.name,r=t.value;p((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(U.a)({},a,"authorId"===a?parseInt(r,10):r))}))},onSave:function(e){e.preventDefault(),function(){var e=m.title,t=m.authorId,a=m.category,r={};return e||(r.title="Title is required"),t||(r.author="Author is required"),a||(r.category="Category is required"),v(r),0===Object.keys(r).length}()&&(y(!0),u(m).then((function(){N.b.success("Course saved"),l.push("/courses")})).catch((function(e){y(!1),v({onSave:e.message})})))},saving:S})}));a(53);var W=function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement(i,null),n.a.createElement(u.d,null,n.a.createElement(u.b,{exact:!0,path:["/","/FirstReact"],component:l}),n.a.createElement(u.b,{path:"/about",component:s}),n.a.createElement(u.b,{path:"/courses",component:T}),n.a.createElement(u.b,{path:"/course/:slug",component:M}),n.a.createElement(u.b,{path:"/course",component:M}),n.a.createElement(u.b,{component:h})),n.a.createElement(N.a,{autoClose:3e3,hideProgressBar:!0}))},G=(a(54),a(37)),q={courses:[],authors:[],apiCallsInProgress:0};function X(e){return"_SUCCESS"===e.substring(e.length-8)}var V=Object(j.c)({courses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q.courses,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_COURSE_SUCCESS":return[].concat(Object(G.a)(e),[Object(d.a)({},t.course)]);case"UPDATE_COURSE_SUCCESS":return e.map((function(e){return e.id===t.course.id?t.course:e}));case"LOAD_COURSES_SUCCESS":return t.courses;case"DELETE_COURSE_OPTIMISTIC":return e.filter((function(e){return e.id!==t.course.id}));default:return e}},authors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q.authors,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_AUTHORS_SUCCESS":return t.authors;default:return e}},apiCallsInProgress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q.apiCallsInProgress,t=arguments.length>1?arguments[1]:void 0;return"BEGIN_API_CALL"===t.type?e+1:"API_CALL_ERROR"===t.type||X(t.type)?e-1:e}}),z=a(34),K=a.n(z),Q=a(35);var Y=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d;return Object(j.e)(V,e,t(Object(j.a)(Q.a,K()())))}();Object(o.render)(n.a.createElement(C.a,{store:Y},n.a.createElement(c.a,null,n.a.createElement(W,null))),document.getElementById("app"))}},[[40,1,2]]]);
//# sourceMappingURL=main.548af741.chunk.js.map