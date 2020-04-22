/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class BossCom extends UIComponent {

		public moneyValueTxt:fairygui.GTextField;
		public playerNumTxt:fairygui.GTextField;
		public countDownTxt:fairygui.GTextField;
		public resultList:fairygui.GList;
		public becomeBossBtn:fairygui.GButton;

		public static URL:string = "ui://v1h0uw6csrv91l";

		public static createInstance():BossCom {
			return <BossCom><any>(fairygui.UIPackage.createObject("game","BossCom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.moneyValueTxt = <fairygui.GTextField><any>(this.getChild("moneyValueTxt"));
			this.playerNumTxt = <fairygui.GTextField><any>(this.getChild("playerNumTxt"));
			this.countDownTxt = <fairygui.GTextField><any>(this.getChild("countDownTxt"));
			this.resultList = <fairygui.GList><any>(this.getChild("resultList"));
			this.becomeBossBtn = <fairygui.GButton><any>(this.getChild("becomeBossBtn"));
		}
	}
}