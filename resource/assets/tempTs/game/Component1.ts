/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class Component1 extends UIComponent {

		public bar:fairygui.GImage;

		public static URL:string = "ui://v1h0uw6clmsy21";

		public static createInstance():Component1 {
			return <Component1><any>(fairygui.UIPackage.createObject("game","Component1"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.bar = <fairygui.GImage><any>(this.getChild("bar"));
		}
	}
}