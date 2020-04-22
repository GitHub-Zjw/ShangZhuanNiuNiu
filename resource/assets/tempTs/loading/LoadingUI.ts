/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module loading {

	export class LoadingUI extends UIComponent {

		public loadingBar:fairygui.GProgressBar;

		public static URL:string = "ui://p7m6l6xrh3zd1";

		public static createInstance():LoadingUI {
			return <LoadingUI><any>(fairygui.UIPackage.createObject("loading","LoadingUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.loadingBar = <fairygui.GProgressBar><any>(this.getChild("loadingBar"));
		}
	}
}