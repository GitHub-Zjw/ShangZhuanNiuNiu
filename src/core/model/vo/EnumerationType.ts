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
}