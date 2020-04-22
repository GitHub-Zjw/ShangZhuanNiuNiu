module becomeBoss
{
	/**庄家盈亏数据 */
	export class BossChangeData
	{
		public constructor()
		{
			this.changeLists = []
		}

		/**总金额变化 */
		moneyChanges: string;
		/**数据列表[伦茨，时间，盈亏，余额] */
		changeLists: string[][];
	}
} 