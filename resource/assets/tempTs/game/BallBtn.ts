/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class BallBtn extends UIComponent {

		public state:fairygui.Controller;
		public t0:fairygui.Transition;

		public static URL:string = "ui://v1h0uw6citti1t";

		public static createInstance():BallBtn {
			return <BallBtn><any>(fairygui.UIPackage.createObject("game","BallBtn"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.state = this.getController("state");
			this.t0 = this.getTransition("t0");
		}
	}
}