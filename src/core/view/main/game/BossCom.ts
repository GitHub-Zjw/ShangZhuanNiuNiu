/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game
{

	export class BossCom extends UIComponent
	{

		public moneyValueTxt: fairygui.GTextField;
		public playerNumTxt: fairygui.GTextField;
		public countDownTxt: fairygui.GTextField;
		public resultList: fairygui.GList;

		public static URL: string = "ui://v1h0uw6csrv91l";

		public static createInstance(): BossCom
		{
			return <BossCom><any>(fairygui.UIPackage.createObject("game", "BossCom"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.moneyValueTxt = <fairygui.GTextField><any>(this.getChild("moneyValueTxt"));
			this.playerNumTxt = <fairygui.GTextField><any>(this.getChild("playerNumTxt"));
			this.countDownTxt = <fairygui.GTextField><any>(this.getChild("countDownTxt"));
			this.resultList = <fairygui.GList><any>(this.getChild("resultList"));
		}

		protected initView(): void
		{
			super.initView();
			this.resultList.itemRenderer = this.resultListItemRenderer;
		}

		private _money: string;
		private _people: string;
		private _sound: number
		private _records: EnumerationType.WinOrLose[];

		/**
		 * @param money 庄家钱
		 * @param people 人数
		 * @param sound 剩余秒数
		 * @param records 庄家胜败记录数组
		 */
		public setData(money: string, people: string, sound: number, records: EnumerationType.WinOrLose[]): void
		{
			this._money = money;
			this._people = people;
			this._sound = sound;
			this._records = records;
			this.updateView();
		}

		private updateView(): void
		{
			this.moneyValueTxt.text = this._money;
			this.playerNumTxt.text = this._people;
			this.resultList.numItems = this._records.length;
			let time: Date = new Date(this._sound);
			this.countDownTxt.text = time.getMinutes() + ":" + time.getSeconds();
		}

		private resultListItemRenderer(index: number, obj: WLPointItem): void
		{
			obj.setData(this._records[index]);
		}
	}
}