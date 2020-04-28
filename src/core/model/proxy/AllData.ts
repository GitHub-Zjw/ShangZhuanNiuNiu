class AllData extends egret.EventDispatcher
{
	/**game包路径前缀 */
	public URL_Str: string = "ui://game/";
	/**庄家字符串数组 */
	public BossStrs: string[] = ["『1,6,b』", "『2,7,c』", "『3,8,d』", "『4,9,e』", "『0,5,a』"];
	public Sunlight: string;
	public Language: string;
	/**一局游戏的倒计时时长 */
	public OneGaemSurplueTime: number = 43;
	/**是否不显示密码输入 */
	public IsNoShowPwd: boolean = false;

	private static _info: AllData;
	private _homePageData: game.HomePageData;
	private _otherBetData: game.OtherBetData;
	private _resultData: game.ResultData;
	private _becomeBossData: becomeBoss.BecomeBossData;
	private _bossChangeData: becomeBoss.BossChangeData;

	private _beginTimeStamp: number;				//游戏开始时间戳
	private _oneIssueTime: number;					//一期游戏时长
	private _oneGameTime: number;					//一局游戏时长

	private _myBetNums: number[];					//本人下注，未投注
	private _fourRegionMoney: number[];				//四个区域投注金额
	public static get instance(): AllData
	{
		if (AllData._info == null)
		{
			AllData._info = new AllData();
		}
		return AllData._info;
	}


	public constructor()
	{
		super();
		this._beginTimeStamp = 1575302400;
		this._oneIssueTime = 1200;
		this._oneGameTime = 60;
		this._homePageData = new game.HomePageData();
		this._otherBetData = new game.OtherBetData();
		this._becomeBossData = new becomeBoss.BecomeBossData();
		this._bossChangeData = new becomeBoss.BossChangeData();
		this._myBetNums = [0, 0, 0, 0];
		this._fourRegionMoney = [0, 0, 0, 0];
	}

	/**
	 * 设置首页数据
	 */
	public setHomePageData(data: game.NuserData): void
	{
		this.redoData();
		this._homePageData = new game.HomePageData();
		let s = data.Data;
		let cData = this._homePageData;
		cData.myMoney = parseFloat(s.hdag);
		//fix cData.myBetMoney = 
		//fix cData.myAntes = sData.
		cData.allBetMoney = s.bm;
		cData.bossMoney = s.nest;
		cData.peopleInRoom = s.pe;
		cData.bossTime = s.time;
		cData.maxBet = parseFloat(s.ca);
		cData.state = s.st;
		cData.bossRecord = [];
		cData.ju = s.ju;
		let len = s.zjw.length;
		for (let i = 0; i < len; i++)
		{
			if (s.zjw[i] == 5)
			{
				cData.bossRecord.push(EnumerationType.WinOrLose.lose);
			}
			else if (s.zjw[i] == 8)
			{
				cData.bossRecord.push(EnumerationType.WinOrLose.win);
			}
		}
		cData.gameTime = s.jtime;
		cData.bem = s.bem;
	}


	/**
	 * 设置玩家上庄界面数据
	 */
	public setBecomeBossData(data: becomeBoss.CbookmakerData): void
	{
		this._becomeBossData.alreadyBosses = [];
		let len = data.Data.shang.length;
		for (let i = 0; i < len; i++)
		{
			let shang = data.Data.shang[i];
			this._becomeBossData.alreadyBosses[i] = [shang.name, shang.tr.toString(), shang.ye, shang.pro];
		}
		let yuyLen = data.Data.yuy.length;
		for (let i = 0; i < yuyLen; i++)
		{
			let yuy = data.Data.yuy[i];
			this._becomeBossData.doingPlayers[i] = [yuy.name, yuy.money, yuy.type];
		}
		this._becomeBossData.myzmoney = parseFloat(data.Data.myzmoney);
		this._becomeBossData.myume = parseFloat(data.Data.myume);
		this._becomeBossData.prizeMoney = data.Data.money;
		this._becomeBossData.surplueTime = data.Data.dtime;

		switch (this.HomePageData.state)
		{
			case 1:
				this._becomeBossData.isBoss = false;
				this._becomeBossData.isSoonBoss = false;
				break;
			case 2:
				this._becomeBossData.isBoss = false;
				this._becomeBossData.isSoonChange = false;
				this._becomeBossData.isSoonDown = false;
				this._becomeBossData.isSoonBoss = true;
				break;
			case 3:
				this._becomeBossData.isBoss = true;
				this._becomeBossData.isSoonChange = false;
				this._becomeBossData.isSoonDown = false;
				this._becomeBossData.isSoonBoss = false;
				break;
			case 4:
				this._becomeBossData.isBoss = true;
				this._becomeBossData.isSoonChange = false;
				this._becomeBossData.isSoonDown = true;
				this._becomeBossData.isSoonBoss = false;
				break;
			case 5:
				this._becomeBossData.isBoss = true;
				this._becomeBossData.isSoonChange = true;
				this._becomeBossData.isSoonDown = false;
				this._becomeBossData.isSoonBoss = false;
				break;
		}
	}

	/**
	 * 上庄亏盈数据
	 */
	public setBossChangeData(data: becomeBoss.BincomeData): void
	{
		let len = data.Data.list.length;
		this._bossChangeData.changeLists = []
		for (let i = 0; i < len; i++)
		{
			let temp = data.Data.list[i];
			let winStr = temp.win.toString();
			if (temp.win > 0)
			{
				winStr = "[color=#CF984A]" + temp.win + "[/color]";
			}
			this._bossChangeData.changeLists[i] = [temp.issue.toString(), temp.time, winStr, temp.yue];
		}
		let changeStr = data.Data.sum.toString();
		if (data.Data.sum > 0)
		{
			changeStr = "[color=#CF984A]" + data.Data.sum + "[/color]"
		}
		this._bossChangeData.moneyChanges = changeStr;
	}
	/**
	 * 设置游戏结果数据
	 */
	public setResultData(data: game.ServerResultData): void
	{
		this._resultData = new game.ResultData();

		//哈希列表
		this._resultData.hxItemDatas = [];
		let hashLen = 10;
		for (let i = 0; i < hashLen; i++)
		{
			let key = "k_" + (hashLen - i);
			let serverHx = data.Data.hash[key];
			let clHx = this._resultData.hxItemDatas;

			let hxItem = new game.HXItemData();
			hxItem.hxStr1 = serverHx.ar.toString();
			hxItem.hxStr2 = serverHx.hr;
			hxItem.hxStr3 = serverHx.tr;
			hxItem.isLuck = false;
			clHx.push(hxItem);
			if (key == data.Data.lucky)
			{
				this._resultData.moveStr = hxItem.hxStr2.charAt(hxItem.hxStr2.length - 1);
				hxItem.hxStr2 = hxItem.hxStr2.substring(0, hxItem.hxStr2.length - 2) + "[color=#FFA03B]" + this._resultData.moveStr + "[/color]";
				hxItem.isLuck = true;
				break;
			}
		}

		//手牌信息
		this._resultData.cardTypes = [];
		this._resultData.cardValue = [];
		this._resultData.cardResultTypes = [];
		this._resultData.isWins = [];
		this._resultData.luckCardIndexs = [];
		for (let i = 0; i < 5; i++)
		{
			this._resultData.cardTypes[i] = [];
			this._resultData.cardValue[i] = [];
			this._resultData.luckCardIndexs[i] = [];
			let serverHand = data.Data.hand[i];
			for (let k = 0; k < 5; k++)
			{
				this._resultData.cardTypes[i][k] = this.getCardTypeByStr(serverHand.pe[k]);
				this._resultData.cardValue[i][k] = this.getCardValueByStr(serverHand.pe[k]);
				if (serverHand.ten && serverHand.ten.length > k)
				{
					this._resultData.luckCardIndexs[i][k] = serverHand.ten[k];
				}
			}
			this._resultData.cardResultTypes[i] = this.getCardResultByNumber(serverHand.niu);
			if (serverHand.win == 5)
			{
				this._resultData.isWins[i] = EnumerationType.WinOrLose.lose;
			}
			else if (serverHand.win == 8)
			{
				this._resultData.isWins[i] = EnumerationType.WinOrLose.win;
			}
			else
			{//没有win字段，此位置是庄家
				if (data.Data.kj.zj == 5)
				{
					this._resultData.isWins[i] = EnumerationType.WinOrLose.lose;
				}
				else if (data.Data.kj.zj == 8)
				{
					this._resultData.isWins[i] = EnumerationType.WinOrLose.win;
				}
			}
		}


		this._resultData.bossPosition = this.getBossPositionByStr(this._resultData.moveStr);
		this._resultData.bossStr = this.BossStrs[this._resultData.bossPosition].replace(this._resultData.moveStr, "[color=#FFA03B]" + this._resultData.moveStr + "[/color]")
		this._resultData.bossChange = data.Data.inc;
		this._resultData.myHdagChange = data.Data.unc;
		this._resultData.vill = data.Data.vill;

		this._resultData.bigWinnerData = [];
		let len = data.Data.dyj.length;
		for (let i = 0; i < len; i++)
		{
			this._resultData.bigWinnerData[i] = [data.Data.dyj[i].name, data.Data.dyj[i].bonus];
		}
	}

	private getBossPositionByStr(str: string): number
	{
		for (let i = 0; i < 5; i++)
		{
			if (this.BossStrs[i].indexOf(str) != -1)
			{
				return i;
			}
		}
	}
	private getCardTypeByStr(str: string): EnumerationType.CardsType
	{
		if (str.indexOf("ht") != -1)
		{
			return EnumerationType.CardsType.SPADE;
		}
		if (str.indexOf("hx") != -1)
		{
			return EnumerationType.CardsType.HEART;
		}
		if (str.indexOf("mh") != -1)
		{
			return EnumerationType.CardsType.CLUB;
		}
		if (str.indexOf("fk") != -1)
		{
			return EnumerationType.CardsType.DIAMOND;
		}
	}

	private getCardValueByStr(str: string): number
	{
		if (str.length == 3)
		{
			return parseInt(str.charAt(str.length - 1));
		}
		else if (str.length == 4)
		{
			return parseInt(str.charAt(str.length - 2) + str.charAt(str.length - 1));
		}
	}

	/**
	 * 根据后端数字返回牌型
	 */
	public getCardResultByNumber(num: number): EnumerationType.CardResult
	{
		let returnValue: EnumerationType.CardResult;
		if (num <= 10)
		{
			returnValue = num;
		}
		else
		{
			switch (num)
			{
				case 11:
					returnValue = EnumerationType.CardResult.shunZiNiu;
					break;
				case 12:
					returnValue = EnumerationType.CardResult.wuHuaNiu;
					break;
				case 13:
					returnValue = EnumerationType.CardResult.tongHuaNiu;
					break;
				case 14:
					returnValue = EnumerationType.CardResult.huLuNiu;
					break;
				case 15:
					returnValue = EnumerationType.CardResult.zhaDanNiu;
					break;
				case 16:
					returnValue = EnumerationType.CardResult.wuXiaoNiu;
					break;
				case 17:
					returnValue = EnumerationType.CardResult.tongHuaShun;
					break;
			}
		}
		return returnValue;
	}

	/**游戏首页信息 */
	public get HomePageData(): game.HomePageData
	{
		return this._homePageData;
	}

	/**庄家列表数据 */
	public get BecomeBossData(): becomeBoss.BecomeBossData
	{
		return this._becomeBossData;
	}
	/**庄家列表数据 */
	public getBecomeBossData(): becomeBoss.BecomeBossData
	{
		return this._becomeBossData;
	}

	/**庄家亏盈数据 */
	public get BossChangeData(): becomeBoss.BossChangeData
	{
		return this._bossChangeData;
	}

	/**当前庄家余额余额 */
	public get BossSurplueMoney(): string
	{
		return this._becomeBossData.prizeMoney;
	}

	/**其他玩家投注信息 */
	public get OtherBetData(): game.OtherBetData
	{
		return this._otherBetData;
	}

	/**
	 * 筹码值数值
	 */
	public get BallValues(): number[]
	{
		return [1, 10, 50, 500, 5000, 10000];
	}

	/**
	 * 本局结果数据
	 */
	public get ResultData(): game.ResultData
	{
		return this._resultData;
	}

	/**
	 * 获取游戏进行到的时间（秒）
	 */
	public getCurrentSecond(): number
	{
		let nowSecond = Math.floor(Date.parse((new Date()).toString()) / 1000);
		let issueNumber = this.getCurrentIssueNumber();
		let issueSecond = nowSecond - (this._beginTimeStamp + (issueNumber - 1) * this._oneIssueTime);
		let oneGameTime = issueSecond % this._oneGameTime;
		return oneGameTime;
	}

	/**
	 * 获取本庄剩余时间
	 */
	public getBossSurplueTime(): number
	{
		let nowSecond = Math.floor(Date.parse((new Date()).toString()) / 1000);
		let issueNumber = this.getCurrentIssueNumber();
		let surplueTime = this._oneIssueTime - (nowSecond - (this._beginTimeStamp + (issueNumber - 1) * this._oneIssueTime));
		return surplueTime;
	}

	/**
	 * 获取当前游戏期号
	 */
	public getCurrentIssueNumber(): number
	{
		let nowSecond = Math.floor(Date.parse((new Date()).toString()) / 1000);
		let issueNumber = Math.ceil((nowSecond - this._beginTimeStamp) / this._oneIssueTime);
		return issueNumber;
	}

	/**
	 * 根据天数 换算 时间
	 */
	public getDateStrByCount(count: number): string
	{
		let now = Date.parse((new Date()).toString());
		let need = now + (count * 3600 * 24 * 1000);
		let date = new Date(need);
		return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
	}

	/**
	 * 获取随机整数,含最小不含最大
	 */
	public getRandomInt(min, max): number
	{
		return Math.floor(Math.random() * (max - min)) + min;
	}

	/**
	 * 获取随机浮点数
	 */
	public getRandomF(min, max): number
	{
		return Math.random() * (max - min) + min;
	}

	/**
	 * 根据后端区域数据获取输赢
	 */
	public getRegionRecord(data: game.RegionItemData): EnumerationType.WinOrLose[]
	{
		let len = data.re.length;
		let returnValue: EnumerationType.WinOrLose[] = [];
		for (let i = 0; i < len; i++)
		{
			if (data.re[i] == 5)
			{
				returnValue.push(EnumerationType.WinOrLose.lose);
			}
			else if (data.re[i] == 8)
			{
				returnValue.push(EnumerationType.WinOrLose.win);
			}
		}
		return returnValue;
	}

	/**
	 * 根据下注数值
	 * 获取筹码数组
	 */
	public getBetIndexByValue(value: number): number[]
	{
		let returnValue: number[] = [];
		let ballValues = this.BallValues;
		for (let i = 5; i >= 0; i--)
		{
			while (true)
			{
				if (value >= ballValues[i])
				{
					returnValue.push(i)
					value -= ballValues[i]
				}
				else
				{
					break;
				}
			}
		}
		return returnValue;
	}

	/**
	 * 玩家投注成功
	 */
	public setPlayerBetSucceed(): void
	{
		this._fourRegionMoney[0] += this._myBetNums[0];
		this._fourRegionMoney[1] += this._myBetNums[1];
		this._fourRegionMoney[2] += this._myBetNums[2];
		this._fourRegionMoney[3] += this._myBetNums[3];
	}

	/**
	 * 四个区域投注金额
	 */
	public get FourRegionMoney(): number[]
	{
		return this._fourRegionMoney;
	}

	/**
	 * 四个区域投注金额总和
	 */
	public getAllRegionMoney(): number
	{
		return this._fourRegionMoney[0] + this._fourRegionMoney[1] + this._fourRegionMoney[2] + this._fourRegionMoney[3];
	}

	/**
	 * 设置其他玩家下注
	 */
	public setOtherBet(data: game.RegionData): void
	{
		this._otherBetData = new game.OtherBetData();
		if (data.Data.bet)
		{
			this._otherBetData.playerName = data.Data.bet.name;
			this._otherBetData.playerLevel = data.Data.bet.id.toString();
			this._otherBetData.betRegions = [this.getCardTypeByStr(data.Data.bet.wz)];
			this._otherBetData.betMoney = data.Data.bet.money;
			this._otherBetData.id=  data.Data.bet.id;
		}

		this._otherBetData.allBet = [];
		this._otherBetData.allBet[0] = data.Data.ht.he - this._fourRegionMoney[0];
		this._otherBetData.allBet[1] = data.Data.hx.he - this._fourRegionMoney[1];
		this._otherBetData.allBet[2] = data.Data.mh.he - this._fourRegionMoney[2];
		this._otherBetData.allBet[3] = data.Data.fk.he - this._fourRegionMoney[3];

		this._fourRegionMoney[0] = data.Data.ht.he;
		this._fourRegionMoney[1] = data.Data.hx.he;
		this._fourRegionMoney[2] = data.Data.mh.he;
		this._fourRegionMoney[3] = data.Data.fk.he;

		this._otherBetData.winOrLoses = [];
		this._otherBetData.winOrLoses[0] = this.getRegionRecord(data.Data.ht);
		this._otherBetData.winOrLoses[1] = this.getRegionRecord(data.Data.hx);
		this._otherBetData.winOrLoses[2] = this.getRegionRecord(data.Data.mh);
		this._otherBetData.winOrLoses[3] = this.getRegionRecord(data.Data.fk);

	}

	/**
	 * 新的一局重置数据
	 */
	public redoData(): void
	{
		this._fourRegionMoney[0] = 0;
		this._fourRegionMoney[1] = 0;
		this._fourRegionMoney[2] = 0;
		this._fourRegionMoney[3] = 0;
	}

	/**
	 * 添加本人下注
	 * @param moneyNum 下注金额
	 * @param index	下注区域
	 */
	public addMyBet(moneyNum: number, index: number): void
	{
		this._myBetNums[index] += moneyNum;
	}

	/**
	 * 本人下注数据
	 */
	public get MyBetNums(): number[]
	{
		return this._myBetNums;
	}

	/**
	 * 清空本人下注
	 */
	public cleanMyBet(): void
	{
		this._myBetNums = [0, 0, 0, 0];
	}

	/**
	 * 获取本人下注金额
	 */
	public getMyAllBet(): number
	{
		let len = this._myBetNums.length;
		let returnValue = 0;
		for (let i = 0; i < len; i++)
		{
			returnValue += this._myBetNums[i];
		}
		return returnValue;
	}

	/**
	 * 获取下注金额是否足够
	 * @param moneyNum 下注金额
	 */
	public getBetMoneyIsEnough(moneyNum: number): boolean
	{
		let alreadyBetMoney = this.getMyAllBet();
		if (moneyNum + alreadyBetMoney > this._homePageData.myMoney)
		{
			return false;
		}
		else
		{
			return true;
		}
	}

	/**
	 * 获取是否会超过最大下注金额
	 * @param moneyNum 下注金额
	 */
	public getIsCapByBetMoney(moneyNum: number): boolean
	{
		let allBetMoney = this.getMyAllBet() + this.getAllRegionMoney() + moneyNum;
		if (allBetMoney > this._homePageData.maxBet)
		{
			return true;
		}
		else
		{
			return false;
		}
	}


	/**
	 * 解析url
	 */
	public parseUrl(): any
	{
		if (this.IsTestServer)
		{//测试服
			return { sunlight: "HD837c1e6019ef09164c07838131f3aa3fb82f3e3eb1bf26b307de0109a9c", language: "cn" };//本机
			// return {sunlight:"HD9ae9bca5bcac2ac8f759b44c387ba282ffbb0a7faf042ce56da97c2b611",language:"cn"};//测试服

		}
		var searchHref = window.location.search.replace('?', '');
		var params = searchHref.split('&');
		var returnParam = {};
		params.forEach(function (param)
		{
			var paramSplit = param.split('=');
			returnParam[paramSplit[0]] = paramSplit[1];
		});
		return returnParam;
	}

	/**
	 * 是否测试服
	 */
	public get IsTestServer(): boolean
	{
		if (location.port == "5927")
		{//测试服
			return true;
		}
		else
		{
			return false;
		}
	}

	/**
	 * 获取请求网址
	 */
	public getWebsite(): string
	{
		// if (this.IsTestServer)
		// {//测试服
			return "www.libraw.io";
		// }
		// else
		// {
		// 	return "www.harmonydag.com";
		// }
	}

	/**
	 * 测试首页数据
	 */
	public setTestHomePageData(): void
	{
		this.redoData();
		this._homePageData.bossMoney = this.getRandomF(0, 6969696969);
		this._homePageData.bossRecord = [this.getRandomInt(0, 2), this.getRandomInt(0, 2), this.getRandomInt(0, 2), this.getRandomInt(0, 2), this.getRandomInt(0, 2), this.getRandomInt(0, 2), this.getRandomInt(0, 2), this.getRandomInt(0, 2)];
		this._homePageData.bossTime = this.getRandomInt(60, 36000);
		this._homePageData.maxBet = this.getRandomF(6000, 10000);
		this._homePageData.myAntes = this.getRandomF(0, 9);
		this._homePageData.myBetMoney = this.getRandomF(1, 500);
		this._homePageData.myMoney = this.getRandomF(100, 500);
		this._homePageData.peopleInRoom = this.getRandomInt(2, 999);
		// this._homePageData.regionRecord = [this._homePageData.bossRecord, this._homePageData.bossRecord, this._homePageData.bossRecord, this._homePageData.bossRecord];
	}

	/**
	 * 测试其他玩家下注数据
	 */
	public setTestOtherBetData(): void
	{
		this._otherBetData.allBet = [15561, this.getRandomF(1, 999999), this.getRandomF(1, 999999), this.getRandomF(1, 999999)];
		this._otherBetData.betMoney = this.getRandomF(1, 99999).toString();
		this._otherBetData.betRegions = []
		this._otherBetData.betRegions.push(this.getRandomInt(0, 4));
		this._otherBetData.betRegions.push(this.getRandomInt(0, 4));
		this._otherBetData.betRegions.push(this.getRandomInt(0, 4));
		this._otherBetData.betRegions.push(this.getRandomInt(0, 4));
		this._otherBetData.playerLevel = this.getRandomInt(0, 99).toString();
		this._otherBetData.playerName = "" + this.getRandomInt(0, 10) + this.getRandomInt(0, 10) + this.getRandomInt(0, 10) + "...";
	}

	/**
	 * 写入测试预约上庄数据
	 */
	public setTestBecomeBossData(): void
	{
		// this._becomeBossData = new becomeBoss.BecomeBossData();
		// this._bossChangeData = new becomeBoss.BossChangeData();
		// this._becomeBossData.alreadyBosses = [];
		// this._bossChangeData.changeLists = []
		// let len = this.getRandomInt(10, 25);
		// for (let i = 0; i < len; i++)
		// {
		// 	this._becomeBossData.alreadyBosses[i] = ["是省会", "" + this.getRandomInt(996, 9960), "" + this.getRandomInt(996, 9960), this.getRandomInt(0, 101) + ""];
		// 	this._becomeBossData.doingPlayers[i] = ["十七项", "" + this.getRandomInt(996, 9960), "" + this.getRandomInt(996, 9960), this.getRandomInt(0, 101) + ""];
		// 	this._bossChangeData.changeLists[i] = [];
		// 	for (let k = 0; k < len; k++)
		// 	{
		// 		this._bossChangeData.changeLists[i][k] = [this.getRandomInt(996, 9960) + "", this.getRandomInt(0, 60) + ":" + this.getRandomInt(0, 60), this.getRandomInt(0, 60) + "", this.getRandomInt(0, 60) + ""];
		// 	}
		// 	this._bossChangeData.moneyChanges[i] = this.getRandomInt(-996, 9960).toString();
		// 	this._bossChangeData.times[i] = this.getRandomInt(0, 60) + ":" + this.getRandomInt(0, 60);
		// }
		// this._becomeBossData.isBoss = this.getRandomInt(0, 2) == 1;
		// this._becomeBossData.isSoonChange = this.getRandomInt(0, 2) == 1;
		// this._becomeBossData.isSoonDown = this.getRandomInt(0, 2) == 1;;
		// this._becomeBossData.prizeMoney = this.BossSurplueMoney;
		// this._becomeBossData.surplueTime = this.getRandomInt(60, 600);
	}

	public setTestResultData(): void
	{
		this._resultData = new game.ResultData();
		let maxI = this.getRandomInt(1, 8);
		let hxItem: game.HXItemData = new game.HXItemData();
		hxItem.hxStr1 = "656523";
		hxItem.hxStr2 = "...dhfh5dfj6[color=#FFA03B]5[/color]";
		hxItem.hxStr3 = "13:02:03";
		hxItem.isLuck = true;
		this._resultData.hxItemDatas = [];
		this._resultData.hxItemDatas.push(hxItem);
		for (let i = 0; i < maxI; i++)
		{
			let hxItem: game.HXItemData = new game.HXItemData();
			hxItem.hxStr1 = "" + i + i + i + i + i + i;
			hxItem.hxStr2 = "...dhfh5dfj65";
			hxItem.hxStr3 = "" + i + i + i + i + i + i + i + i;
			hxItem.isLuck = false;
			this._resultData.hxItemDatas.push(hxItem);
		}
		for (let i = 0; i < 5; i++)
		{
			this._resultData.cardResultTypes.push(this.getRandomInt(1, 17));
			this._resultData.isWins.push(this.getRandomInt(0, 2));
			this._resultData.cardTypes[i] = [];
			this._resultData.cardValue[i] = [];

			for (let k = 0; k < 5; k++)
			{
				this._resultData.cardTypes[i][k] = this.getRandomInt(0, 4);
				this._resultData.cardValue[i][k] = this.getRandomInt(1, 14);
			}
		}
		this._resultData.luckCardIndexs.push([this.getRandomInt(0, 6), this.getRandomInt(0, 6)]);
		this._resultData.luckCardIndexs.push([this.getRandomInt(0, 6), this.getRandomInt(0, 6)]);
		this._resultData.luckCardIndexs.push([]);
		this._resultData.luckCardIndexs.push([this.getRandomInt(0, 6), this.getRandomInt(0, 6), this.getRandomInt(0, 6), this.getRandomInt(0, 6), this.getRandomInt(0, 6)]);
		this._resultData.luckCardIndexs.push([this.getRandomInt(0, 6), this.getRandomInt(0, 6)]);
		this._resultData.bossStr = "『0,[color=#FFA03B]5[/color],a』";
		this._resultData.bossPosition = this.getRandomInt(0, 5);
		this._resultData.bossChange = this.getRandomInt(-10000, 100000);
		this._resultData.myHdagChange = this.getRandomInt(-10000, 100000);
		this._resultData.moveStr = "5";
		this._resultData.bigWinnerData = [["是省会", this.getRandomInt(-10000, 100000).toString()], ["是省会", this.getRandomInt(-10000, 100000).toString()], ["是省会", this.getRandomInt(-10000, 100000).toString()]];
		console.log(this._resultData);
	}
}