/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game
{

	export class BetPlayerCom extends UIComponent
	{

		public fkImg: fairygui.GImage;
		public hongtaoImg: fairygui.GImage;
		public heitaoImg: fairygui.GImage;
		public chImg: fairygui.GImage;
		public playerNameTxt: fairygui.GTextField;
		public ballValueTxt: fairygui.GTextField;
		public batValueTxt: fairygui.GTextField;
		public detailBtn: fairygui.GButton;
		public prizeBtn: fairygui.GButton;
		public betTran: fairygui.Transition;

		public static URL: string = "ui://v1h0uw6csrv91g";

		public static createInstance(): BetPlayerCom
		{
			return <BetPlayerCom><any>(fairygui.UIPackage.createObject("game", "BetPlayerCom"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.fkImg = <fairygui.GImage><any>(this.getChild("fkImg"));
			this.hongtaoImg = <fairygui.GImage><any>(this.getChild("hongtaoImg"));
			this.heitaoImg = <fairygui.GImage><any>(this.getChild("heitaoImg"));
			this.chImg = <fairygui.GImage><any>(this.getChild("chImg"));
			this.playerNameTxt = <fairygui.GTextField><any>(this.getChild("playerNameTxt"));
			this.ballValueTxt = <fairygui.GTextField><any>(this.getChild("ballValueTxt"));
			this.batValueTxt = <fairygui.GTextField><any>(this.getChild("batValueTxt"));
			this.detailBtn = <fairygui.GButton><any>(this.getChild("detailBtn"));
			this.prizeBtn = <fairygui.GButton><any>(this.getChild("prizeBtn"));
			this.betTran = this.getTransition("betTran");
		}

		private _cardImgs: fairygui.GImage[];
		protected initView(): void
		{
			super.initView();
			this._cardImgs = [this.fkImg, this.chImg, this.hongtaoImg, this.heitaoImg];
		}

		protected onButtonClick(name: string): void
		{
			switch (name)
			{
				case "prizeBtn":
					game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_BET_INFO);
					break;
			}
		}

		/**
		 * @param level 钻石显示等级
		 * @param betMoney 下注金额
		 * @param name 玩家名字
		 * @param region 下注花色数组
		 */
		public refreshView(level: string, betMoney: string, name: string, region: EnumerationType.CardsType[]): void
		{
			this.redo();
			this.playerNameTxt.text = name;
			this.ballValueTxt.text = level;
			this.batValueTxt.text = betMoney;
			let len = region.length;
			for (let i = 0; i < len; i++)
			{
				let index = region[i];
				this._cardImgs[index].visible = true;
			}
			this.betTran.play();
		}

		private redo(): void
		{
			for (let i = 0; i < 4; i++)
			{
				this._cardImgs[i].visible = false;
			}
		}

	}
}