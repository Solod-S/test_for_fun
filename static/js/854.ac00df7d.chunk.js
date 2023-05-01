"use strict";(self.webpackChunktest_for_fun=self.webpackChunktest_for_fun||[]).push([[854],{8144:function(n,e,t){t.d(e,{a:function(){return a}});var r,o=t(1325),i=t(168),s=t(4313).ZP.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),u=t(3329),a=function(){return(0,u.jsx)(s,{children:(0,u.jsx)(o.Z,{color:"#36d7b7",size:130})})}},9854:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,o,i,s,u,a,c,l,f,d,x,h=t(9439),p=t(2791),m=t(9434),b=t(7689),g=t(8144),w=t(4289),v=t(168),j=t(4313),z=t(1087),Z=t(3864),y=j.ZP.li(r||(r=(0,v.Z)(["\n  &:hover {\n    transform: scale(1.05);\n  }\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  padding: 5px;\n  border-radius: ",";\n  transition: transform 0.2s ease-in-out;\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"])),(function(n){return n.theme.radius.normal})),P=j.ZP.div(o||(o=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background: ",";\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n  border-radius: ",";\n"])),(function(n){return n.subscribed?"red":n.theme.colors.primaryTextColor}),(function(n){return n.theme.radius.round})),k=j.ZP.div(i||(i=(0,v.Z)(["\n  width: 30px;\n  height: 30px;\n  background: ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.colors.primaryBgColor}),(function(n){return n.theme.radius.round})),L=j.ZP.img.attrs((function(n){return{src:n.avatar?n.avatar:Z,alt:"avatar"}}))(s||(s=(0,v.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n"]))),X=j.ZP.h2(u||(u=(0,v.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.2;\n  text-transform: uppercase;\n"])),(function(n){return n.theme.fontSizes.xxs}),(function(n){return n.theme.fontWeight.normal})),A=j.ZP.h2(a||(a=(0,v.Z)(["\n  text-decoration: underline;\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.2;\n  text-transform: uppercase;\n"])),(function(n){return n.theme.fontSizes.xxs}),(function(n){return n.theme.fontWeight.normal})),S=j.ZP.p(c||(c=(0,v.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.2;\n  text-transform: uppercase;\n"])),(function(n){return n.theme.fontSizes.xxxs}),(function(n){return n.theme.fontWeight.normal})),J=j.ZP.h2(l||(l=(0,v.Z)(["\n  text-decoration: underline;\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.2;\n  text-transform: uppercase;\n"])),(function(n){return n.theme.fontSizes.xxs}),(function(n){return n.theme.fontWeight.normal})),F=j.ZP.p(f||(f=(0,v.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.2;\n  text-transform: uppercase;\n"])),(function(n){return n.theme.fontSizes.xxxs}),(function(n){return n.theme.fontWeight.normal})),H=(0,j.ZP)(z.OL)(d||(d=(0,v.Z)(["\n  &:hover {\n    background: ",";\n  }\n  padding: 6px 12px;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  cursor: pointer;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 8px;\n  transition: background 0.2s ease-in-out;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.fontSizes.xxxs}),(function(n){return n.theme.fontWeight.bolt}),(function(n){return n.theme.colors.secondaryTextColor}),(function(n){return n.isFollowed?n.theme.colors.accentColor:n.theme.colors.primaryTextColor})),Y=t(3329),T=function(n){var e=n.currentUser,t=n.location,r=(0,m.v9)(w.f),o=e.user,i=e.avatar;return(0,Y.jsxs)(y,{children:[(0,Y.jsx)("div",{style:{flex:.5},children:(0,Y.jsx)(P,{subscribed:e.followersId.includes(r.id),children:(0,Y.jsx)(k,{children:(0,Y.jsx)(L,{avatar:i})})})}),(0,Y.jsxs)("div",{style:{flex:1.5},children:[(0,Y.jsx)(X,{children:o.length>15?o.slice(0,14).toLowerCase()+"...":o.toLowerCase()}),(0,Y.jsx)(A,{children:"tweets:"}),(0,Y.jsx)(S,{children:parseInt(e.tweets).toLocaleString("en")}),(0,Y.jsx)(J,{children:"followers:"}),(0,Y.jsx)(F,{children:parseInt(e.followers).toLocaleString("en")})]}),(0,Y.jsx)("div",{style:{flex:.5},children:(0,Y.jsx)(H,{to:"/tweets/".concat(e.id),state:{from:t},children:"open"})})]})},O=t(2265),V=(0,j.ZP)(O.ZP)(x||(x=(0,v.Z)(["\n  margin-bottom: 5px;\n  color: black;\n"]))),I=[{value:"show all",label:"show all"},{value:"follow",label:"follow"},{value:"followings",label:"followings"}];function U(n){var e=n.selectedOption,t=n.setSelectedOption,r=(0,z.lr)(),o=(0,h.Z)(r,2),i=o[0],s=o[1];return(0,p.useEffect)((function(){t(I.find((function(n){return n.value===i.get("query")}))?{value:i.get("query"),label:i.get("query")}:e)}),[]),(0,Y.jsx)("div",{style:{width:"100%",marginBottom:"15px"},children:(0,Y.jsx)(V,{value:I.find((function(n){return n.value===i.get("query")}))?{value:i.get("query"),label:i.get("query")}:e,onChange:function(n){t(n),s({query:n.value})},options:I,placeholder:"Select an option"})})}var C,E,K,M=t(8076),q=t(5071),R=t(7679),G=(j.ZP.img.attrs({src:R,alt:"avatar"})(C||(C=(0,v.Z)(["\n  width: 308px;\n  margin-bottom: 88px;\n"]))),j.ZP.ul(E||(E=(0,v.Z)(["\n  width: 100%;\n  margin-bottom: 16px;\n"])))),N=j.ZP.button(K||(K=(0,v.Z)(["\n  &:hover {\n    transform: scale(1.05);\n  }\n  margin: 0 auto;\n  padding: 8px 10px;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  cursor: pointer;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  transition: transform 0.2s ease-in-out;\n  background-color: ",";\n"])),(function(n){return n.theme.fontSizes.xxs}),(function(n){return n.theme.fontWeight.bolt}),(function(n){return n.theme.colors.secondaryTextColor}),(function(n){return n.isFollowed?n.theme.colors.accentColor:n.theme.colors.primaryTextColor})),W=function(){var n=(0,b.TH)(),e=(0,m.I0)(),t=(0,m.v9)(q.R),r=(0,m.v9)(w.f),o=(0,m.v9)(q.g),i=(0,p.useState)([]),s=(0,h.Z)(i,2),u=s[0],a=s[1],c=(0,p.useState)(!0),l=(0,h.Z)(c,2),f=l[0],d=l[1],x=(0,p.useState)(3),v=(0,h.Z)(x,2),j=v[0],z=v[1],Z=(0,p.useState)({value:"show all",label:"show all"}),y=(0,h.Z)(Z,2),P=y[0],k=y[1];(0,p.useEffect)((function(){e((0,M.u)()),a(t)}),[e]),(0,p.useEffect)((function(){"show all"===P.value?a(t):"follow"===P.value?a(t.filter((function(n){return!n.followersId.includes(r.id)}))):"followings"===P.value&&a(t.filter((function(n){return n.followersId.includes(r.id)})))}),[r.id,P,t]),(0,p.useEffect)((function(){d(o)}),[o]);return(0,Y.jsx)(Y.Fragment,{children:f?(0,Y.jsx)(g.a,{}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(U,{setSelectedOption:k,selectedOption:P}),(0,Y.jsx)(G,{children:u.slice(0,j).map((function(e){return(0,Y.jsx)(T,{currentUser:e,location:n},e.id)}))}),j<u.length&&(0,Y.jsx)(N,{onClick:function(){z((function(n){return n+3}))},children:"Load more"})]})})},Q=function(){return(0,Y.jsx)(W,{})}},4289:function(n,e,t){t.d(e,{f:function(){return r}});var r=function(n){return n.auth.user}},5071:function(n,e,t){t.d(e,{R:function(){return r},g:function(){return o}});var r=function(n){return n.users.data},o=function(n){return n.users.isRefreshing}},7679:function(n,e,t){n.exports=t.p+"static/media/banner.b186e544641a66e17d83.png"},3864:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=854.ac00df7d.chunk.js.map