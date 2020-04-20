/**
  * 面板mediator基类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  * todo:面板特效，全屏+非全屏蒙层
  */
class BaseMediator extends puremvc.Mediator implements puremvc.IMediator
{

    private isInitialized: Boolean = false;//是否初始化
    private isPopUp: Boolean = false;//是否已经显示
    private ui: UIComponent = null;//UI容器
    private res: Promise<void>;
    public w: number = 0;
    public h: number = 0;

    public constructor(mediatorName: string = "", viewComponent: Object = null)
    {
        super(mediatorName, viewComponent);
        this.w = GameConfig.curWidth();
        this.h = GameConfig.curHeight();
    }

    /**
     * 加载资源
     */
    protected addRES(name: string): void
    {
        if (this.res == null)
        {
            this.res = RES.loadGroup(name);
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            //添加资源组加载失败事件
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            //添加资源加载失败事件
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onResourceItemLoadError, this);
            //添加资源组加载进度事件
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        }
        else
        {
            this.onResIsReady(false);
        }
    }

    /**
     * 资源准备就绪
     * @param isFirst 是否首次打开
     */
    protected onResIsReady(isFirst: boolean): void
    { }

    protected onResourceLoadComplete(event: RES.ResourceEvent): void
    {
        this.onResIsReady(true);
    }

    protected onResourceLoadError(event: RES.ResourceEvent): void
    {
        console.warn("资源加载出现问题：", event);
    }

    protected onResourceItemLoadError(event: RES.ResourceEvent): void
    {
        console.warn("资源加载出现问题：", event);
    }

    protected onResourceProgress(event: RES.ResourceEvent): void
    {
    }

    /**
    * 添加面板方法
    * @param panel       		面板
    * @param dark        		背景是否变黑
    * @param popUpWidth      	指定弹窗宽度，定位使用
    * @param popUpHeight      	指定弹窗高度，定位使用
    * @param effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    public showUI(ui: UIComponent, dark: boolean = false, popUpWidth: number = 0, popUpHeight: number = 0, effectType: number = 0, isAlert: boolean = false): void
    {
        this.ui = ui;
        this.beforShow();
        this.initUI();
        this.initData();
        PopUpManager.addPopUp(ui, dark, popUpWidth, popUpHeight, effectType, isAlert);
    }


	/**
	 * 面板弹出之前处理
	 */
    public beforShow(): void
    {

    }

	/**
	 * 初始化面板ui
	 */
    public initUI(): void
    {

    }


	/**
	 * 初始化面板数据
	 */
    public initData(): void
    {

    }


    /**
    * 移除面板方法
    * panel       		面板
    * effectType        0：没有动画 1:从中间缩小消失 2：  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    public closePanel(effectType: number = 0): void
    {
        PopUpManager.removePopUp(this.ui, effectType);
        this.destroy();
    }


	/**
	 * 面板关闭后需要销毁的对象
	 */
    public destroy(): void
    {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onResourceItemLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
    }


	/**
	 * 面板是否弹出状态
	 */
    public getIsPopUp(): Boolean
    {
        return this.isPopUp;
    }


	/**
	 * 面板是否初始化完毕
	 */
    public getIsInit(): Boolean
    {
        return this.isInitialized;
    }

    // 获取面板宽度
    public getWidth(): number
    {
        return this.ui.width;
    }

    // 获取面板高度
    public getHeight(): number
    {
        return this.ui.height;
    }

}