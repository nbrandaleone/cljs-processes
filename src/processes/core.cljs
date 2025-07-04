(ns processes.core
  (:require [cljs.core.async :as async
             :refer [<! >! chan put! timeout]]
            [clojure.string :as str])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def width 100)
(def height 100)

(defn by-id [id]
  (.getElementById js/document id))

(defn set-html! [el s]
  (set! (.-innerHTML el) s))

;(defn set-class! [el name]
;  (classes/set el name))

(defn set-class! [el name]
  (set! (.-className el) (str/join " " [nameclass name])))

(defn gen-ui []
  (let [arr (array)]
    (loop [y 0]
      (when (< y height)
        (.push arr  "<tr>")
        (loop [x 0]
          (when (< x width)
            (.push arr (str "<td id='cell-") (+ x (* y width)) "'>0</td>")
            (recur (inc x))))
        (.push arr "</tr>")
        (recur (inc y))))
    (set-html! (by-id "big-table") (.join arr ""))))

(gen-ui)

(def group (atom 0))

(defn render! [queue]
  (let [g (str "group" @group)]
    (doseq [[idx v] queue]
      (let [cell (by-id (str "cell-" idx))]
        (set-html! cell v)
        (set-class! cell g)))
    (swap! group (fn [g] (mod (inc g) 5)))))

(defn render-loop [rate]
  (let [in (chan 1000)]
    (go (loop [refresh (timeout rate) queue []]
          (let [[v c] (alts! [refresh in])]
            (condp = c
              refresh (do (render! queue)
                        (<! (timeout 0))
                        (recur (timeout rate) []))
              in (recur refresh (conj queue v))))))
    in))

(let [render (render-loop 40)]
  (loop [i 0]
    (when (< i (* width height))
      (go (while true
            (<! (timeout (+ 1000 (rand-int 10000))))
            (>! render [(rand-int 10000) (rand-int 10)])))
      (recur (inc i)))))

(enable-console-print!)

(println "This text is printed from src/processes/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
