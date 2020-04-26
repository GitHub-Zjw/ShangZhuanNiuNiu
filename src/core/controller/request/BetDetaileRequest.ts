module BetDetaileRequest
{
	export function sendBetDetaileRequest(page?: number): void
	{
		let content = { whse: AllData.instance.HomePageData.ju };
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.showcattle_Betting, content);
	}
}