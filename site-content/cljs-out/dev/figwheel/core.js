// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__17410_SHARP_){
var k = f.call(null,p1__17410_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__17411){
var vec__17412 = p__17411;
var k = cljs.core.nth.call(null,vec__17412,(0),null);
var v = cljs.core.nth.call(null,vec__17412,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17416 = arguments.length;
var i__4737__auto___17417 = (0);
while(true){
if((i__4737__auto___17417 < len__4736__auto___17416)){
args__4742__auto__.push((arguments[i__4737__auto___17417]));

var G__17418 = (i__4737__auto___17417 + (1));
i__4737__auto___17417 = G__17418;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq17415){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17415));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__17421){
var map__17422 = p__17421;
var map__17422__$1 = (((((!((map__17422 == null))))?(((((map__17422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17422):map__17422);
var message = cljs.core.get.call(null,map__17422__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__17422__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__17420_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17420_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__17419_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__17419_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__17425){
var map__17426 = p__17425;
var map__17426__$1 = (((((!((map__17426 == null))))?(((((map__17426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17426):map__17426);
var message_data = map__17426__$1;
var message = cljs.core.get.call(null,map__17426__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__17426__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__17426__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__17426__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__17428 = file_excerpt;
var map__17428__$1 = (((((!((map__17428 == null))))?(((((map__17428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17428):map__17428);
var start_line = cljs.core.get.call(null,map__17428__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__17428__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__17428__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__17429 = cljs.core.split_with.call(null,(function (p1__17424_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__17424_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__17429,(0),null);
var end = cljs.core.nth.call(null,vec__17429,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__17433){
var map__17434 = p__17433;
var map__17434__$1 = (((((!((map__17434 == null))))?(((((map__17434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17434):map__17434);
var file = cljs.core.get.call(null,map__17434__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__17434__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__17434__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__17436 = "";
var G__17436__$1 = (cljs.core.truth_(file)?[G__17436,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__17436);
var G__17436__$2 = (cljs.core.truth_(line)?[G__17436__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__17436__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__17436__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__17436__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger.call(null,"Figwheel");
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.glog_error = (function figwheel$core$glog_error(log,msg){
return goog.log.error.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_17495 = (new goog.debug.Console());
var G__17443_17496 = c_17495.getFormatter();
goog.object.set(G__17443_17496,"showAbsoluteTime",false);

goog.object.set(G__17443_17496,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_17495);

}

var temp__5825__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5825__auto__)){
var console_instance = temp__5825__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5825__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__17444 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__17444,"data",(function (){var or__4126__auto__ = data;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__17444;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5823__auto__ = e.event_;
if(cljs.core.truth_(temp__5823__auto__)){
var e__$1 = temp__5823__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4115__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4115__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4115__auto__;
}
});

var last_reload_timestamp_17497 = cljs.core.atom.call(null,(0));
var promise_chain_17498 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5823__auto__ = (function (){var temp__5825__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var ts = temp__5825__auto__;
if((cljs.core.deref.call(null,last_reload_timestamp_17497) < ts)){
return ts;
} else {
return false;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var ts = temp__5823__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_17497,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_17498.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__17445 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__17446 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__17446);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__17447 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__17448 = null;
var count__17449 = (0);
var i__17450 = (0);
while(true){
if((i__17450 < count__17449)){
var w = cljs.core._nth.call(null,chunk__17448,i__17450);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__17499 = seq__17447;
var G__17500 = chunk__17448;
var G__17501 = count__17449;
var G__17502 = (i__17450 + (1));
seq__17447 = G__17499;
chunk__17448 = G__17500;
count__17449 = G__17501;
i__17450 = G__17502;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__17447);
if(temp__5825__auto__){
var seq__17447__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17447__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__17447__$1);
var G__17503 = cljs.core.chunk_rest.call(null,seq__17447__$1);
var G__17504 = c__4556__auto__;
var G__17505 = cljs.core.count.call(null,c__4556__auto__);
var G__17506 = (0);
seq__17447 = G__17503;
chunk__17448 = G__17504;
count__17449 = G__17505;
i__17450 = G__17506;
continue;
} else {
var w = cljs.core.first.call(null,seq__17447__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__17507 = cljs.core.next.call(null,seq__17447__$1);
var G__17508 = null;
var G__17509 = (0);
var G__17510 = (0);
seq__17447 = G__17507;
chunk__17448 = G__17508;
count__17449 = G__17509;
i__17450 = G__17510;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__17445);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_17498.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__17451 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__17452 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__17452);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__17451);
}}));
} else {
return promise_chain_17498.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4126__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
if(cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace))){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return false;
}
} else {
return false;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17511 = arguments.length;
var i__4737__auto___17512 = (0);
while(true){
if((i__4737__auto___17512 < len__4736__auto___17511)){
args__4742__auto__.push((arguments[i__4737__auto___17512]));

var G__17513 = (i__4737__auto___17512 + (1));
i__4737__auto___17512 = G__17513;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__17455){
var vec__17456 = p__17455;
var n = cljs.core.nth.call(null,vec__17456,(0),null);
var mdata = cljs.core.nth.call(null,vec__17456,(1),null);
var temp__5825__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__17459 = cljs.core.seq.call(null,hooks);
var chunk__17460 = null;
var count__17461 = (0);
var i__17462 = (0);
while(true){
if((i__17462 < count__17461)){
var vec__17471 = cljs.core._nth.call(null,chunk__17460,i__17462);
var n = cljs.core.nth.call(null,vec__17471,(0),null);
var f = cljs.core.nth.call(null,vec__17471,(1),null);
var temp__5823__auto___17514 = cljs.core.reduce.call(null,((function (seq__17459,chunk__17460,count__17461,i__17462,vec__17471,n,f,hooks){
return (function (p1__17437_SHARP_,p2__17438_SHARP_){
if(cljs.core.truth_(p1__17437_SHARP_)){
return goog.object.get(p1__17437_SHARP_,p2__17438_SHARP_);
} else {
return null;
}
});})(seq__17459,chunk__17460,count__17461,i__17462,vec__17471,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5823__auto___17514)){
var hook_17515 = temp__5823__auto___17514;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_17515,args);
}catch (e17474){if((e17474 instanceof Error)){
var e_17516 = e17474;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_17516);
} else {
throw e17474;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__17517 = seq__17459;
var G__17518 = chunk__17460;
var G__17519 = count__17461;
var G__17520 = (i__17462 + (1));
seq__17459 = G__17517;
chunk__17460 = G__17518;
count__17461 = G__17519;
i__17462 = G__17520;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__17459);
if(temp__5825__auto__){
var seq__17459__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17459__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__17459__$1);
var G__17521 = cljs.core.chunk_rest.call(null,seq__17459__$1);
var G__17522 = c__4556__auto__;
var G__17523 = cljs.core.count.call(null,c__4556__auto__);
var G__17524 = (0);
seq__17459 = G__17521;
chunk__17460 = G__17522;
count__17461 = G__17523;
i__17462 = G__17524;
continue;
} else {
var vec__17475 = cljs.core.first.call(null,seq__17459__$1);
var n = cljs.core.nth.call(null,vec__17475,(0),null);
var f = cljs.core.nth.call(null,vec__17475,(1),null);
var temp__5823__auto___17525 = cljs.core.reduce.call(null,((function (seq__17459,chunk__17460,count__17461,i__17462,vec__17475,n,f,seq__17459__$1,temp__5825__auto__,hooks){
return (function (p1__17437_SHARP_,p2__17438_SHARP_){
if(cljs.core.truth_(p1__17437_SHARP_)){
return goog.object.get(p1__17437_SHARP_,p2__17438_SHARP_);
} else {
return null;
}
});})(seq__17459,chunk__17460,count__17461,i__17462,vec__17475,n,f,seq__17459__$1,temp__5825__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5823__auto___17525)){
var hook_17526 = temp__5823__auto___17525;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_17526,args);
}catch (e17478){if((e17478 instanceof Error)){
var e_17527 = e17478;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_17527);
} else {
throw e17478;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__17528 = cljs.core.next.call(null,seq__17459__$1);
var G__17529 = null;
var G__17530 = (0);
var G__17531 = (0);
seq__17459 = G__17528;
chunk__17460 = G__17529;
count__17461 = G__17530;
i__17462 = G__17531;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq17453){
var G__17454 = cljs.core.first.call(null,seq17453);
var seq17453__$1 = cljs.core.next.call(null,seq17453);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17454,seq17453__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__17479){
var vec__17480 = p__17479;
var k = cljs.core.nth.call(null,vec__17480,(0),null);
var v = cljs.core.nth.call(null,vec__17480,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__17439_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__17439_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__17439_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__17440_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__17440_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_(((cljs.core.not.call(null,figwheel.core.load_warninged_code))?cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null))):false))?null:cljs.core.filter.call(null,(function (p1__17441_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__17441_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__17483_17532 = cljs.core.seq.call(null,to_reload);
var chunk__17484_17533 = null;
var count__17485_17534 = (0);
var i__17486_17535 = (0);
while(true){
if((i__17486_17535 < count__17485_17534)){
var ns_17536 = cljs.core._nth.call(null,chunk__17484_17533,i__17486_17535);
goog.require(cljs.core.name.call(null,ns_17536),true);


var G__17537 = seq__17483_17532;
var G__17538 = chunk__17484_17533;
var G__17539 = count__17485_17534;
var G__17540 = (i__17486_17535 + (1));
seq__17483_17532 = G__17537;
chunk__17484_17533 = G__17538;
count__17485_17534 = G__17539;
i__17486_17535 = G__17540;
continue;
} else {
var temp__5825__auto___17541 = cljs.core.seq.call(null,seq__17483_17532);
if(temp__5825__auto___17541){
var seq__17483_17542__$1 = temp__5825__auto___17541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17483_17542__$1)){
var c__4556__auto___17543 = cljs.core.chunk_first.call(null,seq__17483_17542__$1);
var G__17544 = cljs.core.chunk_rest.call(null,seq__17483_17542__$1);
var G__17545 = c__4556__auto___17543;
var G__17546 = cljs.core.count.call(null,c__4556__auto___17543);
var G__17547 = (0);
seq__17483_17532 = G__17544;
chunk__17484_17533 = G__17545;
count__17485_17534 = G__17546;
i__17486_17535 = G__17547;
continue;
} else {
var ns_17548 = cljs.core.first.call(null,seq__17483_17542__$1);
goog.require(cljs.core.name.call(null,ns_17548),true);


var G__17549 = cljs.core.next.call(null,seq__17483_17542__$1);
var G__17550 = null;
var G__17551 = (0);
var G__17552 = (0);
seq__17483_17532 = G__17549;
chunk__17484_17533 = G__17550;
count__17485_17534 = G__17551;
i__17486_17535 = G__17552;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_17553 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5825__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5825__auto__)){
var not_loaded = temp__5825__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_17553);
} else {
setTimeout(after_reload_fn_17553,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__17487 = cljs.core.seq.call(null,warnings);
var chunk__17488 = null;
var count__17489 = (0);
var i__17490 = (0);
while(true){
if((i__17490 < count__17489)){
var warning = cljs.core._nth.call(null,chunk__17488,i__17490);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__17554 = seq__17487;
var G__17555 = chunk__17488;
var G__17556 = count__17489;
var G__17557 = (i__17490 + (1));
seq__17487 = G__17554;
chunk__17488 = G__17555;
count__17489 = G__17556;
i__17490 = G__17557;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__17487);
if(temp__5825__auto__){
var seq__17487__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17487__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__17487__$1);
var G__17558 = cljs.core.chunk_rest.call(null,seq__17487__$1);
var G__17559 = c__4556__auto__;
var G__17560 = cljs.core.count.call(null,c__4556__auto__);
var G__17561 = (0);
seq__17487 = G__17558;
chunk__17488 = G__17559;
count__17489 = G__17560;
i__17490 = G__17561;
continue;
} else {
var warning = cljs.core.first.call(null,seq__17487__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__17562 = cljs.core.next.call(null,seq__17487__$1);
var G__17563 = null;
var G__17564 = (0);
var G__17565 = (0);
seq__17487 = G__17562;
chunk__17488 = G__17563;
count__17489 = G__17564;
i__17490 = G__17565;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__17491){
var map__17492 = p__17491;
var map__17492__$1 = (((((!((map__17492 == null))))?(((((map__17492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17492):map__17492);
var exception_data = map__17492__$1;
var file = cljs.core.get.call(null,map__17492__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__17492__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__17492__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__17442_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__17442_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__17494 = "Compile Exception - ";
var G__17494__$1 = (cljs.core.truth_((function (){var or__4126__auto__ = type;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return message;
}
})())?[G__17494,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__17494);
if(cljs.core.truth_(file)){
return [G__17494__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__17494__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
