module HomePageRequest
{
	export function sendHomePageData(): void
	{
		let content = { whse: AllData.instance.getCurrentIssueNumber().toString() };
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.Nuserinfo, content);
	}

	/**一轮游戏结算 */
	export function todayBigWinnerRequest(): void
	{
		let content = { whse: AllData.instance.getCurrentIssueNumber().toString() };
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.showcattle_calculation, content);
	}


	/**本人投注 */
	export function myBetRequest(ball: game.BetBallCom[][]): void
	{
		let len = ball.length;
		let isNeedSend: boolean = false;
		let data: {
			type: string,
			money: string,
			betmarr: string
		}
		let datas: {
			type: string,
			money: string,
			betmarr: string
		}[] = [];
		let cardStr = ["ht", "hx", "mh", "fk"];
		for (let i = 0; i < 4; i++)
		{
			if (ball[i] && ball[i].length > 0)
			{
				let lenBalli = ball[i].length;
				let sumMoney = 0;
				let betMarrs = "";
				for (let k = 0; k < lenBalli; k++)
				{
					let index = ball[i][k].SourceIndex;
					let money = AllData.instance.BallValues[index];
					sumMoney += money;
					if (betMarrs.length > 0)
					{
						betMarrs += ",";
					}
					betMarrs += money.toString();
				}
				if (sumMoney > 0)
				{
					data = { money: sumMoney.toString(), type: cardStr[i], betmarr: betMarrs };
					datas.push(data);
					isNeedSend = true;
				}
			}
		}
		if (!isNeedSend)
		{
			TipsUtils.showTipsFromCenter("还未下注");
			return;
		}
		let content = {
			order: JSON.stringify(datas)
		}
		game.AppFacade.getInstance().HttpManager.request(RequestsNotify.movecattle_calculation, content);
	}
}