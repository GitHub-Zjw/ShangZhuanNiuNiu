module boosResult
{
	export class BoosResultMediator extends BaseMediator
	{
		public constructor(viewComponent: any = null)
		{
			super(BoosResultMediator.NAME, viewComponent);
		}
		protected moduleName = "boosResult";

		public static NAME: string = "BoosResultMediator";

		public listNotificationInterests(): Array<any>
		{
			return [
				PanelNotify.OPEN_BOSS_RESULT,
				PanelNotify.CLOSE_BOSS_RESULT
			]
		}

		public handleNotification(notification: puremvc.INotification): void
		{
			var data: any = notification.getBody();//携带数据
			var panelCon = GameLayerManager.gameLayer().mainLayer;
			switch (notification.getName())
			{
				case PanelNotify.OPEN_BOSS_RESULT:
					this._data = data;
					this.addRES(this.moduleName);
					break;
				case PanelNotify.CLOSE_BOSS_RESULT:
					this.closePanel();
					break;
			}
		}

		private _data: game.BossTimeOverData;

		protected onResIsReady(isFirst: boolean): void
		{
			if (isFirst)
			{
				Binder.bindAll();
			}
			let ui = BoosResultUI.createInstance();
			this.showUI(ui, true);
			ui.refreshView(this._data);
		}
	}
}