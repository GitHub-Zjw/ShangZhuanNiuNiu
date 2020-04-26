/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module becomeBoss
{

	export class LineUpBecomeBossUI extends UIComponent
	{

		public closeBtn: fairygui.GButton;
		public money1kBtn: fairygui.GButton;
		public money5kBtn: fairygui.GButton;
		public money1wBtn: fairygui.GButton;
		public money5wBtn: fairygui.GButton;
		public money10wBtn: fairygui.GButton;
		public money50wBtn: fairygui.GButton;
		public doBtn: fairygui.GButton;
		public maxBtn: fairygui.GButton;
		public helpBtn: fairygui.GButton;
		public backBtn: fairygui.GButton;
		public useMoneyInTxt: fairygui.GTextInput;
		public playerMoneyTxt: fairygui.GTextField;

		public static URL: string = "ui://hyt9m7t9fxcms";

		public static createInstance(): LineUpBecomeBossUI
		{
			return <LineUpBecomeBossUI><any>(fairygui.UIPackage.createObject("becomeBoss", "LineUpBecomeBossUI"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
			this.money1kBtn = <fairygui.GButton><any>(this.getChild("money1kBtn"));
			this.money5kBtn = <fairygui.GButton><any>(this.getChild("money5kBtn"));
			this.money1wBtn = <fairygui.GButton><any>(this.getChild("money1wBtn"));
			this.money5wBtn = <fairygui.GButton><any>(this.getChild("money5wBtn"));
			this.money10wBtn = <fairygui.GButton><any>(this.getChild("money10wBtn"));
			this.money50wBtn = <fairygui.GButton><any>(this.getChild("money50wBtn"));
			this.doBtn = <fairygui.GButton><any>(this.getChild("doBtn"));
			this.maxBtn = <fairygui.GButton><any>(this.getChild("maxBtn"));
			this.helpBtn = <fairygui.GButton><any>(this.getChild("helpBtn"));
			this.backBtn = <fairygui.GButton><any>(this.getChild("backBtn"));
			this.useMoneyInTxt = <fairygui.GTextInput><any>(this.getChild("useMoneyInTxt"));
			this.playerMoneyTxt = <fairygui.GTextField><any>(this.getChild("playerMoneyTxt"));
		}

		protected initView(): void
		{
			super.initView();
			this.playerMoneyTxt.text = AllData.instance.HomePageData.myMoney.toString();
		}

		protected onButtonClick(name: string): void
		{
			switch (name)
			{
				case "backBtn":
					game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_LINE_UP);
					break;
				case "maxBtn":
					this.useMoneyInTxt.text = AllData.instance.HomePageData.myMoney.toString();
					break;
				case "money1kBtn":
					this.useMoneyInTxt.text = "1000";
					break;
				case "money5kBtn":
					this.useMoneyInTxt.text = "5000";
					break;
				case "money1wBtn":
					this.useMoneyInTxt.text = "10000";
					break;
				case "money5wBtn":
					this.useMoneyInTxt.text = "50000";
					break;
				case "money10wBtn":
					this.useMoneyInTxt.text = "100000";
					break;
				case "money50wBtn":
					this.useMoneyInTxt.text = "500000";
					break;
				case "doBtn":
					let str = this.useMoneyInTxt.text;
					if (str && str.length > 0)
					{
						let moneyNum = parseInt(this.useMoneyInTxt.text);
						if (moneyNum < 1000)
						{
							TipsUtils.showTipsFromCenter("上庄金额不得少于1000HDAG");
						}
						else
						{
							if (this.isEnough())
							{
								becomeBoss.wantUpBossRequest(moneyNum.toString());
							}
							else
							{
								TipsUtils.showTipsFromCenter("您的余额不足");
							}
						}
					}
					else
					{
						TipsUtils.showTipsFromCenter("请输入金额");
					}
					break;
				case "helpBtn":
					game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_BECOME_BOSS_RULE);
					break;
			}
		}

		private isEnough(): boolean
		{
			let moneyNum = parseInt(this.useMoneyInTxt.text);
			return AllData.instance.getBetMoneyIsEnough(moneyNum);
		}
	}
}