(this["webpackJsonpfantasy-fitness-web"]=this["webpackJsonpfantasy-fitness-web"]||[]).push([[0],{294:function(e,t,a){e.exports=a(515)},303:function(e,t,a){},304:function(e,t,a){},305:function(e,t,a){},306:function(e,t,a){},307:function(e,t,a){},308:function(e,t,a){},309:function(e,t,a){},310:function(e,t,a){},311:function(e,t,a){},312:function(e,t,a){},313:function(e,t,a){},314:function(e,t,a){},515:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(31),c=a.n(l),o=a(44),s=a(21),u=a(19),i=a(54),m=a(237),d=a(9),p=a(90),h={},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIAL_STATE":var a=Object(d.a)(Object(d.a)({},t.payload.data.attributes),{},{id:t.payload.data.id}),n=(a.leagues,Object(p.a)(a,["leagues"]));return Object(d.a)(Object(d.a)({},e),n);case"SET_USER":return t.payload;default:return e}},f={loggedIn:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIAL_STATE":case"SET_LOGIN":return Object(d.a)(Object(d.a)({},e),{},{loggedIn:!0});default:return e}},b=a(49),y={allLeagues:[],currentLeague:{teams:[]}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIAL_STATE":var a=t.payload.data.attributes.leagues;if(t.payload.data.attributes.default_league_id){var n=t.payload.data.attributes.leagues.find((function(e){return e.id===t.payload.data.attributes.default_league_id})),r=(n.teams,Object(p.a)(n,["teams"]));return Object(d.a)(Object(d.a)({},e),{},{allLeagues:a,currentLeague:r})}var l=t.payload.data.attributes.leagues[0],c=(l.teams,Object(p.a)(l,["teams"]));return Object(d.a)(Object(d.a)({},e),{},{allLeagues:a,currentLeague:c});case"ADD_LEAGUE":var o=[].concat(Object(b.a)(e.allLeagues),[t.payload]);return Object(d.a)(Object(d.a)({},e),{},{allLeagues:o});case"SET_CURRENT_LEAGUE":return Object(d.a)(Object(d.a)({},e),{},{currentLeague:t.payload});case"ADD_LEAGUE_MESSAGE":var s=[e.currentLeague.messages].concat(Object(b.a)(t.payload)),u=Object(d.a)(Object(d.a)({},e.currentLeague),{},{messages:s}),i=e.allLeagues.map((function(e){return e.id===u.id?u:e}));return Object(d.a)(Object(d.a)({},e),{},{currentLeague:u,allLeagues:i});default:return e}},T={allTeams:[],currentTeam:{}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIAL_STATE":if(t.payload.data.attributes.default_league_id){var a=t.payload.data.attributes.leagues.find((function(e){return e.id===t.payload.data.attributes.default_league_id})),n=a.teams,r=n.find((function(e){return e.teammates.find((function(e){return e.id===parseInt(t.payload.data.id)}))}));return Object(d.a)(Object(d.a)({},e),{},{currentTeam:r,allTeams:n})}var l=t.payload.data.attributes.leagues[0].teams,c=t.payload.data.attributes.leagues[0].teams.find((function(e){return e.teammates.find((function(e){return e.id===parseInt(t.payload.data.id)}))}));return Object(d.a)(Object(d.a)({},e),{},{currentTeam:c,allTeams:l});case"SET_CURRENT_TEAM":return Object(d.a)(Object(d.a)({},e),{},{currentTeam:t.payload});case"SET_ALL_TEAMS":return Object(d.a)(Object(d.a)({},e),{},{allTeams:t.payload});case"UPDATE_TEAM_COMPLETION":var o=e.currentTeam.completions.map((function(e){return e.id===t.payload.id?Object(d.a)(Object(d.a)({},e),t.payload):e})),s=Object(d.a)(Object(d.a)({},e.currentTeam),{},{completions:o}),u=e.allTeams.map((function(e){return e.id===s.id?s:e}));return Object(d.a)(Object(d.a)({},e),{},{currentTeam:s,allTeams:u});case"DELETE_TEAM_COMPLETION":var i=e.currentTeam.completions.filter((function(e){return e.id!==t.payload})),m=Object(d.a)(Object(d.a)({},e.currentTeam),{},{completions:i}),p=e.allTeams.map((function(e){return e.id===m.id?m:e}));return Object(d.a)(Object(d.a)({},e),{},{currentTeam:m,allTeams:p});case"ADD_TEAM_COMPLETION":var h=[].concat(Object(b.a)(e.currentTeam.completions),[t.payload]),g=Object(d.a)(Object(d.a)({},e.currentTeam),{},{completions:h}),f=e.allTeams.map((function(e){return e.id===g.id?g:e}));return Object(d.a)(Object(d.a)({},e),{},{currentTeam:g,allTeams:f});case"ADD_TEAM_MESSAGE":var E=[e.currentTeam.messages].concat(Object(b.a)(t.payload)),y=Object(d.a)(Object(d.a)({},e.currentTeam),{},{messages:E}),v=e.allTeams.map((function(e){return e.id===y.id?y:e}));return Object(d.a)(Object(d.a)({},e),{},{currentTeam:y,allTeams:v});default:return e}},j={allPacks:[]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PACKS":return Object(d.a)(Object(d.a)({},e),{},{allPacks:t.payload});default:return e}},_=Object(i.c)({user:g,leagues:v,teams:k,session:E,packs:O}),C=[m.a],w=Object(i.e)(_,{},Object(i.d)(i.a.apply(void 0,C),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),S=(a(303),a(304),a(305),a(306),a(307),a(308),a(309),a(310),a(311),a(312),a(313),a(314),a(24)),N=a(25),L=a(27),P=a(26),I=a(46),A=function(e){var t=e.handleSubmit,a=e.handleChange;return r.a.createElement("div",{className:"user_forms-signup"},r.a.createElement("h2",{className:"forms_title"},"Sign Up"),r.a.createElement("form",{className:"forms_form",onSubmit:t},r.a.createElement("fieldset",{className:"forms_fieldset"},r.a.createElement("div",{className:"forms_field"},r.a.createElement("input",{type:"text",placeholder:"Full Name",className:"forms_field-input",required:!0,onChange:a})),r.a.createElement("div",{className:"forms_field"},r.a.createElement("input",{type:"email",placeholder:"Email",className:"forms_field-input",required:!0,onChange:a})),r.a.createElement("div",{className:"forms_field"},r.a.createElement("input",{type:"password",placeholder:"Password",className:"forms_field-input",required:!0,onChange:a}))),r.a.createElement("div",{className:"forms_buttons"},r.a.createElement("input",{type:"submit",value:"Sign up",className:"forms_buttons-action"}))))},M=function(e){var t=e.handleSubmit,a=e.handleChange,n=e.userInfo;return r.a.createElement("div",{className:"user_forms-login"},r.a.createElement("h2",{className:"forms_title"},"Login"),r.a.createElement("form",{className:"forms_form",onSubmit:t},r.a.createElement("fieldset",{className:"forms_fieldset"},r.a.createElement("div",{className:"forms_field"},r.a.createElement("input",{type:"text",placeholder:"Username",className:"forms_field-input",name:"username",required:!0,autofocus:!0,value:n.username,onChange:a})),r.a.createElement("div",{className:"forms_field"},r.a.createElement("input",{type:"password",placeholder:"Password",className:"forms_field-input",name:"password",required:!0,value:n.password,onChange:a}))),r.a.createElement("div",{className:"forms_buttons"},r.a.createElement("button",{type:"button",className:"forms_buttons-forgot"},"Forgot password?"),r.a.createElement("input",{type:"submit",value:"Log In",className:"forms_buttons-action"}))))},D="https://winter-workout-challenge.herokuapp.com/api/v1/",x={login:function(e){return fetch(D+"login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},reauth:function(e){return fetch("".concat(D,"reauth"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:e},body:JSON.stringify({})}).then((function(e){return e.json()}))}},q={create:function(e){return fetch("https://winter-workout-challenge.herokuapp.com/api/v1/users/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},update:function(e,t,a){return fetch("https://winter-workout-challenge.herokuapp.com/api/v1/users/"+"".concat(a),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:t},body:JSON.stringify(e)})}},B=function(e){return{type:"SET_INITIAL_STATE",payload:e}},U=function(e){Object(L.a)(a,e);var t=Object(P.a)(a);function a(){var e;Object(S.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={bounce:"bounceRight",user:{username:"",password:"",bio:"",tagline:""}},e.handleBounce=function(t){e.setState({bounce:t})},e.handleChange=function(t){e.setState({user:Object(d.a)(Object(d.a)({},e.state.user),{},Object(I.a)({},t.target.name,t.target.value))})},e.handleSubmit=function(t){t.preventDefault(),"bounceRight"===e.state.bounce?x.login(e.state.user).then(e.setLocalStorage):q.create(e.state.user).then(e.setLocalStorage)},e.setLocalStorage=function(t){window.localStorage.setItem("jwt",t.jwt),e.props.setInitialState(t.user)},e}return Object(N.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state.user),r.a.createElement("section",{className:"user"},r.a.createElement("div",{className:"user_options-container"},r.a.createElement("div",{className:"user_options-text"},r.a.createElement("div",{className:"user_options-unregistered"},r.a.createElement("h2",{className:"user_unregistered-title"},"Don't have an account?"),r.a.createElement("p",{className:"user_unregistered-text"},"Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap."),r.a.createElement("button",{className:"user_unregistered-signup",id:"signup-button",onClick:function(){return e.handleBounce("bounceLeft")}},"Sign up")),r.a.createElement("div",{className:"user_options-registered"},r.a.createElement("h2",{className:"user_registered-title"},"Have an account?"),r.a.createElement("p",{className:"user_registered-text"},"Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap."),r.a.createElement("button",{className:"user_registered-login",id:"login-button",onClick:function(){return e.handleBounce("bounceRight")}},"Login"))),r.a.createElement("div",{className:"user_options-forms ".concat(this.state.bounce),id:"user_options-forms"},localStorage.getItem("jwt")||this.props.loggedIn?r.a.createElement(s.a,{to:"/dashboard"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,userInfo:this.state.user}),r.a.createElement(M,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,userInfo:this.state.user})))))}}]),a}(n.Component),R=Object(u.b)((function(e){return{loggedIn:e.session.loggedIn}}),{setUser:function(e){return{type:"SET_USER",payload:e}},setInitialState:B,setLogin:function(){return{type:"SET_LOGIN",payload:!0}}})(U),F=function(){return r.a.createElement("ul",{className:"nav-bar"},r.a.createElement("li",null,"home"),r.a.createElement("li",null,"dashboard"),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/auth"},"Login/Register")))},G=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"home-banner-img"}),r.a.createElement("div",{className:"home-body"},r.a.createElement("p",null,"1 There is a $20 per person entry fee. At the end of the challenge, the top team splits $480 and the 2nd place team gets their money back . Yo... That's like some serious Chedda. We talking triple digits."),r.a.createElement("p",null," 2 Each team completes as many squares as possible in 1 week. It is theoretically possible to complete all squares in a given week (but good luck trying!) Each square counts as 1 point. The team with the most points win. (FYI- there will be some flash challenges available for grabs each week!- keep your eyes glued to those message boards.)"),r.a.createElement("p",null,"3 The week runs from Monday-Sunday. All squares must be initialled (once you initial a square you will be rewarded a point) by 10PM EST on Sunday. The scores for the previous week will be locked in each Monday, late entries will not count. Do yourself a favor and do not lose points because of bad bookkeeping. Maybe you will get lucky and land an accountant on your team."),r.a.createElement("p",null,"4 Each square may only be completed once (i.e. 2 team members cannot get credit for the same square.) The person completing the square should enter their initials above the square (see game board.)"),r.a.createElement("p",null,"5 Each person may complete more than 1 square in one day; however, each workout can only count for 1 square. For example: if you complete the \"100 challenge,\" this does not also count for the \"strength training\" square. Example 2: If you run 3 miles, you can count EITHER the 'run 3 miles' square or '30 mins of cardio' square - not both. "),r.a.createElement("p",null,"6 The activity in each square must be started and completed within 1 day unless otherwise stated."),r.a.createElement("p",null,"7 There will be a group text including all participants. This group is for updates on Flash Challenges and other 'must know' competition details. You are in no way, shape or form allowed to respond within the group texts. If you have a motherfucking question, text the game master separately. This rule is built for everyone's sanity. Your team will receive a point deduction for every text you place in this group text. NO exceptions."),r.a.createElement("p",null,"8 If a player on your team fails to complete at least two squares in a given week your team will lose 1 point. Sucks to suck, so don't suck. Okay?")))},z=function(){return r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(G,null))},J=function(e){var t=function(t){Object(L.a)(n,t);var a=Object(P.a)(n);function n(){var e;Object(S.a)(this,n);for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={authCompleted:e.props.loggedIn},e}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(localStorage.getItem("jwt")){var t=window.localStorage.getItem("jwt");x.reauth(t).then((function(t){e.props.setInitialState(t.user)}))}else this.setState({authCompleted:!0})}},{key:"componentWillReceiveProps",value:function(e){e.loggedIn&&this.setState({authCompleted:!0})}},{key:"render",value:function(){return this.state.authCompleted?this.props.loggedIn?r.a.createElement(e,this.props):r.a.createElement(s.a,{to:"/auth"}):null}}]),n}(r.a.Component);return Object(u.b)((function(e){return{loggedIn:!!e.user.id}}),{setInitialState:B})(t)},W=a(40),H=Object(u.b)((function(e){return{teams:e.teams.allTeams}}),null)((function(e){var t=e.teams,a=function(e){return{name:e.name,claimed:e.completions.filter((function(e){return"claimed"===e.status})).length,completed:e.completions.filter((function(e){return"completed"===e.status})).length}};return r.a.createElement("div",{className:"column col-1"},r.a.createElement(W.e,null,r.a.createElement(W.b,{className:"bar-chart",margin:{top:5,right:30,left:20,bottom:5},data:t.map((function(e){return a(e)}))},r.a.createElement(W.c,{strokeDasharray:"3 3"}),r.a.createElement(W.g,{dataKey:"name"}),r.a.createElement(W.h,null),r.a.createElement(W.f,null),r.a.createElement(W.d,null),r.a.createElement(W.a,{dataKey:"completed",fill:"#8884d8"}),r.a.createElement(W.a,{dataKey:"claimed",fill:"#82ca9d"}))))})),K=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Last Person To Complete a Challenge:"),r.a.createElement("p",null,"Team With most completed challenges last 7 days:"),r.a.createElement("p",null,"Team with the best logo:"),r.a.createElement("p",null,"Player of the week:"))},Y=function(){return r.a.createElement("div",{className:"column col-2"},r.a.createElement("h1",null,"League Highlights"),r.a.createElement(K,null))},X=function(e){var t=e.team,a=e.player,n=e.index,l=function(){return t.completions.filter((function(e){return e.user_id===a.id}))};return r.a.createElement("div",{className:"teammate-card teammate-".concat(n+1)},r.a.createElement("h5",null,a.username),r.a.createElement("img",{src:a.avatar,alt:"player avatar"}),r.a.createElement("p",null,"Claimed: ",l().filter((function(e){return e.status&&"claimed"===e.status.toLowerCase()})).length),r.a.createElement("p",null,"Completed: ",l().filter((function(e){return e.status&&"completed"===e.status.toLowerCase()})).length))},$=Object(u.b)((function(e){return{user_id:e.user.id,currentTeam:e.teams.currentTeam,selectedPack:e.leagues.currentLeague.selectedPack}}),null)((function(e){e.user_id,e.selectedPack;var t=e.currentTeam;return r.a.createElement("div",{className:"team-col-2"},r.a.createElement("h4",null,"Team: ",t?t.name:"No Teammates"),r.a.createElement("p",null,"Motto: ",t?t.motto:"No Motto"," "),r.a.createElement("div",{className:"teammate-container"},function(){if(t.teammates)return t.teammates.slice(0,3).map((function(e,a){return r.a.createElement(X,{team:t,index:a,player:e})}))}()))})),V=function(e){return{type:"SET_CURRENT_TEAM",payload:e}},Q=function(e){Object(L.a)(a,e);var t=Object(P.a)(a);function a(){var e;Object(S.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleClick=function(t){t.target.classList.contains("team-left")?e.setToPreviousTeam():e.setToNextTeam()},e.setToPreviousTeam=function(){var t=e.props.allTeams.length-1,a=e.props.allTeams.findIndex((function(t){return t.id===e.props.currentTeam.id})),n={};n=0===a?e.props.allTeams[t]:e.props.allTeams[a-1],e.props.setCurrentTeam(n)},e.setToNextTeam=function(){var t=e.props.allTeams.length-1,a=e.props.allTeams.findIndex((function(t){return t.id===e.props.currentTeam.id})),n={};n=a===t?e.props.allTeams[0]:e.props.allTeams[a+1],e.props.setCurrentTeam(n)},e}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"column col-3 team-container"},r.a.createElement("div",{className:"team-left team-col-1",onClick:this.handleClick}),r.a.createElement($,null),r.a.createElement("div",{className:"team-right team-col-3",onClick:this.handleClick}))}}]),a}(r.a.Component),Z=Object(u.b)((function(e){return{currentTeam:e.teams.currentTeam,allTeams:e.teams.allTeams}}),{setCurrentTeam:V})(Q),ee="https://winter-workout-challenge.herokuapp.com/api/v1/completions",te={create:function(e,t){return fetch(ee,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:e},body:JSON.stringify(t)}).then((function(e){return e.json()}))},delete:function(e,t){return fetch("".concat(ee,"/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:e}}).then((function(e){return e.json()}))},update:function(e,t,a){return fetch("".concat(ee,"/").concat(a),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:e},body:JSON.stringify(t)}).then((function(e){return e.json()}))}},ae=Object(u.b)((function(e){return{user:e.user,currentLeague:e.leagues.currentLeague,selectedPack:e.leagues.currentLeague.selected_pack,currentTeam:e.teams.currentTeam}}),{updateTeamCompletion:function(e){return{type:"UPDATE_TEAM_COMPLETION",payload:e}},deleteTeamCompletion:function(e){return{type:"DELETE_TEAM_COMPLETION",payload:e}},createTeamCompletion:function(e){return{type:"ADD_TEAM_COMPLETION",payload:e}}})((function(e){var t=e.deleteTeamCompletion,a=e.createTeamCompletion,n=e.challenge,l=e.user,c=e.updateTeamCompletion,o=(e.currentLeague,e.currentTeam),s=e.selectedPack,u=function(e,a){te.delete(e,a).then((function(){return t(a)}))},i=function(e,t,a){var r={user_id:parseInt(l.id),team_id:o.id,league_pack_id:s.id,workout_pack_id:n.workout_pack_id,workout_id:n.workout.id,status:t};te.update(e,r,a).then(c)},m=function(e,t){var r={user_id:parseInt(l.id),team_id:o.id,league_pack_id:s.id,workout_pack_id:n.workout_pack_id,workout_id:n.workout.id,status:t};te.create(e,r).then(a)};return r.a.createElement("div",{className:"challenge-card"},r.a.createElement("h4",null,n.workout.name),r.a.createElement("p",null,n.workout.category),r.a.createElement("p",null,"Points: ",n.workout.default_points),r.a.createElement("img",{src:n.workout.image_url,alt:"workout",className:"challenge-card-img"}),r.a.createElement("p",null," Status: ",n.completion?n.completion.status:"open"),r.a.createElement("p",null," User: ",n.completionUser?n.completionUser.username:"None"),o.teammates.map((function(e){return e.id})).includes(parseInt(l.id))?r.a.createElement("select",{id:n.completion?n.completion.id:null,onChange:function(e){var t=localStorage.getItem("jwt");if("open"===e.target.value){if(e.target.id){var a=parseInt(e.target.id);u(t,a)}}else if(e.target.id){var n=e.target.id,r=e.target.value;i(t,r,n)}else{var l=e.target.value;m(t,l)}},value:n.completion?n.completion.status:"open"},r.a.createElement("option",{value:"open"},"Open"),r.a.createElement("option",{value:"claimed"},"Claimed"),r.a.createElement("option",{value:"completed"},"Completed")):null)})),ne=Object(u.b)((function(e){return{selectedPack:e.leagues.currentLeague.selected_pack,currentTeam:e.teams.currentTeam}}),null)((function(e){var t=e.selectedPack,a=e.currentTeam,n=function(e){var t=a.completions.find((function(t){return t.workout_pack_id===e.workout_pack_id}));return t?l(t,e):e},l=function(e,t){var n=a.teammates.find((function(t){return t.id===e.user_id}));return Object(d.a)(Object(d.a)({},t),{},{completion:e,completionUser:n})};return r.a.createElement("div",{className:"column col-5"},r.a.createElement("div",{className:"header"},r.a.createElement("p",{className:"header-left"},"\u25c0"),r.a.createElement("h1",{className:"header-center"}," Challenge Center "),r.a.createElement("p",{className:"header-right"},"\u25b6")),r.a.createElement("div",{className:"challenge-container"},function(){if(t)return t.workouts.map((function(e){return r.a.createElement(ae,{challenge:n(e)})}))}()))})),re={create:function(e,t){return fetch("https://winter-workout-challenge.herokuapp.com/api/v1/team_messages",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:t},body:JSON.stringify(e)}).then((function(e){return e.json()}))}},le={create:function(e,t){return fetch("https://winter-workout-challenge.herokuapp.com/api/v1/league_messages",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:t},body:JSON.stringify(e)}).then((function(e){return e.json()}))}},ce=function(e){Object(L.a)(a,e);var t=Object(P.a)(a);function a(){var e;Object(S.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={content:""},e.handleChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value))},e.clearMessage=function(){e.setState({content:""})},e.handleSubmit=function(t){t.preventDefault(),"teamMessages"===e.props.messages?e.createTeamMessage():"leagueMessages"===e.props.messages&&e.createLeagueMessage()},e.createTeamMessage=function(){var t=Object(d.a)(Object(d.a)({},e.state),{},{team_id:e.props.currentTeam.id}),a=localStorage.getItem("jwt");re.create(t,a).then(e.props.createTeamMessage).then(e.clearMessage)},e.createLeagueMessage=function(){var t=Object(d.a)(Object(d.a)({},e.state),{},{league_id:e.props.currentLeague.id}),a=localStorage.getItem("jwt");le.create(t,a).then(e.props.createLeagueMessage).then(e.clearMessage)},e}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"message-input-form",onSubmit:this.handleSubmit},r.a.createElement("input",{className:"message-input-box",type:"text",name:"content",value:this.state.content,onChange:this.handleChange}),r.a.createElement("input",{className:"message-input-button",type:"submit"})))}}]),a}(n.Component),oe=Object(u.b)((function(e){return{currentTeam:e.teams.currentTeam,currentLeague:e.leagues.currentLeague}}),{createTeamMessage:function(e){return{type:"ADD_TEAM_MESSAGE",payload:e}},createLeagueMessage:function(e){return{type:"ADD_LEAGUE_MESSAGE",payload:e}}})(ce),se=Object(u.b)((function(e){return{userId:parseInt(e.user.id)}}),null)((function(e){var t=e.message,a=e.userId,n=function(){return!(!t.user||t.user.id!==a)};return r.a.createElement("div",{className:n()?"user-message-container":"teammate-message-container"},r.a.createElement("div",{className:n()?"user-message":"teammate-message"},r.a.createElement("strong",null,t.user?t.user.username:"F**K",":"),r.a.createElement("p",null," ",t.content)))})),ue=a(242),ie=function(e){Object(L.a)(a,e);var t=Object(P.a)(a);function a(){var e;Object(S.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={messages:"teamMessages"},e.changeBoard=function(){var t="";t="teamMessages"===e.state.messages?"leagueMessages":"teamMessages",e.setState({messages:t})},e.renderMessages=function(){if(e.props.leagueMessages&&"teamMessages"===e.state.messages){var t=e.props.allTeams.find((function(t){return t.teammates.find((function(t){return t.id===parseInt(e.props.user.id)}))}));return console.log("WTF",t),t.messages.map((function(e){return r.a.createElement(se,{message:e})}))}if(e.props.leagueMessages)return e.props[e.state.messages].map((function(e){return r.a.createElement(se,{message:e})}))},e}return Object(N.a)(a,[{key:"scrollToBottom",value:function(){ue.animateScroll.scrollToBottom({containerId:"messageScroll"})}},{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){return console.log("STATE",this.state),r.a.createElement("div",{className:"column col-4"},r.a.createElement("h1",null,"teamMessages"===this.state.messages?"Team Message Board":"League Message Board"),r.a.createElement("button",{onClick:this.changeBoard},"Switch"),r.a.createElement("div",{className:"outer-message-container"},r.a.createElement("div",{className:"message-container",id:"messageScroll"},this.renderMessages())),r.a.createElement(oe,{messages:this.state.messages}))}}]),a}(r.a.Component),me=Object(u.b)((function(e){return{user:e.user,allTeams:e.teams.allTeams,leagueMessages:e.leagues.currentLeague.messages}}),null)(ie),de=function(e){Object(L.a)(a,e);var t=Object(P.a)(a);function a(){var e;Object(S.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={htmlClass:"",myLeagues:!1},e.handleClick=function(){"open"===e.state.htmlClass?e.setState({htmlClass:""}):e.setState({htmlClass:"open"})},e.handleLogout=function(){localStorage.clear(),window.location.reload()},e.displayMyLeaguesDropDown=function(){if(e.state.myLeagues)return r.a.createElement("ul",null,e.props.allLeagues.map((function(t){return r.a.createElement("li",{onClick:e.handleSelectLeague,id:t.id},t.name)})))},e.hanldeMyLeaguesToggle=function(){e.setState({myLeagues:!e.state.myLeagues})},e.handleSelectLeague=function(t){t.preventDefault();var a=t.target.id,n=e.props.allLeagues.find((function(e){return e.id===parseInt(a)}));e.props.setCurrentLeague(n),e.setTeams(n)},e.setTeams=function(t){var a=t.teams,n=a.find((function(t){return t.teammates.find((function(t){return t.id===parseInt(e.props.user.id)}))}));e.props.setCurrentTeam(n),e.props.setAllTeams(a)},e}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"wrapper"},r.a.createElement("header",null,r.a.createElement("p",{onClick:this.handleClick,className:"menu collapse "+this.state.htmlClass},r.a.createElement("span",null))),r.a.createElement("aside",{className:"slidenav "+this.state.htmlClass},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"league_creation"},"Create A League")," "),r.a.createElement("li",null," League Invitations "),r.a.createElement("li",{onClick:this.hanldeMyLeaguesToggle},"My Leagues  ",this.state.myLeagues?"\u2191":"\u2193",this.displayMyLeaguesDropDown()),r.a.createElement("li",null," See All Work Out Packs "),r.a.createElement("li",null," Profile "),r.a.createElement("li",{onClick:this.handleLogout}," sign out ")))))}}]),a}(r.a.Component),pe=Object(u.b)((function(e){return{allLeagues:e.leagues.allLeagues,user:e.user}}),{setCurrentLeague:function(e){return{type:"SET_CURRENT_LEAGUE",payload:e}},setCurrentTeam:V,setAllTeams:function(e){return{type:"SET_ALL_TEAMS",payload:e}}})(de),he=J(function(e){Object(L.a)(a,e);var t=Object(P.a)(a);function a(){return Object(S.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(pe,null),r.a.createElement("div",{className:"league-dash-container main-container"},r.a.createElement(H,null),r.a.createElement(Y,null),r.a.createElement(Z,null),r.a.createElement(me,null),r.a.createElement(ne,null)))}}]),a}(n.Component)),ge=a(525),fe=a(527),Ee=function(e){var t=e.handleNext,a=(e.league,e.handleLeageInputChange);return r.a.createElement("div",{class:"form-container"},r.a.createElement(ge.a,null,r.a.createElement(ge.a.Input,{className:"form-input",label:"League Name",placeholder:"League Name",onChange:a,name:"name"}),r.a.createElement(ge.a.Group,{widths:"equal",className:"form-input"},r.a.createElement(ge.a.Input,{label:"Image url",placeholder:"Image url",name:"img_url",onChange:a}),r.a.createElement(ge.a.Input,{label:"League Motto",placeholder:"League Motto",onChange:a,name:"motto"})),r.a.createElement(ge.a.Group,{widths:"equal",className:"form-input"},r.a.createElement(ge.a.Input,{fluid:!0,type:"number",label:"# of Teams",placeholder:"# of Teams",name:"number_of_teams",onChange:a}),r.a.createElement(ge.a.Input,{fluid:!0,type:"number",label:"# of Players",placeholder:"# of Players",name:"number_of_players",onChange:a}),r.a.createElement(ge.a.Input,{fluid:!0,type:"number",label:"# of Weeks",placeholder:"# of Weeks",name:"number_of_weeks",onChange:a})),r.a.createElement(ge.a.Input,{className:"form-input",type:"datetime-local",label:"Start Date",placeholder:"Start Date",name:"start_date",onChange:a})),r.a.createElement(fe.a,{onClick:t,content:"Next",icon:"right arrow",labelPosition:"right",className:"form-input"}))},be=function(e){var t=e.pack,a=e.handlePackSelection,n=e.origin;return r.a.createElement("div",{className:"pack-tile ".concat(n)},r.a.createElement("h1",null,t.attributes.name),r.a.createElement("p",null,t.attributes.description),r.a.createElement("img",{src:t.attributes.image_url,alt:"wo pack"}),r.a.createElement("button",{onClick:function(){return a(t)}},"+"))},ye=Object(u.b)((function(e){return{allPacks:e.packs.allPacks}}),null)((function(e){var t=e.selectionComplete,a=e.selectedPacks,n=(e.leagueInfo,e.handleNext),l=e.handleBack,c=e.allPacks,o=e.handlePackSelection,s=function(e,t){if(e)return e.map((function(e){return r.a.createElement(be,{pack:e,handlePackSelection:o,origin:t})}))};return r.a.createElement("div",{className:"pack-selection-container"},r.a.createElement("div",{className:"grid-main-header"},t?r.a.createElement("h1",null," All Packs Slected Hit Next to Continue"):r.a.createElement("h1",null,"Choose Pack for Week ",a.length+1)),r.a.createElement("div",{className:"grid-selected-header"},t?r.a.createElement("h1",null,"You Can Edit Later"):r.a.createElement("h1",null," Packs You have Chosen")),r.a.createElement("div",{className:"grid-main"},r.a.createElement(r.a.Fragment,null,!t&&s(c,"main"))),r.a.createElement("div",{className:"grid-selected ".concat(t,"-body")},r.a.createElement(r.a.Fragment,null,s(a,t?"pack-tile-selected":"selected"))),r.a.createElement(fe.a,{onClick:l,content:"Pev",icon:"left arrow",labelPosition:"left"}),r.a.createElement(fe.a,{onClick:n,content:"Next",icon:"right arrow",labelPosition:"right"}))})),ve=function(e){var t=e.currentPlayer,a=e.players,n=e.handleBack,l=e.handleCurrentPlayerAdd,c=e.handleCurrentPlayerInputChange,o=e.createLeagueBtn;return r.a.createElement("div",null,r.a.createElement("h1",null,"Add Players"),r.a.createElement("p",null,"can only add players who have an account set up"),r.a.createElement("p",null,"You Can always Add Players after the league has been created"),a.map((function(e,t){return r.a.createElement("p",null,"Player ",t+1,": ",e)})),r.a.createElement("form",{onSubmit:l},r.a.createElement("label",{for:"add-player"},"Add Player"),r.a.createElement("input",{type:"text",id:"add-player",placeholder:"Enter Username",name:"currentPlayer",value:t,onChange:c}),r.a.createElement("input",{type:"submit",value:"+"})),r.a.createElement("br",null),r.a.createElement("br",null),".",r.a.createElement("br",null),r.a.createElement("button",{onClick:n},"BACK"),r.a.createElement("button",{onClick:o},"Fucking Send It"))},Te={getAll:function(){return fetch("https://winter-workout-challenge.herokuapp.com/api/v1/packs").then((function(e){return e.json()}))}},ke=window.localStorage.getItem("jwt"),je={create:function(e){return fetch("https://winter-workout-challenge.herokuapp.com/api/v1/leagues",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:ke},body:JSON.stringify(e)}).then((function(e){return e.json()}))}},Oe=window.localStorage.getItem("jwt"),_e={create:function(e){return fetch("https://winter-workout-challenge.herokuapp.com/api/v1/league_packs",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:Oe},body:JSON.stringify(e)}).then((function(e){return e.json()}))}},Ce={randomize:function(e,t){return fetch("https://winter-workout-challenge.herokuapp.com/api/v1/user_teams/randomize",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:t},body:JSON.stringify(e)}).then((function(e){return e.json()}))}},we=function(e){Object(L.a)(a,e);var t=Object(P.a)(a);function a(){var e;Object(S.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={form:"addLeague",league:{name:"",motto:"",image_url:"",number_of_teams:0,number_of_players:0,number_of_weeks:0,start_date:""},selectedPacks:[],players:[],currentPlayer:"",selectionComplete:""},e.handleNext=function(){"addLeague"===e.state.form?e.setState({form:"addPacks"}):"addPacks"===e.state.form&&e.setState({form:"addPlayers"})},e.handleBack=function(){"addPacks"===e.state.form?e.setState({form:"addLeague"}):"addPlayers"===e.state.form&&e.setState({form:"addPacks"})},e.handleLeageInputChange=function(t){e.setState({league:Object(d.a)(Object(d.a)({},e.state.league),{},Object(I.a)({},t.target.name,t.target.value))})},e.handleCurrentPlayerInputChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value))},e.handleCurrentPlayerAdd=function(t){t.preventDefault(),e.setState({players:[].concat(Object(b.a)(e.state.players),[e.state.currentPlayer]),currentPlayer:""})},e.handlePackSelection=function(t){e.setState({selectedPacks:[].concat(Object(b.a)(e.state.selectedPacks),[t])},e.checkIfSelectionIsComplete)},e.checkIfSelectionIsComplete=function(){e.state.selectedPacks.length===parseInt(e.state.league.number_of_weeks)?e.setState({selectionComplete:"grid-selection-complete"}):e.setState({selectionComplete:""})},e.createLeagueBtn=function(){e.createLeagueRequest()},e.createLeagueRequest=function(){je.create(e.state.league).then(e.createLeaguePacksRequest)},e.createLeaguePacksRequest=function(t){var a={packs:e.state.selectedPacks.map((function(e,a){return{pack_id:e.id,week:a+1,league_id:t.league.id}}))};_e.create(a).then(e.createLeaguePlayersRequest)},e.createLeaguePlayersRequest=function(t){var a={users:e.state.players,league_id:t.id},n=localStorage.getItem("jwt");Ce.randomize(a,n).then(e.updateUserDefaultTeam)},e.updateUserDefaultTeam=function(t){var a=localStorage.getItem("jwt"),n=e.props.user.id,r={default_league_id:t.id};q.update(r,a,n).then((function(t){return e.props.history.push("/dashboard")}))},e.displayForms=function(){switch(e.state.form){case"addLeague":return r.a.createElement(Ee,{handleNext:e.handleNext,handleLeageInputChange:e.handleLeageInputChange,league:e.state.league});case"addPacks":return r.a.createElement(ye,{handlePackSelection:e.handlePackSelection,handleNext:e.handleNext,handleBack:e.handleBack,selectionComplete:e.state.selectionComplete,selectedPacks:e.state.selectedPacks,leagueInfo:e.state.league});case"addPlayers":return r.a.createElement(ve,{createLeagueBtn:e.createLeagueBtn,handleBack:e.handleBack,handleCurrentPlayerInputChange:e.handleCurrentPlayerInputChange,handleCurrentPlayerAdd:e.handleCurrentPlayerAdd,players:e.state.players,currentPlayer:e.state.currentPlayer});default:return r.a.createElement(Ee,null)}},e}return Object(N.a)(a,[{key:"componentDidMount",value:function(){Te.getAll().then(this.props.setPacks)}},{key:"render",value:function(){return console.log("nice",this.state),r.a.createElement("div",null,r.a.createElement(pe,null),r.a.createElement("ul",{class:"breadcrumb"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Create League")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Add Workout Packs")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Add Players")),r.a.createElement("li",null,"LFG!!!")),r.a.createElement("div",{class:"creation-container"},this.displayForms()))}}]),a}(r.a.Component),Se=Object(s.g)(Object(u.b)((function(e){return{allTeams:e.teams.allTeams,user:e.user}}),{setPacks:function(e){return{type:"SET_PACKS",payload:e.data}}})(we)),Ne=function(e){Object(L.a)(a,e);var t=Object(P.a)(a);function a(){return Object(S.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/league_creation",component:Se}),r.a.createElement(s.b,{path:"/dashboard",component:he}),r.a.createElement(s.b,{path:"/auth",component:R}),r.a.createElement(s.b,{path:"/",component:z}))}}]),a}(r.a.Component),Le=Object(s.g)(Ne);var Pe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}));var Ie=function(e){var t=e.store;return r.a.createElement(o.a,null,r.a.createElement(u.a,{store:t},r.a.createElement(s.b,{path:"/",component:Pe})))};c.a.render(r.a.createElement(Ie,{store:w}),document.getElementById("root"))}},[[294,1,2]]]);
//# sourceMappingURL=main.8fceb287.chunk.js.map