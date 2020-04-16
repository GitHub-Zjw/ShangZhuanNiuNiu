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
		/**庄家 HDAG */
		bossMoney: number;
		/**房间人数 */
		peopleInRoom: number;
		/**庄家剩余时间 （秒） */
		bossTime: number;
		/**最大下注金额 */
		maxBet: number;
		/**庄家胜负 */
		bossRecord: EnumerationType.WinOrLose[];
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