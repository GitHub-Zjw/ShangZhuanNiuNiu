module HomePageRequest
{
	export function sendHomePageData(): void
	{
		let content = { whse: AllData.instance.getCurrentIssueNumber().toString() };
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.Nuserinfo, content);
	}
}