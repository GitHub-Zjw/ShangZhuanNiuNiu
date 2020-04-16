module game
{
	export class GameResultCommand extends CommandBase
	{
        /**
         * 注册消息
         */
		public register(): void
		{
			this.facade.registerCommand(RequestsNotify.getresult, GameResultCommand);
		}

		public execute(notification: puremvc.INotification): void
		{
			super.execute(notification);
			let data: ServerResultData = notification.getBody();
			if (data.Code == 400)
			{
				TipsUtils.showTipsFromCenter(data.Msg);
				return;
			}
			AllData.instance.setResultData(data);
			game.AppFacade.instance.sendNotification(GameNotify.GAME_RESULT);
		}

	}
	export interface ServerResultData extends AllResponseData
	{
		Data:
		{
			//todo
		}
	}
}