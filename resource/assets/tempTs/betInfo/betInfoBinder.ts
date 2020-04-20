/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module betInfo {

	export class Binder{
		public static bindAll():void {
			fgui.UIPackage.addPackage("betInfo")
			fairygui.UIObjectFactory.setPackageItemExtension(BetInfoUI.URL, BetInfoUI);
			fairygui.UIObjectFactory.setPackageItemExtension(CurrentBetItem.URL, CurrentBetItem);
			fairygui.UIObjectFactory.setPackageItemExtension(LoadingItem.URL, LoadingItem);
			fairygui.UIObjectFactory.setPackageItemExtension(TodayWinnerItem.URL, TodayWinnerItem);
			fairygui.UIObjectFactory.setPackageItemExtension(CardResultCom.URL, CardResultCom);
		}
	}
}