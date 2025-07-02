// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15957 = arguments.length;
switch (G__15957) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15958 = (function (f,blockable,meta15959){
this.f = f;
this.blockable = blockable;
this.meta15959 = meta15959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15960,meta15959__$1){
var self__ = this;
var _15960__$1 = this;
return (new cljs.core.async.t_cljs$core$async15958(self__.f,self__.blockable,meta15959__$1));
}));

(cljs.core.async.t_cljs$core$async15958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15960){
var self__ = this;
var _15960__$1 = this;
return self__.meta15959;
}));

(cljs.core.async.t_cljs$core$async15958.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15958.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15958.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15958.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15959], null);
}));

(cljs.core.async.t_cljs$core$async15958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15958");

(cljs.core.async.t_cljs$core$async15958.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async15958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15958.
 */
cljs.core.async.__GT_t_cljs$core$async15958 = (function cljs$core$async$__GT_t_cljs$core$async15958(f__$1,blockable__$1,meta15959){
return (new cljs.core.async.t_cljs$core$async15958(f__$1,blockable__$1,meta15959));
});

}

return (new cljs.core.async.t_cljs$core$async15958(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__15964 = arguments.length;
switch (G__15964) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__15967 = arguments.length;
switch (G__15967) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__15970 = arguments.length;
switch (G__15970) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15972 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15972) : fn1.call(null,val_15972));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15972) : fn1.call(null,val_15972));
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__15974 = arguments.length;
switch (G__15974) {
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
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___15976 = n;
var x_15977 = (0);
while(true){
if((x_15977 < n__4613__auto___15976)){
(a[x_15977] = x_15977);

var G__15978 = (x_15977 + (1));
x_15977 = G__15978;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15979 = (function (flag,meta15980){
this.flag = flag;
this.meta15980 = meta15980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15981,meta15980__$1){
var self__ = this;
var _15981__$1 = this;
return (new cljs.core.async.t_cljs$core$async15979(self__.flag,meta15980__$1));
}));

(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15981){
var self__ = this;
var _15981__$1 = this;
return self__.meta15980;
}));

(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15980], null);
}));

(cljs.core.async.t_cljs$core$async15979.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15979");

(cljs.core.async.t_cljs$core$async15979.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async15979");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15979.
 */
cljs.core.async.__GT_t_cljs$core$async15979 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15979(flag__$1,meta15980){
return (new cljs.core.async.t_cljs$core$async15979(flag__$1,meta15980));
});

}

return (new cljs.core.async.t_cljs$core$async15979(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15982 = (function (flag,cb,meta15983){
this.flag = flag;
this.cb = cb;
this.meta15983 = meta15983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15984,meta15983__$1){
var self__ = this;
var _15984__$1 = this;
return (new cljs.core.async.t_cljs$core$async15982(self__.flag,self__.cb,meta15983__$1));
}));

(cljs.core.async.t_cljs$core$async15982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15984){
var self__ = this;
var _15984__$1 = this;
return self__.meta15983;
}));

(cljs.core.async.t_cljs$core$async15982.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15982.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15983], null);
}));

(cljs.core.async.t_cljs$core$async15982.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15982");

(cljs.core.async.t_cljs$core$async15982.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async15982");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15982.
 */
cljs.core.async.__GT_t_cljs$core$async15982 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15982(flag__$1,cb__$1,meta15983){
return (new cljs.core.async.t_cljs$core$async15982(flag__$1,cb__$1,meta15983));
});

}

