module GameResultRequest
{
	export function sendRequest(): void
	{
		let content = { whse: AllData.instance.getCurrentIssueNumber().toString() };
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.getresult, content);
	}
}