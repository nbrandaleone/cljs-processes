// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12077 = arguments.length;
switch (G__12077) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12078 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12078 = (function (f,blockable,meta12079){
this.f = f;
this.blockable = blockable;
this.meta12079 = meta12079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12080,meta12079__$1){
var self__ = this;
var _12080__$1 = this;
return (new cljs.core.async.t_cljs$core$async12078(self__.f,self__.blockable,meta12079__$1));
}));

(cljs.core.async.t_cljs$core$async12078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12080){
var self__ = this;
var _12080__$1 = this;
return self__.meta12079;
}));

(cljs.core.async.t_cljs$core$async12078.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12078.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12078.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async12078.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async12078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12079","meta12079",326032746,null)], null);
}));

(cljs.core.async.t_cljs$core$async12078.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12078");

(cljs.core.async.t_cljs$core$async12078.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async12078");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12078.
 */
cljs.core.async.__GT_t_cljs$core$async12078 = (function cljs$core$async$__GT_t_cljs$core$async12078(f__$1,blockable__$1,meta12079){
return (new cljs.core.async.t_cljs$core$async12078(f__$1,blockable__$1,meta12079));
});

}

return (new cljs.core.async.t_cljs$core$async12078(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__12084 = arguments.length;
switch (G__12084) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__12087 = arguments.length;
switch (G__12087) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__12090 = arguments.length;
switch (G__12090) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12092 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12092);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_12092);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__12094 = arguments.length;
switch (G__12094) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___12096 = n;
var x_12097 = (0);
while(true){
if((x_12097 < n__4613__auto___12096)){
(a[x_12097] = x_12097);

var G__12098 = (x_12097 + (1));
x_12097 = G__12098;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12099 = (function (flag,meta12100){
this.flag = flag;
this.meta12100 = meta12100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12101,meta12100__$1){
var self__ = this;
var _12101__$1 = this;
return (new cljs.core.async.t_cljs$core$async12099(self__.flag,meta12100__$1));
}));

(cljs.core.async.t_cljs$core$async12099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12101){
var self__ = this;
var _12101__$1 = this;
return self__.meta12100;
}));

(cljs.core.async.t_cljs$core$async12099.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async12099.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async12099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12100","meta12100",1287286001,null)], null);
}));

(cljs.core.async.t_cljs$core$async12099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12099");

(cljs.core.async.t_cljs$core$async12099.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async12099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12099.
 */
cljs.core.async.__GT_t_cljs$core$async12099 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12099(flag__$1,meta12100){
return (new cljs.core.async.t_cljs$core$async12099(flag__$1,meta12100));
});

}

return (new cljs.core.async.t_cljs$core$async12099(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12102 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12102 = (function (flag,cb,meta12103){
this.flag = flag;
this.cb = cb;
this.meta12103 = meta12103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12104,meta12103__$1){
var self__ = this;
var _12104__$1 = this;
return (new cljs.core.async.t_cljs$core$async12102(self__.flag,self__.cb,meta12103__$1));
}));

(cljs.core.async.t_cljs$core$async12102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12104){
var self__ = this;
var _12104__$1 = this;
return self__.meta12103;
}));

(cljs.core.async.t_cljs$core$async12102.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async12102.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async12102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12103","meta12103",-224075897,null)], null);
}));

(cljs.core.async.t_cljs$core$async12102.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12102");

(cljs.core.async.t_cljs$core$async12102.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async12102");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12102.
 */
cljs.core.async.__GT_t_cljs$core$async12102 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12102(flag__$1,cb__$1,meta12103){
return (new cljs.core.async.t_cljs$core$async12102(flag__$1,cb__$1,meta12103));
});

}

