/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class RegionCom extends UIComponent {

		public state:fairygui.Controller;
		public resultList:fairygui.GList;
		public betValueTxt:fairygui.GTextField;
		public hkImg:fairygui.GImage;
		public winImg:fairygui.GImage;
		public lostImg:fairygui.GImage;
		public winTran:fairygui.Transition;
		public loseTran:fairygui.Transition;

		public static URL:string = "ui://v1h0uw6csrv91n";

		public static createInstance():RegionCom {
			return <RegionCom><any>(fairygui.UIPackage.createObject("game","RegionCom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.state = this.getController("state");
			this.resultList = <fairygui.GList><any>(this.getChild("resultList"));
			this.betValueTxt = <fairygui.GTextField><any>(this.getChild("betValueTxt"));
			this.hkImg = <fairygui.GImage><any>(this.getChild("hkImg"));
			this.winImg = <fairygui.GImage><any>(this.getChild("winImg"));
			this.lostImg = <fairygui.GImage><any>(this.getChild("lostImg"));
			this.winTran = this.getTransition("winTran");
			this.loseTran = this.getTransition("loseTran");
		}
	}
}