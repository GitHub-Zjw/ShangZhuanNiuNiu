/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module password {

	export class Binder{
		public static bindAll():void {
			fgui.UIPackage.addPackage("password")
			fairygui.UIObjectFactory.setPackageItemExtension(PasswordUI.URL, PasswordUI);
			fairygui.UIObjectFactory.setPackageItemExtension(listData.URL, listData);
		}
	}
}