/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module becomeBoss
{

	export class BossMoneyChangeItam extends UIComponent
	{

		public roundCountTxt: fairygui.GTextField;
		public timeTxt: fairygui.GTextField;
		public changeTxt: fairygui.GTextField;
		public moneyTxt: fairygui.GTextField;

		public static URL: string = "ui://hyt9m7t9fxcmr";

		public static createInstance(): BossMoneyChangeItam
		{
			return <BossMoneyChangeItam><any>(fairygui.UIPackage.createObject("becomeBoss", "BossMoneyChangeItam"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.roundCountTxt = <fairygui.GTextField><any>(this.getChild("roundCountTxt"));
			this.timeTxt = <fairygui.GTextField><any>(this.getChild("timeTxt"));
			this.changeTxt = <fairygui.GTextField><any>(this.getChild("changeTxt"));
			this.moneyTxt = <fairygui.GTextField><any>(this.getChild("moneyTxt"));
		}

		public setData(data: string[]): void
		{
			this.roundCountTxt.text = data[0];
			this.timeTxt.text = data[1];
			this.changeTxt.text = data[2];
			this.moneyTxt.text = data[3];
		}
	}
}