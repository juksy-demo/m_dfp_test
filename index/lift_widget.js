function _lgy_lift_callback_3745202 (_lgy_json) {  var _lgy_use_template  = false;
  var _lgy_template_name = '';
  var _lgy_article_links = {};

  var _lgy_lift_unescape = function (_lgy_str) {
    var _lgy_div = document.createElement("div");
    _lgy_div.innerHTML = _lgy_str;
    return _lgy_div.textContent || _lgy_div.innerText;
  }

  var _lgy_lift_escape = function (_lgy_str) {
    return _lgy_str.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;')
                   .replace(/"/g, '&quot;')
                   .replace(/'/g, '&#039;');
  }

  var _lgy_lift_substr = function (_lgy_str,_lgy_count) {
    if (_lgy_count && (_lgy_count < _lgy_str.length)) {
      return _lgy_str.substr(0,_lgy_count) + '...';
    } else {
      return _lgy_str;
    }
  }

  var _lgy_lift_image_property = function (_lgy_value) {
    var _lgy_property = {};
    var _lgy_widget_image_width = parseInt('150');
    var _lgy_widget_image_height = parseInt('150');
    var _lgy_widget_image_ratio = parseFloat(_lgy_widget_image_width/_lgy_widget_image_height);
    var _lgy_real_image_width = parseInt(_lgy_value['image_width']);
    var _lgy_real_image_height = parseInt(_lgy_value['image_height']);
    var _lgy_real_image_ratio = parseFloat(_lgy_real_image_width/_lgy_real_image_height);
    if (_lgy_use_template) {
      _lgy_property['width']  = _lgy_real_image_width;
      _lgy_property['height'] = _lgy_real_image_height;
    } else if ((_lgy_widget_image_ratio >= 1 && _lgy_widget_image_ratio >= _lgy_real_image_ratio && 'crop' == 'pad') || (_lgy_widget_image_ratio >= 1 && _lgy_widget_image_ratio < _lgy_real_image_ratio && 'crop' != 'pad') || (_lgy_widget_image_ratio < 1 && _lgy_real_image_ratio >= _lgy_widget_image_ratio && 'crop' != 'pad') || (_lgy_widget_image_ratio < 1 && _lgy_real_image_ratio < _lgy_widget_image_ratio && 'crop' == 'pad')) {
      _lgy_property['width'] = parseInt(_lgy_real_image_width*_lgy_widget_image_height/_lgy_real_image_height);
      _lgy_property['height'] = parseInt(_lgy_widget_image_height);
      _lgy_property['top'] = 0;
      _lgy_property['left'] = parseInt((_lgy_widget_image_width-_lgy_property['width'])/2);
    } else {
      _lgy_property['width'] = parseInt(_lgy_widget_image_width);
      _lgy_property['height'] = parseInt(_lgy_real_image_height*_lgy_widget_image_width/_lgy_real_image_width);
      _lgy_property['top'] = parseInt((_lgy_widget_image_height-_lgy_property['height'])/2);
      _lgy_property['left'] = 0;
    }
    return _lgy_property;
  }

  var _lgy_lift_construct = function () {
    var _lgy_lift_container = document.getElementById('compass-fit-3745202');
    if (_lgy_json.length == 0) {
      _lgy_lift_container.style.display='none';
        return;
    }

    // custom js(before)
    (function (json){
        
    })(_lgy_json);

    // DFP impression beacon
    var _lgy_diu = '';
    if (typeof(_lgy_diu) !== 'undefined' && _lgy_diu !== "") {
      var _img = new Image();
      _img.src = _lgy_diu;
    }

    if (_lgy_template_name != 'toaster') {
      _lgy_lift_container.innerHTML = _lgy_html;
    }

    var _lgy_touch;
    if ('ontouchstart' in window) {
      _lgy_touch = 'ontouchstart';
    } else if ('onmousedown' in window) {
      _lgy_touch = 'onmousedown';
    } else {
      _lgy_touch = 'onclick';
    }
    var _lgy_links = _lgy_lift_container.getElementsByTagName('a');
    for (var i = _lgy_links.length; i--; ) {
      var _lgy_link = _lgy_links[i];
      var _lgy_article_click_url = _lgy_article_links[_lgy_link.href];
      if (_lgy_article_click_url) {
        _lgy_link.setAttribute('data-click-url',_lgy_article_click_url);
        _lgy_link.setAttribute(_lgy_touch, "this.setAttribute('href',this.getAttribute('data-click-url'));");
      } else {
        _lgy_link.setAttribute('rel', 'nofollow');
      }
    }
    var _lgy_style = document.createElement('style');
    _lgy_style.type = "text/css";

    if (_lgy_use_template) {
      /* 初期化、共通処理 */
      /* 20150224 */
      lobj.init();
    }

    if (typeof(lobj) !== 'undefined' && lobj.uaBrowser() === 'ie8') {
      document.getElementsByTagName('head')[0].appendChild(_lgy_style);
    }
    if (_lgy_style.styleSheet) {
      _lgy_style.styleSheet.cssText = _lgy_css;
    } else {
      _lgy_style.appendChild(document.createTextNode(_lgy_css));
    }
    if (typeof(lobj) === 'undefined' || lobj.uaBrowser() !== 'ie8') {
      document.getElementsByTagName('head')[0].appendChild(_lgy_style);
    }

    if (_lgy_use_template) {
      if (_lgy_template_name == 'pattern_1') {
        /* lobj.imgpos(id名, 列の数, 縦幅の比率％, 最大最小値の設定フラグ, 幅の最小値px, 幅の最大値px) */
        lobj.imgpos('compass-fit-3745202', 'compass-fit-widget-content', 5, 66, true, 120, 240);
        lobj.modal(['compass-fit-widget-label-caption']);

      } else if (_lgy_template_name == 'pattern_2') {
        /* lobj.imgpos(id名, 列の数, 縦幅の比率％, 最大最小値の設定フラグ, 幅の最小値px, 幅の最大値px) */
        lobj.imgpos('compass-fit-3745202', 'compass-fit-widget-content', 5, 66, false, 120, 240);

      } else if (_lgy_template_name == 'toaster') {
        lobj.toaster();
        lobj.imgpos('compass-fit-toaster-contents', false, 1, 66, false);
        lobj.modal(['compass-fit-toaster-label-caption']);
      }
    }

    // custom js(after)
    (function (json){
        
    })(_lgy_json);
  }

  var _lgy_lift_ready = function () {
    var _lgy_ua = navigator.userAgent.toLowerCase();
    if(document.addEventListener){
      document.addEventListener("DOMContentLoaded", _lgy_lift_construct(), false);
    } else if(/msie/.test(_lgy_ua)){
      try {
        document.documentElement.doScroll("left");
      } catch(error){
        setTimeout(arguments.callee, 0);
        return;
      }
      _lgy_lift_construct();
    } else {
      window.onload = _lgy_lift_construct();
    }
    if (_lgy_template_name != 'toaster') { // area based v-beacon.
      if (visChecker) { visChecker.add('compass-fit-3745202', _lgy_json) }
    } else {
      if (visChecker) { visChecker.add('logly-lift-toaster-contents', _lgy_json) }
    }
    if (visChecker) { visChecker.init(); }
  }

  if (_lgy_template_name == 'toaster' && _lgy_json.length > 2 ) {
    _lgy_json = _lgy_json.slice(0, 2);
  }
  var _lgy_widget = _lgy_lift_unescape('&lt;!--[if lte IE 9 ]&gt;&lt;div id=&quot;compass-fit-widget&quot; class=&quot;ie-lte9&quot;&gt;&lt;![endif]--&gt;&lt;!--[if (gt IE 9)|!(IE)]&gt;&lt;!--&gt;&lt;div id=&quot;compass-fit-widget&quot;&gt;&lt;!--&lt;![endif]--&gt;  &lt;div id=&quot;compass-fit-widget-content&quot;&gt;    {{ADS}}    &lt;div class=&quot;compass-fit-clear&quot;&gt;&lt;/div&gt;  &lt;/div&gt;&lt;/div&gt;');
  var _lgy_ad = _lgy_lift_unescape(' &lt;a href=&quot;{{URL}}&quot; target=&quot;_blank&quot;&gt;    &lt;div style=&quot;background-color: #fff;display: inline-block;position: relative;width:100%;&quot;&gt;     &lt;img src=&quot;{{IMAGE_URL}}&quot; style=&quot;width: 165px;float:left;height: 110px;margin-right: 10px;&quot;&gt;          &lt;h4 style=&quot;overflow: hidden;margin: 10px;font-size: 16px;font-weight: 700;&quot;&gt;{{TITLE}}{{LEAD}}&lt;/h4&gt;     &lt;div style=&quot;bottom: 0;position: absolute;margin: 3px;font-size: 12px;right: 0;&quot;&gt;      &lt;a href=&quot;https://www.facebook.com/MicroAdTaiwanLtd/?fref=ts&quot; target=&quot; _blank&quot;style=&quot;margin-right: 10px;&quot;&gt;PR&lt;/a&gt;    &lt;/div&gt;      &lt;div style=&quot;display:none&quot; &gt;{{BEACON_IMG_TAG}}{{IMAGE_TOP}}{{IMAGE_LEFT}}{{IMAGE_WIDTH}}{{IMAGE_HEIGHT}}&lt;/div&gt;   &lt;/div&gt; &lt;/a&gt;  ');
  var _lgy_article = _lgy_lift_unescape('&lt;div class=&quot;compass-fit-ad compass-fit-article&quot; id=&quot;{{ITEM_ID}}&quot;&gt;  &lt;div class=&quot;compass-fit-ad-inner&quot;&gt;      &lt;div class=&quot;compass-fit-ad-image&quot;&gt;        &lt;div class=&quot;compass-fit-ad-image-inner&quot;&gt;          &lt;a href={{URL}} target={{TARGET}}&gt;            &lt;img src={{IMAGE_URL}} width={{IMAGE_WIDTH}} height={{IMAGE_HEIGHT}} style=&quot;width: {{IMAGE_WIDTH}}px; height: {{IMAGE_HEIGHT}}px; top: {{IMAGE_TOP}}px; left: {{IMAGE_LEFT}}px;&quot;/&gt;          &lt;/a&gt;        &lt;/div&gt;      &lt;/div&gt;              &lt;div class=&quot;compass-fit-ad-content&quot;&gt;        &lt;div class=&quot;compass-fit-ad-content-inner&quot;&gt;                      &lt;div class=&quot;compass-fit-ad-title&quot;&gt;              &lt;a href={{URL}} target={{TARGET}}&gt;{{TITLE}}&lt;/a&gt;            &lt;/div&gt;                    {{BEACON_IMG_TAG}}        &lt;/div&gt;      &lt;/div&gt;      &lt;/div&gt;&lt;/div&gt;');
  var _lgy_css = _lgy_lift_unescape('#compass-fit-3745202 #compass-fit-widget {width: 100%;}#compass-fit-3745202 #compass-fit-widget-label {border-bottom-style: solid;border-bottom-width: 2px;border-bottom-color: #5C97FF;}#compass-fit-3745202 #compass-fit-widget-label-caption {padding: 5px 10px;background-color: #5C97FF;float: left;}#compass-fit-3745202 #compass-fit-widget-label-caption a {color: #FFFFFF;text-decoration: none;}#compass-fit-3745202 .compass-fit-ad {display: inline-block;zoom: 1;vertical-align:top;width: 100%;margin: 5px 0;padding: 0;}#compass-fit-3745202 .compass-fit-ad-inner {display: table;width: 100%;}#compass-fit-3745202 .compass-fit-ad-image {display: table-cell;vertical-align: top;width: 150px;height: 150px;padding-right: 5px;}#compass-fit-3745202 .compass-fit-ad-image-inner {position: relative;overflow: hidden;width: 150px;height: 150px;}#compass-fit-3745202 .compass-fit-ad-image-inner img {position: absolute;max-width: none;max-height: none;border-style:none;}#compass-fit-3745202 .compass-fit-ad-content {display: table-cell;position: relative;height: 100%;vertical-align: top;word-break: break-all;}@-moz-document url-prefix() {#compass-fit-3745202 .compass-fit-ad-content-inner {position: relative;height: 100%;}}#compass-fit-3745202 .compass-fit-ad-body {margin-bottom: 20px;}#compass-fit-3745202 .compass-fit-ad-disclosure {width: 100%;height: 20px;position: absolute;bottom: 0;text-align: left;}#compass-fit-3745202 .compass-fit-ad-disclosure a {color: #999999;}#compass-fit-3745202 .compass-fit-clear {clear: both;}#compass-fit-3745202 .ie-lte9 .compass-fit-ad-image {float: left;}#compass-fit-3745202 .ie-lte9 .compass-fit-ad-body{margin-bottom:0;}#compass-fit-3745202 .ie-lte9 .compass-fit-ad-disclosure{position: relative;}#compass-fit-3745202 .ie-lte9 .compass-fit-ad {display: inline;}');
  var _lgy_ads = '';
  for (var i = 0, len = _lgy_json.length; i < len; i++) {
    var _lgy_value = _lgy_json[i];
    var _lgy_title = _lgy_lift_escape(_lgy_lift_substr(_lgy_value['title'],'15'));
    var _lgy_lead = _lgy_lift_escape(_lgy_lift_substr(_lgy_value['lead'],'10'));
    var _lgy_category = _lgy_lift_escape(_lgy_value['category']);
    var _lgy_image_property = _lgy_lift_image_property(_lgy_value);
    var _lgy_target = (document.URL.indexOf(_lgy_value['site']) == -1) ? '_blank' : '_top';
    var _lgy_beacon = _lgy_value['beacon_url'] ? '<img src="'+_lgy_lift_escape(_lgy_lift_substr(_lgy_value['beacon_url']))+'" width="1" height="1" style="position: absolute; width: 1px; height: 1px; top: -32767px; left: -32767px;"/>' : '';
    var _lgy_one_ad = _lgy_value['is_article'] ? _lgy_article : _lgy_ad;
    var _lgy_item_id = "compass-fit-3745202-item-"+(i+1);
    _lgy_one_ad = _lgy_one_ad.replace(/{{ITEM_ID}}/g,_lgy_item_id);
    _lgy_one_ad = _lgy_one_ad.replace(/{{TITLE}}/g,_lgy_title).replace(/{{LEAD}}/g,_lgy_lead).replace(/{{IMAGE_URL}}/g,_lgy_value['image_url']).replace(/{{IMAGE_WIDTH}}/g,_lgy_image_property['width']).replace(/{{IMAGE_HEIGHT}}/g,_lgy_image_property['height']).replace(/{{IMAGE_TOP}}/g,_lgy_image_property['top']).replace(/{{IMAGE_LEFT}}/g,_lgy_image_property['left']).replace(/{{SITE}}/g,_lgy_value['site']).replace(/{{BEACON_IMG_TAG}}/g,_lgy_beacon).replace(/{{I}}/g,i+1).replace(/{{TARGET}}/g,_lgy_target).replace(/{{CATEGORY}}/g,_lgy_category);
    var _lgy_subject = _lgy_value['advertising_subject'] ? _lgy_value['advertising_subject'] : _lgy_value['site'];
    _lgy_one_ad = _lgy_one_ad.replace(/{{ADV}}/g,_lgy_subject);
    if (_lgy_value['is_article']) {
      _lgy_one_ad = _lgy_one_ad.replace(/{{URL}}/g,_lgy_value['ld_url']);
      _lgy_article_links[_lgy_value['ld_url']] = _lgy_value['url'];
    } else {
      _lgy_one_ad = _lgy_one_ad.replace(/{{URL}}/g,_lgy_value['url']);
    }
    if (_lgy_value['published_at']) {
        var _lgy_ymd = _lgy_value['published_at'].split('-');
        var _lgy_yyyy = _lgy_ymd[0];
        var _lgy_mm   = _lgy_ymd[1];
        var _lgy_dd   = _lgy_ymd[2];
        var _lgy_m    = _lgy_mm.replace(/^0*/, '');
        var _lgy_d    = _lgy_dd.replace(/^0*/, '');
        _lgy_one_ad = _lgy_one_ad.replace(/{{YYYY}}/g,_lgy_yyyy).replace(/{{MM}}/g,_lgy_mm).replace(/{{DD}}/g,_lgy_dd).replace(/{{M}}/g,_lgy_m).replace(/{{D}}/g,_lgy_d);
    }
    _lgy_ads += _lgy_one_ad;
  /*if (visChecker) { visChecker.add(_lgy_item_id); } // for item based v-beacon*/
  }
  var _lgy_html = _lgy_widget.replace('{{ADS}}',_lgy_ads);
  _lgy_lift_ready();
}

var visChecker = (function () {
    "use strict";

  var _lgy_item_visibilities = {};

  var _check = function() {
    var ww = (window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth || 0);
    var wh = (window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight || 0);
    var win_area = ww * wh;

    for (var item_id in _lgy_item_visibilities) {
      var data = _lgy_item_visibilities[item_id];
      if (data.status == "visible") { continue; }
      // status: invisible -> timer -> timeout -> visible

      var item = document.getElementById(item_id);
      if (!item || !item.getBoundingClientRect) { continue; }
      var rect = item.getBoundingClientRect();
      var item_area = (rect.right - rect.left) * (rect.bottom - rect.top);
      item_area = Math.min(item_area, win_area);

      var vis_width = 0, vis_height = 0;
      if (rect.right > 0 && rect.left < ww) { vis_width = Math.min(rect.right, ww) - Math.max(0, rect.left)}
      if (rect.bottom > 0 && rect.top < wh) { vis_height = Math.min(rect.bottom, wh) - Math.max(0, rect.top)}
      var vis_area = vis_width * vis_height;

      if (item_area > 0 && vis_area >= item_area * 0.5) {
        if (data.status == "invisible") {
          data.status = "timer";

          (function (item_id2){
            data.timer = setTimeout(function() {
              var data2 = _lgy_item_visibilities[item_id2];
              data2.status = "timeout";
              _check();
            }, 1000);
          })(item_id);

        } else if (data.status == "timeout") {
          data.status = "visible";
          data.timer = null;
          item.setAttribute("visibility", "visible")
          //console.log("calling beacon for: " + item_id)
          if (data.data) {
            var url = data.data['viewable_beacon_url'];
            if (url) {
              _call(item, url);
            }
            var urls = data.data['viewable_beacon_urls'];
            if (urls) {
              for (var i = 0, len = urls.length; i < len; i++) {
                _call(item, urls[i]);
              }
            }
          }
        }

      } else if (data.status == "timer") {
        // timer -> invisible
        data.status = "invisible";
        if (data.timer) { clearTimeout(data.timer); }
        data.timer = null;
      }
    }
  };

  var _add = function(item_id, data) {
    if (data && data.constructor === Array) {
      var urls = {};
      for (var i = 0; i < data.length; i ++) {
        var obj = data[i];
        if (obj["viewable_beacon_url"]) {
          urls[obj["viewable_beacon_url"]] = 1;
        }
      }
      data = {"viewable_beacon_urls": []};
      for(var url in urls) { data["viewable_beacon_urls"].push(url) };
    }
    _lgy_item_visibilities[item_id] = {"status": "invisible", "timer": null, data: data};
  };

  var _call = function(item, url) {
    var dummy = document.createElement('div');
    dummy.innerHTML = '<img src="' + url + '" width="1" height="1" style="position: absolute; width: 1px; height: 1px; top: -32767px; left: -32767px;">';
    item.appendChild(dummy.firstChild);
  };

  var _init = function() {
    var addEvent;

    /* イベントリスナ (copied from template_js.xt) */
    if (window.addEventListener) {
      addEvent = function (target, name, fn) {
        if (!name) { return false; }
        target.addEventListener(name, fn, false);
      };
    } else if (window.attachEvent) {
      addEvent = function (target, name, fn) {
        if (!name) { return false; }
        target.attachEvent("on" + name, fn);
      };
    }

    addEvent(window, "scroll", _check);
    addEvent(window, "touchmove", _check);
    addEvent(window, "resize", _check);
    _check();
  };

  return {
		_data: _lgy_item_visibilities,
    init: _init,
		add: _add,
    check: _check
	};
}());
(function() {
  var _lgy_script = document.createElement("script");
  var _lgy_url =  (window._lgy_lw_imp_url && window._lgy_lw_imp_url != "") ? window._lgy_lw_imp_url : document.URL;
  var _lgy_ref = (window._lgy_lw_imp_ref_url && window._lgy_lw_imp_ref_url != "") ? window._lgy_lw_imp_ref_url : document.referrer;
  var _lgy_dcu = '';
  _lgy_script.type = "text/javascript";
  _lgy_script.charset = "UTF-8";
  _lgy_script.async = true;
  _lgy_script.src= (("https:" == document.location.protocol) ? "https://" : "http://")+"l.logly.co.jp/lift.json?adspot_id=3745202&widget_id=1337&auc_id=&callback=_lgy_lift_callback_3745202&url="+encodeURIComponent(_lgy_url)+"&ref="+encodeURIComponent(_lgy_ref);
  if (typeof(_lgy_dcu) !== 'undefined' && _lgy_dcu !== "") {
    _lgy_script.src+="&dcu="+encodeURIComponent(_lgy_dcu);
  }
  var _lgy_script_0 = document.getElementsByTagName('script')[0];
  _lgy_script_0.parentNode.insertBefore(_lgy_script, _lgy_script_0);
})();


(function() {
  function _lgy_insert_iframe(iframe) {
    document.body.insertBefore(iframe, document.body.firstChild);
  }
  var _lgy_iframe = document.createElement("iframe");
  _lgy_iframe.src = (("https:" == document.location.protocol) ? "https://" : "http://")+"sync.logly.co.jp/sync/sync.html";
  _lgy_iframe.style.display = "none";
  _lgy_iframe.style.border = "none";
  _lgy_iframe.scrolling = "no";
  setTimeout(function() {
    _lgy_insert_iframe(_lgy_iframe);
  }, 500);
})();

