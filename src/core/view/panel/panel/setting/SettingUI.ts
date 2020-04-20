/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module setting
{

	export class SettingUI extends UIComponent
	{

		public closeBtn: fairygui.GButton;
		public bgBtn: fairygui.GButton;
		public effectBtn: fairygui.GButton;
		public cencalBtn: fairygui.GButton;
		public okBtn: fairygui.GButton;

		public static URL: string = "ui://duwd3xqfri2z0";

		public static createInstance(): SettingUI
		{
			return <SettingUI><any>(fairygui.UIPackage.createObject("setting", "SettingUI"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
			this.bgBtn = <fairygui.GButton><any>(this.getChild("bgBtn"));
			this.effectBtn = <fairygui.GButton><any>(this.getChild("effectBtn"));
			this.cencalBtn = <fairygui.GButton><any>(this.getChild("cencalBtn"));
			this.okBtn = <fairygui.GButton><any>(this.getChild("okBtn"));
		}

		private _originalBgOpen: boolean;
		private _originalEfOpen: boolean;
		protected initView(): void
		{
			super.initView();
			this._originalBgOpen = core.SoundUtils.getInstance().MusicEnable;
			this._originalEfOpen = core.SoundUtils.getInstance().EffectEnable;
			this.updateView();
		}

		private updateView(): void
		{
			this.bgBtn.selected = this._originalBgOpen;
			this.effectBtn.selected = this._originalEfOpen;
		}

		protected onButtonClick(name: string): void
		{
			switch (name)
			{
				case "closeBtn":
				case "cencalBtn":
					core.SoundUtils.getInstance().setMusicEnable(this._originalBgOpen);
					core.SoundUtils.getInstance().setEffectEnable(this._originalEfOpen);
				case "okBtn":
					game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_SETTING);
					break;
				case "bgBtn":
					let isBgOpen = this.bgBtn.selected;
					core.SoundUtils.getInstance().setMusicEnable(isBgOpen);
					if (isBgOpen)
					{
						core.SoundUtils.getInstance().playSound(1, 0);
					}
					break;
				case "effectBtn":
					let isEfOpen = this.effectBtn.selected;
					core.SoundUtils.getInstance().setEffectEnable(isBgOpen);
					break;
			}
		}
	}
}