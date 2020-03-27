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
    var BossCom = (function (_super) {
        __extends(BossCom, _super);
        function BossCom() {
            return _super.call(this) || this;
        }
        BossCom.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "BossCom"));
        };
        BossCom.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.moneyValueTxt = (this.getChild("moneyValueTxt"));
            this.playerNumTxt = (this.getChild("playerNumTxt"));
            this.countDownTxt = (this.getChild("countDownTxt"));
            this.resultList = (this.getChild("resultList"));
        };
        BossCom.URL = "ui://v1h0uw6csrv91l";
        return BossCom;
    }(UIComponent));
    game.BossCom = BossCom;
    __reflect(BossCom.prototype, "game.BossCom");
})(game || (game = {}));
//# sourceMappingURL=BossCom.js.map