(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scrollBarMargin":2,"data":{"name":"Player757","defaultLocale":"en","textToSpeechConfig":{"speechOnQuizQuestion":false,"pitch":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"volume":1,"stopBackgroundAudio":false,"rate":1},"locales":{"en":"locale/en.txt"},"history":{}},"start":"this.init()","propagateClick":false,"scrollBarColor":"#000000","hash": "2076396f7902e9fda1b03f922b9214d5b70d80b8351e806fb2614fe0252e9ec8", "definitions": [{"surfaceReticleRadius":0.02,"surfaceReticleMaxRadius":50,"surfaceSelectionCoef":2,"label":trans('model_0BB0635D_1804_4873_41B4_C36607F2155F.label'),"thumbnailUrl":"media/model_0BB0635D_1804_4873_41B4_C36607F2155F_t.jpg","environmentIntensity":0.5,"data":{"label":"vr_apartment_loft_interior__baked","showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true},"model":"this.res_0BF6A10B_1804_49D7_41A8_E5B60E2B07B0","lights":["this.light_0C08F10C_1804_49D1_4180_28D539B4AC4A"],"camera":"this.cam_0BF9810C_1804_49D1_41B2_EE90F4C19876","environmentURL":"media/model_0BB0635D_1804_4873_41B4_C36607F2155F/bg_0C1FD10D_1804_49D3_41A4_64870763B957.jpg","floorRadius":23.58,"backgroundColor":"#333333","class":"Model3D","id":"model_0BB0635D_1804_4873_41B4_C36607F2155F","objects":[],"surfaceReticleMinRadius":15},{"class":"Model3DPlayer","id":"MainViewerModel3DPlayer","viewerArea":"this.MainViewer"},{"toolTipFontFamily":"Arial","playbackBarProgressBorderColor":"#000000","subtitlesBottom":50,"data":{"name":"Main Viewer"},"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"toolTipPaddingTop":4,"playbackBarHeadBorderColor":"#000000","playbackBarHeight":10,"width":"100%","surfaceReticleColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"toolTipFontColor":"#606060","playbackBarBorderSize":0,"class":"ViewerArea","subtitlesTextShadowOpacity":1,"toolTipBackgroundColor":"#F6F6F6","height":"100%","progressLeft":"33%","playbackBarHeadWidth":6,"toolTipShadowColor":"#333138","playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowVerticalLength":1,"playbackBarProgressBorderSize":0,"minHeight":50,"playbackBarRight":0,"progressBackgroundColor":["#000000"],"subtitlesTextShadowColor":"#000000","playbackBarProgressBorderRadius":0,"minWidth":100,"toolTipTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"firstTransitionDuration":0,"subtitlesBackgroundOpacity":0.2,"id":"MainViewer","playbackBarHeadShadowBlurRadius":3,"toolTipBorderColor":"#767676","progressBottom":10,"progressHeight":2,"vrPointerColor":"#FFFFFF","progressBorderSize":0,"playbackBarHeadShadowOpacity":0.7,"progressBarBorderRadius":2,"subtitlesFontFamily":"Arial","playbackBarLeft":0,"vrPointerSelectionTime":2000,"playbackBarHeadHeight":15,"progressBarBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"propagateClick":false,"subtitlesBorderColor":"#FFFFFF","toolTipPaddingRight":6,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","subtitlesFontSize":"3vmin","playbackBarProgressBackgroundColorRatios":[0],"subtitlesGap":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontSize":"1.11vmin","playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"progressBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"progressRight":"33%","progressOpacity":0.7,"progressBarBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","vrThumbstickRotationStep":20,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTop":0,"playbackBarBackgroundOpacity":1,"toolTipPaddingBottom":4,"playbackBarBottom":5,"playbackBarBorderRadius":0,"progressBorderRadius":2,"toolTipPaddingLeft":6},{"items":[{"player":"this.MainViewerModel3DPlayer","class":"Model3DPlayListItem","media":"this.model_0BB0635D_1804_4873_41B4_C36607F2155F","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)"}],"class":"PlayList","id":"mainPlayList"},{"class":"Model3DResource","id":"res_0BF6A10B_1804_49D7_41A8_E5B60E2B07B0","levels":[{"class":"Model3DResourceLevel","url":"media/model_0BB0635D_1804_4873_41B4_C36607F2155F/scene.glb"},{"tags":"mobile","class":"Model3DResourceLevel","url":"media/model_0BB0635D_1804_4873_41B4_C36607F2155F/scene_mobile.glb"}]},{"class":"AmbientLight","id":"light_0C08F10C_1804_49D1_4180_28D539B4AC4A","intensity":0.5},{"minZ":-32.92,"maxZ":28.49,"initialY":1.62,"maxY":14.15,"initialX":2.24,"id":"cam_0BF9810C_1804_49D1_41B2_EE90F4C19876","minY":-10.9,"maxX":37.6,"initialZ":-2.21,"minX":-33.11,"vrEnabled":true,"class":"FirstPersonModel3DCamera","autoNearFar":true,"initialPitch":-30}],"width":"100%","layout":"absolute","class":"Player","children":["this.MainViewer"],"defaultMenu":["fullscreen","mute","rotation"],"height":"100%","scripts":{"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"shareSocial":TDV.Tour.Script.shareSocial,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupImage":TDV.Tour.Script.showPopupImage,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"mixObject":TDV.Tour.Script.mixObject,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getMediaByName":TDV.Tour.Script.getMediaByName,"showWindow":TDV.Tour.Script.showWindow,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"translate":TDV.Tour.Script.translate,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"cloneBindings":TDV.Tour.Script.cloneBindings,"clone":TDV.Tour.Script.clone,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"historyGoForward":TDV.Tour.Script.historyGoForward,"createTween":TDV.Tour.Script.createTween,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"historyGoBack":TDV.Tour.Script.historyGoBack,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"init":TDV.Tour.Script.init,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"resumePlayers":TDV.Tour.Script.resumePlayers,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"initAnalytics":TDV.Tour.Script.initAnalytics,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setLocale":TDV.Tour.Script.setLocale,"getKey":TDV.Tour.Script.getKey,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"initQuiz":TDV.Tour.Script.initQuiz,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizShowScore":TDV.Tour.Script.quizShowScore,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"isPanorama":TDV.Tour.Script.isPanorama,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlays":TDV.Tour.Script.getOverlays,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"disableVR":TDV.Tour.Script.disableVR,"setMapLocation":TDV.Tour.Script.setMapLocation,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizStart":TDV.Tour.Script.quizStart,"toggleVR":TDV.Tour.Script.toggleVR,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"enableVR":TDV.Tour.Script.enableVR,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMainViewer":TDV.Tour.Script.getMainViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"setValue":TDV.Tour.Script.setValue,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"registerKey":TDV.Tour.Script.registerKey,"executeJS":TDV.Tour.Script.executeJS,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"existsKey":TDV.Tour.Script.existsKey,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizFinish":TDV.Tour.Script.quizFinish,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"openLink":TDV.Tour.Script.openLink,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playAudioList":TDV.Tour.Script.playAudioList,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPixels":TDV.Tour.Script.getPixels,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot},"minHeight":0,"minWidth":0,"backgroundColorRatios":[0],"backgroundColor":["#FFFFFF"],"id":"rootPlayer","gap":10};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.4.js.map
})();
//Generated with v2024.0.4, Sun Sep 22 2024