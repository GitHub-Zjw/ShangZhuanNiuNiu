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