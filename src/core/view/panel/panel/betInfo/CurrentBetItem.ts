/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module betInfo {

	export class CurrentBetItem extends UIComponent {

		public htCol:fairygui.Controller;
		public hxCol:fairygui.Controller;
		public mhCol:fairygui.Controller;
		public fkCol:fairygui.Controller;

		public static URL:string = "ui://04s6lcaqpnt1e";

		public static createInstance():CurrentBetItem {
			return <CurrentBetItem><any>(fairygui.UIPackage.createObject("betInfo","CurrentBetItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.htCol = this.getController("htCol");
			this.hxCol = this.getController("hxCol");
			this.mhCol = this.getController("mhCol");
			this.fkCol = this.getController("fkCol");
		}
	}
}