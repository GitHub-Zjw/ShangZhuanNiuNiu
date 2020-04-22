module EnumerationType
{
 	export enum CardsType
	{
		/**方块 */
		DIAMOND = 0,
		/**梅花 */
		CLUB = 1,
		/**红桃 */
		HEART = 2,
		/**黑桃 */
		SPADE = 3
	}

	export enum WinOrLose
	{
		/**胜 */
		win,
		/**败 */
		lose
	}

	export enum CardResult
	{
		/**没牛 */
		meiNiu = 0,
		niu1 = 1,
		niu2 = 2,
		niu3 = 3,
		niu4 = 4,
		niu5 = 5,
		niu6 = 6,
		niu7 = 7,
		niu8 = 8,
		niu9 = 9,
		/**牛牛 */
		niuNiu = 10,
		/**同花顺 */
		tongHuaShun = 11,
		/**顺子牛 */
		shunZiNiu = 12,
		/**五小牛 */
		wuXiaoNiu = 13,
		/**葫芦牛 */
		huLuNiu = 14,
		/**同花牛 */
		tongHuaNiu = 15,
		/**五花牛 */
		wuHuaNiu = 16,
		/**炸弹牛 */
		zhaDanNiu = 17
	}

	export enum PlayerState
	{
		None,
		/**普通 */
		normal= 1,
		/**预约上庄 */
		wallBoss = 2,
		/**庄家 */
		alreadyBoss = 3,
		/**庄家，已预约下庄 */
		wallDown = 4,
		/**庄家，已预约调仓 */
		wallChange = 5
	}
}