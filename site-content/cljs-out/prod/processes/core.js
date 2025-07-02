// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('processes.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('clojure.string');
processes.core.width = (100);
processes.core.height = (100);
processes.core.by_id = (function processes$core$by_id(id){
return document.getElementById(id);
});
processes.core.set_html_BANG_ = (function processes$core$set_html_BANG_(el,s){
return (el.innerHTML = s);
});
processes.core.set_class_BANG_ = (function processes$core$set_class_BANG_(el,name){
return (el.className = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [processes.core.nameclass,name], null)));
});
processes.core.gen_ui = (function processes$core$gen_ui(){
var arr = [];
var y_17944 = (0);
while(true){
if((y_17944 < processes.core.height)){
arr.push("<tr>");

var x_17945 = (0);
while(true){
if((x_17945 < processes.core.width)){
arr.push("<td id='cell-",(x_17945 + (y_17944 * processes.core.width)),"'>0</td>");

var G__17946 = (x_17945 + (1));
x_17945 = G__17946;
continue;
} else {
}
break;
}

arr.push("</tr>");

var G__17947 = (y_17944 + (1));
y_17944 = G__17947;
continue;
} else {
}
break;
}

return processes.core.set_html_BANG_(processes.core.by_id("big-table"),arr.join(""));
});
processes.core.gen_ui();
processes.core.group = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
processes.core.render_BANG_ = (function processes$core$render_BANG_(queue){
var g = ["group",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(processes.core.group))].join('');
var seq__17948_17964 = cljs.core.seq(queue);
var chunk__17949_17965 = null;
var count__17950_17966 = (0);
var i__17951_17967 = (0);
while(true){
if((i__17951_17967 < count__17950_17966)){
var vec__17958_17968 = chunk__17949_17965.cljs$core$IIndexed$_nth$arity$2(null,i__17951_17967);
var idx_17969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17958_17968,(0),null);
var v_17970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17958_17968,(1),null);
var cell_17971 = processes.core.by_id(["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_17969)].join(''));
processes.core.set_html_BANG_(cell_17971,v_17970);

processes.core.set_class_BANG_(cell_17971,g);


var G__17972 = seq__17948_17964;
var G__17973 = chunk__17949_17965;
var G__17974 = count__17950_17966;
var G__17975 = (i__17951_17967 + (1));
seq__17948_17964 = G__17972;
chunk__17949_17965 = G__17973;
count__17950_17966 = G__17974;
i__17951_17967 = G__17975;
continue;
} else {
var temp__5825__auto___17976 = cljs.core.seq(seq__17948_17964);
if(temp__5825__auto___17976){
var seq__17948_17977__$1 = temp__5825__auto___17976;
if(cljs.core.chunked_seq_QMARK_(seq__17948_17977__$1)){
var c__4556__auto___17978 = cljs.core.chunk_first(seq__17948_17977__$1);
var G__17979 = cljs.core.chunk_rest(seq__17948_17977__$1);
var G__17980 = c__4556__auto___17978;
var G__17981 = cljs.core.count(c__4556__auto___17978);
var G__17982 = (0);
seq__17948_17964 = G__17979;
chunk__17949_17965 = G__17980;
count__17950_17966 = G__17981;
i__17951_17967 = G__17982;
continue;
} else {
var vec__17961_17983 = cljs.core.first(seq__17948_17977__$1);
var idx_17984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17961_17983,(0),null);
var v_17985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17961_17983,(1),null);
var cell_17986 = processes.core.by_id(["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_17984)].join(''));
processes.core.set_html_BANG_(cell_17986,v_17985);

processes.core.set_class_BANG_(cell_17986,g);


var G__17987 = cljs.core.next(seq__17948_17977__$1);
var G__17988 = null;
var G__17989 = (0);
var G__17990 = (0);
seq__17948_17964 = G__17987;
chunk__17949_17965 = G__17988;
count__17950_17966 = G__17989;
i__17951_17967 = G__17990;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(processes.core.group,(function (g__$1){
return cljs.core.mod((g__$1 + (1)),(5));
}));
});
processes.core.render_loop = (function processes$core$render_loop(rate){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1000));
var c__15897__auto___18058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = (function (state_18035){
var state_val_18036 = (state_18035[(1)]);
if((state_val_18036 === (7))){
var inst_18031 = (state_18035[(2)]);
var state_18035__$1 = state_18035;
var statearr_18037_18059 = state_18035__$1;
(statearr_18037_18059[(2)] = inst_18031);

(statearr_18037_18059[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18036 === (1))){
var inst_17991 = cljs.core.async.timeout(rate);
var inst_17992 = cljs.core.PersistentVector.EMPTY;
var inst_17993 = inst_17991;
var inst_17994 = inst_17992;
var state_18035__$1 = (function (){var statearr_18038 = state_18035;
(statearr_18038[(7)] = inst_17993);

(statearr_18038[(8)] = inst_17994);

return statearr_18038;
})();
var statearr_18039_18060 = state_18035__$1;
(statearr_18039_18060[(2)] = null);

(statearr_18039_18060[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18036 === (4))){
var inst_18009 = (state_18035[(9)]);
var inst_17993 = (state_18035[(7)]);
var inst_18005 = (state_18035[(10)]);
var inst_18003 = (state_18035[(2)]);
var inst_18004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18003,(0),null);
var inst_18005__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18003,(1),null);
var inst_18009__$1 = cljs.core._EQ_;
var inst_18010 = (inst_18009__$1.cljs$core$IFn$_invoke$arity$2 ? inst_18009__$1.cljs$core$IFn$_invoke$arity$2(inst_17993,inst_18005__$1) : inst_18009__$1.call(null,inst_17993,inst_18005__$1));
var state_18035__$1 = (function (){var statearr_18040 = state_18035;
(statearr_18040[(11)] = inst_18004);

(statearr_18040[(10)] = inst_18005__$1);

(statearr_18040[(9)] = inst_18009__$1);

return statearr_18040;
})();
if(cljs.core.truth_(inst_18010)){
var statearr_18041_18061 = state_18035__$1;
(statearr_18041_18061[(1)] = (5));

} else {
var statearr_18042_18062 = state_18035__$1;
(statearr_18042_18062[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18036 === (6))){
var inst_18009 = (state_18035[(9)]);
var inst_18005 = (state_18035[(10)]);
var inst_18020 = (inst_18009.cljs$core$IFn$_invoke$arity$2 ? inst_18009.cljs$core$IFn$_invoke$arity$2(in$,inst_18005) : inst_18009.call(null,in$,inst_18005));
var state_18035__$1 = state_18035;
if(cljs.core.truth_(inst_18020)){
var statearr_18043_18063 = state_18035__$1;
(statearr_18043_18063[(1)] = (9));

} else {
var statearr_18044_18064 = state_18035__$1;
(statearr_18044_18064[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18036 === (3))){
var inst_18033 = (state_18035[(2)]);
var state_18035__$1 = state_18035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18035__$1,inst_18033);
} else {
if((state_val_18036 === (2))){
var inst_17993 = (state_18035[(7)]);
var inst_17999 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18000 = [inst_17993,in$];
var inst_18001 = (new cljs.core.PersistentVector(null,2,(5),inst_17999,inst_18000,null));
var state_18035__$1 = state_18035;
return cljs.core.async.ioc_alts_BANG_(state_18035__$1,(4),inst_18001);
} else {
if((state_val_18036 === (11))){
var inst_18029 = (state_18035[(2)]);
var state_18035__$1 = state_18035;
var statearr_18046_18065 = state_18035__$1;
(statearr_18046_18065[(2)] = inst_18029);

(statearr_18046_18065[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18036 === (9))){
var inst_17994 = (state_18035[(8)]);
var inst_18004 = (state_18035[(11)]);
var inst_17993 = (state_18035[(7)]);
var inst_18022 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_17994,inst_18004);
var tmp18045 = inst_17993;
var inst_17993__$1 = tmp18045;
var inst_17994__$1 = inst_18022;
var state_18035__$1 = (function (){var statearr_18047 = state_18035;
(statearr_18047[(7)] = inst_17993__$1);

(statearr_18047[(8)] = inst_17994__$1);

return statearr_18047;
})();
var statearr_18048_18066 = state_18035__$1;
(statearr_18048_18066[(2)] = null);

(statearr_18048_18066[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18036 === (5))){
var inst_17994 = (state_18035[(8)]);
var inst_18012 = processes.core.render_BANG_(inst_17994);
var inst_18013 = cljs.core.async.timeout((0));
var state_18035__$1 = (function (){var statearr_18049 = state_18035;
(statearr_18049[(12)] = inst_18012);

return statearr_18049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18035__$1,(8),inst_18013);
} else {
if((state_val_18036 === (10))){
var inst_18005 = (state_18035[(10)]);
var inst_18025 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18005)].join('');
var inst_18026 = (new Error(inst_18025));
var inst_18027 = (function(){throw inst_18026})();
var state_18035__$1 = state_18035;
var statearr_18050_18067 = state_18035__$1;
(statearr_18050_18067[(2)] = inst_18027);

(statearr_18050_18067[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18036 === (8))){
var inst_18015 = (state_18035[(2)]);
var inst_18016 = cljs.core.async.timeout(rate);
var inst_18017 = cljs.core.PersistentVector.EMPTY;
var inst_17993 = inst_18016;
var inst_17994 = inst_18017;
var state_18035__$1 = (function (){var statearr_18051 = state_18035;
(statearr_18051[(13)] = inst_18015);

(statearr_18051[(7)] = inst_17993);

(statearr_18051[(8)] = inst_17994);

return statearr_18051;
})();
var statearr_18052_18068 = state_18035__$1;
(statearr_18052_18068[(2)] = null);

(statearr_18052_18068[(1)] = (2));


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
var processes$core$render_loop_$_state_machine__15823__auto__ = null;
var processes$core$render_loop_$_state_machine__15823__auto____0 = (function (){
var statearr_18053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18053[(0)] = processes$core$render_loop_$_state_machine__15823__auto__);

(statearr_18053[(1)] = (1));

return statearr_18053;
});
var processes$core$render_loop_$_state_machine__15823__auto____1 = (function (state_18035){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_18035);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e18054){var ex__15826__auto__ = e18054;
var statearr_18055_18069 = state_18035;
(statearr_18055_18069[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_18035[(4)]))){
var statearr_18056_18070 = state_18035;
(statearr_18056_18070[(1)] = cljs.core.first((state_18035[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__18071 = state_18035;
state_18035 = G__18071;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
processes$core$render_loop_$_state_machine__15823__auto__ = function(state_18035){
switch(arguments.length){
case 0:
return processes$core$render_loop_$_state_machine__15823__auto____0.call(this);
case 1:
return processes$core$render_loop_$_state_machine__15823__auto____1.call(this,state_18035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
processes$core$render_loop_$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = processes$core$render_loop_$_state_machine__15823__auto____0;
processes$core$render_loop_$_state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = processes$core$render_loop_$_state_machine__15823__auto____1;
return processes$core$render_loop_$_state_machine__15823__auto__;
})()
})();
var state__15899__auto__ = (function (){var statearr_18057 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_18057[(6)] = c__15897__auto___18058);

return statearr_18057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
}));


return in$;
});
var render_18108 = processes.core.render_loop((40));
var i_18109 = (0);
while(true){
if((i_18109 < (processes.core.width * processes.core.height))){
var c__15897__auto___18110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (i_18109,c__15897__auto___18110,render_18108){
return (function (){
var f__15898__auto__ = (function (){var switch__15822__auto__ = ((function (i_18109,c__15897__auto___18110,render_18108){
return (function (state_18093){
var state_val_18094 = (state_18093[(1)]);
if((state_val_18094 === (1))){
var state_18093__$1 = state_18093;
var statearr_18095_18111 = state_18093__$1;
(statearr_18095_18111[(2)] = null);

(statearr_18095_18111[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (2))){
var state_18093__$1 = state_18093;
var statearr_18096_18112 = state_18093__$1;
(statearr_18096_18112[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (3))){
var inst_18091 = (state_18093[(2)]);
var state_18093__$1 = state_18093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18093__$1,inst_18091);
} else {
if((state_val_18094 === (4))){
var inst_18074 = cljs.core.rand_int((10000));
var inst_18075 = ((1000) + inst_18074);
var inst_18076 = cljs.core.async.timeout(inst_18075);
var state_18093__$1 = state_18093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18093__$1,(7),inst_18076);
} else {
if((state_val_18094 === (5))){
var state_18093__$1 = state_18093;
var statearr_18098_18113 = state_18093__$1;
(statearr_18098_18113[(2)] = null);

(statearr_18098_18113[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (6))){
var inst_18089 = (state_18093[(2)]);
var state_18093__$1 = state_18093;
var statearr_18099_18114 = state_18093__$1;
(statearr_18099_18114[(2)] = inst_18089);

(statearr_18099_18114[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (7))){
var inst_18078 = (state_18093[(2)]);
var inst_18079 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18080 = cljs.core.rand_int((10000));
var inst_18081 = cljs.core.rand_int((10));
var inst_18082 = [inst_18080,inst_18081];
var inst_18083 = (new cljs.core.PersistentVector(null,2,(5),inst_18079,inst_18082,null));
var state_18093__$1 = (function (){var statearr_18100 = state_18093;
(statearr_18100[(7)] = inst_18078);

return statearr_18100;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18093__$1,(8),render_18108,inst_18083);
} else {
if((state_val_18094 === (8))){
var inst_18085 = (state_18093[(2)]);
var state_18093__$1 = (function (){var statearr_18101 = state_18093;
(statearr_18101[(8)] = inst_18085);

return statearr_18101;
})();
var statearr_18102_18115 = state_18093__$1;
(statearr_18102_18115[(2)] = null);

(statearr_18102_18115[(1)] = (2));


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
});})(i_18109,c__15897__auto___18110,render_18108))
;
return ((function (i_18109,switch__15822__auto__,c__15897__auto___18110,render_18108){
return (function() {
var processes$core$state_machine__15823__auto__ = null;
var processes$core$state_machine__15823__auto____0 = (function (){
var statearr_18103 = [null,null,null,null,null,null,null,null,null];
(statearr_18103[(0)] = processes$core$state_machine__15823__auto__);

(statearr_18103[(1)] = (1));

return statearr_18103;
});
var processes$core$state_machine__15823__auto____1 = (function (state_18093){
while(true){
var ret_value__15824__auto__ = (function (){try{while(true){
var result__15825__auto__ = switch__15822__auto__(state_18093);
if(cljs.core.keyword_identical_QMARK_(result__15825__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15825__auto__;
}
break;
}
}catch (e18104){var ex__15826__auto__ = e18104;
var statearr_18105_18116 = state_18093;
(statearr_18105_18116[(2)] = ex__15826__auto__);


if(cljs.core.seq((state_18093[(4)]))){
var statearr_18106_18117 = state_18093;
(statearr_18106_18117[(1)] = cljs.core.first((state_18093[(4)])));

} else {
throw ex__15826__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15824__auto__,cljs.core.cst$kw$recur)){
var G__18118 = state_18093;
state_18093 = G__18118;
continue;
} else {
return ret_value__15824__auto__;
}
break;
}
});
processes$core$state_machine__15823__auto__ = function(state_18093){
switch(arguments.length){
case 0:
return processes$core$state_machine__15823__auto____0.call(this);
case 1:
return processes$core$state_machine__15823__auto____1.call(this,state_18093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
processes$core$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$0 = processes$core$state_machine__15823__auto____0;
processes$core$state_machine__15823__auto__.cljs$core$IFn$_invoke$arity$1 = processes$core$state_machine__15823__auto____1;
return processes$core$state_machine__15823__auto__;
})()
;})(i_18109,switch__15822__auto__,c__15897__auto___18110,render_18108))
})();
var state__15899__auto__ = (function (){var statearr_18107 = (f__15898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15898__auto__.cljs$core$IFn$_invoke$arity$0() : f__15898__auto__.call(null));
(statearr_18107[(6)] = c__15897__auto___18110);

return statearr_18107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15899__auto__);
});})(i_18109,c__15897__auto___18110,render_18108))
);


var G__18119 = (i_18109 + (1));
i_18109 = G__18119;
continue;
} else {
}
break;
}
cljs.core.enable_console_print_BANG_();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This text is printed from src/processes/core.cljs. Go ahead and edit it and see reloading in action."], 0));
if((typeof processes !== 'undefined') && (typeof processes.core !== 'undefined') && (typeof processes.core.app_state !== 'undefined')){
} else {
processes.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"Hello world!"], null));
}
processes.core.on_js_reload = (function processes$core$on_js_reload(){
return null;
});
