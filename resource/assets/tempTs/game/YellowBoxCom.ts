/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class YellowBoxCom extends UIComponent {

		public lightTran:fairygui.Transition;

		public static URL:string = "ui://v1h0uw6cto544y";

		public static createInstance():YellowBoxCom {
			return <YellowBoxCom><any>(fairygui.UIPackage.createObject("game","YellowBoxCom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.lightTran = this.getTransition("lightTran");
		}
	}
}