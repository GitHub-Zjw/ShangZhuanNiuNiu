module GameResultRequest
{
	export function sendRequest(): void
	{
		let content = { whse: AllData.instance.HomePageData.ju };
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.showcattle_getresult, content);
	}
}