/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module becomeBoss {

	export class BeconmeBossUI extends UIComponent {

		public titleStateCon:fairygui.Controller;
		public c2:fairygui.Controller;
		public isBoss:fairygui.Controller;
		public isSoonChangeCon:fairygui.Controller;
		public isSoonDownCon:fairygui.Controller;
		public isSoonBoss:fairygui.Controller;
		public closeBtn:fairygui.GButton;
		public changeWarehouseBtn:fairygui.GButton;
		public downBossBtn:fairygui.GButton;
		public orderBtn:fairygui.GButton;
		public alreadyBecomeBtn:fairygui.GButton;
		public willBecomeBtn:fairygui.GButton;
		public surplueMoneyTxt:fairygui.GTextField;
		public surplueTimeTxt:fairygui.GTextField;
		public alreadyBecomeList:fairygui.GList;
		public doimgList:fairygui.GList;
		public backBtn:fairygui.GButton;
		public helpBtn:fairygui.GButton;
		public bossListBtn:fairygui.GButton;
		public bossMoneyChangeBtn:fairygui.GButton;
		public leftBtn:fairygui.GButton;
		public rightBtn:fairygui.GButton;
		public bossMoneyChangeList:fairygui.GList;
		public dateTxt:fairygui.GTextField;
		public moneyChangeTxt:fairygui.GTextField;

		public static URL:string = "ui://hyt9m7t9fxcm3";

		public static createInstance():BeconmeBossUI {
			return <BeconmeBossUI><any>(fairygui.UIPackage.createObject("becomeBoss","BeconmeBossUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.titleStateCon = this.getController("titleStateCon");
			this.c2 = this.getController("c2");
			this.isBoss = this.getController("isBoss");
			this.isSoonChangeCon = this.getController("isSoonChangeCon");
			this.isSoonDownCon = this.getController("isSoonDownCon");
			this.isSoonBoss = this.getController("isSoonBoss");
			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
			this.changeWarehouseBtn = <fairygui.GButton><any>(this.getChild("changeWarehouseBtn"));
			this.downBossBtn = <fairygui.GButton><any>(this.getChild("downBossBtn"));
			this.orderBtn = <fairygui.GButton><any>(this.getChild("orderBtn"));
			this.alreadyBecomeBtn = <fairygui.GButton><any>(this.getChild("alreadyBecomeBtn"));
			this.willBecomeBtn = <fairygui.GButton><any>(this.getChild("willBecomeBtn"));
			this.surplueMoneyTxt = <fairygui.GTextField><any>(this.getChild("surplueMoneyTxt"));
			this.surplueTimeTxt = <fairygui.GTextField><any>(this.getChild("surplueTimeTxt"));
			this.alreadyBecomeList = <fairygui.GList><any>(this.getChild("alreadyBecomeList"));
			this.doimgList = <fairygui.GList><any>(this.getChild("doimgList"));
			this.backBtn = <fairygui.GButton><any>(this.getChild("backBtn"));
			this.helpBtn = <fairygui.GButton><any>(this.getChild("helpBtn"));
			this.bossListBtn = <fairygui.GButton><any>(this.getChild("bossListBtn"));
			this.bossMoneyChangeBtn = <fairygui.GButton><any>(this.getChild("bossMoneyChangeBtn"));
			this.leftBtn = <fairygui.GButton><any>(this.getChild("leftBtn"));
			this.rightBtn = <fairygui.GButton><any>(this.getChild("rightBtn"));
			this.bossMoneyChangeList = <fairygui.GList><any>(this.getChild("bossMoneyChangeList"));
			this.dateTxt = <fairygui.GTextField><any>(this.getChild("dateTxt"));
			this.moneyChangeTxt = <fairygui.GTextField><any>(this.getChild("moneyChangeTxt"));
		}
	}
}