return (new cljs.core.async.t_cljs$core$async12102(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var ports__$1 = cljs.core.vec.call(null,ports);
var n = cljs.core.count.call(null,ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_12107 = cljs.core.nth.call(null,ports__$1,i);
if(cljs.core.vector_QMARK_.call(null,port_12107)){
if((!((port_12107.call(null,(1)) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__12108 = (i + (1));
i = G__12108;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__12105_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12105_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__12106_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12106_SHARP_,port], null));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12109 = (i + (1));
i = G__12109;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12115 = arguments.length;
var i__4737__auto___12116 = (0);
while(true){
if((i__4737__auto___12116 < len__4736__auto___12115)){
args__4742__auto__.push((arguments[i__4737__auto___12116]));

var G__12117 = (i__4737__auto___12116 + (1));
i__4737__auto___12116 = G__12117;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12112){
var map__12113 = p__12112;
var map__12113__$1 = (((((!((map__12113 == null))))?(((((map__12113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12113):map__12113);
var opts = map__12113__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12110){
var G__12111 = cljs.core.first.call(null,seq12110);
var seq12110__$1 = cljs.core.next.call(null,seq12110);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12111,seq12110__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__12119 = arguments.length;
switch (G__12119) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12017__auto___12166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_12143){
var state_val_12144 = (state_12143[(1)]);
if((state_val_12144 === (7))){
var inst_12139 = (state_12143[(2)]);
var state_12143__$1 = state_12143;
var statearr_12145_12167 = state_12143__$1;
(statearr_12145_12167[(2)] = inst_12139);

(statearr_12145_12167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12144 === (1))){
var state_12143__$1 = state_12143;
var statearr_12146_12168 = state_12143__$1;
(statearr_12146_12168[(2)] = null);

(statearr_12146_12168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12144 === (4))){
var inst_12122 = (state_12143[(7)]);
var inst_12122__$1 = (state_12143[(2)]);
var inst_12123 = (inst_12122__$1 == null);
var state_12143__$1 = (function (){var statearr_12147 = state_12143;
(statearr_12147[(7)] = inst_12122__$1);

return statearr_12147;
})();
if(cljs.core.truth_(inst_12123)){
var statearr_12148_12169 = state_12143__$1;
(statearr_12148_12169[(1)] = (5));

} else {
var statearr_12149_12170 = state_12143__$1;
(statearr_12149_12170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12144 === (13))){
var state_12143__$1 = state_12143;
var statearr_12150_12171 = state_12143__$1;
(statearr_12150_12171[(2)] = null);

(statearr_12150_12171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12144 === (6))){
var inst_12122 = (state_12143[(7)]);
var state_12143__$1 = state_12143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12143__$1,(11),to,inst_12122);
} else {
if((state_val_12144 === (3))){
var inst_12141 = (state_12143[(2)]);
var state_12143__$1 = state_12143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12143__$1,inst_12141);
} else {
if((state_val_12144 === (12))){
var state_12143__$1 = state_12143;
var statearr_12151_12172 = state_12143__$1;
(statearr_12151_12172[(2)] = null);

(statearr_12151_12172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12144 === (2))){
var state_12143__$1 = state_12143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12143__$1,(4),from);
} else {
if((state_val_12144 === (11))){
var inst_12132 = (state_12143[(2)]);
var state_12143__$1 = state_12143;
if(cljs.core.truth_(inst_12132)){
var statearr_12152_12173 = state_12143__$1;
(statearr_12152_12173[(1)] = (12));

} else {
var statearr_12153_12174 = state_12143__$1;
(statearr_12153_12174[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12144 === (9))){
var state_12143__$1 = state_12143;
var statearr_12154_12175 = state_12143__$1;
(statearr_12154_12175[(2)] = null);

(statearr_12154_12175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12144 === (5))){
var state_12143__$1 = state_12143;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12155_12176 = state_12143__$1;
(statearr_12155_12176[(1)] = (8));

} else {
var statearr_12156_12177 = state_12143__$1;
(statearr_12156_12177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12144 === (14))){
var inst_12137 = (state_12143[(2)]);
var state_12143__$1 = state_12143;
var statearr_12157_12178 = state_12143__$1;
(statearr_12157_12178[(2)] = inst_12137);

(statearr_12157_12178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12144 === (10))){
var inst_12129 = (state_12143[(2)]);
var state_12143__$1 = state_12143;
var statearr_12158_12179 = state_12143__$1;
(statearr_12158_12179[(2)] = inst_12129);

(statearr_12158_12179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12144 === (8))){
var inst_12126 = cljs.core.async.close_BANG_.call(null,to);
var state_12143__$1 = state_12143;
var statearr_12159_12180 = state_12143__$1;
(statearr_12159_12180[(2)] = inst_12126);

(statearr_12159_12180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11944__auto__ = null;
var cljs$core$async$state_machine__11944__auto____0 = (function (){
var statearr_12160 = [null,null,null,null,null,null,null,null];
(statearr_12160[(0)] = cljs$core$async$state_machine__11944__auto__);

(statearr_12160[(1)] = (1));

return statearr_12160;
});
var cljs$core$async$state_machine__11944__auto____1 = (function (state_12143){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_12143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e12161){var ex__11947__auto__ = e12161;
var statearr_12162_12181 = state_12143;
(statearr_12162_12181[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_12143[(4)]))){
var statearr_12163_12182 = state_12143;
(statearr_12163_12182[(1)] = cljs.core.first.call(null,(state_12143[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12183 = state_12143;
state_12143 = G__12183;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$state_machine__11944__auto__ = function(state_12143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11944__auto____1.call(this,state_12143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11944__auto____0;
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11944__auto____1;
return cljs$core$async$state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_12164 = f__12018__auto__.call(null);
(statearr_12164[(6)] = c__12017__auto___12166);

return statearr_12164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__12184){
var vec__12185 = p__12184;
var v = cljs.core.nth.call(null,vec__12185,(0),null);
var p = cljs.core.nth.call(null,vec__12185,(1),null);
var job = vec__12185;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12017__auto___12361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_12192){
var state_val_12193 = (state_12192[(1)]);
if((state_val_12193 === (1))){
var state_12192__$1 = state_12192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12192__$1,(2),res,v);
} else {
if((state_val_12193 === (2))){
var inst_12189 = (state_12192[(2)]);
var inst_12190 = cljs.core.async.close_BANG_.call(null,res);
var state_12192__$1 = (function (){var statearr_12194 = state_12192;
(statearr_12194[(7)] = inst_12189);

return statearr_12194;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12192__$1,inst_12190);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____0 = (function (){
var statearr_12195 = [null,null,null,null,null,null,null,null];
(statearr_12195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__);

(statearr_12195[(1)] = (1));

return statearr_12195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____1 = (function (state_12192){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_12192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e12196){var ex__11947__auto__ = e12196;
var statearr_12197_12362 = state_12192;
(statearr_12197_12362[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_12192[(4)]))){
var statearr_12198_12363 = state_12192;
(statearr_12198_12363[(1)] = cljs.core.first.call(null,(state_12192[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12364 = state_12192;
state_12192 = G__12364;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__ = function(state_12192){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____1.call(this,state_12192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_12199 = f__12018__auto__.call(null);
(statearr_12199[(6)] = c__12017__auto___12361);

return statearr_12199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__12200){
var vec__12201 = p__12200;
var v = cljs.core.nth.call(null,vec__12201,(0),null);
var p = cljs.core.nth.call(null,vec__12201,(1),null);
var job = vec__12201;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___12365 = n;
var __12366 = (0);
while(true){
if((__12366 < n__4613__auto___12365)){
var G__12204_12367 = type;
var G__12204_12368__$1 = (((G__12204_12367 instanceof cljs.core.Keyword))?G__12204_12367.fqn:null);
switch (G__12204_12368__$1) {
case "compute":
var c__12017__auto___12370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12366,c__12017__auto___12370,G__12204_12367,G__12204_12368__$1,n__4613__auto___12365,jobs,results,process,async){
return (function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = ((function (__12366,c__12017__auto___12370,G__12204_12367,G__12204_12368__$1,n__4613__auto___12365,jobs,results,process,async){
return (function (state_12217){
var state_val_12218 = (state_12217[(1)]);
if((state_val_12218 === (1))){
var state_12217__$1 = state_12217;
var statearr_12219_12371 = state_12217__$1;
(statearr_12219_12371[(2)] = null);

(statearr_12219_12371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12218 === (2))){
var state_12217__$1 = state_12217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12217__$1,(4),jobs);
} else {
if((state_val_12218 === (3))){
var inst_12215 = (state_12217[(2)]);
var state_12217__$1 = state_12217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12217__$1,inst_12215);
} else {
if((state_val_12218 === (4))){
var inst_12207 = (state_12217[(2)]);
var inst_12208 = process.call(null,inst_12207);
var state_12217__$1 = state_12217;
if(cljs.core.truth_(inst_12208)){
var statearr_12220_12372 = state_12217__$1;
(statearr_12220_12372[(1)] = (5));

} else {
var statearr_12221_12373 = state_12217__$1;
(statearr_12221_12373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12218 === (5))){
var state_12217__$1 = state_12217;
var statearr_12222_12374 = state_12217__$1;
(statearr_12222_12374[(2)] = null);

(statearr_12222_12374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12218 === (6))){
var state_12217__$1 = state_12217;
var statearr_12223_12375 = state_12217__$1;
(statearr_12223_12375[(2)] = null);

(statearr_12223_12375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12218 === (7))){
var inst_12213 = (state_12217[(2)]);
var state_12217__$1 = state_12217;
var statearr_12224_12376 = state_12217__$1;
(statearr_12224_12376[(2)] = inst_12213);

(statearr_12224_12376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__12366,c__12017__auto___12370,G__12204_12367,G__12204_12368__$1,n__4613__auto___12365,jobs,results,process,async))
;
return ((function (__12366,switch__11943__auto__,c__12017__auto___12370,G__12204_12367,G__12204_12368__$1,n__4613__auto___12365,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____0 = (function (){
var statearr_12225 = [null,null,null,null,null,null,null];
(statearr_12225[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__);

(statearr_12225[(1)] = (1));

return statearr_12225;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____1 = (function (state_12217){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_12217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e12226){var ex__11947__auto__ = e12226;
var statearr_12227_12377 = state_12217;
(statearr_12227_12377[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_12217[(4)]))){
var statearr_12228_12378 = state_12217;
(statearr_12228_12378[(1)] = cljs.core.first.call(null,(state_12217[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12379 = state_12217;
state_12217 = G__12379;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__ = function(state_12217){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____1.call(this,state_12217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__;
})()
;})(__12366,switch__11943__auto__,c__12017__auto___12370,G__12204_12367,G__12204_12368__$1,n__4613__auto___12365,jobs,results,process,async))
})();
var state__12019__auto__ = (function (){var statearr_12229 = f__12018__auto__.call(null);
(statearr_12229[(6)] = c__12017__auto___12370);

return statearr_12229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
});})(__12366,c__12017__auto___12370,G__12204_12367,G__12204_12368__$1,n__4613__auto___12365,jobs,results,process,async))
);


break;
case "async":
var c__12017__auto___12380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12366,c__12017__auto___12380,G__12204_12367,G__12204_12368__$1,n__4613__auto___12365,jobs,results,process,async){
return (function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = ((function (__12366,c__12017__auto___12380,G__12204_12367,G__12204_12368__$1,n__4613__auto___12365,jobs,results,process,async){
return (function (state_12242){
var state_val_12243 = (state_12242[(1)]);
if((state_val_12243 === (1))){
var state_12242__$1 = state_12242;
var statearr_12244_12381 = state_12242__$1;
(statearr_12244_12381[(2)] = null);

(statearr_12244_12381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12243 === (2))){
var state_12242__$1 = state_12242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12242__$1,(4),jobs);
} else {
if((state_val_12243 === (3))){
var inst_12240 = (state_12242[(2)]);
var state_12242__$1 = state_12242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12242__$1,inst_12240);
} else {
if((state_val_12243 === (4))){
var inst_12232 = (state_12242[(2)]);
var inst_12233 = async.call(null,inst_12232);
var state_12242__$1 = state_12242;
if(cljs.core.truth_(inst_12233)){
var statearr_12245_12382 = state_12242__$1;
(statearr_12245_12382[(1)] = (5));

} else {
var statearr_12246_12383 = state_12242__$1;
(statearr_12246_12383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12243 === (5))){
var state_12242__$1 = state_12242;
var statearr_12247_12384 = state_12242__$1;
(statearr_12247_12384[(2)] = null);

(statearr_12247_12384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12243 === (6))){
var state_12242__$1 = state_12242;
var statearr_12248_12385 = state_12242__$1;
(statearr_12248_12385[(2)] = null);

(statearr_12248_12385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12243 === (7))){
var inst_12238 = (state_12242[(2)]);
var state_12242__$1 = state_12242;
var statearr_12249_12386 = state_12242__$1;
(statearr_12249_12386[(2)] = inst_12238);

(statearr_12249_12386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__12366,c__12017__auto___12380,G__12204_12367,G__12204_12368__$1,n__4613__auto___12365,jobs,results,process,async))
;
return ((function (__12366,switch__11943__auto__,c__12017__auto___12380,G__12204_12367,G__12204_12368__$1,n__4613__auto___12365,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____0 = (function (){
var statearr_12250 = [null,null,null,null,null,null,null];
(statearr_12250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__);

(statearr_12250[(1)] = (1));

return statearr_12250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____1 = (function (state_12242){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_12242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e12251){var ex__11947__auto__ = e12251;
var statearr_12252_12387 = state_12242;
(statearr_12252_12387[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_12242[(4)]))){
var statearr_12253_12388 = state_12242;
(statearr_12253_12388[(1)] = cljs.core.first.call(null,(state_12242[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12389 = state_12242;
state_12242 = G__12389;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__ = function(state_12242){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____1.call(this,state_12242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__;
})()
;})(__12366,switch__11943__auto__,c__12017__auto___12380,G__12204_12367,G__12204_12368__$1,n__4613__auto___12365,jobs,results,process,async))
})();
var state__12019__auto__ = (function (){var statearr_12254 = f__12018__auto__.call(null);
(statearr_12254[(6)] = c__12017__auto___12380);

return statearr_12254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
});})(__12366,c__12017__auto___12380,G__12204_12367,G__12204_12368__$1,n__4613__auto___12365,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12204_12368__$1)].join('')));

}

var G__12390 = (__12366 + (1));
__12366 = G__12390;
continue;
} else {
}
break;
}

var c__12017__auto___12391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_12276){
var state_val_12277 = (state_12276[(1)]);
if((state_val_12277 === (7))){
var inst_12272 = (state_12276[(2)]);
var state_12276__$1 = state_12276;
var statearr_12278_12392 = state_12276__$1;
(statearr_12278_12392[(2)] = inst_12272);

(statearr_12278_12392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12277 === (1))){
var state_12276__$1 = state_12276;
var statearr_12279_12393 = state_12276__$1;
(statearr_12279_12393[(2)] = null);

(statearr_12279_12393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12277 === (4))){
var inst_12257 = (state_12276[(7)]);
var inst_12257__$1 = (state_12276[(2)]);
var inst_12258 = (inst_12257__$1 == null);
var state_12276__$1 = (function (){var statearr_12280 = state_12276;
(statearr_12280[(7)] = inst_12257__$1);

return statearr_12280;
})();
if(cljs.core.truth_(inst_12258)){
var statearr_12281_12394 = state_12276__$1;
(statearr_12281_12394[(1)] = (5));

} else {
var statearr_12282_12395 = state_12276__$1;
(statearr_12282_12395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12277 === (6))){
var inst_12257 = (state_12276[(7)]);
var inst_12262 = (state_12276[(8)]);
var inst_12262__$1 = cljs.core.async.chan.call(null,(1));
var inst_12263 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12264 = [inst_12257,inst_12262__$1];
var inst_12265 = (new cljs.core.PersistentVector(null,2,(5),inst_12263,inst_12264,null));
var state_12276__$1 = (function (){var statearr_12283 = state_12276;
(statearr_12283[(8)] = inst_12262__$1);

return statearr_12283;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12276__$1,(8),jobs,inst_12265);
} else {
if((state_val_12277 === (3))){
var inst_12274 = (state_12276[(2)]);
var state_12276__$1 = state_12276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12276__$1,inst_12274);
} else {
if((state_val_12277 === (2))){
var state_12276__$1 = state_12276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12276__$1,(4),from);
} else {
if((state_val_12277 === (9))){
var inst_12269 = (state_12276[(2)]);
var state_12276__$1 = (function (){var statearr_12284 = state_12276;
(statearr_12284[(9)] = inst_12269);

return statearr_12284;
})();
var statearr_12285_12396 = state_12276__$1;
(statearr_12285_12396[(2)] = null);

(statearr_12285_12396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12277 === (5))){
var inst_12260 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12276__$1 = state_12276;
var statearr_12286_12397 = state_12276__$1;
(statearr_12286_12397[(2)] = inst_12260);

(statearr_12286_12397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12277 === (8))){
var inst_12262 = (state_12276[(8)]);
var inst_12267 = (state_12276[(2)]);
var state_12276__$1 = (function (){var statearr_12287 = state_12276;
(statearr_12287[(10)] = inst_12267);

return statearr_12287;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12276__$1,(9),results,inst_12262);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____0 = (function (){
var statearr_12288 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12288[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__);

(statearr_12288[(1)] = (1));

return statearr_12288;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____1 = (function (state_12276){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_12276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e12289){var ex__11947__auto__ = e12289;
var statearr_12290_12398 = state_12276;
(statearr_12290_12398[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_12276[(4)]))){
var statearr_12291_12399 = state_12276;
(statearr_12291_12399[(1)] = cljs.core.first.call(null,(state_12276[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12400 = state_12276;
state_12276 = G__12400;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__ = function(state_12276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____1.call(this,state_12276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_12292 = f__12018__auto__.call(null);
(statearr_12292[(6)] = c__12017__auto___12391);

return statearr_12292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));


var c__12017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_12330){
var state_val_12331 = (state_12330[(1)]);
if((state_val_12331 === (7))){
var inst_12326 = (state_12330[(2)]);
var state_12330__$1 = state_12330;
var statearr_12332_12401 = state_12330__$1;
(statearr_12332_12401[(2)] = inst_12326);

(statearr_12332_12401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12331 === (20))){
var state_12330__$1 = state_12330;
var statearr_12333_12402 = state_12330__$1;
(statearr_12333_12402[(2)] = null);

(statearr_12333_12402[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12331 === (1))){
var state_12330__$1 = state_12330;
var statearr_12334_12403 = state_12330__$1;
(statearr_12334_12403[(2)] = null);

(statearr_12334_12403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12331 === (4))){
var inst_12295 = (state_12330[(7)]);
var inst_12295__$1 = (state_12330[(2)]);
var inst_12296 = (inst_12295__$1 == null);
var state_12330__$1 = (function (){var statearr_12335 = state_12330;
(statearr_12335[(7)] = inst_12295__$1);

return statearr_12335;
})();
if(cljs.core.truth_(inst_12296)){
var statearr_12336_12404 = state_12330__$1;
(statearr_12336_12404[(1)] = (5));

} else {
var statearr_12337_12405 = state_12330__$1;
(statearr_12337_12405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12331 === (15))){
var inst_12308 = (state_12330[(8)]);
var state_12330__$1 = state_12330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12330__$1,(18),to,inst_12308);
} else {
if((state_val_12331 === (21))){
var inst_12321 = (state_12330[(2)]);
var state_12330__$1 = state_12330;
var statearr_12338_12406 = state_12330__$1;
(statearr_12338_12406[(2)] = inst_12321);

(statearr_12338_12406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12331 === (13))){
var inst_12323 = (state_12330[(2)]);
var state_12330__$1 = (function (){var statearr_12339 = state_12330;
(statearr_12339[(9)] = inst_12323);

return statearr_12339;
})();
var statearr_12340_12407 = state_12330__$1;
(statearr_12340_12407[(2)] = null);

(statearr_12340_12407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12331 === (6))){
var inst_12295 = (state_12330[(7)]);
var state_12330__$1 = state_12330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12330__$1,(11),inst_12295);
} else {
if((state_val_12331 === (17))){
var inst_12316 = (state_12330[(2)]);
var state_12330__$1 = state_12330;
if(cljs.core.truth_(inst_12316)){
var statearr_12341_12408 = state_12330__$1;
(statearr_12341_12408[(1)] = (19));

} else {
var statearr_12342_12409 = state_12330__$1;
(statearr_12342_12409[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12331 === (3))){
var inst_12328 = (state_12330[(2)]);
var state_12330__$1 = state_12330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12330__$1,inst_12328);
} else {
if((state_val_12331 === (12))){
var inst_12305 = (state_12330[(10)]);
var state_12330__$1 = state_12330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12330__$1,(14),inst_12305);
} else {
if((state_val_12331 === (2))){
var state_12330__$1 = state_12330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12330__$1,(4),results);
} else {
if((state_val_12331 === (19))){
var state_12330__$1 = state_12330;
var statearr_12343_12410 = state_12330__$1;
(statearr_12343_12410[(2)] = null);

(statearr_12343_12410[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12331 === (11))){
var inst_12305 = (state_12330[(2)]);
var state_12330__$1 = (function (){var statearr_12344 = state_12330;
(statearr_12344[(10)] = inst_12305);

return statearr_12344;
})();
var statearr_12345_12411 = state_12330__$1;
(statearr_12345_12411[(2)] = null);

(statearr_12345_12411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12331 === (9))){
var state_12330__$1 = state_12330;
var statearr_12346_12412 = state_12330__$1;
(statearr_12346_12412[(2)] = null);

(statearr_12346_12412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12331 === (5))){
var state_12330__$1 = state_12330;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12347_12413 = state_12330__$1;
(statearr_12347_12413[(1)] = (8));

} else {
var statearr_12348_12414 = state_12330__$1;
(statearr_12348_12414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12331 === (14))){
var inst_12308 = (state_12330[(8)]);
var inst_12308__$1 = (state_12330[(2)]);
var inst_12309 = (inst_12308__$1 == null);
var inst_12310 = cljs.core.not.call(null,inst_12309);
var state_12330__$1 = (function (){var statearr_12349 = state_12330;
(statearr_12349[(8)] = inst_12308__$1);

return statearr_12349;
})();
if(inst_12310){
var statearr_12350_12415 = state_12330__$1;
(statearr_12350_12415[(1)] = (15));

} else {
var statearr_12351_12416 = state_12330__$1;
(statearr_12351_12416[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12331 === (16))){
var state_12330__$1 = state_12330;
var statearr_12352_12417 = state_12330__$1;
(statearr_12352_12417[(2)] = false);

(statearr_12352_12417[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12331 === (10))){
var inst_12302 = (state_12330[(2)]);
var state_12330__$1 = state_12330;
var statearr_12353_12418 = state_12330__$1;
(statearr_12353_12418[(2)] = inst_12302);

(statearr_12353_12418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12331 === (18))){
var inst_12313 = (state_12330[(2)]);
var state_12330__$1 = state_12330;
var statearr_12354_12419 = state_12330__$1;
(statearr_12354_12419[(2)] = inst_12313);

(statearr_12354_12419[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12331 === (8))){
var inst_12299 = cljs.core.async.close_BANG_.call(null,to);
var state_12330__$1 = state_12330;
var statearr_12355_12420 = state_12330__$1;
(statearr_12355_12420[(2)] = inst_12299);

(statearr_12355_12420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____0 = (function (){
var statearr_12356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12356[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__);

(statearr_12356[(1)] = (1));

return statearr_12356;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____1 = (function (state_12330){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_12330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e12357){var ex__11947__auto__ = e12357;
var statearr_12358_12421 = state_12330;
(statearr_12358_12421[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_12330[(4)]))){
var statearr_12359_12422 = state_12330;
(statearr_12359_12422[(1)] = cljs.core.first.call(null,(state_12330[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12423 = state_12330;
state_12330 = G__12423;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__ = function(state_12330){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____1.call(this,state_12330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_12360 = f__12018__auto__.call(null);
(statearr_12360[(6)] = c__12017__auto__);

return statearr_12360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));

return c__12017__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__12425 = arguments.length;
switch (G__12425) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__12428 = arguments.length;
switch (G__12428) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__12431 = arguments.length;
switch (G__12431) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12017__auto___12481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_12457){
var state_val_12458 = (state_12457[(1)]);
if((state_val_12458 === (7))){
var inst_12453 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
var statearr_12459_12482 = state_12457__$1;
(statearr_12459_12482[(2)] = inst_12453);

(statearr_12459_12482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (1))){
var state_12457__$1 = state_12457;
var statearr_12460_12483 = state_12457__$1;
(statearr_12460_12483[(2)] = null);

(statearr_12460_12483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (4))){
var inst_12434 = (state_12457[(7)]);
var inst_12434__$1 = (state_12457[(2)]);
var inst_12435 = (inst_12434__$1 == null);
var state_12457__$1 = (function (){var statearr_12461 = state_12457;
(statearr_12461[(7)] = inst_12434__$1);

return statearr_12461;
})();
if(cljs.core.truth_(inst_12435)){
var statearr_12462_12484 = state_12457__$1;
(statearr_12462_12484[(1)] = (5));

} else {
var statearr_12463_12485 = state_12457__$1;
(statearr_12463_12485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (13))){
var state_12457__$1 = state_12457;
var statearr_12464_12486 = state_12457__$1;
(statearr_12464_12486[(2)] = null);

(statearr_12464_12486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (6))){
var inst_12434 = (state_12457[(7)]);
var inst_12440 = p.call(null,inst_12434);
var state_12457__$1 = state_12457;
if(cljs.core.truth_(inst_12440)){
var statearr_12465_12487 = state_12457__$1;
(statearr_12465_12487[(1)] = (9));

} else {
var statearr_12466_12488 = state_12457__$1;
(statearr_12466_12488[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (3))){
var inst_12455 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12457__$1,inst_12455);
} else {
if((state_val_12458 === (12))){
var state_12457__$1 = state_12457;
var statearr_12467_12489 = state_12457__$1;
(statearr_12467_12489[(2)] = null);

(statearr_12467_12489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (2))){
var state_12457__$1 = state_12457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12457__$1,(4),ch);
} else {
if((state_val_12458 === (11))){
var inst_12434 = (state_12457[(7)]);
var inst_12444 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12457__$1,(8),inst_12444,inst_12434);
} else {
if((state_val_12458 === (9))){
var state_12457__$1 = state_12457;
var statearr_12468_12490 = state_12457__$1;
(statearr_12468_12490[(2)] = tc);

(statearr_12468_12490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (5))){
var inst_12437 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12438 = cljs.core.async.close_BANG_.call(null,fc);
var state_12457__$1 = (function (){var statearr_12469 = state_12457;
(statearr_12469[(8)] = inst_12437);

return statearr_12469;
})();
var statearr_12470_12491 = state_12457__$1;
(statearr_12470_12491[(2)] = inst_12438);

(statearr_12470_12491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (14))){
var inst_12451 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
var statearr_12471_12492 = state_12457__$1;
(statearr_12471_12492[(2)] = inst_12451);

(statearr_12471_12492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (10))){
var state_12457__$1 = state_12457;
var statearr_12472_12493 = state_12457__$1;
(statearr_12472_12493[(2)] = fc);

(statearr_12472_12493[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (8))){
var inst_12446 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
if(cljs.core.truth_(inst_12446)){
var statearr_12473_12494 = state_12457__$1;
(statearr_12473_12494[(1)] = (12));

} else {
var statearr_12474_12495 = state_12457__$1;
(statearr_12474_12495[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11944__auto__ = null;
var cljs$core$async$state_machine__11944__auto____0 = (function (){
var statearr_12475 = [null,null,null,null,null,null,null,null,null];
(statearr_12475[(0)] = cljs$core$async$state_machine__11944__auto__);

(statearr_12475[(1)] = (1));

return statearr_12475;
});
var cljs$core$async$state_machine__11944__auto____1 = (function (state_12457){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_12457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e12476){var ex__11947__auto__ = e12476;
var statearr_12477_12496 = state_12457;
(statearr_12477_12496[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_12457[(4)]))){
var statearr_12478_12497 = state_12457;
(statearr_12478_12497[(1)] = cljs.core.first.call(null,(state_12457[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12498 = state_12457;
state_12457 = G__12498;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$state_machine__11944__auto__ = function(state_12457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11944__auto____1.call(this,state_12457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11944__auto____0;
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11944__auto____1;
return cljs$core$async$state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_12479 = f__12018__auto__.call(null);
(statearr_12479[(6)] = c__12017__auto___12481);

return statearr_12479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_12520){
var state_val_12521 = (state_12520[(1)]);
if((state_val_12521 === (7))){
var inst_12516 = (state_12520[(2)]);
var state_12520__$1 = state_12520;
var statearr_12522_12541 = state_12520__$1;
(statearr_12522_12541[(2)] = inst_12516);

(statearr_12522_12541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (1))){
var inst_12499 = init;
var inst_12500 = inst_12499;
var state_12520__$1 = (function (){var statearr_12523 = state_12520;
(statearr_12523[(7)] = inst_12500);

return statearr_12523;
})();
var statearr_12524_12542 = state_12520__$1;
(statearr_12524_12542[(2)] = null);

(statearr_12524_12542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (4))){
var inst_12503 = (state_12520[(8)]);
var inst_12503__$1 = (state_12520[(2)]);
var inst_12504 = (inst_12503__$1 == null);
var state_12520__$1 = (function (){var statearr_12525 = state_12520;
(statearr_12525[(8)] = inst_12503__$1);

return statearr_12525;
})();
if(cljs.core.truth_(inst_12504)){
var statearr_12526_12543 = state_12520__$1;
(statearr_12526_12543[(1)] = (5));

} else {
var statearr_12527_12544 = state_12520__$1;
(statearr_12527_12544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (6))){
var inst_12500 = (state_12520[(7)]);
var inst_12503 = (state_12520[(8)]);
var inst_12507 = (state_12520[(9)]);
var inst_12507__$1 = f.call(null,inst_12500,inst_12503);
var inst_12508 = cljs.core.reduced_QMARK_.call(null,inst_12507__$1);
var state_12520__$1 = (function (){var statearr_12528 = state_12520;
(statearr_12528[(9)] = inst_12507__$1);

return statearr_12528;
})();
if(inst_12508){
var statearr_12529_12545 = state_12520__$1;
(statearr_12529_12545[(1)] = (8));

} else {
var statearr_12530_12546 = state_12520__$1;
(statearr_12530_12546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (3))){
var inst_12518 = (state_12520[(2)]);
var state_12520__$1 = state_12520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12520__$1,inst_12518);
} else {
if((state_val_12521 === (2))){
var state_12520__$1 = state_12520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12520__$1,(4),ch);
} else {
if((state_val_12521 === (9))){
var inst_12507 = (state_12520[(9)]);
var inst_12500 = inst_12507;
var state_12520__$1 = (function (){var statearr_12531 = state_12520;
(statearr_12531[(7)] = inst_12500);

return statearr_12531;
})();
var statearr_12532_12547 = state_12520__$1;
(statearr_12532_12547[(2)] = null);

(statearr_12532_12547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (5))){
var inst_12500 = (state_12520[(7)]);
var state_12520__$1 = state_12520;
var statearr_12533_12548 = state_12520__$1;
(statearr_12533_12548[(2)] = inst_12500);

(statearr_12533_12548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (10))){
var inst_12514 = (state_12520[(2)]);
var state_12520__$1 = state_12520;
var statearr_12534_12549 = state_12520__$1;
(statearr_12534_12549[(2)] = inst_12514);

(statearr_12534_12549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (8))){
var inst_12507 = (state_12520[(9)]);
var inst_12510 = cljs.core.deref.call(null,inst_12507);
var state_12520__$1 = state_12520;
var statearr_12535_12550 = state_12520__$1;
(statearr_12535_12550[(2)] = inst_12510);

(statearr_12535_12550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__11944__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11944__auto____0 = (function (){
var statearr_12536 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12536[(0)] = cljs$core$async$reduce_$_state_machine__11944__auto__);

(statearr_12536[(1)] = (1));

return statearr_12536;
});
var cljs$core$async$reduce_$_state_machine__11944__auto____1 = (function (state_12520){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_12520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e12537){var ex__11947__auto__ = e12537;
var statearr_12538_12551 = state_12520;
(statearr_12538_12551[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_12520[(4)]))){
var statearr_12539_12552 = state_12520;
(statearr_12539_12552[(1)] = cljs.core.first.call(null,(state_12520[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12553 = state_12520;
state_12520 = G__12553;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11944__auto__ = function(state_12520){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11944__auto____1.call(this,state_12520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11944__auto____0;
cljs$core$async$reduce_$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11944__auto____1;
return cljs$core$async$reduce_$_state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_12540 = f__12018__auto__.call(null);
(statearr_12540[(6)] = c__12017__auto__);

return statearr_12540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));

return c__12017__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__12017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_12559){
var state_val_12560 = (state_12559[(1)]);
if((state_val_12560 === (1))){
var inst_12554 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_12559__$1 = state_12559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12559__$1,(2),inst_12554);
} else {
if((state_val_12560 === (2))){
var inst_12556 = (state_12559[(2)]);
var inst_12557 = f__$1.call(null,inst_12556);
var state_12559__$1 = state_12559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12559__$1,inst_12557);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11944__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11944__auto____0 = (function (){
var statearr_12561 = [null,null,null,null,null,null,null];
(statearr_12561[(0)] = cljs$core$async$transduce_$_state_machine__11944__auto__);

(statearr_12561[(1)] = (1));

return statearr_12561;
});
var cljs$core$async$transduce_$_state_machine__11944__auto____1 = (function (state_12559){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_12559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e12562){var ex__11947__auto__ = e12562;
var statearr_12563_12566 = state_12559;
(statearr_12563_12566[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_12559[(4)]))){
var statearr_12564_12567 = state_12559;
(statearr_12564_12567[(1)] = cljs.core.first.call(null,(state_12559[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12568 = state_12559;
state_12559 = G__12568;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11944__auto__ = function(state_12559){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11944__auto____1.call(this,state_12559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11944__auto____0;
cljs$core$async$transduce_$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11944__auto____1;
return cljs$core$async$transduce_$_state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_12565 = f__12018__auto__.call(null);
(statearr_12565[(6)] = c__12017__auto__);

return statearr_12565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));

return c__12017__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__12570 = arguments.length;
switch (G__12570) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_12595){
var state_val_12596 = (state_12595[(1)]);
if((state_val_12596 === (7))){
var inst_12577 = (state_12595[(2)]);
var state_12595__$1 = state_12595;
var statearr_12597_12619 = state_12595__$1;
(statearr_12597_12619[(2)] = inst_12577);

(statearr_12597_12619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (1))){
var inst_12571 = cljs.core.seq.call(null,coll);
var inst_12572 = inst_12571;
var state_12595__$1 = (function (){var statearr_12598 = state_12595;
(statearr_12598[(7)] = inst_12572);

return statearr_12598;
})();
var statearr_12599_12620 = state_12595__$1;
(statearr_12599_12620[(2)] = null);

(statearr_12599_12620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (4))){
var inst_12572 = (state_12595[(7)]);
var inst_12575 = cljs.core.first.call(null,inst_12572);
var state_12595__$1 = state_12595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12595__$1,(7),ch,inst_12575);
} else {
if((state_val_12596 === (13))){
var inst_12589 = (state_12595[(2)]);
var state_12595__$1 = state_12595;
var statearr_12600_12621 = state_12595__$1;
(statearr_12600_12621[(2)] = inst_12589);

(statearr_12600_12621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (6))){
var inst_12580 = (state_12595[(2)]);
var state_12595__$1 = state_12595;
if(cljs.core.truth_(inst_12580)){
var statearr_12601_12622 = state_12595__$1;
(statearr_12601_12622[(1)] = (8));

} else {
var statearr_12602_12623 = state_12595__$1;
(statearr_12602_12623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (3))){
var inst_12593 = (state_12595[(2)]);
var state_12595__$1 = state_12595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12595__$1,inst_12593);
} else {
if((state_val_12596 === (12))){
var state_12595__$1 = state_12595;
var statearr_12603_12624 = state_12595__$1;
(statearr_12603_12624[(2)] = null);

(statearr_12603_12624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (2))){
var inst_12572 = (state_12595[(7)]);
var state_12595__$1 = state_12595;
if(cljs.core.truth_(inst_12572)){
var statearr_12604_12625 = state_12595__$1;
(statearr_12604_12625[(1)] = (4));

} else {
var statearr_12605_12626 = state_12595__$1;
(statearr_12605_12626[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (11))){
var inst_12586 = cljs.core.async.close_BANG_.call(null,ch);
var state_12595__$1 = state_12595;
var statearr_12606_12627 = state_12595__$1;
(statearr_12606_12627[(2)] = inst_12586);

(statearr_12606_12627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (9))){
var state_12595__$1 = state_12595;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12607_12628 = state_12595__$1;
(statearr_12607_12628[(1)] = (11));

} else {
var statearr_12608_12629 = state_12595__$1;
(statearr_12608_12629[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (5))){
var inst_12572 = (state_12595[(7)]);
var state_12595__$1 = state_12595;
var statearr_12609_12630 = state_12595__$1;
(statearr_12609_12630[(2)] = inst_12572);

(statearr_12609_12630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (10))){
var inst_12591 = (state_12595[(2)]);
var state_12595__$1 = state_12595;
var statearr_12610_12631 = state_12595__$1;
(statearr_12610_12631[(2)] = inst_12591);

(statearr_12610_12631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (8))){
var inst_12572 = (state_12595[(7)]);
var inst_12582 = cljs.core.next.call(null,inst_12572);
var inst_12572__$1 = inst_12582;
var state_12595__$1 = (function (){var statearr_12611 = state_12595;
(statearr_12611[(7)] = inst_12572__$1);

return statearr_12611;
})();
var statearr_12612_12632 = state_12595__$1;
(statearr_12612_12632[(2)] = null);

(statearr_12612_12632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11944__auto__ = null;
var cljs$core$async$state_machine__11944__auto____0 = (function (){
var statearr_12613 = [null,null,null,null,null,null,null,null];
(statearr_12613[(0)] = cljs$core$async$state_machine__11944__auto__);

(statearr_12613[(1)] = (1));

return statearr_12613;
});
var cljs$core$async$state_machine__11944__auto____1 = (function (state_12595){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_12595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e12614){var ex__11947__auto__ = e12614;
var statearr_12615_12633 = state_12595;
(statearr_12615_12633[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_12595[(4)]))){
var statearr_12616_12634 = state_12595;
(statearr_12616_12634[(1)] = cljs.core.first.call(null,(state_12595[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12635 = state_12595;
state_12595 = G__12635;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$state_machine__11944__auto__ = function(state_12595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11944__auto____1.call(this,state_12595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11944__auto____0;
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11944__auto____1;
return cljs$core$async$state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_12617 = f__12018__auto__.call(null);
(statearr_12617[(6)] = c__12017__auto__);

return statearr_12617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));

return c__12017__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__12637 = arguments.length;
switch (G__12637) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_12639 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_12639.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12640 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_12640.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12641 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_12641.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12642 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_12642.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12643 = (function (ch,cs,meta12644){
this.ch = ch;
this.cs = cs;
this.meta12644 = meta12644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12645,meta12644__$1){
var self__ = this;
var _12645__$1 = this;
return (new cljs.core.async.t_cljs$core$async12643(self__.ch,self__.cs,meta12644__$1));
}));

(cljs.core.async.t_cljs$core$async12643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12645){
var self__ = this;
var _12645__$1 = this;
return self__.meta12644;
}));

(cljs.core.async.t_cljs$core$async12643.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12643.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12643.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12643.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12643.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12643.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12644","meta12644",1278302390,null)], null);
}));

(cljs.core.async.t_cljs$core$async12643.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12643");

(cljs.core.async.t_cljs$core$async12643.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async12643");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12643.
 */
cljs.core.async.__GT_t_cljs$core$async12643 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12643(ch__$1,cs__$1,meta12644){
return (new cljs.core.async.t_cljs$core$async12643(ch__$1,cs__$1,meta12644));
});

}

return (new cljs.core.async.t_cljs$core$async12643(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__12017__auto___12862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_12778){
var state_val_12779 = (state_12778[(1)]);
if((state_val_12779 === (7))){
var inst_12774 = (state_12778[(2)]);
var state_12778__$1 = state_12778;
var statearr_12780_12863 = state_12778__$1;
(statearr_12780_12863[(2)] = inst_12774);

(statearr_12780_12863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (20))){
var inst_12679 = (state_12778[(7)]);
var inst_12691 = cljs.core.first.call(null,inst_12679);
var inst_12692 = cljs.core.nth.call(null,inst_12691,(0),null);
var inst_12693 = cljs.core.nth.call(null,inst_12691,(1),null);
var state_12778__$1 = (function (){var statearr_12781 = state_12778;
(statearr_12781[(8)] = inst_12692);

return statearr_12781;
})();
if(cljs.core.truth_(inst_12693)){
var statearr_12782_12864 = state_12778__$1;
(statearr_12782_12864[(1)] = (22));

} else {
var statearr_12783_12865 = state_12778__$1;
(statearr_12783_12865[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (27))){
var inst_12721 = (state_12778[(9)]);
var inst_12723 = (state_12778[(10)]);
var inst_12728 = (state_12778[(11)]);
var inst_12648 = (state_12778[(12)]);
var inst_12728__$1 = cljs.core._nth.call(null,inst_12721,inst_12723);
var inst_12729 = cljs.core.async.put_BANG_.call(null,inst_12728__$1,inst_12648,done);
var state_12778__$1 = (function (){var statearr_12784 = state_12778;
(statearr_12784[(11)] = inst_12728__$1);

return statearr_12784;
})();
if(cljs.core.truth_(inst_12729)){
var statearr_12785_12866 = state_12778__$1;
(statearr_12785_12866[(1)] = (30));

} else {
var statearr_12786_12867 = state_12778__$1;
(statearr_12786_12867[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (1))){
var state_12778__$1 = state_12778;
var statearr_12787_12868 = state_12778__$1;
(statearr_12787_12868[(2)] = null);

(statearr_12787_12868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (24))){
var inst_12679 = (state_12778[(7)]);
var inst_12698 = (state_12778[(2)]);
var inst_12699 = cljs.core.next.call(null,inst_12679);
var inst_12657 = inst_12699;
var inst_12658 = null;
var inst_12659 = (0);
var inst_12660 = (0);
var state_12778__$1 = (function (){var statearr_12788 = state_12778;
(statearr_12788[(13)] = inst_12698);

(statearr_12788[(14)] = inst_12657);

(statearr_12788[(15)] = inst_12658);

(statearr_12788[(16)] = inst_12659);

(statearr_12788[(17)] = inst_12660);

return statearr_12788;
})();
var statearr_12789_12869 = state_12778__$1;
(statearr_12789_12869[(2)] = null);

(statearr_12789_12869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (39))){
var state_12778__$1 = state_12778;
var statearr_12793_12870 = state_12778__$1;
(statearr_12793_12870[(2)] = null);

(statearr_12793_12870[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (4))){
var inst_12648 = (state_12778[(12)]);
var inst_12648__$1 = (state_12778[(2)]);
var inst_12649 = (inst_12648__$1 == null);
var state_12778__$1 = (function (){var statearr_12794 = state_12778;
(statearr_12794[(12)] = inst_12648__$1);

return statearr_12794;
})();
if(cljs.core.truth_(inst_12649)){
var statearr_12795_12871 = state_12778__$1;
(statearr_12795_12871[(1)] = (5));

} else {
var statearr_12796_12872 = state_12778__$1;
(statearr_12796_12872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (15))){
var inst_12660 = (state_12778[(17)]);
var inst_12657 = (state_12778[(14)]);
var inst_12658 = (state_12778[(15)]);
var inst_12659 = (state_12778[(16)]);
var inst_12675 = (state_12778[(2)]);
var inst_12676 = (inst_12660 + (1));
var tmp12790 = inst_12657;
var tmp12791 = inst_12658;
var tmp12792 = inst_12659;
var inst_12657__$1 = tmp12790;
var inst_12658__$1 = tmp12791;
var inst_12659__$1 = tmp12792;
var inst_12660__$1 = inst_12676;
var state_12778__$1 = (function (){var statearr_12797 = state_12778;
(statearr_12797[(18)] = inst_12675);

(statearr_12797[(14)] = inst_12657__$1);

(statearr_12797[(15)] = inst_12658__$1);

(statearr_12797[(16)] = inst_12659__$1);

(statearr_12797[(17)] = inst_12660__$1);

return statearr_12797;
})();
var statearr_12798_12873 = state_12778__$1;
(statearr_12798_12873[(2)] = null);

(statearr_12798_12873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (21))){
var inst_12702 = (state_12778[(2)]);
var state_12778__$1 = state_12778;
var statearr_12802_12874 = state_12778__$1;
(statearr_12802_12874[(2)] = inst_12702);

(statearr_12802_12874[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (31))){
var inst_12728 = (state_12778[(11)]);
var inst_12732 = cljs.core.async.untap_STAR_.call(null,m,inst_12728);
var state_12778__$1 = state_12778;
var statearr_12803_12875 = state_12778__$1;
(statearr_12803_12875[(2)] = inst_12732);

(statearr_12803_12875[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (32))){
var inst_12723 = (state_12778[(10)]);
var inst_12720 = (state_12778[(19)]);
var inst_12721 = (state_12778[(9)]);
var inst_12722 = (state_12778[(20)]);
var inst_12734 = (state_12778[(2)]);
var inst_12735 = (inst_12723 + (1));
var tmp12799 = inst_12722;
var tmp12800 = inst_12721;
var tmp12801 = inst_12720;
var inst_12720__$1 = tmp12801;
var inst_12721__$1 = tmp12800;
var inst_12722__$1 = tmp12799;
var inst_12723__$1 = inst_12735;
var state_12778__$1 = (function (){var statearr_12804 = state_12778;
(statearr_12804[(21)] = inst_12734);

(statearr_12804[(19)] = inst_12720__$1);

(statearr_12804[(9)] = inst_12721__$1);

(statearr_12804[(20)] = inst_12722__$1);

(statearr_12804[(10)] = inst_12723__$1);

return statearr_12804;
})();
var statearr_12805_12876 = state_12778__$1;
(statearr_12805_12876[(2)] = null);

(statearr_12805_12876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (40))){
var inst_12747 = (state_12778[(22)]);
var inst_12751 = cljs.core.async.untap_STAR_.call(null,m,inst_12747);
var state_12778__$1 = state_12778;
var statearr_12806_12877 = state_12778__$1;
(statearr_12806_12877[(2)] = inst_12751);

(statearr_12806_12877[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (33))){
var inst_12738 = (state_12778[(23)]);
var inst_12740 = cljs.core.chunked_seq_QMARK_.call(null,inst_12738);
var state_12778__$1 = state_12778;
if(inst_12740){
var statearr_12807_12878 = state_12778__$1;
(statearr_12807_12878[(1)] = (36));

} else {
var statearr_12808_12879 = state_12778__$1;
(statearr_12808_12879[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (13))){
var inst_12669 = (state_12778[(24)]);
var inst_12672 = cljs.core.async.close_BANG_.call(null,inst_12669);
var state_12778__$1 = state_12778;
var statearr_12809_12880 = state_12778__$1;
(statearr_12809_12880[(2)] = inst_12672);

(statearr_12809_12880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (22))){
var inst_12692 = (state_12778[(8)]);
var inst_12695 = cljs.core.async.close_BANG_.call(null,inst_12692);
var state_12778__$1 = state_12778;
var statearr_12810_12881 = state_12778__$1;
(statearr_12810_12881[(2)] = inst_12695);

(statearr_12810_12881[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (36))){
var inst_12738 = (state_12778[(23)]);
var inst_12742 = cljs.core.chunk_first.call(null,inst_12738);
var inst_12743 = cljs.core.chunk_rest.call(null,inst_12738);
var inst_12744 = cljs.core.count.call(null,inst_12742);
var inst_12720 = inst_12743;
var inst_12721 = inst_12742;
var inst_12722 = inst_12744;
var inst_12723 = (0);
var state_12778__$1 = (function (){var statearr_12811 = state_12778;
(statearr_12811[(19)] = inst_12720);

(statearr_12811[(9)] = inst_12721);

(statearr_12811[(20)] = inst_12722);

(statearr_12811[(10)] = inst_12723);

return statearr_12811;
})();
var statearr_12812_12882 = state_12778__$1;
(statearr_12812_12882[(2)] = null);

(statearr_12812_12882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (41))){
var inst_12738 = (state_12778[(23)]);
var inst_12753 = (state_12778[(2)]);
var inst_12754 = cljs.core.next.call(null,inst_12738);
var inst_12720 = inst_12754;
var inst_12721 = null;
var inst_12722 = (0);
var inst_12723 = (0);
var state_12778__$1 = (function (){var statearr_12813 = state_12778;
(statearr_12813[(25)] = inst_12753);

(statearr_12813[(19)] = inst_12720);

(statearr_12813[(9)] = inst_12721);

(statearr_12813[(20)] = inst_12722);

(statearr_12813[(10)] = inst_12723);

return statearr_12813;
})();
var statearr_12814_12883 = state_12778__$1;
(statearr_12814_12883[(2)] = null);

(statearr_12814_12883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (43))){
var state_12778__$1 = state_12778;
var statearr_12815_12884 = state_12778__$1;
(statearr_12815_12884[(2)] = null);

(statearr_12815_12884[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (29))){
var inst_12762 = (state_12778[(2)]);
var state_12778__$1 = state_12778;
var statearr_12816_12885 = state_12778__$1;
(statearr_12816_12885[(2)] = inst_12762);

(statearr_12816_12885[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (44))){
var inst_12771 = (state_12778[(2)]);
var state_12778__$1 = (function (){var statearr_12817 = state_12778;
(statearr_12817[(26)] = inst_12771);

return statearr_12817;
})();
var statearr_12818_12886 = state_12778__$1;
(statearr_12818_12886[(2)] = null);

(statearr_12818_12886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (6))){
var inst_12712 = (state_12778[(27)]);
var inst_12711 = cljs.core.deref.call(null,cs);
var inst_12712__$1 = cljs.core.keys.call(null,inst_12711);
var inst_12713 = cljs.core.count.call(null,inst_12712__$1);
var inst_12714 = cljs.core.reset_BANG_.call(null,dctr,inst_12713);
var inst_12719 = cljs.core.seq.call(null,inst_12712__$1);
var inst_12720 = inst_12719;
var inst_12721 = null;
var inst_12722 = (0);
var inst_12723 = (0);
var state_12778__$1 = (function (){var statearr_12819 = state_12778;
(statearr_12819[(27)] = inst_12712__$1);

(statearr_12819[(28)] = inst_12714);

(statearr_12819[(19)] = inst_12720);

(statearr_12819[(9)] = inst_12721);

(statearr_12819[(20)] = inst_12722);

(statearr_12819[(10)] = inst_12723);

return statearr_12819;
})();
var statearr_12820_12887 = state_12778__$1;
(statearr_12820_12887[(2)] = null);

(statearr_12820_12887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (28))){
var inst_12720 = (state_12778[(19)]);
var inst_12738 = (state_12778[(23)]);
var inst_12738__$1 = cljs.core.seq.call(null,inst_12720);
var state_12778__$1 = (function (){var statearr_12821 = state_12778;
(statearr_12821[(23)] = inst_12738__$1);

return statearr_12821;
})();
if(inst_12738__$1){
var statearr_12822_12888 = state_12778__$1;
(statearr_12822_12888[(1)] = (33));

} else {
var statearr_12823_12889 = state_12778__$1;
(statearr_12823_12889[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (25))){
var inst_12723 = (state_12778[(10)]);
var inst_12722 = (state_12778[(20)]);
var inst_12725 = (inst_12723 < inst_12722);
var inst_12726 = inst_12725;
var state_12778__$1 = state_12778;
if(cljs.core.truth_(inst_12726)){
var statearr_12824_12890 = state_12778__$1;
(statearr_12824_12890[(1)] = (27));

} else {
var statearr_12825_12891 = state_12778__$1;
(statearr_12825_12891[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (34))){
var state_12778__$1 = state_12778;
var statearr_12826_12892 = state_12778__$1;
(statearr_12826_12892[(2)] = null);

(statearr_12826_12892[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (17))){
var state_12778__$1 = state_12778;
var statearr_12827_12893 = state_12778__$1;
(statearr_12827_12893[(2)] = null);

(statearr_12827_12893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (3))){
var inst_12776 = (state_12778[(2)]);
var state_12778__$1 = state_12778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12778__$1,inst_12776);
} else {
if((state_val_12779 === (12))){
var inst_12707 = (state_12778[(2)]);
var state_12778__$1 = state_12778;
var statearr_12828_12894 = state_12778__$1;
(statearr_12828_12894[(2)] = inst_12707);

(statearr_12828_12894[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (2))){
var state_12778__$1 = state_12778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12778__$1,(4),ch);
} else {
if((state_val_12779 === (23))){
var state_12778__$1 = state_12778;
var statearr_12829_12895 = state_12778__$1;
(statearr_12829_12895[(2)] = null);

(statearr_12829_12895[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (35))){
var inst_12760 = (state_12778[(2)]);
var state_12778__$1 = state_12778;
var statearr_12830_12896 = state_12778__$1;
(statearr_12830_12896[(2)] = inst_12760);

(statearr_12830_12896[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (19))){
var inst_12679 = (state_12778[(7)]);
var inst_12683 = cljs.core.chunk_first.call(null,inst_12679);
var inst_12684 = cljs.core.chunk_rest.call(null,inst_12679);
var inst_12685 = cljs.core.count.call(null,inst_12683);
var inst_12657 = inst_12684;
var inst_12658 = inst_12683;
var inst_12659 = inst_12685;
var inst_12660 = (0);
var state_12778__$1 = (function (){var statearr_12831 = state_12778;
(statearr_12831[(14)] = inst_12657);

(statearr_12831[(15)] = inst_12658);

(statearr_12831[(16)] = inst_12659);

(statearr_12831[(17)] = inst_12660);

return statearr_12831;
})();
var statearr_12832_12897 = state_12778__$1;
(statearr_12832_12897[(2)] = null);

(statearr_12832_12897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (11))){
var inst_12657 = (state_12778[(14)]);
var inst_12679 = (state_12778[(7)]);
var inst_12679__$1 = cljs.core.seq.call(null,inst_12657);
var state_12778__$1 = (function (){var statearr_12833 = state_12778;
(statearr_12833[(7)] = inst_12679__$1);

return statearr_12833;
})();
if(inst_12679__$1){
var statearr_12834_12898 = state_12778__$1;
(statearr_12834_12898[(1)] = (16));

} else {
var statearr_12835_12899 = state_12778__$1;
(statearr_12835_12899[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (9))){
var inst_12709 = (state_12778[(2)]);
var state_12778__$1 = state_12778;
var statearr_12836_12900 = state_12778__$1;
(statearr_12836_12900[(2)] = inst_12709);

(statearr_12836_12900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (5))){
var inst_12655 = cljs.core.deref.call(null,cs);
var inst_12656 = cljs.core.seq.call(null,inst_12655);
var inst_12657 = inst_12656;
var inst_12658 = null;
var inst_12659 = (0);
var inst_12660 = (0);
var state_12778__$1 = (function (){var statearr_12837 = state_12778;
(statearr_12837[(14)] = inst_12657);

(statearr_12837[(15)] = inst_12658);

(statearr_12837[(16)] = inst_12659);

(statearr_12837[(17)] = inst_12660);

return statearr_12837;
})();
var statearr_12838_12901 = state_12778__$1;
(statearr_12838_12901[(2)] = null);

(statearr_12838_12901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (14))){
var state_12778__$1 = state_12778;
var statearr_12839_12902 = state_12778__$1;
(statearr_12839_12902[(2)] = null);

(statearr_12839_12902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (45))){
var inst_12768 = (state_12778[(2)]);
var state_12778__$1 = state_12778;
var statearr_12840_12903 = state_12778__$1;
(statearr_12840_12903[(2)] = inst_12768);

(statearr_12840_12903[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (26))){
var inst_12712 = (state_12778[(27)]);
var inst_12764 = (state_12778[(2)]);
var inst_12765 = cljs.core.seq.call(null,inst_12712);
var state_12778__$1 = (function (){var statearr_12841 = state_12778;
(statearr_12841[(29)] = inst_12764);

return statearr_12841;
})();
if(inst_12765){
var statearr_12842_12904 = state_12778__$1;
(statearr_12842_12904[(1)] = (42));

} else {
var statearr_12843_12905 = state_12778__$1;
(statearr_12843_12905[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (16))){
var inst_12679 = (state_12778[(7)]);
var inst_12681 = cljs.core.chunked_seq_QMARK_.call(null,inst_12679);
var state_12778__$1 = state_12778;
if(inst_12681){
var statearr_12844_12906 = state_12778__$1;
(statearr_12844_12906[(1)] = (19));

} else {
var statearr_12845_12907 = state_12778__$1;
(statearr_12845_12907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (38))){
var inst_12757 = (state_12778[(2)]);
var state_12778__$1 = state_12778;
var statearr_12846_12908 = state_12778__$1;
(statearr_12846_12908[(2)] = inst_12757);

(statearr_12846_12908[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (30))){
var state_12778__$1 = state_12778;
var statearr_12847_12909 = state_12778__$1;
(statearr_12847_12909[(2)] = null);

(statearr_12847_12909[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (10))){
var inst_12658 = (state_12778[(15)]);
var inst_12660 = (state_12778[(17)]);
var inst_12668 = cljs.core._nth.call(null,inst_12658,inst_12660);
var inst_12669 = cljs.core.nth.call(null,inst_12668,(0),null);
var inst_12670 = cljs.core.nth.call(null,inst_12668,(1),null);
var state_12778__$1 = (function (){var statearr_12848 = state_12778;
(statearr_12848[(24)] = inst_12669);

return statearr_12848;
})();
if(cljs.core.truth_(inst_12670)){
var statearr_12849_12910 = state_12778__$1;
(statearr_12849_12910[(1)] = (13));

} else {
var statearr_12850_12911 = state_12778__$1;
(statearr_12850_12911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (18))){
var inst_12705 = (state_12778[(2)]);
var state_12778__$1 = state_12778;
var statearr_12851_12912 = state_12778__$1;
(statearr_12851_12912[(2)] = inst_12705);

(statearr_12851_12912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (42))){
var state_12778__$1 = state_12778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12778__$1,(45),dchan);
} else {
if((state_val_12779 === (37))){
var inst_12738 = (state_12778[(23)]);
var inst_12747 = (state_12778[(22)]);
var inst_12648 = (state_12778[(12)]);
var inst_12747__$1 = cljs.core.first.call(null,inst_12738);
var inst_12748 = cljs.core.async.put_BANG_.call(null,inst_12747__$1,inst_12648,done);
var state_12778__$1 = (function (){var statearr_12852 = state_12778;
(statearr_12852[(22)] = inst_12747__$1);

return statearr_12852;
})();
if(cljs.core.truth_(inst_12748)){
var statearr_12853_12913 = state_12778__$1;
(statearr_12853_12913[(1)] = (39));

} else {
var statearr_12854_12914 = state_12778__$1;
(statearr_12854_12914[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (8))){
var inst_12660 = (state_12778[(17)]);
var inst_12659 = (state_12778[(16)]);
var inst_12662 = (inst_12660 < inst_12659);
var inst_12663 = inst_12662;
var state_12778__$1 = state_12778;
if(cljs.core.truth_(inst_12663)){
var statearr_12855_12915 = state_12778__$1;
(statearr_12855_12915[(1)] = (10));

} else {
var statearr_12856_12916 = state_12778__$1;
(statearr_12856_12916[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__11944__auto__ = null;
var cljs$core$async$mult_$_state_machine__11944__auto____0 = (function (){
var statearr_12857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12857[(0)] = cljs$core$async$mult_$_state_machine__11944__auto__);

(statearr_12857[(1)] = (1));

return statearr_12857;
});
var cljs$core$async$mult_$_state_machine__11944__auto____1 = (function (state_12778){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_12778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e12858){var ex__11947__auto__ = e12858;
var statearr_12859_12917 = state_12778;
(statearr_12859_12917[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_12778[(4)]))){
var statearr_12860_12918 = state_12778;
(statearr_12860_12918[(1)] = cljs.core.first.call(null,(state_12778[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12919 = state_12778;
state_12778 = G__12919;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11944__auto__ = function(state_12778){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11944__auto____1.call(this,state_12778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11944__auto____0;
cljs$core$async$mult_$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11944__auto____1;
return cljs$core$async$mult_$_state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_12861 = f__12018__auto__.call(null);
(statearr_12861[(6)] = c__12017__auto___12862);

return statearr_12861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__12921 = arguments.length;
switch (G__12921) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_12923 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_12923.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12924 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_12924.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12925 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12925.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12926 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_12926.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12927 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12927.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12938 = arguments.length;
var i__4737__auto___12939 = (0);
while(true){
if((i__4737__auto___12939 < len__4736__auto___12938)){
args__4742__auto__.push((arguments[i__4737__auto___12939]));

var G__12940 = (i__4737__auto___12939 + (1));
i__4737__auto___12939 = G__12940;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12932){
var map__12933 = p__12932;
var map__12933__$1 = (((((!((map__12933 == null))))?(((((map__12933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12933):map__12933);
var opts = map__12933__$1;
var statearr_12935_12941 = state;
(statearr_12935_12941[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_12936_12942 = state;
(statearr_12936_12942[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_12937_12943 = state;
(statearr_12937_12943[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12928){
var G__12929 = cljs.core.first.call(null,seq12928);
var seq12928__$1 = cljs.core.next.call(null,seq12928);
var G__12930 = cljs.core.first.call(null,seq12928__$1);
var seq12928__$2 = cljs.core.next.call(null,seq12928__$1);
var G__12931 = cljs.core.first.call(null,seq12928__$2);
var seq12928__$3 = cljs.core.next.call(null,seq12928__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12929,G__12930,G__12931,seq12928__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12944 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12945){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12945 = meta12945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12946,meta12945__$1){
var self__ = this;
var _12946__$1 = this;
return (new cljs.core.async.t_cljs$core$async12944(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12945__$1));
}));

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12946){
var self__ = this;
var _12946__$1 = this;
return self__.meta12945;
}));

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12945","meta12945",1328854820,null)], null);
}));

(cljs.core.async.t_cljs$core$async12944.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12944");

(cljs.core.async.t_cljs$core$async12944.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async12944");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12944.
 */
cljs.core.async.__GT_t_cljs$core$async12944 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12944(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12945){
return (new cljs.core.async.t_cljs$core$async12944(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12945));
});

}

return (new cljs.core.async.t_cljs$core$async12944(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12017__auto___13109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_13048){
var state_val_13049 = (state_13048[(1)]);
if((state_val_13049 === (7))){
var inst_12963 = (state_13048[(2)]);
var state_13048__$1 = state_13048;
var statearr_13050_13110 = state_13048__$1;
(statearr_13050_13110[(2)] = inst_12963);

(statearr_13050_13110[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (20))){
var inst_12975 = (state_13048[(7)]);
var state_13048__$1 = state_13048;
var statearr_13051_13111 = state_13048__$1;
(statearr_13051_13111[(2)] = inst_12975);

(statearr_13051_13111[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (27))){
var state_13048__$1 = state_13048;
var statearr_13052_13112 = state_13048__$1;
(statearr_13052_13112[(2)] = null);

(statearr_13052_13112[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (1))){
var inst_12950 = (state_13048[(8)]);
var inst_12950__$1 = calc_state.call(null);
var inst_12952 = (inst_12950__$1 == null);
var inst_12953 = cljs.core.not.call(null,inst_12952);
var state_13048__$1 = (function (){var statearr_13053 = state_13048;
(statearr_13053[(8)] = inst_12950__$1);

return statearr_13053;
})();
if(inst_12953){
var statearr_13054_13113 = state_13048__$1;
(statearr_13054_13113[(1)] = (2));

} else {
var statearr_13055_13114 = state_13048__$1;
(statearr_13055_13114[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (24))){
var inst_12999 = (state_13048[(9)]);
var inst_13008 = (state_13048[(10)]);
var inst_13022 = (state_13048[(11)]);
var inst_13022__$1 = inst_12999.call(null,inst_13008);
var state_13048__$1 = (function (){var statearr_13056 = state_13048;
(statearr_13056[(11)] = inst_13022__$1);

return statearr_13056;
})();
if(cljs.core.truth_(inst_13022__$1)){
var statearr_13057_13115 = state_13048__$1;
(statearr_13057_13115[(1)] = (29));

} else {
var statearr_13058_13116 = state_13048__$1;
(statearr_13058_13116[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (4))){
var inst_12966 = (state_13048[(2)]);
var state_13048__$1 = state_13048;
if(cljs.core.truth_(inst_12966)){
var statearr_13059_13117 = state_13048__$1;
(statearr_13059_13117[(1)] = (8));

} else {
var statearr_13060_13118 = state_13048__$1;
(statearr_13060_13118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (15))){
var inst_12993 = (state_13048[(2)]);
var state_13048__$1 = state_13048;
if(cljs.core.truth_(inst_12993)){
var statearr_13061_13119 = state_13048__$1;
(statearr_13061_13119[(1)] = (19));

} else {
var statearr_13062_13120 = state_13048__$1;
(statearr_13062_13120[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (21))){
var inst_12998 = (state_13048[(12)]);
var inst_12998__$1 = (state_13048[(2)]);
var inst_12999 = cljs.core.get.call(null,inst_12998__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13000 = cljs.core.get.call(null,inst_12998__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13001 = cljs.core.get.call(null,inst_12998__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13048__$1 = (function (){var statearr_13063 = state_13048;
(statearr_13063[(12)] = inst_12998__$1);

(statearr_13063[(9)] = inst_12999);

(statearr_13063[(13)] = inst_13000);

return statearr_13063;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13048__$1,(22),inst_13001);
} else {
if((state_val_13049 === (31))){
var inst_13030 = (state_13048[(2)]);
var state_13048__$1 = state_13048;
if(cljs.core.truth_(inst_13030)){
var statearr_13064_13121 = state_13048__$1;
(statearr_13064_13121[(1)] = (32));

} else {
var statearr_13065_13122 = state_13048__$1;
(statearr_13065_13122[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (32))){
var inst_13007 = (state_13048[(14)]);
var state_13048__$1 = state_13048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13048__$1,(35),out,inst_13007);
} else {
if((state_val_13049 === (33))){
var inst_12998 = (state_13048[(12)]);
var inst_12975 = inst_12998;
var state_13048__$1 = (function (){var statearr_13066 = state_13048;
(statearr_13066[(7)] = inst_12975);

return statearr_13066;
})();
var statearr_13067_13123 = state_13048__$1;
(statearr_13067_13123[(2)] = null);

(statearr_13067_13123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (13))){
var inst_12975 = (state_13048[(7)]);
var inst_12982 = inst_12975.cljs$lang$protocol_mask$partition0$;
var inst_12983 = (inst_12982 & (64));
var inst_12984 = inst_12975.cljs$core$ISeq$;
var inst_12985 = (cljs.core.PROTOCOL_SENTINEL === inst_12984);
var inst_12986 = ((inst_12983) || (inst_12985));
var state_13048__$1 = state_13048;
if(cljs.core.truth_(inst_12986)){
var statearr_13068_13124 = state_13048__$1;
(statearr_13068_13124[(1)] = (16));

} else {
var statearr_13069_13125 = state_13048__$1;
(statearr_13069_13125[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (22))){
var inst_13007 = (state_13048[(14)]);
var inst_13008 = (state_13048[(10)]);
var inst_13006 = (state_13048[(2)]);
var inst_13007__$1 = cljs.core.nth.call(null,inst_13006,(0),null);
var inst_13008__$1 = cljs.core.nth.call(null,inst_13006,(1),null);
var inst_13009 = (inst_13007__$1 == null);
var inst_13010 = cljs.core._EQ_.call(null,inst_13008__$1,change);
var inst_13011 = ((inst_13009) || (inst_13010));
var state_13048__$1 = (function (){var statearr_13070 = state_13048;
(statearr_13070[(14)] = inst_13007__$1);

(statearr_13070[(10)] = inst_13008__$1);

return statearr_13070;
})();
if(cljs.core.truth_(inst_13011)){
var statearr_13071_13126 = state_13048__$1;
(statearr_13071_13126[(1)] = (23));

} else {
var statearr_13072_13127 = state_13048__$1;
(statearr_13072_13127[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (36))){
var inst_12998 = (state_13048[(12)]);
var inst_12975 = inst_12998;
var state_13048__$1 = (function (){var statearr_13073 = state_13048;
(statearr_13073[(7)] = inst_12975);

return statearr_13073;
})();
var statearr_13074_13128 = state_13048__$1;
(statearr_13074_13128[(2)] = null);

(statearr_13074_13128[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (29))){
var inst_13022 = (state_13048[(11)]);
var state_13048__$1 = state_13048;
var statearr_13075_13129 = state_13048__$1;
(statearr_13075_13129[(2)] = inst_13022);

(statearr_13075_13129[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (6))){
var state_13048__$1 = state_13048;
var statearr_13076_13130 = state_13048__$1;
(statearr_13076_13130[(2)] = false);

(statearr_13076_13130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (28))){
var inst_13018 = (state_13048[(2)]);
var inst_13019 = calc_state.call(null);
var inst_12975 = inst_13019;
var state_13048__$1 = (function (){var statearr_13077 = state_13048;
(statearr_13077[(15)] = inst_13018);

(statearr_13077[(7)] = inst_12975);

return statearr_13077;
})();
var statearr_13078_13131 = state_13048__$1;
(statearr_13078_13131[(2)] = null);

(statearr_13078_13131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (25))){
var inst_13044 = (state_13048[(2)]);
var state_13048__$1 = state_13048;
var statearr_13079_13132 = state_13048__$1;
(statearr_13079_13132[(2)] = inst_13044);

(statearr_13079_13132[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (34))){
var inst_13042 = (state_13048[(2)]);
var state_13048__$1 = state_13048;
var statearr_13080_13133 = state_13048__$1;
(statearr_13080_13133[(2)] = inst_13042);

(statearr_13080_13133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (17))){
var state_13048__$1 = state_13048;
var statearr_13081_13134 = state_13048__$1;
(statearr_13081_13134[(2)] = false);

(statearr_13081_13134[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (3))){
var state_13048__$1 = state_13048;
var statearr_13082_13135 = state_13048__$1;
(statearr_13082_13135[(2)] = false);

(statearr_13082_13135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (12))){
var inst_13046 = (state_13048[(2)]);
var state_13048__$1 = state_13048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13048__$1,inst_13046);
} else {
if((state_val_13049 === (2))){
var inst_12950 = (state_13048[(8)]);
var inst_12955 = inst_12950.cljs$lang$protocol_mask$partition0$;
var inst_12956 = (inst_12955 & (64));
var inst_12957 = inst_12950.cljs$core$ISeq$;
var inst_12958 = (cljs.core.PROTOCOL_SENTINEL === inst_12957);
var inst_12959 = ((inst_12956) || (inst_12958));
var state_13048__$1 = state_13048;
if(cljs.core.truth_(inst_12959)){
var statearr_13083_13136 = state_13048__$1;
(statearr_13083_13136[(1)] = (5));

} else {
var statearr_13084_13137 = state_13048__$1;
(statearr_13084_13137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (23))){
var inst_13007 = (state_13048[(14)]);
var inst_13013 = (inst_13007 == null);
var state_13048__$1 = state_13048;
if(cljs.core.truth_(inst_13013)){
var statearr_13085_13138 = state_13048__$1;
(statearr_13085_13138[(1)] = (26));

} else {
var statearr_13086_13139 = state_13048__$1;
(statearr_13086_13139[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (35))){
var inst_13033 = (state_13048[(2)]);
var state_13048__$1 = state_13048;
if(cljs.core.truth_(inst_13033)){
var statearr_13087_13140 = state_13048__$1;
(statearr_13087_13140[(1)] = (36));

} else {
var statearr_13088_13141 = state_13048__$1;
(statearr_13088_13141[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (19))){
var inst_12975 = (state_13048[(7)]);
var inst_12995 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12975);
var state_13048__$1 = state_13048;
var statearr_13089_13142 = state_13048__$1;
(statearr_13089_13142[(2)] = inst_12995);

(statearr_13089_13142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (11))){
var inst_12975 = (state_13048[(7)]);
var inst_12979 = (inst_12975 == null);
var inst_12980 = cljs.core.not.call(null,inst_12979);
var state_13048__$1 = state_13048;
if(inst_12980){
var statearr_13090_13143 = state_13048__$1;
(statearr_13090_13143[(1)] = (13));

} else {
var statearr_13091_13144 = state_13048__$1;
(statearr_13091_13144[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (9))){
var inst_12950 = (state_13048[(8)]);
var state_13048__$1 = state_13048;
var statearr_13092_13145 = state_13048__$1;
(statearr_13092_13145[(2)] = inst_12950);

(statearr_13092_13145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (5))){
var state_13048__$1 = state_13048;
var statearr_13093_13146 = state_13048__$1;
(statearr_13093_13146[(2)] = true);

(statearr_13093_13146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (14))){
var state_13048__$1 = state_13048;
var statearr_13094_13147 = state_13048__$1;
(statearr_13094_13147[(2)] = false);

(statearr_13094_13147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (26))){
var inst_13008 = (state_13048[(10)]);
var inst_13015 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13008);
var state_13048__$1 = state_13048;
var statearr_13095_13148 = state_13048__$1;
(statearr_13095_13148[(2)] = inst_13015);

(statearr_13095_13148[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (16))){
var state_13048__$1 = state_13048;
var statearr_13096_13149 = state_13048__$1;
(statearr_13096_13149[(2)] = true);

(statearr_13096_13149[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (38))){
var inst_13038 = (state_13048[(2)]);
var state_13048__$1 = state_13048;
var statearr_13097_13150 = state_13048__$1;
(statearr_13097_13150[(2)] = inst_13038);

(statearr_13097_13150[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (30))){
var inst_12999 = (state_13048[(9)]);
var inst_13000 = (state_13048[(13)]);
var inst_13008 = (state_13048[(10)]);
var inst_13025 = cljs.core.empty_QMARK_.call(null,inst_12999);
var inst_13026 = inst_13000.call(null,inst_13008);
var inst_13027 = cljs.core.not.call(null,inst_13026);
var inst_13028 = ((inst_13025) && (inst_13027));
var state_13048__$1 = state_13048;
var statearr_13098_13151 = state_13048__$1;
(statearr_13098_13151[(2)] = inst_13028);

(statearr_13098_13151[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (10))){
var inst_12950 = (state_13048[(8)]);
var inst_12971 = (state_13048[(2)]);
var inst_12972 = cljs.core.get.call(null,inst_12971,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12973 = cljs.core.get.call(null,inst_12971,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12974 = cljs.core.get.call(null,inst_12971,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12975 = inst_12950;
var state_13048__$1 = (function (){var statearr_13099 = state_13048;
(statearr_13099[(16)] = inst_12972);

(statearr_13099[(17)] = inst_12973);

(statearr_13099[(18)] = inst_12974);

(statearr_13099[(7)] = inst_12975);

return statearr_13099;
})();
var statearr_13100_13152 = state_13048__$1;
(statearr_13100_13152[(2)] = null);

(statearr_13100_13152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (18))){
var inst_12990 = (state_13048[(2)]);
var state_13048__$1 = state_13048;
var statearr_13101_13153 = state_13048__$1;
(statearr_13101_13153[(2)] = inst_12990);

(statearr_13101_13153[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (37))){
var state_13048__$1 = state_13048;
var statearr_13102_13154 = state_13048__$1;
(statearr_13102_13154[(2)] = null);

(statearr_13102_13154[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (8))){
var inst_12950 = (state_13048[(8)]);
var inst_12968 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12950);
var state_13048__$1 = state_13048;
var statearr_13103_13155 = state_13048__$1;
(statearr_13103_13155[(2)] = inst_12968);

(statearr_13103_13155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__11944__auto__ = null;
var cljs$core$async$mix_$_state_machine__11944__auto____0 = (function (){
var statearr_13104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13104[(0)] = cljs$core$async$mix_$_state_machine__11944__auto__);

(statearr_13104[(1)] = (1));

return statearr_13104;
});
var cljs$core$async$mix_$_state_machine__11944__auto____1 = (function (state_13048){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_13048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e13105){var ex__11947__auto__ = e13105;
var statearr_13106_13156 = state_13048;
(statearr_13106_13156[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_13048[(4)]))){
var statearr_13107_13157 = state_13048;
(statearr_13107_13157[(1)] = cljs.core.first.call(null,(state_13048[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13158 = state_13048;
state_13048 = G__13158;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11944__auto__ = function(state_13048){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11944__auto____1.call(this,state_13048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11944__auto____0;
cljs$core$async$mix_$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11944__auto____1;
return cljs$core$async$mix_$_state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_13108 = f__12018__auto__.call(null);
(statearr_13108[(6)] = c__12017__auto___13109);

return statearr_13108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_13161 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_13161.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13162 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_13162.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13163 = (function() {
var G__13164 = null;
var G__13164__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__13164__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__13164 = function(p,v){
switch(arguments.length){
case 1:
return G__13164__1.call(this,p);
case 2:
return G__13164__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13164.cljs$core$IFn$_invoke$arity$1 = G__13164__1;
G__13164.cljs$core$IFn$_invoke$arity$2 = G__13164__2;
return G__13164;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13160 = arguments.length;
switch (G__13160) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13163.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13163.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__13168 = arguments.length;
switch (G__13168) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__13166_SHARP_){
if(cljs.core.truth_(p1__13166_SHARP_.call(null,topic))){
return p1__13166_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13166_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13169 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13170){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13170 = meta13170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13171,meta13170__$1){
var self__ = this;
var _13171__$1 = this;
return (new cljs.core.async.t_cljs$core$async13169(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13170__$1));
}));

(cljs.core.async.t_cljs$core$async13169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13171){
var self__ = this;
var _13171__$1 = this;
return self__.meta13170;
}));

(cljs.core.async.t_cljs$core$async13169.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13169.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13169.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13169.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async13169.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async13169.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async13169.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async13169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13170","meta13170",-1144452056,null)], null);
}));

(cljs.core.async.t_cljs$core$async13169.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13169");

(cljs.core.async.t_cljs$core$async13169.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async13169");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13169.
 */
cljs.core.async.__GT_t_cljs$core$async13169 = (function cljs$core$async$__GT_t_cljs$core$async13169(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13170){
return (new cljs.core.async.t_cljs$core$async13169(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13170));
});

}

return (new cljs.core.async.t_cljs$core$async13169(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12017__auto___13290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_13243){
var state_val_13244 = (state_13243[(1)]);
if((state_val_13244 === (7))){
var inst_13239 = (state_13243[(2)]);
var state_13243__$1 = state_13243;
var statearr_13245_13291 = state_13243__$1;
(statearr_13245_13291[(2)] = inst_13239);

(statearr_13245_13291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (20))){
var state_13243__$1 = state_13243;
var statearr_13246_13292 = state_13243__$1;
(statearr_13246_13292[(2)] = null);

(statearr_13246_13292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (1))){
var state_13243__$1 = state_13243;
var statearr_13247_13293 = state_13243__$1;
(statearr_13247_13293[(2)] = null);

(statearr_13247_13293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (24))){
var inst_13222 = (state_13243[(7)]);
var inst_13231 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13222);
var state_13243__$1 = state_13243;
var statearr_13248_13294 = state_13243__$1;
(statearr_13248_13294[(2)] = inst_13231);

(statearr_13248_13294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (4))){
var inst_13174 = (state_13243[(8)]);
var inst_13174__$1 = (state_13243[(2)]);
var inst_13175 = (inst_13174__$1 == null);
var state_13243__$1 = (function (){var statearr_13249 = state_13243;
(statearr_13249[(8)] = inst_13174__$1);

return statearr_13249;
})();
if(cljs.core.truth_(inst_13175)){
var statearr_13250_13295 = state_13243__$1;
(statearr_13250_13295[(1)] = (5));

} else {
var statearr_13251_13296 = state_13243__$1;
(statearr_13251_13296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (15))){
var inst_13216 = (state_13243[(2)]);
var state_13243__$1 = state_13243;
var statearr_13252_13297 = state_13243__$1;
(statearr_13252_13297[(2)] = inst_13216);

(statearr_13252_13297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (21))){
var inst_13236 = (state_13243[(2)]);
var state_13243__$1 = (function (){var statearr_13253 = state_13243;
(statearr_13253[(9)] = inst_13236);

return statearr_13253;
})();
var statearr_13254_13298 = state_13243__$1;
(statearr_13254_13298[(2)] = null);

(statearr_13254_13298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (13))){
var inst_13198 = (state_13243[(10)]);
var inst_13200 = cljs.core.chunked_seq_QMARK_.call(null,inst_13198);
var state_13243__$1 = state_13243;
if(inst_13200){
var statearr_13255_13299 = state_13243__$1;
(statearr_13255_13299[(1)] = (16));

} else {
var statearr_13256_13300 = state_13243__$1;
(statearr_13256_13300[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (22))){
var inst_13228 = (state_13243[(2)]);
var state_13243__$1 = state_13243;
if(cljs.core.truth_(inst_13228)){
var statearr_13257_13301 = state_13243__$1;
(statearr_13257_13301[(1)] = (23));

} else {
var statearr_13258_13302 = state_13243__$1;
(statearr_13258_13302[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (6))){
var inst_13174 = (state_13243[(8)]);
var inst_13222 = (state_13243[(7)]);
var inst_13224 = (state_13243[(11)]);
var inst_13222__$1 = topic_fn.call(null,inst_13174);
var inst_13223 = cljs.core.deref.call(null,mults);
var inst_13224__$1 = cljs.core.get.call(null,inst_13223,inst_13222__$1);
var state_13243__$1 = (function (){var statearr_13259 = state_13243;
(statearr_13259[(7)] = inst_13222__$1);

(statearr_13259[(11)] = inst_13224__$1);

return statearr_13259;
})();
if(cljs.core.truth_(inst_13224__$1)){
var statearr_13260_13303 = state_13243__$1;
(statearr_13260_13303[(1)] = (19));

} else {
var statearr_13261_13304 = state_13243__$1;
(statearr_13261_13304[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (25))){
var inst_13233 = (state_13243[(2)]);
var state_13243__$1 = state_13243;
var statearr_13262_13305 = state_13243__$1;
(statearr_13262_13305[(2)] = inst_13233);

(statearr_13262_13305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (17))){
var inst_13198 = (state_13243[(10)]);
var inst_13207 = cljs.core.first.call(null,inst_13198);
var inst_13208 = cljs.core.async.muxch_STAR_.call(null,inst_13207);
var inst_13209 = cljs.core.async.close_BANG_.call(null,inst_13208);
var inst_13210 = cljs.core.next.call(null,inst_13198);
var inst_13184 = inst_13210;
var inst_13185 = null;
var inst_13186 = (0);
var inst_13187 = (0);
var state_13243__$1 = (function (){var statearr_13263 = state_13243;
(statearr_13263[(12)] = inst_13209);

(statearr_13263[(13)] = inst_13184);

(statearr_13263[(14)] = inst_13185);

(statearr_13263[(15)] = inst_13186);

(statearr_13263[(16)] = inst_13187);

return statearr_13263;
})();
var statearr_13264_13306 = state_13243__$1;
(statearr_13264_13306[(2)] = null);

(statearr_13264_13306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (3))){
var inst_13241 = (state_13243[(2)]);
var state_13243__$1 = state_13243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13243__$1,inst_13241);
} else {
if((state_val_13244 === (12))){
var inst_13218 = (state_13243[(2)]);
var state_13243__$1 = state_13243;
var statearr_13265_13307 = state_13243__$1;
(statearr_13265_13307[(2)] = inst_13218);

(statearr_13265_13307[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (2))){
var state_13243__$1 = state_13243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13243__$1,(4),ch);
} else {
if((state_val_13244 === (23))){
var state_13243__$1 = state_13243;
var statearr_13266_13308 = state_13243__$1;
(statearr_13266_13308[(2)] = null);

(statearr_13266_13308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (19))){
var inst_13224 = (state_13243[(11)]);
var inst_13174 = (state_13243[(8)]);
var inst_13226 = cljs.core.async.muxch_STAR_.call(null,inst_13224);
var state_13243__$1 = state_13243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13243__$1,(22),inst_13226,inst_13174);
} else {
if((state_val_13244 === (11))){
var inst_13184 = (state_13243[(13)]);
var inst_13198 = (state_13243[(10)]);
var inst_13198__$1 = cljs.core.seq.call(null,inst_13184);
var state_13243__$1 = (function (){var statearr_13267 = state_13243;
(statearr_13267[(10)] = inst_13198__$1);

return statearr_13267;
})();
if(inst_13198__$1){
var statearr_13268_13309 = state_13243__$1;
(statearr_13268_13309[(1)] = (13));

} else {
var statearr_13269_13310 = state_13243__$1;
(statearr_13269_13310[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (9))){
var inst_13220 = (state_13243[(2)]);
var state_13243__$1 = state_13243;
var statearr_13270_13311 = state_13243__$1;
(statearr_13270_13311[(2)] = inst_13220);

(statearr_13270_13311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (5))){
var inst_13181 = cljs.core.deref.call(null,mults);
var inst_13182 = cljs.core.vals.call(null,inst_13181);
var inst_13183 = cljs.core.seq.call(null,inst_13182);
var inst_13184 = inst_13183;
var inst_13185 = null;
var inst_13186 = (0);
var inst_13187 = (0);
var state_13243__$1 = (function (){var statearr_13271 = state_13243;
(statearr_13271[(13)] = inst_13184);

(statearr_13271[(14)] = inst_13185);

(statearr_13271[(15)] = inst_13186);

(statearr_13271[(16)] = inst_13187);

return statearr_13271;
})();
var statearr_13272_13312 = state_13243__$1;
(statearr_13272_13312[(2)] = null);

(statearr_13272_13312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (14))){
var state_13243__$1 = state_13243;
var statearr_13276_13313 = state_13243__$1;
(statearr_13276_13313[(2)] = null);

(statearr_13276_13313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (16))){
var inst_13198 = (state_13243[(10)]);
var inst_13202 = cljs.core.chunk_first.call(null,inst_13198);
var inst_13203 = cljs.core.chunk_rest.call(null,inst_13198);
var inst_13204 = cljs.core.count.call(null,inst_13202);
var inst_13184 = inst_13203;
var inst_13185 = inst_13202;
var inst_13186 = inst_13204;
var inst_13187 = (0);
var state_13243__$1 = (function (){var statearr_13277 = state_13243;
(statearr_13277[(13)] = inst_13184);

(statearr_13277[(14)] = inst_13185);

(statearr_13277[(15)] = inst_13186);

(statearr_13277[(16)] = inst_13187);

return statearr_13277;
})();
var statearr_13278_13314 = state_13243__$1;
(statearr_13278_13314[(2)] = null);

(statearr_13278_13314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (10))){
var inst_13185 = (state_13243[(14)]);
var inst_13187 = (state_13243[(16)]);
var inst_13184 = (state_13243[(13)]);
var inst_13186 = (state_13243[(15)]);
var inst_13192 = cljs.core._nth.call(null,inst_13185,inst_13187);
var inst_13193 = cljs.core.async.muxch_STAR_.call(null,inst_13192);
var inst_13194 = cljs.core.async.close_BANG_.call(null,inst_13193);
var inst_13195 = (inst_13187 + (1));
var tmp13273 = inst_13184;
var tmp13274 = inst_13185;
var tmp13275 = inst_13186;
var inst_13184__$1 = tmp13273;
var inst_13185__$1 = tmp13274;
var inst_13186__$1 = tmp13275;
var inst_13187__$1 = inst_13195;
var state_13243__$1 = (function (){var statearr_13279 = state_13243;
(statearr_13279[(17)] = inst_13194);

(statearr_13279[(13)] = inst_13184__$1);

(statearr_13279[(14)] = inst_13185__$1);

(statearr_13279[(15)] = inst_13186__$1);

(statearr_13279[(16)] = inst_13187__$1);

return statearr_13279;
})();
var statearr_13280_13315 = state_13243__$1;
(statearr_13280_13315[(2)] = null);

(statearr_13280_13315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (18))){
var inst_13213 = (state_13243[(2)]);
var state_13243__$1 = state_13243;
var statearr_13281_13316 = state_13243__$1;
(statearr_13281_13316[(2)] = inst_13213);

(statearr_13281_13316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13244 === (8))){
var inst_13187 = (state_13243[(16)]);
var inst_13186 = (state_13243[(15)]);
var inst_13189 = (inst_13187 < inst_13186);
var inst_13190 = inst_13189;
var state_13243__$1 = state_13243;
if(cljs.core.truth_(inst_13190)){
var statearr_13282_13317 = state_13243__$1;
(statearr_13282_13317[(1)] = (10));

} else {
var statearr_13283_13318 = state_13243__$1;
(statearr_13283_13318[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11944__auto__ = null;
var cljs$core$async$state_machine__11944__auto____0 = (function (){
var statearr_13284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13284[(0)] = cljs$core$async$state_machine__11944__auto__);

(statearr_13284[(1)] = (1));

return statearr_13284;
});
var cljs$core$async$state_machine__11944__auto____1 = (function (state_13243){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_13243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e13285){var ex__11947__auto__ = e13285;
var statearr_13286_13319 = state_13243;
(statearr_13286_13319[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_13243[(4)]))){
var statearr_13287_13320 = state_13243;
(statearr_13287_13320[(1)] = cljs.core.first.call(null,(state_13243[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13321 = state_13243;
state_13243 = G__13321;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$state_machine__11944__auto__ = function(state_13243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11944__auto____1.call(this,state_13243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11944__auto____0;
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11944__auto____1;
return cljs$core$async$state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_13288 = f__12018__auto__.call(null);
(statearr_13288[(6)] = c__12017__auto___13290);

return statearr_13288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__13323 = arguments.length;
switch (G__13323) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__13326 = arguments.length;
switch (G__13326) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__13329 = arguments.length;
switch (G__13329) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__12017__auto___13407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_13372){
var state_val_13373 = (state_13372[(1)]);
if((state_val_13373 === (7))){
var state_13372__$1 = state_13372;
var statearr_13374_13408 = state_13372__$1;
(statearr_13374_13408[(2)] = null);

(statearr_13374_13408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (1))){
var state_13372__$1 = state_13372;
var statearr_13375_13409 = state_13372__$1;
(statearr_13375_13409[(2)] = null);

(statearr_13375_13409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (4))){
var inst_13333 = (state_13372[(7)]);
var inst_13332 = (state_13372[(8)]);
var inst_13335 = (inst_13333 < inst_13332);
var state_13372__$1 = state_13372;
if(cljs.core.truth_(inst_13335)){
var statearr_13376_13410 = state_13372__$1;
(statearr_13376_13410[(1)] = (6));

} else {
var statearr_13377_13411 = state_13372__$1;
(statearr_13377_13411[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (15))){
var inst_13358 = (state_13372[(9)]);
var inst_13363 = cljs.core.apply.call(null,f,inst_13358);
var state_13372__$1 = state_13372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13372__$1,(17),out,inst_13363);
} else {
if((state_val_13373 === (13))){
var inst_13358 = (state_13372[(9)]);
var inst_13358__$1 = (state_13372[(2)]);
var inst_13359 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13358__$1);
var state_13372__$1 = (function (){var statearr_13378 = state_13372;
(statearr_13378[(9)] = inst_13358__$1);

return statearr_13378;
})();
if(cljs.core.truth_(inst_13359)){
var statearr_13379_13412 = state_13372__$1;
(statearr_13379_13412[(1)] = (14));

} else {
var statearr_13380_13413 = state_13372__$1;
(statearr_13380_13413[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (6))){
var state_13372__$1 = state_13372;
var statearr_13381_13414 = state_13372__$1;
(statearr_13381_13414[(2)] = null);

(statearr_13381_13414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (17))){
var inst_13365 = (state_13372[(2)]);
var state_13372__$1 = (function (){var statearr_13383 = state_13372;
(statearr_13383[(10)] = inst_13365);

return statearr_13383;
})();
var statearr_13384_13415 = state_13372__$1;
(statearr_13384_13415[(2)] = null);

(statearr_13384_13415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (3))){
var inst_13370 = (state_13372[(2)]);
var state_13372__$1 = state_13372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13372__$1,inst_13370);
} else {
if((state_val_13373 === (12))){
var _ = (function (){var statearr_13385 = state_13372;
(statearr_13385[(4)] = cljs.core.rest.call(null,(state_13372[(4)])));

return statearr_13385;
})();
var state_13372__$1 = state_13372;
var ex13382 = (state_13372__$1[(2)]);
var statearr_13386_13416 = state_13372__$1;
(statearr_13386_13416[(5)] = ex13382);


if((ex13382 instanceof Object)){
var statearr_13387_13417 = state_13372__$1;
(statearr_13387_13417[(1)] = (11));

(statearr_13387_13417[(5)] = null);

} else {
throw ex13382;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (2))){
var inst_13331 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13332 = cnt;
var inst_13333 = (0);
var state_13372__$1 = (function (){var statearr_13388 = state_13372;
(statearr_13388[(11)] = inst_13331);

(statearr_13388[(8)] = inst_13332);

(statearr_13388[(7)] = inst_13333);

return statearr_13388;
})();
var statearr_13389_13418 = state_13372__$1;
(statearr_13389_13418[(2)] = null);

(statearr_13389_13418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (11))){
var inst_13337 = (state_13372[(2)]);
var inst_13338 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13372__$1 = (function (){var statearr_13390 = state_13372;
(statearr_13390[(12)] = inst_13337);

return statearr_13390;
})();
var statearr_13391_13419 = state_13372__$1;
(statearr_13391_13419[(2)] = inst_13338);

(statearr_13391_13419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (9))){
var inst_13333 = (state_13372[(7)]);
var _ = (function (){var statearr_13392 = state_13372;
(statearr_13392[(4)] = cljs.core.cons.call(null,(12),(state_13372[(4)])));

return statearr_13392;
})();
var inst_13344 = chs__$1.call(null,inst_13333);
var inst_13345 = done.call(null,inst_13333);
var inst_13346 = cljs.core.async.take_BANG_.call(null,inst_13344,inst_13345);
var ___$1 = (function (){var statearr_13393 = state_13372;
(statearr_13393[(4)] = cljs.core.rest.call(null,(state_13372[(4)])));

return statearr_13393;
})();
var state_13372__$1 = state_13372;
var statearr_13394_13420 = state_13372__$1;
(statearr_13394_13420[(2)] = inst_13346);

(statearr_13394_13420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (5))){
var inst_13356 = (state_13372[(2)]);
var state_13372__$1 = (function (){var statearr_13395 = state_13372;
(statearr_13395[(13)] = inst_13356);

return statearr_13395;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13372__$1,(13),dchan);
} else {
if((state_val_13373 === (14))){
var inst_13361 = cljs.core.async.close_BANG_.call(null,out);
var state_13372__$1 = state_13372;
var statearr_13396_13421 = state_13372__$1;
(statearr_13396_13421[(2)] = inst_13361);

(statearr_13396_13421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (16))){
var inst_13368 = (state_13372[(2)]);
var state_13372__$1 = state_13372;
var statearr_13397_13422 = state_13372__$1;
(statearr_13397_13422[(2)] = inst_13368);

(statearr_13397_13422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (10))){
var inst_13333 = (state_13372[(7)]);
var inst_13349 = (state_13372[(2)]);
var inst_13350 = (inst_13333 + (1));
var inst_13333__$1 = inst_13350;
var state_13372__$1 = (function (){var statearr_13398 = state_13372;
(statearr_13398[(14)] = inst_13349);

(statearr_13398[(7)] = inst_13333__$1);

return statearr_13398;
})();
var statearr_13399_13423 = state_13372__$1;
(statearr_13399_13423[(2)] = null);

(statearr_13399_13423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (8))){
var inst_13354 = (state_13372[(2)]);
var state_13372__$1 = state_13372;
var statearr_13400_13424 = state_13372__$1;
(statearr_13400_13424[(2)] = inst_13354);

(statearr_13400_13424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11944__auto__ = null;
var cljs$core$async$state_machine__11944__auto____0 = (function (){
var statearr_13401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13401[(0)] = cljs$core$async$state_machine__11944__auto__);

(statearr_13401[(1)] = (1));

return statearr_13401;
});
var cljs$core$async$state_machine__11944__auto____1 = (function (state_13372){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_13372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e13402){var ex__11947__auto__ = e13402;
var statearr_13403_13425 = state_13372;
(statearr_13403_13425[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_13372[(4)]))){
var statearr_13404_13426 = state_13372;
(statearr_13404_13426[(1)] = cljs.core.first.call(null,(state_13372[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13427 = state_13372;
state_13372 = G__13427;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$state_machine__11944__auto__ = function(state_13372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11944__auto____1.call(this,state_13372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11944__auto____0;
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11944__auto____1;
return cljs$core$async$state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_13405 = f__12018__auto__.call(null);
(statearr_13405[(6)] = c__12017__auto___13407);

return statearr_13405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__13430 = arguments.length;
switch (G__13430) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12017__auto___13485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_13462){
var state_val_13463 = (state_13462[(1)]);
if((state_val_13463 === (7))){
var inst_13441 = (state_13462[(7)]);
var inst_13442 = (state_13462[(8)]);
var inst_13441__$1 = (state_13462[(2)]);
var inst_13442__$1 = cljs.core.nth.call(null,inst_13441__$1,(0),null);
var inst_13443 = cljs.core.nth.call(null,inst_13441__$1,(1),null);
var inst_13444 = (inst_13442__$1 == null);
var state_13462__$1 = (function (){var statearr_13464 = state_13462;
(statearr_13464[(7)] = inst_13441__$1);

(statearr_13464[(8)] = inst_13442__$1);

(statearr_13464[(9)] = inst_13443);

return statearr_13464;
})();
if(cljs.core.truth_(inst_13444)){
var statearr_13465_13486 = state_13462__$1;
(statearr_13465_13486[(1)] = (8));

} else {
var statearr_13466_13487 = state_13462__$1;
(statearr_13466_13487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13463 === (1))){
var inst_13431 = cljs.core.vec.call(null,chs);
var inst_13432 = inst_13431;
var state_13462__$1 = (function (){var statearr_13467 = state_13462;
(statearr_13467[(10)] = inst_13432);

return statearr_13467;
})();
var statearr_13468_13488 = state_13462__$1;
(statearr_13468_13488[(2)] = null);

(statearr_13468_13488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13463 === (4))){
var inst_13432 = (state_13462[(10)]);
var state_13462__$1 = state_13462;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13462__$1,(7),inst_13432);
} else {
if((state_val_13463 === (6))){
var inst_13458 = (state_13462[(2)]);
var state_13462__$1 = state_13462;
var statearr_13469_13489 = state_13462__$1;
(statearr_13469_13489[(2)] = inst_13458);

(statearr_13469_13489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13463 === (3))){
var inst_13460 = (state_13462[(2)]);
var state_13462__$1 = state_13462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13462__$1,inst_13460);
} else {
if((state_val_13463 === (2))){
var inst_13432 = (state_13462[(10)]);
var inst_13434 = cljs.core.count.call(null,inst_13432);
var inst_13435 = (inst_13434 > (0));
var state_13462__$1 = state_13462;
if(cljs.core.truth_(inst_13435)){
var statearr_13471_13490 = state_13462__$1;
(statearr_13471_13490[(1)] = (4));

} else {
var statearr_13472_13491 = state_13462__$1;
(statearr_13472_13491[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13463 === (11))){
var inst_13432 = (state_13462[(10)]);
var inst_13451 = (state_13462[(2)]);
var tmp13470 = inst_13432;
var inst_13432__$1 = tmp13470;
var state_13462__$1 = (function (){var statearr_13473 = state_13462;
(statearr_13473[(11)] = inst_13451);

(statearr_13473[(10)] = inst_13432__$1);

return statearr_13473;
})();
var statearr_13474_13492 = state_13462__$1;
(statearr_13474_13492[(2)] = null);

(statearr_13474_13492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13463 === (9))){
var inst_13442 = (state_13462[(8)]);
var state_13462__$1 = state_13462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13462__$1,(11),out,inst_13442);
} else {
if((state_val_13463 === (5))){
var inst_13456 = cljs.core.async.close_BANG_.call(null,out);
var state_13462__$1 = state_13462;
var statearr_13475_13493 = state_13462__$1;
(statearr_13475_13493[(2)] = inst_13456);

(statearr_13475_13493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13463 === (10))){
var inst_13454 = (state_13462[(2)]);
var state_13462__$1 = state_13462;
var statearr_13476_13494 = state_13462__$1;
(statearr_13476_13494[(2)] = inst_13454);

(statearr_13476_13494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13463 === (8))){
var inst_13432 = (state_13462[(10)]);
var inst_13441 = (state_13462[(7)]);
var inst_13442 = (state_13462[(8)]);
var inst_13443 = (state_13462[(9)]);
var inst_13446 = (function (){var cs = inst_13432;
var vec__13437 = inst_13441;
var v = inst_13442;
var c = inst_13443;
return (function (p1__13428_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13428_SHARP_);
});
})();
var inst_13447 = cljs.core.filterv.call(null,inst_13446,inst_13432);
var inst_13432__$1 = inst_13447;
var state_13462__$1 = (function (){var statearr_13477 = state_13462;
(statearr_13477[(10)] = inst_13432__$1);

return statearr_13477;
})();
var statearr_13478_13495 = state_13462__$1;
(statearr_13478_13495[(2)] = null);

(statearr_13478_13495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11944__auto__ = null;
var cljs$core$async$state_machine__11944__auto____0 = (function (){
var statearr_13479 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13479[(0)] = cljs$core$async$state_machine__11944__auto__);

(statearr_13479[(1)] = (1));

return statearr_13479;
});
var cljs$core$async$state_machine__11944__auto____1 = (function (state_13462){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_13462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e13480){var ex__11947__auto__ = e13480;
var statearr_13481_13496 = state_13462;
(statearr_13481_13496[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_13462[(4)]))){
var statearr_13482_13497 = state_13462;
(statearr_13482_13497[(1)] = cljs.core.first.call(null,(state_13462[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13498 = state_13462;
state_13462 = G__13498;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$state_machine__11944__auto__ = function(state_13462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11944__auto____1.call(this,state_13462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11944__auto____0;
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11944__auto____1;
return cljs$core$async$state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_13483 = f__12018__auto__.call(null);
(statearr_13483[(6)] = c__12017__auto___13485);

return statearr_13483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__13500 = arguments.length;
switch (G__13500) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12017__auto___13546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_13524){
var state_val_13525 = (state_13524[(1)]);
if((state_val_13525 === (7))){
var inst_13506 = (state_13524[(7)]);
var inst_13506__$1 = (state_13524[(2)]);
var inst_13507 = (inst_13506__$1 == null);
var inst_13508 = cljs.core.not.call(null,inst_13507);
var state_13524__$1 = (function (){var statearr_13526 = state_13524;
(statearr_13526[(7)] = inst_13506__$1);

return statearr_13526;
})();
if(inst_13508){
var statearr_13527_13547 = state_13524__$1;
(statearr_13527_13547[(1)] = (8));

} else {
var statearr_13528_13548 = state_13524__$1;
(statearr_13528_13548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13525 === (1))){
var inst_13501 = (0);
var state_13524__$1 = (function (){var statearr_13529 = state_13524;
(statearr_13529[(8)] = inst_13501);

return statearr_13529;
})();
var statearr_13530_13549 = state_13524__$1;
(statearr_13530_13549[(2)] = null);

(statearr_13530_13549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13525 === (4))){
var state_13524__$1 = state_13524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13524__$1,(7),ch);
} else {
if((state_val_13525 === (6))){
var inst_13519 = (state_13524[(2)]);
var state_13524__$1 = state_13524;
var statearr_13531_13550 = state_13524__$1;
(statearr_13531_13550[(2)] = inst_13519);

(statearr_13531_13550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13525 === (3))){
var inst_13521 = (state_13524[(2)]);
var inst_13522 = cljs.core.async.close_BANG_.call(null,out);
var state_13524__$1 = (function (){var statearr_13532 = state_13524;
(statearr_13532[(9)] = inst_13521);

return statearr_13532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13524__$1,inst_13522);
} else {
if((state_val_13525 === (2))){
var inst_13501 = (state_13524[(8)]);
var inst_13503 = (inst_13501 < n);
var state_13524__$1 = state_13524;
if(cljs.core.truth_(inst_13503)){
var statearr_13533_13551 = state_13524__$1;
(statearr_13533_13551[(1)] = (4));

} else {
var statearr_13534_13552 = state_13524__$1;
(statearr_13534_13552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13525 === (11))){
var inst_13501 = (state_13524[(8)]);
var inst_13511 = (state_13524[(2)]);
var inst_13512 = (inst_13501 + (1));
var inst_13501__$1 = inst_13512;
var state_13524__$1 = (function (){var statearr_13535 = state_13524;
(statearr_13535[(10)] = inst_13511);

(statearr_13535[(8)] = inst_13501__$1);

return statearr_13535;
})();
var statearr_13536_13553 = state_13524__$1;
(statearr_13536_13553[(2)] = null);

(statearr_13536_13553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13525 === (9))){
var state_13524__$1 = state_13524;
var statearr_13537_13554 = state_13524__$1;
(statearr_13537_13554[(2)] = null);

(statearr_13537_13554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13525 === (5))){
var state_13524__$1 = state_13524;
var statearr_13538_13555 = state_13524__$1;
(statearr_13538_13555[(2)] = null);

(statearr_13538_13555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13525 === (10))){
var inst_13516 = (state_13524[(2)]);
var state_13524__$1 = state_13524;
var statearr_13539_13556 = state_13524__$1;
(statearr_13539_13556[(2)] = inst_13516);

(statearr_13539_13556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13525 === (8))){
var inst_13506 = (state_13524[(7)]);
var state_13524__$1 = state_13524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13524__$1,(11),out,inst_13506);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11944__auto__ = null;
var cljs$core$async$state_machine__11944__auto____0 = (function (){
var statearr_13540 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13540[(0)] = cljs$core$async$state_machine__11944__auto__);

(statearr_13540[(1)] = (1));

return statearr_13540;
});
var cljs$core$async$state_machine__11944__auto____1 = (function (state_13524){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_13524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e13541){var ex__11947__auto__ = e13541;
var statearr_13542_13557 = state_13524;
(statearr_13542_13557[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_13524[(4)]))){
var statearr_13543_13558 = state_13524;
(statearr_13543_13558[(1)] = cljs.core.first.call(null,(state_13524[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13559 = state_13524;
state_13524 = G__13559;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$state_machine__11944__auto__ = function(state_13524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11944__auto____1.call(this,state_13524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11944__auto____0;
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11944__auto____1;
return cljs$core$async$state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_13544 = f__12018__auto__.call(null);
(statearr_13544[(6)] = c__12017__auto___13546);

return statearr_13544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13561 = (function (f,ch,meta13562){
this.f = f;
this.ch = ch;
this.meta13562 = meta13562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13563,meta13562__$1){
var self__ = this;
var _13563__$1 = this;
return (new cljs.core.async.t_cljs$core$async13561(self__.f,self__.ch,meta13562__$1));
}));

(cljs.core.async.t_cljs$core$async13561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13563){
var self__ = this;
var _13563__$1 = this;
return self__.meta13562;
}));

(cljs.core.async.t_cljs$core$async13561.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13561.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13561.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13564 = (function (f,ch,meta13562,_,fn1,meta13565){
this.f = f;
this.ch = ch;
this.meta13562 = meta13562;
this._ = _;
this.fn1 = fn1;
this.meta13565 = meta13565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13566,meta13565__$1){
var self__ = this;
var _13566__$1 = this;
return (new cljs.core.async.t_cljs$core$async13564(self__.f,self__.ch,self__.meta13562,self__._,self__.fn1,meta13565__$1));
}));

(cljs.core.async.t_cljs$core$async13564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13566){
var self__ = this;
var _13566__$1 = this;
return self__.meta13565;
}));

(cljs.core.async.t_cljs$core$async13564.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13564.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__13560_SHARP_){
return f1.call(null,(((p1__13560_SHARP_ == null))?null:self__.f.call(null,p1__13560_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async13564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13562","meta13562",97325085,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13561","cljs.core.async/t_cljs$core$async13561",706628902,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13565","meta13565",-1589289668,null)], null);
}));

(cljs.core.async.t_cljs$core$async13564.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13564");

(cljs.core.async.t_cljs$core$async13564.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async13564");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13564.
 */
cljs.core.async.__GT_t_cljs$core$async13564 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13564(f__$1,ch__$1,meta13562__$1,___$2,fn1__$1,meta13565){
return (new cljs.core.async.t_cljs$core$async13564(f__$1,ch__$1,meta13562__$1,___$2,fn1__$1,meta13565));
});

}

return (new cljs.core.async.t_cljs$core$async13564(self__.f,self__.ch,self__.meta13562,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async13561.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13562","meta13562",97325085,null)], null);
}));

(cljs.core.async.t_cljs$core$async13561.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13561");

(cljs.core.async.t_cljs$core$async13561.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async13561");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13561.
 */
cljs.core.async.__GT_t_cljs$core$async13561 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13561(f__$1,ch__$1,meta13562){
return (new cljs.core.async.t_cljs$core$async13561(f__$1,ch__$1,meta13562));
});

}

return (new cljs.core.async.t_cljs$core$async13561(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13567 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13567 = (function (f,ch,meta13568){
this.f = f;
this.ch = ch;
this.meta13568 = meta13568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13569,meta13568__$1){
var self__ = this;
var _13569__$1 = this;
return (new cljs.core.async.t_cljs$core$async13567(self__.f,self__.ch,meta13568__$1));
}));

(cljs.core.async.t_cljs$core$async13567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13569){
var self__ = this;
var _13569__$1 = this;
return self__.meta13568;
}));

(cljs.core.async.t_cljs$core$async13567.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13567.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13567.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13567.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13567.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13567.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async13567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13568","meta13568",1731541302,null)], null);
}));

(cljs.core.async.t_cljs$core$async13567.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13567");

(cljs.core.async.t_cljs$core$async13567.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async13567");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13567.
 */
cljs.core.async.__GT_t_cljs$core$async13567 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13567(f__$1,ch__$1,meta13568){
return (new cljs.core.async.t_cljs$core$async13567(f__$1,ch__$1,meta13568));
});

}

return (new cljs.core.async.t_cljs$core$async13567(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13570 = (function (p,ch,meta13571){
this.p = p;
this.ch = ch;
this.meta13571 = meta13571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13572,meta13571__$1){
var self__ = this;
var _13572__$1 = this;
return (new cljs.core.async.t_cljs$core$async13570(self__.p,self__.ch,meta13571__$1));
}));

(cljs.core.async.t_cljs$core$async13570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13572){
var self__ = this;
var _13572__$1 = this;
return self__.meta13571;
}));

(cljs.core.async.t_cljs$core$async13570.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13570.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13570.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13570.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13570.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13570.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13570.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13571","meta13571",-466998057,null)], null);
}));

(cljs.core.async.t_cljs$core$async13570.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13570");

(cljs.core.async.t_cljs$core$async13570.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async13570");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13570.
 */
cljs.core.async.__GT_t_cljs$core$async13570 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13570(p__$1,ch__$1,meta13571){
return (new cljs.core.async.t_cljs$core$async13570(p__$1,ch__$1,meta13571));
});

}

return (new cljs.core.async.t_cljs$core$async13570(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__13574 = arguments.length;
switch (G__13574) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12017__auto___13615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_13595){
var state_val_13596 = (state_13595[(1)]);
if((state_val_13596 === (7))){
var inst_13591 = (state_13595[(2)]);
var state_13595__$1 = state_13595;
var statearr_13597_13616 = state_13595__$1;
(statearr_13597_13616[(2)] = inst_13591);

(statearr_13597_13616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13596 === (1))){
var state_13595__$1 = state_13595;
var statearr_13598_13617 = state_13595__$1;
(statearr_13598_13617[(2)] = null);

(statearr_13598_13617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13596 === (4))){
var inst_13577 = (state_13595[(7)]);
var inst_13577__$1 = (state_13595[(2)]);
var inst_13578 = (inst_13577__$1 == null);
var state_13595__$1 = (function (){var statearr_13599 = state_13595;
(statearr_13599[(7)] = inst_13577__$1);

return statearr_13599;
})();
if(cljs.core.truth_(inst_13578)){
var statearr_13600_13618 = state_13595__$1;
(statearr_13600_13618[(1)] = (5));

} else {
var statearr_13601_13619 = state_13595__$1;
(statearr_13601_13619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13596 === (6))){
var inst_13577 = (state_13595[(7)]);
var inst_13582 = p.call(null,inst_13577);
var state_13595__$1 = state_13595;
if(cljs.core.truth_(inst_13582)){
var statearr_13602_13620 = state_13595__$1;
(statearr_13602_13620[(1)] = (8));

} else {
var statearr_13603_13621 = state_13595__$1;
(statearr_13603_13621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13596 === (3))){
var inst_13593 = (state_13595[(2)]);
var state_13595__$1 = state_13595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13595__$1,inst_13593);
} else {
if((state_val_13596 === (2))){
var state_13595__$1 = state_13595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13595__$1,(4),ch);
} else {
if((state_val_13596 === (11))){
var inst_13585 = (state_13595[(2)]);
var state_13595__$1 = state_13595;
var statearr_13604_13622 = state_13595__$1;
(statearr_13604_13622[(2)] = inst_13585);

(statearr_13604_13622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13596 === (9))){
var state_13595__$1 = state_13595;
var statearr_13605_13623 = state_13595__$1;
(statearr_13605_13623[(2)] = null);

(statearr_13605_13623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13596 === (5))){
var inst_13580 = cljs.core.async.close_BANG_.call(null,out);
var state_13595__$1 = state_13595;
var statearr_13606_13624 = state_13595__$1;
(statearr_13606_13624[(2)] = inst_13580);

(statearr_13606_13624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13596 === (10))){
var inst_13588 = (state_13595[(2)]);
var state_13595__$1 = (function (){var statearr_13607 = state_13595;
(statearr_13607[(8)] = inst_13588);

return statearr_13607;
})();
var statearr_13608_13625 = state_13595__$1;
(statearr_13608_13625[(2)] = null);

(statearr_13608_13625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13596 === (8))){
var inst_13577 = (state_13595[(7)]);
var state_13595__$1 = state_13595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13595__$1,(11),out,inst_13577);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11944__auto__ = null;
var cljs$core$async$state_machine__11944__auto____0 = (function (){
var statearr_13609 = [null,null,null,null,null,null,null,null,null];
(statearr_13609[(0)] = cljs$core$async$state_machine__11944__auto__);

(statearr_13609[(1)] = (1));

return statearr_13609;
});
var cljs$core$async$state_machine__11944__auto____1 = (function (state_13595){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_13595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e13610){var ex__11947__auto__ = e13610;
var statearr_13611_13626 = state_13595;
(statearr_13611_13626[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_13595[(4)]))){
var statearr_13612_13627 = state_13595;
(statearr_13612_13627[(1)] = cljs.core.first.call(null,(state_13595[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13628 = state_13595;
state_13595 = G__13628;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$state_machine__11944__auto__ = function(state_13595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11944__auto____1.call(this,state_13595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11944__auto____0;
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11944__auto____1;
return cljs$core$async$state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_13613 = f__12018__auto__.call(null);
(statearr_13613[(6)] = c__12017__auto___13615);

return statearr_13613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__13630 = arguments.length;
switch (G__13630) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_13693){
var state_val_13694 = (state_13693[(1)]);
if((state_val_13694 === (7))){
var inst_13689 = (state_13693[(2)]);
var state_13693__$1 = state_13693;
var statearr_13695_13734 = state_13693__$1;
(statearr_13695_13734[(2)] = inst_13689);

(statearr_13695_13734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (20))){
var inst_13659 = (state_13693[(7)]);
var inst_13670 = (state_13693[(2)]);
var inst_13671 = cljs.core.next.call(null,inst_13659);
var inst_13645 = inst_13671;
var inst_13646 = null;
var inst_13647 = (0);
var inst_13648 = (0);
var state_13693__$1 = (function (){var statearr_13696 = state_13693;
(statearr_13696[(8)] = inst_13670);

(statearr_13696[(9)] = inst_13645);

(statearr_13696[(10)] = inst_13646);

(statearr_13696[(11)] = inst_13647);

(statearr_13696[(12)] = inst_13648);

return statearr_13696;
})();
var statearr_13697_13735 = state_13693__$1;
(statearr_13697_13735[(2)] = null);

(statearr_13697_13735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (1))){
var state_13693__$1 = state_13693;
var statearr_13698_13736 = state_13693__$1;
(statearr_13698_13736[(2)] = null);

(statearr_13698_13736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (4))){
var inst_13634 = (state_13693[(13)]);
var inst_13634__$1 = (state_13693[(2)]);
var inst_13635 = (inst_13634__$1 == null);
var state_13693__$1 = (function (){var statearr_13699 = state_13693;
(statearr_13699[(13)] = inst_13634__$1);

return statearr_13699;
})();
if(cljs.core.truth_(inst_13635)){
var statearr_13700_13737 = state_13693__$1;
(statearr_13700_13737[(1)] = (5));

} else {
var statearr_13701_13738 = state_13693__$1;
(statearr_13701_13738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (15))){
var state_13693__$1 = state_13693;
var statearr_13705_13739 = state_13693__$1;
(statearr_13705_13739[(2)] = null);

(statearr_13705_13739[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (21))){
var state_13693__$1 = state_13693;
var statearr_13706_13740 = state_13693__$1;
(statearr_13706_13740[(2)] = null);

(statearr_13706_13740[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (13))){
var inst_13648 = (state_13693[(12)]);
var inst_13645 = (state_13693[(9)]);
var inst_13646 = (state_13693[(10)]);
var inst_13647 = (state_13693[(11)]);
var inst_13655 = (state_13693[(2)]);
var inst_13656 = (inst_13648 + (1));
var tmp13702 = inst_13645;
var tmp13703 = inst_13647;
var tmp13704 = inst_13646;
var inst_13645__$1 = tmp13702;
var inst_13646__$1 = tmp13704;
var inst_13647__$1 = tmp13703;
var inst_13648__$1 = inst_13656;
var state_13693__$1 = (function (){var statearr_13707 = state_13693;
(statearr_13707[(14)] = inst_13655);

(statearr_13707[(9)] = inst_13645__$1);

(statearr_13707[(10)] = inst_13646__$1);

(statearr_13707[(11)] = inst_13647__$1);

(statearr_13707[(12)] = inst_13648__$1);

return statearr_13707;
})();
var statearr_13708_13741 = state_13693__$1;
(statearr_13708_13741[(2)] = null);

(statearr_13708_13741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (22))){
var state_13693__$1 = state_13693;
var statearr_13709_13742 = state_13693__$1;
(statearr_13709_13742[(2)] = null);

(statearr_13709_13742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (6))){
var inst_13634 = (state_13693[(13)]);
var inst_13643 = f.call(null,inst_13634);
var inst_13644 = cljs.core.seq.call(null,inst_13643);
var inst_13645 = inst_13644;
var inst_13646 = null;
var inst_13647 = (0);
var inst_13648 = (0);
var state_13693__$1 = (function (){var statearr_13710 = state_13693;
(statearr_13710[(9)] = inst_13645);

(statearr_13710[(10)] = inst_13646);

(statearr_13710[(11)] = inst_13647);

(statearr_13710[(12)] = inst_13648);

return statearr_13710;
})();
var statearr_13711_13743 = state_13693__$1;
(statearr_13711_13743[(2)] = null);

(statearr_13711_13743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (17))){
var inst_13659 = (state_13693[(7)]);
var inst_13663 = cljs.core.chunk_first.call(null,inst_13659);
var inst_13664 = cljs.core.chunk_rest.call(null,inst_13659);
var inst_13665 = cljs.core.count.call(null,inst_13663);
var inst_13645 = inst_13664;
var inst_13646 = inst_13663;
var inst_13647 = inst_13665;
var inst_13648 = (0);
var state_13693__$1 = (function (){var statearr_13712 = state_13693;
(statearr_13712[(9)] = inst_13645);

(statearr_13712[(10)] = inst_13646);

(statearr_13712[(11)] = inst_13647);

(statearr_13712[(12)] = inst_13648);

return statearr_13712;
})();
var statearr_13713_13744 = state_13693__$1;
(statearr_13713_13744[(2)] = null);

(statearr_13713_13744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (3))){
var inst_13691 = (state_13693[(2)]);
var state_13693__$1 = state_13693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13693__$1,inst_13691);
} else {
if((state_val_13694 === (12))){
var inst_13679 = (state_13693[(2)]);
var state_13693__$1 = state_13693;
var statearr_13714_13745 = state_13693__$1;
(statearr_13714_13745[(2)] = inst_13679);

(statearr_13714_13745[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (2))){
var state_13693__$1 = state_13693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13693__$1,(4),in$);
} else {
if((state_val_13694 === (23))){
var inst_13687 = (state_13693[(2)]);
var state_13693__$1 = state_13693;
var statearr_13715_13746 = state_13693__$1;
(statearr_13715_13746[(2)] = inst_13687);

(statearr_13715_13746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (19))){
var inst_13674 = (state_13693[(2)]);
var state_13693__$1 = state_13693;
var statearr_13716_13747 = state_13693__$1;
(statearr_13716_13747[(2)] = inst_13674);

(statearr_13716_13747[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (11))){
var inst_13645 = (state_13693[(9)]);
var inst_13659 = (state_13693[(7)]);
var inst_13659__$1 = cljs.core.seq.call(null,inst_13645);
var state_13693__$1 = (function (){var statearr_13717 = state_13693;
(statearr_13717[(7)] = inst_13659__$1);

return statearr_13717;
})();
if(inst_13659__$1){
var statearr_13718_13748 = state_13693__$1;
(statearr_13718_13748[(1)] = (14));

} else {
var statearr_13719_13749 = state_13693__$1;
(statearr_13719_13749[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (9))){
var inst_13681 = (state_13693[(2)]);
var inst_13682 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13693__$1 = (function (){var statearr_13720 = state_13693;
(statearr_13720[(15)] = inst_13681);

return statearr_13720;
})();
if(cljs.core.truth_(inst_13682)){
var statearr_13721_13750 = state_13693__$1;
(statearr_13721_13750[(1)] = (21));

} else {
var statearr_13722_13751 = state_13693__$1;
(statearr_13722_13751[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (5))){
var inst_13637 = cljs.core.async.close_BANG_.call(null,out);
var state_13693__$1 = state_13693;
var statearr_13723_13752 = state_13693__$1;
(statearr_13723_13752[(2)] = inst_13637);

(statearr_13723_13752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (14))){
var inst_13659 = (state_13693[(7)]);
var inst_13661 = cljs.core.chunked_seq_QMARK_.call(null,inst_13659);
var state_13693__$1 = state_13693;
if(inst_13661){
var statearr_13724_13753 = state_13693__$1;
(statearr_13724_13753[(1)] = (17));

} else {
var statearr_13725_13754 = state_13693__$1;
(statearr_13725_13754[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (16))){
var inst_13677 = (state_13693[(2)]);
var state_13693__$1 = state_13693;
var statearr_13726_13755 = state_13693__$1;
(statearr_13726_13755[(2)] = inst_13677);

(statearr_13726_13755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13694 === (10))){
var inst_13646 = (state_13693[(10)]);
var inst_13648 = (state_13693[(12)]);
var inst_13653 = cljs.core._nth.call(null,inst_13646,inst_13648);
var state_13693__$1 = state_13693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13693__$1,(13),out,inst_13653);
} else {
if((state_val_13694 === (18))){
var inst_13659 = (state_13693[(7)]);
var inst_13668 = cljs.core.first.call(null,inst_13659);
var state_13693__$1 = state_13693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13693__$1,(20),out,inst_13668);
} else {
if((state_val_13694 === (8))){
var inst_13648 = (state_13693[(12)]);
var inst_13647 = (state_13693[(11)]);
var inst_13650 = (inst_13648 < inst_13647);
var inst_13651 = inst_13650;
var state_13693__$1 = state_13693;
if(cljs.core.truth_(inst_13651)){
var statearr_13727_13756 = state_13693__$1;
(statearr_13727_13756[(1)] = (10));

} else {
var statearr_13728_13757 = state_13693__$1;
(statearr_13728_13757[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11944__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11944__auto____0 = (function (){
var statearr_13729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13729[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11944__auto__);

(statearr_13729[(1)] = (1));

return statearr_13729;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11944__auto____1 = (function (state_13693){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_13693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e13730){var ex__11947__auto__ = e13730;
var statearr_13731_13758 = state_13693;
(statearr_13731_13758[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_13693[(4)]))){
var statearr_13732_13759 = state_13693;
(statearr_13732_13759[(1)] = cljs.core.first.call(null,(state_13693[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13760 = state_13693;
state_13693 = G__13760;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11944__auto__ = function(state_13693){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11944__auto____1.call(this,state_13693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11944__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11944__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_13733 = f__12018__auto__.call(null);
(statearr_13733[(6)] = c__12017__auto__);

return statearr_13733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));

return c__12017__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13762 = arguments.length;
switch (G__13762) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__13765 = arguments.length;
switch (G__13765) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__13768 = arguments.length;
switch (G__13768) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12017__auto___13816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_13792){
var state_val_13793 = (state_13792[(1)]);
if((state_val_13793 === (7))){
var inst_13787 = (state_13792[(2)]);
var state_13792__$1 = state_13792;
var statearr_13794_13817 = state_13792__$1;
(statearr_13794_13817[(2)] = inst_13787);

(statearr_13794_13817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13793 === (1))){
var inst_13769 = null;
var state_13792__$1 = (function (){var statearr_13795 = state_13792;
(statearr_13795[(7)] = inst_13769);

return statearr_13795;
})();
var statearr_13796_13818 = state_13792__$1;
(statearr_13796_13818[(2)] = null);

(statearr_13796_13818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13793 === (4))){
var inst_13772 = (state_13792[(8)]);
var inst_13772__$1 = (state_13792[(2)]);
var inst_13773 = (inst_13772__$1 == null);
var inst_13774 = cljs.core.not.call(null,inst_13773);
var state_13792__$1 = (function (){var statearr_13797 = state_13792;
(statearr_13797[(8)] = inst_13772__$1);

return statearr_13797;
})();
if(inst_13774){
var statearr_13798_13819 = state_13792__$1;
(statearr_13798_13819[(1)] = (5));

} else {
var statearr_13799_13820 = state_13792__$1;
(statearr_13799_13820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13793 === (6))){
var state_13792__$1 = state_13792;
var statearr_13800_13821 = state_13792__$1;
(statearr_13800_13821[(2)] = null);

(statearr_13800_13821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13793 === (3))){
var inst_13789 = (state_13792[(2)]);
var inst_13790 = cljs.core.async.close_BANG_.call(null,out);
var state_13792__$1 = (function (){var statearr_13801 = state_13792;
(statearr_13801[(9)] = inst_13789);

return statearr_13801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13792__$1,inst_13790);
} else {
if((state_val_13793 === (2))){
var state_13792__$1 = state_13792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13792__$1,(4),ch);
} else {
if((state_val_13793 === (11))){
var inst_13772 = (state_13792[(8)]);
var inst_13781 = (state_13792[(2)]);
var inst_13769 = inst_13772;
var state_13792__$1 = (function (){var statearr_13802 = state_13792;
(statearr_13802[(10)] = inst_13781);

(statearr_13802[(7)] = inst_13769);

return statearr_13802;
})();
var statearr_13803_13822 = state_13792__$1;
(statearr_13803_13822[(2)] = null);

(statearr_13803_13822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13793 === (9))){
var inst_13772 = (state_13792[(8)]);
var state_13792__$1 = state_13792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13792__$1,(11),out,inst_13772);
} else {
if((state_val_13793 === (5))){
var inst_13772 = (state_13792[(8)]);
var inst_13769 = (state_13792[(7)]);
var inst_13776 = cljs.core._EQ_.call(null,inst_13772,inst_13769);
var state_13792__$1 = state_13792;
if(inst_13776){
var statearr_13805_13823 = state_13792__$1;
(statearr_13805_13823[(1)] = (8));

} else {
var statearr_13806_13824 = state_13792__$1;
(statearr_13806_13824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13793 === (10))){
var inst_13784 = (state_13792[(2)]);
var state_13792__$1 = state_13792;
var statearr_13807_13825 = state_13792__$1;
(statearr_13807_13825[(2)] = inst_13784);

(statearr_13807_13825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13793 === (8))){
var inst_13769 = (state_13792[(7)]);
var tmp13804 = inst_13769;
var inst_13769__$1 = tmp13804;
var state_13792__$1 = (function (){var statearr_13808 = state_13792;
(statearr_13808[(7)] = inst_13769__$1);

return statearr_13808;
})();
var statearr_13809_13826 = state_13792__$1;
(statearr_13809_13826[(2)] = null);

(statearr_13809_13826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11944__auto__ = null;
var cljs$core$async$state_machine__11944__auto____0 = (function (){
var statearr_13810 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13810[(0)] = cljs$core$async$state_machine__11944__auto__);

(statearr_13810[(1)] = (1));

return statearr_13810;
});
var cljs$core$async$state_machine__11944__auto____1 = (function (state_13792){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_13792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e13811){var ex__11947__auto__ = e13811;
var statearr_13812_13827 = state_13792;
(statearr_13812_13827[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_13792[(4)]))){
var statearr_13813_13828 = state_13792;
(statearr_13813_13828[(1)] = cljs.core.first.call(null,(state_13792[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13829 = state_13792;
state_13792 = G__13829;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$state_machine__11944__auto__ = function(state_13792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11944__auto____1.call(this,state_13792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11944__auto____0;
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11944__auto____1;
return cljs$core$async$state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_13814 = f__12018__auto__.call(null);
(statearr_13814[(6)] = c__12017__auto___13816);

return statearr_13814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__13831 = arguments.length;
switch (G__13831) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12017__auto___13898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_13869){
var state_val_13870 = (state_13869[(1)]);
if((state_val_13870 === (7))){
var inst_13865 = (state_13869[(2)]);
var state_13869__$1 = state_13869;
var statearr_13871_13899 = state_13869__$1;
(statearr_13871_13899[(2)] = inst_13865);

(statearr_13871_13899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (1))){
var inst_13832 = (new Array(n));
var inst_13833 = inst_13832;
var inst_13834 = (0);
var state_13869__$1 = (function (){var statearr_13872 = state_13869;
(statearr_13872[(7)] = inst_13833);

(statearr_13872[(8)] = inst_13834);

return statearr_13872;
})();
var statearr_13873_13900 = state_13869__$1;
(statearr_13873_13900[(2)] = null);

(statearr_13873_13900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (4))){
var inst_13837 = (state_13869[(9)]);
var inst_13837__$1 = (state_13869[(2)]);
var inst_13838 = (inst_13837__$1 == null);
var inst_13839 = cljs.core.not.call(null,inst_13838);
var state_13869__$1 = (function (){var statearr_13874 = state_13869;
(statearr_13874[(9)] = inst_13837__$1);

return statearr_13874;
})();
if(inst_13839){
var statearr_13875_13901 = state_13869__$1;
(statearr_13875_13901[(1)] = (5));

} else {
var statearr_13876_13902 = state_13869__$1;
(statearr_13876_13902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (15))){
var inst_13859 = (state_13869[(2)]);
var state_13869__$1 = state_13869;
var statearr_13877_13903 = state_13869__$1;
(statearr_13877_13903[(2)] = inst_13859);

(statearr_13877_13903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (13))){
var state_13869__$1 = state_13869;
var statearr_13878_13904 = state_13869__$1;
(statearr_13878_13904[(2)] = null);

(statearr_13878_13904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (6))){
var inst_13834 = (state_13869[(8)]);
var inst_13855 = (inst_13834 > (0));
var state_13869__$1 = state_13869;
if(cljs.core.truth_(inst_13855)){
var statearr_13879_13905 = state_13869__$1;
(statearr_13879_13905[(1)] = (12));

} else {
var statearr_13880_13906 = state_13869__$1;
(statearr_13880_13906[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (3))){
var inst_13867 = (state_13869[(2)]);
var state_13869__$1 = state_13869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13869__$1,inst_13867);
} else {
if((state_val_13870 === (12))){
var inst_13833 = (state_13869[(7)]);
var inst_13857 = cljs.core.vec.call(null,inst_13833);
var state_13869__$1 = state_13869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13869__$1,(15),out,inst_13857);
} else {
if((state_val_13870 === (2))){
var state_13869__$1 = state_13869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13869__$1,(4),ch);
} else {
if((state_val_13870 === (11))){
var inst_13849 = (state_13869[(2)]);
var inst_13850 = (new Array(n));
var inst_13833 = inst_13850;
var inst_13834 = (0);
var state_13869__$1 = (function (){var statearr_13881 = state_13869;
(statearr_13881[(10)] = inst_13849);

(statearr_13881[(7)] = inst_13833);

(statearr_13881[(8)] = inst_13834);

return statearr_13881;
})();
var statearr_13882_13907 = state_13869__$1;
(statearr_13882_13907[(2)] = null);

(statearr_13882_13907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (9))){
var inst_13833 = (state_13869[(7)]);
var inst_13847 = cljs.core.vec.call(null,inst_13833);
var state_13869__$1 = state_13869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13869__$1,(11),out,inst_13847);
} else {
if((state_val_13870 === (5))){
var inst_13833 = (state_13869[(7)]);
var inst_13834 = (state_13869[(8)]);
var inst_13837 = (state_13869[(9)]);
var inst_13842 = (state_13869[(11)]);
var inst_13841 = (inst_13833[inst_13834] = inst_13837);
var inst_13842__$1 = (inst_13834 + (1));
var inst_13843 = (inst_13842__$1 < n);
var state_13869__$1 = (function (){var statearr_13883 = state_13869;
(statearr_13883[(12)] = inst_13841);

(statearr_13883[(11)] = inst_13842__$1);

return statearr_13883;
})();
if(cljs.core.truth_(inst_13843)){
var statearr_13884_13908 = state_13869__$1;
(statearr_13884_13908[(1)] = (8));

} else {
var statearr_13885_13909 = state_13869__$1;
(statearr_13885_13909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (14))){
var inst_13862 = (state_13869[(2)]);
var inst_13863 = cljs.core.async.close_BANG_.call(null,out);
var state_13869__$1 = (function (){var statearr_13887 = state_13869;
(statearr_13887[(13)] = inst_13862);

return statearr_13887;
})();
var statearr_13888_13910 = state_13869__$1;
(statearr_13888_13910[(2)] = inst_13863);

(statearr_13888_13910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (10))){
var inst_13853 = (state_13869[(2)]);
var state_13869__$1 = state_13869;
var statearr_13889_13911 = state_13869__$1;
(statearr_13889_13911[(2)] = inst_13853);

(statearr_13889_13911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (8))){
var inst_13833 = (state_13869[(7)]);
var inst_13842 = (state_13869[(11)]);
var tmp13886 = inst_13833;
var inst_13833__$1 = tmp13886;
var inst_13834 = inst_13842;
var state_13869__$1 = (function (){var statearr_13890 = state_13869;
(statearr_13890[(7)] = inst_13833__$1);

(statearr_13890[(8)] = inst_13834);

return statearr_13890;
})();
var statearr_13891_13912 = state_13869__$1;
(statearr_13891_13912[(2)] = null);

(statearr_13891_13912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11944__auto__ = null;
var cljs$core$async$state_machine__11944__auto____0 = (function (){
var statearr_13892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13892[(0)] = cljs$core$async$state_machine__11944__auto__);

(statearr_13892[(1)] = (1));

return statearr_13892;
});
var cljs$core$async$state_machine__11944__auto____1 = (function (state_13869){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_13869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e13893){var ex__11947__auto__ = e13893;
var statearr_13894_13913 = state_13869;
(statearr_13894_13913[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_13869[(4)]))){
var statearr_13895_13914 = state_13869;
(statearr_13895_13914[(1)] = cljs.core.first.call(null,(state_13869[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13915 = state_13869;
state_13869 = G__13915;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$state_machine__11944__auto__ = function(state_13869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11944__auto____1.call(this,state_13869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11944__auto____0;
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11944__auto____1;
return cljs$core$async$state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_13896 = f__12018__auto__.call(null);
(statearr_13896[(6)] = c__12017__auto___13898);

return statearr_13896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__13917 = arguments.length;
switch (G__13917) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12017__auto___13988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12018__auto__ = (function (){var switch__11943__auto__ = (function (state_13959){
var state_val_13960 = (state_13959[(1)]);
if((state_val_13960 === (7))){
var inst_13955 = (state_13959[(2)]);
var state_13959__$1 = state_13959;
var statearr_13961_13989 = state_13959__$1;
(statearr_13961_13989[(2)] = inst_13955);

(statearr_13961_13989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13960 === (1))){
var inst_13918 = [];
var inst_13919 = inst_13918;
var inst_13920 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13959__$1 = (function (){var statearr_13962 = state_13959;
(statearr_13962[(7)] = inst_13919);

(statearr_13962[(8)] = inst_13920);

return statearr_13962;
})();
var statearr_13963_13990 = state_13959__$1;
(statearr_13963_13990[(2)] = null);

(statearr_13963_13990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13960 === (4))){
var inst_13923 = (state_13959[(9)]);
var inst_13923__$1 = (state_13959[(2)]);
var inst_13924 = (inst_13923__$1 == null);
var inst_13925 = cljs.core.not.call(null,inst_13924);
var state_13959__$1 = (function (){var statearr_13964 = state_13959;
(statearr_13964[(9)] = inst_13923__$1);

return statearr_13964;
})();
if(inst_13925){
var statearr_13965_13991 = state_13959__$1;
(statearr_13965_13991[(1)] = (5));

} else {
var statearr_13966_13992 = state_13959__$1;
(statearr_13966_13992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13960 === (15))){
var inst_13949 = (state_13959[(2)]);
var state_13959__$1 = state_13959;
var statearr_13967_13993 = state_13959__$1;
(statearr_13967_13993[(2)] = inst_13949);

(statearr_13967_13993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13960 === (13))){
var state_13959__$1 = state_13959;
var statearr_13968_13994 = state_13959__$1;
(statearr_13968_13994[(2)] = null);

(statearr_13968_13994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13960 === (6))){
var inst_13919 = (state_13959[(7)]);
var inst_13944 = inst_13919.length;
var inst_13945 = (inst_13944 > (0));
var state_13959__$1 = state_13959;
if(cljs.core.truth_(inst_13945)){
var statearr_13969_13995 = state_13959__$1;
(statearr_13969_13995[(1)] = (12));

} else {
var statearr_13970_13996 = state_13959__$1;
(statearr_13970_13996[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13960 === (3))){
var inst_13957 = (state_13959[(2)]);
var state_13959__$1 = state_13959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13959__$1,inst_13957);
} else {
if((state_val_13960 === (12))){
var inst_13919 = (state_13959[(7)]);
var inst_13947 = cljs.core.vec.call(null,inst_13919);
var state_13959__$1 = state_13959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13959__$1,(15),out,inst_13947);
} else {
if((state_val_13960 === (2))){
var state_13959__$1 = state_13959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13959__$1,(4),ch);
} else {
if((state_val_13960 === (11))){
var inst_13923 = (state_13959[(9)]);
var inst_13927 = (state_13959[(10)]);
var inst_13937 = (state_13959[(2)]);
var inst_13938 = [];
var inst_13939 = inst_13938.push(inst_13923);
var inst_13919 = inst_13938;
var inst_13920 = inst_13927;
var state_13959__$1 = (function (){var statearr_13971 = state_13959;
(statearr_13971[(11)] = inst_13937);

(statearr_13971[(12)] = inst_13939);

(statearr_13971[(7)] = inst_13919);

(statearr_13971[(8)] = inst_13920);

return statearr_13971;
})();
var statearr_13972_13997 = state_13959__$1;
(statearr_13972_13997[(2)] = null);

(statearr_13972_13997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13960 === (9))){
var inst_13919 = (state_13959[(7)]);
var inst_13935 = cljs.core.vec.call(null,inst_13919);
var state_13959__$1 = state_13959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13959__$1,(11),out,inst_13935);
} else {
if((state_val_13960 === (5))){
var inst_13923 = (state_13959[(9)]);
var inst_13927 = (state_13959[(10)]);
var inst_13920 = (state_13959[(8)]);
var inst_13927__$1 = f.call(null,inst_13923);
var inst_13928 = cljs.core._EQ_.call(null,inst_13927__$1,inst_13920);
var inst_13929 = cljs.core.keyword_identical_QMARK_.call(null,inst_13920,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13930 = ((inst_13928) || (inst_13929));
var state_13959__$1 = (function (){var statearr_13973 = state_13959;
(statearr_13973[(10)] = inst_13927__$1);

return statearr_13973;
})();
if(cljs.core.truth_(inst_13930)){
var statearr_13974_13998 = state_13959__$1;
(statearr_13974_13998[(1)] = (8));

} else {
var statearr_13975_13999 = state_13959__$1;
(statearr_13975_13999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13960 === (14))){
var inst_13952 = (state_13959[(2)]);
var inst_13953 = cljs.core.async.close_BANG_.call(null,out);
var state_13959__$1 = (function (){var statearr_13977 = state_13959;
(statearr_13977[(13)] = inst_13952);

return statearr_13977;
})();
var statearr_13978_14000 = state_13959__$1;
(statearr_13978_14000[(2)] = inst_13953);

(statearr_13978_14000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13960 === (10))){
var inst_13942 = (state_13959[(2)]);
var state_13959__$1 = state_13959;
var statearr_13979_14001 = state_13959__$1;
(statearr_13979_14001[(2)] = inst_13942);

(statearr_13979_14001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13960 === (8))){
var inst_13919 = (state_13959[(7)]);
var inst_13923 = (state_13959[(9)]);
var inst_13927 = (state_13959[(10)]);
var inst_13932 = inst_13919.push(inst_13923);
var tmp13976 = inst_13919;
var inst_13919__$1 = tmp13976;
var inst_13920 = inst_13927;
var state_13959__$1 = (function (){var statearr_13980 = state_13959;
(statearr_13980[(14)] = inst_13932);

(statearr_13980[(7)] = inst_13919__$1);

(statearr_13980[(8)] = inst_13920);

return statearr_13980;
})();
var statearr_13981_14002 = state_13959__$1;
(statearr_13981_14002[(2)] = null);

(statearr_13981_14002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11944__auto__ = null;
var cljs$core$async$state_machine__11944__auto____0 = (function (){
var statearr_13982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13982[(0)] = cljs$core$async$state_machine__11944__auto__);

(statearr_13982[(1)] = (1));

return statearr_13982;
});
var cljs$core$async$state_machine__11944__auto____1 = (function (state_13959){
while(true){
var ret_value__11945__auto__ = (function (){try{while(true){
var result__11946__auto__ = switch__11943__auto__.call(null,state_13959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11946__auto__;
}
break;
}
}catch (e13983){var ex__11947__auto__ = e13983;
var statearr_13984_14003 = state_13959;
(statearr_13984_14003[(2)] = ex__11947__auto__);


if(cljs.core.seq.call(null,(state_13959[(4)]))){
var statearr_13985_14004 = state_13959;
(statearr_13985_14004[(1)] = cljs.core.first.call(null,(state_13959[(4)])));

} else {
throw ex__11947__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14005 = state_13959;
state_13959 = G__14005;
continue;
} else {
return ret_value__11945__auto__;
}
break;
}
});
cljs$core$async$state_machine__11944__auto__ = function(state_13959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11944__auto____1.call(this,state_13959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11944__auto____0;
cljs$core$async$state_machine__11944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11944__auto____1;
return cljs$core$async$state_machine__11944__auto__;
})()
})();
var state__12019__auto__ = (function (){var statearr_13986 = f__12018__auto__.call(null);
(statearr_13986[(6)] = c__12017__auto___13988);

return statearr_13986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12019__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
