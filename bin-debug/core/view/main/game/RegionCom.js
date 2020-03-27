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
    var RegionCom = (function (_super) {
        __extends(RegionCom, _super);
        function RegionCom() {
            return _super.call(this) || this;
        }
        RegionCom.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "RegionCom"));
        };
        RegionCom.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.state = this.getController("state");
            this.resultList = (this.getChild("resultList"));
            this.betValueTxt = (this.getChild("betValueTxt"));
            this.winTran = this.getTransition("winTran");
            this.loseTran = this.getTransition("loseTran");
        };
        RegionCom.URL = "ui://v1h0uw6csrv91n";
        return RegionCom;
    }(UIComponent));
    game.RegionCom = RegionCom;
    __reflect(RegionCom.prototype, "game.RegionCom");
})(game || (game = {}));
//# sourceMappingURL=RegionCom.js.map