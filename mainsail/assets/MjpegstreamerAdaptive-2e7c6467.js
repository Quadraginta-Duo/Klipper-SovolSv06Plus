import{m as u,B as p,G as d,P as m,j as _,n as g}from"./index-97b4652c.js";import{p as f}from"./vuetify-52f40ce5.js";import"./overlayscrollbars-44d87bcf.js";import"./echarts-9bc570b0.js";var v=Object.defineProperty,w=Object.getOwnPropertyDescriptor,h=(r,t,e,i)=>{for(var s=i>1?void 0:i?w(t,e):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&v(t,e,s),s};let o=class extends u(p,d){constructor(){super(...arguments),this.refresh=Math.ceil(Math.random()*Math.pow(10,12)),this.isVisible=!0,this.isVisibleDocument=!0,this.isVisibleViewport=!1,this.isLoaded=!0,this.timer=void 0,this.request_start_time=performance.now(),this.start_time=performance.now(),this.time=0,this.request_time=0,this.time_smoothing=.6,this.request_time_smoothing=.1,this.currentFPS=0,this.aspectRatio=null}get webcamStyle(){var e,i,s;const t={transform:this.generateTransform((e=this.camSettings.flip_horizontal)!=null?e:!1,(i=this.camSettings.flip_vertical)!=null?i:!1,(s=this.camSettings.rotation)!=null?s:0),aspectRatio:1.7777777777777777,maxHeight:window.innerHeight-155+"px",maxWidth:"auto"};return this.aspectRatio&&(t.aspectRatio=this.aspectRatio,t.maxWidth=(window.innerHeight-155)*this.aspectRatio+"px"),t}get fpsOutput(){return this.currentFPS<10?"0"+this.currentFPS.toString():this.currentFPS}get showFpsCounter(){var t,e;return this.showFps?!((e=(t=this.camSettings.extra_data)==null?void 0:t.hideFps)!=null&&e):!1}get rotate(){var t;return[90,270].includes((t=this.camSettings.rotation)!=null?t:0)}get url(){var t;return this.convertUrl((t=this.camSettings)==null?void 0:t.snapshot_url,this.printerUrl)}refreshFrame(){this.isVisible&&(this.refresh=new Date().getTime(),this.setFrame())}async setFrame(){let t=new URL(this.url);t.searchParams.append("bypassCache",this.refresh.toString()),this.request_start_time=performance.now(),this.currentFPS=this.time>0?Math.round(1e3/this.time):0;let e=this.$refs.image;if(e){const i=e.getContext("2d"),s=await this.loadImage(t.toString());if(this.aspectRatio=s.naturalWidth/s.naturalHeight,this.rotate&&(this.aspectRatio=1/this.aspectRatio),e.width=e.clientWidth,e.height=e.clientWidth/this.aspectRatio,this.rotate){const a=e.height/s.width,n=e.width/2,c=e.height/2;i.translate(n,c),i.rotate(this.camSettings.rotation*Math.PI/180),await(i==null?void 0:i.drawImage(s,-s.width/2*a,-s.height/2*a,s.width*a,s.height*a)),i.rotate(-(this.camSettings.rotation*Math.PI/180)),i.translate(-n,-c)}else await(i==null?void 0:i.drawImage(s,0,0,s.width,s.height,0,0,e.width,e.height));this.isLoaded=!0}this.$nextTick(()=>{this.onLoad()})}onLoad(){this.isLoaded=!0;const t=this.camSettings.target_fps||10,e=performance.now(),i=e-this.start_time;this.time=this.time*this.time_smoothing+i*(1-this.time_smoothing),this.start_time=e;const s=1e3/t,a=performance.now()-this.request_start_time;this.request_time=this.request_time*this.request_time_smoothing+a*(1-this.request_time_smoothing);const n=Math.max(0,s-this.request_time);this.$nextTick(()=>{this.timer=setTimeout(this.refreshFrame,n)})}loadImage(t){return new Promise(e=>{let i=new Image;i.onload=()=>e(i),i.onerror=()=>setTimeout(this.refreshFrame,1e3),i.src=t})}mounted(){document.addEventListener("visibilitychange",this.documentVisibilityChanged),this.refreshFrame()}beforeDestroy(){document.removeEventListener("visibilitychange",this.documentVisibilityChanged)}documentVisibilityChanged(){const t=document.visibilityState;this.isVisibleDocument=t==="visible",this.isVisibleDocument||this.stopStream(),this.visibilityChanged()}viewportVisibilityChanged(t){this.isVisibleViewport=t,this.visibilityChanged()}visibilityChanged(){if(this.isVisibleViewport&&this.isVisibleDocument){this.startStream();return}this.stopStream()}startStream(){this.isVisible||(this.isVisible=!0,this.refreshFrame())}stopStream(){this.isVisible=!1,clearTimeout(this.timer),this.timer=void 0}};h([m({required:!0})],o.prototype,"camSettings",2);h([m({default:null})],o.prototype,"printerUrl",2);h([m({default:!0})],o.prototype,"showFps",2);o=h([_],o);var b=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"d-flex justify-center",staticStyle:{position:"relative"}},[r.isLoaded?r._e():e("div",{staticClass:"text-center py-5"},[e(f,{attrs:{indeterminate:"",color:"primary"}})],1),e("canvas",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:r.viewportVisibilityChanged,expression:"viewportVisibilityChanged"}],ref:"image",class:"webcamImage "+(r.isLoaded?"":"hiddenWebcam"),style:r.webcamStyle,attrs:{width:"600",height:"400"}}),r.isLoaded&&r.showFpsCounter?e("span",{staticClass:"webcamFpsOutput"},[r._v(" "+r._s(r.$t("Panels.WebcamPanel.FPS"))+": "+r._s(r.fpsOutput)+" ")]):r._e()])},y=[];const l={};var S=g(o,b,y,!1,F,"72cc9e9c",null,null);function F(r){for(let t in l)this[t]=l[t]}const q=function(){return S.exports}();export{q as default};
