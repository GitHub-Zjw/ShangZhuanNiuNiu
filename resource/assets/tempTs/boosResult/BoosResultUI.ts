/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module boosResult {

	export class BoosResultUI extends UIComponent {

		public isWin:fairygui.Controller;
		public closeBtn:fairygui.GButton;
		public bossChangeTxt:fairygui.GTextField;
		public myChangeTxt:fairygui.GTextField;
		public myBetMoneyTxt:fairygui.GTextField;

		public static URL:string = "ui://dz1ncib1ri2z0";

		public static createInstance():BoosResultUI {
			return <BoosResultUI><any>(fairygui.UIPackage.createObject("boosResult","BoosResultUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.isWin = this.getController("isWin");
			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
			this.bossChangeTxt = <fairygui.GTextField><any>(this.getChild("bossChangeTxt"));
			this.myChangeTxt = <fairygui.GTextField><any>(this.getChild("myChangeTxt"));
			this.myBetMoneyTxt = <fairygui.GTextField><any>(this.getChild("myBetMoneyTxt"));
		}
	}
}