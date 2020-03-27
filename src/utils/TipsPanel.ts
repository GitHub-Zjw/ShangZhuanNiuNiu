  /**
    * tips类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 提示相关信息
    * todo:九宫格、多动画、图字等
    */
class TipsPanel extends UIComponent{

    private descStr:string = "";

    /**
    * descStr        描述
    */
    public constructor(descStr:string = ""){
        super();
        this.descStr = descStr;
        this.initUI();
    }

    private bg:fgui.GImage;
    private descTF:fgui.GTextField;

    // 初始化面板
    public initUI():void{
        this.bg = new fgui.GImage(); 
        this.bg.texture = RES.getRes("tipsBg_png");
        this.addChild(this.bg);   
        this.bg.touchable = true;     

        this.descTF = new fgui.GTextField();
        this.addChild(this.descTF);
        this.descTF.color = 0x000000;
        this.descTF.setSize(4,5);
        // this.descTF.width = this.bg.width;
        // this.descTF.height = 24;
        this.descTF.x = 5;
        
        this.descTF.align = fgui.AlignType.Center;
        this.descTF.text = this.descStr;     

        //九宫格
    //    var rect:egret.Rectangle = new egret.Rectangle(5,5,5,5);
    //    this.bg.scale9Grid =rect;    

       this.bg.width = this.descTF.width + 10;   
       this.bg.height = this.descTF.height*3;   

       this.descTF.y = this.bg.height/2 - this.descTF.height/2 + 2;

    }

    // 获取高度
    public getHeight(): number {
        return this.bg.height;

    }
    // 获取宽度
    public getWidth(): number {
        return this.bg.width;

    }
}

