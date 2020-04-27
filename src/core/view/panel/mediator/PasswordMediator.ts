module password {
	export class PasswordMediator extends BaseMediator
	{
		public constructor(viewComponent: any = null)
		{
			super(PasswordMediator.NAME, viewComponent);
		}
		protected moduleName = "password";

		public static NAME: string = "PasswordMediator";

		public listNotificationInterests(): Array<any>
		{
			return [
				PanelNotify.OPEN_INPUT_PASSWORD,
				PanelNotify.CLOSE_INPUT_PASSWORD,
				GameNotify.AG_DATA
			]
		}

		private _pwdUI: PasswordUI;
		public handleNotification(notification: puremvc.INotification): void
		{
			var data: any = notification.getBody();//携带数据
			switch (notification.getName())
			{
				case PanelNotify.OPEN_INPUT_PASSWORD:
					this.addRES(this.moduleName);
					break;
				case PanelNotify.CLOSE_INPUT_PASSWORD:
					this._pwdUI = null;
					this.closePanel();
					break;
				case GameNotify.AG_DATA:
					if (this._pwdUI)
					{
						this._pwdUI.refreshView(data);
					}
					break;
			}	
		}

		protected onResIsReady(isFirst: boolean): void
		{
			if (isFirst)
			{
				Binder.bindAll();
			}
			this._pwdUI = PasswordUI.createInstance();
			this.showUI(this._pwdUI, true);
		}
	}
}