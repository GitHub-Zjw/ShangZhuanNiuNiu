// @RES.mapConfig("config.json",()=>"resource",path => {
//     var ext = path.substr(path.lastIndexOf(".") + 1);
//     var typeMap = {
//         "jpg": "image",
//         "png": "image",
//         "webp": "image",
//         "json": "json",
//         "fnt": "font",
//         "pvr": "pvr",
//         "mp3": "sound",
//         "proto": "proto",
//         "txt": "txt"
//     }
//     var type = typeMap[ext];
//     if (type == "json") {
//         if (path.indexOf("sheet") >= 0) {
//             type = "sheet";
//         } else if (path.indexOf("movieclip") >= 0) {
//             type = "movieclip";
//         };
//     }
//     return type;
// })
class Main extends egret.DisplayObjectContainer {



    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    // private _demoEntry: DemoEntry;

    private async runGame() {
        await this.loadResource()
        await platform.login();
        const userInfo = await platform.getUserInfo();

        this.stage.addChild(fgui.GRoot.inst.displayObject);
        RES.processor.map("proto", ProtoAnalyzer);
        RES.processor.map("txt", EnJsonAnalyzer);
        this.addChild(GameLayerManager.gameLayer());
        // this._demoEntry = new DemoEntry();
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
            this.createGameScene();
        }
        catch (e) {
            console.error(e);
        }
    }

    /**
     * 创建游戏场景
     */
    private createGameScene():void {
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

