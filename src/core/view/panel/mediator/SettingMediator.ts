module setting
{
	export class SettingMediator extends BaseMediator
	{
		public constructor(viewComponent: any = null)
		{
			super(SettingMediator.NAME, viewComponent);
		}
		protected moduleName = "setting";

		public static NAME: string = "SettingMediator";

		public listNotificationInterests(): Array<any>
		{
			return [
				PanelNotify.OPEN_SETTING,
				PanelNotify.CLOSE_SETTING,
				PanelNotify.ON_RESULT_AMI_PLAY
			]
		}

		public handleNotification(notification: puremvc.INotification): void
		{
			var data: any = notification.getBody();//携带数据
			switch (notification.getName())
			{
				case PanelNotify.OPEN_SETTING:
					this.addRES(this.moduleName);
					break;
				case PanelNotify.CLOSE_SETTING:
				case PanelNotify.ON_RESULT_AMI_PLAY:
					this.closePanel();
					break;
			}
		}

		protected onResIsReady(isFirst: boolean): void
		{
			if (isFirst)
			{
				Binder.bindAll();
			}
			let ui = SettingUI.createInstance();
			this.showUI(ui, true);
		}
	}
}