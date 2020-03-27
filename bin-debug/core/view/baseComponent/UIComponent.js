var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var UIComponent = (function (_super) {
    __extends(UIComponent, _super);
    function UIComponent() {
        return _super.call(this) || this;
    }
    /**
     * 根据类型获取子物体
     */
    UIComponent.prototype.contains = function (com) {
        return null; //fix
    };
    return UIComponent;
}(fgui.GComponent));
__reflect(UIComponent.prototype, "UIComponent");
//# sourceMappingURL=UIComponent.js.map