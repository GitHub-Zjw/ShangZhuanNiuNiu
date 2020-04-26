/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module betInfo {

	export class TodayWinnerItem extends UIComponent {

		public c1:fairygui.Controller;
		public cardResultCom:CardResultCom;
		public htImage:fairygui.GImage;
		public hxImage:fairygui.GImage;
		public mhImage:fairygui.GImage;
		public fkImage:fairygui.GImage;
		public nameTxt:fairygui.GTextField;
		public hdagTxt:fairygui.GTextField;
		public rankTxt:fairygui.GTextField;

		public static URL:string = "ui://04s6lcaqpnt1g";

		public static createInstance():TodayWinnerItem {
			return <TodayWinnerItem><any>(fairygui.UIPackage.createObject("betInfo","TodayWinnerItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.c1 = this.getController("c1");
			this.cardResultCom = <CardResultCom><any>(this.getChild("cardResultCom"));
			this.htImage = <fairygui.GImage><any>(this.getChild("htImage"));
			this.hxImage = <fairygui.GImage><any>(this.getChild("hxImage"));
			this.mhImage = <fairygui.GImage><any>(this.getChild("mhImage"));
			this.fkImage = <fairygui.GImage><any>(this.getChild("fkImage"));
			this.nameTxt = <fairygui.GTextField><any>(this.getChild("nameTxt"));
			this.hdagTxt = <fairygui.GTextField><any>(this.getChild("hdagTxt"));
			this.rankTxt = <fairygui.GTextField><any>(this.getChild("rankTxt"));
		}

		public setData(index: number,data: BigWinnerItemData)
		{
			if (index < 5)
			{
				this.c1.setSelectedIndex(index);
			}
			else
			{
				this.c1.setSelectedIndex(5);
				this.rankTxt.text = (index + 1).toString();
			}

			switch (data.wz)
			{
				case "ht":
					this.htImage.visible = true;
					break;
				case "hx":
					this.hxImage.visible = true;
					break;
				case "mh":
					this.mhImage.visible = true;
					break;
				case "fk":
					this.fkImage.visible = true;
					break;
			}
			let resultType = AllData.instance.getCardResultByNumber(data.niu);
			this.cardResultCom.setData(resultType);
			this.hdagTxt.text = data.money;
			this.nameTxt.text = data.name;
		}
	}
}