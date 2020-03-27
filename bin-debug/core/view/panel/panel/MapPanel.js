/**
 *
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var game;
(function (game) {
    var MapPanel = (function (_super) {
        __extends(MapPanel, _super);
        function MapPanel() {
            return _super.call(this) || this;
            // this.skinName = "resource/ui/panel/MapSkin.exml";
            // this.addEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);
        }
        return MapPanel;
    }(UIComponent));
    game.MapPanel = MapPanel;
    __reflect(MapPanel.prototype, "game.MapPanel");
})(game || (game = {}));
//# sourceMappingURL=MapPanel.js.map