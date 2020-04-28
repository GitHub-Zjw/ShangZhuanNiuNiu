module betInfo {
	export class BetInfoMediator extends BaseMediator
	{
		public constructor(viewComponent: any = null)
		{
			super(BetInfoMediator.NAME, viewComponent);
		}
		protected moduleName = "betInfo";

		public static NAME: string = "BetInfoMediator";

		public listNotificationInterests(): Array<any>
		{
			return [
				PanelNotify.OPEN_BET_INFO,
				PanelNotify.CLOSE_BET_INFO,
				PanelNotify.ON_RESULT_AMI_PLAY,
				GameNotify.BET_DETAILE,
				GameNotify.BET_DETAILE_OVER,
				GameNotify.BIG_WINNER,
				GameNotify.BET_DETAILE_OVER
			]
		}

		private _betInfoUI: BetInfoUI;
		private _betDetailItemData: betDetailItemData[];
		private _todayWinnerItemData: BigWinnerItemData[];
		public handleNotification(notification: puremvc.INotification): void
		{
			var data: any = notification.getBody();//携带数据
			switch (notification.getName())
			{
				case PanelNotify.OPEN_BET_INFO:
					this.addRES(this.moduleName);
					break;
				case PanelNotify.ON_RESULT_AMI_PLAY:
				case PanelNotify.CLOSE_BET_INFO:
					this.closePanel();
					break;
				case GameNotify.BET_DETAILE:
					if (this._betInfoUI)
					{
						this.addDetailItemData(data);
						this._betInfoUI.onGetCurrentBetData(data.Data, false);
					}
					break;
				case GameNotify.BET_DETAILE_OVER:
					if (this._betInfoUI)
					{
						this.addDetailItemData(data);
						this._betInfoUI.onGetCurrentBetData(this._betDetailItemData, true);
					}
					break;
				case GameNotify.BIG_WINNER:
					if (this._betInfoUI)
					{
						this._betInfoUI.onGetTodayWinnerData(data.Data, true);
					}
					break;
				case GameNotify.BET_DETAILE_OVER://fix
					break;
			}
		}

		protected onResIsReady(isFirst: boolean): void
		{
			if (isFirst)
			{
				Binder.bindAll();
			}
			this._betInfoUI = BetInfoUI.createInstance();
			this.showUI(this._betInfoUI, true);
		}

		public destroy(): void
		{
			this._betInfoUI = null;
			this._betDetailItemData = [];
			this._todayWinnerItemData = [];
			super.destroy();
		}

		private addDetailItemData(data: BetDetaileData): void
		{
			//fix
		}

		private addBigWinnerItemData(data: BigWinnerData): void
		{
			//fix
		}
	}
}