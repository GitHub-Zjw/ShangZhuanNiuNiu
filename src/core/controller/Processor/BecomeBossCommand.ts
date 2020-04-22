module becomeBoss
{
	export class BecomeBossCommand extends CommandBase
	{
        /**
         * 注册消息
         */
		public register(): void
		{
			this.facade.registerCommand(RequestsNotify.sideline_cbookmaker, BecomeBossCommand);
		}

		public execute(notification: puremvc.INotification): void
		{
			super.execute(notification);
			let data: CbookmakerData = notification.getBody();
			AllData.instance.setBecomeBossData(data);
			game.AppFacade.instance.sendNotification(GameNotify.GET_BECOME_DATA);
		}
	}
	/**庄家列表 */
	export interface CbookmakerData extends AllResponseData
	{
		Data:
		{
			money: string,
			dtime: number,
			issue: number,
			shang: {
				tr: number,
				ye: string,
				name: string,
				pro: string
			}[],
			yuy: {
				money: string,
				type: string,
				name: string
			}[],
			myzmoney: string,
			myume: string
		}
	}

	export class BossChangeCommand extends CommandBase
	{
        /**
         * 注册消息
         */
		public register(): void
		{
			this.facade.registerCommand(RequestsNotify.sideline_bincome, BossChangeCommand);
		}

		public execute(notification: puremvc.INotification): void
		{
			super.execute(notification);
			let data: BincomeData = notification.getBody();
			AllData.instance.setBossChangeData(data);
			game.AppFacade.instance.sendNotification(GameNotify.GET_BOSS_CHANGE_DATA);
		}
	}

	/**庄家收益 */
	export interface BincomeData extends AllResponseData
	{
		Data:
		{
			sum: number
			list:
			{
				issue: number
				time: string
				win: number
				yue: string
			}[]
		}
	}

	/**
	 * 本人状态改变
	 */
	export class ChangeStateCommand extends CommandBase
	{
        /**
         * 注册消息
         */
		public register(): void
		{
			this.facade.registerCommand(RequestsNotify.wrte_myon, ChangeStateCommand);
			this.facade.registerCommand(RequestsNotify.wrte_myunder, ChangeStateCommand);
			this.facade.registerCommand(RequestsNotify.wrte_myadj, ChangeStateCommand);
			this.facade.registerCommand(RequestsNotify.sideline_cancelvillage, ChangeStateCommand);
			this.facade.registerCommand(RequestsNotify.sideline_canceltune, ChangeStateCommand);
			this.facade.registerCommand(RequestsNotify.sideline_cancelunder, ChangeStateCommand);
		}

		public execute(notification: puremvc.INotification): void
		{
			super.execute(notification);
			let data: AllResponseData = notification.getBody();
			TipsUtils.showTipsFromCenter(data.Msg);
			if (data.Code == 400)
			{
				return;
			}
			let bossData = AllData.instance.getBecomeBossData();
			switch (notification.getName())
			{
				case RequestsNotify.wrte_myon:
					bossData.isSoonBoss = true;
					break;
				case RequestsNotify.wrte_myunder:
					bossData.isSoonDown = true;
					break;
				case RequestsNotify.wrte_myadj:
					bossData.isSoonChange = true;
					break;
				case RequestsNotify.sideline_cancelvillage:
					bossData.isSoonBoss =false;
					break;
				case RequestsNotify.sideline_canceltune:
					bossData.isSoonChange = false;
					break;
				case RequestsNotify.sideline_cancelunder:
					bossData.isSoonDown = false;
					break;
			}

			game.AppFacade.instance.sendNotification(GameNotify.MY_STATE_CHANGE);
		}
	}
}