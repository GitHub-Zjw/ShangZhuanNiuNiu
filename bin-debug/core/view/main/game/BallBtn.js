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
    var BallBtn = (function (_super) {
        __extends(BallBtn, _super);
        function BallBtn() {
            return _super.call(this) || this;
        }
        BallBtn.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "BallBtn"));
        };
        BallBtn.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.state = this.getController("state");
            this.isShowLine = this.getController("isShowLine");
            this.t0 = this.getTransition("t0");
        };
        BallBtn.URL = "ui://v1h0uw6citti1t";
        return BallBtn;
    }(UIComponent));
    game.BallBtn = BallBtn;
    __reflect(BallBtn.prototype, "game.BallBtn");
})(game || (game = {}));
//# sourceMappingURL=BallBtn.js.map