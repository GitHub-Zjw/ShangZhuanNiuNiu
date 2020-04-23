module becomeBoss
{	
	/**庄家列表数据 */
	export class BecomeBossData
	{
		public constructor()
		{
			this.surplueTime = 0;
			this.alreadyBosses = [];
			this.doingPlayers = [];
		}

		/**是否庄家 */
		isBoss: boolean = false;
		/**是否预约上庄 */
		isSoonBoss: boolean = false;
		/**是否预约调仓 */
		isSoonChange: boolean = false;
		/**是否预约下庄 */
		isSoonDown: boolean = false;
		/**奖池余额 */
		prizeMoney: string;
		/**本轮倒计时（秒） */
		surplueTime: number;
		/**已上庄玩家数据[玩家名，下注金额，钱，百分比] */
		alreadyBosses: string[][];
		/**预约中玩家数据[玩家名，下注金额，类型] */
		doingPlayers: string[][];
		/**我的上庄余额 */
		myzmoney: number;
		/**我的账户余额 */
		myume: number
	}
}