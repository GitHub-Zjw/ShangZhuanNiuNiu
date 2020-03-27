/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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