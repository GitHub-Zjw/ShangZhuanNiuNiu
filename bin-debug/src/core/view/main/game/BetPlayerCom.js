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
    var BetPlayerCom = (function (_super) {
        __extends(BetPlayerCom, _super);
        function BetPlayerCom() {
            return _super.call(this) || this;
        }
        BetPlayerCom.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "BetPlayerCom"));
        };
        BetPlayerCom.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.fkImg = (this.getChild("fkImg"));
            this.hongtaoImg = (this.getChild("hongtaoImg"));
            this.heitaoImg = (this.getChild("heitaoImg"));
            this.chImg = (this.getChild("chImg"));
            this.playerNameTxt = (this.getChild("playerNameTxt"));
            this.ballValueTxt = (this.getChild("ballValueTxt"));
            this.batValueTxt = (this.getChild("batValueTxt"));
            this.detailBtn = (this.getChild("detailBtn"));
            this.prizeBtn = (this.getChild("prizeBtn"));
            this.betTran = this.getTransition("betTran");
        };
        BetPlayerCom.URL = "ui://v1h0uw6csrv91g";
        return BetPlayerCom;
    }(UIComponent));
    game.BetPlayerCom = BetPlayerCom;
    __reflect(BetPlayerCom.prototype, "game.BetPlayerCom");
})(game || (game = {}));
//# sourceMappingURL=BetPlayerCom.js.map