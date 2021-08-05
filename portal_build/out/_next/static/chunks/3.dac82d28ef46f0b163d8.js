(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3], {
    1787: function () {
        var t, e;
        t = window, e = document, L.drawVersion = "1.0.4", L.Draw = {}, L.drawLocal = {
            draw: {
                toolbar: {
                    actions: {title: "Cancel drawing", text: "Cancel"},
                    finish: {title: "Finish drawing", text: "Finish"},
                    undo: {title: "Delete last point drawn", text: "Delete last point"},
                    buttons: {
                        polyline: "Draw a polyline",
                        polygon: "Draw a polygon",
                        rectangle: "Draw a rectangle",
                        circle: "Draw a circle",
                        marker: "Draw a marker",
                        circlemarker: "Draw a circlemarker"
                    }
                },
                handlers: {
                    circle: {tooltip: {start: "Click and drag to draw circle."}, radius: "Radius"},
                    circlemarker: {tooltip: {start: "Click map to place circle marker."}},
                    marker: {tooltip: {start: "Click map to place marker."}},
                    polygon: {
                        tooltip: {
                            start: "Click to start drawing shape.",
                            cont: "Click to continue drawing shape.",
                            end: "Click first point to close this shape."
                        }
                    },
                    polyline: {
                        error: "<strong>Error:</strong> shape edges cannot cross!",
                        tooltip: {
                            start: "Click to start drawing line.",
                            cont: "Click to continue drawing line.",
                            end: "Click last point to finish line."
                        }
                    },
                    rectangle: {tooltip: {start: "Click and drag to draw rectangle."}},
                    simpleshape: {tooltip: {end: "Release mouse to finish drawing."}}
                }
            },
            edit: {
                toolbar: {
                    actions: {
                        save: {title: "Save changes", text: "Save"},
                        cancel: {title: "Cancel editing, discards all changes", text: "Cancel"},
                        clearAll: {title: "Clear all layers", text: "Clear All"}
                    },
                    buttons: {
                        edit: "Edit layers",
                        editDisabled: "No layers to edit",
                        remove: "Delete layers",
                        removeDisabled: "No layers to delete"
                    }
                },
                handlers: {
                    edit: {
                        tooltip: {
                            text: "Drag handles or markers to edit features.",
                            subtext: "Click cancel to undo changes."
                        }
                    }, remove: {tooltip: {text: "Click on a feature to remove."}}
                }
            }
        }, L.Draw.Event = {}, L.Draw.Event.CREATED = "draw:created", L.Draw.Event.EDITED = "draw:edited", L.Draw.Event.DELETED = "draw:deleted", L.Draw.Event.DRAWSTART = "draw:drawstart", L.Draw.Event.DRAWSTOP = "draw:drawstop", L.Draw.Event.DRAWVERTEX = "draw:drawvertex", L.Draw.Event.EDITSTART = "draw:editstart", L.Draw.Event.EDITMOVE = "draw:editmove", L.Draw.Event.EDITRESIZE = "draw:editresize", L.Draw.Event.EDITVERTEX = "draw:editvertex", L.Draw.Event.EDITSTOP = "draw:editstop", L.Draw.Event.DELETESTART = "draw:deletestart", L.Draw.Event.DELETESTOP = "draw:deletestop", L.Draw.Event.TOOLBAROPENED = "draw:toolbaropened", L.Draw.Event.TOOLBARCLOSED = "draw:toolbarclosed", L.Draw.Event.MARKERCONTEXT = "draw:markercontext", L.Draw = L.Draw || {}, L.Draw.Feature = L.Handler.extend({
            initialize: function (t, e) {
                this._map = t, this._container = t._container, this._overlayPane = t._panes.overlayPane, this._popupPane = t._panes.popupPane, e && e.shapeOptions && (e.shapeOptions = L.Util.extend({}, this.options.shapeOptions, e.shapeOptions)), L.setOptions(this, e);
                var i = L.version.split(".");
                1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2 ? L.Draw.Feature.include(L.Evented.prototype) : L.Draw.Feature.include(L.Mixin.Events)
            }, enable: function () {
                this._enabled || (L.Handler.prototype.enable.call(this), this.fire("enabled", {handler: this.type}), this._map.fire(L.Draw.Event.DRAWSTART, {layerType: this.type}))
            }, disable: function () {
                this._enabled && (L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DRAWSTOP, {layerType: this.type}), this.fire("disabled", {handler: this.type}))
            }, addHooks: function () {
                var t = this._map;
                t && (L.DomUtil.disableTextSelection(), t.getContainer().focus(), this._tooltip = new L.Draw.Tooltip(this._map), L.DomEvent.on(this._container, "keyup", this._cancelDrawing, this))
            }, removeHooks: function () {
                this._map && (L.DomUtil.enableTextSelection(), this._tooltip.dispose(), this._tooltip = null, L.DomEvent.off(this._container, "keyup", this._cancelDrawing, this))
            }, setOptions: function (t) {
                L.setOptions(this, t)
            }, _fireCreatedEvent: function (t) {
                this._map.fire(L.Draw.Event.CREATED, {layer: t, layerType: this.type})
            }, _cancelDrawing: function (t) {
                27 === t.keyCode && (this._map.fire("draw:canceled", {layerType: this.type}), this.disable())
            }
        }), L.Draw.Polyline = L.Draw.Feature.extend({
            statics: {TYPE: "polyline"},
            Poly: L.Polyline,
            options: {
                allowIntersection: !0,
                repeatMode: !1,
                drawError: {color: "#b00b00", timeout: 2500},
                icon: new L.DivIcon({iconSize: new L.Point(8, 8), className: "leaflet-div-icon leaflet-editing-icon"}),
                touchIcon: new L.DivIcon({
                    iconSize: new L.Point(20, 20),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
                }),
                guidelineDistance: 20,
                maxGuideLineLength: 4e3,
                shapeOptions: {stroke: !0, color: "#3388ff", weight: 4, opacity: .5, fill: !1, clickable: !0},
                metric: !0,
                feet: !0,
                nautic: !1,
                showLength: !0,
                zIndexOffset: 2e3,
                factor: 1,
                maxPoints: 0
            },
            initialize: function (t, e) {
                L.Browser.touch && (this.options.icon = this.options.touchIcon), this.options.drawError.message = L.drawLocal.draw.handlers.polyline.error, e && e.drawError && (e.drawError = L.Util.extend({}, this.options.drawError, e.drawError)), this.type = L.Draw.Polyline.TYPE, L.Draw.Feature.prototype.initialize.call(this, t, e)
            },
            addHooks: function () {
                L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._markers = [], this._markerGroup = new L.LayerGroup, this._map.addLayer(this._markerGroup), this._poly = new L.Polyline([], this.options.shapeOptions), this._tooltip.updateContent(this._getTooltipText()), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
                    icon: L.divIcon({
                        className: "leaflet-mouse-marker",
                        iconAnchor: [20, 20],
                        iconSize: [40, 40]
                    }), opacity: 0, zIndexOffset: this.options.zIndexOffset
                })), this._mouseMarker.on("mouseout", this._onMouseOut, this).on("mousemove", this._onMouseMove, this).on("mousedown", this._onMouseDown, this).on("mouseup", this._onMouseUp, this).addTo(this._map), this._map.on("mouseup", this._onMouseUp, this).on("mousemove", this._onMouseMove, this).on("zoomlevelschange", this._onZoomEnd, this).on("touchstart", this._onTouch, this).on("zoomend", this._onZoomEnd, this))
            },
            removeHooks: function () {
                L.Draw.Feature.prototype.removeHooks.call(this), this._clearHideErrorTimeout(), this._cleanUpShape(), this._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers, this._map.removeLayer(this._poly), delete this._poly, this._mouseMarker.off("mousedown", this._onMouseDown, this).off("mouseout", this._onMouseOut, this).off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._clearGuides(), this._map.off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this).off("zoomlevelschange", this._onZoomEnd, this).off("zoomend", this._onZoomEnd, this).off("touchstart", this._onTouch, this).off("click", this._onTouch, this)
            },
            deleteLastVertex: function () {
                if (!(this._markers.length <= 1)) {
                    var t = this._markers.pop(), e = this._poly, i = e.getLatLngs(), o = i.splice(-1, 1)[0];
                    this._poly.setLatLngs(i), this._markerGroup.removeLayer(t), e.getLatLngs().length < 2 && this._map.removeLayer(e), this._vertexChanged(o, !1)
                }
            },
            addVertex: function (t) {
                this._markers.length >= 2 && !this.options.allowIntersection && this._poly.newLatLngIntersects(t) ? this._showErrorTooltip() : (this._errorShown && this._hideErrorTooltip(), this._markers.push(this._createMarker(t)), this._poly.addLatLng(t), 2 === this._poly.getLatLngs().length && this._map.addLayer(this._poly), this._vertexChanged(t, !0))
            },
            completeShape: function () {
                this._markers.length <= 1 || !this._shapeIsValid() || (this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable())
            },
            _finishShape: function () {
                var t = this._poly._defaultShape ? this._poly._defaultShape() : this._poly.getLatLngs(),
                    e = this._poly.newLatLngIntersects(t[t.length - 1]);
                !this.options.allowIntersection && e || !this._shapeIsValid() ? this._showErrorTooltip() : (this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable())
            },
            _shapeIsValid: function () {
                return !0
            },
            _onZoomEnd: function () {
                null !== this._markers && this._updateGuide()
            },
            _onMouseMove: function (t) {
                var e = this._map.mouseEventToLayerPoint(t.originalEvent), i = this._map.layerPointToLatLng(e);
                this._currentLatLng = i, this._updateTooltip(i), this._updateGuide(e), this._mouseMarker.setLatLng(i), L.DomEvent.preventDefault(t.originalEvent)
            },
            _vertexChanged: function (t, e) {
                this._map.fire(L.Draw.Event.DRAWVERTEX, {layers: this._markerGroup}), this._updateFinishHandler(), this._updateRunningMeasure(t, e), this._clearGuides(), this._updateTooltip()
            },
            _onMouseDown: function (t) {
                if (!this._clickHandled && !this._touchHandled && !this._disableMarkers) {
                    this._onMouseMove(t), this._clickHandled = !0, this._disableNewMarkers();
                    var e = t.originalEvent, i = e.clientX, o = e.clientY;
                    this._startPoint.call(this, i, o)
                }
            },
            _startPoint: function (t, e) {
                this._mouseDownOrigin = L.point(t, e)
            },
            _onMouseUp: function (t) {
                var e = t.originalEvent, i = e.clientX, o = e.clientY;
                this._endPoint.call(this, i, o, t), this._clickHandled = null
            },
            _endPoint: function (e, i, o) {
                if (this._mouseDownOrigin) {
                    var n = L.point(e, i).distanceTo(this._mouseDownOrigin),
                        r = this._calculateFinishDistance(o.latlng);
                    this.options.maxPoints > 1 && this.options.maxPoints == this._markers.length + 1 ? (this.addVertex(o.latlng), this._finishShape()) : r < 10 && L.Browser.touch ? this._finishShape() : Math.abs(n) < 9 * (t.devicePixelRatio || 1) && this.addVertex(o.latlng), this._enableNewMarkers()
                }
                this._mouseDownOrigin = null
            },
            _onTouch: function (t) {
                var e, i, o = t.originalEvent;
                !o.touches || !o.touches[0] || this._clickHandled || this._touchHandled || this._disableMarkers || (e = o.touches[0].clientX, i = o.touches[0].clientY, this._disableNewMarkers(), this._touchHandled = !0, this._startPoint.call(this, e, i), this._endPoint.call(this, e, i, t), this._touchHandled = null), this._clickHandled = null
            },
            _onMouseOut: function () {
                this._tooltip && this._tooltip._onMouseOut.call(this._tooltip)
            },
            _calculateFinishDistance: function (t) {
                var e;
                if (this._markers.length > 0) {
                    var i;
                    if (this.type === L.Draw.Polyline.TYPE) i = this._markers[this._markers.length - 1]; else {
                        if (this.type !== L.Draw.Polygon.TYPE) return 1 / 0;
                        i = this._markers[0]
                    }
                    var o = this._map.latLngToContainerPoint(i.getLatLng()),
                        n = new L.Marker(t, {icon: this.options.icon, zIndexOffset: 2 * this.options.zIndexOffset}),
                        r = this._map.latLngToContainerPoint(n.getLatLng());
                    e = o.distanceTo(r)
                } else e = 1 / 0;
                return e
            },
            _updateFinishHandler: function () {
                var t = this._markers.length;
                t > 1 && this._markers[t - 1].on("click", this._finishShape, this), t > 2 && this._markers[t - 2].off("click", this._finishShape, this)
            },
            _createMarker: function (t) {
                var e = new L.Marker(t, {icon: this.options.icon, zIndexOffset: 2 * this.options.zIndexOffset});
                return this._markerGroup.addLayer(e), e
            },
            _updateGuide: function (t) {
                var e = this._markers ? this._markers.length : 0;
                e > 0 && (t = t || this._map.latLngToLayerPoint(this._currentLatLng), this._clearGuides(), this._drawGuide(this._map.latLngToLayerPoint(this._markers[e - 1].getLatLng()), t))
            },
            _updateTooltip: function (t) {
                var e = this._getTooltipText();
                t && this._tooltip.updatePosition(t), this._errorShown || this._tooltip.updateContent(e)
            },
            _drawGuide: function (t, e) {
                var i, o, n, r = Math.floor(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))),
                    a = this.options.guidelineDistance, s = this.options.maxGuideLineLength, l = r > s ? r - s : a;
                for (this._guidesContainer || (this._guidesContainer = L.DomUtil.create("div", "leaflet-draw-guides", this._overlayPane)); l < r; l += this.options.guidelineDistance) i = l / r, o = {
                    x: Math.floor(t.x * (1 - i) + i * e.x),
                    y: Math.floor(t.y * (1 - i) + i * e.y)
                }, (n = L.DomUtil.create("div", "leaflet-draw-guide-dash", this._guidesContainer)).style.backgroundColor = this._errorShown ? this.options.drawError.color : this.options.shapeOptions.color, L.DomUtil.setPosition(n, o)
            },
            _updateGuideColor: function (t) {
                if (this._guidesContainer) for (var e = 0, i = this._guidesContainer.childNodes.length; e < i; e++) this._guidesContainer.childNodes[e].style.backgroundColor = t
            },
            _clearGuides: function () {
                if (this._guidesContainer) for (; this._guidesContainer.firstChild;) this._guidesContainer.removeChild(this._guidesContainer.firstChild)
            },
            _getTooltipText: function () {
                var t, e, i = this.options.showLength;
                return 0 === this._markers.length ? t = {text: L.drawLocal.draw.handlers.polyline.tooltip.start} : (e = i ? this._getMeasurementString() : "", t = 1 === this._markers.length ? {
                    text: L.drawLocal.draw.handlers.polyline.tooltip.cont,
                    subtext: e
                } : {text: L.drawLocal.draw.handlers.polyline.tooltip.end, subtext: e}), t
            },
            _updateRunningMeasure: function (t, e) {
                var i, o, n = this._markers.length;
                1 === this._markers.length ? this._measurementRunningTotal = 0 : (i = n - (e ? 2 : 1), o = L.GeometryUtil.isVersion07x() ? t.distanceTo(this._markers[i].getLatLng()) * (this.options.factor || 1) : this._map.distance(t, this._markers[i].getLatLng()) * (this.options.factor || 1), this._measurementRunningTotal += o * (e ? 1 : -1))
            },
            _getMeasurementString: function () {
                var t, e = this._currentLatLng, i = this._markers[this._markers.length - 1].getLatLng();
                return t = L.GeometryUtil.isVersion07x() ? i && e && e.distanceTo ? this._measurementRunningTotal + e.distanceTo(i) * (this.options.factor || 1) : this._measurementRunningTotal || 0 : i && e ? this._measurementRunningTotal + this._map.distance(e, i) * (this.options.factor || 1) : this._measurementRunningTotal || 0, L.GeometryUtil.readableDistance(t, this.options.metric, this.options.feet, this.options.nautic, this.options.precision)
            },
            _showErrorTooltip: function () {
                this._errorShown = !0, this._tooltip.showAsError().updateContent({text: this.options.drawError.message}), this._updateGuideColor(this.options.drawError.color), this._poly.setStyle({color: this.options.drawError.color}), this._clearHideErrorTimeout(), this._hideErrorTimeout = setTimeout(L.Util.bind(this._hideErrorTooltip, this), this.options.drawError.timeout)
            },
            _hideErrorTooltip: function () {
                this._errorShown = !1, this._clearHideErrorTimeout(), this._tooltip.removeError().updateContent(this._getTooltipText()), this._updateGuideColor(this.options.shapeOptions.color), this._poly.setStyle({color: this.options.shapeOptions.color})
            },
            _clearHideErrorTimeout: function () {
                this._hideErrorTimeout && (clearTimeout(this._hideErrorTimeout), this._hideErrorTimeout = null)
            },
            _disableNewMarkers: function () {
                this._disableMarkers = !0
            },
            _enableNewMarkers: function () {
                setTimeout(function () {
                    this._disableMarkers = !1
                }.bind(this), 50)
            },
            _cleanUpShape: function () {
                this._markers.length > 1 && this._markers[this._markers.length - 1].off("click", this._finishShape, this)
            },
            _fireCreatedEvent: function () {
                var t = new this.Poly(this._poly.getLatLngs(), this.options.shapeOptions);
                L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
            }
        }), L.Draw.Polygon = L.Draw.Polyline.extend({
            statics: {TYPE: "polygon"},
            Poly: L.Polygon,
            options: {
                showArea: !1,
                showLength: !1,
                shapeOptions: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 4,
                    opacity: .5,
                    fill: !0,
                    fillColor: null,
                    fillOpacity: .2,
                    clickable: !0
                },
                metric: !0,
                feet: !0,
                nautic: !1,
                precision: {}
            },
            initialize: function (t, e) {
                L.Draw.Polyline.prototype.initialize.call(this, t, e), this.type = L.Draw.Polygon.TYPE
            },
            _updateFinishHandler: function () {
                var t = this._markers.length;
                1 === t && this._markers[0].on("click", this._finishShape, this), t > 2 && (this._markers[t - 1].on("dblclick", this._finishShape, this), t > 3 && this._markers[t - 2].off("dblclick", this._finishShape, this))
            },
            _getTooltipText: function () {
                var t, e;
                return 0 === this._markers.length ? t = L.drawLocal.draw.handlers.polygon.tooltip.start : this._markers.length < 3 ? (t = L.drawLocal.draw.handlers.polygon.tooltip.cont, e = this._getMeasurementString()) : (t = L.drawLocal.draw.handlers.polygon.tooltip.end, e = this._getMeasurementString()), {
                    text: t,
                    subtext: e
                }
            },
            _getMeasurementString: function () {
                var t = this._area, e = "";
                return t || this.options.showLength ? (this.options.showLength && (e = L.Draw.Polyline.prototype._getMeasurementString.call(this)), t && (e += "<br>" + L.GeometryUtil.readableArea(t, this.options.metric, this.options.precision)), e) : null
            },
            _shapeIsValid: function () {
                return this._markers.length >= 3
            },
            _vertexChanged: function (t, e) {
                var i;
                !this.options.allowIntersection && this.options.showArea && (i = this._poly.getLatLngs(), this._area = L.GeometryUtil.geodesicArea(i)), L.Draw.Polyline.prototype._vertexChanged.call(this, t, e)
            },
            _cleanUpShape: function () {
                var t = this._markers.length;
                t > 0 && (this._markers[0].off("click", this._finishShape, this), t > 2 && this._markers[t - 1].off("dblclick", this._finishShape, this))
            }
        }), L.SimpleShape = {}, L.Draw.SimpleShape = L.Draw.Feature.extend({
            options: {repeatMode: !1}, initialize: function (t, e) {
                this._endLabelText = L.drawLocal.draw.handlers.simpleshape.tooltip.end, L.Draw.Feature.prototype.initialize.call(this, t, e)
            }, addHooks: function () {
                L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._mapDraggable = this._map.dragging.enabled(), this._mapDraggable && this._map.dragging.disable(), this._container.style.cursor = "crosshair", this._tooltip.updateContent({text: this._initialLabelText}), this._map.on("mousedown", this._onMouseDown, this).on("mousemove", this._onMouseMove, this).on("touchstart", this._onMouseDown, this).on("touchmove", this._onMouseMove, this), e.addEventListener("touchstart", L.DomEvent.preventDefault, {passive: !1}))
            }, removeHooks: function () {
                L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._mapDraggable && this._map.dragging.enable(), this._container.style.cursor = "", this._map.off("mousedown", this._onMouseDown, this).off("mousemove", this._onMouseMove, this).off("touchstart", this._onMouseDown, this).off("touchmove", this._onMouseMove, this), L.DomEvent.off(e, "mouseup", this._onMouseUp, this), L.DomEvent.off(e, "touchend", this._onMouseUp, this), e.removeEventListener("touchstart", L.DomEvent.preventDefault), this._shape && (this._map.removeLayer(this._shape), delete this._shape)), this._isDrawing = !1
            }, _getTooltipText: function () {
                return {text: this._endLabelText}
            }, _onMouseDown: function (t) {
                this._isDrawing = !0, this._startLatLng = t.latlng, L.DomEvent.on(e, "mouseup", this._onMouseUp, this).on(e, "touchend", this._onMouseUp, this).preventDefault(t.originalEvent)
            }, _onMouseMove: function (t) {
                var e = t.latlng;
                this._tooltip.updatePosition(e), this._isDrawing && (this._tooltip.updateContent(this._getTooltipText()), this._drawShape(e))
            }, _onMouseUp: function () {
                this._shape && this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable()
            }
        }), L.Draw.Rectangle = L.Draw.SimpleShape.extend({
            statics: {TYPE: "rectangle"},
            options: {
                shapeOptions: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 4,
                    opacity: .5,
                    fill: !0,
                    fillColor: null,
                    fillOpacity: .2,
                    clickable: !0
                }, showArea: !0, metric: !0
            },
            initialize: function (t, e) {
                this.type = L.Draw.Rectangle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.rectangle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, t, e)
            },
            disable: function () {
                this._enabled && (this._isCurrentlyTwoClickDrawing = !1, L.Draw.SimpleShape.prototype.disable.call(this))
            },
            _onMouseUp: function (t) {
                this._shape || this._isCurrentlyTwoClickDrawing ? this._isCurrentlyTwoClickDrawing && !function (t, e) {
                    for (; (t = t.parentElement) && !t.classList.contains(e);) ;
                    return t
                }(t.target, "leaflet-pane") || L.Draw.SimpleShape.prototype._onMouseUp.call(this) : this._isCurrentlyTwoClickDrawing = !0
            },
            _drawShape: function (t) {
                this._shape ? this._shape.setBounds(new L.LatLngBounds(this._startLatLng, t)) : (this._shape = new L.Rectangle(new L.LatLngBounds(this._startLatLng, t), this.options.shapeOptions), this._map.addLayer(this._shape))
            },
            _fireCreatedEvent: function () {
                var t = new L.Rectangle(this._shape.getBounds(), this.options.shapeOptions);
                L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
            },
            _getTooltipText: function () {
                var t, e, i, o = L.Draw.SimpleShape.prototype._getTooltipText.call(this), n = this._shape,
                    r = this.options.showArea;
                return n && (t = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), e = L.GeometryUtil.geodesicArea(t), i = r ? L.GeometryUtil.readableArea(e, this.options.metric) : ""), {
                    text: o.text,
                    subtext: i
                }
            }
        }), L.Draw.Marker = L.Draw.Feature.extend({
            statics: {TYPE: "marker"},
            options: {icon: new L.Icon.Default, repeatMode: !1, zIndexOffset: 2e3},
            initialize: function (t, e) {
                this.type = L.Draw.Marker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.marker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, t, e)
            },
            addHooks: function () {
                L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._tooltip.updateContent({text: this._initialLabelText}), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
                    icon: L.divIcon({
                        className: "leaflet-mouse-marker",
                        iconAnchor: [20, 20],
                        iconSize: [40, 40]
                    }), opacity: 0, zIndexOffset: this.options.zIndexOffset
                })), this._mouseMarker.on("click", this._onClick, this).addTo(this._map), this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onTouch, this))
            },
            removeHooks: function () {
                L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._map.off("click", this._onClick, this).off("click", this._onTouch, this), this._marker && (this._marker.off("click", this._onClick, this), this._map.removeLayer(this._marker), delete this._marker), this._mouseMarker.off("click", this._onClick, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._map.off("mousemove", this._onMouseMove, this))
            },
            _onMouseMove: function (t) {
                var e = t.latlng;
                this._tooltip.updatePosition(e), this._mouseMarker.setLatLng(e), this._marker ? (e = this._mouseMarker.getLatLng(), this._marker.setLatLng(e)) : (this._marker = this._createMarker(e), this._marker.on("click", this._onClick, this), this._map.on("click", this._onClick, this).addLayer(this._marker))
            },
            _createMarker: function (t) {
                return new L.Marker(t, {icon: this.options.icon, zIndexOffset: this.options.zIndexOffset})
            },
            _onClick: function () {
                this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable()
            },
            _onTouch: function (t) {
                this._onMouseMove(t), this._onClick()
            },
            _fireCreatedEvent: function () {
                var t = new L.Marker.Touch(this._marker.getLatLng(), {icon: this.options.icon});
                L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
            }
        }), L.Draw.CircleMarker = L.Draw.Marker.extend({
            statics: {TYPE: "circlemarker"},
            options: {
                stroke: !0,
                color: "#3388ff",
                weight: 4,
                opacity: .5,
                fill: !0,
                fillColor: null,
                fillOpacity: .2,
                clickable: !0,
                zIndexOffset: 2e3
            },
            initialize: function (t, e) {
                this.type = L.Draw.CircleMarker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circlemarker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, t, e)
            },
            _fireCreatedEvent: function () {
                var t = new L.CircleMarker(this._marker.getLatLng(), this.options);
                L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
            },
            _createMarker: function (t) {
                return new L.CircleMarker(t, this.options)
            }
        }), L.Draw.Circle = L.Draw.SimpleShape.extend({
            statics: {TYPE: "circle"},
            options: {
                shapeOptions: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 4,
                    opacity: .5,
                    fill: !0,
                    fillColor: null,
                    fillOpacity: .2,
                    clickable: !0
                }, showRadius: !0, metric: !0, feet: !0, nautic: !1
            },
            initialize: function (t, e) {
                this.type = L.Draw.Circle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, t, e)
            },
            _drawShape: function (t) {
                if (L.GeometryUtil.isVersion07x()) var e = this._startLatLng.distanceTo(t); else e = this._map.distance(this._startLatLng, t);
                this._shape ? this._shape.setRadius(e) : (this._shape = new L.Circle(this._startLatLng, e, this.options.shapeOptions), this._map.addLayer(this._shape))
            },
            _fireCreatedEvent: function () {
                var t = new L.Circle(this._startLatLng, this._shape.getRadius(), this.options.shapeOptions);
                L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
            },
            _onMouseMove: function (t) {
                var e, i = t.latlng, o = this.options.showRadius, n = this.options.metric;
                if (this._tooltip.updatePosition(i), this._isDrawing) {
                    this._drawShape(i), e = this._shape.getRadius().toFixed(1);
                    var r = "";
                    o && (r = L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(e, n, this.options.feet, this.options.nautic)), this._tooltip.updateContent({
                        text: this._endLabelText,
                        subtext: r
                    })
                }
            }
        }), L.Edit = L.Edit || {}, L.Edit.Marker = L.Handler.extend({
            initialize: function (t, e) {
                this._marker = t, L.setOptions(this, e)
            }, addHooks: function () {
                var t = this._marker;
                t.dragging.enable(), t.on("dragend", this._onDragEnd, t), this._toggleMarkerHighlight()
            }, removeHooks: function () {
                var t = this._marker;
                t.dragging.disable(), t.off("dragend", this._onDragEnd, t), this._toggleMarkerHighlight()
            }, _onDragEnd: function (t) {
                var e = t.target;
                e.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, {layer: e})
            }, _toggleMarkerHighlight: function () {
                var t = this._marker._icon;
                t && (t.style.display = "none", L.DomUtil.hasClass(t, "leaflet-edit-marker-selected") ? (L.DomUtil.removeClass(t, "leaflet-edit-marker-selected"), this._offsetMarker(t, -4)) : (L.DomUtil.addClass(t, "leaflet-edit-marker-selected"), this._offsetMarker(t, 4)), t.style.display = "")
            }, _offsetMarker: function (t, e) {
                var i = parseInt(t.style.marginTop, 10) - e, o = parseInt(t.style.marginLeft, 10) - e;
                t.style.marginTop = i + "px", t.style.marginLeft = o + "px"
            }
        }), L.Marker.addInitHook((function () {
            L.Edit.Marker && (this.editing = new L.Edit.Marker(this), this.options.editable && this.editing.enable())
        })), L.Edit = L.Edit || {}, L.Edit.Poly = L.Handler.extend({
            initialize: function (t) {
                this.latlngs = [t._latlngs], t._holes && (this.latlngs = this.latlngs.concat(t._holes)), this._poly = t, this._poly.on("revert-edited", this._updateLatLngs, this)
            }, _defaultShape: function () {
                return L.Polyline._flat ? L.Polyline._flat(this._poly._latlngs) ? this._poly._latlngs : this._poly._latlngs[0] : this._poly._latlngs
            }, _eachVertexHandler: function (t) {
                for (var e = 0; e < this._verticesHandlers.length; e++) t(this._verticesHandlers[e])
            }, addHooks: function () {
                this._initHandlers(), this._eachVertexHandler((function (t) {
                    t.addHooks()
                }))
            }, removeHooks: function () {
                this._eachVertexHandler((function (t) {
                    t.removeHooks()
                }))
            }, updateMarkers: function () {
                this._eachVertexHandler((function (t) {
                    t.updateMarkers()
                }))
            }, _initHandlers: function () {
                this._verticesHandlers = [];
                for (var t = 0; t < this.latlngs.length; t++) this._verticesHandlers.push(new L.Edit.PolyVerticesEdit(this._poly, this.latlngs[t], this._poly.options.poly))
            }, _updateLatLngs: function (t) {
                this.latlngs = [t.layer._latlngs], t.layer._holes && (this.latlngs = this.latlngs.concat(t.layer._holes))
            }
        }), L.Edit.PolyVerticesEdit = L.Handler.extend({
            options: {
                icon: new L.DivIcon({
                    iconSize: new L.Point(8, 8),
                    className: "leaflet-div-icon leaflet-editing-icon"
                }),
                touchIcon: new L.DivIcon({
                    iconSize: new L.Point(20, 20),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
                }),
                drawError: {color: "#b00b00", timeout: 1e3}
            }, initialize: function (t, e, i) {
                L.Browser.touch && (this.options.icon = this.options.touchIcon), this._poly = t, i && i.drawError && (i.drawError = L.Util.extend({}, this.options.drawError, i.drawError)), this._latlngs = e, L.setOptions(this, i)
            }, _defaultShape: function () {
                return L.Polyline._flat ? L.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0] : this._latlngs
            }, addHooks: function () {
                var t = this._poly, e = t._path;
                t instanceof L.Polygon || (t.options.fill = !1, t.options.editing && (t.options.editing.fill = !1)), e && t.options.editing && t.options.editing.className && (t.options.original.className && t.options.original.className.split(" ").forEach((function (t) {
                    L.DomUtil.removeClass(e, t)
                })), t.options.editing.className.split(" ").forEach((function (t) {
                    L.DomUtil.addClass(e, t)
                }))), t.setStyle(t.options.editing), this._poly._map && (this._map = this._poly._map, this._markerGroup || this._initMarkers(), this._poly._map.addLayer(this._markerGroup))
            }, removeHooks: function () {
                var t = this._poly, e = t._path;
                e && t.options.editing && t.options.editing.className && (t.options.editing.className.split(" ").forEach((function (t) {
                    L.DomUtil.removeClass(e, t)
                })), t.options.original.className && t.options.original.className.split(" ").forEach((function (t) {
                    L.DomUtil.addClass(e, t)
                }))), t.setStyle(t.options.original), t._map && (t._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers)
            }, updateMarkers: function () {
                this._markerGroup.clearLayers(), this._initMarkers()
            }, _initMarkers: function () {
                this._markerGroup || (this._markerGroup = new L.LayerGroup), this._markers = [];
                var t, e, i, o, n, r, a = this._defaultShape();
                for (t = 0, i = a.length; t < i; t++) (o = this._createMarker(a[t], t)).on("click", this._onMarkerClick, this), o.on("contextmenu", this._onContextMenu, this), this._markers.push(o);
                for (t = 0, e = i - 1; t < i; e = t++) (0 !== t || L.Polygon && this._poly instanceof L.Polygon) && (n = this._markers[e], r = this._markers[t], this._createMiddleMarker(n, r), this._updatePrevNext(n, r))
            }, _createMarker: function (t, e) {
                var i = new L.Marker.Touch(t, {draggable: !0, icon: this.options.icon});
                return i._origLatLng = t, i._index = e, i.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._fireEdit, this).on("touchmove", this._onTouchMove, this).on("touchend", this._fireEdit, this).on("MSPointerMove", this._onTouchMove, this).on("MSPointerUp", this._fireEdit, this), this._markerGroup.addLayer(i), i
            }, _onMarkerDragStart: function () {
                this._poly.fire("editstart")
            }, _spliceLatLngs: function () {
                var t = this._defaultShape(), e = [].splice.apply(t, arguments);
                return this._poly._convertLatLngs(t, !0), this._poly.redraw(), e
            }, _removeMarker: function (t) {
                var e = t._index;
                this._markerGroup.removeLayer(t), this._markers.splice(e, 1), this._spliceLatLngs(e, 1), this._updateIndexes(e, -1), t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._fireEdit, this).off("touchmove", this._onMarkerDrag, this).off("touchend", this._fireEdit, this).off("click", this._onMarkerClick, this).off("MSPointerMove", this._onTouchMove, this).off("MSPointerUp", this._fireEdit, this)
            }, _fireEdit: function () {
                this._poly.edited = !0, this._poly.fire("edit"), this._poly._map.fire(L.Draw.Event.EDITVERTEX, {
                    layers: this._markerGroup,
                    poly: this._poly
                })
            }, _onMarkerDrag: function (t) {
                var e = t.target, i = this._poly, o = L.LatLngUtil.cloneLatLng(e._origLatLng);
                if (L.extend(e._origLatLng, e._latlng), i.options.poly) {
                    var n = i._map._editTooltip;
                    if (!i.options.poly.allowIntersection && i.intersects()) {
                        L.extend(e._origLatLng, o), e.setLatLng(o);
                        var r = i.options.color;
                        i.setStyle({color: this.options.drawError.color}), n && n.updateContent({text: L.drawLocal.draw.handlers.polyline.error}), setTimeout((function () {
                            i.setStyle({color: r}), n && n.updateContent({
                                text: L.drawLocal.edit.handlers.edit.tooltip.text,
                                subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
                            })
                        }), 1e3)
                    }
                }
                e._middleLeft && e._middleLeft.setLatLng(this._getMiddleLatLng(e._prev, e)), e._middleRight && e._middleRight.setLatLng(this._getMiddleLatLng(e, e._next)), this._poly._bounds._southWest = L.latLng(1 / 0, 1 / 0), this._poly._bounds._northEast = L.latLng(-1 / 0, -1 / 0);
                var a = this._poly.getLatLngs();
                this._poly._convertLatLngs(a, !0), this._poly.redraw(), this._poly.fire("editdrag")
            }, _onMarkerClick: function (t) {
                var e = L.Polygon && this._poly instanceof L.Polygon ? 4 : 3, i = t.target;
                this._defaultShape().length < e || (this._removeMarker(i), this._updatePrevNext(i._prev, i._next), i._middleLeft && this._markerGroup.removeLayer(i._middleLeft), i._middleRight && this._markerGroup.removeLayer(i._middleRight), i._prev && i._next ? this._createMiddleMarker(i._prev, i._next) : i._prev ? i._next || (i._prev._middleRight = null) : i._next._middleLeft = null, this._fireEdit())
            }, _onContextMenu: function (t) {
                var e = t.target;
                this._poly, this._poly._map.fire(L.Draw.Event.MARKERCONTEXT, {
                    marker: e,
                    layers: this._markerGroup,
                    poly: this._poly
                }), L.DomEvent.stopPropagation
            }, _onTouchMove: function (t) {
                var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),
                    i = this._map.layerPointToLatLng(e), o = t.target;
                L.extend(o._origLatLng, i), o._middleLeft && o._middleLeft.setLatLng(this._getMiddleLatLng(o._prev, o)), o._middleRight && o._middleRight.setLatLng(this._getMiddleLatLng(o, o._next)), this._poly.redraw(), this.updateMarkers()
            }, _updateIndexes: function (t, e) {
                this._markerGroup.eachLayer((function (i) {
                    i._index > t && (i._index += e)
                }))
            }, _createMiddleMarker: function (t, e) {
                var i, o, n, r = this._getMiddleLatLng(t, e), a = this._createMarker(r);
                a.setOpacity(.6), t._middleRight = e._middleLeft = a, o = function () {
                    a.off("touchmove", o, this);
                    var n = e._index;
                    a._index = n, a.off("click", i, this).on("click", this._onMarkerClick, this), r.lat = a.getLatLng().lat, r.lng = a.getLatLng().lng, this._spliceLatLngs(n, 0, r), this._markers.splice(n, 0, a), a.setOpacity(1), this._updateIndexes(n, 1), e._index++, this._updatePrevNext(t, a), this._updatePrevNext(a, e), this._poly.fire("editstart")
                }, n = function () {
                    a.off("dragstart", o, this), a.off("dragend", n, this), a.off("touchmove", o, this), this._createMiddleMarker(t, a), this._createMiddleMarker(a, e)
                }, i = function () {
                    o.call(this), n.call(this), this._fireEdit()
                }, a.on("click", i, this).on("dragstart", o, this).on("dragend", n, this).on("touchmove", o, this), this._markerGroup.addLayer(a)
            }, _updatePrevNext: function (t, e) {
                t && (t._next = e), e && (e._prev = t)
            }, _getMiddleLatLng: function (t, e) {
                var i = this._poly._map, o = i.project(t.getLatLng()), n = i.project(e.getLatLng());
                return i.unproject(o._add(n)._divideBy(2))
            }
        }), L.Polyline.addInitHook((function () {
            this.editing || (L.Edit.Poly && (this.editing = new L.Edit.Poly(this), this.options.editable && this.editing.enable()), this.on("add", (function () {
                this.editing && this.editing.enabled() && this.editing.addHooks()
            })), this.on("remove", (function () {
                this.editing && this.editing.enabled() && this.editing.removeHooks()
            })))
        })), L.Edit = L.Edit || {}, L.Edit.SimpleShape = L.Handler.extend({
            options: {
                moveIcon: new L.DivIcon({
                    iconSize: new L.Point(8, 8),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move"
                }),
                resizeIcon: new L.DivIcon({
                    iconSize: new L.Point(8, 8),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"
                }),
                touchMoveIcon: new L.DivIcon({
                    iconSize: new L.Point(20, 20),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon"
                }),
                touchResizeIcon: new L.DivIcon({
                    iconSize: new L.Point(20, 20),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon"
                })
            }, initialize: function (t, e) {
                L.Browser.touch && (this.options.moveIcon = this.options.touchMoveIcon, this.options.resizeIcon = this.options.touchResizeIcon), this._shape = t, L.Util.setOptions(this, e)
            }, addHooks: function () {
                var t = this._shape;
                this._shape._map && (this._map = this._shape._map, t.setStyle(t.options.editing), t._map && (this._map = t._map, this._markerGroup || this._initMarkers(), this._map.addLayer(this._markerGroup)))
            }, removeHooks: function () {
                var t = this._shape;
                if (t.setStyle(t.options.original), t._map) {
                    this._unbindMarker(this._moveMarker);
                    for (var e = 0, i = this._resizeMarkers.length; e < i; e++) this._unbindMarker(this._resizeMarkers[e]);
                    this._resizeMarkers = null, this._map.removeLayer(this._markerGroup), delete this._markerGroup
                }
                this._map = null
            }, updateMarkers: function () {
                this._markerGroup.clearLayers(), this._initMarkers()
            }, _initMarkers: function () {
                this._markerGroup || (this._markerGroup = new L.LayerGroup), this._createMoveMarker(), this._createResizeMarker()
            }, _createMoveMarker: function () {
            }, _createResizeMarker: function () {
            }, _createMarker: function (t, e) {
                var i = new L.Marker.Touch(t, {draggable: !0, icon: e, zIndexOffset: 10});
                return this._bindMarker(i), this._markerGroup.addLayer(i), i
            }, _bindMarker: function (t) {
                t.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd, this).on("touchstart", this._onTouchStart, this).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onTouchEnd, this).on("MSPointerUp", this._onTouchEnd, this)
            }, _unbindMarker: function (t) {
                t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._onMarkerDragEnd, this).off("touchstart", this._onTouchStart, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onTouchEnd, this).off("MSPointerUp", this._onTouchEnd, this)
            }, _onMarkerDragStart: function (t) {
                t.target.setOpacity(0), this._shape.fire("editstart")
            }, _fireEdit: function () {
                this._shape.edited = !0, this._shape.fire("edit")
            }, _onMarkerDrag: function (t) {
                var e = t.target, i = e.getLatLng();
                e === this._moveMarker ? this._move(i) : this._resize(i), this._shape.redraw(), this._shape.fire("editdrag")
            }, _onMarkerDragEnd: function (t) {
                t.target.setOpacity(1), this._fireEdit()
            }, _onTouchStart: function (t) {
                if (L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t), "function" == typeof this._getCorners) {
                    var e = this._getCorners(), i = t.target, o = i._cornerIndex;
                    i.setOpacity(0), this._oppositeCorner = e[(o + 2) % 4], this._toggleCornerMarkers(0, o)
                }
                this._shape.fire("editstart")
            }, _onTouchMove: function (t) {
                var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),
                    i = this._map.layerPointToLatLng(e);
                return t.target === this._moveMarker ? this._move(i) : this._resize(i), this._shape.redraw(), !1
            }, _onTouchEnd: function (t) {
                t.target.setOpacity(1), this.updateMarkers(), this._fireEdit()
            }, _move: function () {
            }, _resize: function () {
            }
        }), L.Edit = L.Edit || {}, L.Edit.Rectangle = L.Edit.SimpleShape.extend({
            _createMoveMarker: function () {
                var t = this._shape.getBounds().getCenter();
                this._moveMarker = this._createMarker(t, this.options.moveIcon)
            }, _createResizeMarker: function () {
                var t = this._getCorners();
                this._resizeMarkers = [];
                for (var e = 0, i = t.length; e < i; e++) this._resizeMarkers.push(this._createMarker(t[e], this.options.resizeIcon)), this._resizeMarkers[e]._cornerIndex = e
            }, _onMarkerDragStart: function (t) {
                L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t);
                var e = this._getCorners(), i = t.target._cornerIndex;
                this._oppositeCorner = e[(i + 2) % 4], this._toggleCornerMarkers(0, i)
            }, _onMarkerDragEnd: function (t) {
                var e, i = t.target;
                i === this._moveMarker && (e = this._shape.getBounds().getCenter(), i.setLatLng(e)), this._toggleCornerMarkers(1), this._repositionCornerMarkers(), L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, t)
            }, _move: function (t) {
                for (var e, i = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), o = this._shape.getBounds().getCenter(), n = [], r = 0, a = i.length; r < a; r++) e = [i[r].lat - o.lat, i[r].lng - o.lng], n.push([t.lat + e[0], t.lng + e[1]]);
                this._shape.setLatLngs(n), this._repositionCornerMarkers(), this._map.fire(L.Draw.Event.EDITMOVE, {layer: this._shape})
            }, _resize: function (t) {
                var e;
                this._shape.setBounds(L.latLngBounds(t, this._oppositeCorner)), e = this._shape.getBounds(), this._moveMarker.setLatLng(e.getCenter()), this._map.fire(L.Draw.Event.EDITRESIZE, {layer: this._shape})
            }, _getCorners: function () {
                var t = this._shape.getBounds();
                return [t.getNorthWest(), t.getNorthEast(), t.getSouthEast(), t.getSouthWest()]
            }, _toggleCornerMarkers: function (t) {
                for (var e = 0, i = this._resizeMarkers.length; e < i; e++) this._resizeMarkers[e].setOpacity(t)
            }, _repositionCornerMarkers: function () {
                for (var t = this._getCorners(), e = 0, i = this._resizeMarkers.length; e < i; e++) this._resizeMarkers[e].setLatLng(t[e])
            }
        }), L.Rectangle.addInitHook((function () {
            L.Edit.Rectangle && (this.editing = new L.Edit.Rectangle(this), this.options.editable && this.editing.enable())
        })), L.Edit = L.Edit || {}, L.Edit.CircleMarker = L.Edit.SimpleShape.extend({
            _createMoveMarker: function () {
                var t = this._shape.getLatLng();
                this._moveMarker = this._createMarker(t, this.options.moveIcon)
            }, _createResizeMarker: function () {
                this._resizeMarkers = []
            }, _move: function (t) {
                if (this._resizeMarkers.length) {
                    var e = this._getResizeMarkerPoint(t);
                    this._resizeMarkers[0].setLatLng(e)
                }
                this._shape.setLatLng(t), this._map.fire(L.Draw.Event.EDITMOVE, {layer: this._shape})
            }
        }), L.CircleMarker.addInitHook((function () {
            L.Edit.CircleMarker && (this.editing = new L.Edit.CircleMarker(this), this.options.editable && this.editing.enable()), this.on("add", (function () {
                this.editing && this.editing.enabled() && this.editing.addHooks()
            })), this.on("remove", (function () {
                this.editing && this.editing.enabled() && this.editing.removeHooks()
            }))
        })), L.Edit = L.Edit || {}, L.Edit.Circle = L.Edit.CircleMarker.extend({
            _createResizeMarker: function () {
                var t = this._shape.getLatLng(), e = this._getResizeMarkerPoint(t);
                this._resizeMarkers = [], this._resizeMarkers.push(this._createMarker(e, this.options.resizeIcon))
            }, _getResizeMarkerPoint: function (t) {
                var e = this._shape._radius * Math.cos(Math.PI / 4), i = this._map.project(t);
                return this._map.unproject([i.x + e, i.y - e])
            }, _resize: function (t) {
                var e = this._moveMarker.getLatLng();
                L.GeometryUtil.isVersion07x() ? radius = e.distanceTo(t) : radius = this._map.distance(e, t), this._shape.setRadius(radius), this._map.editTooltip && this._map._editTooltip.updateContent({
                    text: L.drawLocal.edit.handlers.edit.tooltip.subtext + "<br />" + L.drawLocal.edit.handlers.edit.tooltip.text,
                    subtext: L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(radius, !0, this.options.feet, this.options.nautic)
                }), this._shape.setRadius(radius), this._map.fire(L.Draw.Event.EDITRESIZE, {layer: this._shape})
            }
        }), L.Circle.addInitHook((function () {
            L.Edit.Circle && (this.editing = new L.Edit.Circle(this), this.options.editable && this.editing.enable())
        })), L.Map.mergeOptions({touchExtend: !0}), L.Map.TouchExtend = L.Handler.extend({
            initialize: function (t) {
                this._map = t, this._container = t._container, this._pane = t._panes.overlayPane
            }, addHooks: function () {
                L.DomEvent.on(this._container, "touchstart", this._onTouchStart, this), L.DomEvent.on(this._container, "touchend", this._onTouchEnd, this), L.DomEvent.on(this._container, "touchmove", this._onTouchMove, this), this._detectIE() ? (L.DomEvent.on(this._container, "MSPointerDown", this._onTouchStart, this), L.DomEvent.on(this._container, "MSPointerUp", this._onTouchEnd, this), L.DomEvent.on(this._container, "MSPointerMove", this._onTouchMove, this), L.DomEvent.on(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.on(this._container, "touchcancel", this._onTouchCancel, this), L.DomEvent.on(this._container, "touchleave", this._onTouchLeave, this))
            }, removeHooks: function () {
                L.DomEvent.off(this._container, "touchstart", this._onTouchStart, this), L.DomEvent.off(this._container, "touchend", this._onTouchEnd, this), L.DomEvent.off(this._container, "touchmove", this._onTouchMove, this), this._detectIE() ? (L.DomEvent.off(this._container, "MSPointerDown", this._onTouchStart, this), L.DomEvent.off(this._container, "MSPointerUp", this._onTouchEnd, this), L.DomEvent.off(this._container, "MSPointerMove", this._onTouchMove, this), L.DomEvent.off(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.off(this._container, "touchcancel", this._onTouchCancel, this), L.DomEvent.off(this._container, "touchleave", this._onTouchLeave, this))
            }, _touchEvent: function (t, e) {
                var i = {};
                if (void 0 !== t.touches) {
                    if (!t.touches.length) return;
                    i = t.touches[0]
                } else {
                    if ("touch" !== t.pointerType) return;
                    if (i = t, !this._filterClick(t)) return
                }
                var o = this._map.mouseEventToContainerPoint(i), n = this._map.mouseEventToLayerPoint(i),
                    r = this._map.layerPointToLatLng(n);
                this._map.fire(e, {
                    latlng: r,
                    layerPoint: n,
                    containerPoint: o,
                    pageX: i.pageX,
                    pageY: i.pageY,
                    originalEvent: t
                })
            }, _filterClick: function (t) {
                var e = t.timeStamp || t.originalEvent.timeStamp,
                    i = L.DomEvent._lastClick && e - L.DomEvent._lastClick;
                return i && i > 100 && i < 500 || t.target._simulatedClick && !t._simulated ? (L.DomEvent.stop(t), !1) : (L.DomEvent._lastClick = e, !0)
            }, _onTouchStart: function (t) {
                this._map._loaded && this._touchEvent(t, "touchstart")
            }, _onTouchEnd: function (t) {
                this._map._loaded && this._touchEvent(t, "touchend")
            }, _onTouchCancel: function (t) {
                if (this._map._loaded) {
                    var e = "touchcancel";
                    this._detectIE() && (e = "pointercancel"), this._touchEvent(t, e)
                }
            }, _onTouchLeave: function (t) {
                this._map._loaded && this._touchEvent(t, "touchleave")
            }, _onTouchMove: function (t) {
                this._map._loaded && this._touchEvent(t, "touchmove")
            }, _detectIE: function () {
                var e = t.navigator.userAgent, i = e.indexOf("MSIE ");
                if (i > 0) return parseInt(e.substring(i + 5, e.indexOf(".", i)), 10);
                if (e.indexOf("Trident/") > 0) {
                    var o = e.indexOf("rv:");
                    return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10)
                }
                var n = e.indexOf("Edge/");
                return n > 0 && parseInt(e.substring(n + 5, e.indexOf(".", n)), 10)
            }
        }), L.Map.addInitHook("addHandler", "touchExtend", L.Map.TouchExtend), L.Marker.Touch = L.Marker.extend({
            _initInteraction: function () {
                return this.addInteractiveTarget ? L.Marker.prototype._initInteraction.apply(this) : this._initInteractionLegacy()
            }, _initInteractionLegacy: function () {
                if (this.options.clickable) {
                    var t = this._icon,
                        e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu", "touchstart", "touchend", "touchmove"];
                    this._detectIE ? e.concat(["MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"]) : e.concat(["touchcancel"]), L.DomUtil.addClass(t, "leaflet-clickable"), L.DomEvent.on(t, "click", this._onMouseClick, this), L.DomEvent.on(t, "keypress", this._onKeyPress, this);
                    for (var i = 0; i < e.length; i++) L.DomEvent.on(t, e[i], this._fireMouseEvent, this);
                    L.Handler.MarkerDrag && (this.dragging = new L.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
                }
            }, _detectIE: function () {
                var e = t.navigator.userAgent, i = e.indexOf("MSIE ");
                if (i > 0) return parseInt(e.substring(i + 5, e.indexOf(".", i)), 10);
                if (e.indexOf("Trident/") > 0) {
                    var o = e.indexOf("rv:");
                    return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10)
                }
                var n = e.indexOf("Edge/");
                return n > 0 && parseInt(e.substring(n + 5, e.indexOf(".", n)), 10)
            }
        }), L.LatLngUtil = {
            cloneLatLngs: function (t) {
                for (var e = [], i = 0, o = t.length; i < o; i++) Array.isArray(t[i]) ? e.push(L.LatLngUtil.cloneLatLngs(t[i])) : e.push(this.cloneLatLng(t[i]));
                return e
            }, cloneLatLng: function (t) {
                return L.latLng(t.lat, t.lng)
            }
        }, function () {
            var t = {km: 2, ha: 2, m: 0, mi: 2, ac: 2, yd: 0, ft: 0, nm: 2};
            L.GeometryUtil = L.extend(L.GeometryUtil || {}, {
                geodesicArea: function (t) {
                    var e, i, o = t.length, n = 0, r = Math.PI / 180;
                    if (o > 2) {
                        for (var a = 0; a < o; a++) e = t[a], n += ((i = t[(a + 1) % o]).lng - e.lng) * r * (2 + Math.sin(e.lat * r) + Math.sin(i.lat * r));
                        n = 6378137 * n * 6378137 / 2
                    }
                    return Math.abs(n)
                }, formattedNumber: function (t, e) {
                    var i = parseFloat(t).toFixed(e), o = L.drawLocal.format && L.drawLocal.format.numeric,
                        n = o && o.delimiters, r = n && n.thousands, a = n && n.decimal;
                    if (r || a) {
                        var s = i.split(".");
                        i = r ? s[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + r) : s[0], a = a || ".", s.length > 1 && (i = i + a + s[1])
                    }
                    return i
                }, readableArea: function (e, i, o) {
                    var n, r;
                    return o = L.Util.extend({}, t, o), i ? (r = ["ha", "m"], type = typeof i, "string" === type ? r = [i] : "boolean" !== type && (r = i), n = e >= 1e6 && -1 !== r.indexOf("km") ? L.GeometryUtil.formattedNumber(1e-6 * e, o.km) + " km\xb2" : e >= 1e4 && -1 !== r.indexOf("ha") ? L.GeometryUtil.formattedNumber(1e-4 * e, o.ha) + " ha" : L.GeometryUtil.formattedNumber(e, o.m) + " m\xb2") : n = (e /= .836127) >= 3097600 ? L.GeometryUtil.formattedNumber(e / 3097600, o.mi) + " mi\xb2" : e >= 4840 ? L.GeometryUtil.formattedNumber(e / 4840, o.ac) + " acres" : L.GeometryUtil.formattedNumber(e, o.yd) + " yd\xb2", n
                }, readableDistance: function (e, i, o, n, r) {
                    var a;
                    switch (r = L.Util.extend({}, t, r), i ? "string" == typeof i ? i : "metric" : o ? "feet" : n ? "nauticalMile" : "yards") {
                        case"metric":
                            a = e > 1e3 ? L.GeometryUtil.formattedNumber(e / 1e3, r.km) + " km" : L.GeometryUtil.formattedNumber(e, r.m) + " m";
                            break;
                        case"feet":
                            e *= 3.28083, a = L.GeometryUtil.formattedNumber(e, r.ft) + " ft";
                            break;
                        case"nauticalMile":
                            e *= .53996, a = L.GeometryUtil.formattedNumber(e / 1e3, r.nm) + " nm";
                            break;
                        case"yards":
                        default:
                            a = (e *= 1.09361) > 1760 ? L.GeometryUtil.formattedNumber(e / 1760, r.mi) + " miles" : L.GeometryUtil.formattedNumber(e, r.yd) + " yd"
                    }
                    return a
                }, isVersion07x: function () {
                    var t = L.version.split(".");
                    return 0 === parseInt(t[0], 10) && 7 === parseInt(t[1], 10)
                }
            })
        }(), L.Util.extend(L.LineUtil, {
            segmentsIntersect: function (t, e, i, o) {
                return this._checkCounterclockwise(t, i, o) !== this._checkCounterclockwise(e, i, o) && this._checkCounterclockwise(t, e, i) !== this._checkCounterclockwise(t, e, o)
            }, _checkCounterclockwise: function (t, e, i) {
                return (i.y - t.y) * (e.x - t.x) > (e.y - t.y) * (i.x - t.x)
            }
        }), L.Polyline.include({
            intersects: function () {
                var t, e, i, o = this._getProjectedPoints(), n = o ? o.length : 0;
                if (this._tooFewPointsForIntersection()) return !1;
                for (t = n - 1; t >= 3; t--) if (e = o[t - 1], i = o[t], this._lineSegmentsIntersectsRange(e, i, t - 2)) return !0;
                return !1
            }, newLatLngIntersects: function (t, e) {
                return !!this._map && this.newPointIntersects(this._map.latLngToLayerPoint(t), e)
            }, newPointIntersects: function (t, e) {
                var i = this._getProjectedPoints(), o = i ? i.length : 0, n = i ? i[o - 1] : null, r = o - 2;
                return !this._tooFewPointsForIntersection(1) && this._lineSegmentsIntersectsRange(n, t, r, e ? 1 : 0)
            }, _tooFewPointsForIntersection: function (t) {
                var e = this._getProjectedPoints(), i = e ? e.length : 0;
                return !e || (i += t || 0) <= 3
            }, _lineSegmentsIntersectsRange: function (t, e, i, o) {
                var n, r, a = this._getProjectedPoints();
                o = o || 0;
                for (var s = i; s > o; s--) if (n = a[s - 1], r = a[s], L.LineUtil.segmentsIntersect(t, e, n, r)) return !0;
                return !1
            }, _getProjectedPoints: function () {
                if (!this._defaultShape) return this._originalPoints;
                for (var t = [], e = this._defaultShape(), i = 0; i < e.length; i++) t.push(this._map.latLngToLayerPoint(e[i]));
                return t
            }
        }), L.Polygon.include({
            intersects: function () {
                var t, e, i, o, n = this._getProjectedPoints();
                return !this._tooFewPointsForIntersection() && (!!L.Polyline.prototype.intersects.call(this) || (t = n.length, e = n[0], i = n[t - 1], o = t - 2, this._lineSegmentsIntersectsRange(i, e, o, 1)))
            }
        }), L.Control.Draw = L.Control.extend({
            options: {position: "topleft", draw: {}, edit: !1}, initialize: function (t) {
                if (L.version < "0.7") throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");
                var e;
                L.Control.prototype.initialize.call(this, t), this._toolbars = {}, L.DrawToolbar && this.options.draw && (e = new L.DrawToolbar(this.options.draw), this._toolbars[L.DrawToolbar.TYPE] = e, this._toolbars[L.DrawToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.EditToolbar && this.options.edit && (e = new L.EditToolbar(this.options.edit), this._toolbars[L.EditToolbar.TYPE] = e, this._toolbars[L.EditToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.toolbar = this
            }, onAdd: function (t) {
                var e, i = L.DomUtil.create("div", "leaflet-draw"), o = !1;
                for (var n in this._toolbars) this._toolbars.hasOwnProperty(n) && (e = this._toolbars[n].addToolbar(t)) && (o || (L.DomUtil.hasClass(e, "leaflet-draw-toolbar-top") || L.DomUtil.addClass(e.childNodes[0], "leaflet-draw-toolbar-top"), o = !0), i.appendChild(e));
                return i
            }, onRemove: function () {
                for (var t in this._toolbars) this._toolbars.hasOwnProperty(t) && this._toolbars[t].removeToolbar()
            }, setDrawingOptions: function (t) {
                for (var e in this._toolbars) this._toolbars[e] instanceof L.DrawToolbar && this._toolbars[e].setOptions(t)
            }, _toolbarEnabled: function (t) {
                var e = t.target;
                for (var i in this._toolbars) this._toolbars[i] !== e && this._toolbars[i].disable()
            }
        }), L.Map.mergeOptions({drawControlTooltips: !0, drawControl: !1}), L.Map.addInitHook((function () {
            this.options.drawControl && (this.drawControl = new L.Control.Draw, this.addControl(this.drawControl))
        })), L.Toolbar = L.Class.extend({
            initialize: function (t) {
                L.setOptions(this, t), this._modes = {}, this._actionButtons = [], this._activeMode = null;
                var e = L.version.split(".");
                1 === parseInt(e[0], 10) && parseInt(e[1], 10) >= 2 ? L.Toolbar.include(L.Evented.prototype) : L.Toolbar.include(L.Mixin.Events)
            }, enabled: function () {
                return null !== this._activeMode
            }, disable: function () {
                this.enabled() && this._activeMode.handler.disable()
            }, addToolbar: function (t) {
                var e, i = L.DomUtil.create("div", "leaflet-draw-section"), o = 0, n = this._toolbarClass || "",
                    r = this.getModeHandlers(t);
                for (this._toolbarContainer = L.DomUtil.create("div", "leaflet-draw-toolbar leaflet-bar"), this._map = t, e = 0; e < r.length; e++) r[e].enabled && this._initModeHandler(r[e].handler, this._toolbarContainer, o++, n, r[e].title);
                if (o) return this._lastButtonIndex = --o, this._actionsContainer = L.DomUtil.create("ul", "leaflet-draw-actions"), i.appendChild(this._toolbarContainer), i.appendChild(this._actionsContainer), i
            }, removeToolbar: function () {
                for (var t in this._modes) this._modes.hasOwnProperty(t) && (this._disposeButton(this._modes[t].button, this._modes[t].handler.enable, this._modes[t].handler), this._modes[t].handler.disable(), this._modes[t].handler.off("enabled", this._handlerActivated, this).off("disabled", this._handlerDeactivated, this));
                this._modes = {};
                for (var e = 0, i = this._actionButtons.length; e < i; e++) this._disposeButton(this._actionButtons[e].button, this._actionButtons[e].callback, this);
                this._actionButtons = [], this._actionsContainer = null
            }, _initModeHandler: function (t, e, i, o, n) {
                var r = t.type;
                this._modes[r] = {}, this._modes[r].handler = t, this._modes[r].button = this._createButton({
                    type: r,
                    title: n,
                    className: o + "-" + r,
                    container: e,
                    callback: this._modes[r].handler.enable,
                    context: this._modes[r].handler
                }), this._modes[r].buttonIndex = i, this._modes[r].handler.on("enabled", this._handlerActivated, this).on("disabled", this._handlerDeactivated, this)
            }, _detectIOS: function () {
                return /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream
            }, _createButton: function (t) {
                var e = L.DomUtil.create("a", t.className || "", t.container),
                    i = L.DomUtil.create("span", "sr-only", t.container);
                e.href = "#", e.appendChild(i), t.title && (e.title = t.title, i.innerHTML = t.title), t.text && (e.innerHTML = t.text, i.innerHTML = t.text);
                var o = this._detectIOS() ? "touchstart" : "click";
                return L.DomEvent.on(e, "click", L.DomEvent.stopPropagation).on(e, "mousedown", L.DomEvent.stopPropagation).on(e, "dblclick", L.DomEvent.stopPropagation).on(e, "touchstart", L.DomEvent.stopPropagation).on(e, "click", L.DomEvent.preventDefault).on(e, o, t.callback, t.context), e
            }, _disposeButton: function (t, e) {
                var i = this._detectIOS() ? "touchstart" : "click";
                L.DomEvent.off(t, "click", L.DomEvent.stopPropagation).off(t, "mousedown", L.DomEvent.stopPropagation).off(t, "dblclick", L.DomEvent.stopPropagation).off(t, "touchstart", L.DomEvent.stopPropagation).off(t, "click", L.DomEvent.preventDefault).off(t, i, e)
            }, _handlerActivated: function (t) {
                this.disable(), this._activeMode = this._modes[t.handler], L.DomUtil.addClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._showActionsToolbar(), this.fire("enable")
            }, _handlerDeactivated: function () {
                this._hideActionsToolbar(), L.DomUtil.removeClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._activeMode = null, this.fire("disable")
            }, _createActions: function (t) {
                var e, i, o, n, r = this._actionsContainer, a = this.getActions(t), s = a.length;
                for (i = 0, o = this._actionButtons.length; i < o; i++) this._disposeButton(this._actionButtons[i].button, this._actionButtons[i].callback);
                for (this._actionButtons = []; r.firstChild;) r.removeChild(r.firstChild);
                for (var l = 0; l < s; l++) "enabled" in a[l] && !a[l].enabled || (e = L.DomUtil.create("li", "", r), n = this._createButton({
                    title: a[l].title,
                    text: a[l].text,
                    container: e,
                    callback: a[l].callback,
                    context: a[l].context
                }), this._actionButtons.push({button: n, callback: a[l].callback}))
            }, _showActionsToolbar: function () {
                var t = this._activeMode.buttonIndex, e = this._lastButtonIndex,
                    i = this._activeMode.button.offsetTop - 1;
                this._createActions(this._activeMode.handler), this._actionsContainer.style.top = i + "px", 0 === t && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-top")), t === e && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-bottom")), this._actionsContainer.style.display = "block", this._map.fire(L.Draw.Event.TOOLBAROPENED)
            }, _hideActionsToolbar: function () {
                this._actionsContainer.style.display = "none", L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-top"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-bottom"), this._map.fire(L.Draw.Event.TOOLBARCLOSED)
            }
        }), L.Draw = L.Draw || {}, L.Draw.Tooltip = L.Class.extend({
            initialize: function (t) {
                this._map = t, this._popupPane = t._panes.popupPane, this._visible = !1, this._container = t.options.drawControlTooltips ? L.DomUtil.create("div", "leaflet-draw-tooltip", this._popupPane) : null, this._singleLineLabel = !1, this._map.on("mouseout", this._onMouseOut, this)
            }, dispose: function () {
                this._map.off("mouseout", this._onMouseOut, this), this._container && (this._popupPane.removeChild(this._container), this._container = null)
            }, updateContent: function (t) {
                return this._container ? (t.subtext = t.subtext || "", 0 !== t.subtext.length || this._singleLineLabel ? t.subtext.length > 0 && this._singleLineLabel && (L.DomUtil.removeClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !1) : (L.DomUtil.addClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !0), this._container.innerHTML = (t.subtext.length > 0 ? '<span class="leaflet-draw-tooltip-subtext">' + t.subtext + "</span><br />" : "") + "<span>" + t.text + "</span>", t.text || t.subtext ? (this._visible = !0, this._container.style.visibility = "inherit") : (this._visible = !1, this._container.style.visibility = "hidden"), this) : this
            }, updatePosition: function (t) {
                var e = this._map.latLngToLayerPoint(t), i = this._container;
                return this._container && (this._visible && (i.style.visibility = "inherit"), L.DomUtil.setPosition(i, e)), this
            }, showAsError: function () {
                return this._container && L.DomUtil.addClass(this._container, "leaflet-error-draw-tooltip"), this
            }, removeError: function () {
                return this._container && L.DomUtil.removeClass(this._container, "leaflet-error-draw-tooltip"), this
            }, _onMouseOut: function () {
                this._container && (this._container.style.visibility = "hidden")
            }
        }), L.DrawToolbar = L.Toolbar.extend({
            statics: {TYPE: "draw"},
            options: {polyline: {}, polygon: {}, rectangle: {}, circle: {}, marker: {}, circlemarker: {}},
            initialize: function (t) {
                for (var e in this.options) this.options.hasOwnProperty(e) && t[e] && (t[e] = L.extend({}, this.options[e], t[e]));
                this._toolbarClass = "leaflet-draw-draw", L.Toolbar.prototype.initialize.call(this, t)
            },
            getModeHandlers: function (t) {
                return [{
                    enabled: this.options.polyline,
                    handler: new L.Draw.Polyline(t, this.options.polyline),
                    title: L.drawLocal.draw.toolbar.buttons.polyline
                }, {
                    enabled: this.options.polygon,
                    handler: new L.Draw.Polygon(t, this.options.polygon),
                    title: L.drawLocal.draw.toolbar.buttons.polygon
                }, {
                    enabled: this.options.rectangle,
                    handler: new L.Draw.Rectangle(t, this.options.rectangle),
                    title: L.drawLocal.draw.toolbar.buttons.rectangle
                }, {
                    enabled: this.options.circle,
                    handler: new L.Draw.Circle(t, this.options.circle),
                    title: L.drawLocal.draw.toolbar.buttons.circle
                }, {
                    enabled: this.options.marker,
                    handler: new L.Draw.Marker(t, this.options.marker),
                    title: L.drawLocal.draw.toolbar.buttons.marker
                }, {
                    enabled: this.options.circlemarker,
                    handler: new L.Draw.CircleMarker(t, this.options.circlemarker),
                    title: L.drawLocal.draw.toolbar.buttons.circlemarker
                }]
            },
            getActions: function (t) {
                return [{
                    enabled: t.completeShape,
                    title: L.drawLocal.draw.toolbar.finish.title,
                    text: L.drawLocal.draw.toolbar.finish.text,
                    callback: t.completeShape,
                    context: t
                }, {
                    enabled: t.deleteLastVertex,
                    title: L.drawLocal.draw.toolbar.undo.title,
                    text: L.drawLocal.draw.toolbar.undo.text,
                    callback: t.deleteLastVertex,
                    context: t
                }, {
                    title: L.drawLocal.draw.toolbar.actions.title,
                    text: L.drawLocal.draw.toolbar.actions.text,
                    callback: this.disable,
                    context: this
                }]
            },
            setOptions: function (t) {
                for (var e in L.setOptions(this, t), this._modes) this._modes.hasOwnProperty(e) && t.hasOwnProperty(e) && this._modes[e].handler.setOptions(t[e])
            }
        }), L.EditToolbar = L.Toolbar.extend({
            statics: {TYPE: "edit"},
            options: {
                edit: {
                    selectedPathOptions: {
                        dashArray: "10, 10",
                        fill: !0,
                        fillColor: "#fe57a1",
                        fillOpacity: .1,
                        maintainColor: !1
                    }
                }, remove: {}, poly: null, featureGroup: null
            },
            initialize: function (t) {
                t.edit && (void 0 === t.edit.selectedPathOptions && (t.edit.selectedPathOptions = this.options.edit.selectedPathOptions), t.edit.selectedPathOptions = L.extend({}, this.options.edit.selectedPathOptions, t.edit.selectedPathOptions)), t.remove && (t.remove = L.extend({}, this.options.remove, t.remove)), t.poly && (t.poly = L.extend({}, this.options.poly, t.poly)), this._toolbarClass = "leaflet-draw-edit", L.Toolbar.prototype.initialize.call(this, t), this._selectedFeatureCount = 0
            },
            getModeHandlers: function (t) {
                var e = this.options.featureGroup;
                return [{
                    enabled: this.options.edit,
                    handler: new L.EditToolbar.Edit(t, {
                        featureGroup: e,
                        selectedPathOptions: this.options.edit.selectedPathOptions,
                        poly: this.options.poly
                    }),
                    title: L.drawLocal.edit.toolbar.buttons.edit
                }, {
                    enabled: this.options.remove,
                    handler: new L.EditToolbar.Delete(t, {featureGroup: e}),
                    title: L.drawLocal.edit.toolbar.buttons.remove
                }]
            },
            getActions: function (t) {
                var e = [{
                    title: L.drawLocal.edit.toolbar.actions.save.title,
                    text: L.drawLocal.edit.toolbar.actions.save.text,
                    callback: this._save,
                    context: this
                }, {
                    title: L.drawLocal.edit.toolbar.actions.cancel.title,
                    text: L.drawLocal.edit.toolbar.actions.cancel.text,
                    callback: this.disable,
                    context: this
                }];
                return t.removeAllLayers && e.push({
                    title: L.drawLocal.edit.toolbar.actions.clearAll.title,
                    text: L.drawLocal.edit.toolbar.actions.clearAll.text,
                    callback: this._clearAllLayers,
                    context: this
                }), e
            },
            addToolbar: function (t) {
                var e = L.Toolbar.prototype.addToolbar.call(this, t);
                return this._checkDisabled(), this.options.featureGroup.on("layeradd layerremove", this._checkDisabled, this), e
            },
            removeToolbar: function () {
                this.options.featureGroup.off("layeradd layerremove", this._checkDisabled, this), L.Toolbar.prototype.removeToolbar.call(this)
            },
            disable: function () {
                this.enabled() && (this._activeMode.handler.revertLayers(), L.Toolbar.prototype.disable.call(this))
            },
            _save: function () {
                this._activeMode.handler.save(), this._activeMode && this._activeMode.handler.disable()
            },
            _clearAllLayers: function () {
                this._activeMode.handler.removeAllLayers(), this._activeMode && this._activeMode.handler.disable()
            },
            _checkDisabled: function () {
                var t, e = 0 !== this.options.featureGroup.getLayers().length;
                this.options.edit && (t = this._modes[L.EditToolbar.Edit.TYPE].button, e ? L.DomUtil.removeClass(t, "leaflet-disabled") : L.DomUtil.addClass(t, "leaflet-disabled"), t.setAttribute("title", e ? L.drawLocal.edit.toolbar.buttons.edit : L.drawLocal.edit.toolbar.buttons.editDisabled)), this.options.remove && (t = this._modes[L.EditToolbar.Delete.TYPE].button, e ? L.DomUtil.removeClass(t, "leaflet-disabled") : L.DomUtil.addClass(t, "leaflet-disabled"), t.setAttribute("title", e ? L.drawLocal.edit.toolbar.buttons.remove : L.drawLocal.edit.toolbar.buttons.removeDisabled))
            }
        }), L.EditToolbar.Edit = L.Handler.extend({
            statics: {TYPE: "edit"}, initialize: function (t, e) {
                if (L.Handler.prototype.initialize.call(this, t), L.setOptions(this, e), this._featureGroup = e.featureGroup, !(this._featureGroup instanceof L.FeatureGroup)) throw new Error("options.featureGroup must be a L.FeatureGroup");
                this._uneditedLayerProps = {}, this.type = L.EditToolbar.Edit.TYPE;
                var i = L.version.split(".");
                1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2 ? L.EditToolbar.Edit.include(L.Evented.prototype) : L.EditToolbar.Edit.include(L.Mixin.Events)
            }, enable: function () {
                !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {handler: this.type}), this._map.fire(L.Draw.Event.EDITSTART, {handler: this.type}), L.Handler.prototype.enable.call(this), this._featureGroup.on("layeradd", this._enableLayerEdit, this).on("layerremove", this._disableLayerEdit, this))
            }, disable: function () {
                this._enabled && (this._featureGroup.off("layeradd", this._enableLayerEdit, this).off("layerremove", this._disableLayerEdit, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.EDITSTOP, {handler: this.type}), this.fire("disabled", {handler: this.type}))
            }, addHooks: function () {
                var t = this._map;
                t && (t.getContainer().focus(), this._featureGroup.eachLayer(this._enableLayerEdit, this), this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({
                    text: L.drawLocal.edit.handlers.edit.tooltip.text,
                    subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
                }), t._editTooltip = this._tooltip, this._updateTooltip(), this._map.on("mousemove", this._onMouseMove, this).on("touchmove", this._onMouseMove, this).on("MSPointerMove", this._onMouseMove, this).on(L.Draw.Event.EDITVERTEX, this._updateTooltip, this))
            }, removeHooks: function () {
                this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this), this._uneditedLayerProps = {}, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this).off("touchmove", this._onMouseMove, this).off("MSPointerMove", this._onMouseMove, this).off(L.Draw.Event.EDITVERTEX, this._updateTooltip, this))
            }, revertLayers: function () {
                this._featureGroup.eachLayer((function (t) {
                    this._revertLayer(t)
                }), this)
            }, save: function () {
                var t = new L.LayerGroup;
                this._featureGroup.eachLayer((function (e) {
                    e.edited && (t.addLayer(e), e.edited = !1)
                })), this._map.fire(L.Draw.Event.EDITED, {layers: t})
            }, _backupLayer: function (t) {
                var e = L.Util.stamp(t);
                this._uneditedLayerProps[e] || (t instanceof L.Polyline || t instanceof L.Polygon || t instanceof L.Rectangle ? this._uneditedLayerProps[e] = {latlngs: L.LatLngUtil.cloneLatLngs(t.getLatLngs())} : t instanceof L.Circle ? this._uneditedLayerProps[e] = {
                    latlng: L.LatLngUtil.cloneLatLng(t.getLatLng()),
                    radius: t.getRadius()
                } : (t instanceof L.Marker || t instanceof L.CircleMarker) && (this._uneditedLayerProps[e] = {latlng: L.LatLngUtil.cloneLatLng(t.getLatLng())}))
            }, _getTooltipText: function () {
                return {
                    text: L.drawLocal.edit.handlers.edit.tooltip.text,
                    subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
                }
            }, _updateTooltip: function () {
                this._tooltip.updateContent(this._getTooltipText())
            }, _revertLayer: function (t) {
                var e = L.Util.stamp(t);
                t.edited = !1, this._uneditedLayerProps.hasOwnProperty(e) && (t instanceof L.Polyline || t instanceof L.Polygon || t instanceof L.Rectangle ? t.setLatLngs(this._uneditedLayerProps[e].latlngs) : t instanceof L.Circle ? (t.setLatLng(this._uneditedLayerProps[e].latlng), t.setRadius(this._uneditedLayerProps[e].radius)) : (t instanceof L.Marker || t instanceof L.CircleMarker) && t.setLatLng(this._uneditedLayerProps[e].latlng), t.fire("revert-edited", {layer: t}))
            }, _enableLayerEdit: function (t) {
                var e, i, o = t.layer || t.target || t;
                this._backupLayer(o), this.options.poly && (i = L.Util.extend({}, this.options.poly), o.options.poly = i), this.options.selectedPathOptions && ((e = L.Util.extend({}, this.options.selectedPathOptions)).maintainColor && (e.color = o.options.color, e.fillColor = o.options.fillColor), o.options.original = L.extend({}, o.options), o.options.editing = e), o instanceof L.Marker ? (o.editing && o.editing.enable(), o.dragging.enable(), o.on("dragend", this._onMarkerDragEnd).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onMarkerDragEnd, this).on("MSPointerUp", this._onMarkerDragEnd, this)) : o.editing.enable()
            }, _disableLayerEdit: function (t) {
                var e = t.layer || t.target || t;
                e.edited = !1, e.editing && e.editing.disable(), delete e.options.editing, delete e.options.original, this._selectedPathOptions && (e instanceof L.Marker ? this._toggleMarkerHighlight(e) : (e.setStyle(e.options.previousOptions), delete e.options.previousOptions)), e instanceof L.Marker ? (e.dragging.disable(), e.off("dragend", this._onMarkerDragEnd, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onMarkerDragEnd, this).off("MSPointerUp", this._onMarkerDragEnd, this)) : e.editing.disable()
            }, _onMouseMove: function (t) {
                this._tooltip.updatePosition(t.latlng)
            }, _onMarkerDragEnd: function (t) {
                var e = t.target;
                e.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, {layer: e})
            }, _onTouchMove: function (t) {
                var e = t.originalEvent.changedTouches[0], i = this._map.mouseEventToLayerPoint(e),
                    o = this._map.layerPointToLatLng(i);
                t.target.setLatLng(o)
            }, _hasAvailableLayers: function () {
                return 0 !== this._featureGroup.getLayers().length
            }
        }), L.EditToolbar.Delete = L.Handler.extend({
            statics: {TYPE: "remove"}, initialize: function (t, e) {
                if (L.Handler.prototype.initialize.call(this, t), L.Util.setOptions(this, e), this._deletableLayers = this.options.featureGroup, !(this._deletableLayers instanceof L.FeatureGroup)) throw new Error("options.featureGroup must be a L.FeatureGroup");
                this.type = L.EditToolbar.Delete.TYPE;
                var i = L.version.split(".");
                1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2 ? L.EditToolbar.Delete.include(L.Evented.prototype) : L.EditToolbar.Delete.include(L.Mixin.Events)
            }, enable: function () {
                !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {handler: this.type}), this._map.fire(L.Draw.Event.DELETESTART, {handler: this.type}), L.Handler.prototype.enable.call(this), this._deletableLayers.on("layeradd", this._enableLayerDelete, this).on("layerremove", this._disableLayerDelete, this))
            }, disable: function () {
                this._enabled && (this._deletableLayers.off("layeradd", this._enableLayerDelete, this).off("layerremove", this._disableLayerDelete, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DELETESTOP, {handler: this.type}), this.fire("disabled", {handler: this.type}))
            }, addHooks: function () {
                var t = this._map;
                t && (t.getContainer().focus(), this._deletableLayers.eachLayer(this._enableLayerDelete, this), this._deletedLayers = new L.LayerGroup, this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({text: L.drawLocal.edit.handlers.remove.tooltip.text}), this._map.on("mousemove", this._onMouseMove, this))
            }, removeHooks: function () {
                this._map && (this._deletableLayers.eachLayer(this._disableLayerDelete, this), this._deletedLayers = null, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this))
            }, revertLayers: function () {
                this._deletedLayers.eachLayer((function (t) {
                    this._deletableLayers.addLayer(t), t.fire("revert-deleted", {layer: t})
                }), this)
            }, save: function () {
                this._map.fire(L.Draw.Event.DELETED, {layers: this._deletedLayers})
            }, removeAllLayers: function () {
                this._deletableLayers.eachLayer((function (t) {
                    this._removeLayer({layer: t})
                }), this), this.save()
            }, _enableLayerDelete: function (t) {
                (t.layer || t.target || t).on("click", this._removeLayer, this)
            }, _disableLayerDelete: function (t) {
                var e = t.layer || t.target || t;
                e.off("click", this._removeLayer, this), this._deletedLayers.removeLayer(e)
            }, _removeLayer: function (t) {
                var e = t.layer || t.target || t;
                this._deletableLayers.removeLayer(e), this._deletedLayers.addLayer(e), e.fire("deleted")
            }, _onMouseMove: function (t) {
                this._tooltip.updatePosition(t.latlng)
            }, _hasAvailableLayers: function () {
                return 0 !== this._deletableLayers.getLayers().length
            }
        })
    }, 8552: function (t, e, i) {
        var o = i(852)(i(5639), "DataView");
        t.exports = o
    }, 1989: function (t, e, i) {
        var o = i(1945), n = i(401), r = i(7667), a = i(1327), s = i(1866);

        function l(t) {
            var e = -1, i = null == t ? 0 : t.length;
            for (this.clear(); ++e < i;) {
                var o = t[e];
                this.set(o[0], o[1])
            }
        }

        l.prototype.clear = o, l.prototype.delete = n, l.prototype.get = r, l.prototype.has = a, l.prototype.set = s, t.exports = l
    }, 8407: function (t, e, i) {
        var o = i(7040), n = i(4125), r = i(2117), a = i(7518), s = i(4705);

        function l(t) {
            var e = -1, i = null == t ? 0 : t.length;
            for (this.clear(); ++e < i;) {
                var o = t[e];
                this.set(o[0], o[1])
            }
        }

        l.prototype.clear = o, l.prototype.delete = n, l.prototype.get = r, l.prototype.has = a, l.prototype.set = s, t.exports = l
    }, 7071: function (t, e, i) {
        var o = i(852)(i(5639), "Map");
        t.exports = o
    }, 3369: function (t, e, i) {
        var o = i(4785), n = i(1285), r = i(6e3), a = i(9916), s = i(5265);

        function l(t) {
            var e = -1, i = null == t ? 0 : t.length;
            for (this.clear(); ++e < i;) {
                var o = t[e];
                this.set(o[0], o[1])
            }
        }

        l.prototype.clear = o, l.prototype.delete = n, l.prototype.get = r, l.prototype.has = a, l.prototype.set = s, t.exports = l
    }, 3818: function (t, e, i) {
        var o = i(852)(i(5639), "Promise");
        t.exports = o
    }, 8525: function (t, e, i) {
        var o = i(852)(i(5639), "Set");
        t.exports = o
    }, 6384: function (t, e, i) {
        var o = i(8407), n = i(7465), r = i(3779), a = i(6912), s = i(4758), l = i(4309);

        function h(t) {
            var e = this.__data__ = new o(t);
            this.size = e.size
        }

        h.prototype.clear = n, h.prototype.delete = r, h.prototype.get = a, h.prototype.has = s, h.prototype.set = l, t.exports = h
    }, 2705: function (t, e, i) {
        var o = i(5639).Symbol;
        t.exports = o
    }, 1149: function (t, e, i) {
        var o = i(5639).Uint8Array;
        t.exports = o
    }, 577: function (t, e, i) {
        var o = i(852)(i(5639), "WeakMap");
        t.exports = o
    }, 7412: function (t) {
        t.exports = function (t, e) {
            for (var i = -1, o = null == t ? 0 : t.length; ++i < o && !1 !== e(t[i], i, t);) ;
            return t
        }
    }, 4963: function (t) {
        t.exports = function (t, e) {
            for (var i = -1, o = null == t ? 0 : t.length, n = 0, r = []; ++i < o;) {
                var a = t[i];
                e(a, i, t) && (r[n++] = a)
            }
            return r
        }
    }, 4636: function (t, e, i) {
        var o = i(2545), n = i(5694), r = i(1469), a = i(4144), s = i(5776), l = i(6719),
            h = Object.prototype.hasOwnProperty;
        t.exports = function (t, e) {
            var i = r(t), c = !i && n(t), u = !i && !c && a(t), d = !i && !c && !u && l(t), p = i || c || u || d,
                _ = p ? o(t.length, String) : [], f = _.length;
            for (var L in t) !e && !h.call(t, L) || p && ("length" == L || u && ("offset" == L || "parent" == L) || d && ("buffer" == L || "byteLength" == L || "byteOffset" == L) || s(L, f)) || _.push(L);
            return _
        }
    }, 2488: function (t) {
        t.exports = function (t, e) {
            for (var i = -1, o = e.length, n = t.length; ++i < o;) t[n + i] = e[i];
            return t
        }
    }, 4865: function (t, e, i) {
        var o = i(9465), n = i(7813), r = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, i) {
            var a = t[e];
            r.call(t, e) && n(a, i) && (void 0 !== i || e in t) || o(t, e, i)
        }
    }, 8470: function (t, e, i) {
        var o = i(7813);
        t.exports = function (t, e) {
            for (var i = t.length; i--;) if (o(t[i][0], e)) return i;
            return -1
        }
    }, 4037: function (t, e, i) {
        var o = i(8363), n = i(3674);
        t.exports = function (t, e) {
            return t && o(e, n(e), t)
        }
    }, 3886: function (t, e, i) {
        var o = i(8363), n = i(1704);
        t.exports = function (t, e) {
            return t && o(e, n(e), t)
        }
    }, 9465: function (t, e, i) {
        var o = i(8777);
        t.exports = function (t, e, i) {
            "__proto__" == e && o ? o(t, e, {configurable: !0, enumerable: !0, value: i, writable: !0}) : t[e] = i
        }
    }, 5990: function (t, e, i) {
        var o = i(6384), n = i(7412), r = i(4865), a = i(4037), s = i(3886), l = i(4626), h = i(278), c = i(8805),
            u = i(1911), d = i(8234), p = i(6904), _ = i(4160), f = i(3824), L = i(9148), m = i(8517), v = i(1469),
            g = i(4144), y = i(6688), b = i(3218), w = i(2928), k = i(3674), E = i(1704), M = "[object Arguments]",
            x = "[object Function]", D = "[object Object]", T = {};
        T[M] = T["[object Array]"] = T["[object ArrayBuffer]"] = T["[object DataView]"] = T["[object Boolean]"] = T["[object Date]"] = T["[object Float32Array]"] = T["[object Float64Array]"] = T["[object Int8Array]"] = T["[object Int16Array]"] = T["[object Int32Array]"] = T["[object Map]"] = T["[object Number]"] = T[D] = T["[object RegExp]"] = T["[object Set]"] = T["[object String]"] = T["[object Symbol]"] = T["[object Uint8Array]"] = T["[object Uint8ClampedArray]"] = T["[object Uint16Array]"] = T["[object Uint32Array]"] = !0, T["[object Error]"] = T[x] = T["[object WeakMap]"] = !1, t.exports = function t(e, i, C, P, O, S) {
            var j, I = 1 & i, U = 2 & i, A = 4 & i;
            if (C && (j = O ? C(e, P, O, S) : C(e)), void 0 !== j) return j;
            if (!b(e)) return e;
            var z = v(e);
            if (z) {
                if (j = f(e), !I) return h(e, j)
            } else {
                var H = _(e), R = H == x || "[object GeneratorFunction]" == H;
                if (g(e)) return l(e, I);
                if (H == D || H == M || R && !O) {
                    if (j = U || R ? {} : m(e), !I) return U ? u(e, s(j, e)) : c(e, a(j, e))
                } else {
                    if (!T[H]) return O ? e : {};
                    j = L(e, H, I)
                }
            }
            S || (S = new o);
            var G = S.get(e);
            if (G) return G;
            S.set(e, j), w(e) ? e.forEach((function (o) {
                j.add(t(o, i, C, o, e, S))
            })) : y(e) && e.forEach((function (o, n) {
                j.set(n, t(o, i, C, n, e, S))
            }));
            var N = z ? void 0 : (A ? U ? p : d : U ? E : k)(e);
            return n(N || e, (function (o, n) {
                N && (o = e[n = o]), r(j, n, t(o, i, C, n, e, S))
            })), j
        }
    }, 3118: function (t, e, i) {
        var o = i(3218), n = Object.create, r = function () {
            function t() {
            }

            return function (e) {
                if (!o(e)) return {};
                if (n) return n(e);
                t.prototype = e;
                var i = new t;
                return t.prototype = void 0, i
            }
        }();
        t.exports = r
    }, 8866: function (t, e, i) {
        var o = i(2488), n = i(1469);
        t.exports = function (t, e, i) {
            var r = e(t);
            return n(t) ? r : o(r, i(t))
        }
    }, 4239: function (t, e, i) {
        var o = i(2705), n = i(9607), r = i(2333), a = o ? o.toStringTag : void 0;
        t.exports = function (t) {
            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? n(t) : r(t)
        }
    }, 9454: function (t, e, i) {
        var o = i(4239), n = i(7005);
        t.exports = function (t) {
            return n(t) && "[object Arguments]" == o(t)
        }
    }, 5588: function (t, e, i) {
        var o = i(4160), n = i(7005);
        t.exports = function (t) {
            return n(t) && "[object Map]" == o(t)
        }
    }, 8458: function (t, e, i) {
        var o = i(3560), n = i(5346), r = i(3218), a = i(346), s = /^\[object .+?Constructor\]$/,
            l = Function.prototype, h = Object.prototype, c = l.toString, u = h.hasOwnProperty,
            d = RegExp("^" + c.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t.exports = function (t) {
            return !(!r(t) || n(t)) && (o(t) ? d : s).test(a(t))
        }
    }, 9221: function (t, e, i) {
        var o = i(4160), n = i(7005);
        t.exports = function (t) {
            return n(t) && "[object Set]" == o(t)
        }
    }, 8749: function (t, e, i) {
        var o = i(4239), n = i(1780), r = i(7005), a = {};
        a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function (t) {
            return r(t) && n(t.length) && !!a[o(t)]
        }
    }, 280: function (t, e, i) {
        var o = i(5726), n = i(6916), r = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (!o(t)) return n(t);
            var e = [];
            for (var i in Object(t)) r.call(t, i) && "constructor" != i && e.push(i);
            return e
        }
    }, 313: function (t, e, i) {
        var o = i(3218), n = i(5726), r = i(3498), a = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (!o(t)) return r(t);
            var e = n(t), i = [];
            for (var s in t) ("constructor" != s || !e && a.call(t, s)) && i.push(s);
            return i
        }
    }, 2545: function (t) {
        t.exports = function (t, e) {
            for (var i = -1, o = Array(t); ++i < t;) o[i] = e(i);
            return o
        }
    }, 1717: function (t) {
        t.exports = function (t) {
            return function (e) {
                return t(e)
            }
        }
    }, 4318: function (t, e, i) {
        var o = i(1149);
        t.exports = function (t) {
            var e = new t.constructor(t.byteLength);
            return new o(e).set(new o(t)), e
        }
    }, 4626: function (t, e, i) {
        t = i.nmd(t);
        var o = i(5639), n = e && !e.nodeType && e, r = n && t && !t.nodeType && t,
            a = r && r.exports === n ? o.Buffer : void 0, s = a ? a.allocUnsafe : void 0;
        t.exports = function (t, e) {
            if (e) return t.slice();
            var i = t.length, o = s ? s(i) : new t.constructor(i);
            return t.copy(o), o
        }
    }, 7157: function (t, e, i) {
        var o = i(4318);
        t.exports = function (t, e) {
            var i = e ? o(t.buffer) : t.buffer;
            return new t.constructor(i, t.byteOffset, t.byteLength)
        }
    }, 3147: function (t) {
        var e = /\w*$/;
        t.exports = function (t) {
            var i = new t.constructor(t.source, e.exec(t));
            return i.lastIndex = t.lastIndex, i
        }
    }, 419: function (t, e, i) {
        var o = i(2705), n = o ? o.prototype : void 0, r = n ? n.valueOf : void 0;
        t.exports = function (t) {
            return r ? Object(r.call(t)) : {}
        }
    }, 7133: function (t, e, i) {
        var o = i(4318);
        t.exports = function (t, e) {
            var i = e ? o(t.buffer) : t.buffer;
            return new t.constructor(i, t.byteOffset, t.length)
        }
    }, 278: function (t) {
        t.exports = function (t, e) {
            var i = -1, o = t.length;
            for (e || (e = Array(o)); ++i < o;) e[i] = t[i];
            return e
        }
    }, 8363: function (t, e, i) {
        var o = i(4865), n = i(9465);
        t.exports = function (t, e, i, r) {
            var a = !i;
            i || (i = {});
            for (var s = -1, l = e.length; ++s < l;) {
                var h = e[s], c = r ? r(i[h], t[h], h, i, t) : void 0;
                void 0 === c && (c = t[h]), a ? n(i, h, c) : o(i, h, c)
            }
            return i
        }
    }, 8805: function (t, e, i) {
        var o = i(8363), n = i(9551);
        t.exports = function (t, e) {
            return o(t, n(t), e)
        }
    }, 1911: function (t, e, i) {
        var o = i(8363), n = i(1442);
        t.exports = function (t, e) {
            return o(t, n(t), e)
        }
    }, 4429: function (t, e, i) {
        var o = i(5639)["__core-js_shared__"];
        t.exports = o
    }, 8777: function (t, e, i) {
        var o = i(852), n = function () {
            try {
                var t = o(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (e) {
            }
        }();
        t.exports = n
    }, 1957: function (t, e, i) {
        var o = "object" == typeof i.g && i.g && i.g.Object === Object && i.g;
        t.exports = o
    }, 8234: function (t, e, i) {
        var o = i(8866), n = i(9551), r = i(3674);
        t.exports = function (t) {
            return o(t, r, n)
        }
    }, 6904: function (t, e, i) {
        var o = i(8866), n = i(1442), r = i(1704);
        t.exports = function (t) {
            return o(t, r, n)
        }
    }, 5050: function (t, e, i) {
        var o = i(4674);
        t.exports = function (t, e) {
            var i = t.__data__;
            return o(e) ? i["string" == typeof e ? "string" : "hash"] : i.map
        }
    }, 852: function (t, e, i) {
        var o = i(8458), n = i(7801);
        t.exports = function (t, e) {
            var i = n(t, e);
            return o(i) ? i : void 0
        }
    }, 5924: function (t, e, i) {
        var o = i(5569)(Object.getPrototypeOf, Object);
        t.exports = o
    }, 9607: function (t, e, i) {
        var o = i(2705), n = Object.prototype, r = n.hasOwnProperty, a = n.toString, s = o ? o.toStringTag : void 0;
        t.exports = function (t) {
            var e = r.call(t, s), i = t[s];
            try {
                t[s] = void 0;
                var o = !0
            } catch (l) {
            }
            var n = a.call(t);
            return o && (e ? t[s] = i : delete t[s]), n
        }
    }, 9551: function (t, e, i) {
        var o = i(4963), n = i(479), r = Object.prototype.propertyIsEnumerable, a = Object.getOwnPropertySymbols,
            s = a ? function (t) {
                return null == t ? [] : (t = Object(t), o(a(t), (function (e) {
                    return r.call(t, e)
                })))
            } : n;
        t.exports = s
    }, 1442: function (t, e, i) {
        var o = i(2488), n = i(5924), r = i(9551), a = i(479), s = Object.getOwnPropertySymbols ? function (t) {
            for (var e = []; t;) o(e, r(t)), t = n(t);
            return e
        } : a;
        t.exports = s
    }, 4160: function (t, e, i) {
        var o = i(8552), n = i(7071), r = i(3818), a = i(8525), s = i(577), l = i(4239), h = i(346), c = "[object Map]",
            u = "[object Promise]", d = "[object Set]", p = "[object WeakMap]", _ = "[object DataView]", f = h(o),
            L = h(n), m = h(r), v = h(a), g = h(s), y = l;
        (o && y(new o(new ArrayBuffer(1))) != _ || n && y(new n) != c || r && y(r.resolve()) != u || a && y(new a) != d || s && y(new s) != p) && (y = function (t) {
            var e = l(t), i = "[object Object]" == e ? t.constructor : void 0, o = i ? h(i) : "";
            if (o) switch (o) {
                case f:
                    return _;
                case L:
                    return c;
                case m:
                    return u;
                case v:
                    return d;
                case g:
                    return p
            }
            return e
        }), t.exports = y
    }, 7801: function (t) {
        t.exports = function (t, e) {
            return null == t ? void 0 : t[e]
        }
    }, 1945: function (t, e, i) {
        var o = i(4536);
        t.exports = function () {
            this.__data__ = o ? o(null) : {}, this.size = 0
        }
    }, 401: function (t) {
        t.exports = function (t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0, e
        }
    }, 7667: function (t, e, i) {
        var o = i(4536), n = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var e = this.__data__;
            if (o) {
                var i = e[t];
                return "__lodash_hash_undefined__" === i ? void 0 : i
            }
            return n.call(e, t) ? e[t] : void 0
        }
    }, 1327: function (t, e, i) {
        var o = i(4536), n = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var e = this.__data__;
            return o ? void 0 !== e[t] : n.call(e, t)
        }
    }, 1866: function (t, e, i) {
        var o = i(4536);
        t.exports = function (t, e) {
            var i = this.__data__;
            return this.size += this.has(t) ? 0 : 1, i[t] = o && void 0 === e ? "__lodash_hash_undefined__" : e, this
        }
    }, 3824: function (t) {
        var e = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var i = t.length, o = new t.constructor(i);
            return i && "string" == typeof t[0] && e.call(t, "index") && (o.index = t.index, o.input = t.input), o
        }
    }, 9148: function (t, e, i) {
        var o = i(4318), n = i(7157), r = i(3147), a = i(419), s = i(7133);
        t.exports = function (t, e, i) {
            var l = t.constructor;
            switch (e) {
                case"[object ArrayBuffer]":
                    return o(t);
                case"[object Boolean]":
                case"[object Date]":
                    return new l(+t);
                case"[object DataView]":
                    return n(t, i);
                case"[object Float32Array]":
                case"[object Float64Array]":
                case"[object Int8Array]":
                case"[object Int16Array]":
                case"[object Int32Array]":
                case"[object Uint8Array]":
                case"[object Uint8ClampedArray]":
                case"[object Uint16Array]":
                case"[object Uint32Array]":
                    return s(t, i);
                case"[object Map]":
                    return new l;
                case"[object Number]":
                case"[object String]":
                    return new l(t);
                case"[object RegExp]":
                    return r(t);
                case"[object Set]":
                    return new l;
                case"[object Symbol]":
                    return a(t)
            }
        }
    }, 8517: function (t, e, i) {
        var o = i(3118), n = i(5924), r = i(5726);
        t.exports = function (t) {
            return "function" != typeof t.constructor || r(t) ? {} : o(n(t))
        }
    }, 5776: function (t) {
        var e = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, i) {
            var o = typeof t;
            return !!(i = null == i ? 9007199254740991 : i) && ("number" == o || "symbol" != o && e.test(t)) && t > -1 && t % 1 == 0 && t < i
        }
    }, 4674: function (t) {
        t.exports = function (t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
        }
    }, 5346: function (t, e, i) {
        var o = i(4429), n = function () {
            var t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();
        t.exports = function (t) {
            return !!n && n in t
        }
    }, 5726: function (t) {
        var e = Object.prototype;
        t.exports = function (t) {
            var i = t && t.constructor;
            return t === ("function" == typeof i && i.prototype || e)
        }
    }, 7040: function (t) {
        t.exports = function () {
            this.__data__ = [], this.size = 0
        }
    }, 4125: function (t, e, i) {
        var o = i(8470), n = Array.prototype.splice;
        t.exports = function (t) {
            var e = this.__data__, i = o(e, t);
            return !(i < 0) && (i == e.length - 1 ? e.pop() : n.call(e, i, 1), --this.size, !0)
        }
    }, 2117: function (t, e, i) {
        var o = i(8470);
        t.exports = function (t) {
            var e = this.__data__, i = o(e, t);
            return i < 0 ? void 0 : e[i][1]
        }
    }, 7518: function (t, e, i) {
        var o = i(8470);
        t.exports = function (t) {
            return o(this.__data__, t) > -1
        }
    }, 4705: function (t, e, i) {
        var o = i(8470);
        t.exports = function (t, e) {
            var i = this.__data__, n = o(i, t);
            return n < 0 ? (++this.size, i.push([t, e])) : i[n][1] = e, this
        }
    }, 4785: function (t, e, i) {
        var o = i(1989), n = i(8407), r = i(7071);
        t.exports = function () {
            this.size = 0, this.__data__ = {hash: new o, map: new (r || n), string: new o}
        }
    }, 1285: function (t, e, i) {
        var o = i(5050);
        t.exports = function (t) {
            var e = o(this, t).delete(t);
            return this.size -= e ? 1 : 0, e
        }
    }, 6e3: function (t, e, i) {
        var o = i(5050);
        t.exports = function (t) {
            return o(this, t).get(t)
        }
    }, 9916: function (t, e, i) {
        var o = i(5050);
        t.exports = function (t) {
            return o(this, t).has(t)
        }
    }, 5265: function (t, e, i) {
        var o = i(5050);
        t.exports = function (t, e) {
            var i = o(this, t), n = i.size;
            return i.set(t, e), this.size += i.size == n ? 0 : 1, this
        }
    }, 4536: function (t, e, i) {
        var o = i(852)(Object, "create");
        t.exports = o
    }, 6916: function (t, e, i) {
        var o = i(5569)(Object.keys, Object);
        t.exports = o
    }, 3498: function (t) {
        t.exports = function (t) {
            var e = [];
            if (null != t) for (var i in Object(t)) e.push(i);
            return e
        }
    }, 1167: function (t, e, i) {
        t = i.nmd(t);
        var o = i(1957), n = e && !e.nodeType && e, r = n && t && !t.nodeType && t,
            a = r && r.exports === n && o.process, s = function () {
                try {
                    var t = r && r.require && r.require("util").types;
                    return t || a && a.binding && a.binding("util")
                } catch (e) {
                }
            }();
        t.exports = s
    }, 2333: function (t) {
        var e = Object.prototype.toString;
        t.exports = function (t) {
            return e.call(t)
        }
    }, 5569: function (t) {
        t.exports = function (t, e) {
            return function (i) {
                return t(e(i))
            }
        }
    }, 5639: function (t, e, i) {
        var o = i(1957), n = "object" == typeof self && self && self.Object === Object && self,
            r = o || n || Function("return this")();
        t.exports = r
    }, 7465: function (t, e, i) {
        var o = i(8407);
        t.exports = function () {
            this.__data__ = new o, this.size = 0
        }
    }, 3779: function (t) {
        t.exports = function (t) {
            var e = this.__data__, i = e.delete(t);
            return this.size = e.size, i
        }
    }, 6912: function (t) {
        t.exports = function (t) {
            return this.__data__.get(t)
        }
    }, 4758: function (t) {
        t.exports = function (t) {
            return this.__data__.has(t)
        }
    }, 4309: function (t, e, i) {
        var o = i(8407), n = i(7071), r = i(3369);
        t.exports = function (t, e) {
            var i = this.__data__;
            if (i instanceof o) {
                var a = i.__data__;
                if (!n || a.length < 199) return a.push([t, e]), this.size = ++i.size, this;
                i = this.__data__ = new r(a)
            }
            return i.set(t, e), this.size = i.size, this
        }
    }, 346: function (t) {
        var e = Function.prototype.toString;
        t.exports = function (t) {
            if (null != t) {
                try {
                    return e.call(t)
                } catch (i) {
                }
                try {
                    return t + ""
                } catch (i) {
                }
            }
            return ""
        }
    }, 361: function (t, e, i) {
        var o = i(5990);
        t.exports = function (t) {
            return o(t, 5)
        }
    }, 7813: function (t) {
        t.exports = function (t, e) {
            return t === e || t !== t && e !== e
        }
    }, 5694: function (t, e, i) {
        var o = i(9454), n = i(7005), r = Object.prototype, a = r.hasOwnProperty, s = r.propertyIsEnumerable,
            l = o(function () {
                return arguments
            }()) ? o : function (t) {
                return n(t) && a.call(t, "callee") && !s.call(t, "callee")
            };
        t.exports = l
    }, 1469: function (t) {
        var e = Array.isArray;
        t.exports = e
    }, 1240: function (t, e, i) {
        var o = i(3560), n = i(1780);
        t.exports = function (t) {
            return null != t && n(t.length) && !o(t)
        }
    }, 4144: function (t, e, i) {
        t = i.nmd(t);
        var o = i(5639), n = i(5062), r = e && !e.nodeType && e, a = r && t && !t.nodeType && t,
            s = a && a.exports === r ? o.Buffer : void 0, l = (s ? s.isBuffer : void 0) || n;
        t.exports = l
    }, 3560: function (t, e, i) {
        var o = i(4239), n = i(3218);
        t.exports = function (t) {
            if (!n(t)) return !1;
            var e = o(t);
            return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
        }
    }, 1780: function (t) {
        t.exports = function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        }
    }, 6688: function (t, e, i) {
        var o = i(5588), n = i(1717), r = i(1167), a = r && r.isMap, s = a ? n(a) : o;
        t.exports = s
    }, 3218: function (t) {
        t.exports = function (t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
    }, 7005: function (t) {
        t.exports = function (t) {
            return null != t && "object" == typeof t
        }
    }, 2928: function (t, e, i) {
        var o = i(9221), n = i(1717), r = i(1167), a = r && r.isSet, s = a ? n(a) : o;
        t.exports = s
    }, 6719: function (t, e, i) {
        var o = i(8749), n = i(1717), r = i(1167), a = r && r.isTypedArray, s = a ? n(a) : o;
        t.exports = s
    }, 3674: function (t, e, i) {
        var o = i(4636), n = i(280), r = i(1240);
        t.exports = function (t) {
            return r(t) ? o(t) : n(t)
        }
    }, 1704: function (t, e, i) {
        var o = i(4636), n = i(313), r = i(1240);
        t.exports = function (t) {
            return r(t) ? o(t, !0) : n(t)
        }
    }, 479: function (t) {
        t.exports = function () {
            return []
        }
    }, 5062: function (t) {
        t.exports = function () {
            return !1
        }
    }, 5093: function (t, e, i) {
        "use strict";

        function o(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, o = new Array(e); i < e; i++) o[i] = t[i];
            return o
        }

        i.d(e, {
            Z: function () {
                return o
            }
        })
    }, 4121: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return n
            }
        });
        var o = i(355);

        function n(t, e) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
                    var i = [], o = !0, n = !1, r = void 0;
                    try {
                        for (var a, s = t[Symbol.iterator](); !(o = (a = s.next()).done) && (i.push(a.value), !e || i.length !== e); o = !0) ;
                    } catch (l) {
                        n = !0, r = l
                    } finally {
                        try {
                            o || null == s.return || s.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                    return i
                }
            }(t, e) || (0, o.Z)(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
    }, 9999: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return r
            }
        });
        var o = i(5093);
        var n = i(355);

        function r(t) {
            return function (t) {
                if (Array.isArray(t)) return (0, o.Z)(t)
            }(t) || function (t) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }(t) || (0, n.Z)(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
    }, 355: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return n
            }
        });
        var o = i(5093);

        function n(t, e) {
            if (t) {
                if ("string" === typeof t) return (0, o.Z)(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? (0, o.Z)(t, e) : void 0
            }
        }
    }, 5767: function (t, e, i) {
        "use strict";
        var o, n = (o = i(7294)) && "object" === typeof o && "default" in o ? o.default : o;

        function r(t) {
            return function () {
                return t
            }
        }

        var a = function () {
        };
        a.thatReturns = r, a.thatReturnsFalse = r(!1), a.thatReturnsTrue = r(!0), a.thatReturnsNull = r(null), a.thatReturnsThis = function () {
            return this
        }, a.thatReturnsArgument = function (t) {
            return t
        };
        var s = a, l = Object.freeze({default: s, __moduleExports: s});
        var h = function (t, e, i, o, n, r, a, s) {
                if (!t) {
                    var l;
                    if (void 0 === e) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                        var h = [i, o, n, r, a, s], c = 0;
                        (l = new Error(e.replace(/%s/g, (function () {
                            return h[c++]
                        })))).name = "Invariant Violation"
                    }
                    throw l.framesToPop = 1, l
                }
            }, c = Object.freeze({default: h, __moduleExports: h}), u = l && s || l, d = Object.getOwnPropertySymbols,
            p = Object.prototype.hasOwnProperty, _ = Object.prototype.propertyIsEnumerable;

        function f(t) {
            if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }

        (function () {
            try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                if ("0123456789" !== Object.getOwnPropertyNames(e).map((function (t) {
                    return e[t]
                })).join("")) return !1;
                var o = {};
                return "abcdefghijklmnopqrst".split("").forEach((function (t) {
                    o[t] = t
                })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
            } catch (n) {
                return !1
            }
        })() && Object.assign;
        var L = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", m = Object.freeze({default: L, __moduleExports: L}),
            v = c && h || c, g = m ? L : m;
        var y = function () {
            function t(t, e, i, o, n, r) {
                r !== g && v(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
            }

            function e() {
                return t
            }

            t.isRequired = t;
            var i = {
                array: t,
                bool: t,
                func: t,
                number: t,
                object: t,
                string: t,
                symbol: t,
                any: t,
                arrayOf: e,
                element: t,
                instanceOf: e,
                node: t,
                objectOf: e,
                oneOf: e,
                oneOfType: e,
                shape: e,
                exact: e
            };
            return i.checkPropTypes = u, i.PropTypes = i, i
        }, b = Object.freeze({default: y, __moduleExports: y}), w = b && y || b, k = function (t, e) {
            return t(e = {exports: {}}, e.exports), e.exports
        }((function (t) {
            t.exports = w()
        })), E = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), M = function (t) {
            var e = t.snapshot;
            return n.createElement("div", {className: "react-thumbnail-generator"}, n.createElement("img", {
                src: e,
                alt: "my video thumbnail"
            }))
        }, x = function (t) {
            function e(t) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i = function (t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== typeof e && "function" !== typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return i.getSnapShot = function () {
                    try {
                        var t = i.props, e = t.width, o = t.height, n = i.refs.videoEl, r = i.refs.canvas;
                        r.height = n.videoHeight, r.width = n.videoWidth, e && o ? r.getContext("2d").drawImage(n, 0, 0, e, o) : r.getContext("2d").drawImage(n, 0, 0);
                        var a = r.toDataURL("image/png");
                        n.src = "", n.remove(), r.remove(), i.setState({snapshot: a}), i.state.thumbnailHandler && i.state.thumbnailHandler(a)
                    } catch (s) {
                        console.error(s)
                    }
                }, i.state = {
                    dataLoaded: !1,
                    metadataLoaded: !1,
                    seeked: !1,
                    snapshot: !1,
                    suspended: !1,
                    cors: t.cors,
                    width: t.width,
                    height: t.height,
                    renderThumbnail: t.renderThumbnail,
                    snapshotAtTime: t.snapshotAtTime,
                    thumbnailHandler: t.thumbnailHandler,
                    videoUrl: t.videoUrl
                }, i
            }

            return function (t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), E(e, [{
                key: "render", value: function () {
                    var t = this, e = this.state, i = e.renderThumbnail, o = e.snapshot, r = e.videoUrl;
                    return o ? i ? n.createElement(M, {snapshot: o}) : null : n.createElement("div", {className: "react-thumbnail-generator"}, n.createElement("canvas", {
                        className: "snapshot-generator",
                        ref: "canvas"
                    }), n.createElement("video", {
                        muted: !0,
                        className: "snapshot-generator",
                        ref: "videoEl",
                        src: r,
                        onLoadedMetadata: function () {
                            return t.setState({metadataLoaded: !0})
                        },
                        onLoadedData: function () {
                            return t.setState({dataLoaded: !0})
                        },
                        onSuspend: function () {
                            return t.setState({suspended: !0})
                        },
                        onSeeked: function () {
                            return t.setState({seeked: !0})
                        }
                    }))
                }
            }, {
                key: "componentWillReceiveProps", value: function (t) {
                    var e = !1, i = {};
                    for (var o in t) t[o] !== this.props[o] && (i[o] = t[o], e || (e = !0));
                    e && this.setState(i)
                }
            }, {
                key: "componentDidMount", value: function () {
                    this.state.cors || this.refs.videoEl.setAttribute("crossOrigin", "Anonymous")
                }
            }, {
                key: "componentDidUpdate", value: function (t, e) {
                    if (!this.state.snapshot) {
                        var i = this.state, o = i.metadataLoaded, n = i.dataLoaded, r = i.suspended, a = i.seeked,
                            s = i.snapshot, l = i.snapshotAtTime;
                        o && n && r && ((!this.refs.videoEl.currentTime || this.refs.videoEl.currentTime < this.state.snapshotAtTime) && (this.refs.videoEl.currentTime = l), a && !s && this.getSnapShot())
                    }
                }
            }]), e
        }(n.Component);
        x.propTypes = {
            cors: k.bool,
            width: k.number,
            height: k.number,
            renderThumbnail: k.bool,
            snapshotAtTime: k.number,
            thumbnailHandler: k.func,
            videoUrl: k.string.isRequired
        }, x.defaultProps = {cors: !1, renderThumbnail: !0, snapshotAtTime: 2}, t.exports = x
    }, 9481: function (t) {
        function e(t, e) {
            return void 0 === t || null === t ? e : t
        }

        t.exports = function (t) {
            var i, o = e((t = t || {}).max, 1), n = e(t.min, 0), r = e(t.autostart, !0),
                a = e(t.ignoreSameProgress, !1), s = null, l = null, h = null,
                c = (i = e(t.historyTimeConstant, 2.5), function (t, e, o) {
                    return t + o / (o + i) * (e - t)
                });

            function u() {
                d(n)
            }

            function d(t, e) {
                if ("number" !== typeof e && (e = Date.now()), l !== e && (!a || h !== t)) {
                    if (null === l || null === h) return h = t, void (l = e);
                    var i = .001 * (e - l), o = (t - h) / i;
                    s = null === s ? o : c(s, o, i), h = t, l = e
                }
            }

            return {
                start: u, reset: function () {
                    s = null, l = null, h = null, r && u()
                }, report: d, estimate: function (t) {
                    if (null === h) return 1 / 0;
                    if (h >= o) return 0;
                    if (null === s) return 1 / 0;
                    var e = (o - h) / s;
                    return "number" === typeof t && "number" === typeof l && (e -= .001 * (t - l)), Math.max(0, e)
                }, rate: function () {
                    return null === s ? 0 : s
                }
            }
        }
    }
}]);