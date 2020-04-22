/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module becomeBoss {

	export class DoingItem extends UIComponent {

		public playerNameTxt:fairygui.GTextField;
		public betMoneyTxt:fairygui.GTextField;
		public proportionTxt:fairygui.GTextField;

		public static URL:string = "ui://hyt9m7t9fxcml";

		public static createInstance():DoingItem {
			return <DoingItem><any>(fairygui.UIPackage.createObject("becomeBoss","DoingItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.playerNameTxt = <fairygui.GTextField><any>(this.getChild("playerNameTxt"));
			this.betMoneyTxt = <fairygui.GTextField><any>(this.getChild("betMoneyTxt"));
			this.proportionTxt = <fairygui.GTextField><any>(this.getChild("proportionTxt"));
		}
	}
}