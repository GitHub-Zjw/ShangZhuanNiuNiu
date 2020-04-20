/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module betInfo {

	export class TodayWinnerItem extends UIComponent {

		public c1:fairygui.Controller;
		public cardResultCom:CardResultCom;
		public htImage:fairygui.GImage;
		public hxImage:fairygui.GImage;
		public mhImage:fairygui.GImage;
		public fkImage:fairygui.GImage;

		public static URL:string = "ui://04s6lcaqpnt1g";

		public static createInstance():TodayWinnerItem {
			return <TodayWinnerItem><any>(fairygui.UIPackage.createObject("betInfo","TodayWinnerItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.c1 = this.getController("c1");
			this.cardResultCom = <CardResultCom><any>(this.getChild("cardResultCom"));
			this.htImage = <fairygui.GImage><any>(this.getChild("htImage"));
			this.hxImage = <fairygui.GImage><any>(this.getChild("hxImage"));
			this.mhImage = <fairygui.GImage><any>(this.getChild("mhImage"));
			this.fkImage = <fairygui.GImage><any>(this.getChild("fkImage"));
		}
	}
}