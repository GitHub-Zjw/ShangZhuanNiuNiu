module game
{
	export class RegionDataCommand extends CommandBase
	{
		/**
		* 注册消息
		*/
		public register(): void
		{
			this.facade.registerCommand(RequestsNotify.getbetm, RegionDataCommand);
		}

		public execute(notification: puremvc.INotification): void
		{
			super.execute(notification);
			let data: RegionData = notification.getBody();
			if (data.Code == 400)
			{
				TipsUtils.showTipsFromCenter(data.Msg);
				return;
			}
			AllData.instance.setOtherBet(data);
			game.AppFacade.instance.sendNotification(GameNotify.BET_MONEY, data);
		}
	}
	export interface RegionData extends AllResponseData
	{
		Data:
		{
			/**【黑桃】 */
			ht: RegionItemData,
			/**【红心】 */
			hx: RegionItemData,
			/**【梅花】 */
			mh: RegionItemData,
			/**【方块】 */
			fk: RegionItemData,
			"bet": {//【本局最新投注人的信息】<object>
				"id": number, //63505,id <number>
				"name": string, //"cekdkdk",名称 <string>
				"wz": string, //"hx",位置 <string>
				"money": string, //"150.00"投注金额 <string>
			}
		}
	}
	export interface RegionItemData
	{
		/**下注金额合计 */
		he: number,
		// /**金币数额数组 */
		// ar: string[],
		/**中奖纪录 5：输 8：赢 */
		re: number[]
	}
}