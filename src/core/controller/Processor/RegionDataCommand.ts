module game
{
	export class RegionDataCommand
	{
		public constructor()
		{
		}
	}
	export interface RegionData extends AllResponseData
	{
		Data:
		{
			list: {
				/**【黑桃】 */
				ht: ItemData,
				/**【红心】 */
				hx: ItemData,
				/**【梅花】 */
				mh: ItemData,
				/**【方块】 */
				fk: ItemData
			},
			/**投注人数 */
			num: number;
		}
	}
	export interface ItemData
	{
		/**下注金额合计 */
		he: number,
		/**金币数额数组 */
		ar: string[],
		/**中奖纪录 5：输 8：赢 */
		re: number[]
	}
}