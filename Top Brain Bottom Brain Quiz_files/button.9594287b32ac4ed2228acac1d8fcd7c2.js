__twttrll([1],{70:function(t,e,n){var r=n(71);t.exports=r.build([n(81)])},81:function(t,e,n){function r(t){return"large"===t?"l":"m"}function i(t){t.params({screenName:{required:!0},lang:{required:!0,transform:p.matchLanguage,fallback:"en"},size:{fallback:"medium",transform:r},showScreenName:{fallback:!0},showCount:{fallback:!0},partner:{fallback:h(s.val,s,"partner")},count:{},align:{},preview:{}}),t.define("getUrlParams",function(){return l.compact({id:this.id,lang:this.params.lang,size:this.params.size,screen_name:this.params.screenName,show_count:"none"===this.params.count?!1:this.params.showCount,show_screen_name:this.params.showScreenName,preview:this.params.preview,align:this.params.align,partner:this.params.partner,dnt:c.enabled(),_:+new Date})}),t.around("widgetDataAttributes",function(t){return l.aug({"screen-name":this.params.screenName},t())}),t.override("render",function(){var t=f(m,{lang:this.params.lang}),e=d.encode(this.getUrlParams()),n=u.base()+t+"#"+e;return o.all([this.sandbox.setTitle(v),this.sandbox.addClass(g),this.sandbox.loadDocument(n)])})}var o=n(2),a=n(71),s=n(16),u=n(34),c=n(46),f=n(82),l=n(14),d=n(29),h=n(20),p=n(83),m="/widgets/follow_button.cdbb86670a638fdf59f924a227d4d799.{{lang}}.html",v="Twitter Follow Button",g="twitter-follow-button";t.exports=a.couple(n(86),i)},82:function(t,e){function n(t,e){return t.replace(r,function(t,n){return void 0!==e[n]?e[n]:t})}var r=/\{\{([\w_]+)\}\}/g;t.exports=n},196:function(t,e,n){var r=n(71);t.exports=r.build([n(197)])},197:function(t,e,n){function r(t){return"large"===t?"l":"m"}function i(t){return g.contains(R,t)}function o(t){return g.contains(j,t)}function a(t){return y.hashTag(t,!1)}function s(t){var e=/\+/.test(t)&&!/ /.test(t);return e?t.replace(/\+/g," "):t}function u(t){t.params({lang:{required:!0,transform:x.matchLanguage,fallback:"en"},size:{fallback:"medium",transform:r},type:{fallback:"share",validate:i},count:{fallback:"horizontal",validate:o},text:{transform:s},screenName:{transform:y.screenName},buttonHashtag:{transform:a},partner:{fallback:E(d.val,d,"partner")},via:{},related:{},hashtags:{},url:{},countUrl:{},align:{},searchLink:{}}),t.define("getUrlParams",function(){var t=this.params.text,e=this.params.url,n=this.params.count,r=this.params.via,i=this.params.related,o=v.getScreenNameFromPage();return"share"===this.params.type?(t=t||f.title,e=e||v.getCanonicalURL()||l.href,r=r||o):(n="none",o&&(i=i?o+","+i:o)),g.compact({id:this.id,lang:this.params.lang,size:this.params.size,type:this.params.type,text:t,url:e,via:r,related:i,button_hashtag:this.params.buttonHashtag,count:n,counturl:this.params.countUrl,searchlink:this.params.searchLink,screen_name:this.params.screenName,hashtags:this.params.hashtags,align:this.params.align,partner:this.params.partner,original_referer:l.href,dnt:p.enabled(),_:+new Date})}),t.around("widgetDataAttributes",function(t){return"mention"==this.params.type?g.aug({"screen-name":this.params.screenName},t()):"hashtag"==this.params.type?g.aug({hashtag:this.params.buttonHashtag},t()):g.aug({url:this.params.url},t())}),t.override("render",function(){var t,e=m(_,{lang:this.params.lang}),n=w.encode(this.getUrlParams()),r=h.base()+e+"#"+n;switch(this.params.type){case"hashtag":t=N;break;case"mention":t=I;break;default:t=C}return c.all([this.sandbox.setTitle(A),this.sandbox.addClass(T),this.sandbox.addClass(t),this.sandbox.loadDocument(r)])})}var c=n(2),f=n(9),l=n(13),d=n(16),h=n(34),p=n(46),m=n(82),v=n(48),g=n(14),w=n(29),y=n(28),b=n(71),E=n(20),x=n(83),_="/widgets/tweet_button.acd25e6d83d3bc35d5d31d08f52ef7ab.{{lang}}.html",A="Twitter Tweet Button",T="twitter-tweet-button",C="twitter-share-button",N="twitter-hashtag-button",I="twitter-mention-button",R=["share","hashtag","mention"],j=["vertical","horizontal","none"];t.exports=b.couple(n(86),u)}});
/*
     FILE ARCHIVED ON 13:24:32 Oct 09, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:09:38 Jan 26, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/