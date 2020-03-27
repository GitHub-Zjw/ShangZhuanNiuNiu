/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
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
    var WLPointItem = (function (_super) {
        __extends(WLPointItem, _super);
        function WLPointItem() {
            return _super.call(this) || this;
        }
        WLPointItem.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "WLPointItem"));
        };
        WLPointItem.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.state = this.getController("state");
        };
        WLPointItem.URL = "ui://v1h0uw6csrv91m";
        return WLPointItem;
    }(UIComponent));
    game.WLPointItem = WLPointItem;
    __reflect(WLPointItem.prototype, "game.WLPointItem");
})(game || (game = {}));
//# sourceMappingURL=WLPointItem.js.map