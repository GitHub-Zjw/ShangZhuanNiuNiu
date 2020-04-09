class Main extends egret.DisplayObjectContainer
{



    public constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event)
    {

        egret.lifecycle.addLifecycleListener((context) =>
        {
            // custom lifecycle plugin

            context.onUpdate = () =>
            {

            }
        })

        egret.lifecycle.onPause = () =>
        {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () =>
        {
            egret.ticker.resume();
        }

        this.runGame().catch(e =>
        {
            console.log(e);
        })
    }

    // private _demoEntry: DemoEntry;

    private async runGame()
    {
        await this.loadResource()
        await platform.login();
        const userInfo = await platform.getUserInfo();

        RES.processor.map("proto", ProtoAnalyzer);
        RES.processor.map("txt", EnJsonAnalyzer);
    }

    private async loadResource()
    {
        try
        {
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("loading");
            this.stage.addChild(fgui.GRoot.inst.displayObject);
            fgui.GRoot.inst.addChild(GameLayerManager.gameLayer());
            loading.Binder.bindAll();
            const loadingView = loading.LoadingUI.createInstance();
            GameLayerManager.gameLayer().loadLayer.addChild(loadingView);
            await RES.loadGroup("preload", 0, loadingView);
            GameLayerManager.gameLayer().loadLayer.removeChild(loadingView);
            this.createGameScene();
        }
        catch (e)
        {
            console.error(e);
        }
    }

    /**
     * 创建游戏场景
     */
    private createGameScene(): void
    {
        // this.testEnJson();

        game.AppFacade.getInstance().startUp(GameLayerManager.gameLayer());
        // game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_HOME);
        game.AppFacade.getInstance().sendNotification(MainNotify.OPEN_MAIN);

    }

    //测试Json加密解密
    private testEnJson(): void
    {
        // var my = new newaes();
        // var key = "dily6666";//长度是8的倍数，是你的加密密码
        // var iv = "PKcs7";//PKcs7是一种编码标准不要修改

        // var times = new Date();
        // console.log(times.toLocaleDateString());
        // console.log(times.getMilliseconds().toString());

        // var str = { "name": "dily", "qq": "595850892" };

        // var newStr = JSON.stringify(str);
        // var myTest = my.ex(newStr, key, iv);

        // console.log(myTest.toString());

        // var yTest = my.dx(myTest.toString(), key, iv);
        // var yStr = JSON.parse(yTest);

        let test = RES.getRes("enJson_txt");

    }

}

