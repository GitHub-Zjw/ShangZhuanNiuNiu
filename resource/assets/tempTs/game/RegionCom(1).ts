/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class RegionCom(1) extends UIComponent {

		public state:fairygui.Controller;

		public static URL:string = "ui://v1h0uw6cydsh5x";

		public static createInstance():RegionCom(1) {
			return <RegionCom(1)><any>(fairygui.UIPackage.createObject("game","RegionCom(1)"));
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