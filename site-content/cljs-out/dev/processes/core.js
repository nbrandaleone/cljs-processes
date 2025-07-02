// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('processes.core');
goog.require('cljs.core');
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
return (el.className = clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [processes.core.nameclass,name], null)));
});
processes.core.gen_ui = (function processes$core$gen_ui(){
var arr = [];
var y_17279 = (0);
while(true){
if((y_17279 < processes.core.height)){
arr.push("<tr>");

var x_17280 = (0);
while(true){
if((x_17280 < processes.core.width)){
arr.push("<td id='cell-",(x_17280 + (y_17279 * processes.core.width)),"'>0</td>");

var G__17281 = (x_17280 + (1));
x_17280 = G__17281;
continue;
} else {
}
break;
}

arr.push("</tr>");

var G__17282 = (y_17279 + (1));
y_17279 = G__17282;
continue;
} else {
}
break;
}

return processes.core.set_html_BANG_.call(null,processes.core.by_id.call(null,"big-table"),arr.join(""));
});
processes.core.gen_ui.call(null);
processes.core.group = cljs.core.atom.call(null,(0));
processes.core.render_BANG_ = (function processes$core$render_BANG_(queue){
var g = ["group",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processes.core.group))].join('');
var seq__17283_17299 = cljs.core.seq.call(null,queue);
var chunk__17284_17300 = null;
var count__17285_17301 = (0);
var i__17286_17302 = (0);
while(true){
if((i__17286_17302 < count__17285_17301)){
var vec__17293_17303 = cljs.core._nth.call(null,chunk__17284_17300,i__17286_17302);
var idx_17304 = cljs.core.nth.call(null,vec__17293_17303,(0),null);
var v_17305 = cljs.core.nth.call(null,vec__17293_17303,(1),null);
var cell_17306 = processes.core.by_id.call(null,["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_17304)].join(''));
processes.core.set_html_BANG_.call(null,cell_17306,v_17305);

processes.core.set_class_BANG_.call(null,cell_17306,g);


var G__17307 = seq__17283_17299;
var G__17308 = chunk__17284_17300;
var G__17309 = count__17285_17301;
var G__17310 = (i__17286_17302 + (1));
seq__17283_17299 = G__17307;
chunk__17284_17300 = G__17308;
count__17285_17301 = G__17309;
i__17286_17302 = G__17310;
continue;
} else {
var temp__5825__auto___17311 = cljs.core.seq.call(null,seq__17283_17299);
if(temp__5825__auto___17311){
var seq__17283_17312__$1 = temp__5825__auto___17311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17283_17312__$1)){
var c__4556__auto___17313 = cljs.core.chunk_first.call(null,seq__17283_17312__$1);
var G__17314 = cljs.core.chunk_rest.call(null,seq__17283_17312__$1);
var G__17315 = c__4556__auto___17313;
var G__17316 = cljs.core.count.call(null,c__4556__auto___17313);
var G__17317 = (0);
seq__17283_17299 = G__17314;
chunk__17284_17300 = G__17315;
count__17285_17301 = G__17316;
i__17286_17302 = G__17317;
continue;
} else {
var vec__17296_17318 = cljs.core.first.call(null,seq__17283_17312__$1);
var idx_17319 = cljs.core.nth.call(null,vec__17296_17318,(0),null);
var v_17320 = cljs.core.nth.call(null,vec__17296_17318,(1),null);
var cell_17321 = processes.core.by_id.call(null,["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_17319)].join(''));
processes.core.set_html_BANG_.call(null,cell_17321,v_17320);

processes.core.set_class_BANG_.call(null,cell_17321,g);


var G__17322 = cljs.core.next.call(null,seq__17283_17312__$1);
var G__17323 = null;
var G__17324 = (0);
var G__17325 = (0);
seq__17283_17299 = G__17322;
chunk__17284_17300 = G__17323;
count__17285_17301 = G__17324;
i__17286_17302 = G__17325;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.call(null,processes.core.group,(function (g__$1){
return cljs.core.mod.call(null,(g__$1 + (1)),(5));
}));
});
processes.core.render_loop = (function processes$core$render_loop(rate){
var in$ = cljs.core.async.chan.call(null,(1000));
var c__17201__auto___17393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17202__auto__ = (function (){var switch__17178__auto__ = (function (state_17370){
var state_val_17371 = (state_17370[(1)]);
if((state_val_17371 === (7))){
var inst_17366 = (state_17370[(2)]);
var state_17370__$1 = state_17370;
var statearr_17372_17394 = state_17370__$1;
(statearr_17372_17394[(2)] = inst_17366);

(statearr_17372_17394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17371 === (1))){
var inst_17326 = cljs.core.async.timeout.call(null,rate);
var inst_17327 = cljs.core.PersistentVector.EMPTY;
var inst_17328 = inst_17326;
var inst_17329 = inst_17327;
var state_17370__$1 = (function (){var statearr_17373 = state_17370;
(statearr_17373[(7)] = inst_17328);

(statearr_17373[(8)] = inst_17329);

return statearr_17373;
})();
var statearr_17374_17395 = state_17370__$1;
(statearr_17374_17395[(2)] = null);

(statearr_17374_17395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17371 === (4))){
var inst_17344 = (state_17370[(9)]);
var inst_17328 = (state_17370[(7)]);
var inst_17340 = (state_17370[(10)]);
var inst_17338 = (state_17370[(2)]);
var inst_17339 = cljs.core.nth.call(null,inst_17338,(0),null);
var inst_17340__$1 = cljs.core.nth.call(null,inst_17338,(1),null);
var inst_17344__$1 = cljs.core._EQ_;
var inst_17345 = inst_17344__$1.call(null,inst_17328,inst_17340__$1);
var state_17370__$1 = (function (){var statearr_17375 = state_17370;
(statearr_17375[(11)] = inst_17339);

(statearr_17375[(10)] = inst_17340__$1);

(statearr_17375[(9)] = inst_17344__$1);

return statearr_17375;
})();
if(cljs.core.truth_(inst_17345)){
var statearr_17376_17396 = state_17370__$1;
(statearr_17376_17396[(1)] = (5));

} else {
var statearr_17377_17397 = state_17370__$1;
(statearr_17377_17397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17371 === (6))){
var inst_17344 = (state_17370[(9)]);
var inst_17340 = (state_17370[(10)]);
var inst_17355 = inst_17344.call(null,in$,inst_17340);
var state_17370__$1 = state_17370;
if(cljs.core.truth_(inst_17355)){
var statearr_17378_17398 = state_17370__$1;
(statearr_17378_17398[(1)] = (9));

} else {
var statearr_17379_17399 = state_17370__$1;
(statearr_17379_17399[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17371 === (3))){
var inst_17368 = (state_17370[(2)]);
var state_17370__$1 = state_17370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17370__$1,inst_17368);
} else {
if((state_val_17371 === (2))){
var inst_17328 = (state_17370[(7)]);
var inst_17334 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17335 = [inst_17328,in$];
var inst_17336 = (new cljs.core.PersistentVector(null,2,(5),inst_17334,inst_17335,null));
var state_17370__$1 = state_17370;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17370__$1,(4),inst_17336);
} else {
if((state_val_17371 === (11))){
var inst_17364 = (state_17370[(2)]);
var state_17370__$1 = state_17370;
var statearr_17381_17400 = state_17370__$1;
(statearr_17381_17400[(2)] = inst_17364);

(statearr_17381_17400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17371 === (9))){
var inst_17329 = (state_17370[(8)]);
var inst_17339 = (state_17370[(11)]);
var inst_17328 = (state_17370[(7)]);
var inst_17357 = cljs.core.conj.call(null,inst_17329,inst_17339);
var tmp17380 = inst_17328;
var inst_17328__$1 = tmp17380;
var inst_17329__$1 = inst_17357;
var state_17370__$1 = (function (){var statearr_17382 = state_17370;
(statearr_17382[(7)] = inst_17328__$1);

(statearr_17382[(8)] = inst_17329__$1);

return statearr_17382;
})();
var statearr_17383_17401 = state_17370__$1;
(statearr_17383_17401[(2)] = null);

(statearr_17383_17401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17371 === (5))){
var inst_17329 = (state_17370[(8)]);
var inst_17347 = processes.core.render_BANG_.call(null,inst_17329);
var inst_17348 = cljs.core.async.timeout.call(null,(0));
var state_17370__$1 = (function (){var statearr_17384 = state_17370;
(statearr_17384[(12)] = inst_17347);

return statearr_17384;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17370__$1,(8),inst_17348);
} else {
if((state_val_17371 === (10))){
var inst_17340 = (state_17370[(10)]);
var inst_17360 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17340)].join('');
var inst_17361 = (new Error(inst_17360));
var inst_17362 = (function(){throw inst_17361})();
var state_17370__$1 = state_17370;
var statearr_17385_17402 = state_17370__$1;
(statearr_17385_17402[(2)] = inst_17362);

(statearr_17385_17402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17371 === (8))){
var inst_17350 = (state_17370[(2)]);
var inst_17351 = cljs.core.async.timeout.call(null,rate);
var inst_17352 = cljs.core.PersistentVector.EMPTY;
var inst_17328 = inst_17351;
var inst_17329 = inst_17352;
var state_17370__$1 = (function (){var statearr_17386 = state_17370;
(statearr_17386[(13)] = inst_17350);

(statearr_17386[(7)] = inst_17328);

(statearr_17386[(8)] = inst_17329);

return statearr_17386;
})();
var statearr_17387_17403 = state_17370__$1;
(statearr_17387_17403[(2)] = null);

(statearr_17387_17403[(1)] = (2));


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
var processes$core$render_loop_$_state_machine__17179__auto__ = null;
var processes$core$render_loop_$_state_machine__17179__auto____0 = (function (){
var statearr_17388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17388[(0)] = processes$core$render_loop_$_state_machine__17179__auto__);

(statearr_17388[(1)] = (1));

return statearr_17388;
});
var processes$core$render_loop_$_state_machine__17179__auto____1 = (function (state_17370){
while(true){
var ret_value__17180__auto__ = (function (){try{while(true){
var result__17181__auto__ = switch__17178__auto__.call(null,state_17370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17181__auto__;
}
break;
}
}catch (e17389){var ex__17182__auto__ = e17389;
var statearr_17390_17404 = state_17370;
(statearr_17390_17404[(2)] = ex__17182__auto__);


if(cljs.core.seq.call(null,(state_17370[(4)]))){
var statearr_17391_17405 = state_17370;
(statearr_17391_17405[(1)] = cljs.core.first.call(null,(state_17370[(4)])));

} else {
throw ex__17182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17406 = state_17370;
state_17370 = G__17406;
continue;
} else {
return ret_value__17180__auto__;
}
break;
}
});
processes$core$render_loop_$_state_machine__17179__auto__ = function(state_17370){
switch(arguments.length){
case 0:
return processes$core$render_loop_$_state_machine__17179__auto____0.call(this);
case 1:
return processes$core$render_loop_$_state_machine__17179__auto____1.call(this,state_17370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
processes$core$render_loop_$_state_machine__17179__auto__.cljs$core$IFn$_invoke$arity$0 = processes$core$render_loop_$_state_machine__17179__auto____0;
processes$core$render_loop_$_state_machine__17179__auto__.cljs$core$IFn$_invoke$arity$1 = processes$core$render_loop_$_state_machine__17179__auto____1;
return processes$core$render_loop_$_state_machine__17179__auto__;
})()
})();
var state__17203__auto__ = (function (){var statearr_17392 = f__17202__auto__.call(null);
(statearr_17392[(6)] = c__17201__auto___17393);

return statearr_17392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17203__auto__);
}));


return in$;
});
var render_17443 = processes.core.render_loop.call(null,(40));
var i_17444 = (0);
while(true){
if((i_17444 < (processes.core.width * processes.core.height))){
var c__17201__auto___17445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (i_17444,c__17201__auto___17445,render_17443){
return (function (){
var f__17202__auto__ = (function (){var switch__17178__auto__ = ((function (i_17444,c__17201__auto___17445,render_17443){
return (function (state_17428){
var state_val_17429 = (state_17428[(1)]);
if((state_val_17429 === (1))){
var state_17428__$1 = state_17428;
var statearr_17430_17446 = state_17428__$1;
(statearr_17430_17446[(2)] = null);

(statearr_17430_17446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (2))){
var state_17428__$1 = state_17428;
var statearr_17431_17447 = state_17428__$1;
(statearr_17431_17447[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (3))){
var inst_17426 = (state_17428[(2)]);
var state_17428__$1 = state_17428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17428__$1,inst_17426);
} else {
if((state_val_17429 === (4))){
var inst_17409 = cljs.core.rand_int.call(null,(10000));
var inst_17410 = ((1000) + inst_17409);
var inst_17411 = cljs.core.async.timeout.call(null,inst_17410);
var state_17428__$1 = state_17428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17428__$1,(7),inst_17411);
} else {
if((state_val_17429 === (5))){
var state_17428__$1 = state_17428;
var statearr_17433_17448 = state_17428__$1;
(statearr_17433_17448[(2)] = null);

(statearr_17433_17448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (6))){
var inst_17424 = (state_17428[(2)]);
var state_17428__$1 = state_17428;
var statearr_17434_17449 = state_17428__$1;
(statearr_17434_17449[(2)] = inst_17424);

(statearr_17434_17449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (7))){
var inst_17413 = (state_17428[(2)]);
var inst_17414 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17415 = cljs.core.rand_int.call(null,(10000));
var inst_17416 = cljs.core.rand_int.call(null,(10));
var inst_17417 = [inst_17415,inst_17416];
var inst_17418 = (new cljs.core.PersistentVector(null,2,(5),inst_17414,inst_17417,null));
var state_17428__$1 = (function (){var statearr_17435 = state_17428;
(statearr_17435[(7)] = inst_17413);

return statearr_17435;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17428__$1,(8),render_17443,inst_17418);
} else {
if((state_val_17429 === (8))){
var inst_17420 = (state_17428[(2)]);
var state_17428__$1 = (function (){var statearr_17436 = state_17428;
(statearr_17436[(8)] = inst_17420);

return statearr_17436;
})();
var statearr_17437_17450 = state_17428__$1;
(statearr_17437_17450[(2)] = null);

(statearr_17437_17450[(1)] = (2));


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
});})(i_17444,c__17201__auto___17445,render_17443))
;
return ((function (i_17444,switch__17178__auto__,c__17201__auto___17445,render_17443){
return (function() {
var processes$core$state_machine__17179__auto__ = null;
var processes$core$state_machine__17179__auto____0 = (function (){
var statearr_17438 = [null,null,null,null,null,null,null,null,null];
(statearr_17438[(0)] = processes$core$state_machine__17179__auto__);

(statearr_17438[(1)] = (1));

return statearr_17438;
});
var processes$core$state_machine__17179__auto____1 = (function (state_17428){
while(true){
var ret_value__17180__auto__ = (function (){try{while(true){
var result__17181__auto__ = switch__17178__auto__.call(null,state_17428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17181__auto__;
}
break;
}
}catch (e17439){var ex__17182__auto__ = e17439;
var statearr_17440_17451 = state_17428;
(statearr_17440_17451[(2)] = ex__17182__auto__);


if(cljs.core.seq.call(null,(state_17428[(4)]))){
var statearr_17441_17452 = state_17428;
(statearr_17441_17452[(1)] = cljs.core.first.call(null,(state_17428[(4)])));

} else {
throw ex__17182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17453 = state_17428;
state_17428 = G__17453;
continue;
} else {
return ret_value__17180__auto__;
}
break;
}
});
processes$core$state_machine__17179__auto__ = function(state_17428){
switch(arguments.length){
case 0:
return processes$core$state_machine__17179__auto____0.call(this);
case 1:
return processes$core$state_machine__17179__auto____1.call(this,state_17428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
processes$core$state_machine__17179__auto__.cljs$core$IFn$_invoke$arity$0 = processes$core$state_machine__17179__auto____0;
processes$core$state_machine__17179__auto__.cljs$core$IFn$_invoke$arity$1 = processes$core$state_machine__17179__auto____1;
return processes$core$state_machine__17179__auto__;
})()
;})(i_17444,switch__17178__auto__,c__17201__auto___17445,render_17443))
})();
var state__17203__auto__ = (function (){var statearr_17442 = f__17202__auto__.call(null);
(statearr_17442[(6)] = c__17201__auto___17445);

return statearr_17442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17203__auto__);
});})(i_17444,c__17201__auto___17445,render_17443))
);


var G__17454 = (i_17444 + (1));
i_17444 = G__17454;
continue;
} else {
}
break;
}
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/processes/core.cljs. Go ahead and edit it and see reloading in action.");
if((typeof processes !== 'undefined') && (typeof processes.core !== 'undefined') && (typeof processes.core.app_state !== 'undefined')){
} else {
processes.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
processes.core.on_js_reload = (function processes$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map
