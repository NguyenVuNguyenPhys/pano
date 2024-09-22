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
var script = {"scrollBarMargin":2,"data":{"name":"Player475","defaultLocale":"en","textToSpeechConfig":{"speechOnQuizQuestion":false,"pitch":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"volume":1,"stopBackgroundAudio":false,"rate":1},"locales":{"en":"locale/en.txt"},"history":{}},"start":"this.init(); this.initOverlayGroupRotationOnClick('group0EE64C94_19FD_D065_4191_D63326B61915')","propagateClick":false,"scrollBarColor":"#000000","hash": "2a29f2201b0eda0b5f503cbe81f4cfb2d8fab55f9fd83cc5949ccecf79f845a3", "definitions": [{"class":"PanoramaCamera","id":"panorama_0D76D37D_199E_B0A7_41B9_826653F064D8_camera","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_0ACBF354_199E_D0E5_4195_730D79772F36","enterPointingToHorizon":true},{"items":[{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_0D76D37D_199E_B0A7_41B9_826653F064D8","camera":"this.panorama_0D76D37D_199E_B0A7_41B9_826653F064D8_camera","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"thumbnailUrl":"media/panorama_0D76D37D_199E_B0A7_41B9_826653F064D8_t.jpg","vfov":180,"label":trans('panorama_0D76D37D_199E_B0A7_41B9_826653F064D8.label'),"data":{"label":"360Screenshot_Async"},"hfovMax":130,"hfov":360,"hfovMin":"120%","frames":[{"thumbnailUrl":"media/panorama_0D76D37D_199E_B0A7_41B9_826653F064D8_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"rowCount":6,"height":3072,"url":"media/panorama_0D76D37D_199E_B0A7_41B9_826653F064D8_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","colCount":36,"class":"TiledImageResourceLevel","width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_0D76D37D_199E_B0A7_41B9_826653F064D8_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","colCount":18,"class":"TiledImageResourceLevel","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_0D76D37D_199E_B0A7_41B9_826653F064D8_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","colCount":12,"class":"TiledImageResourceLevel","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_0D76D37D_199E_B0A7_41B9_826653F064D8_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"colCount":6,"class":"TiledImageResourceLevel","width":3072}]}}],"class":"Panorama","id":"panorama_0D76D37D_199E_B0A7_41B9_826653F064D8","overlays":["this.overlay_0EE93C94_19FD_D065_418B_D7D5607451EA","this.overlay_0EE83C94_19FD_D065_4170_289226DF3E26","this.overlay_07B98D27_19EB_70A3_41B1_FFD7BAB9BCB1","this.overlay_0693A9FD_19E5_73A7_41B4_080573CCD75F","this.overlay_0413427D_19E5_D0A7_41B8_5A36C7F2E3B6"]},{"mouseControlMode":"drag_rotation","aaEnabled":true,"displayPlaybackBar":true,"class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","arrowKeysAction":"translate","touchControlMode":"drag_rotation"},{"toolTipPaddingLeft":6,"toolTipFontFamily":"Arial","playbackBarProgressBorderColor":"#000000","subtitlesBottom":50,"data":{"name":"Main Viewer"},"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"toolTipPaddingTop":4,"playbackBarHeadBorderColor":"#000000","playbackBarHeight":10,"width":"100%","surfaceReticleColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"toolTipFontColor":"#606060","playbackBarBorderSize":0,"class":"ViewerArea","subtitlesTextShadowOpacity":1,"progressLeft":"33%","height":"100%","playbackBarHeadWidth":6,"toolTipShadowColor":"#333138","playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowVerticalLength":1,"playbackBarProgressBorderSize":0,"minHeight":50,"playbackBarRight":0,"progressBackgroundColor":["#000000"],"playbackBarProgressBorderRadius":0,"minWidth":100,"toolTipTextShadowColor":"#000000","subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"firstTransitionDuration":0,"subtitlesBackgroundOpacity":0.2,"id":"MainViewer","playbackBarHeadShadowBlurRadius":3,"toolTipBorderColor":"#767676","progressBottom":10,"progressHeight":2,"vrPointerColor":"#FFFFFF","progressBorderSize":0,"playbackBarHeadShadowOpacity":0.7,"progressBarBorderRadius":2,"subtitlesFontFamily":"Arial","playbackBarLeft":0,"vrPointerSelectionTime":2000,"playbackBarHeadHeight":15,"progressBarBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"propagateClick":false,"subtitlesBorderColor":"#FFFFFF","toolTipPaddingRight":6,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","subtitlesFontSize":"3vmin","playbackBarProgressBackgroundColorRatios":[0],"subtitlesGap":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontSize":"1.11vmin","playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"progressBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"progressRight":"33%","progressOpacity":0.7,"progressBarBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","vrThumbstickRotationStep":20,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTop":0,"toolTipPaddingBottom":4,"playbackBarBackgroundOpacity":1,"playbackBarBottom":5,"playbackBarBorderRadius":0,"progressBorderRadius":2,"toolTipBackgroundColor":"#F6F6F6"},{"class":"PanoramaCameraSequence","id":"sequence_0ACBF354_199E_D0E5_4195_730D79772F36","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in"},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out"}]},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_0EE01CD1_19FD_D1FE_41AF_0726CEDF9540"],"data":{"groupIndex":0,"label":"Layer 2","group":"group0EE64C94_19FD_D065_4191_D63326B61915"},"useHandCursor":true,"items":["this.erectHs_0E240326_19FD_D0A5_418E_B94899627C0E"],"projected":true,"class":"HotspotPanoramaOverlay","id":"overlay_0EE93C94_19FD_D065_418B_D7D5607451EA","maps":[]},{"enabledInCardboard":true,"enabled":false,"areas":["this.HotspotPanoramaOverlayArea_052F8A20_19EA_B05D_41B0_31319BDF0EE4"],"data":{"groupIndex":1,"label":"Color Fill 1","group":"group0EE64C94_19FD_D065_4191_D63326B61915"},"useHandCursor":true,"items":["this.erectHs_0E9B6958_19FD_D0ED_41A3_B267CA24BF29"],"projected":true,"class":"HotspotPanoramaOverlay","id":"overlay_0EE83C94_19FD_D065_4170_289226DF3E26","maps":[]},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_07A1BD56_19EB_70E5_4185_1E2ECF76807B"],"data":{"label":"Text"},"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_07BE4D25_19EB_70A7_4193_52A29EE201BD"],"class":"HotspotPanoramaOverlay","id":"overlay_07B98D27_19EB_70A3_41B1_FFD7BAB9BCB1","maps":[]},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_06925A0B_19E5_7063_4192_B289FDB3169A"],"data":{"label":"Text"},"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_069319FD_19E5_73A7_4190_169A40DB7219"],"class":"HotspotPanoramaOverlay","id":"overlay_0693A9FD_19E5_73A7_41B4_080573CCD75F","maps":[]},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_04084297_19E5_D063_417D_A15C3BE244A7"],"data":{"label":"Text"},"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_0410C27B_19E5_D0A3_41B2_D0D3FBA3536D"],"class":"HotspotPanoramaOverlay","id":"overlay_0413427D_19E5_D0A7_41B8_5A36C7F2E3B6","maps":[]},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_0EE01CD1_19FD_D1FE_41AF_0726CEDF9540"},{"vfov":38.95,"distance":50,"data":{"label":"Layer 2"},"roll":0,"pitch":-21.34,"class":"HotspotPanoramaOverlayImage","id":"erectHs_0E240326_19FD_D0A5_418E_B94899627C0E","image":{"levels":[{"height":886,"url":"media/panorama_0D76D37D_199E_B0A7_41B9_826653F064D8_HS_o8tmd465.png","class":"ImageResourceLevel","premultipliedAlpha":true,"width":915}],"class":"ImageResource"},"yaw":16.54,"hfov":40.25},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_052F8A20_19EA_B05D_41B0_31319BDF0EE4"},{"vfov":38.95,"distance":50,"data":{"label":"Color Fill 1"},"roll":0,"pitch":-21.34,"class":"HotspotPanoramaOverlayImage","id":"erectHs_0E9B6958_19FD_D0ED_41A3_B267CA24BF29","image":{"levels":[{"height":886,"url":"media/panorama_0D76D37D_199E_B0A7_41B9_826653F064D8_HS_g5alit6b.png","class":"ImageResourceLevel","premultipliedAlpha":true,"width":915}],"class":"ImageResource"},"yaw":16.54,"hfov":40.25},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_07A1BD56_19EB_70E5_4185_1E2ECF76807B","click":"this.setOverlaysVisibility([this.overlay_0EE93C94_19FD_D065_418B_D7D5607451EA], true, 0)"},{"vfov":5.35,"distance":50,"data":{"label":"Text"},"image":{"levels":["this.imlevel_06F7DBDA_19E6_B7ED_41B6_616E1D46B995"],"class":"ImageResource"},"hfov":16.32,"pitch":-7.85,"class":"HotspotPanoramaOverlayImage","id":"HotspotPanoramaOverlayTextImage_07BE4D25_19EB_70A7_4193_52A29EE201BD","yaw":-17.07},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_06925A0B_19E5_7063_4192_B289FDB3169A","click":"this.setOverlaysVisibility([this.overlay_0EE83C94_19FD_D065_4170_289226DF3E26], true, 0)"},{"vfov":5.19,"distance":50,"data":{"label":"Text"},"image":{"levels":["this.imlevel_06D8AC30_19E6_B0BD_419D_40752252AD36"],"class":"ImageResource"},"hfov":15.63,"pitch":-14.38,"class":"HotspotPanoramaOverlayImage","id":"HotspotPanoramaOverlayTextImage_069319FD_19E5_73A7_4190_169A40DB7219","yaw":-17.46},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_04084297_19E5_D063_417D_A15C3BE244A7","click":"this.setOverlaysVisibility([this.overlay_0EE93C94_19FD_D065_418B_D7D5607451EA,this.overlay_0EE83C94_19FD_D065_4170_289226DF3E26], false, 0)"},{"vfov":5.13,"distance":50,"data":{"label":"Text"},"image":{"levels":["this.imlevel_06D50C93_19E6_B063_41B6_D2D41A3FAC3E"],"class":"ImageResource"},"hfov":14.75,"pitch":-20.43,"class":"HotspotPanoramaOverlayImage","id":"HotspotPanoramaOverlayTextImage_0410C27B_19E5_D0A3_41B2_D0D3FBA3536D","yaw":-17.94},{"height":241.99,"id":"imlevel_06F7DBDA_19E6_B7ED_41B6_616E1D46B995","url":trans('imlevel_06F7DBDA_19E6_B7ED_41B6_616E1D46B995.url'),"class":"ImageResourceLevel","width":742.62},{"height":234.77,"id":"imlevel_06D8AC30_19E6_B0BD_419D_40752252AD36","url":trans('imlevel_06D8AC30_19E6_B0BD_419D_40752252AD36.url'),"class":"ImageResourceLevel","width":711.21},{"height":232.41,"id":"imlevel_06D50C93_19E6_B063_41B6_D2D41A3FAC3E","url":trans('imlevel_06D50C93_19E6_B063_41B6_D2D41A3FAC3E.url'),"class":"ImageResourceLevel","width":671.18}],"width":"100%","layout":"absolute","class":"Player","children":["this.MainViewer"],"defaultMenu":["fullscreen","mute","rotation"],"height":"100%","scripts":{"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPixels":TDV.Tour.Script.getPixels,"downloadFile":TDV.Tour.Script.downloadFile,"mixObject":TDV.Tour.Script.mixObject,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getOverlays":TDV.Tour.Script.getOverlays,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"executeJS":TDV.Tour.Script.executeJS,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"toggleVR":TDV.Tour.Script.toggleVR,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"translate":TDV.Tour.Script.translate,"initQuiz":TDV.Tour.Script.initQuiz,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"registerKey":TDV.Tour.Script.registerKey,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizShowScore":TDV.Tour.Script.quizShowScore,"clone":TDV.Tour.Script.clone,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"unregisterKey":TDV.Tour.Script.unregisterKey,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"createTween":TDV.Tour.Script.createTween,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"init":TDV.Tour.Script.init,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"cloneBindings":TDV.Tour.Script.cloneBindings,"existsKey":TDV.Tour.Script.existsKey,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMapLocation":TDV.Tour.Script.setMapLocation,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"setLocale":TDV.Tour.Script.setLocale,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getKey":TDV.Tour.Script.getKey,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizStart":TDV.Tour.Script.quizStart,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playAudioList":TDV.Tour.Script.playAudioList,"historyGoBack":TDV.Tour.Script.historyGoBack,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"quizFinish":TDV.Tour.Script.quizFinish,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"resumePlayers":TDV.Tour.Script.resumePlayers,"showWindow":TDV.Tour.Script.showWindow,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMainViewer":TDV.Tour.Script.getMainViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"historyGoForward":TDV.Tour.Script.historyGoForward,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"initAnalytics":TDV.Tour.Script.initAnalytics,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setValue":TDV.Tour.Script.setValue,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"shareSocial":TDV.Tour.Script.shareSocial,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"isPanorama":TDV.Tour.Script.isPanorama,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"openLink":TDV.Tour.Script.openLink,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"enableVR":TDV.Tour.Script.enableVR,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"disableVR":TDV.Tour.Script.disableVR,"showPopupImage":TDV.Tour.Script.showPopupImage},"minHeight":0,"minWidth":0,"backgroundColorRatios":[0],"backgroundColor":["#FFFFFF"],"gap":10,"id":"rootPlayer"};
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