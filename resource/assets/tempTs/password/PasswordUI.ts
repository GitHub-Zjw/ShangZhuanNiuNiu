/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module password {

	export class PasswordUI extends UIComponent {

		public isShowTip:fairygui.Controller;
		public closeBtn2:fairygui.GButton;
		public cancelBtn:fairygui.GButton;
		public okBtn:fairygui.GButton;
		public nameTxt:fairygui.GTextField;
		public closeBtn:fairygui.GButton;
		public selectBtn:fairygui.GButton;
		public centelList:fairygui.GList;
		public cancleBtn2:fairygui.GButton;
		public okBtn2:fairygui.GButton;
		public passwordTxt:fairygui.GTextInput;

		public static URL:string = "ui://g9x2ap23ydsh0";

		public static createInstance():PasswordUI {
			return <PasswordUI><any>(fairygui.UIPackage.createObject("password","PasswordUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.isShowTip = this.getController("isShowTip");
			this.closeBtn2 = <fairygui.GButton><any>(this.getChild("closeBtn2"));
			this.cancelBtn = <fairygui.GButton><any>(this.getChild("cancelBtn"));
			this.okBtn = <fairygui.GButton><any>(this.getChild("okBtn"));
			this.nameTxt = <fairygui.GTextField><any>(this.getChild("nameTxt"));
			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
			this.selectBtn = <fairygui.GButton><any>(this.getChild("selectBtn"));
			this.centelList = <fairygui.GList><any>(this.getChild("centelList"));
			this.cancleBtn2 = <fairygui.GButton><any>(this.getChild("cancleBtn2"));
			this.okBtn2 = <fairygui.GButton><any>(this.getChild("okBtn2"));
			this.passwordTxt = <fairygui.GTextInput><any>(this.getChild("passwordTxt"));
		}
	}
}