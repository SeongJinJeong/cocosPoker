var Player = cc.Class.extend({
    ctor : function(index,pos){
        this._initVars(index,pos);
        this._init();
    },

    _initVars : function(index,pos){
        this._playerIndex = index;
        this._pos = pos;
    },
    _init : function(){

    },

    getPos : function(){
        return this._pos;
    },
})

var Players = cc.Class.extend({
    ctor : function(){
        this._initVars();
        this._init();
    },

    _initVars : function(){
        /** @type {Player[]} */
        this._players = [];
        this._playerPos = [];
    },
    _init : function(){
        for(var i=0; i<6; i++){
            this._playerPos[i] = cc.p(DEFINES.PLAYER_POS[i]);
        }
    },

    addPlayer : function(){
        var index = this._players.length;
        var player = new Player(index,this._playerPos[index]);
        this._players.push(player);
    },

    getPlayer : function(index){
        return this._players[index];
    },
});

var players = null;

Players.prototype.getInstance = function(){
    if(!!players)
        return players;

    players = new Players();
    return players;
};