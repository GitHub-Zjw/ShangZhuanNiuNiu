/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module password
{

	export class PasswordUI extends UIComponent
	{

		public isShowTip: fairygui.Controller;
		public closeBtn2: fairygui.GButton;
		public cancelBtn: fairygui.GButton;
		public okBtn: fairygui.GButton;
		public nameTxt: fairygui.GTextField;
		public closeBtn: fairygui.GButton;
		public selectBtn: fairygui.GButton;
		public centelList: fairygui.GList;
		public cancleBtn2: fairygui.GButton;
		public okBtn2: fairygui.GButton;
		public passwordTxt: fairygui.GTextInput;

		public fromTxt: fairygui.GTextField;
		public transferTxt: fairygui.GTextField;
		public memoTxt: fairygui.GTextField;
		public qualityTxt: fairygui.GTextField;
		public toTxt: fairygui.GTextField;

		public static URL: string = "ui://g9x2ap23ydsh0";

		public static createInstance(): PasswordUI
		{
			return <PasswordUI><any>(fairygui.UIPackage.createObject("password", "PasswordUI"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
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

			let conel = <fairygui.GComponent><any>this.centelList.getChildAt(0);


			this.fromTxt = <fairygui.GTextField><any>(conel.getChild("fromTxt"));
			this.transferTxt = <fairygui.GTextField><any>(conel.getChild("transferTxt"));
			this.memoTxt = <fairygui.GTextField><any>(conel.getChild("memoTxt"));
			this.qualityTxt = <fairygui.GTextField><any>(conel.getChild("qualityTxt"));
			this.toTxt = <fairygui.GTextField><any>(conel.getChild("toTxt"));
		}

		private _isSelect: boolean = false;
		private _pwd: egret.TextField;
		protected initView(): void
		{
			super.initView();
			AgRequest.sendAgRequest();
			this.passwordTxt.password = true;
			this.passwordTxt.touchable = false;

		}

		private addPwd(): void
		{
			this._pwd = new egret.TextField();
			let clientWidth = document.documentElement.clientWidth;
			let clientHeight = document.documentElement.clientHeight;
			this._pwd.textColor = 0xffffff;
			this._pwd.width = 323;
			this._pwd.height = 35;
			this._pwd.size = 26;
			this._pwd.x = this.passwordTxt.x + GameLayerManager.gameLayer().x;
			this._pwd.y = this.passwordTxt.y + 3;
			this._pwd.textAlign = egret.VerticalAlign.MIDDLE;
			this._pwd.type = egret.TextFieldType.INPUT;
			this._pwd.inputType = egret.TextFieldInputType.PASSWORD;
			this._pwd.displayAsPassword = true;
			this._pwd.addEventListener(egret.Event.FOCUS_IN, this.focusIn, this);
			this._pwd.addEventListener(egret.Event.FOCUS_OUT, this.focusOut, this);
			this._pwd.maxChars = 15;
			GameLayerManager.gameLayer().addPwd(this._pwd);
		}

		public hidePwd(): void
		{
			if (this._pwd)
			{
				this._pwd.removeEventListener(egret.Event.FOCUS_IN, this.focusIn, this);
				this._pwd.removeEventListener(egret.Event.FOCUS_OUT, this.focusOut, this);
				GameLayerManager.gameLayer().hidePwd(this._pwd);
				this._pwd = null;
			}
		}

		private focusIn(): void
		{
			this.passwordTxt.visible = false;
		}

		private focusOut(): void
		{
			if (this._pwd.text == "")
			{
				this.passwordTxt.visible = true;
			}
			else
			{
				this.passwordTxt.visible = false;
			}
		}

		protected onButtonClick(name: string): void
		{
			switch (name)
			{
				case "selectBtn":
					this._isSelect = this.selectBtn.selected;
					break;
				case "okBtn":
					this.isShowTip.setSelectedPage("false");
					this.addPwd();
					break;
				case "cancelBtn":
				case "closeBtn":
					game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_INPUT_PASSWORD);
					break;
				case "okBtn2":
					PassWordRequest.sendPassWordRequest(this._pwd.text);
					AllData.instance.IsNoShowPwd = this._isSelect;
					game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_INPUT_PASSWORD);
					break;
				case "cancleBtn2":
					this.hidePwd();
					this.passwordTxt.text = "";
					this.isShowTip.setSelectedPage("true");
					break;
			}
		}

		public refreshView(data: game.AgData): void
		{
			this.isShowTip.setSelectedPage("true");
			this.toTxt.text = data.Data.to;
			this.nameTxt.text = data.Data.name;
			this.qualityTxt.text = AllData.instance.getMyAllBet() + "HDAG";
			this.transferTxt.text = data.Data.to;
			this.fromTxt.text = AllData.instance.Sunlight;
			this.memoTxt.text = "上庄牛牛";
		}

		public dispose(): void
		{
			this.hidePwd();
			super.dispose();
		}
	}
}