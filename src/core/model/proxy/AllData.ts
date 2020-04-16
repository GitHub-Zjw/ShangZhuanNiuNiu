class AllData extends egret.EventDispatcher
{
	/**game包路径前缀 */
	public URL_Str: string = "ui://game/";
	/**庄家字符串数组 */
	public BossStrs: string[] = ["『1,6,b』", "『2,7,c』", "『3,8,d』", "『4,9,e』", "『0,5,a』"];
	public Sunlight: string;
	public Language: string;

	private static _info: AllData;
	private _homePageData: game.HomePageData;
	private _otherBetData: game.OtherBetData;
	private _resultData: game.ResultData;
	private _beginTimeStamp: number;				//游戏开始时间戳
	private _myBetNums: number[];					//本人下注，未投注
	private _allBetMoneyNum: number;				//所有人下注总金额
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
		this._homePageData = new game.HomePageData();
		this._otherBetData = new game.OtherBetData();
		this._myBetNums = [0, 0, 0, 0];
		this._allBetMoneyNum = 0;
	}

	/**
	 * 设置首页数据
	 */
	public setHomePageData(data: game.NuserData): void
	{
		this._homePageData = new game.HomePageData();
		let s = data.Data;
		let cData = this._homePageData;
		cData.myMoney = parseFloat(s.hdag);
		cData.myBetMoney = s.bm;
		//fix cData.myAntes = sData.
		cData.bossMoney = s.nest;
		cData.peopleInRoom = s.pe;
		cData.bossTime = s.time;
		cData.maxBet = parseFloat(s.ca);
		//fix cData.bossRecord
	}

	/**
	 * 设置游戏结果数据
	 */
	public setResultData(data: game.ServerResultData): void
	{}

	/**游戏首页信息 */
	public get HomePageData(): game.HomePageData
	{
		return this._homePageData;
	}

	/**游戏投注总金额 */
	public get AllBetMoneyNum(): number
	{
		return this._allBetMoneyNum;
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
		let w = Math.floor(Date.parse((new Date()).toString()) / 1000);
		let s = this._beginTimeStamp;
		let j = Math.floor((w - s) / 45);
		let t = w - (s + j * 45);
		return t;
	}

	/**
	 * 获取当前游戏期号
	 */
	public getCurrentIssueNumber(): number
	{
		let w = Math.floor(Date.parse((new Date()).toString()) / 1000);
		let s = this._beginTimeStamp;
		let j = Math.floor((w - s) / 45);
		let n = j + 1;
		return n;
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
		this._allBetMoneyNum += this.getMyAllBet();
	}

	/**
	 * 设置其他玩家下注
	 */
	public setOtherBet(): void
	{
		//todo
		this._allBetMoneyNum += this._otherBetData.totalBetNum;
	}

	/**
	 * 新的一局重置数据
	 */
	public redoData(): void
	{
		this._allBetMoneyNum = 0;
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
		let allBetMoney = this.getMyAllBet() + this._allBetMoneyNum + moneyNum;
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
			return { sunlight: "HD30d4c42d31283b52f175f83400865e5102a35fd0c54ad864602dd9dfdca", language: "cn" };//本机
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
		if (this.IsTestServer)
		{//测试服
			return "www.libraw.io";
		}
		else
		{
			return "www.harmonydag.com";
		}
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