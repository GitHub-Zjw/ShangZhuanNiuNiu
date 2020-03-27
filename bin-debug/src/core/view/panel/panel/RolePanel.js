/**
 *
 */
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
    var RolePanel = (function (_super) {
        __extends(RolePanel, _super);
        function RolePanel() {
            return _super.call(this) || this;
            // this.skinName = "resource/ui/panel/RoleSkin.exml";
            // this.addEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);
        }
        return RolePanel;
    }(UIComponent));
    game.RolePanel = RolePanel;
    __reflect(RolePanel.prototype, "game.RolePanel");
})(game || (game = {}));
//# sourceMappingURL=RolePanel.js.map