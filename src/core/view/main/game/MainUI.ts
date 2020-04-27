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
		public ballGroupCom: fairygui.GComponent;
		public beginBtn: fairygui.GButton;
		public bossResultTran: fairygui.Transition;
		public playerResultTran: fairygui.Transition;
		public beginTran: fairygui.Transition;
		public maxBetBar: fairygui.GProgressBar;
		public stopBetTran: fairygui.Transition;
		public joinSucceedBtn: fairygui.GButton;
		public cardResultBtn: fairygui.GButton;
		public resultCom: ResultCom;
		public bigWinnerCom: BigWinnerCom;
		public bigWinnerTran: fairygui.Transition;
		public bossAllLoseTran: fairygui.Transition;
		public bossAllWinTran: fairygui.Transition;

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
			this.ballGroupCom = <fairygui.GComponent><any>this.getChild("ballGroupCom")
			this.beginBtn = <fairygui.GButton><any>(this.getChild("beginBtn"));
			this.bossResultTran = this.getTransition("bossResultTran");
			this.playerResultTran = this.getTransition("playerResultTran");
			this.beginTran = this.getTransition("beginTran");
			this.maxBetBar = <fairygui.GProgressBar><any>(this.getChild("maxBetBar"));
			this.stopBetTran = this.getTransition("stopBetTran");
			this.resultCom = <ResultCom><any>(this.getChild("resultCom"));
			this.joinSucceedBtn = <fairygui.GButton><any>(this.getChild("joinSucceedBtn"));
			this.cardResultBtn = <fairygui.GButton><any>(this.getChild("cardResult"));
			this.bigWinnerCom = <BigWinnerCom><any>(this.getChild("bigWinnerCom"));
			this.bigWinnerTran = this.getTransition("bigWinnerTran");
			this.bossAllLoseTran = this.getTransition("bossAllLoseTran");
			this.bossAllWinTran = this.getTransition("bossAllWinTran");
		}

		private _otherRegionBalls: BetBallCom[][];
		private _myRegionBalls: BetBallCom[][];
		private _regionComs: RegionCom[];
		private _allBallBtns: BallBtn[];
		private _selectBallIndex: number;								//选中的筹码索引，0表示未选中
		private _myTz: number = 0;										//本局本人已投住金额
		private _isBossTimeOver: boolean;								//本轮时间是否结束

		protected initView(): void
		{
			super.initView();
			this._otherRegionBalls = [];
			this._myRegionBalls = [];
			this._regionComs = [this.region0, this.region1, this.region2, this.region3];
			this._allBallBtns = [null, this.ball1_btn, this.ball2_btn, this.ball3_btn, this.ball4_btn, this.ball5_btn, this.ball6_btn];
			this._selectBallIndex = 0;
			RegionDataRequest.sendRequest();
			HomePageRequest.sendHomePageData();

			core.SoundUtils.getInstance().setMusicEnable(true);
			core.SoundUtils.getInstance().setEffectEnable(true);
			core.SoundUtils.getInstance().playSound(12, 0);
		}

		protected addEvent(): void
		{
			super.addEvent();
			this.region0.addClickListener(this.onRegionClick, this);
			this.region1.addClickListener(this.onRegionClick, this);
			this.region2.addClickListener(this.onRegionClick, this);
			this.region3.addClickListener(this.onRegionClick, this);
			AllData.instance.addEventListener(MainNotify.STOP_BETS, this.onStopBet, this);
			AllData.instance.addEventListener(MainNotify.BOSS_TIME_OVER, this.onBossTimeOver, this);
		}

		protected removeEvent(): void
		{
			super.removeEvent();
			let len = this._regionComs.length;
			for (let i = 0; i < len; i++)
			{
				this._regionComs[i].removeClickListener(this.onRegionClick, this);
			}
			AllData.instance.removeEventListener(MainNotify.STOP_BETS, this.onStopBet, this);
			AllData.instance.removeEventListener(MainNotify.BOSS_TIME_OVER, this.onBossTimeOver, this);
		}

		protected onButtonClick(btnName: string): void
		{
			super.onButtonClick(btnName);
			let self = this;
			switch (btnName)
			{
				case "ball1_btn":
					this._selectBallIndex = 1;
					break;
				case "ball2_btn":
					this._selectBallIndex = 2;
					break;
				case "ball3_btn":
					this._selectBallIndex = 3;
					break;
				case "ball4_btn":
					this._selectBallIndex = 4;
					break;
				case "ball5_btn":
					this._selectBallIndex = 5;
					break;
				case "ball6_btn":
					this._selectBallIndex = 6;
					break;
				case "cleanBtn":
					if (AllData.instance.getMyAllBet() == 0)
					{
						TipsUtils.showTipsFromCenter("没有可撤回下注");
						return;
					}
					this.withdrawBall();
					this.updateOnMyBet();
					break;
				case "methodBtn":
					game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_RULE);
					break;
				case "settingBtn":
					game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_SETTING);
					break;
				case "betBtn":
					if (!AllData.instance.IsNoShowPwd)
					{
						game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_INPUT_PASSWORD);
					}
					else
					{
						HomePageRequest.myBetRequest(this._myRegionBalls);
						this.betBtn.touchable = false;
						let temp = setTimeout(function ()
						{
							self.betBtn.touchable = true;
						}, 2000);
					}
					break;
				case "closeBtn":
					this.onCloseAllBtnClick();
					break;
				/********************************* 以下是测试按钮 **********************************/
				case "homePageDataBtn":
					HomePageRequest.sendHomePageData();
					// this.createGameScene();
					break;
				case "betDetailDataBtn":
					AllData.instance.setTestOtherBetData();
					this.onGetOtherBetData();
					// let testLoad = <fairygui.GLoader><any>(this.getChild("testLoad"));
					// testLoad.url="ui://game/card0_0";
					break;
				case "joinSucceedBtn":
					// AllData.instance.setPlayerBetSucceed();
					// this.onGetBetSucceedData();
					this.createGameScene();
					break;
				case "cardResultBtn":
					AllData.instance.setTestResultData();
					this.onGetResultData();
					// game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_BOSS_RESULT);
					break;
			}
		}

		private onRegionClick(e: Event): void
		{
			if (!this._selectBallIndex)
			{
				return;
			}
			let sourceIndex = this._selectBallIndex - 1;
			let selectMoney = AllData.instance.BallValues[sourceIndex] * 3;
			if (!AllData.instance.getBetMoneyIsEnough(selectMoney))
			{
				TipsUtils.showTipsFromCenter("您的金额不足");
				return;
			}
			if (AllData.instance.getIsCapByBetMoney(selectMoney))
			{
				TipsUtils.showTipsFromCenter("不能超过最大投注金额");
				return;
			}
			let region: RegionCom = <RegionCom><any>e.currentTarget;
			let addBallNum: number[][] = [[], [], [], []];
			switch (region.name)
			{
				case "region0":
					AllData.instance.addMyBet(selectMoney, 0);
					addBallNum[0] = [sourceIndex, sourceIndex, sourceIndex];
					break;
				case "region1":
					AllData.instance.addMyBet(selectMoney, 1);
					addBallNum[1] = [sourceIndex, sourceIndex, sourceIndex];
					break;
				case "region2":
					AllData.instance.addMyBet(selectMoney, 2);
					addBallNum[2] = [sourceIndex, sourceIndex, sourceIndex];
					break;
				case "region3":
					AllData.instance.addMyBet(selectMoney, 3);
					addBallNum[3] = [sourceIndex, sourceIndex, sourceIndex];
					break;
			}
			core.SoundUtils.getInstance().playSound(18);
			this.updateOnMyBet();
			this.addBall(addBallNum, true);
		}

		/**接收到首页信息 */
		public onGetHomePageData(): void
		{
			this.redo();
			let homePageData = AllData.instance.HomePageData;
			this.dzValueTxt.text = homePageData.myAntes.toString();
			this.tzValueTxt.text = homePageData.myBetMoney.toString();
			this.playerMoneyTxt.text = homePageData.myMoney.toString();
			this.bossCom.setData(homePageData.bossMoney.toString(), homePageData.peopleInRoom.toString(), homePageData.bossTime, homePageData.bossRecord);
			this.updateAllBetBar();
			if (AllData.instance.getCurrentSecond() < AllData.instance.OneGaemSurplueTime)
			{
				this.playBiginAmi();
			}
			else
			{
				GameResultRequest.sendRequest();
			}
			this._myTz = homePageData.bem;
			this.tzValueTxt.text = this._myTz.toString();
			this.dzValueTxt.text = (this._myTz / 3).toString();
		}

		/**
		 * 收到投注信息
		 */
		public onGetOtherBetData(): void
		{
			let otherBetData = AllData.instance.OtherBetData;
			if (otherBetData.playerName)
			{
				this.betPlayerCom.refreshView(otherBetData.playerLevel, otherBetData.betMoney, otherBetData.playerName, otherBetData.betRegions, otherBetData.id);
			}
			let ballIndexs: number[][] = [];
			let isHaveChange: boolean = false;
			for (let i = 0; i < 4; i++)
			{
				ballIndexs[i] = [];
				ballIndexs[i] = AllData.instance.getBetIndexByValue(otherBetData.allBet[i]);
				if (ballIndexs[i].length > 0)
				{
					isHaveChange = true;
				}
			}
			if (isHaveChange)
			{
				core.SoundUtils.getInstance().playSound(13);
			}
			this.addBall(ballIndexs, false);

			this.updateRegionValue();
			this.region0.setResults(otherBetData.winOrLoses[0]);
			this.region1.setResults(otherBetData.winOrLoses[1]);
			this.region2.setResults(otherBetData.winOrLoses[2]);
			this.region3.setResults(otherBetData.winOrLoses[3]);

			this.updateAllBetBar();
		}

		/**
		 * 收到投注成功信息
		 */
		public onGetBetSucceedData(): void
		{
			TipsUtils.showTipsFromCenter("投注成功")
			this._myTz += AllData.instance.getMyAllBet();


			let homePageData = AllData.instance.HomePageData;
			this.tzValueTxt.text = "" + this._myTz;
			this.dzValueTxt.text = (this._myTz / 3).toString();
			this.playerMoneyTxt.text = (homePageData.myMoney - this._myTz).toString();
			this.updateAllBetBar();
			this.onBetSucceed();
			AllData.instance.cleanMyBet();
			this.updateRegionValue();
		}

		/**
		 * 获取结果数据消息
		 */
		public onGetResultData(): void
		{
			this.playResultAmi();
		}

		/**密码正确 */
		public onGetPassWordTrue(): void
		{
			HomePageRequest.myBetRequest(this._myRegionBalls);
		}

		private changeBetBtn(enabled: boolean): void
		{
			let len = this._allBallBtns.length;
			for (let i = 1; i < len; i++)
			{
				this._allBallBtns[i].enabled = enabled;
			}
			this.cleanBtn.enabled = enabled;
			this.betBtn.enabled = enabled;

			this.pgValueTxt.visible = enabled;
			this.maxBetBar.visible = enabled;
		}

		private redo(): void
		{
			this._myTz = 0;
			this.redoRegion();
			this.changeBetBtn(true);
			this.resultCom.visible = false;
			this.betPlayerCom.redo();
		}

		private redoRegion(): void
		{
			this.removeAllBall();
			this.region0.redo();
			this.region1.redo();
			this.region2.redo();
			this.region3.redo();
		}

		private updateAllBetBar(): void
		{
			let max = AllData.instance.HomePageData.maxBet;
			let value = AllData.instance.getAllRegionMoney();
			this.maxBetBar.max = max;
			this.maxBetBar.value = value;
			this.pgValueTxt.text = value + "/" + max + "HDAG";
		}

		private updateOnMyBet(): void
		{
			let tzValue = AllData.instance.getMyAllBet() + this._myTz;
			this.tzValueTxt.text = tzValue.toString();
			this.dzValueTxt.text = (tzValue / 3).toString();
			this.playerMoneyTxt.text = (AllData.instance.HomePageData.myMoney - AllData.instance.getMyAllBet() - this._myTz).toString();

			this.updateRegionValue();
		}

		private updateRegionValue(): void
		{
			let otherRegionBets = AllData.instance.FourRegionMoney;
			let myRegionBets = AllData.instance.MyBetNums;
			this.region0.setBetValue((otherRegionBets[0] + myRegionBets[0]).toString());
			this.region1.setBetValue((otherRegionBets[1] + myRegionBets[1]).toString());
			this.region2.setBetValue((otherRegionBets[2] + myRegionBets[2]).toString());
			this.region3.setBetValue((otherRegionBets[3] + myRegionBets[3]).toString());
		}
		/****************************************** 以下是动画流程 ******************************************/
		//开局动画
		private playBiginAmi(): void
		{
			this.beginTran.play(this.starTimerAmi, this);
			core.SoundUtils.getInstance().playSound(15);
		}
		//开始倒计时
		private starTimerAmi(): void
		{
			let starTime: number = AllData.instance.OneGaemSurplueTime - AllData.instance.getCurrentSecond();
			this.clockCom.starTiming(starTime, null, this);
			core.SoundUtils.getInstance().playSound(16);
		}

		/**
		 * 停止下注
		 */
		public onStopBet(): void
		{
			this.changeBetBtn(false);
			this.ballSelect.setSelectedIndex(0);
			this._selectBallIndex = 0;
			core.SoundUtils.getInstance().playSound(17);
			this.stopBetTran.play(function ()
			{
				GameResultRequest.sendRequest();
			});
		}

		//哈希选牌发牌
		private playResultAmi(): void
		{
			this.resultCom.playResultAmi(this._regionComs, this.playHdagChange, this);
		}

		//资金更改动画
		private playHdagChange(): void
		{
			let resultData = AllData.instance.ResultData;
			if (resultData.myHdagChange > 0)
			{
				this.playerChangeTxt.text = "[color=#F7DE6C]+" + resultData.myHdagChange + "[/color]";
			}
			else if (resultData.myHdagChange == 0)
			{
				this.playerChangeTxt.text = "";
			}
			else
			{
				this.playerChangeTxt.text = "[color=#FFFFFF]" + resultData.myHdagChange + "[/color]";
			}
			if (resultData.bossChange > 0)
			{
				this.bossChangeTxt.text = "[color=#F7DE6C]+" + resultData.bossChange + "[/color]";
			}
			else if (resultData.bossChange == 0)
			{
				this.bossChangeTxt.text = "";
			}
			else
			{
				this.bossChangeTxt.text = "[color=#FFFFFF]" + resultData.bossChange + "[/color]";
			}
			let self = this;
			let temp = setTimeout(function ()
			{
				self.redoRegion();
				self.resultCom.visible = false;
				clearTimeout(temp);
				self.playerResultTran.play();
				self.bossResultTran.play(self.playAddResultAmi, self);
			}, 1000);
		}
		//记录结果动画
		private playAddResultAmi(): void
		{
			let self = this;
			let resultData = AllData.instance.ResultData;
			for (let i = 0; i < 4; i++)
			{
				let isWin: EnumerationType.WinOrLose;
				if (i < resultData.bossPosition)
				{
					isWin = resultData.isWins[i];
				}
				else
				{
					isWin = resultData.isWins[i + 1];
				}
				self._regionComs[i].addResult(isWin);
			}
			self.bossCom.addResult(resultData.isWins[resultData.bossPosition]);
			self.playBossAllWinOrLoseAmi();
		}

		/**庄家通赔通杀动画 */
		private playBossAllWinOrLoseAmi(): void
		{
			if (AllData.instance.ResultData.vill == 6)
			{
				this.bossAllWinTran.play(this.playBigWinnerAmi, this);
				core.SoundUtils.getInstance().playSound(20);
			}
			else if (AllData.instance.ResultData.vill == 4)
			{
				this.bossAllLoseTran.play(this.playBigWinnerAmi, this);
				core.SoundUtils.getInstance().playSound(19);
			}
			else
			{
				this.playBigWinnerAmi();
			}
		}

		//大赢家动画
		private playBigWinnerAmi(): void
		{
			if (AllData.instance.ResultData.bigWinnerData.length > 0)
			{
				this.bigWinnerCom.refreshView();
				this.bigWinnerTran.play(this.getNextData, this);
				core.SoundUtils.getInstance().playSound(22);
			}
			else
			{
				this.playBossTimeOverAmi();
			}
		}

		//获取本轮结束数据
		private playBossTimeOverAmi(): void
		{
			let self = this;
			if (this._isBossTimeOver)
			{
				HomePageRequest.todayBigWinnerRequest();
				this._isBossTimeOver = false;
				let temp = setTimeout(this.getNextData, 1500);
			}
			else
			{
				this.getNextData();
			}
		}

		//获取下局数据
		private getNextData(): void
		{
			let temp = setInterval(function ()
			{
				if (AllData.instance.getCurrentSecond() < AllData.instance.OneGaemSurplueTime)
				{
					clearInterval(temp);
					HomePageRequest.sendHomePageData();
				}
			}, 1000);
		}

		/****************************************** 以上是动画流程 ******************************************/

		private onBossTimeOver(): void
		{
			this._isBossTimeOver = true;
		}

		private onCloseAllBtnClick(): void
		{
			let str = GameConfig.systemType();
			core.SoundUtils.getInstance().stopAllSound();
			setTimeout(function ()
			{
				if (str == "windows")
				{
					window.close();
				}
				else if (str == "ios")
				{
					eval("finishPage()");
				}
				else if (str == "android")
				{
					eval("javaInterface.finishPage()");
				}
			}, 500);
		}

		/**
		 * 增加小球 有动画
		 * @param indexs 小球类型数组
		 * @param isSelf 是否是玩家本人
		 * @param isNeedAmi 是否需要播放动画
		 */
		public addBall(indexs: number[][], isSelf: boolean = false, isNeedAmi: boolean = true): void
		{
			if (indexs && indexs.length > 0)
			{
				// core.SoundUtils.getInstance().playSound(6);
			}
			for (let k = 0; k < 4; k++)
			{
				if (this._otherRegionBalls == null)
				{
					this._otherRegionBalls = [];
				}
				if (this._myRegionBalls == null)
				{
					this._myRegionBalls = [];
				}
				let len = indexs[k].length;
				for (let i = 0; i < len; i++)
				{
					let ball: BetBallCom = ObjectPool.instance.getFguiCom(BetBallCom, BetBallCom.NAME);
					ball.touchable = false;
					this.ballGroupCom.addChild(ball);
					if (isSelf)
					{
						ball.x = this._allBallBtns[this._selectBallIndex].x;
						ball.y = this._allBallBtns[this._selectBallIndex].y;
						if (this._myRegionBalls[k] == null)
						{
							this._myRegionBalls[k] = [];
						}
						this._myRegionBalls[k].push(ball);
					}
					else
					{
						ball.x = this.betPlayerCom.x;
						ball.y = this.betPlayerCom.y;
						if (this._otherRegionBalls[k] == null)
						{
							this._otherRegionBalls[k] = [];
						}
						this._otherRegionBalls[k].push(ball);
					}
					let pEnd = this.getBollEndPByIndex(k);
					if (isNeedAmi)
					{
						ball.showJoinAmi(pEnd.x, pEnd.y, indexs[k][i]);
					}
					else
					{
						ball.x = pEnd.x;
						ball.y = pEnd.y;
					}
				}
			}
		}

		private getBollEndPByIndex(index: number): egret.Point
		{
			let returnValue: egret.Point = new egret.Point();
			let betBall: BetBallCom = ObjectPool.instance.getFguiCom(BetBallCom, BetBallCom.NAME);
			let region: RegionCom = this._regionComs[index];
			let xMax = region.x + region.width - betBall.width;
			let xMin = region.x;
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
				if (this._otherRegionBalls[k] == null)
				{
					continue;
				}
				let len = this._otherRegionBalls[k].length;
				for (let i = 0; i < len; i++)
				{
					ObjectPool.instance.push(this._otherRegionBalls[k][i], "hideBall");
					this.ballGroupCom.removeChild(this._otherRegionBalls[k][i]);
				}
				this._otherRegionBalls[k] = [];
			}
			this.withdrawBall();
		}

		/**
		 * 撤回小球
		 */
		public withdrawBall(): boolean
		{
			let isHaveBall: boolean = false;
			AllData.instance.cleanMyBet();
			for (let k = 0; k < 4; k++)
			{
				if (this._myRegionBalls[k] == null)
				{
					continue;
				}
				let len = this._myRegionBalls[k].length;
				if (len > 0)
				{
					isHaveBall = true;
				}
				for (let i = 0; i < len; i++)
				{
					ObjectPool.instance.push(this._myRegionBalls[k][i], "hideBall");
					this.ballGroupCom.removeChild(this._myRegionBalls[k][i]);
				}
				this._myRegionBalls[k] = [];
			}
			return isHaveBall;
		}

		/**将本人小球加入所有人小球列表 */
		public onBetSucceed(): void
		{
			for (let i = 0; i < 4; i++)
			{
				if (this._otherRegionBalls[i] == null)
				{
					this._otherRegionBalls[i] = [];
				}
				if (this._myRegionBalls[i] && this._myRegionBalls.length > 0)
				{
					this._otherRegionBalls[i].push.apply(this._otherRegionBalls[i], this._myRegionBalls[i]);
					this._myRegionBalls[i] = [];
				}
			}
		}

		/**********************************************以下测试用*******************************************************/
		zipFileStartLoadTime = -1;
		protected createGameScene(): void
		{
			this.zipFileStartLoadTime = new Date().valueOf();
			let data = RES.getRes("sound_zip");
			var zip = new JSZip(data);
			let audioArrayBuffer = zip.file("aniu10.mp3").asArrayBuffer();
			this.visualize(audioArrayBuffer);
			console.log('ok');

		}
		visualize(buffer: ArrayBuffer)
		{
			let audioContext = new AudioContext();
			audioContext.decodeAudioData(buffer, (buffer) =>
			{
				var audioBufferSouceNode: AudioBufferSourceNode = audioContext.createBufferSource();
				audioBufferSouceNode.connect(audioContext.destination);
				audioBufferSouceNode.buffer = buffer;
				audioBufferSouceNode.start(0);
				// this.tip();
			}, (error) =>
				{
					console.log(`解码错误:`, error);
				})


		}
	}
}