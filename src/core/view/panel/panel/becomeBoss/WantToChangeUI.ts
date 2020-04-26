/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module becomeBoss
{

	export class WantToChangeUI extends UIComponent
	{

		public closeBtn: fairygui.GButton;
		public backBtn: fairygui.GButton;
		public bossMoneyTxt: fairygui.GTextField;
		public playerMoneyTxt: fairygui.GTextField;
		public okBtn: fairygui.GButton;
		public addMaxBtn: fairygui.GButton;
		public addInTxt: fairygui.GTextInput;
		public reduceMaxBtn: fairygui.GButton;
		public reduceInTxt: fairygui.GTextInput;

		public static URL: string = "ui://hyt9m7t9fxcm12";

		public static createInstance(): WantToChangeUI
		{
			return <WantToChangeUI><any>(fairygui.UIPackage.createObject("becomeBoss", "WantToChangeUI"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
			this.backBtn = <fairygui.GButton><any>(this.getChild("backBtn"));
			this.bossMoneyTxt = <fairygui.GTextField><any>(this.getChild("bossMoneyTxt"));
			this.playerMoneyTxt = <fairygui.GTextField><any>(this.getChild("playerMoneyTxt"));
			this.okBtn = <fairygui.GButton><any>(this.getChild("okBtn"));
			this.addMaxBtn = <fairygui.GButton><any>(this.getChild("addMaxBtn"));
			this.addInTxt = <fairygui.GTextInput><any>(this.getChild("addInTxt"));
			this.reduceMaxBtn = <fairygui.GButton><any>(this.getChild("reduceMaxBtn"));
			this.reduceInTxt = <fairygui.GTextInput><any>(this.getChild("reduceInTxt"));
		}

		protected initView(): void
		{
			super.initView();
			this.bossMoneyTxt.text = AllData.instance.BecomeBossData.myzmoney.toString();
			this.playerMoneyTxt.text = AllData.instance.HomePageData.myMoney.toString();
		}

		protected onButtonClick(name: string): void
		{
			switch (name)
			{
				case "backBtn":
					game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_WANT_TO_CHANGE);
					break;
				case "addMaxBtn":
					this.addInTxt.text = AllData.instance.HomePageData.myMoney.toString();
					break;
				case "reduceMaxBtn":
					this.reduceInTxt.text = AllData.instance.BecomeBossData.myzmoney.toString();
					break;
				case "okBtn":
					let strAdd: string = this.addInTxt.text;
					let strReduce: string = this.reduceInTxt.text;
					let addMoney = 0;
					let reduceMoney = 0;
					if (strAdd && strAdd.length > 0)
					{
						let addNum = parseInt(strAdd);
						if (addNum < 1000)
						{
							TipsUtils.showTipsFromCenter("加仓金额不得低于1000HDAG");
							return;
						}
						else
						{
							if (this.isEnough())
							{
								addMoney = addNum;
							}
							else
							{
								TipsUtils.showTipsFromCenter("您的余额不足");
								return;
							}
						}
					}
					if (strReduce && strReduce.length > 0)
					{
						let reduceNum = parseInt(strReduce);
						if (reduceNum < 100)
						{
							TipsUtils.showTipsFromCenter("减仓金额不得低于100HDAG");
							return;
						}
						else if (reduceNum > AllData.instance.BecomeBossData.myzmoney)
						{
							TipsUtils.showTipsFromCenter("减仓金额不得高于上庄余额");
							return;
						}
						else
						{
							reduceMoney = reduceNum;
						}
					}

					if (addMoney != 0 || reduceMoney != 0)
					{
						becomeBoss.wantChangeWareHouse(addMoney.toString(), reduceMoney.toString());
					}
					game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_WANT_TO_CHANGE);
					break;
			}
		}

		private isEnough(): boolean
		{
			let moneyNum = parseInt(this.addInTxt.text);
			return AllData.instance.getBetMoneyIsEnough(moneyNum);
		}
	}
}