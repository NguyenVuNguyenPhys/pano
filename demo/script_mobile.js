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
var script = {"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","data":{"defaultLocale":"en","textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"pitch":1,"volume":1,"rate":1},"history":{},"name":"Player486","locales":{"en":"locale/en.txt"}},"scripts":{"setMapLocation":TDV.Tour.Script.setMapLocation,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"disableVR":TDV.Tour.Script.disableVR,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showWindow":TDV.Tour.Script.showWindow,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"toggleVR":TDV.Tour.Script.toggleVR,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPixels":TDV.Tour.Script.getPixels,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMainViewer":TDV.Tour.Script.getMainViewer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"initAnalytics":TDV.Tour.Script.initAnalytics,"translate":TDV.Tour.Script.translate,"shareSocial":TDV.Tour.Script.shareSocial,"clone":TDV.Tour.Script.clone,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getOverlays":TDV.Tour.Script.getOverlays,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"createTween":TDV.Tour.Script.createTween,"registerKey":TDV.Tour.Script.registerKey,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"playAudioList":TDV.Tour.Script.playAudioList,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"resumePlayers":TDV.Tour.Script.resumePlayers,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"historyGoBack":TDV.Tour.Script.historyGoBack,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"init":TDV.Tour.Script.init,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"existsKey":TDV.Tour.Script.existsKey,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizStart":TDV.Tour.Script.quizStart,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setLocale":TDV.Tour.Script.setLocale,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getMediaByName":TDV.Tour.Script.getMediaByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizFinish":TDV.Tour.Script.quizFinish,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"executeJS":TDV.Tour.Script.executeJS,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getKey":TDV.Tour.Script.getKey,"showPopupImage":TDV.Tour.Script.showPopupImage,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"textToSpeech":TDV.Tour.Script.textToSpeech,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setValue":TDV.Tour.Script.setValue,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getComponentByName":TDV.Tour.Script.getComponentByName,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"mixObject":TDV.Tour.Script.mixObject,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"isPanorama":TDV.Tour.Script.isPanorama,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"downloadFile":TDV.Tour.Script.downloadFile,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"openLink":TDV.Tour.Script.openLink,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"cloneBindings":TDV.Tour.Script.cloneBindings,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"enableVR":TDV.Tour.Script.enableVR},"scrollBarColor":"#000000","vrPolyfillScale":0.5,"defaultMenu":["fullscreen","mute","rotation"],"hash": "3a23f70c0344cec98944c32a594714efe2687bf4d9cec5c743ece8c7c282bc33", "definitions": [{"overflow":"scroll","left":"25%","scrollBarWidth":5,"right":"25%","data":{"name":"Center"},"scrollBarColor":"#000000","children":["this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile","this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile","this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile","this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile","this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile","this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile"],"horizontalAlign":"center","verticalAlign":"middle","class":"Container","scrollBarMargin":1,"backgroundOpacity":0,"height":"100%","visible":false,"layout":"horizontal","propagateClick":false,"minHeight":1,"minWidth":1,"top":"0%","id":"Container_129084CF_1C83_AF18_418C_2D8031993BE6_mobile"},{"data":{"name":"VR"},"horizontalAlign":"center","verticalAlign":"middle","class":"IconButton","width":46,"backgroundOpacity":0,"height":46,"maxHeight":46,"maxWidth":46,"propagateClick":false,"transparencyActive":true,"minHeight":1,"minWidth":1,"id":"IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile","tabIndex":0,"iconURL":"skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile.png"},{"overflow":"scroll","left":"0%","scrollBarWidth":5,"data":{"name":"Left"},"scrollBarColor":"#000000","children":["this.IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile","this.IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile","this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile"],"paddingLeft":5,"verticalAlign":"middle","class":"Container","width":"50%","scrollBarMargin":1,"backgroundOpacity":0,"height":"100%","layout":"horizontal","propagateClick":false,"minHeight":1,"minWidth":1,"top":"0%","id":"Container_1185BA07_1C82_BB09_4190_3425ACEF39CF_mobile"},{"left":"40%","right":"40%","horizontalAlign":"center","data":{"name":"-Expand"},"verticalAlign":"middle","class":"IconButton","backgroundOpacity":0,"height":46,"visible":false,"maxHeight":46,"maxWidth":46,"propagateClick":false,"transparencyActive":true,"minHeight":1,"minWidth":1,"id":"IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, 'showEffect', false)}.bind(this); visibleFunc(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_3A451B34_1C82_9908_41AD_37B1C5A316C2, 'hideEffect', false)}.bind(this); invisibleFunc(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile); invisibleFunc(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile); invisibleFunc(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile)","bottom":0,"tabIndex":0,"iconURL":"skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile.png"},{"rollOverIconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile_rollover.png","data":{"name":"Right"},"horizontalAlign":"center","transparencyActive":true,"verticalAlign":"middle","class":"IconButton","width":23,"backgroundOpacity":0,"height":23,"propagateClick":false,"minHeight":0,"minWidth":0,"pressedIconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile_pressed.png","id":"IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile","tabIndex":0,"iconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile.png"},{"data":{"name":"Thumblist"},"mode":"toggle","horizontalAlign":"center","transparencyActive":true,"verticalAlign":"middle","class":"IconButton","width":46,"backgroundOpacity":0,"height":46,"propagateClick":false,"minHeight":0,"minWidth":0,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5, 'hideEffect', false)}.bind(this); if(!this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile.get('visible')){ visibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile) } else { invisibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile) }","id":"IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile","tabIndex":0,"iconURL":"skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile.png"},{"overflow":"scroll","left":"2%","scrollBarWidth":5,"right":"2%","data":{"name":"SETTINGS"},"scrollBarColor":"#000000","children":["this.Container_1185BA07_1C82_BB09_4190_3425ACEF39CF_mobile","this.Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36_mobile","this.Container_129084CF_1C83_AF18_418C_2D8031993BE6_mobile"],"class":"Container","scrollBarMargin":1,"backgroundOpacity":0.9,"height":50,"layout":"absolute","propagateClick":false,"backgroundColorRatios":[0],"minHeight":1,"gap":5,"minWidth":1,"backgroundColor":["#534741"],"id":"Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile","bottom":10},{"class":"FadeOutEffect","id":"effect_0A30489F_1C86_6738_41A8_2722230A2E2F","duration":100},{"rollOverIconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile_rollover.png","data":{"name":"Left"},"horizontalAlign":"center","transparencyActive":true,"verticalAlign":"middle","class":"IconButton","width":23,"backgroundOpacity":0,"height":23,"propagateClick":false,"minHeight":0,"minWidth":0,"pressedIconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile_pressed.png","id":"IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile","tabIndex":0,"iconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile.png"},{"rollOverIconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile_rollover.png","data":{"name":"Zoom In"},"horizontalAlign":"center","transparencyActive":true,"verticalAlign":"middle","class":"IconButton","width":23,"backgroundOpacity":0,"height":23,"propagateClick":false,"minHeight":0,"minWidth":0,"pressedIconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile_pressed.png","id":"IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile","tabIndex":0,"iconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile.png"},{"rollOverIconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile_rollover.png","data":{"name":"Zoom Out"},"horizontalAlign":"center","transparencyActive":true,"verticalAlign":"middle","class":"IconButton","width":23,"backgroundOpacity":0,"height":23,"propagateClick":false,"minHeight":0,"minWidth":0,"pressedIconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile_pressed.png","id":"IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile","tabIndex":0,"iconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile.png"},{"right":"2%","horizontalAlign":"center","data":{"name":"next"},"verticalAlign":"middle","class":"IconButton","width":46,"backgroundOpacity":0,"visible":false,"maxHeight":46,"propagateClick":false,"maxWidth":46,"transparencyActive":true,"minHeight":1,"minWidth":1,"top":"35%","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","bottom":"35%","tabIndex":0,"id":"IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile","iconURL":"skin/IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile.png"},{"hfovMax":130,"label":trans('panorama_31AF94B1_1549_E431_41AB_DD112BC36B04.label'),"data":{"label":"full-seamless-spherical-panorama-360-degrees-angle-view-on-bank-of-wide-river-in-front-of-bridge-in-city-center-360-panorama-in-equirectangular-proje-T258GN"},"thumbnailUrl":"media/panorama_31AF94B1_1549_E431_41AB_DD112BC36B04_t.jpg","hfovMin":"150%","hfov":360,"class":"Panorama","id":"panorama_31AF94B1_1549_E431_41AB_DD112BC36B04","vfov":180,"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":2,"url":"media/panorama_31AF94B1_1549_E431_41AB_DD112BC36B04_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","colCount":12,"class":"TiledImageResourceLevel","height":1024,"width":6144},{"rowCount":1,"url":"media/panorama_31AF94B1_1549_E431_41AB_DD112BC36B04_0/{face}/1/{row}_{column}.jpg","tags":["ondemand","preload"],"colCount":6,"class":"TiledImageResourceLevel","height":512,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_31AF94B1_1549_E431_41AB_DD112BC36B04_t.jpg"}],"overlays":["this.overlay_3DC8D51E_1559_A5F3_41B1_94C11CBDB00F"]},{"arrowKeysAction":"translate","buttonMoveRight":"this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile","buttonMoveDown":"this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer_mobile","buttonZoomOut":"this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile","class":"PanoramaPlayer","buttonMoveUp":"this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile","buttonZoomIn":"this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile","id":"MainViewer_mobilePanoramaPlayer","buttonCardboardView":"this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile","displayPlaybackBar":true,"aaEnabled":true,"touchControlMode":"drag_rotation","buttonMoveLeft":"this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile"},{"rollOverIconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile_rollover.png","data":{"name":"Down"},"horizontalAlign":"center","transparencyActive":true,"verticalAlign":"middle","class":"IconButton","width":23,"backgroundOpacity":0,"height":23,"propagateClick":false,"minHeight":0,"minWidth":0,"pressedIconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile_pressed.png","id":"IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile","tabIndex":0,"iconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile.png"},{"class":"FadeInEffect","id":"effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7","duration":200},{"class":"FadeInEffect","id":"effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050","duration":100},{"data":{"name":"Next"},"horizontalAlign":"center","transparencyActive":true,"verticalAlign":"middle","class":"IconButton","width":46,"backgroundOpacity":0,"height":46,"propagateClick":false,"minHeight":0,"minWidth":0,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","id":"IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile","tabIndex":0,"iconURL":"skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile.png"},{"paddingTop":8.5,"right":"2%","data":{"name":"THUMBNAIL LIST"},"scrollBarColor":"#FFFFFF","itemLabelFontFamily":"Arial","selectedItemBackgroundOpacity":0.9,"itemLabelFontStyle":"normal","toolTipBackgroundColor":"#F6F6F6","itemThumbnailShadowBlurRadius":8,"paddingLeft":7,"class":"ThumbnailList","itemLabelFontWeight":"normal","selectedItemBorderSize":1.5,"toolTipPaddingLeft":3,"paddingRight":7,"backgroundOpacity":0.9,"itemLabelTextDecoration":"none","height":101,"itemBackgroundOpacity":0,"rollOverItemLabelFontWeight":"normal","itemLabelFontColor":"#999999","itemThumbnailBorderRadius":0,"itemLabelFontSize":"9px","itemThumbnailShadowColor":"#000000","layout":"horizontal","toolTipShadowColor":"#333333","scrollBarOpacity":0,"itemBackgroundColor":[],"minHeight":10,"minWidth":10,"toolTipTextShadowColor":"#000000","itemPaddingBottom":3,"toolTipShadowBlurRadius":1,"selectedItemBackgroundColorRatios":[0.0392156862745098],"itemThumbnailWidth":120,"itemPaddingLeft":3,"rollOverItemLabelFontColor":"#FFFFFF","itemThumbnailShadowOpacity":0.54,"id":"ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile","toolTipBorderRadius":1,"itemThumbnailShadowSpread":1,"tabIndex":0,"itemThumbnailScaleMode":"fit_outside","bottom":60,"toolTipFontFamily":"Arial","itemThumbnailShadow":false,"selectedItemLabelFontWeight":"bold","itemThumbnailOpacity":1,"rollOverItemBackgroundOpacity":0,"scrollBarMargin":0,"toolTipFontSize":6,"toolTipBorderColor":"#767676","selectedItemBackgroundColor":["#534741"],"selectedItemLabelFontColor":"#FFFFFF","itemBackgroundColorDirection":"vertical","propagateClick":false,"backgroundColorRatios":[0],"itemBorderRadius":0,"gap":5,"itemLabelGap":4,"toolTipFontColor":"#606060","itemPaddingRight":3,"playList":"this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist","toolTipTextShadowBlurRadius":1,"backgroundColor":["#534741"],"itemThumbnailBorderSize":0,"scrollBarWidth":2,"selectedItemBorderColor":"#FFFFFF","itemPaddingTop":3,"toolTipPaddingRight":3,"left":"2%","itemThumbnailHeight":70,"itemBackgroundColorRatios":[]},{"left":"2%","data":{"name":"previous"},"horizontalAlign":"center","verticalAlign":"middle","class":"IconButton","width":46,"backgroundOpacity":0,"visible":false,"maxHeight":46,"propagateClick":false,"maxWidth":46,"transparencyActive":true,"minHeight":1,"minWidth":1,"top":"35%","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)","bottom":"35%","tabIndex":0,"id":"IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile","iconURL":"skin/IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile.png"},{"rollOverIconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile_rollover.png","data":{"name":"Up"},"horizontalAlign":"center","transparencyActive":true,"verticalAlign":"middle","class":"IconButton","width":23,"backgroundOpacity":0,"height":23,"propagateClick":false,"minHeight":0,"minWidth":0,"pressedIconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile_pressed.png","id":"IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile","tabIndex":0,"iconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile.png"},{"overflow":"scroll","scrollBarWidth":5,"right":"0%","data":{"name":"Right"},"scrollBarColor":"#000000","children":["this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile","this.IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile","this.IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile"],"horizontalAlign":"right","verticalAlign":"middle","class":"Container","width":"50%","scrollBarMargin":1,"paddingRight":5,"backgroundOpacity":0,"height":"100%","layout":"horizontal","propagateClick":false,"minHeight":1,"minWidth":1,"top":"0%","id":"Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36_mobile"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_31AF94B1_1549_E431_41AB_DD112BC36B04_camera","enterPointingToHorizon":true,"class":"PanoramaCamera","initialSequence":"this.sequence_3698757C_1549_A437_41B4_1CFD9219ABF3"},{"toolTip":trans('IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile.toolTip'),"toolTipFontFamily":"Arial","data":{"name":"fullscreen"},"mode":"toggle","horizontalAlign":"center","toolTipBackgroundColor":"#F6F6F6","verticalAlign":"middle","class":"IconButton","width":46,"toolTipPaddingLeft":3,"backgroundOpacity":0,"toolTipFontSize":6,"height":46,"toolTipBorderColor":"#767676","maxHeight":46,"maxWidth":46,"propagateClick":false,"toolTipShadowColor":"#333333","transparencyActive":true,"minHeight":1,"toolTipTextShadowBlurRadius":1,"minWidth":1,"toolTipTextShadowColor":"#000000","toolTipShadowBlurRadius":1,"toolTipFontColor":"#606060","toolTipPaddingRight":3,"id":"IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile","toolTipBorderRadius":1,"tabIndex":0,"iconURL":"skin/IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile.png"},{"data":{"name":"Collapse"},"horizontalAlign":"center","transparencyActive":true,"verticalAlign":"middle","class":"IconButton","width":46,"backgroundOpacity":0,"height":46,"propagateClick":false,"minHeight":0,"minWidth":0,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0A30489F_1C86_6738_41A8_2722230A2E2F, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile); invisibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050, 'showEffect', false)}.bind(this); visibleFunc(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile); visibleFunc(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile); visibleFunc(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile)","id":"IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile","tabIndex":0,"iconURL":"skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile.png"},{"subtitlesTextShadowHorizontalLength":1,"vrPointerColor":"#FFFFFF","data":{"name":"Main Viewer"},"subtitlesTextShadowVerticalLength":1,"playbackBarBorderColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionColor":"#FF6600","vrPointerSelectionTime":2000,"width":"100%","class":"ViewerArea","toolTipPaddingLeft":3,"playbackBarBorderRadius":0,"height":"100%","progressBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":1.5,"playbackBarLeft":0,"firstTransitionDuration":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"progressRight":0,"toolTipShadowColor":"#333333","playbackBarHeadBackgroundColorRatios":[0,1],"minHeight":25,"playbackBarHeadBorderSize":0,"minWidth":50,"playbackBarHeadShadow":true,"toolTipShadowBlurRadius":1,"progressBarBackgroundColorRatios":[0],"subtitlesBottom":50,"playbackBarHeadBorderColor":"#000000","subtitlesTop":0,"toolTipTextShadowColor":"#000000","id":"MainViewer_mobile","subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarProgressBackgroundColorRatios":[0],"progressBorderColor":"#000000","progressBarBorderColor":"#000000","toolTipFontFamily":"Arial","progressBarBackgroundColor":["#3399FF"],"surfaceReticleColor":"#FFFFFF","toolTipBorderRadius":1,"playbackBarBottom":5,"progressBackgroundColor":["#FFFFFF"],"subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"progressBottom":0,"playbackBarHeight":10,"progressHeight":10,"subtitlesBackgroundOpacity":0.2,"progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderRadius":0,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadWidth":6,"playbackBarBackgroundOpacity":1,"playbackBarBorderSize":0,"playbackBarRight":0,"progressBarBorderSize":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","toolTipBorderColor":"#767676","toolTipFontSize":"1.11vmin","progressBorderRadius":0,"subtitlesFontFamily":"Arial","subtitlesFontSize":"3vmin","propagateClick":false,"subtitlesGap":0,"progressLeft":0,"playbackBarProgressBorderColor":"#000000","toolTipTextShadowBlurRadius":1,"subtitlesBackgroundColor":"#000000","toolTipFontColor":"#606060","toolTipPaddingRight":3,"playbackBarHeadBorderRadius":0,"vrThumbstickRotationStep":20,"subtitlesTextShadowOpacity":1,"subtitlesFontColor":"#FFFFFF"},{"class":"FadeOutEffect","id":"effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5","duration":200},{"class":"FadeOutEffect","id":"effect_3A451B34_1C82_9908_41AD_37B1C5A316C2","duration":100},{"items":[{"player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_31AF94B1_1549_E431_41AB_DD112BC36B04","camera":"this.panorama_31AF94B1_1549_E431_41AB_DD112BC36B04_camera"}],"class":"PlayList","id":"ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist"},{"items":[{"player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_31AF94B1_1549_E431_41AB_DD112BC36B04","camera":"this.panorama_31AF94B1_1549_E431_41AB_DD112BC36B04_camera","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"class":"PlayList","id":"mainPlayList"},{"data":{"name":"Previous"},"horizontalAlign":"center","transparencyActive":true,"verticalAlign":"middle","class":"IconButton","width":46,"backgroundOpacity":0,"height":46,"propagateClick":false,"minHeight":0,"minWidth":0,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)","id":"IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile","tabIndex":0,"iconURL":"skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile.png"},{"areas":["this.HotspotPanoramaOverlayArea_3DCA4520_1559_A5CF_41A1_BB8333CC7D0E"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_32BD2FDD_155A_A471_41AE_2C3CA3162492","vertices":[{"yaw":82.18,"class":"PanoramaPoint","pitch":-1.92},{"yaw":128.22,"class":"PanoramaPoint","pitch":-2.4},{"yaw":-157.44,"class":"PanoramaPoint","pitch":-54.64},{"yaw":-14.03,"class":"PanoramaPoint","pitch":-75.71}],"distance":50,"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"Layer 1"}}],"data":{"label":"Layer 1"},"id":"overlay_3DC8D51E_1559_A5F3_41B1_94C11CBDB00F","maps":[]},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"id":"sequence_3698757C_1549_A437_41B4_1CFD9219ABF3","class":"PanoramaCameraSequence"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_3DCA4520_1559_A5CF_41A1_BB8333CC7D0E","displayTooltipInTouchScreens":true},{"class":"ImageResource","levels":[{"url":"media/res_32BD2FDD_155A_A471_41AE_2C3CA3162492_0.png","class":"ImageResourceLevel","height":753,"width":1173}],"id":"res_32BD2FDD_155A_A471_41AE_2C3CA3162492"}],"width":"100%","scrollBarMargin":2,"class":"Player","height":"100%","layout":"absolute","propagateClick":false,"backgroundColorRatios":[0],"children":["this.MainViewer_mobile","this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile","this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile","this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile","this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile","this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile"],"minHeight":20,"gap":10,"minWidth":20,"backgroundColor":["#FFFFFF"],"buttonToggleFullscreen":"this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile","id":"rootPlayer"};
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