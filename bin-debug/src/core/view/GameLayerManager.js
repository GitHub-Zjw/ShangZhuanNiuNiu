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
  * 游戏容器类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * EgerPro显示对象层级
  * Main-GameScene（sceneLayer、mainLayer、popLayer、effectLayer、maskLayer、loadLayer）
  *
  */
var GameLayerManager = (function (_super) {
    __extends(GameLayerManager, _super);
    //构造方法
    function GameLayerManager() {
        var _this = _super.call(this) || this;
        // 场景层 如 战场、主城、副本战场之类的
        _this.sceneLayer = new UIComponent();
        // 主UI层 如 底部功能栏
        _this.mainLayer = new UIComponent();
        // 弹窗层 如 设置、背包、装备之类的
        _this.panelLayer = new UIComponent();
        // 特效层 如 闪烁、飘字之类的
        _this.effectLayer = new UIComponent();
        // 通讯遮罩层 和服务器通讯UI
        _this.maskLayer = new UIComponent();
        // 加载遮罩层 场景切换的时候加载资源UI
        _this.loadLayer = new UIComponent();
        _this.init();
        return _this;
    }
    //游戏容器管理器单例
    GameLayerManager.gameLayer = function () {
        if (!this._instance)
            this._instance = new GameLayerManager();
        return this._instance;
    };
    //初始化场景类
    GameLayerManager.prototype.init = function () {
        this.touchEnabled = true;
        this.sceneLayer.touchable = true;
        this.mainLayer.touchable = true;
        this.panelLayer.touchable = true;
        this.effectLayer.touchable = true;
        this.maskLayer.touchable = true;
        this.loadLayer.touchable = true;
        fgui.GRoot.inst.addChild(this.sceneLayer);
        fgui.GRoot.inst.addChild(this.mainLayer);
        fgui.GRoot.inst.addChild(this.panelLayer);
        fgui.GRoot.inst.addChild(this.effectLayer);
        fgui.GRoot.inst.addChild(this.maskLayer);
        fgui.GRoot.inst.addChild(this.loadLayer);
    };
    return GameLayerManager;
}(egret.DisplayObjectContainer));
__reflect(GameLayerManager.prototype, "GameLayerManager");
//# sourceMappingURL=GameLayerManager.js.map