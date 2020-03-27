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
/**
  * 主界面管理类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 所有的弹窗都需要在register注册事件
  * 在execute添加消息处理面板打开关闭事件
  */
var game;
(function (game) {
    var MainManager = (function (_super) {
        __extends(MainManager, _super);
        function MainManager() {
            return _super.call(this) || this;
        }
        /**
         * 注册消息
         */
        MainManager.prototype.register = function () {
            this.facade.registerCommand(MainNotify.OPEN_MAIN, MainManager);
            this.facade.registerCommand(MainNotify.CLOSE_MAIN, MainManager);
        };
        MainManager.prototype.execute = function (notification) {
            var data = notification.getBody(); //携带数据
            var panelCon = GameLayerManager.gameLayer().mainLayer;
            switch (notification.getName()) {
                case MainNotify.OPEN_MAIN:
                    this.initAssets();
                    game.gameBinder.bindAll();
                    if (this._mainUI == null) {
                        this._mainUI = game.MainUI.createInstance();
                        panelCon.addChild(this._mainUI);
                        game.MainManager.mainUI = this._mainUI;
                    }
                    break;
                case MainNotify.CLOSE_MAIN:
                    if (this._mainUI != null) {
                        panelCon.removeChild(this._mainUI);
                        this._mainUI = null;
                        game.MainManager.mainUI = null;
                    }
                    break;
            }
        };
        MainManager.prototype.initAssets = function () {
            fgui.UIPackage.addPackage("game");
        };
        MainManager.NAME = "MainManager";
        return MainManager;
    }(puremvc.SimpleCommand));
    game.MainManager = MainManager;
    __reflect(MainManager.prototype, "game.MainManager", ["puremvc.ICommand", "puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=MainManager.js.map