/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module becomeBoss {

	export class WantToChangeUI extends UIComponent {

		public closeBtn:fairygui.GButton;
		public backBtn:fairygui.GButton;
		public bossMoneyTxt:fairygui.GTextField;
		public playerMoneyTxt:fairygui.GTextField;
		public okBtn:fairygui.GButton;
		public addMaxBtn:fairygui.GButton;
		public addInTxt:fairygui.GTextInput;
		public reduceMaxBtn:fairygui.GButton;
		public reduceInTxt:fairygui.GTextInput;

		public static URL:string = "ui://hyt9m7t9fxcm12";

		public static createInstance():WantToChangeUI {
			return <WantToChangeUI><any>(fairygui.UIPackage.createObject("becomeBoss","WantToChangeUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
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
	}
}