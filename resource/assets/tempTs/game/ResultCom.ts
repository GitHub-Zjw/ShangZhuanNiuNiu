/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class ResultCom extends UIComponent {

		public hxList:fairygui.GList;
		public luckTxt0:fairygui.GTextField;
		public luckTxt1:fairygui.GTextField;
		public luckTxt2:fairygui.GTextField;
		public luckTxt3:fairygui.GTextField;
		public luckTxt4:fairygui.GTextField;
		public moveTxt:fairygui.GTextField;
		public yellowBoxImg0:fairygui.GImage;
		public yellowBoxImg1:fairygui.GImage;
		public yellowBoxImg2:fairygui.GImage;
		public yellowBoxImg3:fairygui.GImage;
		public yellowBoxImg4:fairygui.GImage;
		public txtGroup:fairygui.GGroup;
		public starCard:CardCom;
		public centerCard:CardCom;
		public endCard:CardCom;
		public bossEndCard:CardCom;
		public card0:CardCom;
		public card1:CardCom;
		public card2:CardCom;
		public card3:CardCom;
		public card4:CardCom;
		public card5:CardCom;
		public card6:CardCom;
		public card7:CardCom;
		public card8:CardCom;
		public card9:CardCom;
		public card10:CardCom;
		public card11:CardCom;
		public card12:CardCom;
		public card13:CardCom;
		public card14:CardCom;
		public card15:CardCom;
		public card16:CardCom;
		public card17:CardCom;
		public card18:CardCom;
		public card19:CardCom;
		public card20:CardCom;
		public card21:CardCom;
		public card22:CardCom;
		public card23:CardCom;
		public card24:CardCom;
		public lightCom0:YellowBoxCom;
		public lightCom1:YellowBoxCom;
		public lightCom2:YellowBoxCom;
		public lightCom3:YellowBoxCom;
		public lightCom4:YellowBoxCom;
		public cardResultCom0:CardResultCom;
		public cardResultCom1:CardResultCom;
		public cardResultCom2:CardResultCom;
		public cardResultCom3:CardResultCom;
		public cardResultCom4:CardResultCom;

		public static URL:string = "ui://v1h0uw6clmsy26";

		public static createInstance():ResultCom {
			return <ResultCom><any>(fairygui.UIPackage.createObject("game","ResultCom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.hxList = <fairygui.GList><any>(this.getChild("hxList"));
			this.luckTxt0 = <fairygui.GTextField><any>(this.getChild("luckTxt0"));
			this.luckTxt1 = <fairygui.GTextField><any>(this.getChild("luckTxt1"));
			this.luckTxt2 = <fairygui.GTextField><any>(this.getChild("luckTxt2"));
			this.luckTxt3 = <fairygui.GTextField><any>(this.getChild("luckTxt3"));
			this.luckTxt4 = <fairygui.GTextField><any>(this.getChild("luckTxt4"));
			this.moveTxt = <fairygui.GTextField><any>(this.getChild("moveTxt"));
			this.yellowBoxImg0 = <fairygui.GImage><any>(this.getChild("yellowBoxImg0"));
			this.yellowBoxImg1 = <fairygui.GImage><any>(this.getChild("yellowBoxImg1"));
			this.yellowBoxImg2 = <fairygui.GImage><any>(this.getChild("yellowBoxImg2"));
			this.yellowBoxImg3 = <fairygui.GImage><any>(this.getChild("yellowBoxImg3"));
			this.yellowBoxImg4 = <fairygui.GImage><any>(this.getChild("yellowBoxImg4"));
			this.txtGroup = <fairygui.GGroup><any>(this.getChild("txtGroup"));
			this.starCard = <CardCom><any>(this.getChild("starCard"));
			this.centerCard = <CardCom><any>(this.getChild("centerCard"));
			this.endCard = <CardCom><any>(this.getChild("endCard"));
			this.bossEndCard = <CardCom><any>(this.getChild("bossEndCard"));
			this.card0 = <CardCom><any>(this.getChild("card0"));
			this.card1 = <CardCom><any>(this.getChild("card1"));
			this.card2 = <CardCom><any>(this.getChild("card2"));
			this.card3 = <CardCom><any>(this.getChild("card3"));
			this.card4 = <CardCom><any>(this.getChild("card4"));
			this.card5 = <CardCom><any>(this.getChild("card5"));
			this.card6 = <CardCom><any>(this.getChild("card6"));
			this.card7 = <CardCom><any>(this.getChild("card7"));
			this.card8 = <CardCom><any>(this.getChild("card8"));
			this.card9 = <CardCom><any>(this.getChild("card9"));
			this.card10 = <CardCom><any>(this.getChild("card10"));
			this.card11 = <CardCom><any>(this.getChild("card11"));
			this.card12 = <CardCom><any>(this.getChild("card12"));
			this.card13 = <CardCom><any>(this.getChild("card13"));
			this.card14 = <CardCom><any>(this.getChild("card14"));
			this.card15 = <CardCom><any>(this.getChild("card15"));
			this.card16 = <CardCom><any>(this.getChild("card16"));
			this.card17 = <CardCom><any>(this.getChild("card17"));
			this.card18 = <CardCom><any>(this.getChild("card18"));
			this.card19 = <CardCom><any>(this.getChild("card19"));
			this.card20 = <CardCom><any>(this.getChild("card20"));
			this.card21 = <CardCom><any>(this.getChild("card21"));
			this.card22 = <CardCom><any>(this.getChild("card22"));
			this.card23 = <CardCom><any>(this.getChild("card23"));
			this.card24 = <CardCom><any>(this.getChild("card24"));
			this.lightCom0 = <YellowBoxCom><any>(this.getChild("lightCom0"));
			this.lightCom1 = <YellowBoxCom><any>(this.getChild("lightCom1"));
			this.lightCom2 = <YellowBoxCom><any>(this.getChild("lightCom2"));
			this.lightCom3 = <YellowBoxCom><any>(this.getChild("lightCom3"));
			this.lightCom4 = <YellowBoxCom><any>(this.getChild("lightCom4"));
			this.cardResultCom0 = <CardResultCom><any>(this.getChild("cardResultCom0"));
			this.cardResultCom1 = <CardResultCom><any>(this.getChild("cardResultCom1"));
			this.cardResultCom2 = <CardResultCom><any>(this.getChild("cardResultCom2"));
			this.cardResultCom3 = <CardResultCom><any>(this.getChild("cardResultCom3"));
			this.cardResultCom4 = <CardResultCom><any>(this.getChild("cardResultCom4"));
		}
	}
}