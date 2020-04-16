module RegionDataRequest
{
	export function sendHomePageData(): void
	{
		let content = { issue: AllData.instance.getCurrentIssueNumber().toString() };
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.getbetm, content);
	}
}