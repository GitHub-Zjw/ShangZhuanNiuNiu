module game
{
	/**主页面数据类型 */
	export class HomePageData
	{
		/**我的 HDAG */
		myMoney: number;
		/**我的下注金额 */
		myBetMoney: number;
		/**我的底注 */
		myAntes: number;

		/**总下注金额 */
		allBetMoney: number;
		/**庄家 HDAG */
		bossMoney: number;
		/**房间人数 */
		peopleInRoom: number;
		/**庄家剩余时间 （秒） */
		bossTime: number;
		/**本局倒计时 */
		gameTime: number;
		/**最大下注金额 */
		maxBet: number;
		/**庄家胜负 */
		bossRecord: EnumerationType.WinOrLose[];
		/**
		 * 1：普通；				显示按钮：预约上庄
		 * 2：预约上庄;				显示按钮：取消预约
		 * 3：庄家；				显示按钮：预约调仓，预约下庄
		 * 4：庄家，已预约下庄；		显示按钮：取消下庄
		 * 5：庄加，已预约调仓；		显示按钮：取消调仓
		 */
		state: number;
		/**本局轮数 */
		ju: string;
		/**用户投注金额，底注为三分之一 */
		bem: number;
		public constructor()
		{
			this.myMoney = 0;
			this.myBetMoney = 0;
			this.myAntes = 0;
			this.bossMoney = 0;
			this.peopleInRoom = 0;
			this.maxBet = 0;
			this.bossRecord = [];
		}
	}
}