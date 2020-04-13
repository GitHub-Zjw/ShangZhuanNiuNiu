class AllData extends egret.EventDispatcher
{
	private static _info: AllData;
	private _homePageData: game.HomePageData;
	private _otherBetData: game.OtherBetData;
	private _beginTimeStamp: number;				//游戏开始时间戳
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
	}

	/**游戏首页信息 */
	public get HomePageData(): game.HomePageData
	{
		return this._homePageData;
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
	 * 测试首页数据
	 */
	public setTestHomePageData(): void
	{
		this._homePageData.bossMoney = this.getRandomF(0, 6969696969);
		this._homePageData.bossRecord = [this.getRandomInt(0, 2), this.getRandomInt(0, 2), this.getRandomInt(0, 2), this.getRandomInt(0, 2), this.getRandomInt(0, 2), this.getRandomInt(0, 2), this.getRandomInt(0, 2), this.getRandomInt(0, 2)];
		this._homePageData.bossTime = this.getRandomInt(60, 36000);
		this._homePageData.maxBet = this.getRandomF(6000, 10000);
		this._homePageData.myAntes = this.getRandomF(0, 9);
		this._homePageData.myBetMoney = this.getRandomF(1, 500);
		this._homePageData.myMoney = this.getRandomF(100, 500);
		this._homePageData.peopleInRoom = this.getRandomInt(2, 999);
		this._homePageData.regionRecord = [this._homePageData.bossRecord, this._homePageData.bossRecord, this._homePageData.bossRecord, this._homePageData.bossRecord];
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
		this._otherBetData.totalBetNum = this.getRandomF(0,999);
	}
}