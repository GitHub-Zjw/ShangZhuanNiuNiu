/**
	* 注册mediator
	* by dily
	* (c) copyright 2014 - 2035
	* All Rights Reserved. 
	*/
module game
{

	export class ViewPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand
	{

		public constructor()
		{
			super();
		}
		public execute(notification: puremvc.INotification): void
		{
			var main = GameLayerManager.gameLayer().panelLayer;
			this.facade.registerMediator(new gameRule.GameRuleMediator());
			this.facade.registerMediator(new boosResult.BoosResultMediator());
			this.facade.registerMediator(new setting.SettingMediator());
			this.facade.registerMediator(new betInfo.BetInfoMediator());
			this.facade.registerMediator(new becomeBoss.BecomeBossMediator());
		}
	}
}