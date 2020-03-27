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
    var ShopPanel = (function (_super) {
        __extends(ShopPanel, _super);
        function ShopPanel() {
            return _super.call(this) || this;
            // this.skinName = "resource/ui/panel/ShopSkin.exml";
            // this.addEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);
        }
        return ShopPanel;
    }(UIComponent));
    game.ShopPanel = ShopPanel;
    __reflect(ShopPanel.prototype, "game.ShopPanel");
})(game || (game = {}));
//# sourceMappingURL=ShopPanel.js.map