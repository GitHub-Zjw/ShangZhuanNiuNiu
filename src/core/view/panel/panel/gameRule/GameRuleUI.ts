/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module gameRule
{

	export class GameRuleUI extends UIComponent
	{

		public select: fairygui.Controller;
		public closeBtn: fairygui.GButton;

		public static URL: string = "ui://dd7x5ggvri2z0";

		public static createInstance(): GameRuleUI
		{
			return <GameRuleUI><any>(fairygui.UIPackage.createObject("gameRule", "GameRuleUI"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.select = this.getController("select");
			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
		}

		protected onButtonClick(name: string)
		{
			switch(name)
			{
				case "closeBtn":
					game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_RULE);
					break;
			}
		}
	}
}