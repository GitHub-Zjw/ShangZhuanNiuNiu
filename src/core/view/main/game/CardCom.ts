/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game
{

	export class CardCom extends UIComponent
	{

		public iconLoader: fairygui.GLoader;

		public static URL: string = "ui://v1h0uw6clmsy3t";

		public static createInstance(): CardCom
		{
			return <CardCom><any>(fairygui.UIPackage.createObject("game", "CardCom"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.iconLoader = <fairygui.GLoader><any>(this.getChild("iconLoader"));
		}

		private _sourceName: string;
		/**
		 * 资源名
		 */
		public set SourceName(value: string)
		{
			this._sourceName = value;
			this.iconLoader.url = AllData.instance.URL_Str + value;
		}

		public get SourceName(): string
		{
			return this._sourceName;
		}
	}
}