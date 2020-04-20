module BetDetaileRequest
{
	export function sendBetDetaileRequest(page: number): void
	{
		let content = { page: page };
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.betdetails, content);
	}
}