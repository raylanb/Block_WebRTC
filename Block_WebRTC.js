// ==UserScript==
// @name            Disable WebRTC
// @namespace       https://github.com/raylanb/Block_WebRTC
// @homepage        https://github.com/raylanb/Block_WebRTC
// @updateURL       https://raw.githubusercontent.com/raylanb/Block_WebRTC/refs/heads/main/Block_WebRTC.js
// @downloadURL     https://raw.githubusercontent.com/raylanb/Block_WebRTC/refs/heads/main/Block_WebRTC.js
// @version         0.1
// @created         2024-11-03
// @lastUpdated     2024-11-03
// @description     Disable WebRTC to prevent IP leakage
// @author          raylanb
// @match           *://*/*
// @grant           none
// ==/UserScript==

(function() {
    'use strict';

    // 禁用标准和浏览器前缀的WebRTC API
    if (typeof navigator.getUserMedia !== "undefined") navigator.getUserMedia = undefined;
    if (typeof window.MediaStreamTrack !== "undefined") window.MediaStreamTrack = undefined;
    if (typeof window.RTCPeerConnection !== "undefined") window.RTCPeerConnection = undefined;
    if (typeof window.RTCSessionDescription !== "undefined") window.RTCSessionDescription = undefined;

    if (typeof navigator.mozGetUserMedia !== "undefined") navigator.mozGetUserMedia = undefined;
    if (typeof window.mozMediaStreamTrack !== "undefined") window.mozMediaStreamTrack = undefined;
    if (typeof window.mozRTCPeerConnection !== "undefined") window.mozRTCPeerConnection = undefined;
    if (typeof window.mozRTCSessionDescription !== "undefined") window.mozRTCSessionDescription = undefined;

    if (typeof navigator.webkitGetUserMedia !== "undefined") navigator.webkitGetUserMedia = undefined;
    if (typeof window.webkitMediaStreamTrack !== "undefined") window.webkitMediaStreamTrack = undefined;
    if (typeof window.webkitRTCPeerConnection !== "undefined") window.webkitRTCPeerConnection = undefined;
    if (typeof window.webkitRTCSessionDescription !== "undefined") window.webkitRTCSessionDescription = undefined;

})();