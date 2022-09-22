var EntryScene = GameScene.extend({
    ctor : function(){
        this._super();
        this._initVar();
        this._init();
    },

    _initVar : function(){

    },
    _init : function(){
        this._gameNode = new GameNode();
        this._gameNode.setPosition(this._centerPos);
        this.addChild(this._gameNode);
    },
});



var GameNode = cc.Node.extend({
    ctor: function(){
        this._super();
        this._initVar();
        this._init();
    },

    _initVar : function(){
        this.chips = null;
    },
    _init : function(){
        this.chips = new Chips();
        this.addChild(this.chips);
    },
})