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
var script = {"start":"this.init()","data":{"defaultLocale":"en","textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"pitch":1,"volume":1,"rate":1},"history":{},"name":"Player748","locales":{"en":"locale/en.txt"}},"scripts":{"setMapLocation":TDV.Tour.Script.setMapLocation,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"disableVR":TDV.Tour.Script.disableVR,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showWindow":TDV.Tour.Script.showWindow,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"toggleVR":TDV.Tour.Script.toggleVR,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPixels":TDV.Tour.Script.getPixels,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMainViewer":TDV.Tour.Script.getMainViewer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"initAnalytics":TDV.Tour.Script.initAnalytics,"translate":TDV.Tour.Script.translate,"shareSocial":TDV.Tour.Script.shareSocial,"clone":TDV.Tour.Script.clone,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getOverlays":TDV.Tour.Script.getOverlays,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"createTween":TDV.Tour.Script.createTween,"registerKey":TDV.Tour.Script.registerKey,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"playAudioList":TDV.Tour.Script.playAudioList,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"resumePlayers":TDV.Tour.Script.resumePlayers,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"historyGoBack":TDV.Tour.Script.historyGoBack,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"init":TDV.Tour.Script.init,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"existsKey":TDV.Tour.Script.existsKey,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizStart":TDV.Tour.Script.quizStart,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setLocale":TDV.Tour.Script.setLocale,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getMediaByName":TDV.Tour.Script.getMediaByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizFinish":TDV.Tour.Script.quizFinish,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"executeJS":TDV.Tour.Script.executeJS,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getKey":TDV.Tour.Script.getKey,"showPopupImage":TDV.Tour.Script.showPopupImage,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"textToSpeech":TDV.Tour.Script.textToSpeech,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setValue":TDV.Tour.Script.setValue,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getComponentByName":TDV.Tour.Script.getComponentByName,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"mixObject":TDV.Tour.Script.mixObject,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"isPanorama":TDV.Tour.Script.isPanorama,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"downloadFile":TDV.Tour.Script.downloadFile,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"openLink":TDV.Tour.Script.openLink,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"cloneBindings":TDV.Tour.Script.cloneBindings,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"enableVR":TDV.Tour.Script.enableVR},"scrollBarColor":"#000000","defaultMenu":["fullscreen","mute","rotation"],"hash": "3029f7065d4c5057ce7f67239a6c56466f2fc2b660cd7e12b0c97d1f5a027d61", "definitions": [{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_37492C71_1556_6431_41A1_8D340216AD22_camera","enterPointingToHorizon":true,"class":"PanoramaCamera","initialSequence":"this.sequence_354BA1FD_1556_BC31_41AD_8519EF87AF42"},{"subtitlesTextShadowHorizontalLength":1,"vrPointerColor":"#FFFFFF","data":{"name":"Main Viewer"},"subtitlesTextShadowVerticalLength":1,"playbackBarBorderColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionColor":"#FF6600","vrPointerSelectionTime":2000,"width":"100%","class":"ViewerArea","toolTipPaddingLeft":6,"playbackBarBorderRadius":0,"height":"100%","progressBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"firstTransitionDuration":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"progressRight":"33%","toolTipShadowColor":"#333138","progressOpacity":0.7,"playbackBarHeadBackgroundColorRatios":[0,1],"minHeight":50,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadBorderSize":0,"minWidth":100,"playbackBarHeadShadow":true,"progressBarBackgroundColorRatios":[0],"subtitlesBottom":50,"playbackBarHeadBorderColor":"#000000","subtitlesTop":0,"toolTipTextShadowColor":"#000000","id":"MainViewer","subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarProgressBackgroundColorRatios":[0],"progressBorderColor":"#000000","progressBarBorderColor":"#000000","toolTipFontFamily":"Arial","progressBarBackgroundColor":["#3399FF"],"surfaceReticleColor":"#FFFFFF","playbackBarBottom":5,"progressBackgroundColor":["#000000"],"subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"progressBottom":10,"toolTipPaddingBottom":4,"playbackBarHeight":10,"progressHeight":2,"subtitlesBackgroundOpacity":0.2,"progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderRadius":2,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadWidth":6,"playbackBarBackgroundOpacity":1,"playbackBarBorderSize":0,"playbackBarRight":0,"progressBarBorderSize":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","toolTipBorderColor":"#767676","toolTipFontSize":"1.11vmin","progressBorderRadius":2,"subtitlesFontFamily":"Arial","subtitlesFontSize":"3vmin","propagateClick":false,"subtitlesGap":0,"progressLeft":"33%","playbackBarProgressBorderColor":"#000000","subtitlesBackgroundColor":"#000000","toolTipFontColor":"#606060","toolTipPaddingTop":4,"toolTipPaddingRight":6,"playbackBarHeadBorderRadius":0,"vrThumbstickRotationStep":20,"subtitlesTextShadowOpacity":1,"subtitlesFontColor":"#FFFFFF"},{"hfov":360,"hfovMax":130,"label":trans('panorama_37492C71_1556_6431_41A1_8D340216AD22.label'),"class":"Panorama","data":{"label":"bg_0CBDBC0B_14CF_EBD1_41A5_31E9C2A4A9B2"},"thumbnailUrl":"media/panorama_37492C71_1556_6431_41A1_8D340216AD22_t.jpg","id":"panorama_37492C71_1556_6431_41A1_8D340216AD22","vfov":180,"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":1,"url":"media/panorama_37492C71_1556_6431_41A1_8D340216AD22_0/0/{row}_{column}.jpg","tags":["ondemand","preload"],"colCount":6,"class":"TiledImageResourceLevel","height":512,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_37492C71_1556_6431_41A1_8D340216AD22_t.jpg"}],"hfovMin":"150%"},{"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"aaEnabled":true,"touchControlMode":"drag_rotation"},{"items":[{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_37492C71_1556_6431_41A1_8D340216AD22","camera":"this.panorama_37492C71_1556_6431_41A1_8D340216AD22_camera","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"class":"PlayList","id":"mainPlayList"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"id":"sequence_354BA1FD_1556_BC31_41AD_8519EF87AF42","class":"PanoramaCameraSequence"}],"width":"100%","scrollBarMargin":2,"class":"Player","height":"100%","layout":"absolute","propagateClick":false,"backgroundColorRatios":[0],"children":["this.MainViewer"],"minHeight":0,"gap":10,"minWidth":0,"backgroundColor":["#FFFFFF"],"id":"rootPlayer"};
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
//Generated with v2024.0.4, Sat Sep 21 2024