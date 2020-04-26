/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game
{

	export class TipCom extends UIComponent
	{

		public title: fairygui.GTextField;

		public static URL: string = "ui://v1h0uw6cx04y5g";

		public static createInstance(): TipCom
		{
			return <TipCom><any>(fairygui.UIPackage.createObject("game", "TipCom"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.title = <fairygui.GTextField><any>(this.getChild("title"));
		}

		protected initView(): void
		{
			super.initView();
			if (this._text)
			{
				this.title.text = this._text;
			}
		}

		private _text: string;

		public set text(value: string)
		{
			if (this.title)
			{
				this.title.text = value;
			}
			else
			{
				this._text = value;
			}
		}

		public get text(): string
		{
			return this._text;
		}
	}
}