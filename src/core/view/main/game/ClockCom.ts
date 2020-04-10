/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game
{

	export class ClockCom extends UIComponent
	{

		public valueTxt: fairygui.GTextField;

		public static URL: string = "ui://v1h0uw6csrv91e";

		public static createInstance(): ClockCom
		{
			return <ClockCom><any>(fairygui.UIPackage.createObject("game", "ClockCom"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.valueTxt = <fairygui.GTextField><any>(this.getChild("valueTxt"));
		}


		private _timer: egret.Timer;
		private _surplusTime: number;
		private _call: Function;
		private _thisObj: Object;
		/**
		 * 开始计时
		 */
		public starTiming(timeNum: number = 25, call: Function, thisObj: Object): void
		{
			if (timeNum < 0)
			{
				console.warn("开始时间过小");
				return;
			}
			this.visible = true;
			this._surplusTime = timeNum;
			this.valueTxt.text = this._surplusTime.toString();
			this.startTimer(1000);
			this._call = call;
			this._thisObj = thisObj;
		}

		private startTimer(time: number): void
		{
			if (this._timer == null)
			{
				this._timer = new egret.Timer(time);
				this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
			}
			this._timer.start();
			this.onTimer(null);
		}

		private removeTimer(): void
		{
			if (this._timer)
			{
				this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
				this._timer.stop();
				this._timer = null;
			}
		}

		private onTimer(e: egret.TimerEvent): void
		{
			this._surplusTime--;
			if (this._surplusTime < 0)
			{
				this.visible = false;
				AllData.instance.dispatchEventWith(MainNotify.STOP_BETS);
				if(this._call)
				{
					this._call.apply(this._thisObj);
				}
				this.removeTimer();
			}
			else
			{
				this.valueTxt.text = this._surplusTime.toString();
				// if (this._surplusTime == 3)
				// {
				// 	core.SoundUtils.getInstance().playSound(5);
				// }
				// if (this._surplusTime && this._surplusTime % 5 == 0)
				// {
				// 	BetMoneyRequest.sendBetMoneyRequest();
				// }
			}
		}
	}
}