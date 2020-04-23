/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game
{

	export class RegionCom extends UIComponent
	{

		public state: fairygui.Controller;
		public resultList: fairygui.GList;
		public betValueTxt: fairygui.GTextField;
		public winImg: fairygui.GImage;
		public lostImg: fairygui.GImage;
		public hkImg: fairygui.GImage;
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
			this.winImg = <fairygui.GImage><any>(this.getChild("winImg"));
			this.lostImg = <fairygui.GImage><any>(this.getChild("lostImg"));
			this.hkImg = <fairygui.GImage><any>(this.getChild("hkImg"));
		}


		private _records: EnumerationType.WinOrLose[];
		private _betValue: number;

		protected initView(): void
		{
			super.initView();
			this.resultList.itemRenderer = this.resultListItemRenderer;
			this.resultList.callbackThisObj = this;
			this._betValue = 0;
			this._records = [];
		}

		/**
		 * 设置胜负记录
		 * @param results 胜负记录数组
		 */
		public setResults(results: EnumerationType.WinOrLose[]): void
		{
			if (this._records.length > 0)
			{
				return;
			}
			this._records = results;
			this.resultList.numItems = this._records.length;
		}

		/**
		 * 增加一名胜败
		 */
		public addResult(isWin: EnumerationType.WinOrLose)
		{
			let newresults: EnumerationType.WinOrLose[] = [];
			if (this._records.length >= 10)
			{
				for (let i = 1; i < 10; i++)
				{
					newresults.push(this._records[i]);
				}
				newresults[10] = isWin;
				this._records = newresults;
			}
			else
			{
				this._records.push(isWin);
			}
			this.resultList.numItems = this._records.length;
		}

		/**
		 * 根据胜负播放动画
		 */
		public playAmiByIsWin(isWin: EnumerationType.WinOrLose, call: Function, objThi: any): void
		{
			if (isWin == EnumerationType.WinOrLose.win)
			{
				this.winTran.play(call, objThi);
			}
			else
			{
				this.loseTran.play(call, objThi);
			}
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
		public redo(): void
		{
			this._betValue = 0;
			this.winImg.visible = this.lostImg.visible = this.hkImg.visible = false;
			this.setBetValue(this._betValue.toString());
		}

		private resultListItemRenderer(index: number, obj: WLPointItem): void
		{
			obj.setData(this._records[index]);
		}
	}
}