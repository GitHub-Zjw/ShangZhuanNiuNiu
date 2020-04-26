module game
{
	export class GameResultCommand extends CommandBase
	{
        /**
         * 注册消息
         */
		public register(): void
		{
			this.facade.registerCommand(RequestsNotify.showcattle_getresult, GameResultCommand);
		}

		public execute(notification: puremvc.INotification): void
		{
			super.execute(notification);
			let data: ServerResultData = notification.getBody();
			if (data.Code == 400)
			{
				TipsUtils.showTipsFromCenter(data.Msg);
				return;
			}
			AllData.instance.setResultData(data);
			game.AppFacade.instance.sendNotification(GameNotify.GAME_RESULT);
		}

	}
	export interface ServerResultData extends AllResponseData
	{
		Data:
		{
			"hand":  //【手牌信息】 数组长度 5
			{
				"pe": string[], //五张扑克牌的号码<array>
				/**
0：没牛
1：牛一
.....
10：牛牛

11：顺子牛
12：五花牛
13：同花牛
14：葫芦牛
15：炸弹牛
16：五小牛
17：同花顺
				 */
				"niu": number,//,手牌类型 牛一、牛二//////. <number>
				"win": number,//,5：没赢 8：赢 用于判断是否需要亮 <number>
				"be": number,//,该数据，未使用到 <number>
				"ten": number[], // 需要向上滑动的牌<array>
			}[],
			"hash": {//【哈希】<object>
				"k_1": {//<object>
					"ar": number, //10298785,区块号码 <number>
					"hr": string, //"//.39ab237dd6",哈希值 <string>
					"tr": string, //"14:19:15"时间 <string>
				},
				"k_2": {//<object>
					"ar": string,// 10298784,// <number>
					"hr": string, //"//.0981d3e362",// <string>
					"tr": string,//"14:19:12"// <string>
				}
			},
			"lucky": string,//,被选中的区块索引 <string>
			"inc": number, // 1970,本局庄家收益 如果是0则不显示，其他状态要显示 <number>
			"unc": number;
			"kj": {//谁输谁赢数据
				"ht": number, //8,黑桃 =5：输 =8赢 <number>
				"hx": number, //5,红心 =5：输 =8赢 <number>
				"mh": number,//8,梅花 =5：输 =8赢 <number>
				"fk": number, //8,方块 =5：输 =8赢 <number>
				"zj": number, //5庄家 =5：输 =8赢 <number>
			},
			"vill": number,// 1,庄家    通赔     通杀 1：既不是通赔，也不是通杀 4：庄家通赔 6：庄家通杀 <number>
			"dyj":  //【本局大赢家】<array>
			{
				"name": string,//"cekdkdk",名称 <string>
				"bonus": string//"1970.00"金额 <string>
			}[]
		}
	}
}