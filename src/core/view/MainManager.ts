/**
  * 主界面管理类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  * 所有的弹窗都需要在register注册事件
  * 在execute添加消息处理面板打开关闭事件
  */
module game
{

    export class MainManager extends puremvc.SimpleCommand implements puremvc.ICommand
    {
        public static mainUI: MainUI;

        public constructor()
        {
            super();
        }

        public static NAME: string = "MainManager";

        /**
         * 注册消息
         */
        public register(): void
        {
            this.facade.registerCommand(MainNotify.OPEN_MAIN, MainManager);
            this.facade.registerCommand(MainNotify.CLOSE_MAIN, MainManager);
            this.facade.registerCommand(GameNotify.HOME_PAGE_DATA, MainManager);
            this.facade.registerCommand(GameNotify.BET_MONEY, MainManager);
            this.facade.registerCommand(GameNotify.GAME_RESULT, MainManager);
            this.facade.registerCommand(GameNotify.BET, MainManager);
            this.facade.registerCommand(GameNotify.PWD, MainManager);
        }
        
        public execute(notification: puremvc.INotification): void
        {
            var data: any = notification.getBody();//携带数据
            var panelCon = GameLayerManager.gameLayer().mainLayer;
            let mainUI = game.MainManager.mainUI;
            switch (notification.getName())
            {
                case MainNotify.OPEN_MAIN:
                    Binder.bindAll();
                    if (mainUI == null)
                    {
                        mainUI = MainUI.createInstance();
                        panelCon.addChild(mainUI);
                        game.MainManager.mainUI = mainUI;
                    }
                    break;
                case MainNotify.CLOSE_MAIN:
                    if (mainUI != null)
                    {
                        panelCon.removeChild(mainUI);
                        mainUI = null;
                        game.MainManager.mainUI = null;
                    }
                    break;
                case GameNotify.HOME_PAGE_DATA:
                    MainManager.mainUI.onGetHomePageData();
                    break;
                case GameNotify.BET_MONEY:
                    if (mainUI)
                    {
                        // mainUI.onGetRegionData(data);
                        mainUI.onGetOtherBetData();
                    }
                    break;
                case GameNotify.GAME_RESULT:
                    if (mainUI)
                    {
                        mainUI.onGetResultData();
                    }
                    break;
                case GameNotify.BET:
                    if (mainUI)
                    {
                        mainUI.onGetBetSucceedData();
                    }
                    break;
                case GameNotify.PWD:
                    if (mainUI)
                    {
                        mainUI.onGetPassWordTrue();
                    }
                    break;
            }
        }

    }
}
