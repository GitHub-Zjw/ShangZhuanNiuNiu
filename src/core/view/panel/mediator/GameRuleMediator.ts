module gameRule
{
	export class GameRuleMediator extends BaseMediator
	{
		public constructor(viewComponent: any = null)
		{
			super(GameRuleMediator.NAME, viewComponent);
		}
		protected moduleName = "gameRule";

		public static NAME: string = "GameRuleMediator";

		public listNotificationInterests(): Array<any>
		{
			return [
				PanelNotify.OPEN_RULE,
				PanelNotify.CLOSE_RULE
			]
		}

		public handleNotification(notification: puremvc.INotification): void
		{
			var data: any = notification.getBody();//携带数据
			switch (notification.getName())
			{
				case PanelNotify.OPEN_RULE:
					this.addRES(this.moduleName);
					break;
				case PanelNotify.CLOSE_RULE:
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
			let ui = GameRuleUI.createInstance();
			this.showUI(ui, true);
		}
	}
}