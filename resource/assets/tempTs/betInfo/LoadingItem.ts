/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module betInfo {

	export class LoadingItem extends UIComponent {

		public isNeedLoad:fairygui.Controller;
		public rotationTran:fairygui.Transition;

		public static URL:string = "ui://04s6lcaqpnt1f";

		public static createInstance():LoadingItem {
			return <LoadingItem><any>(fairygui.UIPackage.createObject("betInfo","LoadingItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.isNeedLoad = this.getController("isNeedLoad");
			this.rotationTran = this.getTransition("rotationTran");
		}
	}
}