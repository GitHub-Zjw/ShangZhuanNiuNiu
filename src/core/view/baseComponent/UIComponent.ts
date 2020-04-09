class UIComponent extends fgui.GComponent
{
	public btnList: fgui.GButton[];
	public constructor()
	{
		super();
		this.btnList = [];
	}
	/**
	 * 根据类型获取子物体
	 */
	public contains(com: any): fairygui.GObject
	{

		let index = this.getChildIndex(com);
		if (index >= 0)
		{
			return this.getChildAt(index);
		}
		else
		{
			return null;
		}
	}

	protected onConstruct(): void
	{
		super.onConstruct();
		this.initView();
	}

	protected initView(): void
	{
		let len = this.numChildren;
		for (let i = 0; i < len; i++)
		{
			let com = this.getChildAt(i);
			if (com instanceof fairygui.GButton)
			{
				com.addClickListener(this.onClick, this);
				this.btnList.push(com);
			}
		}
	}

	private onClick(e: Event): void
	{
		let btn: UIButton = <UIButton><any>e.currentTarget;
		this.onButtonClick(btn.name);
	}

	protected onButtonClick(btnName: string): void
	{
	}

	public dispose(): void
	{
		super.dispose();
	}
}