module ErgodicUtils
{
	/**
	 * 获取一个组件component上的所有按钮
	 * 不会遍历子组件，只会便利到eui.group
	 */
	export function getAllButton(com: UIComponent): UIButton[]
	{
		let returnValue: UIButton[] = [];
		let childNum: number = com.numChildren;
		for (let i = 0; i < childNum; i++)
		{
			let obj = com.getChildAt(i);
			if (obj instanceof UIButton)
			{
				returnValue.push(obj);
			}
		}
		return returnValue;
	}

}