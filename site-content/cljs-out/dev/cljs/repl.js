// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18415){
var map__18416 = p__18415;
var map__18416__$1 = (((((!((map__18416 == null))))?(((((map__18416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18416):map__18416);
var m = map__18416__$1;
var n = cljs.core.get.call(null,map__18416__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18416__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18418_18450 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18419_18451 = null;
var count__18420_18452 = (0);
var i__18421_18453 = (0);
while(true){
if((i__18421_18453 < count__18420_18452)){
var f_18454 = cljs.core._nth.call(null,chunk__18419_18451,i__18421_18453);
cljs.core.println.call(null,"  ",f_18454);


var G__18455 = seq__18418_18450;
var G__18456 = chunk__18419_18451;
var G__18457 = count__18420_18452;
var G__18458 = (i__18421_18453 + (1));
seq__18418_18450 = G__18455;
chunk__18419_18451 = G__18456;
count__18420_18452 = G__18457;
i__18421_18453 = G__18458;
continue;
} else {
var temp__5825__auto___18459 = cljs.core.seq.call(null,seq__18418_18450);
if(temp__5825__auto___18459){
var seq__18418_18460__$1 = temp__5825__auto___18459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18418_18460__$1)){
var c__4556__auto___18461 = cljs.core.chunk_first.call(null,seq__18418_18460__$1);
var G__18462 = cljs.core.chunk_rest.call(null,seq__18418_18460__$1);
var G__18463 = c__4556__auto___18461;
var G__18464 = cljs.core.count.call(null,c__4556__auto___18461);
var G__18465 = (0);
seq__18418_18450 = G__18462;
chunk__18419_18451 = G__18463;
count__18420_18452 = G__18464;
i__18421_18453 = G__18465;
continue;
} else {
var f_18466 = cljs.core.first.call(null,seq__18418_18460__$1);
cljs.core.println.call(null,"  ",f_18466);


var G__18467 = cljs.core.next.call(null,seq__18418_18460__$1);
var G__18468 = null;
var G__18469 = (0);
var G__18470 = (0);
seq__18418_18450 = G__18467;
chunk__18419_18451 = G__18468;
count__18420_18452 = G__18469;
i__18421_18453 = G__18470;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18471 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18471);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18471)))?cljs.core.second.call(null,arglists_18471):arglists_18471));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18422_18472 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18423_18473 = null;
var count__18424_18474 = (0);
var i__18425_18475 = (0);
while(true){
if((i__18425_18475 < count__18424_18474)){
var vec__18436_18476 = cljs.core._nth.call(null,chunk__18423_18473,i__18425_18475);
var name_18477 = cljs.core.nth.call(null,vec__18436_18476,(0),null);
var map__18439_18478 = cljs.core.nth.call(null,vec__18436_18476,(1),null);
var map__18439_18479__$1 = (((((!((map__18439_18478 == null))))?(((((map__18439_18478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18439_18478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18439_18478):map__18439_18478);
var doc_18480 = cljs.core.get.call(null,map__18439_18479__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18481 = cljs.core.get.call(null,map__18439_18479__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18477);

cljs.core.println.call(null," ",arglists_18481);

if(cljs.core.truth_(doc_18480)){
cljs.core.println.call(null," ",doc_18480);
} else {
}


var G__18482 = seq__18422_18472;
var G__18483 = chunk__18423_18473;
var G__18484 = count__18424_18474;
var G__18485 = (i__18425_18475 + (1));
seq__18422_18472 = G__18482;
chunk__18423_18473 = G__18483;
count__18424_18474 = G__18484;
i__18425_18475 = G__18485;
continue;
} else {
var temp__5825__auto___18486 = cljs.core.seq.call(null,seq__18422_18472);
if(temp__5825__auto___18486){
var seq__18422_18487__$1 = temp__5825__auto___18486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18422_18487__$1)){
var c__4556__auto___18488 = cljs.core.chunk_first.call(null,seq__18422_18487__$1);
var G__18489 = cljs.core.chunk_rest.call(null,seq__18422_18487__$1);
var G__18490 = c__4556__auto___18488;
var G__18491 = cljs.core.count.call(null,c__4556__auto___18488);
var G__18492 = (0);
seq__18422_18472 = G__18489;
chunk__18423_18473 = G__18490;
count__18424_18474 = G__18491;
i__18425_18475 = G__18492;
continue;
} else {
var vec__18441_18493 = cljs.core.first.call(null,seq__18422_18487__$1);
var name_18494 = cljs.core.nth.call(null,vec__18441_18493,(0),null);
var map__18444_18495 = cljs.core.nth.call(null,vec__18441_18493,(1),null);
var map__18444_18496__$1 = (((((!((map__18444_18495 == null))))?(((((map__18444_18495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18444_18495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18444_18495):map__18444_18495);
var doc_18497 = cljs.core.get.call(null,map__18444_18496__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18498 = cljs.core.get.call(null,map__18444_18496__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18494);

cljs.core.println.call(null," ",arglists_18498);

if(cljs.core.truth_(doc_18497)){
cljs.core.println.call(null," ",doc_18497);
} else {
}


var G__18499 = cljs.core.next.call(null,seq__18422_18487__$1);
var G__18500 = null;
var G__18501 = (0);
var G__18502 = (0);
seq__18422_18472 = G__18499;
chunk__18423_18473 = G__18500;
count__18424_18474 = G__18501;
i__18425_18475 = G__18502;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5825__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.call(null,"Spec");

var seq__18446 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18447 = null;
var count__18448 = (0);
var i__18449 = (0);
while(true){
if((i__18449 < count__18448)){
var role = cljs.core._nth.call(null,chunk__18447,i__18449);
var temp__5825__auto___18503__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5825__auto___18503__$1)){
var spec_18504 = temp__5825__auto___18503__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18504));
} else {
}


var G__18505 = seq__18446;
var G__18506 = chunk__18447;
var G__18507 = count__18448;
var G__18508 = (i__18449 + (1));
seq__18446 = G__18505;
chunk__18447 = G__18506;
count__18448 = G__18507;
i__18449 = G__18508;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq.call(null,seq__18446);
if(temp__5825__auto____$1){
var seq__18446__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18446__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18446__$1);
var G__18509 = cljs.core.chunk_rest.call(null,seq__18446__$1);
var G__18510 = c__4556__auto__;
var G__18511 = cljs.core.count.call(null,c__4556__auto__);
var G__18512 = (0);
seq__18446 = G__18509;
chunk__18447 = G__18510;
count__18448 = G__18511;
i__18449 = G__18512;
continue;
} else {
var role = cljs.core.first.call(null,seq__18446__$1);
var temp__5825__auto___18513__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5825__auto___18513__$2)){
var spec_18514 = temp__5825__auto___18513__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18514));
} else {
}


var G__18515 = cljs.core.next.call(null,seq__18446__$1);
var G__18516 = null;
var G__18517 = (0);
var G__18518 = (0);
seq__18446 = G__18515;
chunk__18447 = G__18516;
count__18448 = G__18517;
i__18449 = G__18518;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5825__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5825__auto__)){
var msg = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5825__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5825__auto__)){
var ed = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__18519 = cljs.core.conj.call(null,via,t);
var G__18520 = cljs.core.ex_cause.call(null,t);
via = G__18519;
t = G__18520;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5825__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5825__auto__)){
var root_msg = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5825__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5825__auto__)){
var data = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5825__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5825__auto__)){
var phase = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18523 = datafied_throwable;
var map__18523__$1 = (((((!((map__18523 == null))))?(((((map__18523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18523):map__18523);
var via = cljs.core.get.call(null,map__18523__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__18523__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__18523__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18524 = cljs.core.last.call(null,via);
var map__18524__$1 = (((((!((map__18524 == null))))?(((((map__18524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18524):map__18524);
var type = cljs.core.get.call(null,map__18524__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__18524__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__18524__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18525 = data;
var map__18525__$1 = (((((!((map__18525 == null))))?(((((map__18525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18525):map__18525);
var problems = cljs.core.get.call(null,map__18525__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__18525__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__18525__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18526 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__18526__$1 = (((((!((map__18526 == null))))?(((((map__18526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18526):map__18526);
var top_data = map__18526__$1;
var source = cljs.core.get.call(null,map__18526__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__18531 = phase;
var G__18531__$1 = (((G__18531 instanceof cljs.core.Keyword))?G__18531.fqn:null);
switch (G__18531__$1) {
case "read-source":
var map__18532 = data;
var map__18532__$1 = (((((!((map__18532 == null))))?(((((map__18532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18532):map__18532);
var line = cljs.core.get.call(null,map__18532__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18532__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18534 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__18534__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18534,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18534);
var G__18534__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18534__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18534__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18534__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18534__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18535 = top_data;
var G__18535__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18535,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18535);
var G__18535__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18535__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18535__$1);
var G__18535__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18535__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18535__$2);
var G__18535__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18535__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18535__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18535__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18535__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18536 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18536,(0),null);
var method = cljs.core.nth.call(null,vec__18536,(1),null);
var file = cljs.core.nth.call(null,vec__18536,(2),null);
var line = cljs.core.nth.call(null,vec__18536,(3),null);
var G__18539 = top_data;
var G__18539__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__18539,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18539);
var G__18539__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__18539__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18539__$1);
var G__18539__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__18539__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18539__$2);
var G__18539__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18539__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18539__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18539__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18539__$4;
}

break;
case "execution":
var vec__18540 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18540,(0),null);
var method = cljs.core.nth.call(null,vec__18540,(1),null);
var file = cljs.core.nth.call(null,vec__18540,(2),null);
var line = cljs.core.nth.call(null,vec__18540,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__18522_SHARP_){
var or__4126__auto__ = (p1__18522_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__18522_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__18543 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18543__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__18543,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18543);
var G__18543__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18543__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18543__$1);
var G__18543__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__18543__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18543__$2);
var G__18543__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__18543__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18543__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18543__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18543__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18531__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18547){
var map__18548 = p__18547;
var map__18548__$1 = (((((!((map__18548 == null))))?(((((map__18548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18548):map__18548);
var triage_data = map__18548__$1;
var phase = cljs.core.get.call(null,map__18548__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__18548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__18548__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18548__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__18548__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__18548__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__18548__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__18548__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18550 = phase;
var G__18550__$1 = (((G__18550 instanceof cljs.core.Keyword))?G__18550.fqn:null);
switch (G__18550__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18551_18560 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18552_18561 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18553_18562 = true;
var _STAR_print_fn_STAR__temp_val__18554_18563 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18553_18562);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18554_18563);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__18545_SHARP_){
return cljs.core.dissoc.call(null,p1__18545_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18552_18561);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18551_18560);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18555_18564 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18556_18565 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18557_18566 = true;
var _STAR_print_fn_STAR__temp_val__18558_18567 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18557_18566);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18558_18567);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__18546_SHARP_){
return cljs.core.dissoc.call(null,p1__18546_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18556_18565);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18555_18564);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18550__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
