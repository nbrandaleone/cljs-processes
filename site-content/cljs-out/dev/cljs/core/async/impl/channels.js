// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10484 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10484 = (function (val,meta10485){
this.val = val;
this.meta10485 = meta10485;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10486,meta10485__$1){
var self__ = this;
var _10486__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10484(self__.val,meta10485__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10486){
var self__ = this;
var _10486__$1 = this;
return self__.meta10485;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10484.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta10485","meta10485",-1656503131,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10484.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10484.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels10484");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10484.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels10484");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels10484.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels10484 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels10484(val__$1,meta10485){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10484(val__$1,meta10485));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10484(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_10487 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_10487.call(null,this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_10499 = self__.puts.pop();
if((putter_10499 == null)){
} else {
var put_handler_10500 = putter_10499.handler;
var val_10501 = putter_10499.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_10500)){
var put_cb_10502 = cljs.core.async.impl.protocols.commit.call(null,put_handler_10500);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_10502,put_handler_10500,val_10501,putter_10499,this$__$1){
return (function (){
return put_cb_10502.call(null,true);
});})(put_cb_10502,put_handler_10500,val_10501,putter_10499,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,(!(closed__$1)));
} else {
if(closed__$1){
cljs.core.async.impl.protocols.commit.call(null,handler);

return cljs.core.async.impl.channels.box.call(null,false);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__4115__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__10503 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__10503;
continue;
} else {
var G__10504 = takers;
takers = G__10504;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__10488_10505 = cljs.core.seq.call(null,take_cbs);
var chunk__10489_10506 = null;
var count__10490_10507 = (0);
var i__10491_10508 = (0);
while(true){
if((i__10491_10508 < count__10490_10507)){
var f_10509 = cljs.core._nth.call(null,chunk__10489_10506,i__10491_10508);
cljs.core.async.impl.dispatch.run.call(null,f_10509);


var G__10510 = seq__10488_10505;
var G__10511 = chunk__10489_10506;
var G__10512 = count__10490_10507;
var G__10513 = (i__10491_10508 + (1));
seq__10488_10505 = G__10510;
chunk__10489_10506 = G__10511;
count__10490_10507 = G__10512;
i__10491_10508 = G__10513;
continue;
} else {
var temp__5825__auto___10514 = cljs.core.seq.call(null,seq__10488_10505);
if(temp__5825__auto___10514){
var seq__10488_10515__$1 = temp__5825__auto___10514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10488_10515__$1)){
var c__4556__auto___10516 = cljs.core.chunk_first.call(null,seq__10488_10515__$1);
var G__10517 = cljs.core.chunk_rest.call(null,seq__10488_10515__$1);
var G__10518 = c__4556__auto___10516;
var G__10519 = cljs.core.count.call(null,c__4556__auto___10516);
var G__10520 = (0);
seq__10488_10505 = G__10517;
chunk__10489_10506 = G__10518;
count__10490_10507 = G__10519;
i__10491_10508 = G__10520;
continue;
} else {
var f_10521 = cljs.core.first.call(null,seq__10488_10515__$1);
cljs.core.async.impl.dispatch.run.call(null,f_10521);


var G__10522 = cljs.core.next.call(null,seq__10488_10515__$1);
var G__10523 = null;
var G__10524 = (0);
var G__10525 = (0);
seq__10488_10505 = G__10522;
chunk__10489_10506 = G__10523;
count__10490_10507 = G__10524;
i__10491_10508 = G__10525;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return take_cb.call(null,val);
}));

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var temp__5823__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5823__auto__)){
var take_cb = temp__5823__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__10492 = ((((cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = ((cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler))?cljs.core.async.impl.protocols.commit.call(null,put_handler):false);
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if(((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0))))){
var G__10526 = cbs__$1;
cbs = G__10526;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__10492,(0),null);
var cbs = cljs.core.nth.call(null,vec__10492,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__10495_10527 = cljs.core.seq.call(null,cbs);
var chunk__10496_10528 = null;
var count__10497_10529 = (0);
var i__10498_10530 = (0);
while(true){
if((i__10498_10530 < count__10497_10529)){
var cb_10531 = cljs.core._nth.call(null,chunk__10496_10528,i__10498_10530);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__10495_10527,chunk__10496_10528,count__10497_10529,i__10498_10530,cb_10531,val,vec__10492,done_QMARK_,cbs,take_cb,temp__5823__auto__,this$__$1){
return (function (){
return cb_10531.call(null,true);
});})(seq__10495_10527,chunk__10496_10528,count__10497_10529,i__10498_10530,cb_10531,val,vec__10492,done_QMARK_,cbs,take_cb,temp__5823__auto__,this$__$1))
);


var G__10532 = seq__10495_10527;
var G__10533 = chunk__10496_10528;
var G__10534 = count__10497_10529;
var G__10535 = (i__10498_10530 + (1));
seq__10495_10527 = G__10532;
chunk__10496_10528 = G__10533;
count__10497_10529 = G__10534;
i__10498_10530 = G__10535;
continue;
} else {
var temp__5825__auto___10536 = cljs.core.seq.call(null,seq__10495_10527);
if(temp__5825__auto___10536){
var seq__10495_10537__$1 = temp__5825__auto___10536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10495_10537__$1)){
var c__4556__auto___10538 = cljs.core.chunk_first.call(null,seq__10495_10537__$1);
var G__10539 = cljs.core.chunk_rest.call(null,seq__10495_10537__$1);
var G__10540 = c__4556__auto___10538;
var G__10541 = cljs.core.count.call(null,c__4556__auto___10538);
var G__10542 = (0);
seq__10495_10527 = G__10539;
chunk__10496_10528 = G__10540;
count__10497_10529 = G__10541;
i__10498_10530 = G__10542;
continue;
} else {
var cb_10543 = cljs.core.first.call(null,seq__10495_10537__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__10495_10527,chunk__10496_10528,count__10497_10529,i__10498_10530,cb_10543,seq__10495_10537__$1,temp__5825__auto___10536,val,vec__10492,done_QMARK_,cbs,take_cb,temp__5823__auto__,this$__$1){
return (function (){
return cb_10543.call(null,true);
});})(seq__10495_10527,chunk__10496_10528,count__10497_10529,i__10498_10530,cb_10543,seq__10495_10537__$1,temp__5825__auto___10536,val,vec__10492,done_QMARK_,cbs,take_cb,temp__5823__auto__,this$__$1))
);


