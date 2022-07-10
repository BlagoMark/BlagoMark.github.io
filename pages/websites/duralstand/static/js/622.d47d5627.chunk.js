"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[622],{622:function(e,n,r){r.r(n),r.d(n,{default:function(){return z}});var t=r(5671),o=r(3144),s=r(136),u=r(5716),i=r(2791),l=r(8687),c=r(7781),a=r(946),f="SearchUsers_search__qMu6D",p="SearchUsers_searchBtn__v25SN",h=r(184),d=function(e){var n=i.createRef();return(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)("input",{value:e.searchText,onChange:function(){var r=n.current.value;e.onSearchUsersChange(r)},ref:n,type:"text",placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),(0,h.jsx)("button",{className:p,children:(0,h.jsx)("img",{src:"https://www.pngmart.com/files/8/Magnifying-Glass-PNG-No-Background.png",alt:""})})]})},g=(0,c.qC)((0,l.$j)((function(e){return{searchText:e.usersPage.searchText}}),{onSearchUsersChange:a.C$}))(d),v="Users_users__oN5Ju",w="Users_wrapper__OlyPm",y="Users_showMore__N1vkS",m="Users_item__KD6rO",_="Users_avatar__Ep9ss",x="Users_name__85yu-",C="Users_city__S9NAq",j="Users_unfollow__rMyqP",U=r(8055),N=r(3504),b=r(6840),k=function(e){return(0,h.jsxs)("div",{className:v,children:[e.isFetching?(0,h.jsx)(b.Z,{}):null,(0,h.jsx)("h2",{children:"\u041d\u0430\u0439\u0442\u0438 \u0434\u0440\u0443\u0437\u0435\u0439"}),(0,h.jsx)(g,{}),(0,h.jsx)("div",{className:w,children:e.users.map((function(n){return(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)(N.OL,{to:"/profile/".concat(n.id),className:_,children:(0,h.jsx)("img",{src:null!==n.photos.small?n.photos.large:U,alt:""})}),(0,h.jsx)(N.OL,{to:"/profile/".concat(n.id),className:x,children:n.name}),(0,h.jsx)("div",{className:C,children:n.city}),(0,h.jsx)("div",{children:n.followed?(0,h.jsx)("button",{disabled:e.followInProgress,onClick:function(){e.followTC(n.id)},className:"".concat(j," button"),children:"\u0412\u044b \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u044b"}):(0,h.jsx)("button",{disabled:e.followInProgress,onClick:function(){e.unfollowTC(n.id)},className:"button",children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})})]},n.id)}))}),(0,h.jsx)("div",{className:y,children:e.users.length>0?e.isFetcing?(0,h.jsx)("button",{disabled:!0,className:"button",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435"}):(0,h.jsx)("button",{className:"button",onClick:function(){e.onShowMoreUsers(e.page)},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435"}):null})]})},S=r(6713),P="NOT_FOUND";var M=function(e,n){return e===n};function F(e,n){var r="object"===typeof n?n:{equalityCheck:n},t=r.equalityCheck,o=void 0===t?M:t,s=r.maxSize,u=void 0===s?1:s,i=r.resultEqualityCheck,l=function(e){return function(n,r){if(null===n||null===r||n.length!==r.length)return!1;for(var t=n.length,o=0;o<t;o++)if(!e(n[o],r[o]))return!1;return!0}}(o),c=1===u?function(e){var n;return{get:function(r){return n&&e(n.key,r)?n.value:P},put:function(e,r){n={key:e,value:r}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var r=[];function t(e){var t=r.findIndex((function(r){return n(e,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return P}return{get:t,put:function(n,o){t(n)===P&&(r.unshift({key:n,value:o}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,l);function a(){var n=c.get(arguments);if(n===P){if(n=e.apply(null,arguments),i){var r=c.getEntries(),t=r.find((function(e){return i(e.value,n)}));t&&(n=t.value)}c.put(arguments,n)}return n}return a.clearCache=function(){return c.clear()},a}function T(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var r=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return n}function A(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];var o=function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];var s,u=0,i={memoizeOptions:void 0},l=t.pop();if("object"===typeof l&&(i=l,l=t.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var c=i,a=c.memoizeOptions,f=void 0===a?r:a,p=Array.isArray(f)?f:[f],h=T(t),d=e.apply(void 0,[function(){return u++,l.apply(null,arguments)}].concat(p)),g=e((function(){for(var e=[],n=h.length,r=0;r<n;r++)e.push(h[r].apply(null,arguments));return s=d.apply(null,e)}));return Object.assign(g,{resultFunc:l,memoizedResultFunc:d,dependencies:h,lastResult:function(){return s},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),g};return o}var I=A(F),O=function(e){return e.usersPage.page},q=function(e){return e.usersPage.usersCount},E=function(e){return e.usersPage.isFetching},Z=function(e){return e.usersPage.followInProgress},R=I((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),B=function(e){(0,s.Z)(r,e);var n=(0,u.Z)(r);function r(){var e;(0,t.Z)(this,r);for(var o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];return(e=n.call.apply(n,[this].concat(s))).onShowMoreUsers=function(){e.props.onShowMoreBtn(e.props.usersCount)},e}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.page,this.props.usersCount)}},{key:"render",value:function(){return(0,h.jsx)(k,{preloader:b.Z,users:this.props.users,page:this.props.page,onShowMoreUsers:this.onShowMoreUsers,unfollowTC:this.props.unfollowTC,followTC:this.props.followTC,isFetching:this.props.isFetching})}}]),r}(i.Component),z=(0,c.qC)((0,l.$j)((function(e){return{users:R(e),page:O(e),usersCount:q(e),isFetching:E(e),followAPI:S.h3.follow,unfollowAPI:S.h3.unfollow,followInProgress:Z(e)}}),{follow:a.ZN,unfollow:a.fv,setUsers:a.HM,onShowMoreUsers:a.XU,toggleIsFollowInProgress:a.FU,getUsers:a.Rf,onShowMoreBtn:a.BF,followTC:a.iR,unfollowTC:a.Ky}))(B)},8055:function(e,n,r){e.exports=r.p+"static/media/user.a6143582309785dca610.png"}}]);
//# sourceMappingURL=622.d47d5627.chunk.js.map