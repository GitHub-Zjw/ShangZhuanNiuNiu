var ErgodicUtils;
(function (ErgodicUtils) {
    /**
     * 获取一个组件component上的所有按钮
     * 不会遍历子组件，只会便利到eui.group
     */
    function getAllButton(com) {
        var returnValue = [];
        var childNum = com.numChildren;
        for (var i = 0; i < childNum; i++) {
            var obj = com.getChildAt(i);
            if (obj instanceof UIButton) {
                returnValue.push(obj);
            }
        }
        return returnValue;
    }
    ErgodicUtils.getAllButton = getAllButton;
})(ErgodicUtils || (ErgodicUtils = {}));
//# sourceMappingURL=ErgodicUtils.js.map