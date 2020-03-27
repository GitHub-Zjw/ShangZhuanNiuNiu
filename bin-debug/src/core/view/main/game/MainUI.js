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
    var MainUI = (function (_super) {
        __extends(MainUI, _super);
        function MainUI() {
            return _super.call(this) || this;
        }
        MainUI.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "MainUI"));
        };
        MainUI.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.ballSelect = this.getController("ballSelect");
            this.bg = (this.getChild("bg"));
            this.ball1_btn = (this.getChild("ball1_btn"));
            this.ball2_btn = (this.getChild("ball2_btn"));
            this.ball3_btn = (this.getChild("ball3_btn"));
            this.ball4_btn = (this.getChild("ball4_btn"));
            this.ball5_btn = (this.getChild("ball5_btn"));
            this.ball6_btn = (this.getChild("ball6_btn"));
            this.ball6_btn_2 = (this.getChild("ball6_btn"));
            this.methodBtn = (this.getChild("methodBtn"));
            this.settingBtn = (this.getChild("settingBtn"));
            this.closeBtn = (this.getChild("closeBtn"));
            this.cleanBtn = (this.getChild("cleanBtn"));
            this.betBtn = (this.getChild("betBtn"));
            this.pgValueTxt = (this.getChild("pgValueTxt"));
            this.bossChangeTxt = (this.getChild("bossChangeTxt"));
            this.playerChangeTxt = (this.getChild("playerChangeTxt"));
            this.playerMoneyTxt = (this.getChild("playerMoneyTxt"));
            this.dzValueTxt = (this.getChild("dzValueTxt"));
            this.tzValueTxt = (this.getChild("tzValueTxt"));
            this.betPlayerCom = (this.getChild("betPlayerCom"));
            this.clockCom = (this.getChild("clockCom"));
            this.bossCom = (this.getChild("bossCom"));
            this.region0 = (this.getChild("region0"));
            this.region1 = (this.getChild("region1"));
            this.region2 = (this.getChild("region2"));
            this.region3 = (this.getChild("region3"));
            this.beginBtn = (this.getChild("beginBtn"));
            this.beginTran = this.getTransition("beginTran");
            this.bossResultTran = this.getTransition("bossResultTran");
            this.playerResultTran = this.getTransition("playerResultTran");
        };
        MainUI.URL = "ui://v1h0uw6cfjnq0";
        return MainUI;
    }(UIComponent));
    game.MainUI = MainUI;
    __reflect(MainUI.prototype, "game.MainUI");
})(game || (game = {}));
//# sourceMappingURL=MainUI.js.map