/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game
{

	export class BossCom extends UIComponent
	{

		public moneyValueTxt: fairygui.GTextField;
		public playerNumTxt: fairygui.GTextField;
		public countDownTxt: fairygui.GTextField;
		public resultList: fairygui.GList;

		public static URL: string = "ui://v1h0uw6csrv91l";

		public static createInstance(): BossCom
		{
			return <BossCom><any>(fairygui.UIPackage.createObject("game", "BossCom"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.moneyValueTxt = <fairygui.GTextField><any>(this.getChild("moneyValueTxt"));
			this.playerNumTxt = <fairygui.GTextField><any>(this.getChild("playerNumTxt"));
			this.countDownTxt = <fairygui.GTextField><any>(this.getChild("countDownTxt"));
			this.resultList = <fairygui.GList><any>(this.getChild("resultList"));
		}


		private _money: string;
		private _people: string;
		private _second: number
		private _records: EnumerationType.WinOrLose[];
		private _timer: egret.Timer;
		private _surplusTime: number;

		protected initView(): void
		{
			super.initView();
			this.resultList.itemRenderer = this.resultListItemRenderer;
			this.resultList.callbackThisObj = this;
			this._records = [];
		}

		protected onButtonClick(name: string): void
		{
			switch (name)
			{
				case "becomeBossBtn":
					AllData.instance.setTestBecomeBossData();
					game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_BECOME_BOSS);
					break;
			}
		}

		/**
		 * @param money 庄家钱
		 * @param people 人数
		 * @param sound 剩余秒数
		 * @param records 庄家胜败记录数组
		 */
		public setData(money: string, people: string, second: number, records: EnumerationType.WinOrLose[]): void
		{
			this._money = money;
			this._people = people;
			this._second = second;
			if (this._records.length == 0)
			{
				this._records = records;
			}
			this._surplusTime = this._second;
			this.updateView();
		}

		/**
		 * 增加一名胜败
		 */
		public addResult(isWin: EnumerationType.WinOrLose)
		{
			let newresults: EnumerationType.WinOrLose[] = [];
			if (this._records.length >= 12)
			{
				for (let i = 0; i < 11; i++)
				{
					newresults[i] = this._records[i + 1];
				}
				newresults[11] = isWin;
				this._records = newresults;
			}
			else
			{
				this._records.push(isWin);
			}
			this.resultList.numItems = this._records.length;
		}

		private updateView(): void
		{
			this.moneyValueTxt.text = this._money;
			this.playerNumTxt.text = this._people;
			this.resultList.numItems = this._records.length;
			this.startTimer(1000);
		}

		private resultListItemRenderer(index: number, obj: WLPointItem): void
		{
			obj.setData(this._records[index]);
		}



		private startTimer(time: number): void
		{
			if (this._timer == null)
			{
				this._timer = new egret.Timer(time);
				this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
			}
			this._timer.start();
			this.onTimer(null);
		}

		private removeTimer(): void
		{
			if (this._timer)
			{
				this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
				this._timer.stop();
				this._timer = null;
			}
		}

		private onTimer(e: egret.TimerEvent): void
		{
			this._surplusTime--;
			if (this._surplusTime < 0)
			{
				AllData.instance.dispatchEventWith(MainNotify.BOSS_TIME_OVER);
				this.removeTimer();
			}
			else
			{
				let minet = Math.floor(this._surplusTime / 60);
				let second = this._surplusTime % 60;
				let minetStr = minet > 9 ? minet.toString() : "0" + minet;
				let secondStr = second > 9 ? second.toString() : "0" + second;
				this.countDownTxt.text = minetStr + ":" + secondStr;
			}
		}
	}
}