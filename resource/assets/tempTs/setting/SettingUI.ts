/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module setting {

	export class SettingUI extends UIComponent {

		public closeBtn:fairygui.GButton;
		public bgBtn:fairygui.GButton;
		public effectBtn:fairygui.GButton;
		public cencalBtn:fairygui.GButton;
		public okBtn:fairygui.GButton;

		public static URL:string = "ui://duwd3xqfri2z0";

		public static createInstance():SettingUI {
			return <SettingUI><any>(fairygui.UIPackage.createObject("setting","SettingUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
			this.bgBtn = <fairygui.GButton><any>(this.getChild("bgBtn"));
			this.effectBtn = <fairygui.GButton><any>(this.getChild("effectBtn"));
			this.cencalBtn = <fairygui.GButton><any>(this.getChild("cencalBtn"));
			this.okBtn = <fairygui.GButton><any>(this.getChild("okBtn"));
		}
	}
}