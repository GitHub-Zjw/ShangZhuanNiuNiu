/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class RegionCom extends UIComponent {

		public state:fairygui.Controller;
		public resultList:fairygui.GList;
		public betValueTxt:fairygui.GTextField;
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
			this.winTran = this.getTransition("winTran");
			this.loseTran = this.getTransition("loseTran");
		}
	}
}