(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{303:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(27),o=a(28),s=a(30),r=a(29),l=a(31),c=a(0),i=a.n(c),u=a(39),p=a(14),m=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(l.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(u.a,{to:"/Login"})}}]),a}(i.a.Component);return Object(p.b)((function(e){return{isAuth:e.auth.isAuth}}))(t)}},304:function(e,t,a){e.exports={me:"Info_me__2ZTfT",profileAvatar:"Info_profileAvatar__3k_51",aboutMe:"Info_aboutMe__BIBX-",name:"Info_name__29RWT",profilePhotoLoadButton:"Info_profilePhotoLoadButton__cr8nh",profileContacts:"Info_profileContacts__3C9HO"}},305:function(e,t,a){e.exports={profile:"Profile_profile__3UANi"}},306:function(e,t,a){e.exports={post:"Post_post__2ue2z",postAvatar:"Post_postAvatar__-biLs",postText:"Post_postText__3gs2Y",like:"Post_like__3gI3B"}},307:function(e,t,a){e.exports={myPosts:"NewPost_myPosts__2czYr",headline:"NewPost_headline__2PnTQ",input:"NewPost_input__3rjOC",button:"NewPost_button__3ZRAD",buttonSignature:"NewPost_buttonSignature__1tyqQ"}},308:function(e,t,a){e.exports=a.p+"static/media/avatarDownload.13533ce2.svg"},315:function(e,t,a){"use strict";a.r(t);var n=a(27),o=a(28),s=a(30),r=a(29),l=a(31),c=a(0),i=a.n(c),u=a(95),p=a(305),m=a.n(p),f=a(306),d=a.n(f),b=function(e){return i.a.createElement("div",{className:d.a.post},i.a.createElement("div",{className:d.a.postAvatar},i.a.createElement("img",{src:"https://i.pinimg.com/236x/14/74/18/147418a1b8d0417edd5e700c09a33c29.jpg",alt:"avatar"})),i.a.createElement("div",{className:d.a.postText},e.post.text),i.a.createElement("button",{className:d.a.like},"like ",i.a.createElement("span",null,e.likesCount.likes)))},v=a(307),E=a.n(v),h=a(90),_=a(129),O=a(43),P=a(32),j=i.a.memo((function(e){var t=e.posts.map((function(e){return i.a.createElement(b,{post:e,likesCount:e,key:e.id})}));return i.a.createElement("div",{className:E.a.myPosts},i.a.createElement("div",{className:E.a.newPost},i.a.createElement("div",{className:E.a.headline},"My Posts"),i.a.createElement("div",{className:E.a.mainPost},i.a.createElement(g,{onSubmit:function(t){e.addNewPost(t.newPostText)}}))),t)})),g=Object(_.a)({form:"newPost"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",{className:E.a.input},i.a.createElement(h.a,{placeholder:"your news...",component:P.b,name:"newPostText",validate:[O.c,O.a]})),i.a.createElement("div",{className:E.a.button},i.a.createElement("button",{className:E.a.buttonSignature},"Add")))})),N=j,k=a(14),y=Object(k.b)((function(e){return{posts:e.profile.posts,newTextPost:e.profile.newTextPost}}),(function(e){return{addNewPost:function(t){e(Object(u.a)(t))}}}))(N),S=a(96),w=a(304),A=a.n(w),I=a(67),C=function(e){var t=Object(c.useState)(!1),a=Object(S.a)(t,2),n=a[0],o=a[1],s=Object(c.useState)(e.status),r=Object(S.a)(s,2),l=r[0],u=r[1];Object(c.useEffect)((function(){u(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",{onDoubleClick:function(){o(!0)}},e.status||"No status"),n&&i.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(l)},value:l}))},x=a(308),T=a.n(x),M=a(40),D=a.n(M),U=function(e){var t=e.profile,a=e.handleSubmit,n=e.error;return i.a.createElement("form",{className:A.a.aboutMe,onSubmit:a},i.a.createElement("button",null,"Save"),n&&i.a.createElement("div",{className:D.a.formSummaryError},n),i.a.createElement("div",{className:A.a.name},Object(P.c)("Full name","fullName",P.a,[O.c])),i.a.createElement("div",null,i.a.createElement("span",null,"Looking for a job:"),Object(P.c)("","lookingForAJob",P.a,[],{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("span",null,"My professional skills:"),Object(P.c)("My professional skills","lookingForAJobDescription",P.b,[O.c])),i.a.createElement("div",null,i.a.createElement("span",null,"Contacts:")," ",Object.keys(t.contacts).map((function(e){return i.a.createElement("div",null,i.a.createElement("span",null,e,":")," ",Object(P.c)(e,"contacts."+e,P.a))}))),i.a.createElement("div",null,i.a.createElement("span",null,"About me:"),Object(P.c)("About me","aboutMe",P.b,[O.c])))},B=Object(_.a)({form:"edit-profile"})(U),F=function(e){var t=e.profile,a=e.activateEditMode,n=e.isOwner;return i.a.createElement("div",{className:A.a.aboutMe},i.a.createElement("div",{className:A.a.name},t.fullName),i.a.createElement("div",null,i.a.createElement("span",null,"Looking for a job:")," ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("span",null,"My professional skills:")," ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("span",null,"Contacts:")," ",Object.keys(t.contacts).map((function(e){return i.a.createElement(J,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))),i.a.createElement("div",null,i.a.createElement("span",null,"About me:")," ",t.aboutMe),n&&i.a.createElement("button",{onClick:a},"Edit"))},J=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:A.a.profileContacts},i.a.createElement("span",null,t,":")," ",a)},L=function(e){var t=e.profile,a=e.savePhoto,n=e.isOwner,o=e.status,s=e.updateStatus,r=e.saveProfile,l=Object(c.useState)(!1),u=Object(S.a)(l,2),p=u[0],m=u[1];if(!t)return i.a.createElement(I.a,null);return i.a.createElement("div",{className:A.a.me},i.a.createElement("div",{className:A.a.profileAvatar},i.a.createElement("img",{src:t.photos.large,alt:"avatar"}),n&&i.a.createElement("label",{className:A.a.profilePhotoLoadButton},i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&a(e.target.files[0])}}),i.a.createElement("img",{src:T.a,alt:"avatarDownload"})),i.a.createElement(C,{status:o,updateStatus:s})),p?i.a.createElement(B,{profile:t,onSubmit:function(e){r(e).then((function(){m(!1)}))},initialValues:t}):i.a.createElement(F,{profile:t,activateEditMode:function(){m(!0)},isOwner:n}))},V=function(e){return i.a.createElement("div",{className:m.a.profile},i.a.createElement(L,{savePhoto:e.savePhoto,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus,isOwner:e.isOwner}),i.a.createElement(y,null))},z=a(39),Q=a(35),R=a(303),Y=a(7),Z=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidUpdate",value:function(e){if(this.props.match.params.userId!==e.match.params.userId){var t=this.props.match.params.userId;t||(t=this.props.userId),this.props.getUserProfile(t),this.props.getStatus(t)}}},{key:"render",value:function(){return i.a.createElement(V,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,isOwner:!this.props.match.params.userId}))}}]),t}(i.a.Component);t.default=Object(Y.compose)(Object(k.b)((function(e){return{profile:e.profile.profile,userId:e.auth.userId,currentUserId:e.users.currentUserId,status:e.profile.status}}),{getUserProfile:u.d,setCurrentUserID:Q.e,getStatus:u.c,updateStatus:u.g,savePhoto:u.e,saveProfile:u.f}),z.e,R.a)(Z)}}]);
//# sourceMappingURL=4.dfdbf550.chunk.js.map