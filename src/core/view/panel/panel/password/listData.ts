/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module password {

	export class listData extends UIComponent {

		public fromTxt:fairygui.GTextField;
		public transferTxt:fairygui.GTextField;
		public memoTxt:fairygui.GTextField;
		public qualityTxt:fairygui.GTextField;
		public toTxt:fairygui.GTextField;

		public static URL:string = "ui://g9x2ap23ydsh7";

		public static createInstance():listData {
			return <listData><any>(fairygui.UIPackage.createObject("password","listData"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.fromTxt = <fairygui.GTextField><any>(this.getChild("fromTxt"));
			this.transferTxt = <fairygui.GTextField><any>(this.getChild("transferTxt"));
			this.memoTxt = <fairygui.GTextField><any>(this.getChild("memoTxt"));
			this.qualityTxt = <fairygui.GTextField><any>(this.getChild("qualityTxt"));
			this.toTxt = <fairygui.GTextField><any>(this.getChild("toTxt"));
		}
	}
}