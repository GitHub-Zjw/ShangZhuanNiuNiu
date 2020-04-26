/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module boosResult
{

	export class BoosResultUI extends UIComponent
	{

		public isWin: fairygui.Controller;
		public closeBtn: fairygui.GButton;
		public bossChangeTxt: fairygui.GTextField;
		public myChangeTxt: fairygui.GTextField;
		public myBetMoneyTxt: fairygui.GTextField;

		public static URL: string = "ui://dz1ncib1ri2z0";

		public static createInstance(): BoosResultUI
		{
			return <BoosResultUI><any>(fairygui.UIPackage.createObject("boosResult", "BoosResultUI"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.isWin = this.getController("isWin");
			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
			this.bossChangeTxt = <fairygui.GTextField><any>(this.getChild("bossChangeTxt"));
			this.myChangeTxt = <fairygui.GTextField><any>(this.getChild("myChangeTxt"));
			this.myBetMoneyTxt = <fairygui.GTextField><any>(this.getChild("myBetMoneyTxt"));
		}

		protected onButtonClick(name: string)
		{
			switch (name)
			{
				case "closeBtn":
					game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_BOSS_RESULT);
					break;
			}
		}

		public refreshView(data: game.BossTimeOverData): void
		{
			let isWin = data.Data.money >= 0;
			this.setData(isWin, data.Data.money.toString(), data.Data.winmoney.toString(), data.Data.betmoney.toString());
			let temp = setTimeout(function() {
				game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_BOSS_RESULT);
			}, 1500);
		}

		/**
		 * 设置界面
		 * @param isWin 是否获胜
		 * @param bossChange 庄家盈亏
		 * @param myChange 我的盈亏
		 * @param myBet 我的下注
		 */
		public setData(isWin: boolean, bossChange: string, myChange: string, myBet: string): void
		{
			this.isWin.setSelectedPage(isWin.toString());
			this.bossChangeTxt.text = bossChange;
			this.myChangeTxt.text = myChange;
			this.myBetMoneyTxt.text = myBet;
		}
	}
}