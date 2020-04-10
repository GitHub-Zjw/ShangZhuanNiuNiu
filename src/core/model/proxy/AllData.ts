class AllData extends egret.EventDispatcher
{
	private static _info: AllData;
	public static get instance(): AllData
	{
		if (AllData._info == null)
		{
			AllData._info = new AllData();
		}
		return AllData._info;
	}

}