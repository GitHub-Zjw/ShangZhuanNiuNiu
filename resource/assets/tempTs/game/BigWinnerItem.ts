/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class BigWinnerItem extends UIComponent {

		public state:fairygui.Controller;
		public nameTxt:fairygui.GTextField;
		public hdagTxt:fairygui.GTextField;

		public static URL:string = "ui://v1h0uw6cfek257";

		public static createInstance():BigWinnerItem {
			return <BigWinnerItem><any>(fairygui.UIPackage.createObject("game","BigWinnerItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.state = this.getController("state");
			this.nameTxt = <fairygui.GTextField><any>(this.getChild("nameTxt"));
			this.hdagTxt = <fairygui.GTextField><any>(this.getChild("hdagTxt"));
		}
	}
}