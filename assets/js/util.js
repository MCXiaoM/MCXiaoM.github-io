/* browser.js v1.0.1 | @ajlkn | MIT licensed */
var browser=function(){"use strict";var t={name:null,version:null,os:null,osVersion:null,touch:null,mobile:null,_canUse:null,canUse:function(e){t._canUse||(t._canUse=document.createElement("div"));var n=t._canUse.style,r=e.charAt(0).toUpperCase()+e.slice(1);return e in n||"Moz"+r in n||"Webkit"+r in n||"O"+r in n||"ms"+r in n},init:function(){for(var e=navigator.userAgent,n="other",r=0,i=[["firefox",/Firefox\/([0-9\.]+)/],["bb",/BlackBerry.+Version\/([0-9\.]+)/],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/],["opera",/OPR\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)/],["edge",/Edge\/([0-9\.]+)/],["safari",/Version\/([0-9\.]+).+Safari/],["chrome",/Chrome\/([0-9\.]+)/],["ie",/MSIE([0-9]+)/],["ie",/Trident\/.+rv:([0-9]+)/]],o=0;o<i.length;o++)if(e.match(i[o][1])){n=i[o][0],r=parseFloat(RegExp.$1);break}for(t.name=n,t.version=r,n="other",i=[["ios",/([0-9_]+)like Mac OS X/,function(e){return e.replace("_",".").replace("_","")}],["ios",/CPU like Mac OS X/,function(e){return 0}],["wp",/Windows Phone([0-9\.]+)/,null],["android",/Android([0-9\.]+)/,null],["mac",/Macintosh.+Mac OS X([0-9_]+)/,function(e){return e.replace("_",".").replace("_","")}],["windows",/Windows NT([0-9\.]+)/,null],["bb",/BlackBerry.+Version\/([0-9\.]+)/,null],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/,null],["linux",/Linux/,null],["bsd",/BSD/,null],["unix",/X11/,null]],o=r=0;o<i.length;o++)if(e.match(i[o][1])){n=i[o][0],r=parseFloat(i[o][2]?i[o][2](RegExp.$1):RegExp.$1);break}"mac"==n&&"ontouchstart"in window&&(1024==screen.width&&1366==screen.height||834==screen.width&&1112==screen.height||810==screen.width&&1080==screen.height||768==screen.width&&1024==screen.height)&&(n="ios"),t.os=n,t.osVersion=r,t.touch="wp"==t.os?0<navigator.msMaxTouchPoints:!!("ontouchstart"in window),t.mobile="wp"==t.os||"android"==t.os||"ios"==t.os||"bb"==t.os}};return t.init(),t}();!function(e,n){"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?module.exports=n():e.browser=n()}(this,function(){return browser});
/* breakpoints.js v1.0 | @ajlkn | MIT licensed */
var breakpoints=function(){"use strict";function e(e){t.init(e)}var t={list:null,media:{},events:[],init:function(e){t.list=e,window.addEventListener("resize",t.poll),window.addEventListener("orientationchange",t.poll),window.addEventListener("load",t.poll),window.addEventListener("fullscreenchange",t.poll)},active:function(e){var n,a,s,i,r,d,c;if(!(e in t.media)){if(">="==e.substr(0,2)?(a="gte",n=e.substr(2)):"<="==e.substr(0,2)?(a="lte",n=e.substr(2)):">"==e.substr(0,1)?(a="gt",n=e.substr(1)):"<"==e.substr(0,1)?(a="lt",n=e.substr(1)):"!"==e.substr(0,1)?(a="not",n=e.substr(1)):(a="eq",n=e),n&&n in t.list)if(i=t.list[n],Array.isArray(i)){if(r=parseInt(i[0]),d=parseInt(i[1]),isNaN(r)){if(isNaN(d))return;c=i[1].substr(String(d).length)}else c=i[0].substr(String(r).length);if(isNaN(r))switch(a){case"gte":s="screen";break;case"lte":s="screen and(max-width: "+d+c+")";break;case"gt":s="screen and(min-width: "+(d+1)+c+")";break;case"lt":s="screen and(max-width: -1px)";break;case"not":s="screen and(min-width: "+(d+1)+c+")";break;default:s="screen and(max-width: "+d+c+")"}else if(isNaN(d))switch(a){case"gte":s="screen and(min-width: "+r+c+")";break;case"lte":s="screen";break;case"gt":s="screen and(max-width: -1px)";break;case"lt":s="screen and(max-width: "+(r-1)+c+")";break;case"not":s="screen and(max-width: "+(r-1)+c+")";break;default:s="screen and(min-width: "+r+c+")"}else switch(a){case"gte":s="screen and(min-width: "+r+c+")";break;case"lte":s="screen and(max-width: "+d+c+")";break;case"gt":s="screen and(min-width: "+(d+1)+c+")";break;case"lt":s="screen and(max-width: "+(r-1)+c+")";break;case"not":s="screen and(max-width: "+(r-1)+c+"),screen and(min-width: "+(d+1)+c+")";break;default:s="screen and(min-width: "+r+c+")and(max-width: "+d+c+")"}}else s="("==i.charAt(0)?"screen and "+i:i;t.media[e]=!!s&&s}return t.media[e]!==!1&&window.matchMedia(t.media[e]).matches},on:function(e,n){t.events.push({query:e,handler:n,state:!1}),t.active(e)&&n()},poll:function(){var e,n;for(e=0;e<t.events.length;e++)n=t.events[e],t.active(n.query)?n.state||(n.state=!0,n.handler()):n.state&&(n.state=!1)}};return e._=t,e.on=function(e,n){t.on(e,n)},e.active=function(e){return t.active(e)},e}();!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.breakpoints=t()}(this,function(){return breakpoints});
/* util.js v1.0 */
(function($){
  $.fn.navList=function(){var $this=$(this),$a=$this.find('a'),b=[];$a.each(function(){var $this=$(this),indent=Math.max(0,$this.parents('li').length-1),href=$this.attr('href'),target=$this.attr('target');b.push('<a class="link depth-'+indent+'"'+((typeof target!=='undefined'&&target!='')?' target="'+target+'"':'')+((typeof href!=='undefined'&&href!='')?' href="'+href+'"' : '')+'><span class="indent-'+indent+'"></span>'+$this.text()+'</a>');});return b.join('');};
  $.fn.panel=function(userConfig){
    if(this.length==0)return $this;if(this.length> 1){for(var i=0; i<this.length; i++)$(this[i]).panel(userConfig); return $this;}var $this=$(this),$body=$('body'),$window=$(window),id=$this.attr('id'),config;
    config=$.extend({ delay: 0,hideOnClick: false,hideOnEscape: false,hideOnSwipe: false,resetScroll: false,resetForms: false,side: null,target: $this,visibleClass: 'visible' },userConfig);
    if(typeof config.target != 'jQuery')config.target=$(config.target);
    $this._hide=function(event){
      if(!config.target.hasClass(config.visibleClass))return;
      if(event){ event.preventDefault(); event.stopPropagation(); }
      config.target.removeClass(config.visibleClass);
      window.setTimeout(function(){ if(config.resetScroll)$this.scrollTop(0); if(config.resetForms)$this.find('form').each(function(){ this.reset(); }); },config.delay);
    };
    $this.css('-ms-overflow-style','-ms-autohiding-scrollbar').css('-webkit-overflow-scrolling','touch');
    if(config.hideOnClick){
      $this.find('a').css('-webkit-tap-highlight-color','rgba(0,0,0,0)');
      $this.on('click','a',function(event){
        var $a=$(this),href=$a.attr('href'),target=$a.attr('target');if(!href||href=='#'||href==''||href=='#'+id)return;
        event.preventDefault(); event.stopPropagation(); $this._hide();
        window.setTimeout(function(){ if(target=='_blank')window.open(href); else window.location.href=href; },config.delay+10);
      });
    }
    $this.on('touchstart',function(event){$this.touchPosX=event.originalEvent.touches[0].pageX; $this.touchPosY=event.originalEvent.touches[0].pageY;})
    $this.on('touchmove',function(event){
      if($this.touchPosX === null||$this.touchPosY === null)return;
      var diffX=$this.touchPosX-event.originalEvent.touches[0].pageX,diffY=$this.touchPosY-event.originalEvent.touches[0].pageY,th=$this.outerHeight(),ts =($this.get(0).scrollHeight-$this.scrollTop());
      if(config.hideOnSwipe){
        var result=false,boundary=20,delta=50;
        switch(config.side){
          case 'left': result=(diffY<boundary&&diffY>(-1*boundary))&&(diffX> delta); break;
          case 'right': result=(diffY<boundary&&diffY>(-1*boundary))&&(diffX<(-1*delta)); break;
          case 'top': result=(diffX<boundary&&diffX>(-1*boundary))&&(diffY> delta); break;
          case 'bottom': result=(diffX<boundary&&diffX>(-1*boundary))&&(diffY<(-1*delta)); break;
          default: break;
        }
        if(result){ $this.touchPosX=$this.touchPosY=null; $this._hide(); return false; }
      }
      if(($this.scrollTop()<0&&diffY<0)||(ts>(th-2)&&ts<(th+2)&&diffY>0)){ event.preventDefault(); event.stopPropagation(); }
    });
    $this.on('click touchend touchstart touchmove',function(event){ event.stopPropagation(); });
    $this.on('click','a[href="#'+id+'"]',function(event){ event.preventDefault(); event.stopPropagation(); config.target.removeClass(config.visibleClass); });
    $body.on('click touchend',function(event){ $this._hide(event); });
    $body.on('click','a[href="#'+id+'"]',function(event){ event.preventDefault(); event.stopPropagation(); config.target.toggleClass(config.visibleClass); });
    if(config.hideOnEscape)$window.on('keydown',function(event){ if(event.keyCode==27)$this._hide(event); });
    return $this;
  };
  $.fn.placeholder=function(){
    if(typeof(document.createElement('input')).placeholder != 'undefined')return $(this);
    if(this.length==0)return $this;
    if(this.length> 1){ for(var i=0; i<this.length; i++)$(this[i]).placeholder(); return $this; }
    var $this=$(this);
    $this.find('input[type=text],textarea').each(function(){
      var i=$(this); if(i.val()== ''|| i.val()== i.attr('placeholder'))i.addClass('polyfill-placeholder').val(i.attr('placeholder'));
    }).on('blur',function(){
      var i=$(this); if(i.attr('name').match(/-polyfill-field$/))return; if(i.val()== '')i.addClass('polyfill-placeholder').val(i.attr('placeholder'));
    }).on('focus',function(){
      var i=$(this); if(i.attr('name').match(/-polyfill-field$/))return; if(i.val()== i.attr('placeholder'))i.removeClass('polyfill-placeholder').val('');
    });
    $this.find('input[type=password]').each(function(){
      var i=$(this); var x=$($('<div>').append(i.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,'type=text'));
      if(i.attr('id')!= '')x.attr('id',i.attr('id')+ '-polyfill-field'); if(i.attr('name')!= '')x.attr('name',i.attr('name')+ '-polyfill-field');
      x.addClass('polyfill-placeholder').val(x.attr('placeholder')).insertAfter(i); if(i.val()== '')i.hide(); else x.hide();
      i.on('blur',function(event){
        event.preventDefault(); var x=i.parent().find('input[name='+i.attr('name')+ '-polyfill-field]');
        if(i.val()== ''){ i.hide(); x.show(); }
      });
      x.on('focus',function(event){
        event.preventDefault();
        var i=x.parent().find('input[name='+x.attr('name').replace('-polyfill-field','')+ ']');
        x.hide(); i.show().focus();
      }).on('keypress',function(event){ event.preventDefault(); x.val(''); });
    });
    $this.on('submit',function(){
      $this.find('input[type=text],input[type=password],textarea').each(function(event){
        var i=$(this);
        if(i.attr('name').match(/-polyfill-field$/))i.attr('name','');
        if(i.val()== i.attr('placeholder')){ i.removeClass('polyfill-placeholder'); i.val(''); }
      });
    }).on('reset',function(event){
      event.preventDefault(); $this.find('select').val($('option:first').val());
      $this.find('input,textarea').each(function(){
        var i=$(this),x; i.removeClass('polyfill-placeholder');
        switch(this.type){
          case 'submit': case 'reset': break;
          case 'password':
            i.val(i.attr('defaultValue'));
            x=i.parent().find('input[name='+i.attr('name')+ '-polyfill-field]');
            if(i.val()== ''){ i.hide(); x.show(); }
            else{ i.show(); x.hide(); }
            break;
          case 'checkbox': case 'radio': i.attr('checked',i.attr('defaultValue')); break;
          case 'text':
          case 'textarea': i.val(i.attr('defaultValue')); if(i.val()== ''){ i.addClass('polyfill-placeholder'); i.val(i.attr('placeholder')); } break;
          default: i.val(i.attr('defaultValue')); break;
        }
      });
    });
    return $this;
  };
  $.prioritize=function($elements,condition){var key='__prioritize';if(typeof $elements!='jQuery')$elements=$($elements);$elements.each(function(){var $e=$(this),$p,$parent=$e.parent();if($parent.length==0)return;if(!$e.data(key)){if(!condition)return;$p=$e.prev();if($p.length==0)return;$e.prependTo($parent);$e.data(key,$p);}else{if(condition)return;$p=$e.data(key);$e.insertAfter($p);$e.removeData(key);}});};
})(jQuery);
