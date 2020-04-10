/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game
{

	export class RegionCom extends UIComponent
	{

		public state: fairygui.Controller;
		public resultList: fairygui.GList;
		public betValueTxt: fairygui.GTextField;
		public winTran: fairygui.Transition;
		public loseTran: fairygui.Transition;

		public static URL: string = "ui://v1h0uw6csrv91n";

		public static createInstance(): RegionCom
		{
			return <RegionCom><any>(fairygui.UIPackage.createObject("game", "RegionCom"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.state = this.getController("state");
			this.resultList = <fairygui.GList><any>(this.getChild("resultList"));
			this.betValueTxt = <fairygui.GTextField><any>(this.getChild("betValueTxt"));
			this.winTran = this.getTransition("winTran");
			this.loseTran = this.getTransition("loseTran");
		}

		protected initView(): void
		{
			super.initView();
			this.resultList.itemRenderer = this.resultListItemRenderer;
		}

		private _results: EnumerationType.WinOrLose[];
		private _betValue: string;
		/**
		 * @param results 胜负记录数组
		 * @param betValueTxt 投注大小
		 */
		public setData(results: EnumerationType.WinOrLose[], betValue: string): void
		{
			this._results = results;
			this._betValue = betValue;
			this.updateView();
		}

		private updateView(): void
		{
			this.betValueTxt.text = this._betValue;
			this.resultList.numItems = this._results.length;
		}

		private resultListItemRenderer(index: number, obj: WLPointItem): void
		{
			obj.setData(this._results[index]);
		}
	}
}