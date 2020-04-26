/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class TipCom extends UIComponent {

		public title:fairygui.GTextField;

		public static URL:string = "ui://v1h0uw6cx04y5g";

		public static createInstance():TipCom {
			return <TipCom><any>(fairygui.UIPackage.createObject("game","TipCom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}