class AllData extends egret.EventDispatcher
{
	private static _info: AllData;
	private _homePageData: game.HomePageData;
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
	}

	/**游戏首页信息 */
	public get HomePageData(): game.HomePageData
	{
		return this._homePageData;
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
	 * 测试设置数据
	 */
	public setTestData(): void
	{
		this.setTestHomePageData();
	}

	public setTestHomePageData(): void
	{
		this._homePageData.bossMoney = this.getRandomF(0,6969696969);
		this._homePageData.bossRecord = [this.getRandomInt(0,2),this.getRandomInt(0,2),this.getRandomInt(0,2),this.getRandomInt(0,2),this.getRandomInt(0,2),this.getRandomInt(0,2),this.getRandomInt(0,2),this.getRandomInt(0,2)];
		this._homePageData.bossTime = this.getRandomInt(60, 36000);
		this._homePageData.maxBet = this.getRandomF(6000,10000);
		this._homePageData.myAntes = this.getRandomF(0,9);
		this._homePageData.myBetMoney = this.getRandomF(1,500);
		this._homePageData.myMoney = this.getRandomF(100,500);
		this._homePageData.peopleInRoom = this.getRandomInt(2, 999);
		this._homePageData.regionRecord = [this._homePageData.bossRecord,this._homePageData.bossRecord,this._homePageData.bossRecord,this._homePageData.bossRecord];
	}
}