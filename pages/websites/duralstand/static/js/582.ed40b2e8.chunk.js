"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[582],{9582:function(t,e,s){s.r(e),s.d(e,{default:function(){return ot}});var r=s(8683),n=s(5671),a=s(3144),o=s(136),i=s(5716),u=s(2791),l=s(6840),c="Bio_bio__QKgZT",m="Bio_avatar__+oKzK",p="Bio_bio_content__OoJFY",f="Bio_name__nDeui",d=s(8055),_=s(885),h="Status_status__lCRhz",j="Status_editModeTrue__-a1Un",x="Status_editModeFalse__jRATj",v="Status_button__BxsvC",g=s(184),b=function(t){var e=(0,u.useState)(!1),s=(0,_.Z)(e,2),r=s[0],n=s[1],a=(0,u.useState)(t.status),o=(0,_.Z)(a,2),i=o[0],l=o[1];(0,u.useEffect)((function(){l(t.status)}),[t.status]);return(0,g.jsx)("div",{className:x,children:r?(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},type:"text",value:i,autoFocus:!0}),(0,g.jsx)("button",{className:"button "+v,onClick:function(){n(!1),t.updateStatus(i)},children:"\u2714"})]}):(0,g.jsxs)("div",{className:h,children:[(0,g.jsx)("span",{children:t.status?t.status:"\u041f\u0440\u0438\u0432\u0435\u0442! \u042f \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c DuralStand \ud83d\udc4b"}),(0,g.jsx)("button",{className:"button "+v,onClick:function(){n(!0)},children:"\u270e"})]})})},P=function(t){return(0,g.jsxs)("div",{className:c,children:[(0,g.jsx)("div",{className:m,children:(0,g.jsx)("img",{src:t.bio.photos.large?t.bio.photos.large:d,alt:"bio-img"})}),(0,g.jsxs)("div",{className:p,children:[(0,g.jsx)("h2",{className:f,children:t.bio.fullName}),(0,g.jsx)("br",{}),(0,g.jsx)(b,{status:t.status,updateStatus:t.updateStatus}),(0,g.jsxs)("p",{children:["\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ",t.bio.birthday?t.bio.birthday:"\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"]}),(0,g.jsxs)("p",{children:["\u0413\u043e\u0440\u043e\u0434: ",t.bio.city?t.bio.city:"\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"]})]})]})},Z=s(8687),N="Post_item__FKz4t",S="Post_item__img__AF3f3",C="Post_item__text__jjBrK",k="Post_like__8w4uY",y="Post_name__ykB+r",w=s(3504),F=function(t){return(0,g.jsxs)("div",{className:N,children:[(0,g.jsx)("div",{className:S,children:(0,g.jsx)("img",{src:t.avatar,alt:""})}),(0,g.jsxs)("div",{className:C,children:[t.message,(0,g.jsx)(w.OL,{to:"#markblagov",className:y,children:t.name})]}),(0,g.jsxs)("div",{className:k,children:[(0,g.jsx)("span",{children:"\u2665"})," ",t.likes]})]})},W="Posts_posts__pBNDM",B="Posts_postsItems__PrTvf",T=s(7781),U=s(6508),q=s(6139),D=s(704),I=s(7492),z=s(9557),E="WritePost_write__8ZMWh",K="WritePost_area__1vt3J",M="WritePost_btn__uh00Z",A=(0,z.D)(300),O=(0,D.Z)({form:"WritePost"})((function(t){return(0,g.jsxs)("form",{onSubmit:t.handleSubmit,className:E,children:[(0,g.jsx)(q.Z,{validate:[z.C,A],component:I.gx,name:"WritePost",required:!0,placeholder:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435, \u0447\u0442\u043e \u043d\u043e\u0432\u043e\u0433\u043e :)",className:K}),(0,g.jsx)("button",{className:"".concat(M," ","button"),children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})),R=function(t){return(0,g.jsx)(O,{onSubmit:function(e){t.addPost(e.WritePost),t.reset("WritePost")}})},$=s(2381),J=(0,T.qC)((0,Z.$j)((function(t){return{newPostText:t.profilePage.newPostText}}),{addPost:U.q2,reset:$.mc}))(R),L=function(t){var e=t.postsElements;return(0,g.jsxs)("div",{className:W,children:[(0,g.jsx)(J,{}),(0,g.jsx)("div",{className:B,children:e})]})},Y=(0,T.qC)((0,Z.$j)((function(t){return{postsElements:t.profilePage.posts.map((function(e){return(0,g.jsx)(F,{name:t.profilePage.profile.fullName,avatar:t.profilePage.profile.photos.small?t.profilePage.profile.photos.small:d,message:e.message,likes:e.likes})}))}}),{}))(L),G="Profile_content__g-Lde",Q="Wallpaper_main_img__NFfs7",H=function(t){return(0,g.jsx)("img",{className:Q,src:t.wallpaper,alt:"mainImg"})},V=function(t){return(0,g.jsx)("div",{className:G,children:t.profile?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(H,{wallpaper:t.wallpaper}),(0,g.jsx)(P,{bio:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,g.jsx)(Y,{})]}):(0,g.jsx)(l.Z,{})})},X=s(2618),tt=function(t){return t.profilePage.bio.wallpaper},et=function(t){return t.profilePage.profile},st=function(t){return t.profilePage.status},rt=function(t){return t.auth.userId},nt=function(t){return t.auth.isAuth},at=function(t){(0,o.Z)(s,t);var e=(0,i.Z)(s);function s(){return(0,n.Z)(this,s),e.apply(this,arguments)}return(0,a.Z)(s,[{key:"componentDidMount",value:function(){var t=this.props.router.params;t[Object.keys(t)]||(t[Object.keys(t)]=this.props.authorizedUserId),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return(0,g.jsx)(V,(0,r.Z)({},this.props))}}]),s}(u.Component),ot=(0,T.qC)((0,Z.$j)((function(t){return{wallpaper:tt(t),profile:et(t),preloader:{Preloader:l.Z},status:st(t),authorizedUserId:rt(t),isAuth:nt(t)}}),{getUserProfile:U.et,getUserStatus:U.Tq,updateStatus:U.Nf}),X.E)(at)},7492:function(t,e,s){s.d(e,{Gr:function(){return f},II:function(){return p},gx:function(){return m}});var r=s(8683),n=s(5987),a=(s(2791),s(6139)),o=s(9234),i=s(184),u=["input","meta"],l=["input","meta"],c=function(t){var e=t.meta,s=t.element,r=e.error&&e.touched;return(0,i.jsx)("div",{className:o.Z.formControls+" "+(r?o.Z.error:""),children:s})},m=function(t){var e=t.input,s=t.meta,a=(0,n.Z)(t,u);return(0,i.jsx)(c,(0,r.Z)((0,r.Z)({},a),{},{meta:s,input:e,element:(0,i.jsx)("textarea",(0,r.Z)((0,r.Z)({},a),e))}))},p=function(t){var e=t.input,s=t.meta,a=(0,n.Z)(t,l);return(0,i.jsx)(c,(0,r.Z)((0,r.Z)({},a),{},{meta:s,input:e,element:(0,i.jsx)("input",(0,r.Z)((0,r.Z)({},a),e))}))},f=function(t,e,s,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return(0,i.jsx)(a.Z,(0,r.Z)({placeholder:t,name:e,validate:s,component:n},o))}},9557:function(t,e,s){s.d(e,{C:function(){return r},D:function(){return n}});var r=function(t){if(!t)return"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},n=function(t){return function(e){if(e.length>t)return"\u041f\u0440\u0435\u0432\u044b\u0448\u0435\u043d \u043b\u0438\u043c\u0438\u0442 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432: ".concat(t)}}},9234:function(t,e){e.Z={formControls:"FormsControls_formControls__npsiU",error:"FormsControls_error__wukgD",formSummaryError:"FormsControls_formSummaryError__Rdvzq"}},8055:function(t,e,s){t.exports=s.p+"static/media/user.a6143582309785dca610.png"}}]);
//# sourceMappingURL=582.ed40b2e8.chunk.js.map