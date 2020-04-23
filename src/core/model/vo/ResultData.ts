module game
{
	/**
	 * 牌局结果数据
	 */
	export class ResultData
	{
		/**哈希列表数值 */
		hxItemDatas: HXItemData[];
		/**五种牌型 */
		cardResultTypes: EnumerationType.CardResult[];
		/**五个胜败 */
		isWins: EnumerationType.WinOrLose[];
		/**25个牌花色 */
		cardTypes: EnumerationType.CardsType[][];
		/**25张牌值 */
		cardValue: number[][];
		/**五个位置的起飞卡牌位置，
		 * 长度为5表示5张同时起飞，
		 * 长度为零表示不起飞 
		 */
		luckCardIndexs: number[][];
		/**庄家字符串 */
		bossStr: string;
		/**庄家位置 0-4 */
		bossPosition: number;
		/**庄家本局亏赚 */
		bossChange: number;
		/**飘动的字符 */
		moveStr: string;
		/**本人游戏币增减 */
		myHdagChange: number;
		/**本轮大赢家数据 */
		bigWinnerData: string[][];
		public constructor()
		{
			this.cardResultTypes = [];
			this.isWins = [];
			this.cardTypes = [];
			this.cardValue = [];
			this.luckCardIndexs = [];
			this.bigWinnerData = []
		}
		/**1：既不是通赔，也不是通杀 4：庄家通赔 6：庄家通杀 */
		vill: number;
	}

	export class HXItemData
	{
		hxStr1: string;
		hxStr2: string;
		hxStr3: string;
		isLuck: boolean;
		public constructor()
		{
			this.hxStr1 = "";
			this.hxStr2 = "";
			this.hxStr3 = "";
		}
	}
}