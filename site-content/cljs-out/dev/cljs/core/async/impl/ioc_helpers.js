// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_.call(null,(state_array[(1)]),new cljs.core.Keyword(null,"finished","finished",-1018867731));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers11958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers11958 = (function (f,meta11959){
this.f = f;
this.meta11959 = meta11959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers11958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11960,meta11959__$1){
var self__ = this;
var _11960__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers11958(self__.f,meta11959__$1));
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers11958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11960){
var self__ = this;
var _11960__$1 = this;
return self__.meta11959;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers11958.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers11958.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers11958.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers11958.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers11958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta11959","meta11959",-1453648840,null)], null);
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers11958.cljs$lang$type = true);

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers11958.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers11958");

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers11958.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers11958");
}));

/**
 * Positional factory function for cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers11958.
 */
cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers11958 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers11958(f__$1,meta11959){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers11958(f__$1,meta11959));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers11958(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,(0)).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e11961){if((e11961 instanceof Object)){
var ex = e11961;
cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,(6)));

throw ex;
} else {
throw e11961;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__5823__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){
var statearr_11962_11964 = state;
(statearr_11962_11964[(2)] = x);

(statearr_11962_11964[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_11963_11965 = state;
(statearr_11963_11965[(2)] = cljs.core.deref.call(null,cb));

(statearr_11963_11965[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){
var statearr_11966_11968 = state;
(statearr_11966_11968[(2)] = ret_val);

(statearr_11966_11968[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_11967_11969 = state;
(statearr_11967_11969[(2)] = cljs.core.deref.call(null,cb));

(statearr_11967_11969[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[(6)]);
if((value == null)){
} else {
cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (_){
return null;
})));
}

cljs.core.async.impl.protocols.close_BANG_.call(null,c);

return c;
});

//# sourceMappingURL=ioc_helpers.js.map
