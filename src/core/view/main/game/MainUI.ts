/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game
{

	export class MainUI extends UIComponent
	{

		public ballSelect: fairygui.Controller;
		public bg: fairygui.GImage;
		public ball1_btn: BallBtn;
		public ball2_btn: BallBtn;
		public ball3_btn: BallBtn;
		public ball4_btn: BallBtn;
		public ball5_btn: BallBtn;
		public ball6_btn: BallBtn;
		public methodBtn: fairygui.GButton;
		public settingBtn: fairygui.GButton;
		public closeBtn: fairygui.GButton;
		public cleanBtn: fairygui.GButton;
		public betBtn: fairygui.GButton;
		public pgValueTxt: fairygui.GTextField;
		public bossChangeTxt: fairygui.GTextField;
		public playerChangeTxt: fairygui.GTextField;
		public playerMoneyTxt: fairygui.GTextField;
		public dzValueTxt: fairygui.GTextField;
		public tzValueTxt: fairygui.GTextField;
		public betPlayerCom: BetPlayerCom;
		public clockCom: ClockCom;
		public bossCom: BossCom;
		public region0: RegionCom;
		public region1: RegionCom;
		public region2: RegionCom;
		public region3: RegionCom;
		public beginBtn: fairygui.GButton;
		public bossResultTran: fairygui.Transition;
		public playerResultTran: fairygui.Transition;
		public beginTran: fairygui.Transition;
		public maxBetBar: fairygui.GProgressBar;

		public static URL: string = "ui://v1h0uw6cfjnq0";

		public static createInstance(): MainUI
		{
			return <MainUI><any>(fairygui.UIPackage.createObject("game", "MainUI"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.ballSelect = this.getController("ballSelect");
			this.bg = <fairygui.GImage><any>(this.getChild("bg"));
			this.ball1_btn = <BallBtn><any>(this.getChild("ball1_btn"));
			this.ball2_btn = <BallBtn><any>(this.getChild("ball2_btn"));
			this.ball3_btn = <BallBtn><any>(this.getChild("ball3_btn"));
			this.ball4_btn = <BallBtn><any>(this.getChild("ball4_btn"));
			this.ball5_btn = <BallBtn><any>(this.getChild("ball5_btn"));
			this.ball6_btn = <BallBtn><any>(this.getChild("ball6_btn"));
			this.methodBtn = <fairygui.GButton><any>(this.getChild("methodBtn"));
			this.settingBtn = <fairygui.GButton><any>(this.getChild("settingBtn"));
			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
			this.cleanBtn = <fairygui.GButton><any>(this.getChild("cleanBtn"));
			this.betBtn = <fairygui.GButton><any>(this.getChild("betBtn"));
			this.pgValueTxt = <fairygui.GTextField><any>(this.getChild("pgValueTxt"));
			this.bossChangeTxt = <fairygui.GTextField><any>(this.getChild("bossChangeTxt"));
			this.playerChangeTxt = <fairygui.GTextField><any>(this.getChild("playerChangeTxt"));
			this.playerMoneyTxt = <fairygui.GTextField><any>(this.getChild("playerMoneyTxt"));
			this.dzValueTxt = <fairygui.GTextField><any>(this.getChild("dzValueTxt"));
			this.tzValueTxt = <fairygui.GTextField><any>(this.getChild("tzValueTxt"));
			this.betPlayerCom = <BetPlayerCom><any>(this.getChild("betPlayerCom"));
			this.clockCom = <ClockCom><any>(this.getChild("clockCom"));
			this.bossCom = <BossCom><any>(this.getChild("bossCom"));
			this.region0 = <RegionCom><any>(this.getChild("region0"));
			this.region1 = <RegionCom><any>(this.getChild("region1"));
			this.region2 = <RegionCom><any>(this.getChild("region2"));
			this.region3 = <RegionCom><any>(this.getChild("region3"));
			this.beginBtn = <fairygui.GButton><any>(this.getChild("beginBtn"));
			this.bossResultTran = this.getTransition("bossResultTran");
			this.playerResultTran = this.getTransition("playerResultTran");
			this.beginTran = this.getTransition("beginTran");
			this.maxBetBar = <fairygui.GProgressBar><any>(this.getChild("maxBetBar"));
		}

		private _otherEegionBalls: BetBallCom[][];
		private _myEegionBalls: BetBallCom[][];
		private _regionComs: RegionCom[];
		private _alreadyBetNum: number;									//所有玩家已下注总金额

		protected initView(): void
		{
			super.initView();
			this._otherEegionBalls = [];
			this._myEegionBalls = [];
			this._regionComs = [this.region0, this.region1, this.region2, this.region3];
		}

		protected onButtonClick(btnName: string): void
		{
			super.onButtonClick(btnName);
			switch (btnName)
			{
				/********************************* 以下是测试按钮 **********************************/
				case "homePageDataBtn":
					AllData.instance.setTestHomePageData();
					this.onGetHomePageData();
					break;
				case "betDetailDataBtn":
					AllData.instance.setTestOtherBetData();
					this.onGetOtherBetData();
					break;
			}
		}

		/**接收到首页信息 */
		public onGetHomePageData(): void
		{
			this.resetting();
			let homePageData = AllData.instance.HomePageData;
			this.dzValueTxt.text = homePageData.myAntes.toString();
			this.tzValueTxt.text = homePageData.myBetMoney.toString();
			this.playerMoneyTxt.text = homePageData.myMoney.toString();
			this.bossCom.setData(homePageData.bossMoney.toString(), homePageData.peopleInRoom.toString(), homePageData.bossTime, homePageData.bossRecord);
			this.updateAllBetBar(0, homePageData.maxBet);
			this.region0.setResults(homePageData.regionRecord[0]);
			this.region1.setResults(homePageData.regionRecord[1]);
			this.region2.setResults(homePageData.regionRecord[2]);
			this.region3.setResults(homePageData.regionRecord[3]);
			this.playBiginAmi();
		}

		/**
		 * 收到投注信息
		 */
		public onGetOtherBetData(): void
		{
			let otherBetData = AllData.instance.OtherBetData;
			this.betPlayerCom.refreshView(otherBetData.playerLevel, otherBetData.betMoney, otherBetData.playerName, otherBetData.betRegions);
			let ballIndexs: number[][] = [];
			for (let i = 0; i < 4; i++)
			{
				ballIndexs[i] = [];
				let betValue = otherBetData.allBet[i];
				if (betValue)
				{
					ballIndexs[i] = AllData.instance.getBetIndexByValue(betValue);
					this._regionComs[i].addBetValue(betValue);
				}
			}
			this.addBall(ballIndexs, false);
			this._alreadyBetNum += otherBetData.totalBetNum;
			this.updateAllBetBar(this._alreadyBetNum, AllData.instance.HomePageData.maxBet);
		}

		private resetting(): void
		{
			this.removeAllBall();
			this.region0.resetting();
			this.region1.resetting();
			this.region2.resetting();
			this.region3.resetting();
			this._alreadyBetNum = 0;
		}

		private updateAllBetBar(currentValue: number, maxValue: number): void
		{
			this.maxBetBar.max = maxValue;
			this.maxBetBar.value = currentValue;
			this.pgValueTxt.text = currentValue + "/" + maxValue + "HDAG";
		}
		/****************************************** 以下是动画流程 ******************************************/

		private playBiginAmi(): void
		{
			this.beginTran.play(this.starTimerAmi, this);
		}

		private starTimerAmi(): void
		{
			let starTime: number = 28 - AllData.instance.getCurrentSecond();
			this.clockCom.starTiming(starTime, null, this);
		}
		/****************************************** 以上是动画流程 ******************************************/


		/**
		 * 增加小球
		 * @param indexs 小球类型数组
		 * @param boolean 是否是玩家本人
		 */
		public addBall(indexs: number[][], isSelf: boolean = false): void
		{
			if (indexs && indexs.length > 0)
			{
				// core.SoundUtils.getInstance().playSound(6);
			}
			for (let k = 0; k < 4; k++)
			{
				if (this._otherEegionBalls == null)
				{
					this._otherEegionBalls = [];
				}
				if (this._myEegionBalls == null)
				{
					this._myEegionBalls = [];
				}
				let len = indexs[k].length;
				for (let i = 0; i < len; i++)
				{
					let ball: BetBallCom = ObjectPool.instance.getFguiCom(BetBallCom,BetBallCom.NAME);
					this.addChild(ball);
					if (isSelf)
					{
						ball.x = this.betBtn.x;
						ball.y = this.betBtn.y;
						if (this._myEegionBalls[k] == null)
						{
							this._myEegionBalls[k] = [];
						}
						this._myEegionBalls[k].push(ball);
					}
					else
					{
						ball.x = this.betPlayerCom.x;
						ball.y = this.betPlayerCom.y;
						if (this._otherEegionBalls[k] == null)
						{
							this._otherEegionBalls[k] = [];
						}
						this._otherEegionBalls[k].push(ball);
					}
					let pEnd = this.getBollEndPByIndex(k);
					ball.showJoinAmi(pEnd.x, pEnd.y, indexs[k][i]);
				}
			}
		}

		private getBollEndPByIndex(index: number): egret.Point
		{
			let returnValue: egret.Point = new egret.Point();
			let betBall: BetBallCom = ObjectPool.instance.getFguiCom(BetBallCom,BetBallCom.NAME);
			let region: RegionCom = this._regionComs[index];
			let xMax = region.x + region.width - betBall.width;
			let xMin = region.x ;
			let yMax = region.y + region.height - betBall.height * 2;
			let yMin = region.y + betBall.height;
			returnValue.x = AllData.instance.getRandomF(xMin, xMax);
			returnValue.y = AllData.instance.getRandomF(yMin, yMax);
			ObjectPool.instance.push(betBall, "hideBall");
			return returnValue;
		}

		/**
		 * 移除小球
		 */
		public removeAllBall(): void
		{
			for (let k = 0; k < 4; k++)
			{
				if (this._otherEegionBalls[k] == null)
				{
					continue;
				}
				let len = this._otherEegionBalls[k].length;
				for (let i = 0; i < len; i++)
				{
					ObjectPool.instance.push(this._otherEegionBalls[k][i], "hideBall");
					this.removeChild(this._otherEegionBalls[k][i]);
				}
				this._otherEegionBalls[k] = [];
				this.withdrawBall();
			}
		}

		/**
		 * 撤回小球
		 */
		public withdrawBall(): boolean
		{
			let isHaveBall: boolean = false;
			for (let k = 0; k < 4; k++)
			{
				if (this._myEegionBalls[k] == null)
				{
					continue;
				}
				let len = this._myEegionBalls[k].length;
				if (len > 0)
				{
					isHaveBall = true;
				}
				for (let i = 0; i < len; i++)
				{
					ObjectPool.instance.push(this._myEegionBalls[k][i], "hideBall");
					this.removeChild(this._myEegionBalls[k][i]);
				}
				this._myEegionBalls[k] = [];
			}
			return isHaveBall;
		}

		/**投注成功 */
		public onBetSucceed(): void
		{
			for (let i = 0; i < 4; i++)
			{
				if (this._otherEegionBalls[i] == null)
				{
					this._otherEegionBalls[i] = [];
				}
				if (this._myEegionBalls[i])
				{
					this._otherEegionBalls[i].push.apply(this._otherEegionBalls[i], this._myEegionBalls[i]);
					this._myEegionBalls[i] = [];
				}
			}
		}
	}
}