/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module becomeBoss {

	export class LineUpBecomeBossUI extends UIComponent {

		public closeBtn:fairygui.GButton;
		public money1kBtn:fairygui.GButton;
		public money5kBtn:fairygui.GButton;
		public money1wBtn:fairygui.GButton;
		public money5wBtn:fairygui.GButton;
		public money10wBtn:fairygui.GButton;
		public money50wBtn:fairygui.GButton;
		public doBtn:fairygui.GButton;
		public maxBtn:fairygui.GButton;
		public helpBtn:fairygui.GButton;
		public backBtn:fairygui.GButton;
		public useMoneyInTxt:fairygui.GTextInput;
		public playerMoneyTxt:fairygui.GTextField;

		public static URL:string = "ui://hyt9m7t9fxcms";

		public static createInstance():LineUpBecomeBossUI {
			return <LineUpBecomeBossUI><any>(fairygui.UIPackage.createObject("becomeBoss","LineUpBecomeBossUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
			this.money1kBtn = <fairygui.GButton><any>(this.getChild("money1kBtn"));
			this.money5kBtn = <fairygui.GButton><any>(this.getChild("money5kBtn"));
			this.money1wBtn = <fairygui.GButton><any>(this.getChild("money1wBtn"));
			this.money5wBtn = <fairygui.GButton><any>(this.getChild("money5wBtn"));
			this.money10wBtn = <fairygui.GButton><any>(this.getChild("money10wBtn"));
			this.money50wBtn = <fairygui.GButton><any>(this.getChild("money50wBtn"));
			this.doBtn = <fairygui.GButton><any>(this.getChild("doBtn"));
			this.maxBtn = <fairygui.GButton><any>(this.getChild("maxBtn"));
			this.helpBtn = <fairygui.GButton><any>(this.getChild("helpBtn"));
			this.backBtn = <fairygui.GButton><any>(this.getChild("backBtn"));
			this.useMoneyInTxt = <fairygui.GTextInput><any>(this.getChild("useMoneyInTxt"));
			this.playerMoneyTxt = <fairygui.GTextField><any>(this.getChild("playerMoneyTxt"));
		}
	}
}