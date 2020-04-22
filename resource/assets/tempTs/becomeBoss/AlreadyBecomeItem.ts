/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module becomeBoss {

	export class AlreadyBecomeItem extends UIComponent {

		public playerNameTxt:fairygui.GTextField;
		public betMoneyTxt:fairygui.GTextField;
		public playerMoneyTxt:fairygui.GTextField;
		public proportionTxt:fairygui.GTextField;

		public static URL:string = "ui://hyt9m7t9fxcmj";

		public static createInstance():AlreadyBecomeItem {
			return <AlreadyBecomeItem><any>(fairygui.UIPackage.createObject("becomeBoss","AlreadyBecomeItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.playerNameTxt = <fairygui.GTextField><any>(this.getChild("playerNameTxt"));
			this.betMoneyTxt = <fairygui.GTextField><any>(this.getChild("betMoneyTxt"));
			this.playerMoneyTxt = <fairygui.GTextField><any>(this.getChild("playerMoneyTxt"));
			this.proportionTxt = <fairygui.GTextField><any>(this.getChild("proportionTxt"));
		}
	}
}