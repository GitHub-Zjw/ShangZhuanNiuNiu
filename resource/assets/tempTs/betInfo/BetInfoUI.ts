/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module betInfo {

	export class BetInfoUI extends UIComponent {

		public c1:fairygui.Controller;
		public closeBtn:fairygui.GButton;
		public todayWinner:fairygui.GButton;
		public currentBet:fairygui.GButton;
		public currentBetList:fairygui.GList;
		public todayWinnerList:fairygui.GList;

		public static URL:string = "ui://04s6lcaqpnt10";

		public static createInstance():BetInfoUI {
			return <BetInfoUI><any>(fairygui.UIPackage.createObject("betInfo","BetInfoUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.c1 = this.getController("c1");
			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
			this.todayWinner = <fairygui.GButton><any>(this.getChild("todayWinner"));
			this.currentBet = <fairygui.GButton><any>(this.getChild("currentBet"));
			this.currentBetList = <fairygui.GList><any>(this.getChild("currentBetList"));
			this.todayWinnerList = <fairygui.GList><any>(this.getChild("todayWinnerList"));
		}
	}
}