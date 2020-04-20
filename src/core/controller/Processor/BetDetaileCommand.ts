module betInfo
{
	export class BetDetaileCommand extends CommandBase
	{
        /**
         * 注册消息
         */
		public register(): void
		{
			this.facade.registerCommand(RequestsNotify.betdetails, BetDetaileCommand);
		}

		public execute(notification: puremvc.INotification): void
		{
			super.execute(notification);
			let data: BetDetaileData = notification.getBody();
			if (data.Data.length == 0)
			{ 
				game.AppFacade.instance.sendNotification(GameNotify.BET_DETAILE_OVER, data);
			}
			else
			{
				game.AppFacade.instance.sendNotification(GameNotify.BET_DETAILE, data);
			}
		}
	}
	export interface betDetailItemData
	{
		"name": string,
		"qy": string[],
		"money": string
	}

	export interface BetDetaileData extends AllResponseData
	{
		Data: betDetailItemData[]
	}

}