var G__10544 = cljs.core.next.call(null,seq__10495_10537__$1);
var G__10545 = null;
var G__10546 = (0);
var G__10547 = (0);
seq__10495_10527 = G__10544;
chunk__10496_10528 = G__10545;
count__10497_10529 = G__10546;
i__10498_10530 = G__10547;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return put_cb.call(null,true);
}));

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__4115__auto__;
}
})())){
var has_val = (function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__4115__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return (self__.puts.length === (0));
} else {
return and__4115__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_10548 = self__.takes.pop();
if((taker_10548 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_10548)){
var take_cb_10549 = cljs.core.async.impl.protocols.commit.call(null,taker_10548);
var val_10550 = (cljs.core.truth_((function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__4115__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_10549,val_10550,taker_10548,this$__$1){
return (function (){
return take_cb_10549.call(null,val_10550);
});})(take_cb_10549,val_10550,taker_10548,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__4126__auto__ = exh;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__10552 = arguments.length;
switch (G__10552) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__10556 = null;
var G__10556__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e10553){var t = e10553;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__10556__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e10554){var t = e10554;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__10556 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__10556__1.call(this,buf__$1);
case 2:
return G__10556__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10556.cljs$core$IFn$_invoke$arity$1 = G__10556__1;
G__10556.cljs$core$IFn$_invoke$arity$2 = G__10556__2;
return G__10556;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=channels.js.map
