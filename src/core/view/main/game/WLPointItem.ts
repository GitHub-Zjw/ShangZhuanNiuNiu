/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game
{

	export class WLPointItem extends UIComponent
	{

		public state: fairygui.Controller;

		public static URL: string = "ui://v1h0uw6csrv91m";

		public static createInstance(): WLPointItem
		{
			return <WLPointItem><any>(fairygui.UIPackage.createObject("game", "WLPointItem"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.state = this.getController("state");
		}
		
		public setData(state: EnumerationType.WinOrLose): void
		{
			this.state.setSelectedPage(state.toString());
		}
	}
}