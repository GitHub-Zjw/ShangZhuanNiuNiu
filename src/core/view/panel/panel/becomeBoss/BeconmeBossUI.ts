/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module becomeBoss
{

	export class BeconmeBossUI extends UIComponent
	{

		public titleStateCon: fairygui.Controller;
		public c2: fairygui.Controller;
		public isBoss: fairygui.Controller;
		public isSoonChangeCon: fairygui.Controller;
		public isSoonDownCon: fairygui.Controller;
		public closeBtn: fairygui.GButton;
		public changeWarehouseBtn: fairygui.GButton;
		public downBossBtn: fairygui.GButton;
		public orderBtn: fairygui.GButton;
		public alreadyBecomeBtn: fairygui.GButton;
		public willBecomeBtn: fairygui.GButton;
		public surplueMoneyTxt: fairygui.GTextField;
		public surplueTimeTxt: fairygui.GTextField;
		public alreadyBecomeList: fairygui.GList;
		public doimgList: fairygui.GList;
		public backBtn: fairygui.GButton;
		public helpBtn: fairygui.GButton;
		public bossListBtn: fairygui.GButton;
		public bossMoneyChangeBtn: fairygui.GButton;
		public leftBtn: fairygui.GButton;
		public rightBtn: fairygui.GButton;
		public bossMoneyChangeList: fairygui.GList;
		public dateTxt: fairygui.GTextField;
		public moneyChangeTxt: fairygui.GTextField;
		public isSoonBoss:fairygui.Controller;

		public static URL: string = "ui://hyt9m7t9fxcm3";

		public static createInstance(): BeconmeBossUI
		{
			return <BeconmeBossUI><any>(fairygui.UIPackage.createObject("becomeBoss", "BeconmeBossUI"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.titleStateCon = this.getController("titleStateCon");
			this.c2 = this.getController("c2");
			this.isBoss = this.getController("isBoss");
			this.isSoonChangeCon = this.getController("isSoonChangeCon");
			this.isSoonDownCon = this.getController("isSoonDownCon");
			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
			this.changeWarehouseBtn = <fairygui.GButton><any>(this.getChild("changeWarehouseBtn"));
			this.downBossBtn = <fairygui.GButton><any>(this.getChild("downBossBtn"));
			this.orderBtn = <fairygui.GButton><any>(this.getChild("orderBtn"));
			this.alreadyBecomeBtn = <fairygui.GButton><any>(this.getChild("alreadyBecomeBtn"));
			this.willBecomeBtn = <fairygui.GButton><any>(this.getChild("willBecomeBtn"));
			this.surplueMoneyTxt = <fairygui.GTextField><any>(this.getChild("surplueMoneyTxt"));
			this.surplueTimeTxt = <fairygui.GTextField><any>(this.getChild("surplueTimeTxt"));
			this.alreadyBecomeList = <fairygui.GList><any>(this.getChild("alreadyBecomeList"));
			this.doimgList = <fairygui.GList><any>(this.getChild("doimgList"));
			this.backBtn = <fairygui.GButton><any>(this.getChild("backBtn"));
			this.helpBtn = <fairygui.GButton><any>(this.getChild("helpBtn"));
			this.bossListBtn = <fairygui.GButton><any>(this.getChild("bossListBtn"));
			this.bossMoneyChangeBtn = <fairygui.GButton><any>(this.getChild("bossMoneyChangeBtn"));
			this.leftBtn = <fairygui.GButton><any>(this.getChild("leftBtn"));
			this.rightBtn = <fairygui.GButton><any>(this.getChild("rightBtn"));
			this.bossMoneyChangeList = <fairygui.GList><any>(this.getChild("bossMoneyChangeList"));
			this.dateTxt = <fairygui.GTextField><any>(this.getChild("dateTxt"));
			this.moneyChangeTxt = <fairygui.GTextField><any>(this.getChild("moneyChangeTxt"));
			this.isSoonBoss = this.getController("isSoonBoss");
		}

		private _timer: egret.Timer;
		private _surplueTime: number;
		private _dateIndex: number;

		protected initView(): void
		{
			super.initView();
			this.alreadyBecomeList.itemRenderer = this.alreadyBecomeItemRenderer;
			this.alreadyBecomeList.callbackThisObj = this;
			this.doimgList.itemRenderer = this.doingItemRenderer;
			this.doimgList.callbackThisObj = this;
			this.bossMoneyChangeList.itemRenderer = this.bossMoneyChangeItemRenderer;
			this.bossMoneyChangeList.callbackThisObj = this;
			this._dateIndex = 0;
			becomeBoss.sendBecomeBossRequest();
		}

		protected onButtonClick(name: string): void
		{
			switch (name)
			{
				case "backBtn":
					game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_BECOME_BOSS);
					break;
				case "orderBtn":
					if (AllData.instance.BecomeBossData.isSoonBoss)
					{
						becomeBoss.cancelUpBoss();
					}
					else
					{
						game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_LINE_UP);
					}
					break;
				case "helpBtn":
					game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_BECOME_BOSS_RULE);
					break;
				case "changeWarehouseBtn":
					if (AllData.instance.BecomeBossData.isSoonChange)
					{
						becomeBoss.cancelChangeWareHouse();
					}
					else
					{
						game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_WANT_TO_CHANGE);
					}
					break;
				case "downBossBtn":
					if (AllData.instance.BecomeBossData.isSoonDown)
					{
						becomeBoss.cancelDownBoss();
					}
					else
					{
						becomeBoss.wantDownBoss();
					}
					break;
				case "leftBtn":
					this._dateIndex--;
					this.getBossChangeData();
					break;
				case "rightBtn":
					this._dateIndex++;
					this.getBossChangeData();
					break;
				case "bossMoneyChangeBtn":
					this.getBossChangeData();
					break;
			}
		}

		public dispose(): void
		{
			this._dateIndex = 0;
			super.dispose();
		}

		private getBossChangeData(): void
		{
			let dateStr = AllData.instance.getDateStrByCount(this._dateIndex);
			this.dateTxt.text = dateStr;
			becomeBoss.sendBossChangeRequest(dateStr);
			this.rightBtn.enabled = false;
			this.leftBtn.enabled = false;
		}
		/**
		 * 刷新庄家列表显示
		 */
		public refreshBecomeBossView(): void
		{
			let data = AllData.instance.BecomeBossData;
			this._surplueTime = data.surplueTime;
			this.startTimer(1000);
			this.alreadyBecomeList.numItems = data.alreadyBosses.length;
			this.doimgList.numItems = data.doingPlayers.length;
			this.surplueMoneyTxt.text = data.prizeMoney;
			this.refreshChangeState();
		}

		/**改变玩家状态 */
		public refreshChangeState(): void
		{
			let data = AllData.instance.BecomeBossData;
			if (data.isBoss)
			{
				this.isBoss.setSelectedPage("true");
				this.isSoonChangeCon.setSelectedPage(data.isSoonChange.toString());
				this.isSoonDownCon.setSelectedPage(data.isSoonDown.toString());
			}
			else
			{
				this.isBoss.setSelectedPage("false");
				this.isSoonBoss.setSelectedPage(data.isSoonBoss.toString());
			}
		}

		/**
		 * 庄家盈亏
		 */
		public refreshBossChangeView(): void
		{
			let data = AllData.instance.BossChangeData;
			this.moneyChangeTxt.text = data.moneyChanges.toString();
			this.bossMoneyChangeList.numItems = data.changeLists.length;
			this.rightBtn.enabled = true;
			this.leftBtn.enabled = true;
		}

		private alreadyBecomeItemRenderer(index: number, obj: AlreadyBecomeItem): void
		{
			obj.setData(AllData.instance.BecomeBossData.alreadyBosses[index]);
		}

		private doingItemRenderer(index: number, obj: DoingItem): void
		{
			obj.setData(AllData.instance.BecomeBossData.doingPlayers[index]);
		}

		private bossMoneyChangeItemRenderer(index: number, obj: BossMoneyChangeItam): void
		{
			let strs = AllData.instance.BossChangeData.changeLists[index];
			obj.setData(strs);
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
			this._surplueTime--;
			if (this._surplueTime < 0)
			{
				this.removeTimer();//todo 时间到
			}
			else
			{
				let min = Math.floor(this._surplueTime / 60);
				let second = this._surplueTime % 60;
				this.surplueTimeTxt.text = min + ":" + second;
			}
		}
	}
}