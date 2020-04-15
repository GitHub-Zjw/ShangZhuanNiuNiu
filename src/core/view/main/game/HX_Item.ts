/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game
{

	export class HX_Item extends UIComponent
	{

		public isLuck: fairygui.Controller;
		public qkTxk: fairygui.GTextField;
		public hxTxt: fairygui.GTextField;
		public timeTxt: fairygui.GTextField;

		public static URL: string = "ui://v1h0uw6clmsy3u";

		public static createInstance(): HX_Item
		{
			return <HX_Item><any>(fairygui.UIPackage.createObject("game", "HX_Item"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.isLuck = this.getController("isLuck");
			this.qkTxk = <fairygui.GTextField><any>(this.getChild("qkTxk"));
			this.hxTxt = <fairygui.GTextField><any>(this.getChild("hxTxt"));
			this.timeTxt = <fairygui.GTextField><any>(this.getChild("timeTxt"));
		}

		public setData(data: HXItemData): void
		{
			this.isLuck.setSelectedPage(data.isLuck.toString());
			this.qkTxk.text = data.hxStr1;
			this.hxTxt.text = data.hxStr2;
			this.timeTxt.text = data.hxStr3;
		}
	}
}