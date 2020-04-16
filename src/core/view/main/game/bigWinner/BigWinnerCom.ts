/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game
{

	export class BigWinnerCom extends UIComponent
	{

		public winnerList: fairygui.GList;

		public static URL: string = "ui://v1h0uw6cfek255";

		public static createInstance(): BigWinnerCom
		{
			return <BigWinnerCom><any>(fairygui.UIPackage.createObject("game", "BigWinnerCom"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.winnerList = <fairygui.GList><any>(this.getChild("winnerList"));
		}

		protected initView(): void
		{
			super.initView();
			this.winnerList.itemRenderer = this.itemRenderer;
			this.winnerList.callbackThisObj = this;
		}
		
		/**
		 * 刷新界面
		 */
		public refreshView(): void
		{
			this.winnerList.numItems = AllData.instance.ResultData.bigWinnerData.length;
		}

		private itemRenderer(index: number, obj: BigWinnerItem): void
		{
			obj.setData(index,AllData.instance.ResultData.bigWinnerData[index]);
		}
	}
}