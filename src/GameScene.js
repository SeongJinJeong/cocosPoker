var GameScene = cc.Scene.extend({
    ctor : function(){
        this._super();
        this._initVars();
        this._init();
    },

    _initVars : function(){
        this._centerPos = cc.p(cc.winSize.width/2, cc.winSize.height/2);
        this._backTable = null;
        this._players = [];
    },
    _init : function(){
        this._backTable = new TableLayer();
        this._backTable.setPosition(this._centerPos);
        this.addChild(this._backTable);
    },
});

var TableLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        this.sprite = new cc.Sprite('res/table.png');
        this.sprite.setAnchorPoint(cc.p(0.5,0.5));
        this.addChild(this.sprite, 0);

        return true;
    }
});