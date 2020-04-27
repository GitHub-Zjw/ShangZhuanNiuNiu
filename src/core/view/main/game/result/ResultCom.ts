/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game
{

	export class ResultCom extends UIComponent
	{

		public hxList: fairygui.GList;
		public luckTxt0: fairygui.GTextField;
		public luckTxt1: fairygui.GTextField;
		public luckTxt2: fairygui.GTextField;
		public luckTxt3: fairygui.GTextField;
		public luckTxt4: fairygui.GTextField;
		public moveTxt: fairygui.GTextField;
		public txtGroup: fairygui.GGroup;
		public starCard: CardCom;
		public centerCard: CardCom;
		public endCard: CardCom;
		public bossEndCard: CardCom;
		public card0: CardCom;
		public card1: CardCom;
		public card2: CardCom;
		public card3: CardCom;
		public card4: CardCom;
		public card5: CardCom;
		public card6: CardCom;
		public card7: CardCom;
		public card8: CardCom;
		public card9: CardCom;
		public card10: CardCom;
		public card11: CardCom;
		public card12: CardCom;
		public card13: CardCom;
		public card14: CardCom;
		public card15: CardCom;
		public card16: CardCom;
		public card17: CardCom;
		public card18: CardCom;
		public card19: CardCom;
		public card20: CardCom;
		public card21: CardCom;
		public card22: CardCom;
		public card23: CardCom;
		public card24: CardCom;
		public cardResultCom0: CardResultCom;
		public cardResultCom1: CardResultCom;
		public cardResultCom2: CardResultCom;
		public cardResultCom3: CardResultCom;
		public cardResultCom4: CardResultCom;
		public yellowBoxImg0: fairygui.GImage;
		public yellowBoxImg1: fairygui.GImage;
		public yellowBoxImg2: fairygui.GImage;
		public yellowBoxImg3: fairygui.GImage;
		public yellowBoxImg4: fairygui.GImage;
		public lightCom0: YellowBoxCom;
		public lightCom1: YellowBoxCom;
		public lightCom2: YellowBoxCom;
		public lightCom3: YellowBoxCom;
		public lightCom4: YellowBoxCom;

		public static URL: string = "ui://v1h0uw6clmsy26";

		public static createInstance(): ResultCom
		{
			return <ResultCom><any>(fairygui.UIPackage.createObject("game", "ResultCom"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.hxList = <fairygui.GList><any>(this.getChild("hxList"));
			this.luckTxt0 = <fairygui.GTextField><any>(this.getChild("luckTxt0"));
			this.luckTxt1 = <fairygui.GTextField><any>(this.getChild("luckTxt1"));
			this.luckTxt2 = <fairygui.GTextField><any>(this.getChild("luckTxt2"));
			this.luckTxt3 = <fairygui.GTextField><any>(this.getChild("luckTxt3"));
			this.luckTxt4 = <fairygui.GTextField><any>(this.getChild("luckTxt4"));
			this.moveTxt = <fairygui.GTextField><any>(this.getChild("moveTxt"));
			this.txtGroup = <fairygui.GGroup><any>(this.getChild("txtGroup"));
			this.starCard = <CardCom><any>(this.getChild("starCard"));
			this.centerCard = <CardCom><any>(this.getChild("centerCard"));
			this.endCard = <CardCom><any>(this.getChild("endCard"));
			this.bossEndCard = <CardCom><any>(this.getChild("bossEndCard"));
			this.card0 = <CardCom><any>(this.getChild("card0"));
			this.card1 = <CardCom><any>(this.getChild("card1"));
			this.card2 = <CardCom><any>(this.getChild("card2"));
			this.card3 = <CardCom><any>(this.getChild("card3"));
			this.card4 = <CardCom><any>(this.getChild("card4"));
			this.card5 = <CardCom><any>(this.getChild("card5"));
			this.card6 = <CardCom><any>(this.getChild("card6"));
			this.card7 = <CardCom><any>(this.getChild("card7"));
			this.card8 = <CardCom><any>(this.getChild("card8"));
			this.card9 = <CardCom><any>(this.getChild("card9"));
			this.card10 = <CardCom><any>(this.getChild("card10"));
			this.card11 = <CardCom><any>(this.getChild("card11"));
			this.card12 = <CardCom><any>(this.getChild("card12"));
			this.card13 = <CardCom><any>(this.getChild("card13"));
			this.card14 = <CardCom><any>(this.getChild("card14"));
			this.card15 = <CardCom><any>(this.getChild("card15"));
			this.card16 = <CardCom><any>(this.getChild("card16"));
			this.card17 = <CardCom><any>(this.getChild("card17"));
			this.card18 = <CardCom><any>(this.getChild("card18"));
			this.card19 = <CardCom><any>(this.getChild("card19"));
			this.card20 = <CardCom><any>(this.getChild("card20"));
			this.card21 = <CardCom><any>(this.getChild("card21"));
			this.card22 = <CardCom><any>(this.getChild("card22"));
			this.card23 = <CardCom><any>(this.getChild("card23"));
			this.card24 = <CardCom><any>(this.getChild("card24"));
			this.cardResultCom0 = <CardResultCom><any>(this.getChild("cardResultCom0"));
			this.cardResultCom1 = <CardResultCom><any>(this.getChild("cardResultCom1"));
			this.cardResultCom2 = <CardResultCom><any>(this.getChild("cardResultCom2"));
			this.cardResultCom3 = <CardResultCom><any>(this.getChild("cardResultCom3"));
			this.cardResultCom4 = <CardResultCom><any>(this.getChild("cardResultCom4"));
			this.yellowBoxImg0 = <fairygui.GImage><any>(this.getChild("yellowBoxImg0"));
			this.yellowBoxImg1 = <fairygui.GImage><any>(this.getChild("yellowBoxImg1"));
			this.yellowBoxImg2 = <fairygui.GImage><any>(this.getChild("yellowBoxImg2"));
			this.yellowBoxImg3 = <fairygui.GImage><any>(this.getChild("yellowBoxImg3"));
			this.yellowBoxImg4 = <fairygui.GImage><any>(this.getChild("yellowBoxImg4"));
			this.lightCom0 = <YellowBoxCom><any>(this.getChild("lightCom0"));
			this.lightCom1 = <YellowBoxCom><any>(this.getChild("lightCom1"));
			this.lightCom2 = <YellowBoxCom><any>(this.getChild("lightCom2"));
			this.lightCom3 = <YellowBoxCom><any>(this.getChild("lightCom3"));
			this.lightCom4 = <YellowBoxCom><any>(this.getChild("lightCom4"));
		}

		private _regionComs: RegionCom[];
		private _call: Function;
		private _callThis: any;
		private _cards: CardCom[][];
		private _luckTxts: fgui.GTextField[];
		private _lightTrans: fairygui.Transition[];
		private _yellowBoxImgs: fairygui.GImage[];
		private _cardResultCom: CardResultCom[];

		private _resultData: ResultData;
		private _timer: egret.Timer
		private _listItemNumber: number;
		private _hxListTempDatas: HXItemData[];
		private _centerXs: number[][];
		private _centerX1 = 27;
		private _centerX2 = 233;
		private _endXs: number[][];
		private _endX1 = 37;
		private _endX2 = 224;


		protected initView(): void
		{
			super.initView();
			this._lightTrans = [
				this.lightCom0.getTransition("lightTran"),
				this.lightCom1.getTransition("lightTran"),
				this.lightCom2.getTransition("lightTran"),
				this.lightCom3.getTransition("lightTran"),
				this.lightCom4.getTransition("lightTran")
			];
			this._yellowBoxImgs = [this.yellowBoxImg0, this.yellowBoxImg1, this.yellowBoxImg2, this.yellowBoxImg3, this.yellowBoxImg4];
			this._cardResultCom = [this.cardResultCom0, this.cardResultCom1, this.cardResultCom2, this.cardResultCom3, this.cardResultCom4]

			this._cards = [];
			this._centerXs = [];
			this._endXs = [];
			for (let i = 0; i < 25; i++)
			{

				let p1 = i % 5;
				let p2 = Math.floor(i / 5);

				if (this._cards[p2] == null)
				{
					this._cards[p2] = [];
					this._centerXs[p2] = [];
					this._endXs[p2] = [];
				}

				this._cards[p2][p1] = this["card" + i];

				let centerX1 = 27 * p1;
				let centerX2 = 233 * p2;
				let centerX = centerX1 + centerX2 + this.centerCard.x;
				this._centerXs[p2][p1] = centerX;

				let endX1 = 37 * p1;
				let endX2 = 224 * p2;
				let endX = endX1 + endX2 + this.endCard.x;
				this._endXs[p2][p1] = endX;
			}

			this.hxList.itemRenderer = this.HXItemRenderer;
			this.hxList.callbackThisObj = this;
			this._luckTxts = [this.luckTxt0, this.luckTxt1, this.luckTxt2, this.luckTxt3, this.luckTxt4];
			this._listItemNumber = 0;
		}

		protected removeEvent(): void
		{
			super.removeEvent();
			this.removeTimer();
		}

		/**
		 * 播放结果动画
		 * @param cardBackCall 用于播放区域胜败动画
		 */
		public playResultAmi(regions: RegionCom[], call: Function, callThis: any): void
		{
			this._resultData = AllData.instance.ResultData;
			this._regionComs = regions;
			this._call = call;
			this._callThis = callThis;
			this.redo();
			this.sendCard();
		}

		private redo(): void
		{
			this._listItemNumber = 0;
			this.visible = true;
			this.txtGroup.visible = true;
			this.hxList.numItems = 0;
			for (let i = 0; i < 5; i++)
			{
				this._cardResultCom[i].visible = false;
				this._luckTxts[i].text = AllData.instance.BossStrs[i];
				this._yellowBoxImgs[i].visible = false;
				for (let k = 0; k < 5; k++)
				{
					let card: CardCom = this._cards[i][k];
					card.height = this.starCard.height;
					card.width = this.starCard.width
					card.SourceName = "card0_0";
					card.x = this.starCard.x;
					card.y = this.starCard.y;
					card.visible = true;
				}
			}
		}
		//发牌
		private sendCard(): void
		{
			for (let i = 0; i < 24; i++)
			{
				let p1 = i % 5;
				let p2 = Math.floor(i / 5);

				let tw = egret.Tween.get(this._cards[p2][p1]);
				tw.wait(i * 100)
					.call(function ()
					{
						core.SoundUtils.getInstance().playSound(21);
					})
					.to({ x: this._centerXs[p2][p1], y: this.centerCard.y }, 200)
			}
			egret.Tween.get(this.card24).wait(24 * 100)
				.to({ x: this._centerXs[4][4], y: this.centerCard.y }, 200)
				.call(this.openCard, this);
		}
		//翻牌
		private openCard(): void
		{
			let self = this;
			for (let i = 0; i < 5; i++)
			{
				let cards = this._cards[i];
				for (let k = 0; k < 5; k++)
				{
					let tw = egret.Tween.get(cards[k]);
					let sourceName = "card" + this.getRESNumberByCardType(this._resultData.cardTypes[i][k]) + "_" + this._resultData.cardValue[i][k];
					tw.to({ x: cards[2].x }, 100)
						.call(function ()
						{
							cards[k].SourceName = sourceName;
						})
						.to({ x: this._centerXs[i][k] }, 100)
						.call(function ()
						{
							if (i == 4 && k == 4)
							{
								self.playHXListAmi();
							}
						}, self);
				}
			}
		}

		//哈希列表动画
		private playHXListAmi(): void
		{
			this.startTimer(500);
		}

		//飘字动画
		private playeMoveTxtAmi(): void
		{
			let self = this;
			let bossIndex = this._resultData.bossPosition;
			let starX = this.moveTxt.x;
			let starY = this.moveTxt.y;
			let endX = this._luckTxts[bossIndex].x + this.luckTxt0.width / 2;
			let endY = this.luckTxt0.y;
			this.moveTxt.visible = true;
			this.moveTxt.text = this._resultData.moveStr;
			let tw = egret.Tween.get(this.moveTxt);
			tw.to({ x: endX, y: endY }, 700)
				.call(function ()
				{
					self.moveTxt.x = starX;
					self.moveTxt.y = starY;
					self.moveTxt.visible = false;
					self.playerBossLight();
					core.SoundUtils.getInstance().playSound(23);
				}, this);
		}

		//播放发光动画
		private playerBossLight(): void
		{
			let bossIndex = this._resultData.bossPosition;
			this._yellowBoxImgs[bossIndex].visible = true;
			this._luckTxts[bossIndex].text = this._resultData.bossStr;
			this._lightTrans[bossIndex].play(this.backCard, this);
		}

		//卡牌归位
		private backCard(): void
		{
			let self = this;
			this.txtGroup.visible = false;
			for (let i = 0; i < 5; i++)
			{
				let cards = this._cards[i];
				for (let k = 0; k < 5; k++)
				{
					let endPositionX = 0;
					let endPositionY = this.endCard.y;
					let endHeight = this.endCard.height;
					let endWidht = this.endCard.width;
					if (i < this._resultData.bossPosition)
					{
						endPositionX = this._endXs[i][k];
					}
					else if (i == this._resultData.bossPosition)
					{ //庄家位置
						endPositionX = this.bossEndCard.x + k * 53;
						endPositionY = this.bossEndCard.y;
						endHeight = this.bossEndCard.height;
						endWidht = this.bossEndCard.width;
					}
					else 
					{
						endPositionX = this._endXs[i - 1][k];
					}
					let tw = egret.Tween.get(cards[k]);
					tw.to({ x: endPositionX, y: endPositionY, height: endHeight, width: endWidht }, 500)
						.call(function ()
						{
							if (i == 4 && k == 4)
							{
								self.playShowBossCardTypeAmi();
							}
						}, this);
				}
			}
		}



		//显示庄家牌型
		private playShowBossCardTypeAmi(): void
		{
			this.showCardTypeAmi(this._resultData.bossPosition, this.cardResultCom0, this.playShowRegionCard1, this);
		}

		//显示区域1牌型
		private playShowRegionCard1(): void
		{
			let index = 0;
			if (index >= this._resultData.bossPosition)
			{
				index++;
			}
			let self = this;
			this.showCardTypeAmi(index, this.cardResultCom1, function ()
			{
				self._regionComs[0].playAmiByIsWin(self._resultData.isWins[index], self.playShowRegionCard2, self);
			}, this);
		}
		//显示区域2牌型
		private playShowRegionCard2(): void
		{
			let index = 1;
			if (index >= this._resultData.bossPosition)
			{
				index++;
			}
			let self = this;
			this.showCardTypeAmi(index, this.cardResultCom2, function ()
			{
				self._regionComs[1].playAmiByIsWin(self._resultData.isWins[index], self.playShowRegionCard3, self);
			}, this);
		}
		//显示区域3牌型
		private playShowRegionCard3(): void
		{
			let index = 2;
			if (index >= this._resultData.bossPosition)
			{
				index++;
			}
			let self = this;
			this.showCardTypeAmi(index, this.cardResultCom3, function ()
			{
				self._regionComs[2].playAmiByIsWin(self._resultData.isWins[index], self.playShowRegionCard4, self);
			}, this);
		}
		//显示区域4牌型
		private playShowRegionCard4(): void
		{
			let index = 3;
			if (index >= this._resultData.bossPosition)
			{
				index++;
			}
			let self = this;
			this.showCardTypeAmi(index, this.cardResultCom4, function ()
			{
				self._regionComs[3].playAmiByIsWin(self._resultData.isWins[index], self._call, self._callThis);
			}, this);
		}


		/**
		 * @param index 索引
		 * @param cardResultCom 卡牌结果显示组件
		 * @param call 
		 * @param callThis
		 */
		private showCardTypeAmi(index: number, cardResultCom: CardResultCom, call: Function, callThis: any): void
		{
			let self = this;
			let cards = this._cards[index];
			let resultType = this._resultData.cardResultTypes[index];
			let luckIndexs = this._resultData.luckCardIndexs[index];
			let moveTime = 400;
			let upTime = 200;
			let len = luckIndexs.length;
			for (let i = 0; i < 5; i++)
			{
				let tw: egret.Tween;
				tw = egret.Tween.get(cards[i]);
				let oX = cards[i].x;
				let oY = cards[i].y
				tw.to({ x: cards[2].x, y: cards[2].y }, moveTime)
					.call(function ()
					{
						if (len == 2)
						{
							let tempRes1 = cards[luckIndexs[0]].SourceName;
							cards[luckIndexs[0]].SourceName = cards[3].SourceName;
							cards[3].SourceName = tempRes1;

							let tempRes2 = cards[luckIndexs[1]].SourceName;
							cards[luckIndexs[1]].SourceName = cards[4].SourceName;
							cards[4].SourceName = tempRes2;
						}
					}, this)
					.to({ x: oX, y: oY }, moveTime)
			}
			if (len == 0)
			{
				let temp = setTimeout(function ()
				{
					clearTimeout(temp);
					cardResultCom.setState(resultType);
					cardResultCom.visible = true;
					call.apply(callThis);
				}, moveTime * 2.5);
			}
			else if (len == 5)
			{
				for (let i = 0; i < 5; i++)
				{
					let temp = setTimeout(function ()
					{
						clearTimeout(temp);
						egret.Tween.removeTweens(cards[i]);
						let tw: egret.Tween;
						tw = egret.Tween.get(cards[i]);
						tw.to({ y: cards[i].y - cards[i].width / 3 }, upTime)
							.call(function ()
							{
								if (i == 4)
								{
									cardResultCom.setState(resultType);
									cardResultCom.visible = true;
									call.apply(callThis);
								}
							}, self)
					}, moveTime * 2.5);
				}
			}
			else if (len == 2)
			{
				let temp = setTimeout(function ()
				{
					clearTimeout(temp);
					egret.Tween.removeTweens(cards[3]);
					egret.Tween.removeTweens(cards[4]);
					let tw1 = egret.Tween.get(cards[3]);
					let tw2 = egret.Tween.get(cards[4]);
					tw1.to({ y: cards[3].y - cards[3].width / 3 }, upTime)
					tw2.to({ y: cards[4].y - cards[4].width / 3 }, upTime)
						.call(function ()
						{
							cardResultCom.setState(resultType);
							cardResultCom.visible = true;
							call.apply(callThis);
						}, self);
				}, moveTime * 2.5);
			}
		}


		private HXItemRenderer(index: number, obj: HX_Item): void
		{
			obj.setData(this._hxListTempDatas[index]);
		}

		private getRESNumberByCardType(value: EnumerationType.CardsType): number
		{
			switch (value)
			{
				case EnumerationType.CardsType.DIAMOND:
					return 1;
				case EnumerationType.CardsType.CLUB:
					return 3;
				case EnumerationType.CardsType.HEART:
					return 2;
				case EnumerationType.CardsType.SPADE:
					return 4;
			}
		}


		private startTimer(time: number): void
		{
			if (this._timer == null)
			{
				this._timer = new egret.Timer(time);
				this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
			}
			this._timer.start();
			this.onTimer(null);
		}

		private removeTimer(): void
		{
			if (this._timer)
			{
				this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
				this._timer.stop();
				this._timer = null;
			}
		}

		private onTimer(e: egret.TimerEvent): void
		{
			this._listItemNumber++;
			let len = this._resultData.hxItemDatas.length;
			if (this._listItemNumber <= len)
			{
				this._hxListTempDatas = [];
				for (let i = 0; i < this._listItemNumber; i++)
				{
					this._hxListTempDatas.push(this._resultData.hxItemDatas[this._listItemNumber - 1 - i]);
				}
				this.hxList.numItems = this._listItemNumber;
			}
			else
			{
				this._listItemNumber = 0;
				this.removeTimer();
				this.playeMoveTxtAmi();
			}
		}

	}
}