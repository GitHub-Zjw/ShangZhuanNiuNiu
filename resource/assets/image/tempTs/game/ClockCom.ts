/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class ClockCom extends UIComponent {

		public valueTxt:fairygui.GTextField;

		public static URL:string = "ui://v1h0uw6csrv91e";

		public static createInstance():ClockCom {
			return <ClockCom><any>(fairygui.UIPackage.createObject("game","ClockCom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.valueTxt = <fairygui.GTextField><any>(this.getChild("valueTxt"));
		}
	}
}