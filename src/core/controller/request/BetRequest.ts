module BetRequest
{
	export function sendRequest(type: EnumerationType.CardsType): void
	{
		let content = { 
			whse: AllData.instance.getCurrentIssueNumber().toString(),
			order:{
				type: ""
			}
		};
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.showcattle_getresult, content);
	}
}