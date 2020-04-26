module game
{
	export class HomePageCommand extends CommandBase
	{
        /**
         * 注册消息
         */
		public register(): void
		{
			this.facade.registerCommand(RequestsNotify.Nuserinfo, HomePageCommand);
			this.facade.registerCommand(RequestsNotify.movecattle_calculation, HomePageCommand);
			this.facade.registerCommand(RequestsNotify.showcattle_calculation, HomePageCommand);
		}

		public execute(notification: puremvc.INotification): void
		{
			super.execute(notification);
			let data = notification.getBody();
			if (data.Code == 400)
			{
				TipsUtils.showTipsFromCenter(data.Msg + "");
				return;
			}
			switch (notification.getName())
			{
				case RequestsNotify.Nuserinfo:
					AllData.instance.setHomePageData(data);
					game.AppFacade.instance.sendNotification(GameNotify.HOME_PAGE_DATA);
					break;
				case RequestsNotify.movecattle_calculation:
					AllData.instance.setPlayerBetSucceed();
					game.AppFacade.instance.sendNotification(GameNotify.BET);
					break;
				case RequestsNotify.showcattle_calculation:
					game.AppFacade.instance.sendNotification(PanelNotify.OPEN_BOSS_RESULT, data);
					break;
			}
		}
	}

	export interface NuserData extends AllResponseData
	{
		Data:
		{
			/**庄家余额 */
			nest: number,
			/**本轮倒计时 */
			time: number,
			/**当前用户余额 */
			hdag: string,
			/**本轮局数编号 */
			ju: string,
			/**本局倒计时 */
			jtime: number,
			/**坐庄人数 */
			pe: number,
			/**最高可投注金额 */
			ca: string,
			/**已投注金额 */
			bm: number,
			/**用户状态 */
			st: number,
			// /**种子MD5 */
			// m5: string,
			// /**区块 */
			// cl: number
			/**庄家的赢钱记录   5代表输钱  8代表赢钱 */
			zjw: number[]
			/**用户投注金额 */
			bem: number;
		}
	}

	export interface BossTimeOverData extends AllResponseData
	{
		Data: {
			"money": number,//0,本轮庄家盈亏 <number>
			"betmoney": number, //0,投入余额 <number>
			"winmoney": number//0盈亏 <number>
		}
	}
}