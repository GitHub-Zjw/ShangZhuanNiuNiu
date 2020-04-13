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


		private _results: EnumerationType.WinOrLose[];
		private _betValue: number;

		protected initView(): void
		{
			super.initView();
			this.resultList.itemRenderer = this.resultListItemRenderer;
			this.resultList.callbackThisObj = this;
			this._betValue = 0;
		}

		/**
		 * 设置胜负记录
		 * @param results 胜负记录数组
		 */
		public setResults(results: EnumerationType.WinOrLose[]): void
		{
			this._results = results;
			this.resultList.numItems = this._results.length;
		}

		/**设置投注数值 */
		public setBetValue(betValue: string): void
		{
			this.betValueTxt.text = betValue;
		}

		/**添加下注 */
		public addBetValue(value: number): void
		{
			this._betValue += value;
			this.setBetValue(this._betValue.toString());
		}

		/**
		 * 重置
		 */
		public resetting(): void
		{
			this._betValue = 0;
			this.setBetValue(this._betValue.toString());
		}

		private resultListItemRenderer(index: number, obj: WLPointItem): void
		{
			obj.setData(this._results[index]);
		}
	}
}