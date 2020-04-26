/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module betInfo
{

	export class CurrentBetItem extends UIComponent
	{

		public htCol: fairygui.Controller;
		public hxCol: fairygui.Controller;
		public mhCol: fairygui.Controller;
		public fkCol: fairygui.Controller;
		public nameTxt: fairygui.GTextField;
		public hdagTxt: fairygui.GTextField;

		public static URL: string = "ui://04s6lcaqpnt1e";

		public static createInstance(): CurrentBetItem
		{
			return <CurrentBetItem><any>(fairygui.UIPackage.createObject("betInfo", "CurrentBetItem"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.htCol = this.getController("htCol");
			this.hxCol = this.getController("hxCol");
			this.mhCol = this.getController("mhCol");
			this.fkCol = this.getController("fkCol");
			this.nameTxt = <fairygui.GTextField><any>(this.getChild("nameTxt"));
			this.hdagTxt = <fairygui.GTextField><any>(this.getChild("hdagTxt"));
		}

		public setData(data: betDetailItemData)
		{
			switch (data.wz)
			{
				case "ht":
					this.htCol.setSelectedIndex(1);
					break;
				case "hx":
					this.hxCol.setSelectedIndex(1);
					break;
				case "mh":
					this.mhCol.setSelectedIndex(1);
					break;
				case "fk":
					this.fkCol.setSelectedIndex(1);
					break;
			}
			this.nameTxt.text = data.name;
			this.hdagTxt.text = data.money;
		}
	}
}