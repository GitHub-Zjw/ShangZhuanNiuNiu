/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game
{

	export class BetBallCom extends UIComponent
	{
		public state: fairygui.Controller;
		public iconLoader: fairygui.GLoader;

		public static URL: string = "ui://v1h0uw6cecgg20";

		public static createInstance(): BetBallCom
		{
			return <BetBallCom><any>(fairygui.UIPackage.createObject("game", "BetBallCom"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.iconLoader = <fairygui.GLoader><any>(this.getChild("iconLoader"));
			this.state = this.getController("state");
		}

		public static NAME: string = "BetBallCom";
		private _sourceIndex: number;
		private _endX: number;
		private _endY: number;

		/**
		 * 显示投注动画
		 * @param x 目标点x
		 * @param y 目标点y
		 */
		public showJoinAmi(x: number, y: number, sourceIndex: number): void
		{
			this._endX = x;
			this._endY = y;
			this._sourceIndex = sourceIndex;
			if (this.iconLoader)
			{
				this.playJoinAmi();
			}
			else
			{
				// this.addEventListener(eui.UIEvent.COMPLETE, this.playJoinAmi, this);
			}
		}

		private playJoinAmi(): void
		{
			this.visible = true;
			this.state.setSelectedIndex(this._sourceIndex);
			let twX: egret.Tween = egret.Tween.get(this);
			twX.to({ x: this._endX }, 300, egret.Ease.quintOut);
			let twY = egret.Tween.get(this);
			twY.to({ y: this._endY }, 300);
		}

		/**
		 * 回收小球
		 */
		public hideBall(): void
		{
			this.visible = false;
			egret.Tween.removeTweens(this);
		}
	}
}