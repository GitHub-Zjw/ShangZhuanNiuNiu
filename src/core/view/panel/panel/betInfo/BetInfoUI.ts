/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module betInfo
{

	export class BetInfoUI extends UIComponent
	{

		public c1: fairygui.Controller;
		public closeBtn: fairygui.GButton;
		public todayWinner: fairygui.GButton;
		public currentBet: fairygui.GButton;
		public currentBetList: fairygui.GList;
		public todayWinnerList: fairygui.GList;

		public static URL: string = "ui://04s6lcaqpnt10";

		public static createInstance(): BetInfoUI
		{
			return <BetInfoUI><any>(fairygui.UIPackage.createObject("betInfo", "BetInfoUI"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.c1 = this.getController("c1");
			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
			this.todayWinner = <fairygui.GButton><any>(this.getChild("todayWinner"));
			this.currentBet = <fairygui.GButton><any>(this.getChild("currentBet"));
			this.currentBetList = <fairygui.GList><any>(this.getChild("currentBetList"));
			this.todayWinnerList = <fairygui.GList><any>(this.getChild("todayWinnerList"));
		}

		private _isCurrentBetListEnd: boolean;
		private _isTodayWinnerListEnd: boolean;
		private _currentListData: betDetailItemData[];
		private _todayWinnerData: BigWinnerItemData[];
		protected initView(): void
		{
			super.initView();
			this.currentBetList.itemRenderer = this.currentBetListRenderer;
			this.currentBetList.callbackThisObj = this;
			// this.currentBetList.setVirtual();

			this.todayWinnerList.itemRenderer = this.todayWinnerListRenderer;
			this.todayWinnerList.callbackThisObj = this;
			// this.todayWinnerList.setVirtual();
			BetDetaileRequest.sendBetDetaileRequest();
			TodayBigWinnerRequest.sendTodayBigWinnerRequest();
		}

		protected addEvent(): void
		{
			super.addEvent();
			this.currentBetList.scrollPane.addEventListener(fgui.ScrollPane.PULL_UP_RELEASE, this.onCurrentBetListRefresh, this);
			this.todayWinnerList.scrollPane.addEventListener(fgui.ScrollPane.PULL_UP_RELEASE, this.onTodayWinnerListRefresh, this);
		}

		protected removeEvent(): void
		{
			super.removeEvent();
			this.currentBetList.scrollPane.removeEventListener(fgui.ScrollPane.PULL_UP_RELEASE, this.onCurrentBetListRefresh, this);
			this.todayWinnerList.scrollPane.removeEventListener(fgui.ScrollPane.PULL_UP_RELEASE, this.onTodayWinnerListRefresh, this);
		}

		protected onButtonClick(name: string): void
		{
			switch (name)
			{
				case "closeBtn":
					game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_BET_INFO);
					break;
			}
		}

		/**
		 * 获取投注详情数据
		 */
		public onGetCurrentBetData(currentListData: betDetailItemData[], isOver: boolean): void
		{
			this._isCurrentBetListEnd = isOver;
			if (this.currentBetList.numItems > 0)
			{
				this.currentBetList.scrollPane.lockFooter(0);
			}
			this._currentListData = currentListData;
			if (currentListData)
			{
				this.currentBetList.numItems = this._currentListData.length;
			}
		}

		/**
		 * 获取今日大赢家数据
		 */
		public onGetTodayWinnerData(todayWinnerData: BigWinnerItemData[], isOver: boolean): void
		{
			this._isTodayWinnerListEnd = isOver;
			if (this.todayWinnerList.numItems > 0)
			{
				this.todayWinnerList.scrollPane.lockFooter(0);
			}
			this._todayWinnerData = todayWinnerData;
			if (todayWinnerData)
			{
				this.todayWinnerList.numItems = this._todayWinnerData.length;
			}
		}

		private onCurrentBetListRefresh(evt: egret.Event): void
		{
			var footer: LoadingItem = this.currentBetList.scrollPane.footer as LoadingItem;
			let tempCol = footer.getController("isNeedLoad");

			if (this._isCurrentBetListEnd)
			{
				tempCol.selectedPage = "false";
			}
			else
			{
				tempCol.selectedPage = "true";
			}
			this.currentBetList.scrollPane.lockFooter(footer.sourceHeight);
		}

		private onTodayWinnerListRefresh(evt: egret.Event): void
		{
			var footer: LoadingItem = this.currentBetList.scrollPane.footer as LoadingItem;
			let tempCol = footer.getController("isNeedLoad");

			if (this._isCurrentBetListEnd)
			{
				tempCol.selectedPage = "false";
			}
			else
			{
				tempCol.selectedPage = "true";
			}
			this.currentBetList.scrollPane.lockFooter(footer.sourceHeight);
		}

		private currentBetListRenderer(index: number, obj: CurrentBetItem): void
		{
			obj.setData(this._currentListData[index]);
		}

		private todayWinnerListRenderer(index: number, obj: TodayWinnerItem): void
		{
			obj.setData(index, this._todayWinnerData[index]);
		}
	}
}