return (new cljs.core.async.t_cljs$core$async15982(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_15989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_15989)){
if((!(((port_15989.cljs$core$IFn$_invoke$arity$1 ? port_15989.cljs$core$IFn$_invoke$arity$1((1)) : port_15989.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__15990 = (i + (1));
i = G__15990;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15985_SHARP_){
var G__15987 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15985_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15987) : fret.call(null,G__15987));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15986_SHARP_){
var G__15988 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15986_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15988) : fret.call(null,G__15988));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15991 = (i + (1));
i = G__15991;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5825__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var len__4736__auto___15997 = arguments.length;
var i__4737__auto___15998 = (0);
while(true){
if((i__4737__auto___15998 < len__4736__auto___15997)){
args__4742__auto__.push((arguments[i__4737__auto___15998]));

var G__15999 = (i__4737__auto___15998 + (1));
i__4737__auto___15998 = G__15999;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15994){
var map__15995 = p__15994;
var map__15995__$1 = (((((!((map__15995 == null))))?(((((map__15995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15995):map__15995);
var opts = map__15995__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15992){
var G__15993 = cljs.core.first(seq15992);
var seq15992__$1 = cljs.core.next(seq15992);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15993,seq15992__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__16001 = arguments.length;
switch (G__16001) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15897__auto___16048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_16025){
var state_val_16026 = (state_16025[(1)]);
if((state_val_16026 === (7))){
var inst_16021 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16027_16049 = state_16025__$1;
(statearr_16027_16049[(2)] = inst_16021);

(statearr_16027_16049[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16026 === (1))){
var state_16025__$1 = state_16025;
var statearr_16028_16050 = state_16025__$1;
(statearr_16028_16050[(2)] = null);

(statearr_16028_16050[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16026 === (4))){
var inst_16004 = (state_16025[(7)]);
var inst_16004__$1 = (state_16025[(2)]);
var inst_16005 = (inst_16004__$1 == null);
var state_16025__$1 = (function (){var statearr_16029 = state_16025;
(statearr_16029[(7)] = inst_16004__$1);

return statearr_16029;
})();
if(cljs.core.truth_(inst_16005)){
var statearr_16030_16051 = state_16025__$1;
(statearr_16030_16051[(1)] = (5));

} else {
var statearr_16031_16052 = state_16025__$1;
(statearr_16031_16052[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16026 === (13))){
var state_16025__$1 = state_16025;
var statearr_16032_16053 = state_16025__$1;
(statearr_16032_16053[(2)] = null);

(statearr_16032_16053[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16026 === (6))){
var inst_16004 = (state_16025[(7)]);
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16025__$1,(11),to,inst_16004);
} else {
if((state_val_16026 === (3))){
var inst_16023 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16025__$1,inst_16023);
} else {
if((state_val_16026 === (12))){
var state_16025__$1 = state_16025;
var statearr_16033_16054 = state_16025__$1;
(statearr_16033_16054[(2)] = null);

(statearr_16033_16054[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16026 === (2))){
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16025__$1,(4),from);
} else {
if((state_val_16026 === (11))){
var inst_16014 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
if(cljs.core.truth_(inst_16014)){
var statearr_16034_16055 = state_16025__$1;
(statearr_16034_16055[(1)] = (12));

} else {
var statearr_16035_16056 = state_16025__$1;
(statearr_16035_16056[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16026 === (9))){
var state_16025__$1 = state_16025;
var statearr_16036_16057 = state_16025__$1;
(statearr_16036_16057[(2)] = null);

(statearr_16036_16057[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16026 === (5))){
var state_16025__$1 = state_16025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16037_16058 = state_16025__$1;
(statearr_16037_16058[(1)] = (8));

} else {
var statearr_16038_16059 = state_16025__$1;
(statearr_16038_16059[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16026 === (14))){
var inst_16019 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16039_16060 = state_16025__$1;
(statearr_16039_16060[(2)] = inst_16019);

(statearr_16039_16060[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16026 === (10))){
var inst_16011 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16040_16061 = state_16025__$1;
(statearr_16040_16061[(2)] = inst_16011);

(statearr_16040_16061[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16026 === (8))){
var inst_16008 = cljs.core.async.close_BANG_(to);
var state_16025__$1 = state_16025;
var statearr_16041_16062 = state_16025__$1;
(statearr_16041_16062[(2)] = inst_16008);

(statearr_16041_16062[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__15823__auto__ = null;
var cljs$core$async$state_machine__15823__auto____0 = (function (){
var statearr_16042 = [null,null,null,null,null,null,null,null];
(statearr_16042[(0)] = cljs$core$async$state_machine__15823__auto__);

(statearr_16042[(1)] = (1));

return statearr_16042;
});
var cljs$core$async$state_machine__15823__auto____1 = (function (state_16025){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_16025);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e16043){var ex__15826__auto__ = e16043;
var statearr_16044_16063 = state_16025;
(statearr_16044_16063[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_16025[(4)]))){
var statearr_16045_16064 = state_16025;
(statearr_16045_16064[(1)] = cljs.core.first((state_16025[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__16065 = state_16025;
state_16025 = G__16065;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$state_machine__15823__auto__ = function(state_16025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15823__auto____1.call(this,state_16025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15823__auto____0;
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15823__auto____1;
return cljs$core$async$state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_16046 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_16046[(6)] = c__15897__auto___16048);

return statearr_16046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__16066){
var vec__16067 = p__16066;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16067,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16067,(1),null);
var job = vec__16067;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15897__auto___16243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_16074){
var state_val_16075 = (state_16074[(1)]);
if((state_val_16075 === (1))){
var state_16074__$1 = state_16074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16074__$1,(2),res,v);
} else {
if((state_val_16075 === (2))){
var inst_16071 = (state_16074[(2)]);
var inst_16072 = cljs.core.async.close_BANG_(res);
var state_16074__$1 = (function (){var statearr_16076 = state_16074;
(statearr_16076[(7)] = inst_16071);

return statearr_16076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16074__$1,inst_16072);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____0 = (function (){
var statearr_16077 = [null,null,null,null,null,null,null,null];
(statearr_16077[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__);

(statearr_16077[(1)] = (1));

return statearr_16077;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____1 = (function (state_16074){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_16074);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e16078){var ex__15826__auto__ = e16078;
var statearr_16079_16244 = state_16074;
(statearr_16079_16244[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_16074[(4)]))){
var statearr_16080_16245 = state_16074;
(statearr_16080_16245[(1)] = cljs.core.first((state_16074[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__16246 = state_16074;
state_16074 = G__16246;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__ = function(state_16074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____1.call(this,state_16074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_16081 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_16081[(6)] = c__15897__auto___16243);

return statearr_16081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16082){
var vec__16083 = p__16082;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16083,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16083,(1),null);
var job = vec__16083;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___16247 = n;
var __16248 = (0);
while(true){
if((__16248 < n__4613__auto___16247)){
var G__16086_16249 = type;
var G__16086_16250__$1 = (((G__16086_16249 instanceof cljs.core.Keyword))?G__16086_16249.fqn:null);
switch (G__16086_16250__$1) {
case "compute":
var c__15897__auto___16252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16248,c__15897__auto___16252,G__16086_16249,G__16086_16250__$1,n__4613__auto___16247,jobs,results,process,async){
return (function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = ((function (__16248,c__15897__auto___16252,G__16086_16249,G__16086_16250__$1,n__4613__auto___16247,jobs,results,process,async){
return (function (state_16099){
var state_val_16100 = (state_16099[(1)]);
if((state_val_16100 === (1))){
var state_16099__$1 = state_16099;
var statearr_16101_16253 = state_16099__$1;
(statearr_16101_16253[(2)] = null);

(statearr_16101_16253[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16100 === (2))){
var state_16099__$1 = state_16099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16099__$1,(4),jobs);
} else {
if((state_val_16100 === (3))){
var inst_16097 = (state_16099[(2)]);
var state_16099__$1 = state_16099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16099__$1,inst_16097);
} else {
if((state_val_16100 === (4))){
var inst_16089 = (state_16099[(2)]);
var inst_16090 = process(inst_16089);
var state_16099__$1 = state_16099;
if(cljs.core.truth_(inst_16090)){
var statearr_16102_16254 = state_16099__$1;
(statearr_16102_16254[(1)] = (5));

} else {
var statearr_16103_16255 = state_16099__$1;
(statearr_16103_16255[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16100 === (5))){
var state_16099__$1 = state_16099;
var statearr_16104_16256 = state_16099__$1;
(statearr_16104_16256[(2)] = null);

(statearr_16104_16256[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16100 === (6))){
var state_16099__$1 = state_16099;
var statearr_16105_16257 = state_16099__$1;
(statearr_16105_16257[(2)] = null);

(statearr_16105_16257[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16100 === (7))){
var inst_16095 = (state_16099[(2)]);
var state_16099__$1 = state_16099;
var statearr_16106_16258 = state_16099__$1;
(statearr_16106_16258[(2)] = inst_16095);

(statearr_16106_16258[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16248,c__15897__auto___16252,G__16086_16249,G__16086_16250__$1,n__4613__auto___16247,jobs,results,process,async))
;
return ((function (__16248,switch__15822__auto__,c__15897__auto___16252,G__16086_16249,G__16086_16250__$1,n__4613__auto___16247,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____0 = (function (){
var statearr_16107 = [null,null,null,null,null,null,null];
(statearr_16107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__);

(statearr_16107[(1)] = (1));

return statearr_16107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____1 = (function (state_16099){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_16099);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e16108){var ex__15826__auto__ = e16108;
var statearr_16109_16259 = state_16099;
(statearr_16109_16259[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_16099[(4)]))){
var statearr_16110_16260 = state_16099;
(statearr_16110_16260[(1)] = cljs.core.first((state_16099[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__16261 = state_16099;
state_16099 = G__16261;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__ = function(state_16099){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____1.call(this,state_16099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__;
})()
;})(__16248,switch__15822__auto__,c__15897__auto___16252,G__16086_16249,G__16086_16250__$1,n__4613__auto___16247,jobs,results,process,async))
})();
var state__15899__auto__ = (function (){var statearr_16111 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_16111[(6)] = c__15897__auto___16252);

return statearr_16111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
});})(__16248,c__15897__auto___16252,G__16086_16249,G__16086_16250__$1,n__4613__auto___16247,jobs,results,process,async))
);


break;
case "async":
var c__15897__auto___16262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16248,c__15897__auto___16262,G__16086_16249,G__16086_16250__$1,n__4613__auto___16247,jobs,results,process,async){
return (function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = ((function (__16248,c__15897__auto___16262,G__16086_16249,G__16086_16250__$1,n__4613__auto___16247,jobs,results,process,async){
return (function (state_16124){
var state_val_16125 = (state_16124[(1)]);
if((state_val_16125 === (1))){
var state_16124__$1 = state_16124;
var statearr_16126_16263 = state_16124__$1;
(statearr_16126_16263[(2)] = null);

(statearr_16126_16263[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16125 === (2))){
var state_16124__$1 = state_16124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16124__$1,(4),jobs);
} else {
if((state_val_16125 === (3))){
var inst_16122 = (state_16124[(2)]);
var state_16124__$1 = state_16124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16124__$1,inst_16122);
} else {
if((state_val_16125 === (4))){
var inst_16114 = (state_16124[(2)]);
var inst_16115 = async(inst_16114);
var state_16124__$1 = state_16124;
if(cljs.core.truth_(inst_16115)){
var statearr_16127_16264 = state_16124__$1;
(statearr_16127_16264[(1)] = (5));

} else {
var statearr_16128_16265 = state_16124__$1;
(statearr_16128_16265[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16125 === (5))){
var state_16124__$1 = state_16124;
var statearr_16129_16266 = state_16124__$1;
(statearr_16129_16266[(2)] = null);

(statearr_16129_16266[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16125 === (6))){
var state_16124__$1 = state_16124;
var statearr_16130_16267 = state_16124__$1;
(statearr_16130_16267[(2)] = null);

(statearr_16130_16267[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16125 === (7))){
var inst_16120 = (state_16124[(2)]);
var state_16124__$1 = state_16124;
var statearr_16131_16268 = state_16124__$1;
(statearr_16131_16268[(2)] = inst_16120);

(statearr_16131_16268[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16248,c__15897__auto___16262,G__16086_16249,G__16086_16250__$1,n__4613__auto___16247,jobs,results,process,async))
;
return ((function (__16248,switch__15822__auto__,c__15897__auto___16262,G__16086_16249,G__16086_16250__$1,n__4613__auto___16247,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____0 = (function (){
var statearr_16132 = [null,null,null,null,null,null,null];
(statearr_16132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__);

(statearr_16132[(1)] = (1));

return statearr_16132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____1 = (function (state_16124){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_16124);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e16133){var ex__15826__auto__ = e16133;
var statearr_16134_16269 = state_16124;
(statearr_16134_16269[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_16124[(4)]))){
var statearr_16135_16270 = state_16124;
(statearr_16135_16270[(1)] = cljs.core.first((state_16124[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__16271 = state_16124;
state_16124 = G__16271;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__ = function(state_16124){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____1.call(this,state_16124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__;
})()
;})(__16248,switch__15822__auto__,c__15897__auto___16262,G__16086_16249,G__16086_16250__$1,n__4613__auto___16247,jobs,results,process,async))
})();
var state__15899__auto__ = (function (){var statearr_16136 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_16136[(6)] = c__15897__auto___16262);

return statearr_16136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
});})(__16248,c__15897__auto___16262,G__16086_16249,G__16086_16250__$1,n__4613__auto___16247,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16086_16250__$1)].join('')));

}

var G__16272 = (__16248 + (1));
__16248 = G__16272;
continue;
} else {
}
break;
}

var c__15897__auto___16273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_16158){
var state_val_16159 = (state_16158[(1)]);
if((state_val_16159 === (7))){
var inst_16154 = (state_16158[(2)]);
var state_16158__$1 = state_16158;
var statearr_16160_16274 = state_16158__$1;
(statearr_16160_16274[(2)] = inst_16154);

(statearr_16160_16274[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16159 === (1))){
var state_16158__$1 = state_16158;
var statearr_16161_16275 = state_16158__$1;
(statearr_16161_16275[(2)] = null);

(statearr_16161_16275[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16159 === (4))){
var inst_16139 = (state_16158[(7)]);
var inst_16139__$1 = (state_16158[(2)]);
var inst_16140 = (inst_16139__$1 == null);
var state_16158__$1 = (function (){var statearr_16162 = state_16158;
(statearr_16162[(7)] = inst_16139__$1);

return statearr_16162;
})();
if(cljs.core.truth_(inst_16140)){
var statearr_16163_16276 = state_16158__$1;
(statearr_16163_16276[(1)] = (5));

} else {
var statearr_16164_16277 = state_16158__$1;
(statearr_16164_16277[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16159 === (6))){
var inst_16139 = (state_16158[(7)]);
var inst_16144 = (state_16158[(8)]);
var inst_16144__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16145 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16146 = [inst_16139,inst_16144__$1];
var inst_16147 = (new cljs.core.PersistentVector(null,2,(5),inst_16145,inst_16146,null));
var state_16158__$1 = (function (){var statearr_16165 = state_16158;
(statearr_16165[(8)] = inst_16144__$1);

return statearr_16165;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16158__$1,(8),jobs,inst_16147);
} else {
if((state_val_16159 === (3))){
var inst_16156 = (state_16158[(2)]);
var state_16158__$1 = state_16158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16158__$1,inst_16156);
} else {
if((state_val_16159 === (2))){
var state_16158__$1 = state_16158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16158__$1,(4),from);
} else {
if((state_val_16159 === (9))){
var inst_16151 = (state_16158[(2)]);
var state_16158__$1 = (function (){var statearr_16166 = state_16158;
(statearr_16166[(9)] = inst_16151);

return statearr_16166;
})();
var statearr_16167_16278 = state_16158__$1;
(statearr_16167_16278[(2)] = null);

(statearr_16167_16278[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16159 === (5))){
var inst_16142 = cljs.core.async.close_BANG_(jobs);
var state_16158__$1 = state_16158;
var statearr_16168_16279 = state_16158__$1;
(statearr_16168_16279[(2)] = inst_16142);

(statearr_16168_16279[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16159 === (8))){
var inst_16144 = (state_16158[(8)]);
var inst_16149 = (state_16158[(2)]);
var state_16158__$1 = (function (){var statearr_16169 = state_16158;
(statearr_16169[(10)] = inst_16149);

return statearr_16169;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16158__$1,(9),results,inst_16144);
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
var cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____0 = (function (){
var statearr_16170 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16170[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__);

(statearr_16170[(1)] = (1));

return statearr_16170;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____1 = (function (state_16158){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_16158);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e16171){var ex__15826__auto__ = e16171;
var statearr_16172_16280 = state_16158;
(statearr_16172_16280[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_16158[(4)]))){
var statearr_16173_16281 = state_16158;
(statearr_16173_16281[(1)] = cljs.core.first((state_16158[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__16282 = state_16158;
state_16158 = G__16282;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__ = function(state_16158){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____1.call(this,state_16158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_16174 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_16174[(6)] = c__15897__auto___16273);

return statearr_16174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
}));


var c__15897__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_16212){
var state_val_16213 = (state_16212[(1)]);
if((state_val_16213 === (7))){
var inst_16208 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16214_16283 = state_16212__$1;
(statearr_16214_16283[(2)] = inst_16208);

(statearr_16214_16283[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (20))){
var state_16212__$1 = state_16212;
var statearr_16215_16284 = state_16212__$1;
(statearr_16215_16284[(2)] = null);

(statearr_16215_16284[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (1))){
var state_16212__$1 = state_16212;
var statearr_16216_16285 = state_16212__$1;
(statearr_16216_16285[(2)] = null);

(statearr_16216_16285[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (4))){
var inst_16177 = (state_16212[(7)]);
var inst_16177__$1 = (state_16212[(2)]);
var inst_16178 = (inst_16177__$1 == null);
var state_16212__$1 = (function (){var statearr_16217 = state_16212;
(statearr_16217[(7)] = inst_16177__$1);

return statearr_16217;
})();
if(cljs.core.truth_(inst_16178)){
var statearr_16218_16286 = state_16212__$1;
(statearr_16218_16286[(1)] = (5));

} else {
var statearr_16219_16287 = state_16212__$1;
(statearr_16219_16287[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (15))){
var inst_16190 = (state_16212[(8)]);
var state_16212__$1 = state_16212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16212__$1,(18),to,inst_16190);
} else {
if((state_val_16213 === (21))){
var inst_16203 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16220_16288 = state_16212__$1;
(statearr_16220_16288[(2)] = inst_16203);

(statearr_16220_16288[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (13))){
var inst_16205 = (state_16212[(2)]);
var state_16212__$1 = (function (){var statearr_16221 = state_16212;
(statearr_16221[(9)] = inst_16205);

return statearr_16221;
})();
var statearr_16222_16289 = state_16212__$1;
(statearr_16222_16289[(2)] = null);

(statearr_16222_16289[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (6))){
var inst_16177 = (state_16212[(7)]);
var state_16212__$1 = state_16212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16212__$1,(11),inst_16177);
} else {
if((state_val_16213 === (17))){
var inst_16198 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
if(cljs.core.truth_(inst_16198)){
var statearr_16223_16290 = state_16212__$1;
(statearr_16223_16290[(1)] = (19));

} else {
var statearr_16224_16291 = state_16212__$1;
(statearr_16224_16291[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (3))){
var inst_16210 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16212__$1,inst_16210);
} else {
if((state_val_16213 === (12))){
var inst_16187 = (state_16212[(10)]);
var state_16212__$1 = state_16212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16212__$1,(14),inst_16187);
} else {
if((state_val_16213 === (2))){
var state_16212__$1 = state_16212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16212__$1,(4),results);
} else {
if((state_val_16213 === (19))){
var state_16212__$1 = state_16212;
var statearr_16225_16292 = state_16212__$1;
(statearr_16225_16292[(2)] = null);

(statearr_16225_16292[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (11))){
var inst_16187 = (state_16212[(2)]);
var state_16212__$1 = (function (){var statearr_16226 = state_16212;
(statearr_16226[(10)] = inst_16187);

return statearr_16226;
})();
var statearr_16227_16293 = state_16212__$1;
(statearr_16227_16293[(2)] = null);

(statearr_16227_16293[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (9))){
var state_16212__$1 = state_16212;
var statearr_16228_16294 = state_16212__$1;
(statearr_16228_16294[(2)] = null);

(statearr_16228_16294[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (5))){
var state_16212__$1 = state_16212;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16229_16295 = state_16212__$1;
(statearr_16229_16295[(1)] = (8));

} else {
var statearr_16230_16296 = state_16212__$1;
(statearr_16230_16296[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (14))){
var inst_16190 = (state_16212[(8)]);
var inst_16190__$1 = (state_16212[(2)]);
var inst_16191 = (inst_16190__$1 == null);
var inst_16192 = cljs.core.not(inst_16191);
var state_16212__$1 = (function (){var statearr_16231 = state_16212;
(statearr_16231[(8)] = inst_16190__$1);

return statearr_16231;
})();
if(inst_16192){
var statearr_16232_16297 = state_16212__$1;
(statearr_16232_16297[(1)] = (15));

} else {
var statearr_16233_16298 = state_16212__$1;
(statearr_16233_16298[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (16))){
var state_16212__$1 = state_16212;
var statearr_16234_16299 = state_16212__$1;
(statearr_16234_16299[(2)] = false);

(statearr_16234_16299[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (10))){
var inst_16184 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16235_16300 = state_16212__$1;
(statearr_16235_16300[(2)] = inst_16184);

(statearr_16235_16300[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (18))){
var inst_16195 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16236_16301 = state_16212__$1;
(statearr_16236_16301[(2)] = inst_16195);

(statearr_16236_16301[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (8))){
var inst_16181 = cljs.core.async.close_BANG_(to);
var state_16212__$1 = state_16212;
var statearr_16237_16302 = state_16212__$1;
(statearr_16237_16302[(2)] = inst_16181);

(statearr_16237_16302[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____0 = (function (){
var statearr_16238 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16238[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__);

(statearr_16238[(1)] = (1));

return statearr_16238;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____1 = (function (state_16212){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_16212);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e16239){var ex__15826__auto__ = e16239;
var statearr_16240_16303 = state_16212;
(statearr_16240_16303[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_16212[(4)]))){
var statearr_16241_16304 = state_16212;
(statearr_16241_16304[(1)] = cljs.core.first((state_16212[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__16305 = state_16212;
state_16212 = G__16305;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__ = function(state_16212){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____1.call(this,state_16212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15823__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_16242 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_16242[(6)] = c__15897__auto__);

return statearr_16242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
}));

return c__15897__auto__;
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
var G__16307 = arguments.length;
switch (G__16307) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__16310 = arguments.length;
switch (G__16310) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__16313 = arguments.length;
switch (G__16313) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15897__auto___16363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_16339){
var state_val_16340 = (state_16339[(1)]);
if((state_val_16340 === (7))){
var inst_16335 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
var statearr_16341_16364 = state_16339__$1;
(statearr_16341_16364[(2)] = inst_16335);

(statearr_16341_16364[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (1))){
var state_16339__$1 = state_16339;
var statearr_16342_16365 = state_16339__$1;
(statearr_16342_16365[(2)] = null);

(statearr_16342_16365[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (4))){
var inst_16316 = (state_16339[(7)]);
var inst_16316__$1 = (state_16339[(2)]);
var inst_16317 = (inst_16316__$1 == null);
var state_16339__$1 = (function (){var statearr_16343 = state_16339;
(statearr_16343[(7)] = inst_16316__$1);

return statearr_16343;
})();
if(cljs.core.truth_(inst_16317)){
var statearr_16344_16366 = state_16339__$1;
(statearr_16344_16366[(1)] = (5));

} else {
var statearr_16345_16367 = state_16339__$1;
(statearr_16345_16367[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (13))){
var state_16339__$1 = state_16339;
var statearr_16346_16368 = state_16339__$1;
(statearr_16346_16368[(2)] = null);

(statearr_16346_16368[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (6))){
var inst_16316 = (state_16339[(7)]);
var inst_16322 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16316) : p.call(null,inst_16316));
var state_16339__$1 = state_16339;
if(cljs.core.truth_(inst_16322)){
var statearr_16347_16369 = state_16339__$1;
(statearr_16347_16369[(1)] = (9));

} else {
var statearr_16348_16370 = state_16339__$1;
(statearr_16348_16370[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (3))){
var inst_16337 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16339__$1,inst_16337);
} else {
if((state_val_16340 === (12))){
var state_16339__$1 = state_16339;
var statearr_16349_16371 = state_16339__$1;
(statearr_16349_16371[(2)] = null);

(statearr_16349_16371[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (2))){
var state_16339__$1 = state_16339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16339__$1,(4),ch);
} else {
if((state_val_16340 === (11))){
var inst_16316 = (state_16339[(7)]);
var inst_16326 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16339__$1,(8),inst_16326,inst_16316);
} else {
if((state_val_16340 === (9))){
var state_16339__$1 = state_16339;
var statearr_16350_16372 = state_16339__$1;
(statearr_16350_16372[(2)] = tc);

(statearr_16350_16372[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (5))){
var inst_16319 = cljs.core.async.close_BANG_(tc);
var inst_16320 = cljs.core.async.close_BANG_(fc);
var state_16339__$1 = (function (){var statearr_16351 = state_16339;
(statearr_16351[(8)] = inst_16319);

return statearr_16351;
})();
var statearr_16352_16373 = state_16339__$1;
(statearr_16352_16373[(2)] = inst_16320);

(statearr_16352_16373[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (14))){
var inst_16333 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
var statearr_16353_16374 = state_16339__$1;
(statearr_16353_16374[(2)] = inst_16333);

(statearr_16353_16374[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (10))){
var state_16339__$1 = state_16339;
var statearr_16354_16375 = state_16339__$1;
(statearr_16354_16375[(2)] = fc);

(statearr_16354_16375[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (8))){
var inst_16328 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
if(cljs.core.truth_(inst_16328)){
var statearr_16355_16376 = state_16339__$1;
(statearr_16355_16376[(1)] = (12));

} else {
var statearr_16356_16377 = state_16339__$1;
(statearr_16356_16377[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__15823__auto__ = null;
var cljs$core$async$state_machine__15823__auto____0 = (function (){
var statearr_16357 = [null,null,null,null,null,null,null,null,null];
(statearr_16357[(0)] = cljs$core$async$state_machine__15823__auto__);

(statearr_16357[(1)] = (1));

return statearr_16357;
});
var cljs$core$async$state_machine__15823__auto____1 = (function (state_16339){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_16339);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e16358){var ex__15826__auto__ = e16358;
var statearr_16359_16378 = state_16339;
(statearr_16359_16378[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_16339[(4)]))){
var statearr_16360_16379 = state_16339;
(statearr_16360_16379[(1)] = cljs.core.first((state_16339[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__16380 = state_16339;
state_16339 = G__16380;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$state_machine__15823__auto__ = function(state_16339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15823__auto____1.call(this,state_16339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15823__auto____0;
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15823__auto____1;
return cljs$core$async$state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_16361 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_16361[(6)] = c__15897__auto___16363);

return statearr_16361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
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
var c__15897__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_16402){
var state_val_16403 = (state_16402[(1)]);
if((state_val_16403 === (7))){
var inst_16398 = (state_16402[(2)]);
var state_16402__$1 = state_16402;
var statearr_16404_16423 = state_16402__$1;
(statearr_16404_16423[(2)] = inst_16398);

(statearr_16404_16423[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16403 === (1))){
var inst_16381 = init;
var inst_16382 = inst_16381;
var state_16402__$1 = (function (){var statearr_16405 = state_16402;
(statearr_16405[(7)] = inst_16382);

return statearr_16405;
})();
var statearr_16406_16424 = state_16402__$1;
(statearr_16406_16424[(2)] = null);

(statearr_16406_16424[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16403 === (4))){
var inst_16385 = (state_16402[(8)]);
var inst_16385__$1 = (state_16402[(2)]);
var inst_16386 = (inst_16385__$1 == null);
var state_16402__$1 = (function (){var statearr_16407 = state_16402;
(statearr_16407[(8)] = inst_16385__$1);

return statearr_16407;
})();
if(cljs.core.truth_(inst_16386)){
var statearr_16408_16425 = state_16402__$1;
(statearr_16408_16425[(1)] = (5));

} else {
var statearr_16409_16426 = state_16402__$1;
(statearr_16409_16426[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16403 === (6))){
var inst_16382 = (state_16402[(7)]);
var inst_16385 = (state_16402[(8)]);
var inst_16389 = (state_16402[(9)]);
var inst_16389__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16382,inst_16385) : f.call(null,inst_16382,inst_16385));
var inst_16390 = cljs.core.reduced_QMARK_(inst_16389__$1);
var state_16402__$1 = (function (){var statearr_16410 = state_16402;
(statearr_16410[(9)] = inst_16389__$1);

return statearr_16410;
})();
if(inst_16390){
var statearr_16411_16427 = state_16402__$1;
(statearr_16411_16427[(1)] = (8));

} else {
var statearr_16412_16428 = state_16402__$1;
(statearr_16412_16428[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16403 === (3))){
var inst_16400 = (state_16402[(2)]);
var state_16402__$1 = state_16402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16402__$1,inst_16400);
} else {
if((state_val_16403 === (2))){
var state_16402__$1 = state_16402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16402__$1,(4),ch);
} else {
if((state_val_16403 === (9))){
var inst_16389 = (state_16402[(9)]);
var inst_16382 = inst_16389;
var state_16402__$1 = (function (){var statearr_16413 = state_16402;
(statearr_16413[(7)] = inst_16382);

return statearr_16413;
})();
var statearr_16414_16429 = state_16402__$1;
(statearr_16414_16429[(2)] = null);

(statearr_16414_16429[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16403 === (5))){
var inst_16382 = (state_16402[(7)]);
var state_16402__$1 = state_16402;
var statearr_16415_16430 = state_16402__$1;
(statearr_16415_16430[(2)] = inst_16382);

(statearr_16415_16430[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16403 === (10))){
var inst_16396 = (state_16402[(2)]);
var state_16402__$1 = state_16402;
var statearr_16416_16431 = state_16402__$1;
(statearr_16416_16431[(2)] = inst_16396);

(statearr_16416_16431[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16403 === (8))){
var inst_16389 = (state_16402[(9)]);
var inst_16392 = cljs.core.deref(inst_16389);
var state_16402__$1 = state_16402;
var statearr_16417_16432 = state_16402__$1;
(statearr_16417_16432[(2)] = inst_16392);

(statearr_16417_16432[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$reduce_$_state_machine__15823__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15823__auto____0 = (function (){
var statearr_16418 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16418[(0)] = cljs$core$async$reduce_$_state_machine__15823__auto__);

(statearr_16418[(1)] = (1));

return statearr_16418;
});
var cljs$core$async$reduce_$_state_machine__15823__auto____1 = (function (state_16402){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_16402);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e16419){var ex__15826__auto__ = e16419;
var statearr_16420_16433 = state_16402;
(statearr_16420_16433[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_16402[(4)]))){
var statearr_16421_16434 = state_16402;
(statearr_16421_16434[(1)] = cljs.core.first((state_16402[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__16435 = state_16402;
state_16402 = G__16435;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15823__auto__ = function(state_16402){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15823__auto____1.call(this,state_16402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15823__auto____0;
cljs$core$async$reduce_$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15823__auto____1;
return cljs$core$async$reduce_$_state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_16422 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_16422[(6)] = c__15897__auto__);

return statearr_16422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
}));

return c__15897__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15897__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_16441){
var state_val_16442 = (state_16441[(1)]);
if((state_val_16442 === (1))){
var inst_16436 = cljs.core.async.reduce(f__$1,init,ch);
var state_16441__$1 = state_16441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16441__$1,(2),inst_16436);
} else {
if((state_val_16442 === (2))){
var inst_16438 = (state_16441[(2)]);
var inst_16439 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16438) : f__$1.call(null,inst_16438));
var state_16441__$1 = state_16441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16441__$1,inst_16439);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15823__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15823__auto____0 = (function (){
var statearr_16443 = [null,null,null,null,null,null,null];
(statearr_16443[(0)] = cljs$core$async$transduce_$_state_machine__15823__auto__);

(statearr_16443[(1)] = (1));

return statearr_16443;
});
var cljs$core$async$transduce_$_state_machine__15823__auto____1 = (function (state_16441){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_16441);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e16444){var ex__15826__auto__ = e16444;
var statearr_16445_16448 = state_16441;
(statearr_16445_16448[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_16441[(4)]))){
var statearr_16446_16449 = state_16441;
(statearr_16446_16449[(1)] = cljs.core.first((state_16441[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__16450 = state_16441;
state_16441 = G__16450;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15823__auto__ = function(state_16441){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15823__auto____1.call(this,state_16441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15823__auto____0;
cljs$core$async$transduce_$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15823__auto____1;
return cljs$core$async$transduce_$_state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_16447 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_16447[(6)] = c__15897__auto__);

return statearr_16447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
}));

return c__15897__auto__;
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
var G__16452 = arguments.length;
switch (G__16452) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15897__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_16477){
var state_val_16478 = (state_16477[(1)]);
if((state_val_16478 === (7))){
var inst_16459 = (state_16477[(2)]);
var state_16477__$1 = state_16477;
var statearr_16479_16501 = state_16477__$1;
(statearr_16479_16501[(2)] = inst_16459);

(statearr_16479_16501[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16478 === (1))){
var inst_16453 = cljs.core.seq(coll);
var inst_16454 = inst_16453;
var state_16477__$1 = (function (){var statearr_16480 = state_16477;
(statearr_16480[(7)] = inst_16454);

return statearr_16480;
})();
var statearr_16481_16502 = state_16477__$1;
(statearr_16481_16502[(2)] = null);

(statearr_16481_16502[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16478 === (4))){
var inst_16454 = (state_16477[(7)]);
var inst_16457 = cljs.core.first(inst_16454);
var state_16477__$1 = state_16477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16477__$1,(7),ch,inst_16457);
} else {
if((state_val_16478 === (13))){
var inst_16471 = (state_16477[(2)]);
var state_16477__$1 = state_16477;
var statearr_16482_16503 = state_16477__$1;
(statearr_16482_16503[(2)] = inst_16471);

(statearr_16482_16503[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16478 === (6))){
var inst_16462 = (state_16477[(2)]);
var state_16477__$1 = state_16477;
if(cljs.core.truth_(inst_16462)){
var statearr_16483_16504 = state_16477__$1;
(statearr_16483_16504[(1)] = (8));

} else {
var statearr_16484_16505 = state_16477__$1;
(statearr_16484_16505[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16478 === (3))){
var inst_16475 = (state_16477[(2)]);
var state_16477__$1 = state_16477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16477__$1,inst_16475);
} else {
if((state_val_16478 === (12))){
var state_16477__$1 = state_16477;
var statearr_16485_16506 = state_16477__$1;
(statearr_16485_16506[(2)] = null);

(statearr_16485_16506[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16478 === (2))){
var inst_16454 = (state_16477[(7)]);
var state_16477__$1 = state_16477;
if(cljs.core.truth_(inst_16454)){
var statearr_16486_16507 = state_16477__$1;
(statearr_16486_16507[(1)] = (4));

} else {
var statearr_16487_16508 = state_16477__$1;
(statearr_16487_16508[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16478 === (11))){
var inst_16468 = cljs.core.async.close_BANG_(ch);
var state_16477__$1 = state_16477;
var statearr_16488_16509 = state_16477__$1;
(statearr_16488_16509[(2)] = inst_16468);

(statearr_16488_16509[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16478 === (9))){
var state_16477__$1 = state_16477;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16489_16510 = state_16477__$1;
(statearr_16489_16510[(1)] = (11));

} else {
var statearr_16490_16511 = state_16477__$1;
(statearr_16490_16511[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16478 === (5))){
var inst_16454 = (state_16477[(7)]);
var state_16477__$1 = state_16477;
var statearr_16491_16512 = state_16477__$1;
(statearr_16491_16512[(2)] = inst_16454);

(statearr_16491_16512[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16478 === (10))){
var inst_16473 = (state_16477[(2)]);
var state_16477__$1 = state_16477;
var statearr_16492_16513 = state_16477__$1;
(statearr_16492_16513[(2)] = inst_16473);

(statearr_16492_16513[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16478 === (8))){
var inst_16454 = (state_16477[(7)]);
var inst_16464 = cljs.core.next(inst_16454);
var inst_16454__$1 = inst_16464;
var state_16477__$1 = (function (){var statearr_16493 = state_16477;
(statearr_16493[(7)] = inst_16454__$1);

return statearr_16493;
})();
var statearr_16494_16514 = state_16477__$1;
(statearr_16494_16514[(2)] = null);

(statearr_16494_16514[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__15823__auto__ = null;
var cljs$core$async$state_machine__15823__auto____0 = (function (){
var statearr_16495 = [null,null,null,null,null,null,null,null];
(statearr_16495[(0)] = cljs$core$async$state_machine__15823__auto__);

(statearr_16495[(1)] = (1));

return statearr_16495;
});
var cljs$core$async$state_machine__15823__auto____1 = (function (state_16477){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_16477);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e16496){var ex__15826__auto__ = e16496;
var statearr_16497_16515 = state_16477;
(statearr_16497_16515[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_16477[(4)]))){
var statearr_16498_16516 = state_16477;
(statearr_16498_16516[(1)] = cljs.core.first((state_16477[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__16517 = state_16477;
state_16477 = G__16517;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$state_machine__15823__auto__ = function(state_16477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15823__auto____1.call(this,state_16477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15823__auto____0;
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15823__auto____1;
return cljs$core$async$state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_16499 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_16499[(6)] = c__15897__auto__);

return statearr_16499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
}));

return c__15897__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16519 = arguments.length;
switch (G__16519) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_16521 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_16521(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_16522 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_16522(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_16523 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_16523(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_16524 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_16524(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16525 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16525 = (function (ch,cs,meta16526){
this.ch = ch;
this.cs = cs;
this.meta16526 = meta16526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16527,meta16526__$1){
var self__ = this;
var _16527__$1 = this;
return (new cljs.core.async.t_cljs$core$async16525(self__.ch,self__.cs,meta16526__$1));
}));

(cljs.core.async.t_cljs$core$async16525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16527){
var self__ = this;
var _16527__$1 = this;
return self__.meta16526;
}));

(cljs.core.async.t_cljs$core$async16525.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16525.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16525.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16525.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16525.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16525.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16526], null);
}));

(cljs.core.async.t_cljs$core$async16525.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16525");

(cljs.core.async.t_cljs$core$async16525.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16525");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16525.
 */
cljs.core.async.__GT_t_cljs$core$async16525 = (function cljs$core$async$mult_$___GT_t_cljs$core$async16525(ch__$1,cs__$1,meta16526){
return (new cljs.core.async.t_cljs$core$async16525(ch__$1,cs__$1,meta16526));
});

}

return (new cljs.core.async.t_cljs$core$async16525(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15897__auto___16744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_16660){
var state_val_16661 = (state_16660[(1)]);
if((state_val_16661 === (7))){
var inst_16656 = (state_16660[(2)]);
var state_16660__$1 = state_16660;
var statearr_16662_16745 = state_16660__$1;
(statearr_16662_16745[(2)] = inst_16656);

(statearr_16662_16745[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (20))){
var inst_16561 = (state_16660[(7)]);
var inst_16573 = cljs.core.first(inst_16561);
var inst_16574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16573,(0),null);
var inst_16575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16573,(1),null);
var state_16660__$1 = (function (){var statearr_16663 = state_16660;
(statearr_16663[(8)] = inst_16574);

return statearr_16663;
})();
if(cljs.core.truth_(inst_16575)){
var statearr_16664_16746 = state_16660__$1;
(statearr_16664_16746[(1)] = (22));

} else {
var statearr_16665_16747 = state_16660__$1;
(statearr_16665_16747[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (27))){
var inst_16603 = (state_16660[(9)]);
var inst_16605 = (state_16660[(10)]);
var inst_16610 = (state_16660[(11)]);
var inst_16530 = (state_16660[(12)]);
var inst_16610__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16603,inst_16605);
var inst_16611 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16610__$1,inst_16530,done);
var state_16660__$1 = (function (){var statearr_16666 = state_16660;
(statearr_16666[(11)] = inst_16610__$1);

return statearr_16666;
})();
if(cljs.core.truth_(inst_16611)){
var statearr_16667_16748 = state_16660__$1;
(statearr_16667_16748[(1)] = (30));

} else {
var statearr_16668_16749 = state_16660__$1;
(statearr_16668_16749[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (1))){
var state_16660__$1 = state_16660;
var statearr_16669_16750 = state_16660__$1;
(statearr_16669_16750[(2)] = null);

(statearr_16669_16750[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (24))){
var inst_16561 = (state_16660[(7)]);
var inst_16580 = (state_16660[(2)]);
var inst_16581 = cljs.core.next(inst_16561);
var inst_16539 = inst_16581;
var inst_16540 = null;
var inst_16541 = (0);
var inst_16542 = (0);
var state_16660__$1 = (function (){var statearr_16670 = state_16660;
(statearr_16670[(13)] = inst_16580);

(statearr_16670[(14)] = inst_16539);

(statearr_16670[(15)] = inst_16540);

(statearr_16670[(16)] = inst_16541);

(statearr_16670[(17)] = inst_16542);

return statearr_16670;
})();
var statearr_16671_16751 = state_16660__$1;
(statearr_16671_16751[(2)] = null);

(statearr_16671_16751[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (39))){
var state_16660__$1 = state_16660;
var statearr_16675_16752 = state_16660__$1;
(statearr_16675_16752[(2)] = null);

(statearr_16675_16752[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (4))){
var inst_16530 = (state_16660[(12)]);
var inst_16530__$1 = (state_16660[(2)]);
var inst_16531 = (inst_16530__$1 == null);
var state_16660__$1 = (function (){var statearr_16676 = state_16660;
(statearr_16676[(12)] = inst_16530__$1);

return statearr_16676;
})();
if(cljs.core.truth_(inst_16531)){
var statearr_16677_16753 = state_16660__$1;
(statearr_16677_16753[(1)] = (5));

} else {
var statearr_16678_16754 = state_16660__$1;
(statearr_16678_16754[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (15))){
var inst_16542 = (state_16660[(17)]);
var inst_16539 = (state_16660[(14)]);
var inst_16540 = (state_16660[(15)]);
var inst_16541 = (state_16660[(16)]);
var inst_16557 = (state_16660[(2)]);
var inst_16558 = (inst_16542 + (1));
var tmp16672 = inst_16541;
var tmp16673 = inst_16540;
var tmp16674 = inst_16539;
var inst_16539__$1 = tmp16674;
var inst_16540__$1 = tmp16673;
var inst_16541__$1 = tmp16672;
var inst_16542__$1 = inst_16558;
var state_16660__$1 = (function (){var statearr_16679 = state_16660;
(statearr_16679[(18)] = inst_16557);

(statearr_16679[(14)] = inst_16539__$1);

(statearr_16679[(15)] = inst_16540__$1);

(statearr_16679[(16)] = inst_16541__$1);

(statearr_16679[(17)] = inst_16542__$1);

return statearr_16679;
})();
var statearr_16680_16755 = state_16660__$1;
(statearr_16680_16755[(2)] = null);

(statearr_16680_16755[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (21))){
var inst_16584 = (state_16660[(2)]);
var state_16660__$1 = state_16660;
var statearr_16684_16756 = state_16660__$1;
(statearr_16684_16756[(2)] = inst_16584);

(statearr_16684_16756[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (31))){
var inst_16610 = (state_16660[(11)]);
var inst_16614 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16610);
var state_16660__$1 = state_16660;
var statearr_16685_16757 = state_16660__$1;
(statearr_16685_16757[(2)] = inst_16614);

(statearr_16685_16757[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (32))){
var inst_16605 = (state_16660[(10)]);
var inst_16602 = (state_16660[(19)]);
var inst_16603 = (state_16660[(9)]);
var inst_16604 = (state_16660[(20)]);
var inst_16616 = (state_16660[(2)]);
var inst_16617 = (inst_16605 + (1));
var tmp16681 = inst_16604;
var tmp16682 = inst_16603;
var tmp16683 = inst_16602;
var inst_16602__$1 = tmp16683;
var inst_16603__$1 = tmp16682;
var inst_16604__$1 = tmp16681;
var inst_16605__$1 = inst_16617;
var state_16660__$1 = (function (){var statearr_16686 = state_16660;
(statearr_16686[(21)] = inst_16616);

(statearr_16686[(19)] = inst_16602__$1);

(statearr_16686[(9)] = inst_16603__$1);

(statearr_16686[(20)] = inst_16604__$1);

(statearr_16686[(10)] = inst_16605__$1);

return statearr_16686;
})();
var statearr_16687_16758 = state_16660__$1;
(statearr_16687_16758[(2)] = null);

(statearr_16687_16758[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (40))){
var inst_16629 = (state_16660[(22)]);
var inst_16633 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16629);
var state_16660__$1 = state_16660;
var statearr_16688_16759 = state_16660__$1;
(statearr_16688_16759[(2)] = inst_16633);

(statearr_16688_16759[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (33))){
var inst_16620 = (state_16660[(23)]);
var inst_16622 = cljs.core.chunked_seq_QMARK_(inst_16620);
var state_16660__$1 = state_16660;
if(inst_16622){
var statearr_16689_16760 = state_16660__$1;
(statearr_16689_16760[(1)] = (36));

} else {
var statearr_16690_16761 = state_16660__$1;
(statearr_16690_16761[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (13))){
var inst_16551 = (state_16660[(24)]);
var inst_16554 = cljs.core.async.close_BANG_(inst_16551);
var state_16660__$1 = state_16660;
var statearr_16691_16762 = state_16660__$1;
(statearr_16691_16762[(2)] = inst_16554);

(statearr_16691_16762[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (22))){
var inst_16574 = (state_16660[(8)]);
var inst_16577 = cljs.core.async.close_BANG_(inst_16574);
var state_16660__$1 = state_16660;
var statearr_16692_16763 = state_16660__$1;
(statearr_16692_16763[(2)] = inst_16577);

(statearr_16692_16763[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (36))){
var inst_16620 = (state_16660[(23)]);
var inst_16624 = cljs.core.chunk_first(inst_16620);
var inst_16625 = cljs.core.chunk_rest(inst_16620);
var inst_16626 = cljs.core.count(inst_16624);
var inst_16602 = inst_16625;
var inst_16603 = inst_16624;
var inst_16604 = inst_16626;
var inst_16605 = (0);
var state_16660__$1 = (function (){var statearr_16693 = state_16660;
(statearr_16693[(19)] = inst_16602);

(statearr_16693[(9)] = inst_16603);

(statearr_16693[(20)] = inst_16604);

(statearr_16693[(10)] = inst_16605);

return statearr_16693;
})();
var statearr_16694_16764 = state_16660__$1;
(statearr_16694_16764[(2)] = null);

(statearr_16694_16764[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (41))){
var inst_16620 = (state_16660[(23)]);
var inst_16635 = (state_16660[(2)]);
var inst_16636 = cljs.core.next(inst_16620);
var inst_16602 = inst_16636;
var inst_16603 = null;
var inst_16604 = (0);
var inst_16605 = (0);
var state_16660__$1 = (function (){var statearr_16695 = state_16660;
(statearr_16695[(25)] = inst_16635);

(statearr_16695[(19)] = inst_16602);

(statearr_16695[(9)] = inst_16603);

(statearr_16695[(20)] = inst_16604);

(statearr_16695[(10)] = inst_16605);

return statearr_16695;
})();
var statearr_16696_16765 = state_16660__$1;
(statearr_16696_16765[(2)] = null);

(statearr_16696_16765[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (43))){
var state_16660__$1 = state_16660;
var statearr_16697_16766 = state_16660__$1;
(statearr_16697_16766[(2)] = null);

(statearr_16697_16766[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (29))){
var inst_16644 = (state_16660[(2)]);
var state_16660__$1 = state_16660;
var statearr_16698_16767 = state_16660__$1;
(statearr_16698_16767[(2)] = inst_16644);

(statearr_16698_16767[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (44))){
var inst_16653 = (state_16660[(2)]);
var state_16660__$1 = (function (){var statearr_16699 = state_16660;
(statearr_16699[(26)] = inst_16653);

return statearr_16699;
})();
var statearr_16700_16768 = state_16660__$1;
(statearr_16700_16768[(2)] = null);

(statearr_16700_16768[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (6))){
var inst_16594 = (state_16660[(27)]);
var inst_16593 = cljs.core.deref(cs);
var inst_16594__$1 = cljs.core.keys(inst_16593);
var inst_16595 = cljs.core.count(inst_16594__$1);
var inst_16596 = cljs.core.reset_BANG_(dctr,inst_16595);
var inst_16601 = cljs.core.seq(inst_16594__$1);
var inst_16602 = inst_16601;
var inst_16603 = null;
var inst_16604 = (0);
var inst_16605 = (0);
var state_16660__$1 = (function (){var statearr_16701 = state_16660;
(statearr_16701[(27)] = inst_16594__$1);

(statearr_16701[(28)] = inst_16596);

(statearr_16701[(19)] = inst_16602);

(statearr_16701[(9)] = inst_16603);

(statearr_16701[(20)] = inst_16604);

(statearr_16701[(10)] = inst_16605);

return statearr_16701;
})();
var statearr_16702_16769 = state_16660__$1;
(statearr_16702_16769[(2)] = null);

(statearr_16702_16769[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (28))){
var inst_16602 = (state_16660[(19)]);
var inst_16620 = (state_16660[(23)]);
var inst_16620__$1 = cljs.core.seq(inst_16602);
var state_16660__$1 = (function (){var statearr_16703 = state_16660;
(statearr_16703[(23)] = inst_16620__$1);

return statearr_16703;
})();
if(inst_16620__$1){
var statearr_16704_16770 = state_16660__$1;
(statearr_16704_16770[(1)] = (33));

} else {
var statearr_16705_16771 = state_16660__$1;
(statearr_16705_16771[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (25))){
var inst_16605 = (state_16660[(10)]);
var inst_16604 = (state_16660[(20)]);
var inst_16607 = (inst_16605 < inst_16604);
var inst_16608 = inst_16607;
var state_16660__$1 = state_16660;
if(cljs.core.truth_(inst_16608)){
var statearr_16706_16772 = state_16660__$1;
(statearr_16706_16772[(1)] = (27));

} else {
var statearr_16707_16773 = state_16660__$1;
(statearr_16707_16773[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (34))){
var state_16660__$1 = state_16660;
var statearr_16708_16774 = state_16660__$1;
(statearr_16708_16774[(2)] = null);

(statearr_16708_16774[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (17))){
var state_16660__$1 = state_16660;
var statearr_16709_16775 = state_16660__$1;
(statearr_16709_16775[(2)] = null);

(statearr_16709_16775[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (3))){
var inst_16658 = (state_16660[(2)]);
var state_16660__$1 = state_16660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16660__$1,inst_16658);
} else {
if((state_val_16661 === (12))){
var inst_16589 = (state_16660[(2)]);
var state_16660__$1 = state_16660;
var statearr_16710_16776 = state_16660__$1;
(statearr_16710_16776[(2)] = inst_16589);

(statearr_16710_16776[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (2))){
var state_16660__$1 = state_16660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16660__$1,(4),ch);
} else {
if((state_val_16661 === (23))){
var state_16660__$1 = state_16660;
var statearr_16711_16777 = state_16660__$1;
(statearr_16711_16777[(2)] = null);

(statearr_16711_16777[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (35))){
var inst_16642 = (state_16660[(2)]);
var state_16660__$1 = state_16660;
var statearr_16712_16778 = state_16660__$1;
(statearr_16712_16778[(2)] = inst_16642);

(statearr_16712_16778[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (19))){
var inst_16561 = (state_16660[(7)]);
var inst_16565 = cljs.core.chunk_first(inst_16561);
var inst_16566 = cljs.core.chunk_rest(inst_16561);
var inst_16567 = cljs.core.count(inst_16565);
var inst_16539 = inst_16566;
var inst_16540 = inst_16565;
var inst_16541 = inst_16567;
var inst_16542 = (0);
var state_16660__$1 = (function (){var statearr_16713 = state_16660;
(statearr_16713[(14)] = inst_16539);

(statearr_16713[(15)] = inst_16540);

(statearr_16713[(16)] = inst_16541);

(statearr_16713[(17)] = inst_16542);

return statearr_16713;
})();
var statearr_16714_16779 = state_16660__$1;
(statearr_16714_16779[(2)] = null);

(statearr_16714_16779[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (11))){
var inst_16539 = (state_16660[(14)]);
var inst_16561 = (state_16660[(7)]);
var inst_16561__$1 = cljs.core.seq(inst_16539);
var state_16660__$1 = (function (){var statearr_16715 = state_16660;
(statearr_16715[(7)] = inst_16561__$1);

return statearr_16715;
})();
if(inst_16561__$1){
var statearr_16716_16780 = state_16660__$1;
(statearr_16716_16780[(1)] = (16));

} else {
var statearr_16717_16781 = state_16660__$1;
(statearr_16717_16781[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (9))){
var inst_16591 = (state_16660[(2)]);
var state_16660__$1 = state_16660;
var statearr_16718_16782 = state_16660__$1;
(statearr_16718_16782[(2)] = inst_16591);

(statearr_16718_16782[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (5))){
var inst_16537 = cljs.core.deref(cs);
var inst_16538 = cljs.core.seq(inst_16537);
var inst_16539 = inst_16538;
var inst_16540 = null;
var inst_16541 = (0);
var inst_16542 = (0);
var state_16660__$1 = (function (){var statearr_16719 = state_16660;
(statearr_16719[(14)] = inst_16539);

(statearr_16719[(15)] = inst_16540);

(statearr_16719[(16)] = inst_16541);

(statearr_16719[(17)] = inst_16542);

return statearr_16719;
})();
var statearr_16720_16783 = state_16660__$1;
(statearr_16720_16783[(2)] = null);

(statearr_16720_16783[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (14))){
var state_16660__$1 = state_16660;
var statearr_16721_16784 = state_16660__$1;
(statearr_16721_16784[(2)] = null);

(statearr_16721_16784[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (45))){
var inst_16650 = (state_16660[(2)]);
var state_16660__$1 = state_16660;
var statearr_16722_16785 = state_16660__$1;
(statearr_16722_16785[(2)] = inst_16650);

(statearr_16722_16785[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (26))){
var inst_16594 = (state_16660[(27)]);
var inst_16646 = (state_16660[(2)]);
var inst_16647 = cljs.core.seq(inst_16594);
var state_16660__$1 = (function (){var statearr_16723 = state_16660;
(statearr_16723[(29)] = inst_16646);

return statearr_16723;
})();
if(inst_16647){
var statearr_16724_16786 = state_16660__$1;
(statearr_16724_16786[(1)] = (42));

} else {
var statearr_16725_16787 = state_16660__$1;
(statearr_16725_16787[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (16))){
var inst_16561 = (state_16660[(7)]);
var inst_16563 = cljs.core.chunked_seq_QMARK_(inst_16561);
var state_16660__$1 = state_16660;
if(inst_16563){
var statearr_16726_16788 = state_16660__$1;
(statearr_16726_16788[(1)] = (19));

} else {
var statearr_16727_16789 = state_16660__$1;
(statearr_16727_16789[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (38))){
var inst_16639 = (state_16660[(2)]);
var state_16660__$1 = state_16660;
var statearr_16728_16790 = state_16660__$1;
(statearr_16728_16790[(2)] = inst_16639);

(statearr_16728_16790[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (30))){
var state_16660__$1 = state_16660;
var statearr_16729_16791 = state_16660__$1;
(statearr_16729_16791[(2)] = null);

(statearr_16729_16791[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (10))){
var inst_16540 = (state_16660[(15)]);
var inst_16542 = (state_16660[(17)]);
var inst_16550 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16540,inst_16542);
var inst_16551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16550,(0),null);
var inst_16552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16550,(1),null);
var state_16660__$1 = (function (){var statearr_16730 = state_16660;
(statearr_16730[(24)] = inst_16551);

return statearr_16730;
})();
if(cljs.core.truth_(inst_16552)){
var statearr_16731_16792 = state_16660__$1;
(statearr_16731_16792[(1)] = (13));

} else {
var statearr_16732_16793 = state_16660__$1;
(statearr_16732_16793[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (18))){
var inst_16587 = (state_16660[(2)]);
var state_16660__$1 = state_16660;
var statearr_16733_16794 = state_16660__$1;
(statearr_16733_16794[(2)] = inst_16587);

(statearr_16733_16794[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (42))){
var state_16660__$1 = state_16660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16660__$1,(45),dchan);
} else {
if((state_val_16661 === (37))){
var inst_16620 = (state_16660[(23)]);
var inst_16629 = (state_16660[(22)]);
var inst_16530 = (state_16660[(12)]);
var inst_16629__$1 = cljs.core.first(inst_16620);
var inst_16630 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16629__$1,inst_16530,done);
var state_16660__$1 = (function (){var statearr_16734 = state_16660;
(statearr_16734[(22)] = inst_16629__$1);

return statearr_16734;
})();
if(cljs.core.truth_(inst_16630)){
var statearr_16735_16795 = state_16660__$1;
(statearr_16735_16795[(1)] = (39));

} else {
var statearr_16736_16796 = state_16660__$1;
(statearr_16736_16796[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16661 === (8))){
var inst_16542 = (state_16660[(17)]);
var inst_16541 = (state_16660[(16)]);
var inst_16544 = (inst_16542 < inst_16541);
var inst_16545 = inst_16544;
var state_16660__$1 = state_16660;
if(cljs.core.truth_(inst_16545)){
var statearr_16737_16797 = state_16660__$1;
(statearr_16737_16797[(1)] = (10));

} else {
var statearr_16738_16798 = state_16660__$1;
(statearr_16738_16798[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mult_$_state_machine__15823__auto__ = null;
var cljs$core$async$mult_$_state_machine__15823__auto____0 = (function (){
var statearr_16739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16739[(0)] = cljs$core$async$mult_$_state_machine__15823__auto__);

(statearr_16739[(1)] = (1));

return statearr_16739;
});
var cljs$core$async$mult_$_state_machine__15823__auto____1 = (function (state_16660){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_16660);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e16740){var ex__15826__auto__ = e16740;
var statearr_16741_16799 = state_16660;
(statearr_16741_16799[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_16660[(4)]))){
var statearr_16742_16800 = state_16660;
(statearr_16742_16800[(1)] = cljs.core.first((state_16660[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__16801 = state_16660;
state_16660 = G__16801;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15823__auto__ = function(state_16660){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15823__auto____1.call(this,state_16660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15823__auto____0;
cljs$core$async$mult_$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15823__auto____1;
return cljs$core$async$mult_$_state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_16743 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_16743[(6)] = c__15897__auto___16744);

return statearr_16743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
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
var G__16803 = arguments.length;
switch (G__16803) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_16805 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16805(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16806 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16806(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16807 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16807(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16808 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16808(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16809 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16809(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16820 = arguments.length;
var i__4737__auto___16821 = (0);
while(true){
if((i__4737__auto___16821 < len__4736__auto___16820)){
args__4742__auto__.push((arguments[i__4737__auto___16821]));

var G__16822 = (i__4737__auto___16821 + (1));
i__4737__auto___16821 = G__16822;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16814){
var map__16815 = p__16814;
var map__16815__$1 = (((((!((map__16815 == null))))?(((((map__16815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16815):map__16815);
var opts = map__16815__$1;
var statearr_16817_16823 = state;
(statearr_16817_16823[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16818_16824 = state;
(statearr_16818_16824[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_16819_16825 = state;
(statearr_16819_16825[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16810){
var G__16811 = cljs.core.first(seq16810);
var seq16810__$1 = cljs.core.next(seq16810);
var G__16812 = cljs.core.first(seq16810__$1);
var seq16810__$2 = cljs.core.next(seq16810__$1);
var G__16813 = cljs.core.first(seq16810__$2);
var seq16810__$3 = cljs.core.next(seq16810__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16811,G__16812,G__16813,seq16810__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16826 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16826 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16827){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16827 = meta16827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16828,meta16827__$1){
var self__ = this;
var _16828__$1 = this;
return (new cljs.core.async.t_cljs$core$async16826(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16827__$1));
}));

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16828){
var self__ = this;
var _16828__$1 = this;
return self__.meta16827;
}));

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16826.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta16827], null);
}));

(cljs.core.async.t_cljs$core$async16826.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16826");

(cljs.core.async.t_cljs$core$async16826.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16826");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16826.
 */
cljs.core.async.__GT_t_cljs$core$async16826 = (function cljs$core$async$mix_$___GT_t_cljs$core$async16826(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16827){
return (new cljs.core.async.t_cljs$core$async16826(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16827));
});

}

return (new cljs.core.async.t_cljs$core$async16826(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15897__auto___16991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_16930){
var state_val_16931 = (state_16930[(1)]);
if((state_val_16931 === (7))){
var inst_16845 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16932_16992 = state_16930__$1;
(statearr_16932_16992[(2)] = inst_16845);

(statearr_16932_16992[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (20))){
var inst_16857 = (state_16930[(7)]);
var state_16930__$1 = state_16930;
var statearr_16933_16993 = state_16930__$1;
(statearr_16933_16993[(2)] = inst_16857);

(statearr_16933_16993[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (27))){
var state_16930__$1 = state_16930;
var statearr_16934_16994 = state_16930__$1;
(statearr_16934_16994[(2)] = null);

(statearr_16934_16994[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (1))){
var inst_16832 = (state_16930[(8)]);
var inst_16832__$1 = calc_state();
var inst_16834 = (inst_16832__$1 == null);
var inst_16835 = cljs.core.not(inst_16834);
var state_16930__$1 = (function (){var statearr_16935 = state_16930;
(statearr_16935[(8)] = inst_16832__$1);

return statearr_16935;
})();
if(inst_16835){
var statearr_16936_16995 = state_16930__$1;
(statearr_16936_16995[(1)] = (2));

} else {
var statearr_16937_16996 = state_16930__$1;
(statearr_16937_16996[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (24))){
var inst_16881 = (state_16930[(9)]);
var inst_16890 = (state_16930[(10)]);
var inst_16904 = (state_16930[(11)]);
var inst_16904__$1 = (inst_16881.cljs$core$IFn$_invoke$arity$1 ? inst_16881.cljs$core$IFn$_invoke$arity$1(inst_16890) : inst_16881.call(null,inst_16890));
var state_16930__$1 = (function (){var statearr_16938 = state_16930;
(statearr_16938[(11)] = inst_16904__$1);

return statearr_16938;
})();
if(cljs.core.truth_(inst_16904__$1)){
var statearr_16939_16997 = state_16930__$1;
(statearr_16939_16997[(1)] = (29));

} else {
var statearr_16940_16998 = state_16930__$1;
(statearr_16940_16998[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (4))){
var inst_16848 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
if(cljs.core.truth_(inst_16848)){
var statearr_16941_16999 = state_16930__$1;
(statearr_16941_16999[(1)] = (8));

} else {
var statearr_16942_17000 = state_16930__$1;
(statearr_16942_17000[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (15))){
var inst_16875 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
if(cljs.core.truth_(inst_16875)){
var statearr_16943_17001 = state_16930__$1;
(statearr_16943_17001[(1)] = (19));

} else {
var statearr_16944_17002 = state_16930__$1;
(statearr_16944_17002[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (21))){
var inst_16880 = (state_16930[(12)]);
var inst_16880__$1 = (state_16930[(2)]);
var inst_16881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16880__$1,cljs.core.cst$kw$solos);
var inst_16882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16880__$1,cljs.core.cst$kw$mutes);
var inst_16883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16880__$1,cljs.core.cst$kw$reads);
var state_16930__$1 = (function (){var statearr_16945 = state_16930;
(statearr_16945[(12)] = inst_16880__$1);

(statearr_16945[(9)] = inst_16881);

(statearr_16945[(13)] = inst_16882);

return statearr_16945;
})();
return cljs.core.async.ioc_alts_BANG_(state_16930__$1,(22),inst_16883);
} else {
if((state_val_16931 === (31))){
var inst_16912 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
if(cljs.core.truth_(inst_16912)){
var statearr_16946_17003 = state_16930__$1;
(statearr_16946_17003[(1)] = (32));

} else {
var statearr_16947_17004 = state_16930__$1;
(statearr_16947_17004[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (32))){
var inst_16889 = (state_16930[(14)]);
var state_16930__$1 = state_16930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16930__$1,(35),out,inst_16889);
} else {
if((state_val_16931 === (33))){
var inst_16880 = (state_16930[(12)]);
var inst_16857 = inst_16880;
var state_16930__$1 = (function (){var statearr_16948 = state_16930;
(statearr_16948[(7)] = inst_16857);

return statearr_16948;
})();
var statearr_16949_17005 = state_16930__$1;
(statearr_16949_17005[(2)] = null);

(statearr_16949_17005[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (13))){
var inst_16857 = (state_16930[(7)]);
var inst_16864 = inst_16857.cljs$lang$protocol_mask$partition0$;
var inst_16865 = (inst_16864 & (64));
var inst_16866 = inst_16857.cljs$core$ISeq$;
var inst_16867 = (cljs.core.PROTOCOL_SENTINEL === inst_16866);
var inst_16868 = ((inst_16865) || (inst_16867));
var state_16930__$1 = state_16930;
if(cljs.core.truth_(inst_16868)){
var statearr_16950_17006 = state_16930__$1;
(statearr_16950_17006[(1)] = (16));

} else {
var statearr_16951_17007 = state_16930__$1;
(statearr_16951_17007[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (22))){
var inst_16889 = (state_16930[(14)]);
var inst_16890 = (state_16930[(10)]);
var inst_16888 = (state_16930[(2)]);
var inst_16889__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16888,(0),null);
var inst_16890__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16888,(1),null);
var inst_16891 = (inst_16889__$1 == null);
var inst_16892 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16890__$1,change);
var inst_16893 = ((inst_16891) || (inst_16892));
var state_16930__$1 = (function (){var statearr_16952 = state_16930;
(statearr_16952[(14)] = inst_16889__$1);

(statearr_16952[(10)] = inst_16890__$1);

return statearr_16952;
})();
if(cljs.core.truth_(inst_16893)){
var statearr_16953_17008 = state_16930__$1;
(statearr_16953_17008[(1)] = (23));

} else {
var statearr_16954_17009 = state_16930__$1;
(statearr_16954_17009[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (36))){
var inst_16880 = (state_16930[(12)]);
var inst_16857 = inst_16880;
var state_16930__$1 = (function (){var statearr_16955 = state_16930;
(statearr_16955[(7)] = inst_16857);

return statearr_16955;
})();
var statearr_16956_17010 = state_16930__$1;
(statearr_16956_17010[(2)] = null);

(statearr_16956_17010[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (29))){
var inst_16904 = (state_16930[(11)]);
var state_16930__$1 = state_16930;
var statearr_16957_17011 = state_16930__$1;
(statearr_16957_17011[(2)] = inst_16904);

(statearr_16957_17011[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (6))){
var state_16930__$1 = state_16930;
var statearr_16958_17012 = state_16930__$1;
(statearr_16958_17012[(2)] = false);

(statearr_16958_17012[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (28))){
var inst_16900 = (state_16930[(2)]);
var inst_16901 = calc_state();
var inst_16857 = inst_16901;
var state_16930__$1 = (function (){var statearr_16959 = state_16930;
(statearr_16959[(15)] = inst_16900);

(statearr_16959[(7)] = inst_16857);

return statearr_16959;
})();
var statearr_16960_17013 = state_16930__$1;
(statearr_16960_17013[(2)] = null);

(statearr_16960_17013[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (25))){
var inst_16926 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16961_17014 = state_16930__$1;
(statearr_16961_17014[(2)] = inst_16926);

(statearr_16961_17014[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (34))){
var inst_16924 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16962_17015 = state_16930__$1;
(statearr_16962_17015[(2)] = inst_16924);

(statearr_16962_17015[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (17))){
var state_16930__$1 = state_16930;
var statearr_16963_17016 = state_16930__$1;
(statearr_16963_17016[(2)] = false);

(statearr_16963_17016[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (3))){
var state_16930__$1 = state_16930;
var statearr_16964_17017 = state_16930__$1;
(statearr_16964_17017[(2)] = false);

(statearr_16964_17017[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (12))){
var inst_16928 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16930__$1,inst_16928);
} else {
if((state_val_16931 === (2))){
var inst_16832 = (state_16930[(8)]);
var inst_16837 = inst_16832.cljs$lang$protocol_mask$partition0$;
var inst_16838 = (inst_16837 & (64));
var inst_16839 = inst_16832.cljs$core$ISeq$;
var inst_16840 = (cljs.core.PROTOCOL_SENTINEL === inst_16839);
var inst_16841 = ((inst_16838) || (inst_16840));
var state_16930__$1 = state_16930;
if(cljs.core.truth_(inst_16841)){
var statearr_16965_17018 = state_16930__$1;
(statearr_16965_17018[(1)] = (5));

} else {
var statearr_16966_17019 = state_16930__$1;
(statearr_16966_17019[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (23))){
var inst_16889 = (state_16930[(14)]);
var inst_16895 = (inst_16889 == null);
var state_16930__$1 = state_16930;
if(cljs.core.truth_(inst_16895)){
var statearr_16967_17020 = state_16930__$1;
(statearr_16967_17020[(1)] = (26));

} else {
var statearr_16968_17021 = state_16930__$1;
(statearr_16968_17021[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (35))){
var inst_16915 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
if(cljs.core.truth_(inst_16915)){
var statearr_16969_17022 = state_16930__$1;
(statearr_16969_17022[(1)] = (36));

} else {
var statearr_16970_17023 = state_16930__$1;
(statearr_16970_17023[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (19))){
var inst_16857 = (state_16930[(7)]);
var inst_16877 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16857);
var state_16930__$1 = state_16930;
var statearr_16971_17024 = state_16930__$1;
(statearr_16971_17024[(2)] = inst_16877);

(statearr_16971_17024[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (11))){
var inst_16857 = (state_16930[(7)]);
var inst_16861 = (inst_16857 == null);
var inst_16862 = cljs.core.not(inst_16861);
var state_16930__$1 = state_16930;
if(inst_16862){
var statearr_16972_17025 = state_16930__$1;
(statearr_16972_17025[(1)] = (13));

} else {
var statearr_16973_17026 = state_16930__$1;
(statearr_16973_17026[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (9))){
var inst_16832 = (state_16930[(8)]);
var state_16930__$1 = state_16930;
var statearr_16974_17027 = state_16930__$1;
(statearr_16974_17027[(2)] = inst_16832);

(statearr_16974_17027[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (5))){
var state_16930__$1 = state_16930;
var statearr_16975_17028 = state_16930__$1;
(statearr_16975_17028[(2)] = true);

(statearr_16975_17028[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (14))){
var state_16930__$1 = state_16930;
var statearr_16976_17029 = state_16930__$1;
(statearr_16976_17029[(2)] = false);

(statearr_16976_17029[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (26))){
var inst_16890 = (state_16930[(10)]);
var inst_16897 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16890);
var state_16930__$1 = state_16930;
var statearr_16977_17030 = state_16930__$1;
(statearr_16977_17030[(2)] = inst_16897);

(statearr_16977_17030[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (16))){
var state_16930__$1 = state_16930;
var statearr_16978_17031 = state_16930__$1;
(statearr_16978_17031[(2)] = true);

(statearr_16978_17031[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (38))){
var inst_16920 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16979_17032 = state_16930__$1;
(statearr_16979_17032[(2)] = inst_16920);

(statearr_16979_17032[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (30))){
var inst_16881 = (state_16930[(9)]);
var inst_16882 = (state_16930[(13)]);
var inst_16890 = (state_16930[(10)]);
var inst_16907 = cljs.core.empty_QMARK_(inst_16881);
var inst_16908 = (inst_16882.cljs$core$IFn$_invoke$arity$1 ? inst_16882.cljs$core$IFn$_invoke$arity$1(inst_16890) : inst_16882.call(null,inst_16890));
var inst_16909 = cljs.core.not(inst_16908);
var inst_16910 = ((inst_16907) && (inst_16909));
var state_16930__$1 = state_16930;
var statearr_16980_17033 = state_16930__$1;
(statearr_16980_17033[(2)] = inst_16910);

(statearr_16980_17033[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (10))){
var inst_16832 = (state_16930[(8)]);
var inst_16853 = (state_16930[(2)]);
var inst_16854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16853,cljs.core.cst$kw$solos);
var inst_16855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16853,cljs.core.cst$kw$mutes);
var inst_16856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16853,cljs.core.cst$kw$reads);
var inst_16857 = inst_16832;
var state_16930__$1 = (function (){var statearr_16981 = state_16930;
(statearr_16981[(16)] = inst_16854);

(statearr_16981[(17)] = inst_16855);

(statearr_16981[(18)] = inst_16856);

(statearr_16981[(7)] = inst_16857);

return statearr_16981;
})();
var statearr_16982_17034 = state_16930__$1;
(statearr_16982_17034[(2)] = null);

(statearr_16982_17034[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (18))){
var inst_16872 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16983_17035 = state_16930__$1;
(statearr_16983_17035[(2)] = inst_16872);

(statearr_16983_17035[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (37))){
var state_16930__$1 = state_16930;
var statearr_16984_17036 = state_16930__$1;
(statearr_16984_17036[(2)] = null);

(statearr_16984_17036[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (8))){
var inst_16832 = (state_16930[(8)]);
var inst_16850 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16832);
var state_16930__$1 = state_16930;
var statearr_16985_17037 = state_16930__$1;
(statearr_16985_17037[(2)] = inst_16850);

(statearr_16985_17037[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$mix_$_state_machine__15823__auto__ = null;
var cljs$core$async$mix_$_state_machine__15823__auto____0 = (function (){
var statearr_16986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16986[(0)] = cljs$core$async$mix_$_state_machine__15823__auto__);

(statearr_16986[(1)] = (1));

return statearr_16986;
});
var cljs$core$async$mix_$_state_machine__15823__auto____1 = (function (state_16930){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_16930);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e16987){var ex__15826__auto__ = e16987;
var statearr_16988_17038 = state_16930;
(statearr_16988_17038[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_16930[(4)]))){
var statearr_16989_17039 = state_16930;
(statearr_16989_17039[(1)] = cljs.core.first((state_16930[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__17040 = state_16930;
state_16930 = G__17040;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15823__auto__ = function(state_16930){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15823__auto____1.call(this,state_16930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15823__auto____0;
cljs$core$async$mix_$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15823__auto____1;
return cljs$core$async$mix_$_state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_16990 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_16990[(6)] = c__15897__auto___16991);

return statearr_16990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17043 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17043(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17044 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17044(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17045 = (function() {
var G__17046 = null;
var G__17046__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17046__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17046 = function(p,v){
switch(arguments.length){
case 1:
return G__17046__1.call(this,p);
case 2:
return G__17046__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17046.cljs$core$IFn$_invoke$arity$1 = G__17046__1;
G__17046.cljs$core$IFn$_invoke$arity$2 = G__17046__2;
return G__17046;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17042 = arguments.length;
switch (G__17042) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17045.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17045.cljs$core$IFn$_invoke$arity$2(p,v);
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
var G__17050 = arguments.length;
switch (G__17050) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17048_SHARP_){
if(cljs.core.truth_((p1__17048_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17048_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17048_SHARP_.call(null,topic)))){
return p1__17048_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17048_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17051 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17052){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17052 = meta17052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17053,meta17052__$1){
var self__ = this;
var _17053__$1 = this;
return (new cljs.core.async.t_cljs$core$async17051(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17052__$1));
}));

(cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17053){
var self__ = this;
var _17053__$1 = this;
return self__.meta17052;
}));

(cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17052], null);
}));

(cljs.core.async.t_cljs$core$async17051.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17051");

(cljs.core.async.t_cljs$core$async17051.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17051");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17051.
 */
cljs.core.async.__GT_t_cljs$core$async17051 = (function cljs$core$async$__GT_t_cljs$core$async17051(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17052){
return (new cljs.core.async.t_cljs$core$async17051(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17052));
});

}

return (new cljs.core.async.t_cljs$core$async17051(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15897__auto___17172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_17125){
var state_val_17126 = (state_17125[(1)]);
if((state_val_17126 === (7))){
var inst_17121 = (state_17125[(2)]);
var state_17125__$1 = state_17125;
var statearr_17127_17173 = state_17125__$1;
(statearr_17127_17173[(2)] = inst_17121);

(statearr_17127_17173[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (20))){
var state_17125__$1 = state_17125;
var statearr_17128_17174 = state_17125__$1;
(statearr_17128_17174[(2)] = null);

(statearr_17128_17174[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (1))){
var state_17125__$1 = state_17125;
var statearr_17129_17175 = state_17125__$1;
(statearr_17129_17175[(2)] = null);

(statearr_17129_17175[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (24))){
var inst_17104 = (state_17125[(7)]);
var inst_17113 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17104);
var state_17125__$1 = state_17125;
var statearr_17130_17176 = state_17125__$1;
(statearr_17130_17176[(2)] = inst_17113);

(statearr_17130_17176[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (4))){
var inst_17056 = (state_17125[(8)]);
var inst_17056__$1 = (state_17125[(2)]);
var inst_17057 = (inst_17056__$1 == null);
var state_17125__$1 = (function (){var statearr_17131 = state_17125;
(statearr_17131[(8)] = inst_17056__$1);

return statearr_17131;
})();
if(cljs.core.truth_(inst_17057)){
var statearr_17132_17177 = state_17125__$1;
(statearr_17132_17177[(1)] = (5));

} else {
var statearr_17133_17178 = state_17125__$1;
(statearr_17133_17178[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (15))){
var inst_17098 = (state_17125[(2)]);
var state_17125__$1 = state_17125;
var statearr_17134_17179 = state_17125__$1;
(statearr_17134_17179[(2)] = inst_17098);

(statearr_17134_17179[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (21))){
var inst_17118 = (state_17125[(2)]);
var state_17125__$1 = (function (){var statearr_17135 = state_17125;
(statearr_17135[(9)] = inst_17118);

return statearr_17135;
})();
var statearr_17136_17180 = state_17125__$1;
(statearr_17136_17180[(2)] = null);

(statearr_17136_17180[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (13))){
var inst_17080 = (state_17125[(10)]);
var inst_17082 = cljs.core.chunked_seq_QMARK_(inst_17080);
var state_17125__$1 = state_17125;
if(inst_17082){
var statearr_17137_17181 = state_17125__$1;
(statearr_17137_17181[(1)] = (16));

} else {
var statearr_17138_17182 = state_17125__$1;
(statearr_17138_17182[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (22))){
var inst_17110 = (state_17125[(2)]);
var state_17125__$1 = state_17125;
if(cljs.core.truth_(inst_17110)){
var statearr_17139_17183 = state_17125__$1;
(statearr_17139_17183[(1)] = (23));

} else {
var statearr_17140_17184 = state_17125__$1;
(statearr_17140_17184[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (6))){
var inst_17056 = (state_17125[(8)]);
var inst_17104 = (state_17125[(7)]);
var inst_17106 = (state_17125[(11)]);
var inst_17104__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17056) : topic_fn.call(null,inst_17056));
var inst_17105 = cljs.core.deref(mults);
var inst_17106__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17105,inst_17104__$1);
var state_17125__$1 = (function (){var statearr_17141 = state_17125;
(statearr_17141[(7)] = inst_17104__$1);

(statearr_17141[(11)] = inst_17106__$1);

return statearr_17141;
})();
if(cljs.core.truth_(inst_17106__$1)){
var statearr_17142_17185 = state_17125__$1;
(statearr_17142_17185[(1)] = (19));

} else {
var statearr_17143_17186 = state_17125__$1;
(statearr_17143_17186[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (25))){
var inst_17115 = (state_17125[(2)]);
var state_17125__$1 = state_17125;
var statearr_17144_17187 = state_17125__$1;
(statearr_17144_17187[(2)] = inst_17115);

(statearr_17144_17187[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (17))){
var inst_17080 = (state_17125[(10)]);
var inst_17089 = cljs.core.first(inst_17080);
var inst_17090 = cljs.core.async.muxch_STAR_(inst_17089);
var inst_17091 = cljs.core.async.close_BANG_(inst_17090);
var inst_17092 = cljs.core.next(inst_17080);
var inst_17066 = inst_17092;
var inst_17067 = null;
var inst_17068 = (0);
var inst_17069 = (0);
var state_17125__$1 = (function (){var statearr_17145 = state_17125;
(statearr_17145[(12)] = inst_17091);

(statearr_17145[(13)] = inst_17066);

(statearr_17145[(14)] = inst_17067);

(statearr_17145[(15)] = inst_17068);

(statearr_17145[(16)] = inst_17069);

return statearr_17145;
})();
var statearr_17146_17188 = state_17125__$1;
(statearr_17146_17188[(2)] = null);

(statearr_17146_17188[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (3))){
var inst_17123 = (state_17125[(2)]);
var state_17125__$1 = state_17125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17125__$1,inst_17123);
} else {
if((state_val_17126 === (12))){
var inst_17100 = (state_17125[(2)]);
var state_17125__$1 = state_17125;
var statearr_17147_17189 = state_17125__$1;
(statearr_17147_17189[(2)] = inst_17100);

(statearr_17147_17189[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (2))){
var state_17125__$1 = state_17125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17125__$1,(4),ch);
} else {
if((state_val_17126 === (23))){
var state_17125__$1 = state_17125;
var statearr_17148_17190 = state_17125__$1;
(statearr_17148_17190[(2)] = null);

(statearr_17148_17190[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (19))){
var inst_17106 = (state_17125[(11)]);
var inst_17056 = (state_17125[(8)]);
var inst_17108 = cljs.core.async.muxch_STAR_(inst_17106);
var state_17125__$1 = state_17125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17125__$1,(22),inst_17108,inst_17056);
} else {
if((state_val_17126 === (11))){
var inst_17066 = (state_17125[(13)]);
var inst_17080 = (state_17125[(10)]);
var inst_17080__$1 = cljs.core.seq(inst_17066);
var state_17125__$1 = (function (){var statearr_17149 = state_17125;
(statearr_17149[(10)] = inst_17080__$1);

return statearr_17149;
})();
if(inst_17080__$1){
var statearr_17150_17191 = state_17125__$1;
(statearr_17150_17191[(1)] = (13));

} else {
var statearr_17151_17192 = state_17125__$1;
(statearr_17151_17192[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (9))){
var inst_17102 = (state_17125[(2)]);
var state_17125__$1 = state_17125;
var statearr_17152_17193 = state_17125__$1;
(statearr_17152_17193[(2)] = inst_17102);

(statearr_17152_17193[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (5))){
var inst_17063 = cljs.core.deref(mults);
var inst_17064 = cljs.core.vals(inst_17063);
var inst_17065 = cljs.core.seq(inst_17064);
var inst_17066 = inst_17065;
var inst_17067 = null;
var inst_17068 = (0);
var inst_17069 = (0);
var state_17125__$1 = (function (){var statearr_17153 = state_17125;
(statearr_17153[(13)] = inst_17066);

(statearr_17153[(14)] = inst_17067);

(statearr_17153[(15)] = inst_17068);

(statearr_17153[(16)] = inst_17069);

return statearr_17153;
})();
var statearr_17154_17194 = state_17125__$1;
(statearr_17154_17194[(2)] = null);

(statearr_17154_17194[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (14))){
var state_17125__$1 = state_17125;
var statearr_17158_17195 = state_17125__$1;
(statearr_17158_17195[(2)] = null);

(statearr_17158_17195[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (16))){
var inst_17080 = (state_17125[(10)]);
var inst_17084 = cljs.core.chunk_first(inst_17080);
var inst_17085 = cljs.core.chunk_rest(inst_17080);
var inst_17086 = cljs.core.count(inst_17084);
var inst_17066 = inst_17085;
var inst_17067 = inst_17084;
var inst_17068 = inst_17086;
var inst_17069 = (0);
var state_17125__$1 = (function (){var statearr_17159 = state_17125;
(statearr_17159[(13)] = inst_17066);

(statearr_17159[(14)] = inst_17067);

(statearr_17159[(15)] = inst_17068);

(statearr_17159[(16)] = inst_17069);

return statearr_17159;
})();
var statearr_17160_17196 = state_17125__$1;
(statearr_17160_17196[(2)] = null);

(statearr_17160_17196[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (10))){
var inst_17067 = (state_17125[(14)]);
var inst_17069 = (state_17125[(16)]);
var inst_17066 = (state_17125[(13)]);
var inst_17068 = (state_17125[(15)]);
var inst_17074 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17067,inst_17069);
var inst_17075 = cljs.core.async.muxch_STAR_(inst_17074);
var inst_17076 = cljs.core.async.close_BANG_(inst_17075);
var inst_17077 = (inst_17069 + (1));
var tmp17155 = inst_17066;
var tmp17156 = inst_17068;
var tmp17157 = inst_17067;
var inst_17066__$1 = tmp17155;
var inst_17067__$1 = tmp17157;
var inst_17068__$1 = tmp17156;
var inst_17069__$1 = inst_17077;
var state_17125__$1 = (function (){var statearr_17161 = state_17125;
(statearr_17161[(17)] = inst_17076);

(statearr_17161[(13)] = inst_17066__$1);

(statearr_17161[(14)] = inst_17067__$1);

(statearr_17161[(15)] = inst_17068__$1);

(statearr_17161[(16)] = inst_17069__$1);

return statearr_17161;
})();
var statearr_17162_17197 = state_17125__$1;
(statearr_17162_17197[(2)] = null);

(statearr_17162_17197[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (18))){
var inst_17095 = (state_17125[(2)]);
var state_17125__$1 = state_17125;
var statearr_17163_17198 = state_17125__$1;
(statearr_17163_17198[(2)] = inst_17095);

(statearr_17163_17198[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17126 === (8))){
var inst_17069 = (state_17125[(16)]);
var inst_17068 = (state_17125[(15)]);
var inst_17071 = (inst_17069 < inst_17068);
var inst_17072 = inst_17071;
var state_17125__$1 = state_17125;
if(cljs.core.truth_(inst_17072)){
var statearr_17164_17199 = state_17125__$1;
(statearr_17164_17199[(1)] = (10));

} else {
var statearr_17165_17200 = state_17125__$1;
(statearr_17165_17200[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__15823__auto__ = null;
var cljs$core$async$state_machine__15823__auto____0 = (function (){
var statearr_17166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17166[(0)] = cljs$core$async$state_machine__15823__auto__);

(statearr_17166[(1)] = (1));

return statearr_17166;
});
var cljs$core$async$state_machine__15823__auto____1 = (function (state_17125){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_17125);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e17167){var ex__15826__auto__ = e17167;
var statearr_17168_17201 = state_17125;
(statearr_17168_17201[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_17125[(4)]))){
var statearr_17169_17202 = state_17125;
(statearr_17169_17202[(1)] = cljs.core.first((state_17125[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__17203 = state_17125;
state_17125 = G__17203;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$state_machine__15823__auto__ = function(state_17125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15823__auto____1.call(this,state_17125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15823__auto____0;
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15823__auto____1;
return cljs$core$async$state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_17170 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_17170[(6)] = c__15897__auto___17172);

return statearr_17170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
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
var G__17205 = arguments.length;
switch (G__17205) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17208 = arguments.length;
switch (G__17208) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__17211 = arguments.length;
switch (G__17211) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15897__auto___17289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_17254){
var state_val_17255 = (state_17254[(1)]);
if((state_val_17255 === (7))){
var state_17254__$1 = state_17254;
var statearr_17256_17290 = state_17254__$1;
(statearr_17256_17290[(2)] = null);

(statearr_17256_17290[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17255 === (1))){
var state_17254__$1 = state_17254;
var statearr_17257_17291 = state_17254__$1;
(statearr_17257_17291[(2)] = null);

(statearr_17257_17291[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17255 === (4))){
var inst_17215 = (state_17254[(7)]);
var inst_17214 = (state_17254[(8)]);
var inst_17217 = (inst_17215 < inst_17214);
var state_17254__$1 = state_17254;
if(cljs.core.truth_(inst_17217)){
var statearr_17258_17292 = state_17254__$1;
(statearr_17258_17292[(1)] = (6));

} else {
var statearr_17259_17293 = state_17254__$1;
(statearr_17259_17293[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17255 === (15))){
var inst_17240 = (state_17254[(9)]);
var inst_17245 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17240);
var state_17254__$1 = state_17254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17254__$1,(17),out,inst_17245);
} else {
if((state_val_17255 === (13))){
var inst_17240 = (state_17254[(9)]);
var inst_17240__$1 = (state_17254[(2)]);
var inst_17241 = cljs.core.some(cljs.core.nil_QMARK_,inst_17240__$1);
var state_17254__$1 = (function (){var statearr_17260 = state_17254;
(statearr_17260[(9)] = inst_17240__$1);

return statearr_17260;
})();
if(cljs.core.truth_(inst_17241)){
var statearr_17261_17294 = state_17254__$1;
(statearr_17261_17294[(1)] = (14));

} else {
var statearr_17262_17295 = state_17254__$1;
(statearr_17262_17295[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17255 === (6))){
var state_17254__$1 = state_17254;
var statearr_17263_17296 = state_17254__$1;
(statearr_17263_17296[(2)] = null);

(statearr_17263_17296[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17255 === (17))){
var inst_17247 = (state_17254[(2)]);
var state_17254__$1 = (function (){var statearr_17265 = state_17254;
(statearr_17265[(10)] = inst_17247);

return statearr_17265;
})();
var statearr_17266_17297 = state_17254__$1;
(statearr_17266_17297[(2)] = null);

(statearr_17266_17297[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17255 === (3))){
var inst_17252 = (state_17254[(2)]);
var state_17254__$1 = state_17254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17254__$1,inst_17252);
} else {
if((state_val_17255 === (12))){
var _ = (function (){var statearr_17267 = state_17254;
(statearr_17267[(4)] = cljs.core.rest((state_17254[(4)])));

return statearr_17267;
})();
var state_17254__$1 = state_17254;
var ex17264 = (state_17254__$1[(2)]);
var statearr_17268_17298 = state_17254__$1;
(statearr_17268_17298[(5)] = ex17264);


if((ex17264 instanceof Object)){
var statearr_17269_17299 = state_17254__$1;
(statearr_17269_17299[(1)] = (11));

(statearr_17269_17299[(5)] = null);

} else {
throw ex17264;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17255 === (2))){
var inst_17213 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17214 = cnt;
var inst_17215 = (0);
var state_17254__$1 = (function (){var statearr_17270 = state_17254;
(statearr_17270[(11)] = inst_17213);

(statearr_17270[(8)] = inst_17214);

(statearr_17270[(7)] = inst_17215);

return statearr_17270;
})();
var statearr_17271_17300 = state_17254__$1;
(statearr_17271_17300[(2)] = null);

(statearr_17271_17300[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17255 === (11))){
var inst_17219 = (state_17254[(2)]);
var inst_17220 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17254__$1 = (function (){var statearr_17272 = state_17254;
(statearr_17272[(12)] = inst_17219);

return statearr_17272;
})();
var statearr_17273_17301 = state_17254__$1;
(statearr_17273_17301[(2)] = inst_17220);

(statearr_17273_17301[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17255 === (9))){
var inst_17215 = (state_17254[(7)]);
var _ = (function (){var statearr_17274 = state_17254;
(statearr_17274[(4)] = cljs.core.cons((12),(state_17254[(4)])));

return statearr_17274;
})();
var inst_17226 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17215) : chs__$1.call(null,inst_17215));
var inst_17227 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17215) : done.call(null,inst_17215));
var inst_17228 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17226,inst_17227);
var ___$1 = (function (){var statearr_17275 = state_17254;
(statearr_17275[(4)] = cljs.core.rest((state_17254[(4)])));

return statearr_17275;
})();
var state_17254__$1 = state_17254;
var statearr_17276_17302 = state_17254__$1;
(statearr_17276_17302[(2)] = inst_17228);

(statearr_17276_17302[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17255 === (5))){
var inst_17238 = (state_17254[(2)]);
var state_17254__$1 = (function (){var statearr_17277 = state_17254;
(statearr_17277[(13)] = inst_17238);

return statearr_17277;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17254__$1,(13),dchan);
} else {
if((state_val_17255 === (14))){
var inst_17243 = cljs.core.async.close_BANG_(out);
var state_17254__$1 = state_17254;
var statearr_17278_17303 = state_17254__$1;
(statearr_17278_17303[(2)] = inst_17243);

(statearr_17278_17303[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17255 === (16))){
var inst_17250 = (state_17254[(2)]);
var state_17254__$1 = state_17254;
var statearr_17279_17304 = state_17254__$1;
(statearr_17279_17304[(2)] = inst_17250);

(statearr_17279_17304[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17255 === (10))){
var inst_17215 = (state_17254[(7)]);
var inst_17231 = (state_17254[(2)]);
var inst_17232 = (inst_17215 + (1));
var inst_17215__$1 = inst_17232;
var state_17254__$1 = (function (){var statearr_17280 = state_17254;
(statearr_17280[(14)] = inst_17231);

(statearr_17280[(7)] = inst_17215__$1);

return statearr_17280;
})();
var statearr_17281_17305 = state_17254__$1;
(statearr_17281_17305[(2)] = null);

(statearr_17281_17305[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17255 === (8))){
var inst_17236 = (state_17254[(2)]);
var state_17254__$1 = state_17254;
var statearr_17282_17306 = state_17254__$1;
(statearr_17282_17306[(2)] = inst_17236);

(statearr_17282_17306[(1)] = (5));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__15823__auto__ = null;
var cljs$core$async$state_machine__15823__auto____0 = (function (){
var statearr_17283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17283[(0)] = cljs$core$async$state_machine__15823__auto__);

(statearr_17283[(1)] = (1));

return statearr_17283;
});
var cljs$core$async$state_machine__15823__auto____1 = (function (state_17254){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_17254);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e17284){var ex__15826__auto__ = e17284;
var statearr_17285_17307 = state_17254;
(statearr_17285_17307[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_17254[(4)]))){
var statearr_17286_17308 = state_17254;
(statearr_17286_17308[(1)] = cljs.core.first((state_17254[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__17309 = state_17254;
state_17254 = G__17309;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$state_machine__15823__auto__ = function(state_17254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15823__auto____1.call(this,state_17254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15823__auto____0;
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15823__auto____1;
return cljs$core$async$state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_17287 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_17287[(6)] = c__15897__auto___17289);

return statearr_17287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
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
var G__17312 = arguments.length;
switch (G__17312) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15897__auto___17367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_17344){
var state_val_17345 = (state_17344[(1)]);
if((state_val_17345 === (7))){
var inst_17323 = (state_17344[(7)]);
var inst_17324 = (state_17344[(8)]);
var inst_17323__$1 = (state_17344[(2)]);
var inst_17324__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17323__$1,(0),null);
var inst_17325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17323__$1,(1),null);
var inst_17326 = (inst_17324__$1 == null);
var state_17344__$1 = (function (){var statearr_17346 = state_17344;
(statearr_17346[(7)] = inst_17323__$1);

(statearr_17346[(8)] = inst_17324__$1);

(statearr_17346[(9)] = inst_17325);

return statearr_17346;
})();
if(cljs.core.truth_(inst_17326)){
var statearr_17347_17368 = state_17344__$1;
(statearr_17347_17368[(1)] = (8));

} else {
var statearr_17348_17369 = state_17344__$1;
(statearr_17348_17369[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17345 === (1))){
var inst_17313 = cljs.core.vec(chs);
var inst_17314 = inst_17313;
var state_17344__$1 = (function (){var statearr_17349 = state_17344;
(statearr_17349[(10)] = inst_17314);

return statearr_17349;
})();
var statearr_17350_17370 = state_17344__$1;
(statearr_17350_17370[(2)] = null);

(statearr_17350_17370[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17345 === (4))){
var inst_17314 = (state_17344[(10)]);
var state_17344__$1 = state_17344;
return cljs.core.async.ioc_alts_BANG_(state_17344__$1,(7),inst_17314);
} else {
if((state_val_17345 === (6))){
var inst_17340 = (state_17344[(2)]);
var state_17344__$1 = state_17344;
var statearr_17351_17371 = state_17344__$1;
(statearr_17351_17371[(2)] = inst_17340);

(statearr_17351_17371[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17345 === (3))){
var inst_17342 = (state_17344[(2)]);
var state_17344__$1 = state_17344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17344__$1,inst_17342);
} else {
if((state_val_17345 === (2))){
var inst_17314 = (state_17344[(10)]);
var inst_17316 = cljs.core.count(inst_17314);
var inst_17317 = (inst_17316 > (0));
var state_17344__$1 = state_17344;
if(cljs.core.truth_(inst_17317)){
var statearr_17353_17372 = state_17344__$1;
(statearr_17353_17372[(1)] = (4));

} else {
var statearr_17354_17373 = state_17344__$1;
(statearr_17354_17373[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17345 === (11))){
var inst_17314 = (state_17344[(10)]);
var inst_17333 = (state_17344[(2)]);
var tmp17352 = inst_17314;
var inst_17314__$1 = tmp17352;
var state_17344__$1 = (function (){var statearr_17355 = state_17344;
(statearr_17355[(11)] = inst_17333);

(statearr_17355[(10)] = inst_17314__$1);

return statearr_17355;
})();
var statearr_17356_17374 = state_17344__$1;
(statearr_17356_17374[(2)] = null);

(statearr_17356_17374[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17345 === (9))){
var inst_17324 = (state_17344[(8)]);
var state_17344__$1 = state_17344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17344__$1,(11),out,inst_17324);
} else {
if((state_val_17345 === (5))){
var inst_17338 = cljs.core.async.close_BANG_(out);
var state_17344__$1 = state_17344;
var statearr_17357_17375 = state_17344__$1;
(statearr_17357_17375[(2)] = inst_17338);

(statearr_17357_17375[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17345 === (10))){
var inst_17336 = (state_17344[(2)]);
var state_17344__$1 = state_17344;
var statearr_17358_17376 = state_17344__$1;
(statearr_17358_17376[(2)] = inst_17336);

(statearr_17358_17376[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17345 === (8))){
var inst_17314 = (state_17344[(10)]);
var inst_17323 = (state_17344[(7)]);
var inst_17324 = (state_17344[(8)]);
var inst_17325 = (state_17344[(9)]);
var inst_17328 = (function (){var cs = inst_17314;
var vec__17319 = inst_17323;
var v = inst_17324;
var c = inst_17325;
return (function (p1__17310_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17310_SHARP_);
});
})();
var inst_17329 = cljs.core.filterv(inst_17328,inst_17314);
var inst_17314__$1 = inst_17329;
var state_17344__$1 = (function (){var statearr_17359 = state_17344;
(statearr_17359[(10)] = inst_17314__$1);

return statearr_17359;
})();
var statearr_17360_17377 = state_17344__$1;
(statearr_17360_17377[(2)] = null);

(statearr_17360_17377[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__15823__auto__ = null;
var cljs$core$async$state_machine__15823__auto____0 = (function (){
var statearr_17361 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17361[(0)] = cljs$core$async$state_machine__15823__auto__);

(statearr_17361[(1)] = (1));

return statearr_17361;
});
var cljs$core$async$state_machine__15823__auto____1 = (function (state_17344){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_17344);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e17362){var ex__15826__auto__ = e17362;
var statearr_17363_17378 = state_17344;
(statearr_17363_17378[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_17344[(4)]))){
var statearr_17364_17379 = state_17344;
(statearr_17364_17379[(1)] = cljs.core.first((state_17344[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__17380 = state_17344;
state_17344 = G__17380;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$state_machine__15823__auto__ = function(state_17344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15823__auto____1.call(this,state_17344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15823__auto____0;
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15823__auto____1;
return cljs$core$async$state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_17365 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_17365[(6)] = c__15897__auto___17367);

return statearr_17365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17382 = arguments.length;
switch (G__17382) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15897__auto___17428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_17406){
var state_val_17407 = (state_17406[(1)]);
if((state_val_17407 === (7))){
var inst_17388 = (state_17406[(7)]);
var inst_17388__$1 = (state_17406[(2)]);
var inst_17389 = (inst_17388__$1 == null);
var inst_17390 = cljs.core.not(inst_17389);
var state_17406__$1 = (function (){var statearr_17408 = state_17406;
(statearr_17408[(7)] = inst_17388__$1);

return statearr_17408;
})();
if(inst_17390){
var statearr_17409_17429 = state_17406__$1;
(statearr_17409_17429[(1)] = (8));

} else {
var statearr_17410_17430 = state_17406__$1;
(statearr_17410_17430[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17407 === (1))){
var inst_17383 = (0);
var state_17406__$1 = (function (){var statearr_17411 = state_17406;
(statearr_17411[(8)] = inst_17383);

return statearr_17411;
})();
var statearr_17412_17431 = state_17406__$1;
(statearr_17412_17431[(2)] = null);

(statearr_17412_17431[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17407 === (4))){
var state_17406__$1 = state_17406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17406__$1,(7),ch);
} else {
if((state_val_17407 === (6))){
var inst_17401 = (state_17406[(2)]);
var state_17406__$1 = state_17406;
var statearr_17413_17432 = state_17406__$1;
(statearr_17413_17432[(2)] = inst_17401);

(statearr_17413_17432[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17407 === (3))){
var inst_17403 = (state_17406[(2)]);
var inst_17404 = cljs.core.async.close_BANG_(out);
var state_17406__$1 = (function (){var statearr_17414 = state_17406;
(statearr_17414[(9)] = inst_17403);

return statearr_17414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17406__$1,inst_17404);
} else {
if((state_val_17407 === (2))){
var inst_17383 = (state_17406[(8)]);
var inst_17385 = (inst_17383 < n);
var state_17406__$1 = state_17406;
if(cljs.core.truth_(inst_17385)){
var statearr_17415_17433 = state_17406__$1;
(statearr_17415_17433[(1)] = (4));

} else {
var statearr_17416_17434 = state_17406__$1;
(statearr_17416_17434[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17407 === (11))){
var inst_17383 = (state_17406[(8)]);
var inst_17393 = (state_17406[(2)]);
var inst_17394 = (inst_17383 + (1));
var inst_17383__$1 = inst_17394;
var state_17406__$1 = (function (){var statearr_17417 = state_17406;
(statearr_17417[(10)] = inst_17393);

(statearr_17417[(8)] = inst_17383__$1);

return statearr_17417;
})();
var statearr_17418_17435 = state_17406__$1;
(statearr_17418_17435[(2)] = null);

(statearr_17418_17435[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17407 === (9))){
var state_17406__$1 = state_17406;
var statearr_17419_17436 = state_17406__$1;
(statearr_17419_17436[(2)] = null);

(statearr_17419_17436[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17407 === (5))){
var state_17406__$1 = state_17406;
var statearr_17420_17437 = state_17406__$1;
(statearr_17420_17437[(2)] = null);

(statearr_17420_17437[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17407 === (10))){
var inst_17398 = (state_17406[(2)]);
var state_17406__$1 = state_17406;
var statearr_17421_17438 = state_17406__$1;
(statearr_17421_17438[(2)] = inst_17398);

(statearr_17421_17438[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17407 === (8))){
var inst_17388 = (state_17406[(7)]);
var state_17406__$1 = state_17406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17406__$1,(11),out,inst_17388);
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
var cljs$core$async$state_machine__15823__auto__ = null;
var cljs$core$async$state_machine__15823__auto____0 = (function (){
var statearr_17422 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17422[(0)] = cljs$core$async$state_machine__15823__auto__);

(statearr_17422[(1)] = (1));

return statearr_17422;
});
var cljs$core$async$state_machine__15823__auto____1 = (function (state_17406){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_17406);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e17423){var ex__15826__auto__ = e17423;
var statearr_17424_17439 = state_17406;
(statearr_17424_17439[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_17406[(4)]))){
var statearr_17425_17440 = state_17406;
(statearr_17425_17440[(1)] = cljs.core.first((state_17406[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__17441 = state_17406;
state_17406 = G__17441;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$state_machine__15823__auto__ = function(state_17406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15823__auto____1.call(this,state_17406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15823__auto____0;
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15823__auto____1;
return cljs$core$async$state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_17426 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_17426[(6)] = c__15897__auto___17428);

return statearr_17426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17443 = (function (f,ch,meta17444){
this.f = f;
this.ch = ch;
this.meta17444 = meta17444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17445,meta17444__$1){
var self__ = this;
var _17445__$1 = this;
return (new cljs.core.async.t_cljs$core$async17443(self__.f,self__.ch,meta17444__$1));
}));

(cljs.core.async.t_cljs$core$async17443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17445){
var self__ = this;
var _17445__$1 = this;
return self__.meta17444;
}));

(cljs.core.async.t_cljs$core$async17443.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17443.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17443.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17446 = (function (f,ch,meta17444,_,fn1,meta17447){
this.f = f;
this.ch = ch;
this.meta17444 = meta17444;
this._ = _;
this.fn1 = fn1;
this.meta17447 = meta17447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17448,meta17447__$1){
var self__ = this;
var _17448__$1 = this;
return (new cljs.core.async.t_cljs$core$async17446(self__.f,self__.ch,self__.meta17444,self__._,self__.fn1,meta17447__$1));
}));

(cljs.core.async.t_cljs$core$async17446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17448){
var self__ = this;
var _17448__$1 = this;
return self__.meta17447;
}));

(cljs.core.async.t_cljs$core$async17446.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17446.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17446.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17446.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17442_SHARP_){
var G__17449 = (((p1__17442_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17442_SHARP_) : self__.f.call(null,p1__17442_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17449) : f1.call(null,G__17449));
});
}));

(cljs.core.async.t_cljs$core$async17446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17444,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17443], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17447], null);
}));

(cljs.core.async.t_cljs$core$async17446.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17446");

(cljs.core.async.t_cljs$core$async17446.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17446");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17446.
 */
cljs.core.async.__GT_t_cljs$core$async17446 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17446(f__$1,ch__$1,meta17444__$1,___$2,fn1__$1,meta17447){
return (new cljs.core.async.t_cljs$core$async17446(f__$1,ch__$1,meta17444__$1,___$2,fn1__$1,meta17447));
});

}

return (new cljs.core.async.t_cljs$core$async17446(self__.f,self__.ch,self__.meta17444,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17450 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17450) : self__.f.call(null,G__17450));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17443.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17444], null);
}));

(cljs.core.async.t_cljs$core$async17443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17443");

(cljs.core.async.t_cljs$core$async17443.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17443.
 */
cljs.core.async.__GT_t_cljs$core$async17443 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17443(f__$1,ch__$1,meta17444){
return (new cljs.core.async.t_cljs$core$async17443(f__$1,ch__$1,meta17444));
});

}

return (new cljs.core.async.t_cljs$core$async17443(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17451 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17451 = (function (f,ch,meta17452){
this.f = f;
this.ch = ch;
this.meta17452 = meta17452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17453,meta17452__$1){
var self__ = this;
var _17453__$1 = this;
return (new cljs.core.async.t_cljs$core$async17451(self__.f,self__.ch,meta17452__$1));
}));

(cljs.core.async.t_cljs$core$async17451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17453){
var self__ = this;
var _17453__$1 = this;
return self__.meta17452;
}));

(cljs.core.async.t_cljs$core$async17451.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17451.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17451.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17451.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17451.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17451.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17452], null);
}));

(cljs.core.async.t_cljs$core$async17451.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17451");

(cljs.core.async.t_cljs$core$async17451.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17451");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17451.
 */
cljs.core.async.__GT_t_cljs$core$async17451 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17451(f__$1,ch__$1,meta17452){
return (new cljs.core.async.t_cljs$core$async17451(f__$1,ch__$1,meta17452));
});

}

return (new cljs.core.async.t_cljs$core$async17451(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17454 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17454 = (function (p,ch,meta17455){
this.p = p;
this.ch = ch;
this.meta17455 = meta17455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17456,meta17455__$1){
var self__ = this;
var _17456__$1 = this;
return (new cljs.core.async.t_cljs$core$async17454(self__.p,self__.ch,meta17455__$1));
}));

(cljs.core.async.t_cljs$core$async17454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17456){
var self__ = this;
var _17456__$1 = this;
return self__.meta17455;
}));

(cljs.core.async.t_cljs$core$async17454.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17454.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17454.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17454.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17454.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17454.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17454.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17455], null);
}));

(cljs.core.async.t_cljs$core$async17454.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17454");

(cljs.core.async.t_cljs$core$async17454.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17454");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17454.
 */
cljs.core.async.__GT_t_cljs$core$async17454 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17454(p__$1,ch__$1,meta17455){
return (new cljs.core.async.t_cljs$core$async17454(p__$1,ch__$1,meta17455));
});

}

return (new cljs.core.async.t_cljs$core$async17454(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17458 = arguments.length;
switch (G__17458) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15897__auto___17499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_17479){
var state_val_17480 = (state_17479[(1)]);
if((state_val_17480 === (7))){
var inst_17475 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
var statearr_17481_17500 = state_17479__$1;
(statearr_17481_17500[(2)] = inst_17475);

(statearr_17481_17500[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17480 === (1))){
var state_17479__$1 = state_17479;
var statearr_17482_17501 = state_17479__$1;
(statearr_17482_17501[(2)] = null);

(statearr_17482_17501[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17480 === (4))){
var inst_17461 = (state_17479[(7)]);
var inst_17461__$1 = (state_17479[(2)]);
var inst_17462 = (inst_17461__$1 == null);
var state_17479__$1 = (function (){var statearr_17483 = state_17479;
(statearr_17483[(7)] = inst_17461__$1);

return statearr_17483;
})();
if(cljs.core.truth_(inst_17462)){
var statearr_17484_17502 = state_17479__$1;
(statearr_17484_17502[(1)] = (5));

} else {
var statearr_17485_17503 = state_17479__$1;
(statearr_17485_17503[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17480 === (6))){
var inst_17461 = (state_17479[(7)]);
var inst_17466 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17461) : p.call(null,inst_17461));
var state_17479__$1 = state_17479;
if(cljs.core.truth_(inst_17466)){
var statearr_17486_17504 = state_17479__$1;
(statearr_17486_17504[(1)] = (8));

} else {
var statearr_17487_17505 = state_17479__$1;
(statearr_17487_17505[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17480 === (3))){
var inst_17477 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17479__$1,inst_17477);
} else {
if((state_val_17480 === (2))){
var state_17479__$1 = state_17479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17479__$1,(4),ch);
} else {
if((state_val_17480 === (11))){
var inst_17469 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
var statearr_17488_17506 = state_17479__$1;
(statearr_17488_17506[(2)] = inst_17469);

(statearr_17488_17506[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17480 === (9))){
var state_17479__$1 = state_17479;
var statearr_17489_17507 = state_17479__$1;
(statearr_17489_17507[(2)] = null);

(statearr_17489_17507[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17480 === (5))){
var inst_17464 = cljs.core.async.close_BANG_(out);
var state_17479__$1 = state_17479;
var statearr_17490_17508 = state_17479__$1;
(statearr_17490_17508[(2)] = inst_17464);

(statearr_17490_17508[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17480 === (10))){
var inst_17472 = (state_17479[(2)]);
var state_17479__$1 = (function (){var statearr_17491 = state_17479;
(statearr_17491[(8)] = inst_17472);

return statearr_17491;
})();
var statearr_17492_17509 = state_17479__$1;
(statearr_17492_17509[(2)] = null);

(statearr_17492_17509[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17480 === (8))){
var inst_17461 = (state_17479[(7)]);
var state_17479__$1 = state_17479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17479__$1,(11),out,inst_17461);
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
var cljs$core$async$state_machine__15823__auto__ = null;
var cljs$core$async$state_machine__15823__auto____0 = (function (){
var statearr_17493 = [null,null,null,null,null,null,null,null,null];
(statearr_17493[(0)] = cljs$core$async$state_machine__15823__auto__);

(statearr_17493[(1)] = (1));

return statearr_17493;
});
var cljs$core$async$state_machine__15823__auto____1 = (function (state_17479){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_17479);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e17494){var ex__15826__auto__ = e17494;
var statearr_17495_17510 = state_17479;
(statearr_17495_17510[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_17479[(4)]))){
var statearr_17496_17511 = state_17479;
(statearr_17496_17511[(1)] = cljs.core.first((state_17479[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__17512 = state_17479;
state_17479 = G__17512;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$state_machine__15823__auto__ = function(state_17479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15823__auto____1.call(this,state_17479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15823__auto____0;
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15823__auto____1;
return cljs$core$async$state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_17497 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_17497[(6)] = c__15897__auto___17499);

return statearr_17497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17514 = arguments.length;
switch (G__17514) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15897__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_17577){
var state_val_17578 = (state_17577[(1)]);
if((state_val_17578 === (7))){
var inst_17573 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
var statearr_17579_17618 = state_17577__$1;
(statearr_17579_17618[(2)] = inst_17573);

(statearr_17579_17618[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (20))){
var inst_17543 = (state_17577[(7)]);
var inst_17554 = (state_17577[(2)]);
var inst_17555 = cljs.core.next(inst_17543);
var inst_17529 = inst_17555;
var inst_17530 = null;
var inst_17531 = (0);
var inst_17532 = (0);
var state_17577__$1 = (function (){var statearr_17580 = state_17577;
(statearr_17580[(8)] = inst_17554);

(statearr_17580[(9)] = inst_17529);

(statearr_17580[(10)] = inst_17530);

(statearr_17580[(11)] = inst_17531);

(statearr_17580[(12)] = inst_17532);

return statearr_17580;
})();
var statearr_17581_17619 = state_17577__$1;
(statearr_17581_17619[(2)] = null);

(statearr_17581_17619[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (1))){
var state_17577__$1 = state_17577;
var statearr_17582_17620 = state_17577__$1;
(statearr_17582_17620[(2)] = null);

(statearr_17582_17620[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (4))){
var inst_17518 = (state_17577[(13)]);
var inst_17518__$1 = (state_17577[(2)]);
var inst_17519 = (inst_17518__$1 == null);
var state_17577__$1 = (function (){var statearr_17583 = state_17577;
(statearr_17583[(13)] = inst_17518__$1);

return statearr_17583;
})();
if(cljs.core.truth_(inst_17519)){
var statearr_17584_17621 = state_17577__$1;
(statearr_17584_17621[(1)] = (5));

} else {
var statearr_17585_17622 = state_17577__$1;
(statearr_17585_17622[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (15))){
var state_17577__$1 = state_17577;
var statearr_17589_17623 = state_17577__$1;
(statearr_17589_17623[(2)] = null);

(statearr_17589_17623[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (21))){
var state_17577__$1 = state_17577;
var statearr_17590_17624 = state_17577__$1;
(statearr_17590_17624[(2)] = null);

(statearr_17590_17624[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (13))){
var inst_17532 = (state_17577[(12)]);
var inst_17529 = (state_17577[(9)]);
var inst_17530 = (state_17577[(10)]);
var inst_17531 = (state_17577[(11)]);
var inst_17539 = (state_17577[(2)]);
var inst_17540 = (inst_17532 + (1));
var tmp17586 = inst_17529;
var tmp17587 = inst_17531;
var tmp17588 = inst_17530;
var inst_17529__$1 = tmp17586;
var inst_17530__$1 = tmp17588;
var inst_17531__$1 = tmp17587;
var inst_17532__$1 = inst_17540;
var state_17577__$1 = (function (){var statearr_17591 = state_17577;
(statearr_17591[(14)] = inst_17539);

(statearr_17591[(9)] = inst_17529__$1);

(statearr_17591[(10)] = inst_17530__$1);

(statearr_17591[(11)] = inst_17531__$1);

(statearr_17591[(12)] = inst_17532__$1);

return statearr_17591;
})();
var statearr_17592_17625 = state_17577__$1;
(statearr_17592_17625[(2)] = null);

(statearr_17592_17625[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (22))){
var state_17577__$1 = state_17577;
var statearr_17593_17626 = state_17577__$1;
(statearr_17593_17626[(2)] = null);

(statearr_17593_17626[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (6))){
var inst_17518 = (state_17577[(13)]);
var inst_17527 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17518) : f.call(null,inst_17518));
var inst_17528 = cljs.core.seq(inst_17527);
var inst_17529 = inst_17528;
var inst_17530 = null;
var inst_17531 = (0);
var inst_17532 = (0);
var state_17577__$1 = (function (){var statearr_17594 = state_17577;
(statearr_17594[(9)] = inst_17529);

(statearr_17594[(10)] = inst_17530);

(statearr_17594[(11)] = inst_17531);

(statearr_17594[(12)] = inst_17532);

return statearr_17594;
})();
var statearr_17595_17627 = state_17577__$1;
(statearr_17595_17627[(2)] = null);

(statearr_17595_17627[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (17))){
var inst_17543 = (state_17577[(7)]);
var inst_17547 = cljs.core.chunk_first(inst_17543);
var inst_17548 = cljs.core.chunk_rest(inst_17543);
var inst_17549 = cljs.core.count(inst_17547);
var inst_17529 = inst_17548;
var inst_17530 = inst_17547;
var inst_17531 = inst_17549;
var inst_17532 = (0);
var state_17577__$1 = (function (){var statearr_17596 = state_17577;
(statearr_17596[(9)] = inst_17529);

(statearr_17596[(10)] = inst_17530);

(statearr_17596[(11)] = inst_17531);

(statearr_17596[(12)] = inst_17532);

return statearr_17596;
})();
var statearr_17597_17628 = state_17577__$1;
(statearr_17597_17628[(2)] = null);

(statearr_17597_17628[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (3))){
var inst_17575 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17577__$1,inst_17575);
} else {
if((state_val_17578 === (12))){
var inst_17563 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
var statearr_17598_17629 = state_17577__$1;
(statearr_17598_17629[(2)] = inst_17563);

(statearr_17598_17629[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (2))){
var state_17577__$1 = state_17577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17577__$1,(4),in$);
} else {
if((state_val_17578 === (23))){
var inst_17571 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
var statearr_17599_17630 = state_17577__$1;
(statearr_17599_17630[(2)] = inst_17571);

(statearr_17599_17630[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (19))){
var inst_17558 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
var statearr_17600_17631 = state_17577__$1;
(statearr_17600_17631[(2)] = inst_17558);

(statearr_17600_17631[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (11))){
var inst_17529 = (state_17577[(9)]);
var inst_17543 = (state_17577[(7)]);
var inst_17543__$1 = cljs.core.seq(inst_17529);
var state_17577__$1 = (function (){var statearr_17601 = state_17577;
(statearr_17601[(7)] = inst_17543__$1);

return statearr_17601;
})();
if(inst_17543__$1){
var statearr_17602_17632 = state_17577__$1;
(statearr_17602_17632[(1)] = (14));

} else {
var statearr_17603_17633 = state_17577__$1;
(statearr_17603_17633[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (9))){
var inst_17565 = (state_17577[(2)]);
var inst_17566 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17577__$1 = (function (){var statearr_17604 = state_17577;
(statearr_17604[(15)] = inst_17565);

return statearr_17604;
})();
if(cljs.core.truth_(inst_17566)){
var statearr_17605_17634 = state_17577__$1;
(statearr_17605_17634[(1)] = (21));

} else {
var statearr_17606_17635 = state_17577__$1;
(statearr_17606_17635[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (5))){
var inst_17521 = cljs.core.async.close_BANG_(out);
var state_17577__$1 = state_17577;
var statearr_17607_17636 = state_17577__$1;
(statearr_17607_17636[(2)] = inst_17521);

(statearr_17607_17636[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (14))){
var inst_17543 = (state_17577[(7)]);
var inst_17545 = cljs.core.chunked_seq_QMARK_(inst_17543);
var state_17577__$1 = state_17577;
if(inst_17545){
var statearr_17608_17637 = state_17577__$1;
(statearr_17608_17637[(1)] = (17));

} else {
var statearr_17609_17638 = state_17577__$1;
(statearr_17609_17638[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (16))){
var inst_17561 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
var statearr_17610_17639 = state_17577__$1;
(statearr_17610_17639[(2)] = inst_17561);

(statearr_17610_17639[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (10))){
var inst_17530 = (state_17577[(10)]);
var inst_17532 = (state_17577[(12)]);
var inst_17537 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17530,inst_17532);
var state_17577__$1 = state_17577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17577__$1,(13),out,inst_17537);
} else {
if((state_val_17578 === (18))){
var inst_17543 = (state_17577[(7)]);
var inst_17552 = cljs.core.first(inst_17543);
var state_17577__$1 = state_17577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17577__$1,(20),out,inst_17552);
} else {
if((state_val_17578 === (8))){
var inst_17532 = (state_17577[(12)]);
var inst_17531 = (state_17577[(11)]);
var inst_17534 = (inst_17532 < inst_17531);
var inst_17535 = inst_17534;
var state_17577__$1 = state_17577;
if(cljs.core.truth_(inst_17535)){
var statearr_17611_17640 = state_17577__$1;
(statearr_17611_17640[(1)] = (10));

} else {
var statearr_17612_17641 = state_17577__$1;
(statearr_17612_17641[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mapcat_STAR__$_state_machine__15823__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15823__auto____0 = (function (){
var statearr_17613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17613[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15823__auto__);

(statearr_17613[(1)] = (1));

return statearr_17613;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15823__auto____1 = (function (state_17577){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_17577);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e17614){var ex__15826__auto__ = e17614;
var statearr_17615_17642 = state_17577;
(statearr_17615_17642[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_17577[(4)]))){
var statearr_17616_17643 = state_17577;
(statearr_17616_17643[(1)] = cljs.core.first((state_17577[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__17644 = state_17577;
state_17577 = G__17644;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15823__auto__ = function(state_17577){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15823__auto____1.call(this,state_17577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15823__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15823__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_17617 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_17617[(6)] = c__15897__auto__);

return statearr_17617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
}));

return c__15897__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17646 = arguments.length;
switch (G__17646) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17649 = arguments.length;
switch (G__17649) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17652 = arguments.length;
switch (G__17652) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15897__auto___17700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_17676){
var state_val_17677 = (state_17676[(1)]);
if((state_val_17677 === (7))){
var inst_17671 = (state_17676[(2)]);
var state_17676__$1 = state_17676;
var statearr_17678_17701 = state_17676__$1;
(statearr_17678_17701[(2)] = inst_17671);

(statearr_17678_17701[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17677 === (1))){
var inst_17653 = null;
var state_17676__$1 = (function (){var statearr_17679 = state_17676;
(statearr_17679[(7)] = inst_17653);

return statearr_17679;
})();
var statearr_17680_17702 = state_17676__$1;
(statearr_17680_17702[(2)] = null);

(statearr_17680_17702[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17677 === (4))){
var inst_17656 = (state_17676[(8)]);
var inst_17656__$1 = (state_17676[(2)]);
var inst_17657 = (inst_17656__$1 == null);
var inst_17658 = cljs.core.not(inst_17657);
var state_17676__$1 = (function (){var statearr_17681 = state_17676;
(statearr_17681[(8)] = inst_17656__$1);

return statearr_17681;
})();
if(inst_17658){
var statearr_17682_17703 = state_17676__$1;
(statearr_17682_17703[(1)] = (5));

} else {
var statearr_17683_17704 = state_17676__$1;
(statearr_17683_17704[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17677 === (6))){
var state_17676__$1 = state_17676;
var statearr_17684_17705 = state_17676__$1;
(statearr_17684_17705[(2)] = null);

(statearr_17684_17705[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17677 === (3))){
var inst_17673 = (state_17676[(2)]);
var inst_17674 = cljs.core.async.close_BANG_(out);
var state_17676__$1 = (function (){var statearr_17685 = state_17676;
(statearr_17685[(9)] = inst_17673);

return statearr_17685;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17676__$1,inst_17674);
} else {
if((state_val_17677 === (2))){
var state_17676__$1 = state_17676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17676__$1,(4),ch);
} else {
if((state_val_17677 === (11))){
var inst_17656 = (state_17676[(8)]);
var inst_17665 = (state_17676[(2)]);
var inst_17653 = inst_17656;
var state_17676__$1 = (function (){var statearr_17686 = state_17676;
(statearr_17686[(10)] = inst_17665);

(statearr_17686[(7)] = inst_17653);

return statearr_17686;
})();
var statearr_17687_17706 = state_17676__$1;
(statearr_17687_17706[(2)] = null);

(statearr_17687_17706[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17677 === (9))){
var inst_17656 = (state_17676[(8)]);
var state_17676__$1 = state_17676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17676__$1,(11),out,inst_17656);
} else {
if((state_val_17677 === (5))){
var inst_17656 = (state_17676[(8)]);
var inst_17653 = (state_17676[(7)]);
var inst_17660 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17656,inst_17653);
var state_17676__$1 = state_17676;
if(inst_17660){
var statearr_17689_17707 = state_17676__$1;
(statearr_17689_17707[(1)] = (8));

} else {
var statearr_17690_17708 = state_17676__$1;
(statearr_17690_17708[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17677 === (10))){
var inst_17668 = (state_17676[(2)]);
var state_17676__$1 = state_17676;
var statearr_17691_17709 = state_17676__$1;
(statearr_17691_17709[(2)] = inst_17668);

(statearr_17691_17709[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17677 === (8))){
var inst_17653 = (state_17676[(7)]);
var tmp17688 = inst_17653;
var inst_17653__$1 = tmp17688;
var state_17676__$1 = (function (){var statearr_17692 = state_17676;
(statearr_17692[(7)] = inst_17653__$1);

return statearr_17692;
})();
var statearr_17693_17710 = state_17676__$1;
(statearr_17693_17710[(2)] = null);

(statearr_17693_17710[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__15823__auto__ = null;
var cljs$core$async$state_machine__15823__auto____0 = (function (){
var statearr_17694 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17694[(0)] = cljs$core$async$state_machine__15823__auto__);

(statearr_17694[(1)] = (1));

return statearr_17694;
});
var cljs$core$async$state_machine__15823__auto____1 = (function (state_17676){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_17676);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e17695){var ex__15826__auto__ = e17695;
var statearr_17696_17711 = state_17676;
(statearr_17696_17711[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_17676[(4)]))){
var statearr_17697_17712 = state_17676;
(statearr_17697_17712[(1)] = cljs.core.first((state_17676[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__17713 = state_17676;
state_17676 = G__17713;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$state_machine__15823__auto__ = function(state_17676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15823__auto____1.call(this,state_17676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15823__auto____0;
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15823__auto____1;
return cljs$core$async$state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_17698 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_17698[(6)] = c__15897__auto___17700);

return statearr_17698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17715 = arguments.length;
switch (G__17715) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15897__auto___17782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_17753){
var state_val_17754 = (state_17753[(1)]);
if((state_val_17754 === (7))){
var inst_17749 = (state_17753[(2)]);
var state_17753__$1 = state_17753;
var statearr_17755_17783 = state_17753__$1;
(statearr_17755_17783[(2)] = inst_17749);

(statearr_17755_17783[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17754 === (1))){
var inst_17716 = (new Array(n));
var inst_17717 = inst_17716;
var inst_17718 = (0);
var state_17753__$1 = (function (){var statearr_17756 = state_17753;
(statearr_17756[(7)] = inst_17717);

(statearr_17756[(8)] = inst_17718);

return statearr_17756;
})();
var statearr_17757_17784 = state_17753__$1;
(statearr_17757_17784[(2)] = null);

(statearr_17757_17784[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17754 === (4))){
var inst_17721 = (state_17753[(9)]);
var inst_17721__$1 = (state_17753[(2)]);
var inst_17722 = (inst_17721__$1 == null);
var inst_17723 = cljs.core.not(inst_17722);
var state_17753__$1 = (function (){var statearr_17758 = state_17753;
(statearr_17758[(9)] = inst_17721__$1);

return statearr_17758;
})();
if(inst_17723){
var statearr_17759_17785 = state_17753__$1;
(statearr_17759_17785[(1)] = (5));

} else {
var statearr_17760_17786 = state_17753__$1;
(statearr_17760_17786[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17754 === (15))){
var inst_17743 = (state_17753[(2)]);
var state_17753__$1 = state_17753;
var statearr_17761_17787 = state_17753__$1;
(statearr_17761_17787[(2)] = inst_17743);

(statearr_17761_17787[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17754 === (13))){
var state_17753__$1 = state_17753;
var statearr_17762_17788 = state_17753__$1;
(statearr_17762_17788[(2)] = null);

(statearr_17762_17788[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17754 === (6))){
var inst_17718 = (state_17753[(8)]);
var inst_17739 = (inst_17718 > (0));
var state_17753__$1 = state_17753;
if(cljs.core.truth_(inst_17739)){
var statearr_17763_17789 = state_17753__$1;
(statearr_17763_17789[(1)] = (12));

} else {
var statearr_17764_17790 = state_17753__$1;
(statearr_17764_17790[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17754 === (3))){
var inst_17751 = (state_17753[(2)]);
var state_17753__$1 = state_17753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17753__$1,inst_17751);
} else {
if((state_val_17754 === (12))){
var inst_17717 = (state_17753[(7)]);
var inst_17741 = cljs.core.vec(inst_17717);
var state_17753__$1 = state_17753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17753__$1,(15),out,inst_17741);
} else {
if((state_val_17754 === (2))){
var state_17753__$1 = state_17753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17753__$1,(4),ch);
} else {
if((state_val_17754 === (11))){
var inst_17733 = (state_17753[(2)]);
var inst_17734 = (new Array(n));
var inst_17717 = inst_17734;
var inst_17718 = (0);
var state_17753__$1 = (function (){var statearr_17765 = state_17753;
(statearr_17765[(10)] = inst_17733);

(statearr_17765[(7)] = inst_17717);

(statearr_17765[(8)] = inst_17718);

return statearr_17765;
})();
var statearr_17766_17791 = state_17753__$1;
(statearr_17766_17791[(2)] = null);

(statearr_17766_17791[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17754 === (9))){
var inst_17717 = (state_17753[(7)]);
var inst_17731 = cljs.core.vec(inst_17717);
var state_17753__$1 = state_17753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17753__$1,(11),out,inst_17731);
} else {
if((state_val_17754 === (5))){
var inst_17717 = (state_17753[(7)]);
var inst_17718 = (state_17753[(8)]);
var inst_17721 = (state_17753[(9)]);
var inst_17726 = (state_17753[(11)]);
var inst_17725 = (inst_17717[inst_17718] = inst_17721);
var inst_17726__$1 = (inst_17718 + (1));
var inst_17727 = (inst_17726__$1 < n);
var state_17753__$1 = (function (){var statearr_17767 = state_17753;
(statearr_17767[(12)] = inst_17725);

(statearr_17767[(11)] = inst_17726__$1);

return statearr_17767;
})();
if(cljs.core.truth_(inst_17727)){
var statearr_17768_17792 = state_17753__$1;
(statearr_17768_17792[(1)] = (8));

} else {
var statearr_17769_17793 = state_17753__$1;
(statearr_17769_17793[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17754 === (14))){
var inst_17746 = (state_17753[(2)]);
var inst_17747 = cljs.core.async.close_BANG_(out);
var state_17753__$1 = (function (){var statearr_17771 = state_17753;
(statearr_17771[(13)] = inst_17746);

return statearr_17771;
})();
var statearr_17772_17794 = state_17753__$1;
(statearr_17772_17794[(2)] = inst_17747);

(statearr_17772_17794[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17754 === (10))){
var inst_17737 = (state_17753[(2)]);
var state_17753__$1 = state_17753;
var statearr_17773_17795 = state_17753__$1;
(statearr_17773_17795[(2)] = inst_17737);

(statearr_17773_17795[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17754 === (8))){
var inst_17717 = (state_17753[(7)]);
var inst_17726 = (state_17753[(11)]);
var tmp17770 = inst_17717;
var inst_17717__$1 = tmp17770;
var inst_17718 = inst_17726;
var state_17753__$1 = (function (){var statearr_17774 = state_17753;
(statearr_17774[(7)] = inst_17717__$1);

(statearr_17774[(8)] = inst_17718);

return statearr_17774;
})();
var statearr_17775_17796 = state_17753__$1;
(statearr_17775_17796[(2)] = null);

(statearr_17775_17796[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__15823__auto__ = null;
var cljs$core$async$state_machine__15823__auto____0 = (function (){
var statearr_17776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17776[(0)] = cljs$core$async$state_machine__15823__auto__);

(statearr_17776[(1)] = (1));

return statearr_17776;
});
var cljs$core$async$state_machine__15823__auto____1 = (function (state_17753){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_17753);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e17777){var ex__15826__auto__ = e17777;
var statearr_17778_17797 = state_17753;
(statearr_17778_17797[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_17753[(4)]))){
var statearr_17779_17798 = state_17753;
(statearr_17779_17798[(1)] = cljs.core.first((state_17753[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__17799 = state_17753;
state_17753 = G__17799;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$state_machine__15823__auto__ = function(state_17753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15823__auto____1.call(this,state_17753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15823__auto____0;
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15823__auto____1;
return cljs$core$async$state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_17780 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_17780[(6)] = c__15897__auto___17782);

return statearr_17780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17801 = arguments.length;
switch (G__17801) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15897__auto___17872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_17843){
var state_val_17844 = (state_17843[(1)]);
if((state_val_17844 === (7))){
var inst_17839 = (state_17843[(2)]);
var state_17843__$1 = state_17843;
var statearr_17845_17873 = state_17843__$1;
(statearr_17845_17873[(2)] = inst_17839);

(statearr_17845_17873[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17844 === (1))){
var inst_17802 = [];
var inst_17803 = inst_17802;
var inst_17804 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17843__$1 = (function (){var statearr_17846 = state_17843;
(statearr_17846[(7)] = inst_17803);

(statearr_17846[(8)] = inst_17804);

return statearr_17846;
})();
var statearr_17847_17874 = state_17843__$1;
(statearr_17847_17874[(2)] = null);

(statearr_17847_17874[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17844 === (4))){
var inst_17807 = (state_17843[(9)]);
var inst_17807__$1 = (state_17843[(2)]);
var inst_17808 = (inst_17807__$1 == null);
var inst_17809 = cljs.core.not(inst_17808);
var state_17843__$1 = (function (){var statearr_17848 = state_17843;
(statearr_17848[(9)] = inst_17807__$1);

return statearr_17848;
})();
if(inst_17809){
var statearr_17849_17875 = state_17843__$1;
(statearr_17849_17875[(1)] = (5));

} else {
var statearr_17850_17876 = state_17843__$1;
(statearr_17850_17876[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17844 === (15))){
var inst_17833 = (state_17843[(2)]);
var state_17843__$1 = state_17843;
var statearr_17851_17877 = state_17843__$1;
(statearr_17851_17877[(2)] = inst_17833);

(statearr_17851_17877[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17844 === (13))){
var state_17843__$1 = state_17843;
var statearr_17852_17878 = state_17843__$1;
(statearr_17852_17878[(2)] = null);

(statearr_17852_17878[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17844 === (6))){
var inst_17803 = (state_17843[(7)]);
var inst_17828 = inst_17803.length;
var inst_17829 = (inst_17828 > (0));
var state_17843__$1 = state_17843;
if(cljs.core.truth_(inst_17829)){
var statearr_17853_17879 = state_17843__$1;
(statearr_17853_17879[(1)] = (12));

} else {
var statearr_17854_17880 = state_17843__$1;
(statearr_17854_17880[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17844 === (3))){
var inst_17841 = (state_17843[(2)]);
var state_17843__$1 = state_17843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17843__$1,inst_17841);
} else {
if((state_val_17844 === (12))){
var inst_17803 = (state_17843[(7)]);
var inst_17831 = cljs.core.vec(inst_17803);
var state_17843__$1 = state_17843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17843__$1,(15),out,inst_17831);
} else {
if((state_val_17844 === (2))){
var state_17843__$1 = state_17843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17843__$1,(4),ch);
} else {
if((state_val_17844 === (11))){
var inst_17807 = (state_17843[(9)]);
var inst_17811 = (state_17843[(10)]);
var inst_17821 = (state_17843[(2)]);
var inst_17822 = [];
var inst_17823 = inst_17822.push(inst_17807);
var inst_17803 = inst_17822;
var inst_17804 = inst_17811;
var state_17843__$1 = (function (){var statearr_17855 = state_17843;
(statearr_17855[(11)] = inst_17821);

(statearr_17855[(12)] = inst_17823);

(statearr_17855[(7)] = inst_17803);

(statearr_17855[(8)] = inst_17804);

return statearr_17855;
})();
var statearr_17856_17881 = state_17843__$1;
(statearr_17856_17881[(2)] = null);

(statearr_17856_17881[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17844 === (9))){
var inst_17803 = (state_17843[(7)]);
var inst_17819 = cljs.core.vec(inst_17803);
var state_17843__$1 = state_17843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17843__$1,(11),out,inst_17819);
} else {
if((state_val_17844 === (5))){
var inst_17807 = (state_17843[(9)]);
var inst_17811 = (state_17843[(10)]);
var inst_17804 = (state_17843[(8)]);
var inst_17811__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17807) : f.call(null,inst_17807));
var inst_17812 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17811__$1,inst_17804);
var inst_17813 = cljs.core.keyword_identical_QMARK_(inst_17804,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17814 = ((inst_17812) || (inst_17813));
var state_17843__$1 = (function (){var statearr_17857 = state_17843;
(statearr_17857[(10)] = inst_17811__$1);

return statearr_17857;
})();
if(cljs.core.truth_(inst_17814)){
var statearr_17858_17882 = state_17843__$1;
(statearr_17858_17882[(1)] = (8));

} else {
var statearr_17859_17883 = state_17843__$1;
(statearr_17859_17883[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17844 === (14))){
var inst_17836 = (state_17843[(2)]);
var inst_17837 = cljs.core.async.close_BANG_(out);
var state_17843__$1 = (function (){var statearr_17861 = state_17843;
(statearr_17861[(13)] = inst_17836);

return statearr_17861;
})();
var statearr_17862_17884 = state_17843__$1;
(statearr_17862_17884[(2)] = inst_17837);

(statearr_17862_17884[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17844 === (10))){
var inst_17826 = (state_17843[(2)]);
var state_17843__$1 = state_17843;
var statearr_17863_17885 = state_17843__$1;
(statearr_17863_17885[(2)] = inst_17826);

(statearr_17863_17885[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17844 === (8))){
var inst_17803 = (state_17843[(7)]);
var inst_17807 = (state_17843[(9)]);
var inst_17811 = (state_17843[(10)]);
var inst_17816 = inst_17803.push(inst_17807);
var tmp17860 = inst_17803;
var inst_17803__$1 = tmp17860;
var inst_17804 = inst_17811;
var state_17843__$1 = (function (){var statearr_17864 = state_17843;
(statearr_17864[(14)] = inst_17816);

(statearr_17864[(7)] = inst_17803__$1);

(statearr_17864[(8)] = inst_17804);

return statearr_17864;
})();
var statearr_17865_17886 = state_17843__$1;
(statearr_17865_17886[(2)] = null);

(statearr_17865_17886[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__15823__auto__ = null;
var cljs$core$async$state_machine__15823__auto____0 = (function (){
var statearr_17866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17866[(0)] = cljs$core$async$state_machine__15823__auto__);

(statearr_17866[(1)] = (1));

return statearr_17866;
});
var cljs$core$async$state_machine__15823__auto____1 = (function (state_17843){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_17843);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e17867){var ex__15826__auto__ = e17867;
var statearr_17868_17887 = state_17843;
(statearr_17868_17887[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_17843[(4)]))){
var statearr_17869_17888 = state_17843;
(statearr_17869_17888[(1)] = cljs.core.first((state_17843[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__17889 = state_17843;
state_17843 = G__17889;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
cljs$core$async$state_machine__15823__auto__ = function(state_17843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15823__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15823__auto____1.call(this,state_17843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15823__auto____0;
cljs$core$async$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15823__auto____1;
return cljs$core$async$state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_17870 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_17870[(6)] = c__15897__auto___17872);

return statearr_17870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

