module becomeBoss
{
	export function sendBecomeBossRequest(): void
	{
		let content = { issue: AllData.instance.getCurrentIssueNumber().toString() };
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.sideline_cbookmaker, content);
	}

	/**
	 * 庄家收益
	 */
	export function sendBossChangeRequest(timeStr: string): void
	{
		let content = { time: timeStr };
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.sideline_bincome, content);
	}

	/**预约上庄 */
	export function wantUpBoss(money: string): void
	{
		let content = { money: money };
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.wrte_myon, content);
	}

	/**预约下庄 */
	export function wantDownBoss(): void
	{
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.wrte_myunder, null);
	}

	/**预约调仓 */
	export function wantChangeWareHouse(addMoney: string, reduceMoney: string): void
	{
		let content = {add: addMoney, less: reduceMoney};
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.wrte_myadj, content);
	}

	/**取消预约上庄 */
	export function cancelUpBoss(): void
	{
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.sideline_cancelvillage, null);
	}

	/**取消预约调仓 */
	export function cancelChangeWareHouse(): void
	{
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.sideline_canceltune, null);
	}

	/**取消预约下庄 */
	export function cancelDownBoss(): void
	{
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.sideline_cancelunder, null);
	}
}