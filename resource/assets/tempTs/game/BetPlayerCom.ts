/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class BetPlayerCom extends UIComponent {

		public ballValueTxt:fairygui.GTextField;
		public fkImg:fairygui.GImage;
		public hongtaoImg:fairygui.GImage;
		public heitaoImg:fairygui.GImage;
		public chImg:fairygui.GImage;
		public playerNameTxt:fairygui.GTextField;
		public batValueTxt:fairygui.GTextField;
		public noBodyTxt:fairygui.GTextField;
		public detailBtn:fairygui.GButton;
		public prizeBtn:fairygui.GButton;
		public betTran:fairygui.Transition;

		public static URL:string = "ui://v1h0uw6csrv91g";

		public static createInstance():BetPlayerCom {
			return <BetPlayerCom><any>(fairygui.UIPackage.createObject("game","BetPlayerCom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.ballValueTxt = <fairygui.GTextField><any>(this.getChild("ballValueTxt"));
			this.fkImg = <fairygui.GImage><any>(this.getChild("fkImg"));
			this.hongtaoImg = <fairygui.GImage><any>(this.getChild("hongtaoImg"));
			this.heitaoImg = <fairygui.GImage><any>(this.getChild("heitaoImg"));
			this.chImg = <fairygui.GImage><any>(this.getChild("chImg"));
			this.playerNameTxt = <fairygui.GTextField><any>(this.getChild("playerNameTxt"));
			this.batValueTxt = <fairygui.GTextField><any>(this.getChild("batValueTxt"));
			this.noBodyTxt = <fairygui.GTextField><any>(this.getChild("noBodyTxt"));
			this.detailBtn = <fairygui.GButton><any>(this.getChild("detailBtn"));
			this.prizeBtn = <fairygui.GButton><any>(this.getChild("prizeBtn"));
			this.betTran = this.getTransition("betTran");
		}
	}
}