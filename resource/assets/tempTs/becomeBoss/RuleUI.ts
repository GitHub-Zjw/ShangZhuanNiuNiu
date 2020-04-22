/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module becomeBoss {

	export class RuleUI extends UIComponent {

		public closeBtn:fairygui.GButton;
		public backBtn:fairygui.GButton;

		public static URL:string = "ui://hyt9m7t9fxcm15";

		public static createInstance():RuleUI {
			return <RuleUI><any>(fairygui.UIPackage.createObject("becomeBoss","RuleUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
			this.backBtn = <fairygui.GButton><any>(this.getChild("backBtn"));
		}
	}
}