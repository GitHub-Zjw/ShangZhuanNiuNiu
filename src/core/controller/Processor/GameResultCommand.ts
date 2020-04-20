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

			"pe": {
				"l1": {
					"pe": [
						"fk3"
					],
					"niu": number
					"ten": [
						"mh10"
					]
				},
				"l2": {

					"pe": [
						"mh3"
					],
					"niu": number
					"ten": string[],
					"win": number
				},
				"l3": {

					"pe": [
						"fk8"
					],
					"niu": number
					"win": number
					"ten": [
						"fk8"
					]
				},
				"l4": {

					"pe": [
						"ht12"
					],
					"niu": number
					"win": number
					"ten": [
						"ht12"
					]
				},
				"l5": {

					"pe": [
						"mh1"
					],
					"niu": number
					"win": number
					"ten": [
						"mh1"
					]
				}
			},
			"inc": number
			"kj": {

				"ht": number
				"hx": number
				"mh": number
				"fk": number
			},
			"vill": number
		}
	}
}