/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class MainUI extends UIComponent {

		public ballSelect:fairygui.Controller;
		public bg:fairygui.GImage;
		public ball1_btn:BallBtn;
		public ball2_btn:BallBtn;
		public ball3_btn:BallBtn;
		public ball4_btn:BallBtn;
		public ball5_btn:BallBtn;
		public ball6_btn:BallBtn;
		public methodBtn:fairygui.GButton;
		public settingBtn:fairygui.GButton;
		public closeBtn:fairygui.GButton;
		public cleanBtn:fairygui.GButton;
		public betBtn:fairygui.GButton;
		public pgValueTxt:fairygui.GTextField;
		public bossChangeTxt:fairygui.GTextField;
		public playerChangeTxt:fairygui.GTextField;
		public playerMoneyTxt:fairygui.GTextField;
		public dzValueTxt:fairygui.GTextField;
		public tzValueTxt:fairygui.GTextField;
		public betPlayerCom:BetPlayerCom;
		public clockCom:ClockCom;
		public bossCom:BossCom;
		public ballGroupCom:fairygui.GComponent;
		public region0:RegionCom;
		public region1:RegionCom;
		public region2:RegionCom;
		public region3:RegionCom;
		public maxBetBar:fairygui.GProgressBar;
		public resultCom:ResultCom;
		public homePageDataBtn:fairygui.GButton;
		public betDetailDataBtn:fairygui.GButton;
		public joinSucceedBtn:fairygui.GButton;
		public cardResultBtn:fairygui.GButton;
		public bigWinnerCom:BigWinnerCom;
		public bossResultTran:fairygui.Transition;
		public playerResultTran:fairygui.Transition;
		public beginTran:fairygui.Transition;
		public stopBetTran:fairygui.Transition;
		public bigWinnerTran:fairygui.Transition;
		public bossAllLoseTran:fairygui.Transition;
		public bossAllWinTran:fairygui.Transition;

		public static URL:string = "ui://v1h0uw6cfjnq0";

		public static createInstance():MainUI {
			return <MainUI><any>(fairygui.UIPackage.createObject("game","MainUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.ballSelect = this.getController("ballSelect");
			this.bg = <fairygui.GImage><any>(this.getChild("bg"));
			this.ball1_btn = <BallBtn><any>(this.getChild("ball1_btn"));
			this.ball2_btn = <BallBtn><any>(this.getChild("ball2_btn"));
			this.ball3_btn = <BallBtn><any>(this.getChild("ball3_btn"));
			this.ball4_btn = <BallBtn><any>(this.getChild("ball4_btn"));
			this.ball5_btn = <BallBtn><any>(this.getChild("ball5_btn"));
			this.ball6_btn = <BallBtn><any>(this.getChild("ball6_btn"));
			this.methodBtn = <fairygui.GButton><any>(this.getChild("methodBtn"));
			this.settingBtn = <fairygui.GButton><any>(this.getChild("settingBtn"));
			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
			this.cleanBtn = <fairygui.GButton><any>(this.getChild("cleanBtn"));
			this.betBtn = <fairygui.GButton><any>(this.getChild("betBtn"));
			this.pgValueTxt = <fairygui.GTextField><any>(this.getChild("pgValueTxt"));
			this.bossChangeTxt = <fairygui.GTextField><any>(this.getChild("bossChangeTxt"));
			this.playerChangeTxt = <fairygui.GTextField><any>(this.getChild("playerChangeTxt"));
			this.playerMoneyTxt = <fairygui.GTextField><any>(this.getChild("playerMoneyTxt"));
			this.dzValueTxt = <fairygui.GTextField><any>(this.getChild("dzValueTxt"));
			this.tzValueTxt = <fairygui.GTextField><any>(this.getChild("tzValueTxt"));
			this.betPlayerCom = <BetPlayerCom><any>(this.getChild("betPlayerCom"));
			this.clockCom = <ClockCom><any>(this.getChild("clockCom"));
			this.bossCom = <BossCom><any>(this.getChild("bossCom"));
			this.ballGroupCom = <fairygui.GComponent><any>(this.getChild("ballGroupCom"));
			this.region0 = <RegionCom><any>(this.getChild("region0"));
			this.region1 = <RegionCom><any>(this.getChild("region1"));
			this.region2 = <RegionCom><any>(this.getChild("region2"));
			this.region3 = <RegionCom><any>(this.getChild("region3"));
			this.maxBetBar = <fairygui.GProgressBar><any>(this.getChild("maxBetBar"));
			this.resultCom = <ResultCom><any>(this.getChild("resultCom"));
			this.homePageDataBtn = <fairygui.GButton><any>(this.getChild("homePageDataBtn"));
			this.betDetailDataBtn = <fairygui.GButton><any>(this.getChild("betDetailDataBtn"));
			this.joinSucceedBtn = <fairygui.GButton><any>(this.getChild("joinSucceedBtn"));
			this.cardResultBtn = <fairygui.GButton><any>(this.getChild("cardResultBtn"));
			this.bigWinnerCom = <BigWinnerCom><any>(this.getChild("bigWinnerCom"));
			this.bossResultTran = this.getTransition("bossResultTran");
			this.playerResultTran = this.getTransition("playerResultTran");
			this.beginTran = this.getTransition("beginTran");
			this.stopBetTran = this.getTransition("stopBetTran");
			this.bigWinnerTran = this.getTransition("bigWinnerTran");
			this.bossAllLoseTran = this.getTransition("bossAllLoseTran");
			this.bossAllWinTran = this.getTransition("bossAllWinTran");
		}
	}
}