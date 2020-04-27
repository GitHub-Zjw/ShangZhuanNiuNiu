module game
{
	/**其他玩家下注数据 */
	export class OtherBetData
	{
		id: number;
		/**玩家名称（最后一名玩家） */
		playerName: string;
		/**玩家等级（最后一名玩家） */
		playerLevel: string;
		/**投注区域（最后一名玩家）*/
		betRegions: EnumerationType.CardsType[];
		/**投注金额 */
		betMoney: string;
		/**所有玩家投注【0方块，1梅花，2红桃，3黑桃】 */
		allBet: number[];
		/**总共增加的下注数值 */
		public get totalBetNum(): number
		{
			return this.allBet[0] + this.allBet[1] + this.allBet[2] + this.allBet[3];
		}
		/**胜败记录 */
		winOrLoses: EnumerationType.WinOrLose[][];

		public constructor()
		{
			this.betRegions = [];
		}
	}
}