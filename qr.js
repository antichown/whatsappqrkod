<!DOCTYPE html>
<html class="js adownload cssanimations csstransitions no-webp" dir="ltr" loc="en" manifest="/wa.appcache"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>WhatsApp</title>
<meta name="viewport" content="width=device-width">
<meta name="google" content="notranslate">
<meta name="format-detection" content="telephone=no">

<meta name="description" content="Quickly send and receive WhatsApp messages right from your computer.">
<meta name="og:description" content="Quickly send and receive WhatsApp messages right from your computer.">
<meta name="og:url" content="https://web.whatsapp.com/">
<meta name="og:title" content="WhatsApp Web">
<meta name="og:image" content="https://www.whatsapp.com/img/whatsapp-promo.png">

<link id="favicon" rel="shortcut icon" href="blob:https://web.whatsapp.com/ce6be261-8089-486a-a3f7-8166c7687216" type="image/png">
<link rel="apple-touch-icon" sizes="194x194" href="https://web.whatsapp.com/apple-touch-icon.png" type="image/png">

<link rel="stylesheet" href="qr_files/sprite_ae3a9d14cd6ae5ad8d7b83b6c969e138.css">
<link rel="stylesheet" id="style" href="qr_files/style_c24fc97425e1f88a03551f7eae79fd04.css">

<style>
html, body, #app {
height: 100%;
width: 100%;
overflow: hidden;
padding: 0;
margin: 0;
}

#app {
position: absolute;
top: 0;
left: 0;
}

#startup, #initial_startup {
width: 100%;
height: 100%;
position: fixed;
background-color: #f2f2f2;

-moz-user-select: none;
-webkit-user-select: none;

display: flex;
align-items: center;
justify-content: center;
display: -webkit-box;
display: -webkit-flex;
-webkit-align-items: center;
-webkit-justify-content: center;
flex-direction: column;
-webkit-flex-direction: column;
}

.spinner-container {
-webkit-animation: rotate 2s linear infinite;
animation: rotate 2s linear infinite;
z-index: 2;
}

.spinner-container .path {
stroke-dasharray: 1,150; 
stroke-dashoffset: 0;
stroke: rgba(27, 154, 89, 0.7);
stroke-linecap: round;
-webkit-animation: dash 1.5s ease-in-out infinite;
animation: dash 1.5s ease-in-out infinite;
}

#startup .spinner-container .path,
#initial_startup .spinner-container .path {
stroke: #acb9bf;
}

@keyframes rotate {
100% { transform: rotate(360deg); }
}
@-webkit-keyframes rotate{
100% { -webkit-transform: rotate(360deg); }
}

@keyframes dash {
0% {
stroke-dasharray: 1,150;  
stroke-dashoffset: 0;
}
50% {
stroke-dasharray: 90,150; 
stroke-dashoffset: -35;   
}
100% {
stroke-dasharray: 90,150; 
stroke-dashoffset: -124;  
}
}
@-webkit-keyframes dash {
0% {
stroke-dasharray: 1,150;  
stroke-dashoffset: 0;
}
50% {
stroke-dasharray: 90,150; 
stroke-dashoffset: -35;   
}
100% {
stroke-dasharray: 90,150; 
stroke-dashoffset: -124;  
}
}

.progress-container {
width: 360px;
position: fixed;
padding-top: 120px;
top: 50%;
left: 50%;
margin-left: -180px;
}

progress {
-webkit-appearance: none;
appearance: none;
width: 100%;
height: 3px;
border: none;
margin: 0;
color: #02d1a4;
background-color: #e0e4e5;
}

progress[value]::-webkit-progress-bar {
background-color: #e0e4e5;
}

progress[value]::-webkit-progress-value {
background-color: #02d1a4;
}

progress[value]::-moz-progress-bar {
background-color: #02d1a4;
}
</style>
<script id="progress_script_/vendor1.308e9c77352944a94781.js" type="text/javascript" charset="utf-8" async="" src="qr_files/vendor1.js"></script><style type="text/css" id="igtranslator-color"></style><script id="progress_script_/vendor2.0e0ca419867c2796ff75.js" type="text/javascript" charset="utf-8" async="" src="qr_files/vendor2.js"></script><script id="progress_script_/app.663b27e3a301c85f3b7e.js" type="text/javascript" charset="utf-8" async="" src="qr_files/app.js"></script><script id="progress_script_/main.b59afe69210a34b998d1.js" type="text/javascript" charset="utf-8" async="" src="qr_files/main.js"></script><style id="asset-style" type="text/css"></style><script type="text/javascript" charset="utf-8" async="" src="qr_files/main.js"></script><script type="text/javascript" charset="utf-8" async="" src="qr_files/svg.js"></script></head>
<body class="web">
<div id="app"><div data-reactroot="" class="app-wrapper app-wrapper-web"><span></span><div id="wrapper"><div id="window"><div class="entry-main"><div class="qr-wrapper-container"><div class="qrcode idle" data-ref="1@1PkAUma2YmnAoyqBQ8IpUY5cWzRmxR9/7UuzRkqzyZF8mkzgLaTY7UCy,rFR3Lhh+SwHSr4v5nl/wuW8wlAVImPR4NB7v88NuVRE=,b0YFb/44myIfhyqwxi71JA=="><span><button class="qr-button" style="transform: scaleX(1) scaleY(1);"><div class="qr-container"><div class="icon icon-refresh-l-light"></div><!-- react-text: 46 -->Click to reload QR code<!-- /react-text --></div></button></span><span class="icon icon-logo"></span><canvas width="240" height="240" style="display: none;"></canvas><img alt="Scan me!" style="display: block;" src="data:image/png;base64,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"></div></div><div class="entry-text"><div class="entry-title">WhatsApp</div><div class="entry-subtitle">Use WhatsApp on your phone to scan the code</div><div class="entry-controls"><div class="toggle"><span></span><label><input name="rememberMe" value="on" checked="checked" type="checkbox"><!-- react-text: 21 -->Keep me signed in<!-- /react-text --></label></div><div class="hint">To reduce mobile data usage, connect your phone to Wi-Fi</div></div></div></div><div id="platforms"><ul class="list entry-platforms"><li class="list-item entry-platform"><span class="icon icon-platform icon-platform-android" title="Android"></span><div><div class="entry-platform-title">Android</div><div class="entry-platform-text">Open WhatsApp — Menu — WhatsApp Web</div></div></li><li class="list-item entry-platform"><span class="icon icon-platform icon-platform-iphone" title="iPhone"></span><div><div class="entry-platform-title">iPhone</div><div class="entry-platform-text">Open WhatsApp — Settings — WhatsApp Web</div></div></li><li class="list-item entry-platform"><span class="icon icon-platform icon-platform-wp" title="Windows Phone"></span><div><div class="entry-platform-title">Windows Phone</div><div class="entry-platform-text">Open WhatsApp — Menu — WhatsApp Web</div></div></li></ul></div></div></div></div></div>



<script src="qr_files/progress.js"></script>




<div class="igtranslator-main-div"><iframe src="qr_files/a.html" class="igtranslator-iframe" scrolling="no" frameborder="0"></iframe></div><div class="igtranslator-activator-icon bounceIn" style="background-image: url(resource://jid1-dgnibwqga0sibw-at-jetpack/data/icons/home.png)" title="Click to Show Translation"></div></body></html>