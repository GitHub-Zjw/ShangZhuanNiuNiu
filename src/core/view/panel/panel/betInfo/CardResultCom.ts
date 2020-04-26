/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module betInfo {

	export class CardResultCom extends UIComponent {

		public state:fairygui.Controller;

		public static URL:string = "ui://04s6lcaqpnt1h";

		public static createInstance():CardResultCom {
			return <CardResultCom><any>(fairygui.UIPackage.createObject("betInfo","CardResultCom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.state = this.getController("state");
		}

		public setData(type: EnumerationType.CardResult): void
		{
			this.state.setSelectedIndex(type);
		}
	}
}