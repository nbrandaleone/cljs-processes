// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('utils.dom');
goog.require('cljs.core');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('goog.dom.classes');
utils.dom.by_id = (function utils$dom$by_id(id){
return document.getElementById(id);
});
utils.dom.set_html_BANG_ = (function utils$dom$set_html_BANG_(el,s){
return (el.innerHTML = s);
});
utils.dom.set_text_BANG_ = (function utils$dom$set_text_BANG_(el,s){
return goog.dom.setTextContent(el,s);
});
utils.dom.set_class_BANG_ = (function utils$dom$set_class_BANG_(el,name){
return goog.dom.classes.set(el,name);
});
utils.dom.add_class_BANG_ = (function utils$dom$add_class_BANG_(el,name){
return goog.dom.classes.add(el,name);
});
utils.dom.remove_class_BANG_ = (function utils$dom$remove_class_BANG_(el,name){
return goog.dom.classes.remove(el,name);
});
utils.dom.tag_match = (function utils$dom$tag_match(tag){
return (function (el){
var temp__5825__auto__ = el.tagName;
if(cljs.core.truth_(temp__5825__auto__)){
var tag_name = temp__5825__auto__;
return cljs.core._EQ_.call(null,tag,tag_name.toLowerCase());
} else {
return null;
}
});
});
utils.dom.parent = (function utils$dom$parent(el,tag){
var matcher = utils.dom.tag_match.call(null,tag);
if(cljs.core.truth_(matcher.call(null,el))){
return el;
} else {
return goog.dom.getAncestor(el,utils.dom.tag_match.call(null,tag));
}
});
utils.dom.el_matcher = (function utils$dom$el_matcher(el){
return (function (other){
return (other === el);
});
});
utils.dom.by_tag_name = (function utils$dom$by_tag_name(el,tag){
return cljs.core.prim_seq.call(null,goog.dom.getElementsByTagNameAndClass(tag,null,el));
});
utils.dom.offset = (function utils$dom$offset(el){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.style.getPageOffsetLeft(el),goog.style.getPageOffsetTop(el)], null);
});
utils.dom.in_QMARK_ = (function utils$dom$in_QMARK_(e,el){
var target = e.target;
return (((target === el)) || ((!((goog.dom.getAncestor(target,utils.dom.el_matcher.call(null,el)) == null)))));
});

//# sourceMappingURL=dom.js.map
