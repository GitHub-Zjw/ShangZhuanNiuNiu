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
		}

		public execute(notification: puremvc.INotification): void
		{
			super.execute(notification);
			let data: NuserData = notification.getBody();
			if (data.Code == 400)
			{
				TipsUtils.showTipsFromCenter(data.Msg+"");
				return;
			}
			AllData.instance.setHomePageData(data);
			game.AppFacade.instance.sendNotification(GameNotify.HOME_PAGE_DATA);
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
			/**种子MD5 */
			m5: string,
			/**区块 */
			cl: number
		}
	}
}