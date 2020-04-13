/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class BetBallCom extends UIComponent {

		public state:fairygui.Controller;
		public iconLoader:fairygui.GLoader;

		public static URL:string = "ui://v1h0uw6cecgg20";

		public static createInstance():BetBallCom {
			return <BetBallCom><any>(fairygui.UIPackage.createObject("game","BetBallCom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.state = this.getController("state");
			this.iconLoader = <fairygui.GLoader><any>(this.getChild("iconLoader"));
		}
	}
}