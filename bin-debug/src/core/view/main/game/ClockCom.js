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
    var ClockCom = (function (_super) {
        __extends(ClockCom, _super);
        function ClockCom() {
            return _super.call(this) || this;
        }
        ClockCom.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "ClockCom"));
        };
        ClockCom.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.valueTxt = (this.getChild("valueTxt"));
        };
        ClockCom.URL = "ui://v1h0uw6csrv91e";
        return ClockCom;
    }(UIComponent));
    game.ClockCom = ClockCom;
    __reflect(ClockCom.prototype, "game.ClockCom");
})(game || (game = {}));
//# sourceMappingURL=ClockCom.js.map