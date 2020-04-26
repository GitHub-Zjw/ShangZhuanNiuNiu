module TodayBigWinnerRequest
{
	export function sendTodayBigWinnerRequest(page?: number): void
	{
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.showcattle_winner, null);
	}
}