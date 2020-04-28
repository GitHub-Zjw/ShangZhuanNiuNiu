module becomeBoss
{
	export class BecomeBossMediator extends BaseMediator
	{
		public constructor(viewComponent: any = null)
		{
			super(BecomeBossMediator.NAME, viewComponent);
		}
		protected moduleName = "becomeBoss";

		public static NAME: string = "BecomeBossMediator";

		public listNotificationInterests(): Array<any>
		{
			return [
				PanelNotify.OPEN_LINE_UP,
				PanelNotify.OPEN_BECOME_BOSS,
				PanelNotify.OPEN_BECOME_BOSS_RULE,
				PanelNotify.OPEN_WANT_TO_CHANGE,
				PanelNotify.CLOSE_LINE_UP,
				PanelNotify.CLOSE_BECOME_BOSS,
				PanelNotify.CLOSE_BECOME_BOSS_RULE,
				PanelNotify.CLOSE_WANT_TO_CHANGE,
				PanelNotify.ON_RESULT_AMI_PLAY,

				GameNotify.GET_BECOME_DATA,
				GameNotify.GET_BOSS_CHANGE_DATA,
				GameNotify.MY_STATE_CHANGE
			]
		}

		private _needShow: string;
		private _lineUpBecomeBossUI: LineUpBecomeBossUI;
		private _ruleUI: RuleUI;
		private _wantToChangeUI: WantToChangeUI;
		private _becomeBossUI: BeconmeBossUI;

		public handleNotification(notification: puremvc.INotification): void
		{
			var data: any = notification.getBody();//携带数据
			this._needShow = notification.getName();
			switch (notification.getName())
			{
				case PanelNotify.OPEN_LINE_UP:
				case PanelNotify.OPEN_BECOME_BOSS:
				case PanelNotify.OPEN_BECOME_BOSS_RULE:
				case PanelNotify.OPEN_WANT_TO_CHANGE:
					this.addRES(this.moduleName);
					break;
				case PanelNotify.CLOSE_LINE_UP:
					this.hideLineUpUI();
					break;
				case PanelNotify.CLOSE_BECOME_BOSS:
					this.hideBecomeBossUI();
					break;
				case PanelNotify.CLOSE_BECOME_BOSS_RULE:
					this.hideRuleUI();
					break;
				case PanelNotify.CLOSE_WANT_TO_CHANGE:
					this.hideWantToChangeUI();
					break;
				case PanelNotify.ON_RESULT_AMI_PLAY:
					this.hideLineUpUI();
					this.hideBecomeBossUI();
					this.hideWantToChangeUI();
					this.hideRuleUI();
					break;
				case GameNotify.GET_BECOME_DATA:
					if (this._becomeBossUI)
					{
						this._becomeBossUI.refreshBecomeBossView();
					}
					break;
				case GameNotify.GET_BOSS_CHANGE_DATA:
					if (this._becomeBossUI)
					{
						this._becomeBossUI.refreshBossChangeView();
					}
					break;
				case GameNotify.MY_STATE_CHANGE:
					if (this._becomeBossUI)
					{
						this._becomeBossUI.refreshChangeState();
					}
					break;
			}
		}

		protected onResIsReady(isFirst: boolean): void
		{
			if (isFirst)
			{
				Binder.bindAll();
			}
			switch (this._needShow)
			{
				case PanelNotify.OPEN_LINE_UP:
					this.showLineUpUI();
					break;
				case PanelNotify.OPEN_BECOME_BOSS:
					this.showBecomeBossUI();
					break;
				case PanelNotify.OPEN_BECOME_BOSS_RULE:
					this.showRuleUI();
					break;
				case PanelNotify.OPEN_WANT_TO_CHANGE:
					this.showWantToChangeUI();
					break;
			}
		}

		private showRuleUI(): void
		{
			this._ruleUI = RuleUI.createInstance();
			PopUpManager.addPopUp(this._ruleUI, false, 0, 0, 0, false);
		}

		private hideRuleUI(): void
		{
			if (this._ruleUI)
			{
				PopUpManager.removePopUp(this._ruleUI);
				// this._ruleUI.dispose();
				this._ruleUI = null;
			}
		}

		private showBecomeBossUI(): void
		{
			if (this._becomeBossUI == null)
			{
				this._becomeBossUI = BeconmeBossUI.createInstance();
			}
			PopUpManager.addPopUp(this._becomeBossUI, false, 0, 0, 0, false);
		}

		private hideBecomeBossUI(): void
		{
			if (this._becomeBossUI)
			{
				PopUpManager.removePopUp(this._becomeBossUI);
				// this._becomeBossUI.dispose();
				this._becomeBossUI = null;
				this.destroy();
			}
		}

		private showLineUpUI(): void
		{
			this._lineUpBecomeBossUI = LineUpBecomeBossUI.createInstance();
			PopUpManager.addPopUp(this._lineUpBecomeBossUI, false, 0, 0, 0, false);
		}

		private hideLineUpUI(): void
		{
			if (this._lineUpBecomeBossUI)
			{
				PopUpManager.removePopUp(this._lineUpBecomeBossUI);
				// this._lineUpBecomeBossUI.dispose();
				this._lineUpBecomeBossUI = null;
			}
		}

		private showWantToChangeUI(): void
		{
			this._wantToChangeUI = WantToChangeUI.createInstance();
			PopUpManager.addPopUp(this._wantToChangeUI, false, 0, 0, 0, false);
		}

		private hideWantToChangeUI(): void
		{
			if (this._wantToChangeUI)
			{
				PopUpManager.removePopUp(this._wantToChangeUI);
				// this._wantToChangeUI.dispose();
				this._wantToChangeUI = null;
			}
		}
	}
}