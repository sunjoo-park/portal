(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[607], {
    4607: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, {
            default: function () {
                return Ie
            }
        });
        var a = n(5579), o = n(4121), i = n(809), s = n.n(i), r = n(2447), l = n(4047), c = n(2700), u = n(4706),
            d = n(8127), p = n(4102), h = n(775), f = n(6265), m = n(5243), g = (n(1787), n(7294)), v = n.n(g),
            y = n(2689), b = n(2609), A = n(9481), S = n.n(A), k = n(6486), Z = n(8770), O = function (e, t) {
                return function (e) {
                    return Z._[e % Z._.length]
                }(t)
            };

        function I(e, t, n, a, o, i, s) {
            var r = [], l = [], c = Z.b;
            return n.annotations.forEach((function (e, n) {
                switch (l = [], e.annotationID = "".concat(n), e.boundType) {
                    case"masks":
                    case"polygon":
                        var s;
                        if (void 0 !== e.contour) null === (s = e.contour) || void 0 === s || s.forEach((function (e) {
                            l.push(m.latLng((1 - e[1]) * i, e[0] * o))
                        }));
                        break;
                    case"rectangle":
                        e.bound.forEach((function (e) {
                            l.push(m.latLng((1 - e[1]) * i, e[0] * o))
                        }))
                }
                var u;
                switch (e.boundType) {
                    case"rectangle":
                        u = m.rectangle;
                        break;
                    case"polygon":
                    case"masks":
                        u = m.polygon;
                        break;
                    default:
                        u = m.rectangle
                }
                var d = O(0, e.tag.id);
                c.color = d, c.fillColor = d, c.annotationTag = e.tag.id, c.annotationID = e.annotationID, c.annotationType = e.boundType, c.annotationProjectID = a, c.confidence = e.confidence, r.push(function (e, t, n, a, o) {
                    n.options.annotationID = o;
                    var i = t.tags, s = (0, k.invert)(i);
                    return n.bindTooltip("".concat(s[n.options.annotationTag])), n
                }(0, t, u(l, c), 0, e.annotationID))
            })), r
        }

        var w = n(7316), T = n(9231), C = function () {
            function e(t, n) {
                return (0, l.Z)(this, e), (0, f.Z)(this, "_map", void 0), (0, f.Z)(this, "_annotator", void 0), null === e.instance && (this._map = t, this._annotator = n, e.instance = this), e.instance
            }

            return (0, c.Z)(e, null, [{
                key: "map", get: function () {
                    var t;
                    void 0 === e.instance._map && (e.instance._map = null === (t = e.instance._annotator) || void 0 === t ? void 0 : t.map);
                    return e.instance._map
                }
            }, {
                key: "annotator", get: function () {
                    return e.instance._annotator
                }
            }]), e
        }();
        (0, f.Z)(C, "instance", null);
        var D = C, N = n(9999), x = n(3766), R = n(9984), P = n.n(R), E = v().createElement;

        function F(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, a = (0, h.Z)(e);
                if (t) {
                    var o = (0, h.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, o)
                } else n = a.apply(this, arguments);
                return (0, p.Z)(this, n)
            }
        }

        var _ = function (e) {
            (0, d.Z)(n, e);
            var t = F(n);

            function n(e) {
                return (0, l.Z)(this, n), t.call(this, e)
            }

            return (0, c.Z)(n, [{
                key: "render", value: function () {
                    var e = E(y.zx, {
                        icon: this.props.showSelected ? "eye-open" : "eye-off",
                        onClick: this.props.callbacks.ToggleShowSelected
                    });
                    return E(v().Fragment, null, E(y.EG, {
                        className: this.props.useDarkTheme ? "bp3-dark" : "",
                        rightElement: e,
                        values: this.props.filterArr,
                        placeholder: "Enter filters here...",
                        onChange: this.props.callbacks.SetFilterArr
                    }))
                }
            }]), n
        }(v().Component), L = v().createElement;

        function j(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, a = (0, h.Z)(e);
                if (t) {
                    var o = (0, h.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, o)
                } else n = a.apply(this, arguments);
                return (0, p.Z)(this, n)
            }
        }

        var M = {fill: !0, minimal: !0, round: !1, interactive: !0, className: "annotator-tags"};

        function V(e, t) {
            var n = {
                backgroundColor: Z._[t % Z._.length],
                fontSize: "12px",
                display: "inline-block",
                borderRadius: "3px",
                textAlign: "center",
                padding: "2px",
                width: "15px",
                height: "8px"
            };
            return L("div", {style: n})
        }

        var U = function (e) {
            (0, d.Z)(n, e);
            var t = j(n);

            function n(e) {
                var a;
                return (0, l.Z)(this, n), (a = t.call(this, e)).state = {
                    selectedTag: 0,
                    selectedAnnotationID: "",
                    annotations: []
                }, a.tagIDtoDisplayIndex = {}, a.tagNames = {}, a.annotationRefs = {}, a.tagCount = {}, a.hiddenTagCount = {}, a.setAnnotationTag = a.setAnnotationTag.bind((0, u.Z)(a)), a
            }

            return (0, c.Z)(n, [{
                key: "setAnnotations", value: function (e) {
                    var t = this, n = Object.values(e._layers);
                    n.sort((function (e, n) {
                        var a = t.tagIDtoDisplayIndex[e.options.annotationTag] - t.tagIDtoDisplayIndex[n.options.annotationTag];
                        return 0 !== a ? a : e.options.annotationID < n.options.annotationID ? -1 : e.options.annotationID > n.options.annotationID ? 1 : 0
                    })), this.annotationRefs = {}, this.tagCount = {}, n.forEach((function (e) {
                        t.annotationRefs[e.options.annotationID] = v().createRef(), t.tagCount[e.options.annotationTag] = (t.tagCount[e.options.annotationTag] || 0) + 1
                    }));
                    var a = n.reduce((function (e, t, a) {
                        return 0 === a || t.options.annotationTag !== n[a - 1].options.annotationTag ? e.push([t, 1]) : e.push([t, e[a - 1][1] + 1]), e
                    }), []);
                    this.setState({annotations: a})
                }
            }, {
                key: "setAnnotationTag", value: function (e) {
                    this.setState({selectedTag: e}), this.props.callbacks.SetAnnotationTag(e)
                }
            }, {
                key: "setSelectedAnnotation", value: function (e) {
                    null !== e ? (this.setState({selectedAnnotationID: e.options.annotationID}), this.annotationRefs[e.options.annotationID].current.scrollIntoView({block: "nearest"})) : this.setState({selectedAnnotationID: ""})
                }
            }, {
                key: "generateTagHideIcon", value: function (e) {
                    var t = this, n = !(e in this.tagCount) || this.hiddenTagCount[e] !== this.tagCount[e];
                    return L(y.JO, {
                        icon: n ? "eye-open" : "eye-off", className: P().SpacedIcon, onClick: function (a) {
                            var o;
                            a.stopPropagation(), (o = t.props.callbacks).SetAnnotationVisibility.apply(o, [!n].concat((0, N.Z)(t.state.annotations.map((function (e) {
                                return e[0]
                            })).filter((function (t) {
                                return t.options.annotationTag === e
                            })))))
                        }
                    })
                }
            }, {
                key: "generateAnnotationHideIcon", value: function (e) {
                    var t = this, n = !this.props.hiddenAnnotations.has(e.options.annotationID);
                    return L(y.JO, {
                        icon: n ? "eye-open" : "eye-off", onClick: function (a) {
                            a.stopPropagation(), t.props.callbacks.SetAnnotationVisibility(!n, e)
                        }
                    })
                }
            }, {
                key: "updateHiddenTagCount", value: function () {
                    var e = this;
                    this.hiddenTagCount = {}, this.state.annotations.forEach((function (t) {
                        if (e.props.hiddenAnnotations.has(t[0].options.annotationID)) {
                            var n = t[0].options.annotationTag;
                            e.hiddenTagCount[n] = (e.hiddenTagCount[n] || 0) + 1
                        }
                    }))
                }
            }, {
                key: "render", value: function () {
                    var e = this;
                    this.updateHiddenTagCount();
                    var t = L("div", {className: ["tag-list", P().TagList].join(" ")}, Object.entries(this.props.projectTags).filter((function (t) {
                            var n = (0, o.Z)(t, 2), a = n[0];
                            n[1];
                            return 0 === e.props.filterArr.length || e.props.filterArr.some((function (e) {
                                return a.toLowerCase() === e.toLowerCase()
                            })) === e.props.showSelected
                        })).map((function (t, n) {
                            var i = (0, o.Z)(t, 2), s = i[0], r = i[1];
                            return e.tagIDtoDisplayIndex[r] = n, e.tagNames[r] = s, L(y.Vp, (0, a.Z)({
                                className: P().MenuTag,
                                key: r
                            }, M, {
                                active: n === e.state.selectedTag,
                                rightIcon: L("div", null, e.generateTagHideIcon(r), V(0, r)),
                                onClick: function () {
                                    e.setAnnotationTag(n)
                                }
                            }), s)
                        }))),
                        n = L("div", {className: ["tag-list", P().TagList].join(" ")}, this.state.annotations.filter((function (t) {
                            var n = (0, o.Z)(t, 2), a = n[0];
                            n[1];
                            return a.options.confidence > e.props.confidence && (0 === e.props.filterArr.length || e.props.showSelected === e.props.filterArr.some((function (t) {
                                return e.tagNames[a.options.annotationTag].toLowerCase().includes(t.toLowerCase())
                            })))
                        })).map((function (t) {
                            var n = (0, o.Z)(t, 2), i = n[0], l = n[1];
                            return L(y.Vp, (0, a.Z)({
                                className: P().MenuTag,
                                key: i.options.annotationID.split("-")[0],
                                elementRef: e.annotationRefs[i.options.annotationID]
                            }, M, {
                                active: i.options.annotationID === e.state.selectedAnnotationID,
                                rightIcon: L("div", null, e.generateAnnotationHideIcon(i)),
                                onClick: (0, r.Z)(s().mark((function t() {
                                    return s().wrap((function (t) {
                                        for (; ;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, e.props.callbacks.SetAnnotationVisibility(!0, i);
                                            case 2:
                                                i.fire("click");
                                            case 3:
                                            case"end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))
                            }), L(y.JO, {
                                icon: "rectangle" === i.options.annotationType ? "widget" : "polygon-filter",
                                iconSize: 12,
                                style: {
                                    color: Z._[i.options.annotationTag % Z._.length],
                                    marginRight: "5px",
                                    marginBottom: "2px"
                                }
                            }), "".concat(e.tagNames[i.options.annotationTag], " ").concat(l))
                        })));
                    return L(v().Fragment, null, L(y.v2, {className: "main-menu bp3-elevation-1"}, L(y.sN, {
                        icon: "graph",
                        text: "Annotator Controls"
                    }), L(y.R, {title: "Assets Folder"}), this.props.isSyncing ? L(y.$j, {
                        size: 30,
                        className: P().Spin
                    }) : L(v().Fragment, null, L(y.sN, {
                        icon: "folder-new",
                        text: "Open Folder",
                        label: L(y.M2, {combo: "O"}),
                        onClick: this.props.callbacks.OpenFileManagement
                    }), L(y.sN, {
                        icon: "repeat",
                        text: "Sync All Folders",
                        label: L(y.M2, {combo: "S"}),
                        onClick: this.props.callbacks.SyncAllFolders
                    })), L(y.R, {title: "Inference"}), 0 === this.props.predictDone ? L(y.u, {
                        content: "Load Model and Image before analysing",
                        position: x.Ly.TOP,
                        disabled: this.props.isConnected && this.props.loadedModel && !(0, k.isEmpty)(this.props.assetList)
                    }, L("div", {className: P().InferenceMenuItem}, L(y.sN, {
                        disabled: !this.props.isConnected || !this.props.loadedModel || (0, k.isEmpty)(this.props.currentAsset),
                        icon: "ring",
                        text: "Analyze",
                        label: L(y.M2, {combo: "A"}),
                        className: "Re-Analyse" === this.props.userEditState ? "bp3-active" : "",
                        onClick: function () {
                            return e.props.callbacks.SingleAnalysis()
                        }
                    }), L(y.sN, {
                        disabled: !this.props.isConnected || !this.props.loadedModel || (0, k.isEmpty)(this.props.assetList),
                        icon: "heat-grid",
                        text: "Bulk Analysis",
                        label: L(y.M2, {combo: "B"}),
                        className: "Bulk Analysis" === this.props.userEditState ? "bp3-active" : "",
                        onClick: this.props.callbacks.BulkAnalysis
                    }))) : L(y.$j, {
                        size: 30,
                        className: P().Spin
                    }), L(y.R, {title: "Confidence Threshold"}), L(y.iR, {
                        className: P().Slider,
                        min: 0,
                        max: 100,
                        onChange: this.props.callbacks.ToggleConfidence,
                        stepSize: 1,
                        labelStepSize: 100,
                        value: 100 * this.props.confidence,
                        vertical: !1
                    }), L(y.R, null), L(y.sN, {
                        icon: "new-text-box",
                        text: "Advanced Settings",
                        onClick: this.props.callbacks.OpenAdvancedSettings
                    }), L(y.R, {title: "Filter Tags"}), L(_, (0, a.Z)({
                        showSelected: this.state.showSelected,
                        filterArr: this.state.filterArr,
                        callbacks: {SetFilterArr: this.setFilterArr, ToggleShowSelected: this.toggleShowSelected}
                    }, this.props)), L(y.R, null), L(y.mQ, {className: P().SelectionList}, L(y.OK, {
                        id: "annotation-objects",
                        title: "Objects",
                        panel: n
                    }), L(y.OK, {id: "project-tags", title: "Tag Map", panel: t}))))
                }
            }]), n
        }(g.Component), J = n(5767), G = n.n(J), H = n(7019), z = n.n(H), B = v().createElement;

        function q(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, a = (0, h.Z)(e);
                if (t) {
                    var o = (0, h.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, o)
                } else n = a.apply(this, arguments);
                return (0, p.Z)(this, n)
            }
        }

        var K = function (e) {
            (0, d.Z)(n, e);
            var t = q(n);

            function n(e) {
                var a;
                return (0, l.Z)(this, n), a = t.call(this, e), (0, f.Z)((0, u.Z)(a), "currentAssetID", void 0), a.currentAssetID = "", a.highlightAsset = a.highlightAsset.bind((0, u.Z)(a)), a
            }

            return (0, c.Z)(n, [{
                key: "highlightAsset", value: function (e) {
                    this.currentAssetID = e, this.forceUpdate()
                }
            }, {
                key: "render", value: function () {
                    var e = this;
                    return B(v().Fragment, null, this.props.assetList.map((function (t) {
                        return n = t, a = t.assetUrl, o = e.props.useDarkTheme, i = e.props.callbacks.selectAssetCallback, s = e.currentAssetID, B(y.Zb, {
                            className: ["image-bar-thumbnail-card", z().Card].join(" "),
                            key: a,
                            onClick: function () {
                                return i(n)
                            }
                        }, B("div", {className: n.assetUrl === s ? "image-bar-thumbnail image-bar-thumbnail-highlighted" : "image-bar-thumbnail"}, "video" === n.type ? B(v().Fragment, null, " ", B(y.JO, {
                            className: z().StackTop,
                            icon: "video",
                            iconSize: y.Jh.STANDARD
                        }), B("div", null, B(G(), {
                            width: 150,
                            length: 150,
                            snapshotAtTime: 1,
                            videoUrl: n.thumbnailUrl
                        }))) : B("img", {
                            src: n.thumbnailUrl,
                            alt: n.filename
                        }), B(y.Vp, {
                            className: ["image-bar-filename-tag", z().Tag].join(" "),
                            fill: !0,
                            style: {backgroundColor: o ? "" : "#CED9E0"},
                            rightIcon: !!n.isCached && B(y.u, {
                                content: "Inference is Cached by Model",
                                position: x.Ly.TOP
                            }, B(y.JO, {icon: "bookmark", color: o ? "#0F9960" : "#3DCC91"}))
                        }, B("span", {className: "bp3-ui-text bp3-monospace-text image-bar-filename-text"}, n.filename))));
                        var n, a, o, i, s
                    })))
                }
            }]), n
        }(g.Component), W = n(451), Y = n(1164), Q = n.n(Y), $ = v().createElement;

        function X(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, a = (0, h.Z)(e);
                if (t) {
                    var o = (0, h.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, o)
                } else n = a.apply(this, arguments);
                return (0, p.Z)(this, n)
            }
        }

        var ee = function (e) {
                (0, d.Z)(n, e);
                var t = X(n);

                function n(e) {
                    return (0, l.Z)(this, n), t.call(this, e)
                }

                return (0, c.Z)(n, [{
                    key: "render", value: function () {
                        var e = this;
                        return $(y.Vq, (0, a.Z)({
                            icon: "cog",
                            title: "Advanced Settings",
                            canEscapeKeyClose: this.props.allowUserClose,
                            canOutsideClickClose: this.props.allowUserClose,
                            className: this.props.useDarkTheme ? "bp3-dark" : ""
                        }, this.props), $("div", {className: Q().Dialog}, $("div", {className: W.TmF}, $("div", null, "General"), $("div", {className: Q().Section}, $(y.eQ, {className: Q().SubTitle}, $("div", null, "Bulk Analysis"), $(y.u, {
                            content: "Types of files to analyse in bulk",
                            position: x.Ly.TOP
                        }, $(y.JO, {icon: "help", className: Q().Icon}))), $(y.Ee, {
                            inline: !0,
                            name: "bulkAnalysisStatus",
                            onChange: function (t) {
                                e.props.callbacks.HandleChangeInSettings(t.currentTarget.value, "bulkAnalysisStatus")
                            },
                            selectedValue: this.props.inferenceOptions.bulkAnalysisStatus
                        }, $(y.Y8, {label: "Image Only", value: "image"}), $(y.Y8, {
                            label: "Video Only",
                            value: "video"
                        }), $(y.Y8, {
                            label: "Image and Video",
                            value: "both"
                        }))), $("div", {className: Q().Section}, $(y.eQ, {className: Q().SubTitle}, $("div", null, "IoU Threshold"), $(y.u, {
                            content: $("div", null, "Intersection Over Union index, used to describe extent of overlap", $("br", null), "between 2 boxes. A higher value means stricter threshold.", $("br", null), "Click to learn more"),
                            position: x.Ly.TOP
                        }, $(y.JO, {
                            icon: "help", className: Q().Icon, onClick: function () {
                                window.open("https://docs.datature.io/portal/performing-predictions#intersection-over-union-iou-threshold")
                            }
                        }))), $(y.iR, {
                            className: Q().Slider, min: 0, max: 1, onChange: function (t) {
                                e.props.callbacks.HandleChangeInSettings(Math.round(10 * t) / 10, "iou")
                            }, stepSize: .1, labelStepSize: 1, value: this.props.inferenceOptions.iou, vertical: !1
                        })), $(y.iz, {className: Q().Divider}), $("div", null, "Video"), $("div", {className: Q().Section}, $(y.eQ, {className: Q().SubTitle}, $("div", null, "Frame Interval"), $(y.u, {
                            content: $("div", null, "Predictions generated per frame. The higher the number,", " ", $("br", null), "the higher the prediction speed and the lower the quality.", $("br", null), "Click to learn more"),
                            position: x.Ly.TOP
                        }, $(y.JO, {
                            icon: "help", className: Q().Icon, onClick: function () {
                                window.open("https://docs.datature.io/portal/performing-predictions#frame-interval")
                            }
                        }))), $(y.iR, {
                            className: Q().Slider,
                            min: 1,
                            max: 20,
                            onChange: function (t) {
                                e.props.callbacks.HandleChangeInSettings(t, "frameInterval")
                            },
                            stepSize: 1,
                            labelStepSize: 19,
                            value: this.props.inferenceOptions.video.frameInterval,
                            vertical: !1
                        })), " ")))
                    }
                }]), n
            }(v().Component), te = n(361), ne = n.n(te), ae = n(9134), oe = n.n(ae), ie = n(5636), se = n.n(ie),
            re = v().createElement;

        function le(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function ce(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? le(Object(n), !0).forEach((function (t) {
                    (0, f.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : le(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function ue(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, a = (0, h.Z)(e);
                if (t) {
                    var o = (0, h.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, o)
                } else n = a.apply(this, arguments);
                return (0, p.Z)(this, n)
            }
        }

        var de = function (e) {
            (0, d.Z)(n, e);
            var t = ue(n);

            function n(e) {
                var a;
                return (0, l.Z)(this, n), a = t.call(this, e), (0, f.Z)((0, u.Z)(a), "refreshTree", (0, r.Z)(s().mark((function e() {
                    return s().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return a.setState({isAPICalled: !0}), e.next = 3, (0, w.Ng)().then((function (e) {
                                    200 === e.status && a.setState({parsedTree: a.setTreeNodeInfo(e.data)})
                                })).catch((function (e) {
                                    var t = "Failed to obtain current folders.";
                                    e.response && (t = "".concat(e.response.data.message)), (0, T.JJ)(t, b.S.DANGER, 3e3)
                                }));
                            case 3:
                                a.setState({isAPICalled: !1});
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))), (0, f.Z)((0, u.Z)(a), "handleRegisterImages", function () {
                    var e = (0, r.Z)(s().mark((function e(t) {
                        var n;
                        return s().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return n = encodeURIComponent(t), e.next = 3, (0, w.nW)(n).then((function (e) {
                                        200 === e.status && (a.refreshTree(), a.props.callbacks.UpdateImage())
                                    })).catch((function (e) {
                                        var t = "Failed to register folder.";
                                        e.response && (t = "".concat(e.response.data.message)), (0, T.JJ)(t, b.S.DANGER, 3e3)
                                    }));
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()), (0, f.Z)((0, u.Z)(a), "handleElectronRegisterListener", (function (e, t) {
                    a.setState({text: t[0]}), a.handleRegisterImages(t[0])
                })), (0, f.Z)((0, u.Z)(a), "handleKeyDown", function () {
                    var e = (0, r.Z)(s().mark((function e(t) {
                        return s().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    "Enter" === t.key && a.handleRegisterImages(a.state.text);
                                case 1:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()), (0, f.Z)((0, u.Z)(a), "handleElectronFileDialog", (function () {
                    oe()() ? window.require("electron").ipcRenderer.send("select-dirs") : (0, T.JJ)("This feature is not alvailable in web browser.", b.S.WARNING, 3e3)
                })), (0, f.Z)((0, u.Z)(a), "handleUpdateFolder", function () {
                    var e = (0, r.Z)(s().mark((function e(t) {
                        return s().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return a.setState({isAPICalled: !0}), e.next = 3, (0, w.T)(t).then((function (e) {
                                        if (200 === e.status) {
                                            var n = a.state.notFoundFolder.indexOf(t);
                                            n > 0 && a.setState((function (e) {
                                                var t = ce({}, e.notFoundFolder);
                                                return t.splice(n, 1), {notFoundFolder: t}
                                            }))
                                        }
                                        a.props.callbacks.UpdateImage()
                                    })).catch((function (e) {
                                        a.state.notFoundFolder.indexOf(t) < 0 && a.setState((function (e) {
                                            var n = e.notFoundFolder;
                                            return n.push(t), {notFoundFolder: n}
                                        }));
                                        var n = "Failed to update folder.", o = b.S.DANGER;
                                        e.response && (3002 === e.response.data.error_code && (o = b.S.PRIMARY), n = "".concat(e.response.data.message)), (0, T.JJ)(n, o, 3e3)
                                    }));
                                case 3:
                                    a.refreshTree(), a.setState({isAPICalled: !1});
                                case 5:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()), (0, f.Z)((0, u.Z)(a), "handleDeleteFolder", function () {
                    var e = (0, r.Z)(s().mark((function e(t) {
                        return s().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, w.Q3)(t).then((function (e) {
                                        200 === e.status && a.refreshTree(), a.props.callbacks.UpdateImage()
                                    })).catch((function (e) {
                                        var t = "Failed to delete folder.";
                                        e.response && (t = "".concat(e.response.data.message)), (0, T.JJ)(t, b.S.DANGER, 3e3)
                                    }));
                                case 2:
                                    a.setState({isAPICalled: !1});
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()), (0, f.Z)((0, u.Z)(a), "handleNodeCollapse", (function (e, t) {
                    var n = a.state.parsedTree, o = ne()(n);
                    a.forNodeAtPath(o, t, (function (e) {
                        e.isExpanded = !1
                    })), a.setState({parsedTree: o})
                })), (0, f.Z)((0, u.Z)(a), "handleNodeExpand", (function (e, t) {
                    var n = a.state.parsedTree, o = ne()(n);
                    a.forNodeAtPath(o, t, (function (e) {
                        e.isExpanded = !0
                    })), a.setState({parsedTree: o})
                })), a.state = {
                    parsedTree: [],
                    isAPICalled: !1,
                    text: "",
                    notFoundFolder: []
                }, a.handleKeyDown = a.handleKeyDown.bind((0, u.Z)(a)), a.handleElectronFileDialog = a.handleElectronFileDialog.bind((0, u.Z)(a)), a.handleDeleteFolder = a.handleDeleteFolder.bind((0, u.Z)(a)), a.handleNodeCollapse = a.handleNodeCollapse.bind((0, u.Z)(a)), a.handleNodeExpand = a.handleNodeExpand.bind((0, u.Z)(a)), a
            }

            return (0, c.Z)(n, [{
                key: "componentDidMount", value: function () {
                    (this.refreshTree(), oe()()) && window.require("electron").ipcRenderer.on("select-dirs-reply", this.handleElectronRegisterListener)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    oe()() && window.require("electron").ipcRenderer.removeListener("select-dirs-reply", this.handleElectronRegisterListener)
                }
            }, {
                key: "createFile", value: function (e, t, n) {
                    var a = decodeURIComponent(e);
                    return a = a.includes("\\") ? "".concat(a, "\\").concat(t) : "".concat(a, "/").concat(t), {
                        id: encodeURIComponent(a),
                        icon: re(y.JO, {
                            icon: "document",
                            intent: n ? b.S.WARNING : b.S.NONE,
                            className: n ? [se().NotFound, se().Icon].join(" ") : se().Icon
                        }),
                        label: t
                    }
                }
            }, {
                key: "createFolder", value: function (e, t, n, a, o, i) {
                    var s = this, r = [];
                    return n.forEach((function (t) {
                        r.push(s.createFile(e, t, i))
                    })), a.forEach((function (e) {
                        r.push(s.createFolder(e.path, e.name, e.images, e.folders, !1, i))
                    })), {
                        id: "".concat(e),
                        icon: re(y.JO, {
                            icon: "folder-close",
                            className: i ? [se().NotFound, se().Icon].join(" ") : se().Icon
                        }),
                        isExpanded: !1,
                        label: t,
                        childNodes: r,
                        secondaryLabel: re(v().Fragment, null, o ? re(y.eQ, null, re(y.u, {content: "Sync"}, re(y.zx, {
                            icon: re(y.JO, {
                                icon: "repeat",
                                iconSize: 10
                            }), minimal: !0, onClick: function () {
                                s.handleUpdateFolder("".concat(e))
                            }
                        })), re(y.u, {content: "Remove Folder"}, re(y.zx, {
                            icon: "small-cross",
                            minimal: !0,
                            onClick: function () {
                                s.handleDeleteFolder("".concat(e))
                            }
                        }))) : null)
                    }
                }
            }, {
                key: "setTreeNodeInfo", value: function (e) {
                    var t = this;
                    return e.map((function (e) {
                        var n = !1;
                        return t.state.notFoundFolder.indexOf(e.path) >= 0 && (n = !0), t.createFolder(e.path, e.name, e.images, e.folders, !0, n)
                    }))
                }
            }, {
                key: "forNodeAtPath", value: function (e, t, n) {
                    n(y.mp.nodeFromPath(t, e))
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = re(y.zx, {
                        text: "Browse",
                        icon: "folder-new",
                        intent: "success",
                        loading: !1,
                        onClick: function () {
                            e.handleElectronFileDialog()
                        }
                    }), n = re(y.u, {
                        content: re(v().Fragment, null, re("p", null, "Type the path of the folder and press Enter"), re("b", null, "Example"), re("p", null, re("pre", null, "/user/example/folder"))),
                        position: x.Ly.TOP
                    }, re(y.JO, {icon: "help", className: se().HintIcon}));
                    return re(v().Fragment, null, re(y.Vq, (0, a.Z)({
                        icon: "folder-open",
                        title: "File Management",
                        canEscapeKeyClose: this.props.allowUserClose,
                        canOutsideClickClose: this.props.allowUserClose,
                        className: [se().Dialog, this.props.useDarkTheme ? "bp3-dark" : ""].join(" ")
                    }, this.props), re("div", {className: W.TmF}, re(y.cw, {
                        label: "Add new folder",
                        labelFor: "label-input"
                    }, re(y.BZ, {
                        id: "label-input",
                        placeholder: "Enter folder path...",
                        rightElement: oe()() ? t : n,
                        onKeyDown: this.handleKeyDown,
                        value: this.state.text,
                        onChange: function (t) {
                            e.setState({text: t.target.value})
                        }
                    })), re(y.iz, {className: se().Divider}), re("div", null, "Current Folders"), this.state.isAPICalled ? re(y.$j, null) : re(y.mp, {
                        contents: this.state.parsedTree,
                        onNodeCollapse: this.handleNodeCollapse,
                        onNodeExpand: this.handleNodeExpand,
                        className: (W.FZf, se().Tree)
                    }))))
                }
            }]), n
        }(v().Component), pe = v().createElement;

        function he(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function fe(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, a = (0, h.Z)(e);
                if (t) {
                    var o = (0, h.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, o)
                } else n = a.apply(this, arguments);
                return (0, p.Z)(this, n)
            }
        }

        var me, ge = function (e) {
            (0, d.Z)(n, e);
            var t = fe(n);

            function n(e) {
                var a;
                return (0, l.Z)(this, n), a = t.call(this, e), (0, f.Z)((0, u.Z)(a), "getImageElement", (function () {
                    var e;
                    return null !== (e = document.querySelector(".leaflet-pane.leaflet-overlay-pane img.leaflet-image-layer")) && void 0 !== e ? e : document.querySelector(".leaflet-pane.leaflet-overlay-pane video.leaflet-image-layer")
                })), (0, f.Z)((0, u.Z)(a), "setFilter", (function (e) {
                    var t = window.getComputedStyle(a.getImageElement()).filter.split(" ");
                    3 === t.length ? ("brightness" === e.filterName ? t[0] = "brightness(".concat(e.value, "%)") : "contrast" === e.filterName ? t[1] = "contrast(".concat(e.value, "%)") : t[2] = "saturate(".concat(e.value, "%)"), a.getImageElement().style.filter = t.join(" "), a.setState((function (t) {
                        var n = function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? he(Object(n), !0).forEach((function (t) {
                                    (0, f.Z)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, t);
                        return n[e.filterName] = e.value, n
                    }))) : a.resetValues()
                })), (0, f.Z)((0, u.Z)(a), "resetValues", (function () {
                    a.getImageElement().style.filter = "brightness(100%) contrast(100%) saturate(100%)", a.setState({
                        brightness: 100,
                        contrast: 100,
                        saturate: 100
                    }), a.props.callbacks.setAnnotationOptions(.45), a.props.callbacks.setAnnotationOptions(!0)
                })), a.state = {
                    brightness: 100,
                    contrast: 100,
                    saturate: 100,
                    onlyUnannotatedShown: !1
                }, a.getImageElement().style.filter = "brightness(100%) contrast(100%) saturate(100%)", a
            }

            return (0, c.Z)(n, [{
                key: "render", value: function () {
                    var e = this;
                    return pe(y.J2, {
                        minimal: !0,
                        interactionKind: y.V3.CLICK,
                        position: y.I2.TOP_RIGHT,
                        enforceFocus: !1,
                        className: W.lik
                    }, pe(y.zx, {icon: "cog"}), pe("div", {className: "annotator-settings-card"}, pe("div", {className: "annotator-settings-content"}, pe("div", {className: "annotator-settings-col"}, pe(y.H5, null, "Annotator Settings"), pe("br", null), pe(y.rs, {
                        checked: this.props.annotationOptions.isOutlined,
                        onChange: function () {
                            e.props.callbacks.setAnnotationOptions(!1)
                        }
                    }, "Toggle Annotation Outline"), pe("br", null), pe(y.__, null, "Annotation Opacity", pe(y.iR, {
                        className: "opacity-slider",
                        min: 0,
                        max: 1,
                        stepSize: .01,
                        labelStepSize: 1,
                        value: this.props.annotationOptions.opacity,
                        onChange: function (t) {
                            e.props.callbacks.setAnnotationOptions(t)
                        }
                    }))), pe(y.iz, {className: "annotator-settings-divider"}), pe("div", {className: "annotator-settings-col"}, pe(y.H5, null, "Image Settings"), pe(y.__, null, "Brightness", pe(y.iR, {
                        min: 0,
                        max: 500,
                        stepSize: 1,
                        labelStepSize: 500,
                        value: this.state.brightness,
                        onChange: function (t) {
                            e.setFilter({filterName: "brightness", value: t})
                        }
                    })), pe(y.__, null, "Contrast", pe(y.iR, {
                        min: 0,
                        max: 500,
                        stepSize: 1,
                        labelStepSize: 500,
                        value: this.state.contrast,
                        onChange: function (t) {
                            e.setFilter({filterName: "contrast", value: t})
                        }
                    })), pe(y.__, null, "Saturation", pe(y.iR, {
                        min: 0,
                        max: 500,
                        stepSize: 1,
                        labelStepSize: 500,
                        value: this.state.saturate,
                        onChange: function (t) {
                            e.setFilter({filterName: "saturate", value: t})
                        }
                    })), pe("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center"
                        }
                    }, pe(y.zx, {onClick: this.resetValues}, "Reset Defaults"))))))
                }
            }]), n
        }(g.Component), ve = function (e) {
            if (e === 1 / 0) return "--:--";
            var t = Math.floor(e / 60), n = e % 60, a = t < 10 ? "0".concat(t, ":") : "".concat(t, ":"),
                o = n < 10 ? "0".concat(n) : "".concat(n);
            return "".concat(a).concat(o)
        }, ye = v().createElement;

        function be(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function Ae(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? be(Object(n), !0).forEach((function (t) {
                    (0, f.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : be(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Se(e, t) {
            var n;
            if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return ke(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ke(e, t)
                }(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var a = 0, o = function () {
                    };
                    return {
                        s: o, n: function () {
                            return a >= e.length ? {done: !0} : {done: !1, value: e[a++]}
                        }, e: function (e) {
                            throw e
                        }, f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, s = !0, r = !1;
            return {
                s: function () {
                    n = e[Symbol.iterator]()
                }, n: function () {
                    var e = n.next();
                    return s = e.done, e
                }, e: function (e) {
                    r = !0, i = e
                }, f: function () {
                    try {
                        s || null == n.return || n.return()
                    } finally {
                        if (r) throw i
                    }
                }
            }
        }

        function ke(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
            return a
        }

        function Ze(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, a = (0, h.Z)(e);
                if (t) {
                    var o = (0, h.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, o)
                } else n = a.apply(this, arguments);
                return (0, p.Z)(this, n)
            }
        }

        function Oe(e, t) {
            return [e, t]
        }

        var Ie = (0, y.No)(me = function (e) {
            (0, d.Z)(n, e);
            var t = Ze(n);

            function n(e) {
                var a;
                return (0, l.Z)(this, n), a = t.call(this, e), (0, f.Z)((0, u.Z)(a), "map", void 0), (0, f.Z)((0, u.Z)(a), "imageOverlay", void 0), (0, f.Z)((0, u.Z)(a), "videoOverlay", void 0), (0, f.Z)((0, u.Z)(a), "annotationGroup", void 0), (0, f.Z)((0, u.Z)(a), "project", void 0), (0, f.Z)((0, u.Z)(a), "imagebarRef", void 0), (0, f.Z)((0, u.Z)(a), "currentAsset", void 0), (0, f.Z)((0, u.Z)(a), "currentTag", void 0), (0, f.Z)((0, u.Z)(a), "menubarRef", void 0), (0, f.Z)((0, u.Z)(a), "menubarElement", void 0), (0, f.Z)((0, u.Z)(a), "selectedAnnotation", void 0), (0, f.Z)((0, u.Z)(a), "isFirstCallPerformed", void 0), (0, f.Z)((0, u.Z)(a), "toaster", void 0), (0, f.Z)((0, u.Z)(a), "progressToastInterval", void 0), (0, f.Z)((0, u.Z)(a), "refHandlers", {
                    toaster: function (e) {
                        return a.toaster = e
                    }
                }), (0, f.Z)((0, u.Z)(a), "backgroundImg", void 0), (0, f.Z)((0, u.Z)(a), "handleVerticalScrolling", (function (e) {
                    var t = 1.5 * e.deltaY;
                    void 0 !== a.menubarElement && (a.menubarElement.scrollLeft += t)
                })), (0, f.Z)((0, u.Z)(a), "updateAnnotations", (function (e) {
                    var t = {
                            metadata: a.currentAsset.metadata,
                            url: a.currentAsset.url,
                            filename: a.currentAsset.filename,
                            assetUrl: a.currentAsset.assetUrl,
                            annotations: e,
                            thumbnailUrl: a.currentAsset.thumbnailUrl,
                            localPath: a.currentAsset.localPath,
                            type: a.currentAsset.type,
                            isCached: a.currentAsset.isCached
                        },
                        n = I(a.map, a.annotationGroup, t, a.project, a.currentAsset.metadata.width, a.currentAsset.metadata.height, a.state.tagInfo.tags);
                    a.annotationGroup.clearLayers(), n.forEach((function (e) {
                        a.annotationGroup.addLayer(e)
                    })), a.setState({currentAssetAnnotations: n}), a.updateMenuBarAnnotations(), a.filterAnnotationVisibility()
                })), (0, f.Z)((0, u.Z)(a), "updateImage", (0, r.Z)(s().mark((function e() {
                    return s().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (!a.props.loadedModel) {
                                    e.next = 3;
                                    break
                                }
                                return e.next = 3, (0, w.pF)(a.props.loadedModel.hash).then((function (e) {
                                    a.setState({cacheList: e.data})
                                })).catch((function () {
                                    a.setState({cacheList: []})
                                }));
                            case 3:
                                return e.next = 5, (0, w.lp)().then((function (e) {
                                    var t = e.data.map((function (e) {
                                        var t = decodeURIComponent(e), n = t.includes("\\") ? "\\" : "/",
                                            o = t.match(/\.(?:mov|mp4|wmv)/i) ? "video" : "image",
                                            i = a.state.cacheList.includes(e);
                                        return {
                                            url: e,
                                            filename: t.split(n).pop(),
                                            assetUrl: (0, w._q)(e),
                                            thumbnailUrl: (0, w._q)(e),
                                            localPath: e,
                                            type: o,
                                            isCached: i
                                        }
                                    }));
                                    a.setState({assetList: t})
                                }));
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))), (0, f.Z)((0, u.Z)(a), "setFilterArr", (function (e) {
                    a.setState({filterArr: e}, (function () {
                        a.filterAnnotationVisibility()
                    }))
                })), (0, f.Z)((0, u.Z)(a), "toggleShowSelected", (function () {
                    a.setState((function (e) {
                        return {showSelected: !e.showSelected}
                    }), (function () {
                        a.filterAnnotationVisibility()
                    }))
                })), (0, f.Z)((0, u.Z)(a), "toggleConfidence", (function (e) {
                    a.setState({confidence: e / 100}, (function () {
                        a.filterAnnotationVisibility()
                    }))
                })), (0, f.Z)((0, u.Z)(a), "handleChangeInAdvancedSettings", (function (e, t) {
                    a.setState((function (n) {
                        var a = n.inferenceOptions;
                        return "bulkAnalysisStatus" === t && (a.bulkAnalysisStatus = e), "frameInterval" === t && (a.video.frameInterval = e), "iou" === t && (a.iou = e), {inferenceOptions: a}
                    }))
                })), (0, f.Z)((0, u.Z)(a), "switchAnnotation", (function (e) {
                    var t = a.state.assetList.filter((function (e) {
                        return a.isAssetVisible()
                    })), n = t.findIndex((function (e) {
                        return e.assetUrl === a.currentAsset.assetUrl
                    }));
                    if (!(e && n <= 0 || !e && n >= t.length - 1)) {
                        var o = e ? -1 : 1, i = Math.min(Math.max(0, n + o), t.length - 1);
                        a.selectAsset(t[i]), a.setSelectedAnnotation(null);
                        var s = document.getElementById("image-bar");
                        null !== s && (s.scrollLeft += 120 * o)
                    }
                })), (0, f.Z)((0, u.Z)(a), "handleProgressToast", (function () {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = a.toaster.show(a.renderProgress(0));
                    t ? a.progressToastInterval = window.setInterval((function () {
                        (0, w.Ig)().then((function (t) {
                            var o = t.data, i = o.progress, s = o.total;
                            if (a.isFirstCallPerformed) if (1 === i && 1 === s) a.toaster.show(a.renderProgress(100), n), window.clearInterval(a.progressToastInterval), a.isFirstCallPerformed = !1, a.toaster.clear(); else {
                                e.report(i);
                                var r = Math.ceil(e.estimate());
                                a.toaster.show(a.renderProgress(100 * i / s, ve(r)), n)
                            } else a.isFirstCallPerformed = !0, (e = S()({
                                min: i,
                                max: s,
                                historyTimeConstant: 10
                            })).start()
                        }))
                    }), 500) : a.progressToastInterval = window.setInterval((function () {
                        if (null === a.state.uiState || a.state.predictDone === a.state.predictTotal) a.toaster.show(a.renderProgress(100), n), window.clearInterval(a.progressToastInterval); else {
                            var e = 15 * Math.random() / a.state.multiplier;
                            a.state.predictDone + e < .98 * a.state.predictTotal && a.setState((function (t) {
                                return {predictDone: t.predictDone + e, multiplier: t.multiplier + .18}
                            }));
                            var t = a.state.predictDone / a.state.predictTotal * 100;
                            a.toaster.show(a.renderProgress(t), n)
                        }
                    }), 200)
                })), (0, f.Z)((0, u.Z)(a), "syncAllFolders", (0, r.Z)(s().mark((function e() {
                    return s().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return a.setState({isSyncing: !0}), e.next = 3, (0, w.T)().then((function () {
                                    a.updateImage()
                                })).catch((function (e) {
                                    var t = "Failed to sync all folders.";
                                    e.response && (t = "".concat(e.response.data.message)), (0, T.JJ)(t, b.S.DANGER, 3e3)
                                }));
                            case 3:
                                a.setState({isSyncing: !1});
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))), a.state = {
                    currentAssetAnnotations: [],
                    userEditState: "None",
                    changesMade: !1,
                    assetList: [],
                    cacheList: [],
                    tagInfo: {modelHash: void 0, tags: {}},
                    fileManagementOpen: !1,
                    advancedSettingsOpen: !1,
                    imageListCollapsed: !1,
                    annotatedAssetsHidden: !1,
                    killVideoPrediction: !1,
                    isSyncing: !1,
                    hiddenAnnotations: new Set,
                    uiState: null,
                    predictTotal: 0,
                    predictDone: 0,
                    multiplier: 1,
                    confidence: .5,
                    annotationOptions: {isOutlined: !0, opacity: .45},
                    filterArr: [],
                    showSelected: !0,
                    inferenceOptions: {
                        bulkAnalysisStatus: "both",
                        cacheResults: !1,
                        iou: .8,
                        video: {frameInterval: 20}
                    },
                    currAnnotationPlaybackId: 0
                }, a.toaster = new y.x7({}, {}), a.progressToastInterval = 600, a.currentTag = 0, a.project = a.props.project, a.menubarRef = v().createRef(), a.menubarElement = void 0, a.isFirstCallPerformed = !1, a.currentAsset = {}, a.selectedAnnotation = null, a.annotationGroup = new m.FeatureGroup, a.imagebarRef = v().createRef(), a.backgroundImg = null, a.selectAsset = a.selectAsset.bind((0, u.Z)(a)), a.showToaster = a.showToaster.bind((0, u.Z)(a)), a.renderProgress = a.renderProgress.bind((0, u.Z)(a)), a.singleAnalysis = a.singleAnalysis.bind((0, u.Z)(a)), a.getInference = a.getInference.bind((0, u.Z)(a)), a.bulkAnalysis = a.bulkAnalysis.bind((0, u.Z)(a)), a.updateAnnotations = a.updateAnnotations.bind((0, u.Z)(a)), a.resetControls = a.resetControls.bind((0, u.Z)(a)), a.refreshProject = a.refreshProject.bind((0, u.Z)(a)), a.setAnnotationTag = a.setAnnotationTag.bind((0, u.Z)(a)), a.switchAnnotation = a.switchAnnotation.bind((0, u.Z)(a)), a.handleFileManagementOpen = a.handleFileManagementOpen.bind((0, u.Z)(a)), a.handleFileManagementClose = a.handleFileManagementClose.bind((0, u.Z)(a)), a.handleAdvancedSettingsOpen = a.handleAdvancedSettingsOpen.bind((0, u.Z)(a)), a.handleAdvancedSettingsClose = a.handleAdvancedSettingsClose.bind((0, u.Z)(a)), a.handlePlayPauseVideoOverlay = a.handlePlayPauseVideoOverlay.bind((0, u.Z)(a)), a.updateImage = a.updateImage.bind((0, u.Z)(a)), a.setAnnotationVisibility = a.setAnnotationVisibility.bind((0, u.Z)(a)), a.setAllAnnotationVisibility = a.setAllAnnotationVisibility.bind((0, u.Z)(a)), a.filterAnnotationVisibility = a.filterAnnotationVisibility.bind((0, u.Z)(a)), a.setAnnotationOptions = a.setAnnotationOptions.bind((0, u.Z)(a)), a.toggleShowSelected = a.toggleShowSelected.bind((0, u.Z)(a)), a.setAnnotatedAssetsHidden = a.setAnnotatedAssetsHidden.bind((0, u.Z)(a)), a
            }

            return (0, c.Z)(n, [{
                key: "componentDidMount", value: function () {
                    var e = (0, r.Z)(s().mark((function e() {
                        var t, n = this;
                        return s().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    this.menubarElement = document.getElementById("image-bar"), this.menubarElement.addEventListener("onwheel" in document ? "wheel" : "mousewheel", this.handleVerticalScrolling), this.map = m.map("annotation-map", {
                                        scrollWheelZoom: !0,
                                        zoomAnimation: !1,
                                        zoomDelta: 0,
                                        zoomSnap: 0,
                                        minZoom: -3,
                                        maxZoom: 3,
                                        crs: m.CRS.Simple,
                                        attributionControl: !1,
                                        zoomControl: !1,
                                        doubleClickZoom: !1
                                    }).setView(Oe(5e3, 5e3), 0), this.annotationGroup.addTo(this.map), this.map.on("mouseup", (function () {
                                        if (n.videoOverlay) {
                                            var e = n.videoOverlay.getElement();
                                            e !== document.activeElement && (null === e || void 0 === e || e.focus())
                                        }
                                    })), "", t = [Oe(3e4, 0), Oe(0, 23e3)], this.imageOverlay = m.imageOverlay("", t), this.videoOverlay = m.videoOverlay("", t, {interactive: !0}), new D(this.map, this), setTimeout((function () {
                                        return n.updateImage()
                                    }), 200);
                                case 11:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "componentDidUpdate", value: function () {
                    var e = this;
                    this.props.loadedModel && this.props.loadedModel.hash !== this.state.tagInfo.modelHash && ((0, w.PF)(this.props.loadedModel.hash).then((function (t) {
                        var n, a = {
                            modelHash: null === (n = e.props.loadedModel) || void 0 === n ? void 0 : n.hash,
                            tags: t.data
                        };
                        e.setState({
                            tagInfo: a,
                            advancedSettingsOpen: !1
                        }), Object.keys(e.state.tagInfo.tags).length > 0 && (e.currentTag = 0), e.annotationGroup.tags = e.state.tagInfo.tags
                    })).catch((function (e) {
                        var t = "Failed to obtain loaded model tags.";
                        e.response && (t = "".concat(e.response.data.message)), (0, T.JJ)(t, b.S.DANGER, 3e3)
                    })), this.updateImage()), this.props.loadedModel || void 0 === this.state.tagInfo.modelHash || (this.setState({
                        tagInfo: {
                            modelHash: void 0,
                            tags: {}
                        }
                    }), this.annotationGroup.tags = this.state.tagInfo.tags)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    void 0 !== this.menubarElement && this.menubarElement.removeEventListener("onwheel" in document ? "wheel" : "mousewheel", this.handleVerticalScrolling)
                }
            }, {
                key: "handlePlayPauseVideoOverlay", value: function () {
                    var e, t = null === (e = this.videoOverlay) || void 0 === e ? void 0 : e.getElement();
                    t && t.onplaying && (t.paused ? t.play() : t.pause())
                }
            }, {
                key: "handleAdvancedSettingsClose", value: function () {
                    this.setState({advancedSettingsOpen: !1})
                }
            }, {
                key: "handleAdvancedSettingsOpen", value: function () {
                    this.setState({advancedSettingsOpen: !0})
                }
            }, {
                key: "handleFileManagementClose", value: function () {
                    this.setState({fileManagementOpen: !1})
                }
            }, {
                key: "handleFileManagementOpen", value: function () {
                    this.setState({fileManagementOpen: !0})
                }
            }, {
                key: "setUserState", value: function (e) {
                    this.state.userEditState !== e && ("None" !== e ? (this.resetControls(), this.setState({userEditState: e})) : this.setState({userEditState: e}))
                }
            }, {
                key: "setAnnotationTag", value: function (e) {
                    return this.currentTag = e, this.currentTag
                }
            }, {
                key: "setAnnotationOptions", value: function (e) {
                    var t = this;
                    this.setState((function (t) {
                        var n = t.annotationOptions;
                        switch (typeof e) {
                            case"boolean":
                                n.isOutlined = !!e || !t.annotationOptions.isOutlined;
                                break;
                            case"number":
                                n.opacity = e
                        }
                        return {annotationOptions: n}
                    }), (function () {
                        return t.filterAnnotationVisibility()
                    }))
                }
            }, {
                key: "setSelectedAnnotation", value: function (e) {
                    this.selectedAnnotation && (this.selectedAnnotation.options.fillOpacity = .35, this.selectedAnnotation.fire("mouseout")), this.selectedAnnotation = e, this.selectedAnnotation && (this.selectedAnnotation.options.fillOpacity = .7), null !== this.menubarRef.current && this.menubarRef.current.setSelectedAnnotation(e)
                }
            }, {
                key: "setAnnotationVisibility", value: function (e) {
                    for (var t = this, n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
                    this.setState((function (t) {
                        var n = new Set(t.hiddenAnnotations);
                        return a.forEach((function (t) {
                            e ? n.delete(t.options.annotationID) : n.add(t.options.annotationID)
                        })), {hiddenAnnotations: n}
                    }), (function () {
                        return t.filterAnnotationVisibility()
                    }))
                }
            }, {
                key: "setAllAnnotationVisibility", value: function (e) {
                    e ? (this.map.addLayer(this.annotationGroup), this.setState({hiddenAnnotations: new Set})) : (this.map.removeLayer(this.annotationGroup), this.setState({
                        hiddenAnnotations: new Set(Object.values(this.annotationGroup._layers).map((function (e) {
                            return e.options.annotationID
                        })))
                    }))
                }
            }, {
                key: "setAnnotatedAssetsHidden", value: function (e) {
                    this.setState({annotatedAssetsHidden: e})
                }
            }, {
                key: "killVideoPrediction", value: function () {
                    var e = (0, r.Z)(s().mark((function e() {
                        return s().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.setState({
                                        killVideoPrediction: !0,
                                        uiState: null
                                    }), "video" !== this.currentAsset.type) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 4, (0, w.kV)().catch((function (e) {
                                        var t = "Failed to kill video prediction.";
                                        e.response && (t = "".concat(e.response.data.message)), (0, T.JJ)(t, b.S.DANGER, 3e3)
                                    }));
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "bulkAnalysis", value: function () {
                    var e = (0, r.Z)(s().mark((function e() {
                        var t, n, a, o, i, r, l = this;
                        return s().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(0, k.isEmpty)(this.state.assetList) || this.props.loadedModel) {
                                        e.next = 3;
                                        break
                                    }
                                    return (0, T.JJ)("There are no models and images loaded", b.S.WARNING, 3e3), e.abrupt("return");
                                case 3:
                                    if (this.props.loadedModel) {
                                        e.next = 6;
                                        break
                                    }
                                    return (0, T.JJ)("There is no model loaded", b.S.WARNING, 3e3), e.abrupt("return");
                                case 6:
                                    if (!(0, k.isEmpty)(this.state.assetList)) {
                                        e.next = 9;
                                        break
                                    }
                                    return (0, T.JJ)("There is no image loaded", b.S.WARNING, 3e3), e.abrupt("return");
                                case 9:
                                    e.t0 = this.state.inferenceOptions.bulkAnalysisStatus, e.next = "image" === e.t0 ? 12 : "video" === e.t0 ? 15 : "both" === e.t0 ? 18 : 21;
                                    break;
                                case 12:
                                    return n = this.state.assetList.filter((function (e) {
                                        return "image" === e.type
                                    })), t = n.length, e.abrupt("break", 24);
                                case 15:
                                    return n = this.state.assetList.filter((function (e) {
                                        return "video" === e.type
                                    })), t = n.length, e.abrupt("break", 24);
                                case 18:
                                case 21:
                                    return n = this.state.assetList, t = this.state.assetList.length, e.abrupt("break", 24);
                                case 24:
                                    this.setState({
                                        predictTotal: t,
                                        predictDone: 0,
                                        multiplier: 1,
                                        uiState: "Predicting"
                                    }), a = this.toaster.show(this.renderProgress(0)), o = Se(n), e.prev = 27, o.s();
                                case 29:
                                    if ((i = o.n()).done) {
                                        e.next = 44;
                                        break
                                    }
                                    if (r = i.value, !this.state.killVideoPrediction) {
                                        e.next = 36;
                                        break
                                    }
                                    if ("image" !== r.type) {
                                        e.next = 35;
                                        break
                                    }
                                    return e.next = 35, this.getInference(this.currentAsset, !1);
                                case 35:
                                    return e.abrupt("break", 44);
                                case 36:
                                    return this.selectAsset(r, !1), e.next = 39, this.getInference(r, !0);
                                case 39:
                                    return "Predicting" === this.state.uiState && this.setState((function (e) {
                                        return {predictDone: e.predictDone + 1}
                                    }), (function () {
                                        l.toaster.show(l.renderProgress(l.state.predictDone / l.state.predictTotal * 100), a)
                                    })), e.next = 42, new Promise((function (e) {
                                        return setTimeout(e, 1e3)
                                    }));
                                case 42:
                                    e.next = 29;
                                    break;
                                case 44:
                                    e.next = 49;
                                    break;
                                case 46:
                                    e.prev = 46, e.t1 = e.catch(27), o.e(e.t1);
                                case 49:
                                    return e.prev = 49, o.f(), e.finish(49);
                                case 52:
                                    return e.next = 54, this.updateImage();
                                case 54:
                                    this.setState({
                                        predictDone: 0,
                                        predictTotal: 100,
                                        uiState: null,
                                        killVideoPrediction: !1
                                    });
                                case 55:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[27, 46, 49, 52]])
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "singleAnalysis", value: function () {
                    var e = (0, r.Z)(s().mark((function e() {
                        var t, n, a, o = arguments;
                        return s().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = !(o.length > 0 && void 0 !== o[0]) || o[0], 0 === this.state.predictDone && "Predicting" !== this.state.uiState) {
                                        e.next = 4;
                                        break
                                    }
                                    return (0, T.JJ)("Inference is already running", b.S.WARNING, 3e3), e.abrupt("return");
                                case 4:
                                    if (!(0, k.isEmpty)(this.currentAsset) || this.props.loadedModel) {
                                        e.next = 7;
                                        break
                                    }
                                    return (0, T.JJ)("There is no model and image loaded", b.S.WARNING, 3e3), e.abrupt("return");
                                case 7:
                                    if (!(0, k.isEmpty)(this.currentAsset)) {
                                        e.next = 10;
                                        break
                                    }
                                    return (0, T.JJ)("There is no image loaded", b.S.WARNING, 3e3), e.abrupt("return");
                                case 10:
                                    if (this.props.loadedModel) {
                                        e.next = 13;
                                        break
                                    }
                                    return (0, T.JJ)("There is no model loaded", b.S.WARNING, 3e3), e.abrupt("return");
                                case 13:
                                    return this.setState({
                                        predictTotal: 100,
                                        predictDone: .01,
                                        multiplier: 1,
                                        uiState: "Predicting"
                                    }), n && "video" === this.currentAsset.type ? (this.handleProgressToast(!0), null === (a = this.videoOverlay.getElement()) || void 0 === a || a.pause()) : n && this.handleProgressToast(), e.next = 17, this.getInference(this.currentAsset, n);
                                case 17:
                                    return e.next = 19, this.updateImage();
                                case 19:
                                    "video" === this.currentAsset.type && (null === (t = this.videoOverlay.getElement()) || void 0 === t || t.play()), this.setState({
                                        predictDone: 0,
                                        uiState: null,
                                        killVideoPrediction: !1
                                    });
                                case 21:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getInference", value: function () {
                    var e = (0, r.Z)(s().mark((function e(t) {
                        var n, a, o, i = this, r = arguments;
                        return s().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = !(r.length > 1 && void 0 !== r[1]) || r[1], a = !(r.length > 2 && void 0 !== r[2]) || r[2], this.props.loadedModel) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    if (o = this.props.loadedModel.hash, this.setState({hiddenAnnotations: new Set}), "image" !== t.type || "video" === this.state.inferenceOptions.bulkAnalysisStatus && !a) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 9, (0, w.hu)(o, t.localPath, n, this.state.inferenceOptions.iou, "json").then((function (e) {
                                        i.currentAsset.url === t.url && a && i.updateAnnotations(e.data)
                                    })).catch((function (e) {
                                        var t = "Failed to predict image.";
                                        e.response && (t = "".concat(e.response.data.message)), (0, T.JJ)(t, b.S.DANGER, 3e3)
                                    }));
                                case 9:
                                    if ("video" !== t.type || "image" === this.state.inferenceOptions.bulkAnalysisStatus && !a) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 12, (0, w.ym)(o, t.localPath, n, this.state.inferenceOptions.video.frameInterval, this.state.inferenceOptions.iou).then((function (e) {
                                        if (i.currentAsset.url === t.url && a) {
                                            var n = i.videoOverlay.getElement();
                                            "requestVideoFrameCallback" in HTMLVideoElement.prototype && n.requestVideoFrameCallback((function t(a, o) {
                                                var s = i.state.inferenceOptions.video.frameInterval / e.data.fps,
                                                    r = Math.floor(o.mediaTime / s),
                                                    l = Math.floor(r * s * 1e3).toString();
                                                e.data.frames[l] && i.updateAnnotations(e.data.frames[l]);
                                                var c = n.requestVideoFrameCallback(t);
                                                i.setState({currAnnotationPlaybackId: c})
                                            }))
                                        }
                                    })).catch((function (e) {
                                        var t = "Failed to predict video.", n = b.S.DANGER;
                                        e.response && (t = "".concat(e.response.data.message)), "STOPPEDPROCESS" === e.response.data.error && (n = b.S.PRIMARY), (0, T.JJ)(t, n, 3e3)
                                    }));
                                case 12:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "showToaster", value: function (e) {
                    this.toaster.show(e)
                }
            }, {
                key: "filterAnnotationVisibility", value: function () {
                    var e = this;
                    this.annotationGroup.clearLayers();
                    var t = (0, k.invert)(this.state.tagInfo.tags);
                    this.state.currentAssetAnnotations.filter((function (n) {
                        return !e.state.hiddenAnnotations.has(n.options.annotationID) && (0 === e.state.filterArr.length || e.state.showSelected === e.state.filterArr.some((function (e) {
                            return t[n.options.annotationTag].toLowerCase().includes(e.toLowerCase())
                        }))) && n.options.confidence >= e.state.confidence
                    })).forEach((function (t) {
                        var n = (0, k.cloneDeep)(t);
                        n.options.fillOpacity = e.state.annotationOptions.opacity, n.options.weight = e.state.annotationOptions.isOutlined ? t.options.weight : 0, e.annotationGroup.addLayer(n)
                    }))
                }
            }, {
                key: "isAssetVisible", value: function () {
                    return !this.state.annotatedAssetsHidden
                }
            }, {
                key: "selectAsset", value: function (e) {
                    var t = this, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        a = !(e.assetUrl !== this.currentAsset.assetUrl);
                    console.log("asset", e.url), console.log("currentasset", this.currentAsset.url), console.log("single analysis", n);
                    var o = this.videoOverlay.getElement();
                    a || (this.setState({currentAssetAnnotations: []}), this.annotationGroup.eachLayer((function (e) {
                        t.annotationGroup.removeLayer(e)
                    })), this.updateMenuBarAnnotations(), o && o.cancelVideoFrameCallback(this.state.currAnnotationPlaybackId));
                    var i = 0 === Object.keys(this.currentAsset).length;
                    if (this.imagebarRef.highlightAsset(e.assetUrl), this.annotationGroup.clearLayers(), this.annotationGroup.tags = this.state.tagInfo.tags, "image" === e.type) {
                        this.map.hasLayer(this.imageOverlay) || (this.videoOverlay.remove(), this.imageOverlay.addTo(this.map));
                        var s = new Image;
                        this.imageOverlay.setUrl(e.assetUrl), s.src = e.assetUrl, s.onload = function () {
                            t.imageOverlay.setBounds(new m.LatLngBounds([[0, 0], [s.height, s.width]])), t.currentAsset = Ae(Ae({}, e), {}, {
                                metadata: {
                                    width: s.width,
                                    height: s.height
                                }
                            }), a || (t.map.setMinZoom(-5), t.map.invalidateSize(), setTimeout((function () {
                                t.map.fitBounds(t.imageOverlay.getBounds(), {padding: new m.Point(20, 20)})
                            }), 150), t.map.setMinZoom(-3), e.isCached && n && t.singleAnalysis(!1)), i && t.setState({})
                        }, this.backgroundImg = document.querySelector(".leaflet-pane.leaflet-overlay-pane img.leaflet-image-layer")
                    }
                    if ("video" === e.type) {
                        this.map.hasLayer(this.videoOverlay) || (this.imageOverlay.remove(), this.videoOverlay.addTo(this.map));
                        var r = document.createElement("video");
                        r.setAttribute("src", e.assetUrl), this.videoOverlay.setUrl(e.assetUrl), r.onloadedmetadata = function () {
                            t.videoOverlay.setBounds(new m.LatLngBounds([[0, 0], [r.videoHeight, r.videoWidth]])), t.currentAsset = Ae(Ae({}, e), {}, {
                                metadata: {
                                    width: r.videoWidth,
                                    height: r.videoHeight
                                }
                            });
                            var o = t.videoOverlay.getElement();
                            o && (o.controls = !0, o.setAttribute("controlsList", "nofullscreen nodownload")), a ? null === o || void 0 === o || o.focus() : (t.map.setMinZoom(-5), t.map.invalidateSize(), setTimeout((function () {
                                t.map.fitBounds(t.videoOverlay.getBounds(), {padding: new m.Point(20, 20)}), t.map.setMinZoom(-3), null === o || void 0 === o || o.focus()
                            }), 150), e.isCached && n && t.singleAnalysis(!1)), i && t.setState({})
                        }, this.backgroundImg = document.querySelector(".leaflet-pane.leaflet-overlay-pane video.leaflet-image-layer")
                    }
                }
            }, {
                key: "updateMenuBarAnnotations", value: function () {
                    null !== this.menubarRef.current && this.menubarRef.current.setAnnotations(this.annotationGroup)
                }
            }, {
                key: "selectAnnotationTagByHash", value: function (e) {
                    var t = Object.values(this.state.tagInfo.tags).indexOf(e);
                    -1 !== t && (this.currentTag = t, null !== this.menubarRef.current && this.menubarRef.current.setAnnotationTag(t))
                }
            }, {
                key: "refreshProject", value: function () {
                    var e = (0, r.Z)(s().mark((function e() {
                        return s().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    this.selectAsset(this.currentAsset);
                                case 1:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "addNewTag", value: function (e, t) {
                    this.setState((function (n) {
                        var a = Ae({}, n.tagInfo.tags);
                        return a[e] = t, {tagInfo: {modelHash: n.tagInfo.modelHash, tags: a}}
                    }))
                }
            }, {
                key: "resetControls", value: function () {
                    this.setUserState("None"), this.setSelectedAnnotation(null)
                }
            }, {
                key: "renderProgress", value: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", a = {
                        className: "bp3-text-muted ".concat(this.props.useDarkTheme ? "bp3-dark" : ""),
                        icon: "predictive-analysis",
                        message: ye(y.ko, {
                            className: "predict-prog",
                            intent: e < 100 ? "primary" : "success",
                            value: e / 100
                        }),
                        onDismiss: function (e) {
                            e || (t.killVideoPrediction(), window.clearInterval(t.progressToastInterval)), t.isFirstCallPerformed = !1
                        },
                        timeout: e < 100 ? 0 : 600
                    };
                    return "" !== n && (a.action = {text: n}), a
                }
            }, {
                key: "renderHotkeys", value: function () {
                    var e = this;
                    return ye(y.SV, null, ye(y.qm, {
                        global: !0,
                        combo: "o",
                        label: "Open Folder",
                        onKeyDown: this.handleFileManagementOpen
                    }), ye(y.qm, {
                        global: !0,
                        combo: "s",
                        label: "Sync All Folders",
                        onKeyDown: this.syncAllFolders
                    }), ye(y.qm, {
                        global: !0, combo: "A", label: "Analyze", onKeyDown: function () {
                            return e.singleAnalysis()
                        }
                    }), ye(y.qm, {
                        global: !0,
                        combo: "b",
                        label: "Bulk Analysis",
                        onKeyDown: this.bulkAnalysis
                    }), ye(y.qm, {
                        global: !0,
                        combo: "esc",
                        label: "Exit Current Mode",
                        onKeyDown: this.resetControls
                    }), ye(y.qm, {
                        global: !0, combo: "h", label: "Hide Annotations", onKeyDown: function () {
                            e.map.hasLayer(e.annotationGroup) ? e.map.removeLayer(e.annotationGroup) : e.map.addLayer(e.annotationGroup)
                        }
                    }), ye(y.qm, {
                        global: !0, combo: "left", label: "Load previous asset", onKeyDown: function () {
                            return e.switchAnnotation(!0)
                        }
                    }), ye(y.qm, {
                        global: !0, combo: "right", label: "Load previous asset", onKeyDown: function () {
                            return e.switchAnnotation(!1)
                        }
                    }), ye(y.qm, {
                        global: !0,
                        combo: "space",
                        label: "Play/Pause Video",
                        onKeyDown: this.handlePlayPauseVideoOverlay
                    }), Object.entries(this.state.tagInfo.tags).map((function (t, n) {
                        var a = (0, o.Z)(t, 1)[0];
                        if (!(n > 9)) return ye(y.qm, {
                            key: a,
                            global: !0,
                            combo: "".concat(n + 1),
                            label: "Shortcut : ".concat(a),
                            onKeyDown: function () {
                                e.currentTag = n, null != e.menubarRef.current && e.menubarRef.current.setAnnotationTag(n)
                            }
                        })
                    })))
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.props.useDarkTheme ? "" : "light-",
                        n = this.state.imageListCollapsed ? "collapsed-" : "",
                        o = this.state.assetList.filter((function () {
                            return e.isAssetVisible()
                        }));
                    return ye("div", null, ye(y.x7, (0, a.Z)({}, this.state, {ref: this.refHandlers.toaster})), ye("div", {className: "workspace"}, ye("div", {
                        className: [n, "image-list"].join(""),
                        id: "image-list"
                    }, ye(y.zx, {
                        className: [t, "collapse-button"].join(""),
                        large: !0,
                        icon: this.state.imageListCollapsed ? "caret-up" : "caret-down",
                        onClick: function () {
                            e.setState((function (e) {
                                return {imageListCollapsed: !e.imageListCollapsed}
                            }))
                        }
                    }), ye("div", {className: [t, "collapse-button-effect"].join("")}), ye(y.Zb, {
                        className: [n, "image-bar"].join(""),
                        id: "image-bar"
                    }, ye(K, (0, a.Z)({
                        ref: function (t) {
                            e.imagebarRef = t
                        }, assetList: o, callbacks: {selectAssetCallback: this.selectAsset}
                    }, this.props)))), ye("div", {className: this.state.imageListCollapsed ? "expanded-annotator-space" : "annotator-space"}, 0 === Object.keys(this.currentAsset).length ? ye(y.Zb, {className: "annotator-non-ideal"}, ye("div", {className: "bp3-non-ideal-state"}, ye("div", {className: "bp3-non-ideal-state-visual"}, ye("span", null, ye(y.JO, {
                        icon: "media",
                        iconSize: 60
                    }))), ye("h4", {className: "bp3-heading bp3-text-muted"}, "Select an Image to Annotate"))) : null, ye(y.Zb, {className: "main-annotator"}, ye("div", {
                        id: "annotation-map",
                        className: "style-annotator"
                    }), this.backgroundImg ? ye("div", {className: "annotator-settings-button"}, ye(ge, {
                        annotationOptions: this.state.annotationOptions,
                        callbacks: {
                            setAnnotatedAssetsHidden: this.setAnnotatedAssetsHidden,
                            setAnnotationOptions: this.setAnnotationOptions
                        }
                    })) : null)), ye("div", {className: "annotator-controls"}, ye(U, {
                        ref: this.menubarRef,
                        isSyncing: this.state.isSyncing,
                        projectTags: this.state.tagInfo.tags,
                        userEditState: this.state.userEditState,
                        changesMade: this.state.changesMade,
                        uiState: this.state.uiState,
                        predictDone: this.state.predictDone,
                        predictTotal: this.state.predictTotal,
                        hiddenAnnotations: this.state.hiddenAnnotations,
                        confidence: this.state.confidence,
                        filterArr: this.state.filterArr,
                        showSelected: this.state.showSelected,
                        useDarkTheme: this.props.useDarkTheme,
                        isConnected: this.props.isConnected,
                        loadedModel: this.props.loadedModel,
                        currentAsset: this.currentAsset,
                        assetList: this.state.assetList,
                        callbacks: {
                            ResetControls: this.resetControls,
                            OpenFileManagement: this.handleFileManagementOpen,
                            SetAnnotationTag: this.setAnnotationTag,
                            OpenAdvancedSettings: this.handleAdvancedSettingsOpen,
                            SetAnnotationVisibility: this.setAnnotationVisibility,
                            SingleAnalysis: this.singleAnalysis,
                            BulkAnalysis: this.bulkAnalysis,
                            ToggleConfidence: this.toggleConfidence,
                            SetFilterArr: this.setFilterArr,
                            ToggleShowSelected: this.toggleShowSelected,
                            SyncAllFolders: this.syncAllFolders
                        }
                    }), this.state.fileManagementOpen ? ye(de, (0, a.Z)({
                        onClose: this.handleFileManagementClose,
                        isOpen: !0,
                        allowUserClose: !0,
                        callbacks: {RefreshProject: this.refreshProject, UpdateImage: this.updateImage}
                    }, this.props)) : null, this.state.advancedSettingsOpen ? ye(ee, (0, a.Z)({
                        inferenceOptions: this.state.inferenceOptions,
                        onClose: this.state.advancedSettingsOpen ? this.handleAdvancedSettingsClose : this.handleAdvancedSettingsOpen,
                        isOpen: !0,
                        allowUserClose: !0,
                        callbacks: {HandleChangeInSettings: this.handleChangeInAdvancedSettings}
                    }, this.props)) : null)))
                }
            }]), n
        }(g.Component)) || me
    }, 5636: function (e) {
        e.exports = {
            Dialog: "filemodal_Dialog__2rWYe",
            Divider: "filemodal_Divider__jky9p",
            Tree: "filemodal_Tree__209ZG",
            NotFound: "filemodal_NotFound__28dHw",
            Icon: "filemodal_Icon__2nHDp",
            HintIcon: "filemodal_HintIcon__38we2"
        }
    }, 7019: function (e) {
        e.exports = {Card: "imagebar_Card__3TthZ", StackTop: "imagebar_StackTop__3s46r", Tag: "imagebar_Tag__hH6pd"}
    }, 9984: function (e) {
        e.exports = {
            SpacedIcon: "menu_SpacedIcon__2TTAc",
            SelectionList: "menu_SelectionList__1AqpU",
            Spin: "menu_Spin__t3d2N",
            Slider: "menu_Slider__3eu1p",
            Icon: "menu_Icon__2akHD",
            InferenceMenuItem: "menu_InferenceMenuItem__1hZUs",
            TagList: "menu_TagList__3yjBd"
        }
    }, 1164: function (e) {
        e.exports = {
            Dialog: "settingsmodal_Dialog__2B1jD",
            Divider: "settingsmodal_Divider__2LpZ6",
            Section: "settingsmodal_Section__27Rr4",
            Icon: "settingsmodal_Icon__1i0mE",
            Slider: "settingsmodal_Slider__3nRpn",
            SubTitle: "settingsmodal_SubTitle__2Ifm8"
        }
    }
}]);