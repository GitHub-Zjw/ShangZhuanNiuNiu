/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class CardResultCom extends UIComponent {

		public state:fairygui.Controller;

		public static URL:string = "ui://v1h0uw6clmsy4x";

		public static createInstance():CardResultCom {
			return <CardResultCom><any>(fairygui.UIPackage.createObject("game","CardResultCom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.state = this.getController("state");
		}
	}
}