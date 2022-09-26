var Chips = cc.Node.extend({
    ctor: function(player){
        this._super();
        this._initVars(player);
        this._init();
    },

    _initVars : function(player){
        this._player = player;
        this.chips = [];
        this._chipCount = 0;
    },
    _init : function(){
        var chip = new Chip();
        chip.setPosition(cc.p(-10,-200));
        this.addChild(chip);
    },

    addChip : function(){
        
    },
    _addChip : function(){
        this._chipCount++;

        if(this.chips[this.])
        var chip = new Chip();
        var chipPosY = this._getCurrChip().getPositionY()+10;
        var playerPos = Players.getInstance().getPlayer(this._player.getIndex()).getPos();
        playerPos.y += chipPosY;


        chip.setPosition(playerPos);
        this.addChild(chip);
    },
    _getCurrChip : function(){
        if(this.chips[this.chips.length -1].length === 0){
            this.chips[this.chips.length -1].push(null);
            return this.chips[this.chips.length -1][0];
        }

        var lastDeck = this.chips[this.chips.length -1]
        return lastDeck[lastDeck.length -1];
    },
})

var Chip = cc.Node.extend({
    ctor : function(){
        this._super();
        this.sprite = new cc.Sprite('res/chip.png');
        this.sprite.setScale(0.1);
        this.addChild(this.sprite);
    },
})