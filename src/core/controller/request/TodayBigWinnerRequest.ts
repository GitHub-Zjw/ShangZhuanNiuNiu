module TodayBigWinnerRequest
{
	export function sendTodayBigWinnerRequest(page: number): void
	{
		let content = { page: page };
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.bigwin, content);
	}
}