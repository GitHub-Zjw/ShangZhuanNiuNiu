/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class Binder{
		public static bindAll():void {
			fgui.UIPackage.addPackage("game")
			fairygui.UIObjectFactory.setPackageItemExtension(BetBallCom.URL, BetBallCom);
			fairygui.UIObjectFactory.setPackageItemExtension(MainUI.URL, MainUI);
			fairygui.UIObjectFactory.setPackageItemExtension(BallBtn.URL, BallBtn);
			fairygui.UIObjectFactory.setPackageItemExtension(ClockCom.URL, ClockCom);
			fairygui.UIObjectFactory.setPackageItemExtension(BetPlayerCom.URL, BetPlayerCom);
			fairygui.UIObjectFactory.setPackageItemExtension(BossCom.URL, BossCom);
			fairygui.UIObjectFactory.setPackageItemExtension(WLPointItem.URL, WLPointItem);
			fairygui.UIObjectFactory.setPackageItemExtension(RegionCom.URL, RegionCom);
		}
	}
}