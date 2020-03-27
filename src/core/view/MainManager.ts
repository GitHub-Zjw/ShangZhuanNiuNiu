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
        }
        private _mainUI: MainUI;
        public execute(notification: puremvc.INotification): void
        {
            var data: any = notification.getBody();//携带数据
            var panelCon = GameLayerManager.gameLayer().mainLayer;
            switch (notification.getName())
            {
                case MainNotify.OPEN_MAIN:
                    this.initAssets();
                    gameBinder.bindAll();
                    if (this._mainUI == null)
                    {
                        this._mainUI = MainUI.createInstance();
                        panelCon.addChild(this._mainUI);
                        game.MainManager.mainUI = this._mainUI;
                    }
                    break;
                case MainNotify.CLOSE_MAIN:
                    if (this._mainUI != null)
                    {
                        panelCon.removeChild(this._mainUI);
                        this._mainUI = null;
                        game.MainManager.mainUI = null;
                    }
                    break;
            }
        }

        initAssets(): void
        {
            fgui.UIPackage.addPackage("game");
        }
    }
}
