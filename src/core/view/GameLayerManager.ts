/**
  * 游戏容器类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  * EgerPro显示对象层级
  * Main-GameScene（sceneLayer、mainLayer、popLayer、effectLayer、maskLayer、loadLayer）
  * 
  */
class GameLayerManager extends fgui.GComponent
{
    // 场景层 如 战场、主城、副本战场之类的
    public sceneLayer: UIComponent = new UIComponent();
    // 主UI层 如 底部功能栏
    public mainLayer: UIComponent = new UIComponent();
    // 弹窗层 如 设置、背包、装备之类的
    public panelLayer: UIComponent = new UIComponent();
    // 特效层 如 闪烁、飘字之类的
    public effectLayer: UIComponent = new UIComponent();
    // 通讯遮罩层 和服务器通讯UI
    public maskLayer: UIComponent = new UIComponent();
    // 加载遮罩层 场景切换的时候加载资源UI
    public loadLayer: UIComponent = new UIComponent();

    private static _instance: GameLayerManager;

    //构造方法
    public constructor()
    {
        super();
        this.init();
    }

    //游戏容器管理器单例
    public static gameLayer(): GameLayerManager  
    {
        if (!this._instance)
            this._instance = new GameLayerManager();
        return this._instance;
    }

    //初始化场景类
    public init(): void
    {
        fgui.GRoot.inst.addChild(this);
        this.screenAdaptation(this);

        this.touchable = true;
        this.sceneLayer.touchable = true;
        this.mainLayer.touchable = true;
        this.panelLayer.touchable = true;
        this.effectLayer.touchable = true;
        this.maskLayer.touchable = true;
        this.loadLayer.touchable = true;

        this.addChild(this.sceneLayer);
        this.addChild(this.mainLayer);
        this.addChild(this.panelLayer);
        this.addChild(this.effectLayer);
        this.addChild(this.maskLayer);
        this.addChild(this.loadLayer);

    }

    private screenAdaptation(layer: fgui.GComponent): void
    {
        let clientWidth = document.documentElement.clientWidth;
        let clientHeight = document.documentElement.clientHeight;
        let changeScale = clientHeight / 750;
        layer.width = 1335 * changeScale;
        layer.x += clientWidth - layer.width;
    }
}

