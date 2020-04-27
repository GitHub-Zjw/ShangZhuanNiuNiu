module AgRequest
{
	export function sendAgRequest(): void
	{
		let content = {type: "niuniublock"}
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.trainfo, content);
	}
}