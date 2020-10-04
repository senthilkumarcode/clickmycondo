
function GraphCreator(svg, nodes, edges) {
    var thisGraph = this;
    thisGraph.nodeprefix = "";
    thisGraph.idct = 0;

    thisGraph.nodes = nodes || [];
    thisGraph.edges = edges || [];

    thisGraph.state = {
        selectedNode: null,
        selectedEdge: null,
        mouseDownNode: null,
        mouseDownLink: null,
        justDragged: false,
        justScaleTransGraph: false,
        lastKeyDown: -1,
        shiftNodeDrag: false,
        selectedText: null
    };
    thisGraph.nodePopupShowing = false;

    thisGraph.d3SelectedNode = null;
    // define arrow markers for graph links
    var defs = svg.append('svg:defs');
    // var style = document.createElement('style');
    svg.innerHTML = `width`;
    var perVal = '100%';
    svg.attr('width', '1200px');
    svg.attr('height', '1200px');
    svg.attr('position', 'absolute');
    svg.attr('id', 'svgId');
    // defs.append('svg:marker')
    //   .attr('id', 'end-arrow')
    //   .attr('viewBox', '0 -5 10 10')
    //   .attr('refX', "12")
    //   .attr('markerWidth', 3.5)
    //   .attr('markerHeight', 3.5)
    //   .attr('orient', 'auto')
    //   .append('svg:path')
    //   .attr('d', 'M0,-5L10,0L0,5');

    // define arrow markers for leading arrow
    defs.append('svg:marker')
        .attr('id', 'mark-end-arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 7)
        .attr('markerWidth', 3.5)
        .attr('markerHeight', 3.5)
        .attr('orient', 'auto')
        .append('svg:path')
        .attr('d', 'M0,-5L10,0L0,5');

    defs.append('svg:filter')
        .attr('id', 'loopFilter')
        .attr('x', '0')
        .attr('y', '0')
        .append('svg:feGaussianBlur')
        .attr('in', 'SourceGraphic')
        .attr('stdDeviation', '3')

    thisGraph.svg = svg;
    thisGraph.svgG = svg.append("g")
        .classed(thisGraph.consts.graphClass, true);
    var svgG = thisGraph.svgG;

    //zoom

    svg.call(d3.behavior.zoom().scaleExtent([1, 3]).on("zoom", function () {
        svgG.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")")
    }));


    // displayed when dragging between nodes
    thisGraph.dragLine = svgG.append('svg:path')
        .attr('class', 'link dragline hidden')
        .attr('d', 'M0,0L0,0')
        .style('marker-end', 'url(#mark-end-arrow)');

    // svg nodes and edges
    thisGraph.paths = svgG.append("g").selectAll("g");
    thisGraph.circles = svgG.append("g").selectAll("g");
    thisGraph.drag = d3.behavior.drag()
        .origin(function (d) {
            return { x: d.x, y: d.y };
        })
        .on("drag", function (args) {
            let preventDrag = localStorage.getItem('preventGraph');
            if (preventDrag == null) {
                thisGraph.state.justDragged = true;
                thisGraph.dragmove.call(thisGraph, args);
                localStorage.removeItem('onchange');
                localStorage.setItem('onDrag', true);
            }
        })
        .on("dragend", function () {

            // todo check if edge-mode is selected
        });

    // listen for key events
    d3.select(window).on("keydown", function () {
        thisGraph.svgKeyDown.call(thisGraph);
    })
        .on("keyup", function () {
            thisGraph.svgKeyUp.call(thisGraph);
        });
    svg.on("mousedown", function (d) { thisGraph.svgMouseDown.call(thisGraph, d); });
    svg.on("mouseup", function (d) { thisGraph.svgMouseUp.call(thisGraph, d); });

    // listen for dragging
    // var dragSvg = d3.behavior.zoom()
    //     .on("zoom", function() {
    //         if (d3.event.sourceEvent.shiftKey) {
    //             // TODO  the internal d3 state is still changing
    //             return false;
    //         } else {
    //             // thisGraph.zoomed.call(thisGraph);
    //         }
    //         return true;
    //     })
    //     .on("zoomstart", function() {
    //         var ael = d3.select("#" + thisGraph.consts.activeEditId).node();
    //         if (ael) {
    //             ael.blur();
    //         }
    //         if (!d3.event.sourceEvent.shiftKey) d3.select('body').style("cursor", "move");
    //     })
    //     .on("zoomend", function() {
    //         d3.select('body').style("cursor", "auto");
    //     });

    // svg.call(dragSvg).on("dblclick.zoom", null);

    // listen for resize
    window.onresize = function () { thisGraph.updateWindow(svg); };

    d3.select("#setBtn").on("click", function () {
        var bNo = document.getElementById("buildingNo").value;
        var fNo = document.getElementById("floorNo").value;
        thisGraph.setPrefix(bNo, fNo);
        // alert(thisGraph.nodeprefix);
    });

    // d3.select("#setFloorImg").on("click", function() {
    //     document.getElementById("hidden-bg-upload").click();
    // });

    d3.select("#hidden-bg-upload").on("change", function () {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            let uploadFile = this.files[0];
            let filereader = new window.FileReader();
            filereader.onload = function (e) {
                // var img = $('<img id="pinch-zoom-image-id">'); //Equivalent: $(document.createElement('img'))
                // var perVal = '100%';
                // img.attr('width',perVal);
                // img.attr('height',perVal);
                // img.attr('src', e.target.result);
                // img.appendTo('#image-wrapper');
                // $('#image-wrapper').css('background-image', "url(" + e.target.result + ")");
                // d3.select(".graph").delete("image");
                var bgwidth, bgheight;
                var image = new Image();
                image.src = e.target.result;
                // let svgElem = document.getElementById('bgimage');
                // if(svgElem){
                //   svgElem.parentNode.removeChild(svgElem);
                // }
                image.onload = function () {
                    bgwidth = this.width;
                    bgheight = this.height;
                    d3.select(".graph").insert("image", '.link')
                        .attr("xlink:href", e.target.result)
                        .attr('id', 'bgimage')
                        .attr("width", bgwidth)
                        .attr("height", bgheight)
                };

            };
            filereader.readAsDataURL(uploadFile);
        }
    });

    // handle uploaded data
    d3.select("#updGraph").on("click", function () {
        document.getElementById("hidden-graph-upload").click();
    });
    d3.select("#hidden-graph-upload").on("change", function () {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            var uploadFile = this.files[0];
            var filereader = new window.FileReader();
            filereader.onload = function () {
                var txtRes = filereader.result;
                // TODO better error handling
                try {
                    var fullObj = JSON.parse(txtRes);
                    var jsonObj = fullObj.maponly; //new structure
                    thisGraph.deleteGraph(true);
                    thisGraph.nodes = jsonObj.nodes;
                    //thisGraph.setIdCt(jsonObj.nodes.length + 1);
                    thisGraph.setIdCt(jsonObj.idct);
                    var newEdges = jsonObj.edges;
                    newEdges.forEach(function (e, i) {
                        newEdges[i] = {
                            source: thisGraph.nodes.filter(function (n) { return n.id == e.source; })[0],
                            target: thisGraph.nodes.filter(function (n) { return n.id == e.target; })[0]
                        };
                    });
                    thisGraph.edges = newEdges;
                    thisGraph.updateGraph(undefined, undefined);
                } catch (err) {
                    window.alert("Error parsing uploaded file\nerror message: " + err.message);
                    return;
                }
            };
            filereader.readAsText(uploadFile);
        } else {
            alert("Your browser won't let you save this graph -- try upgrading your browser to IE 10+ or Chrome or Firefox.");
        }
    });

    // handle delete graph
    d3.select("#delete-graph").on("click", function () {
        thisGraph.deleteGraph(false);
    });

    // d3.select("#selectDelete").on("click", function() {
    //     thisGraph.deleteSelected();
    // });

}

GraphCreator.prototype.customSetBuilding = function () {
    var thisGraph = this;
    var bNo = $("#buildingNo").val();
    var fNo = $("#floorNo").val();
    thisGraph.setPrefix(bNo, fNo);
}

GraphCreator.prototype.customImageUpdalod = function (imageSrc) {
    var bgwidth, bgheight;
    var image = new Image();
    image.src = imageSrc;
    // let svgElem = document.getElementById('bgimage');
    // if(svgElem){
    //   svgElem.parentNode.removeChild(svgElem);
    // }
    image.onload = function () {
        bgwidth = this.width;
        bgheight = this.height;
        d3.select(".graph").insert("image", '.link')
            .attr("xlink:href", imageSrc)
            .attr('id', 'bgimage')
            .attr("width", bgwidth)
            .attr("height", bgheight)
    };
}
GraphCreator.prototype.createSVGPath = function (smartPath) {
    var thisGraph = this;
    let pathString = "";
    for (let index = 0; index < smartPath.length; index++) {
        let node = smartPath[index];
        if (index == 0) {
            pathString += `M${node.x},${node.y}`
        } else {
            pathString += `L${node.x},${node.y}`
        }
    }
    d3.select(".graph > g")
        .append('path')
        .attr('class', 'animePathLink')
        .attr('d', pathString)
        .attr('id', 'smart-path');

    d3.select(".graph > g")
        .append("ellipse")
        .attr('class', 'loopWay')
        .attr('fill', '#f1f5f9')
        .attr("rx", 10)
        .attr("ry", 5)
        .attr('filter', 'url(#loopFilter)')
        .attr('id', 'smart-path-navigation')

    var lineDrawing = anime({
        targets: '#lcanvas g .animePathLink',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 3000,
        delay: 1000,
        direction: 'normal',
        loop: false
    });
    setTimeout(() => {
        var path = anime.path('.graph > g path');
        anime({
            targets: 'g .loopWay',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 2000,
            delay: 500,
            loop: true
        });
    }, 3000)
}

GraphCreator.prototype.pathBuilder = function (data, selectedObj, smartPath) {
    var thisGraph = this;
    if (data) {
        var fullObj = JSON.parse(data);
        var jsonObj = fullObj.maponly; //new structure
    }
    console.log('fullObj', fullObj, jsonObj);
    thisGraph.deleteGraph(true);
    thisGraph.nodes = jsonObj.nodes;
    thisGraph.setIdCt(jsonObj.idct);
    var newEdges = [];
    if (smartPath && smartPath.length) {
        smartPath.forEach(function (e, i) {
            let smartPathObj = {
                source: {},
                target: {}
            }
            if (i == smartPath.length - 1) {
                smartPathObj.source = thisGraph.nodes.filter(function (n) { return n.id == e; })[0],
                    smartPathObj.target = thisGraph.nodes.filter(function (n) { return n.id == e; })[0];
            } else {
                smartPathObj.source = thisGraph.nodes.filter(function (n) { return n.id == e; })[0],
                    smartPathObj.target = thisGraph.nodes.filter(function (n) { return n.id == smartPath[i + 1]; })[0]
            }
            newEdges.push(smartPathObj);
        })
        // newEdges.forEach(function (e, i) {
        //     newEdges[i] = {
        //         source: thisGraph.nodes.filter(function (n) { return n.id == e.source; })[0],
        //         target: thisGraph.nodes.filter(function (n) { return n.id == e.target; })[0]
        //     };
        // });
    } else {
        //TODO  
    }
    thisGraph.edges = newEdges;
    thisGraph.updateGraph(selectedObj, smartPath);
};


GraphCreator.prototype.customGraphUpdate = function (data,selectedObj) {
    var thisGraph = this;
    if (data) {
        var fullObj = JSON.parse(data);
        var jsonObj = fullObj.maponly; //new structure
    }
    thisGraph.deleteGraph(true);
    thisGraph.nodes = jsonObj.nodes;
    //thisGraph.setIdCt(jsonObj.nodes.length + 1);
    thisGraph.setIdCt(jsonObj.idct);
    var newEdges = jsonObj.edges;
    console.log('befor new', jsonObj.edges)
    newEdges.forEach(function (e, i) {
        newEdges[i] = {
            source: thisGraph.nodes.filter(function (n) { return n.id == e.source; })[0],
            target: thisGraph.nodes.filter(function (n) { return n.id == e.target; })[0]
        };
    });
    thisGraph.edges = newEdges;
    thisGraph.updateGraph(selectedObj, undefined);
};

GraphCreator.prototype.setIdCt = function (idct) {
    this.idct = idct;
};

GraphCreator.prototype.setPrefix = function (bNo, fNo) {
    if (bNo == "") bNo = "0";
    if (fNo == "") fNo = "0";
    this.nodeprefix = bNo + "_" + fNo + "_";
}

// very very important .... nodeRadius is circle size
GraphCreator.prototype.consts = {
    selectedClass: "selected",
    connectClass: "connect-node",
    circleGClass: "conceptG",
    circlePOIClass: "conceptP",
    circleExitClass: "conceptE",
    circleFireClass: "conceptF",
    circleLiftClass: "conceptL",
    circleStepClass: "conceptS",
    circleEsxClass: "conceptX",
    circleRampClass: "conceptR",
    circleYRHClass: "conceptY",
    isPetsAllowed: "unitPet",
    isVacant: "unitVacant",
    isAvailableForRent: "unitAvailRent",
    isFurnished: "unitFurnished",
    isSold: "unitSold",
    constructionInProgress: "unitConstruction",
    twoBR: "unit2BR",
    baseG: "baseG",
    graphClass: "graph",
    activeEditId: "active-editing",
    BACKSPACE_KEY: 8, //8
    DELETE_KEY: 46, //46
    ENTER_KEY: 13,
    nodeRadius: 6
};

/* PROTOTYPE FUNCTIONS */

GraphCreator.prototype.dragmove = function (d) {
    var thisGraph = this;
    if (thisGraph.state.shiftNodeDrag) {
        thisGraph.dragLine.attr('d', 'M' + d.x + ',' + d.y + 'L' + d3.mouse(thisGraph.svgG.node())[0] + ',' + d3.mouse(this.svgG.node())[1]);
    } else {
        d.x += d3.event.dx;
        d.y += d3.event.dy;
        thisGraph.updateGraph(undefined, undefined);
    }
};

GraphCreator.prototype.deleteGraph = function (skipPrompt) {
    var thisGraph = this,
        doDelete = true;
    // if (!skipPrompt) {
    //     doDelete = window.confirm("Press OK to delete this graph");
    // }
    if (doDelete) {
        thisGraph.nodes = [];
        thisGraph.edges = [];
        thisGraph.updateGraph(undefined, undefined);
    }
};

/* select all text in element: taken from http://stackoverflow.com/questions/6139107/programatically-select-text-in-a-contenteditable-html-element */
GraphCreator.prototype.selectElementContents = function (el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
};


/* insert svg line breaks: taken from http://stackoverflow.com/questions/13241475/how-do-i-include-newlines-in-labels-in-d3-charts */



// remove edges associated with a node
GraphCreator.prototype.spliceLinksForNode = function (node) {
    var thisGraph = this,
        toSplice = thisGraph.edges.filter(function (l) {
            return (l.source === node || l.target === node);
        });
    toSplice.map(function (l) {
        thisGraph.edges.splice(thisGraph.edges.indexOf(l), 1);
    });
};

GraphCreator.prototype.replaceSelectEdge = function (d3Path, edgeData) {
    var thisGraph = this;
    d3Path.classed(thisGraph.consts.selectedClass, true);
    if (thisGraph.state.selectedEdge) {
        thisGraph.removeSelectFromEdge();
    }
    thisGraph.state.selectedEdge = edgeData;
};

GraphCreator.prototype.replaceSelectNode = function (d3Node, nodeData) {
    var thisGraph = this;
    d3Node.classed(this.consts.selectedClass, true);
    if (thisGraph.state.selectedNode) {
        thisGraph.removeSelectFromNode();
    }
    thisGraph.state.selectedNode = nodeData;
    thisGraph.d3SelectedNode = d3Node
};

GraphCreator.prototype.removeSelectFromNode = function () {
    var thisGraph = this;
    thisGraph.circles.filter(function (cd) {
        return cd.id === thisGraph.state.selectedNode.id;
    }).classed(thisGraph.consts.selectedClass, false);
    thisGraph.state.selectedNode = null;
    thisGraph.d3SelectedNode = null
};

GraphCreator.prototype.removeSelectFromEdge = function () {
    var thisGraph = this;
    thisGraph.paths.filter(function (cd) {
        return cd === thisGraph.state.selectedEdge;
    }).classed(thisGraph.consts.selectedClass, false);
    thisGraph.state.selectedEdge = null;
};

GraphCreator.prototype.pathMouseDown = function (d3path, d) {
    var thisGraph = this,
        state = thisGraph.state;
    d3.event.stopPropagation();
    state.mouseDownLink = d;

    if (state.selectedNode) {
        thisGraph.removeSelectFromNode();
    }

    var prevEdge = state.selectedEdge;
    if (!prevEdge || prevEdge !== d) {
        thisGraph.replaceSelectEdge(d3path, d);
    } else {
        thisGraph.removeSelectFromEdge();
    }
};

// mousedown on node
GraphCreator.prototype.circleMouseDown = function (d3node, d) {
    var thisGraph = this,
        state = thisGraph.state;
    d3.event.stopPropagation();
    state.mouseDownNode = d;
    if (d3.event.shiftKey) {

        state.shiftNodeDrag = d3.event.shiftKey;
        // reposition dragged directed edge
        thisGraph.dragLine.classed('hidden', false)
            .attr('d', 'M' + d.x + ',' + d.y + 'L' + d.x + ',' + d.y);
        return;
    }
};



// mouseup on nodes
GraphCreator.prototype.circleMouseUp = function (d3node, d) {
    var thisGraph = this,
        state = thisGraph.state,
        consts = thisGraph.consts;
    // reset the states
    state.shiftNodeDrag = false;
    d3node.classed(consts.connectClass, false);

    var mouseDownNode = state.mouseDownNode;

    if (!mouseDownNode) return;

    thisGraph.dragLine.classed("hidden", true);

    if (mouseDownNode !== d) {
        // we're in a different node: create new edge for mousedown edge and add to graph
        let preventGraph = localStorage.getItem('preventGraph');
        if (preventGraph == null) {
            var newEdge = { source: mouseDownNode, target: d };
            var filtRes = thisGraph.paths.filter(function (d) {
                if (d.source === newEdge.target && d.target === newEdge.source) {
                    thisGraph.edges.splice(thisGraph.edges.indexOf(d), 1);
                }
                return d.source === newEdge.source && d.target === newEdge.target;
            });
            if (!filtRes[0].length) {
                thisGraph.edges.push(newEdge);
                thisGraph.updateGraph(undefined, undefined);
            }
        }

    } else {
        // we're in the same node
        if (state.justDragged) {
            // dragged, not clicked
            state.justDragged = false;
        } else {
            // clicked, not dragged
            if (d3.event.shiftKey) {
                // shift-clicked node: edit text content
                var d3txt = thisGraph.changeTextOfNode(d3node, d);
                var txtNode = d3txt.node();
                thisGraph.selectElementContents(txtNode);
                txtNode.focus();
            } else {
                if (state.selectedEdge) {
                    thisGraph.removeSelectFromEdge();
                }
                var prevNode = state.selectedNode;

                if (!prevNode || prevNode.id !== d.id) {
                    thisGraph.replaceSelectNode(d3node, d);
                } else {
                    thisGraph.removeSelectFromNode();
                }
            }
        }
    }
    state.mouseDownNode = null;
    return;

}; // end of circles mouseup

// mousedown on main svg
GraphCreator.prototype.svgMouseDown = function () {
    let preventDrag = localStorage.getItem('preventGraph');
      if(preventDrag == null){
    this.state.graphMouseDown = true;
      }
};

// mouseup on main svg
GraphCreator.prototype.svgMouseUp = function () {
    var thisGraph = this,
        state = thisGraph.state;
    if (state.justScaleTransGraph) {
        // dragged not clicked
        state.justScaleTransGraph = false;
    } else if (state.graphMouseDown && d3.event.shiftKey) {
        // clicked not dragged from svg

        //let us check if the nodeprefix is set or not
        if (thisGraph.nodeprefix == "") {
            //alert("oops... please set building no and floor no first!");
            //return;
            // thisGraph.nodeprefix = "0_0_";
        }
        //var nodeid = thisGraph.nodeprefix + thisGraph.idct;

        var xycoords = d3.mouse(thisGraph.svgG.node()),
            d = { id: thisGraph.idct++, x: Math.floor(xycoords[0]), y: Math.floor(xycoords[1]), poiId: "", kind: '', type: '', radius: 0 };
        thisGraph.nodes.push(d);
        thisGraph.updateGraph(undefined, undefined);

    } else if (state.shiftNodeDrag) {
        // dragged from node
        state.shiftNodeDrag = false;
        thisGraph.dragLine.classed("hidden", true);
    }
    state.graphMouseDown = false;
};

// keydown on main svg
GraphCreator.prototype.svgKeyDown = function () {
    var thisGraph = this,
        state = thisGraph.state,
        consts = thisGraph.consts;
    if (!thisGraph.shiftKey && d3.event.shiftKey) {
        thisGraph.shiftKey = true;
    }


    // make sure repeated key presses don't register for each keydown
    if (state.lastKeyDown !== -1) return;
    state.lastKeyDown = d3.event.keyCode;
    var selectedNode = state.selectedNode,
        selectedEdge = state.selectedEdge;
    switch (d3.event.keyCode) {
        case consts.BACKSPACE_KEY:
        case consts.DELETE_KEY:
            if (thisGraph.shiftKey) {
                //d3.event.preventDefault();
                // if (selectedNode) {
                //     thisGraph.nodes.splice(thisGraph.nodes.indexOf(selectedNode), 1);
                //     thisGraph.spliceLinksForNode(selectedNode);
                //     state.selectedNode = null;

                //     thisGraph.updateGraph();
                // } else if (selectedEdge) {
                //     thisGraph.edges.splice(thisGraph.edges.indexOf(selectedEdge), 1);
                //     state.selectedEdge = null;
                //     thisGraph.updateGraph();
                // }
                // thisGraph.deleteSelected();
            }
            break;
    }
};

GraphCreator.prototype.svgKeyUp = function () {
    this.state.lastKeyDown = -1;
    this.shiftKey = false;
};

GraphCreator.prototype.selectedUnitProperty = function (d, filteredObj) {
    var thisGraph = this,
        consts = thisGraph.consts;
    let selectedRefClass;
    if (d.poiId) {
        selectedRefClass = consts.selectedClass;
    } else {
        selectedRefClass = consts.circleGClass;
    }
    if (d && d.kind) {
        let kindArr = d.kind.split(",");
        kindArr.filter(key => {
            if (key == filteredObj.selectedCategory) {
                selectedRefClass = consts[filteredObj.selectedCategory]
            }
        })
        // for (const key in d.kind) {
        //     if (d.kind[filteredObj.selectedCategory]) {
        //     }
        // }
    }
    return selectedRefClass;
}

// call to propagate changes to graph
GraphCreator.prototype.updateGraph = function (filteredObj, smartPath) {
    var thisGraph = this,
        consts = thisGraph.consts,
        state = thisGraph.state;

    // update existing nodes
    thisGraph.circles = thisGraph.circles.data(thisGraph.nodes, function (d) { return d.id; });
    thisGraph.circles.attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
    // thisGraph.circles.attr("class", function(d) {
    //         if (d.id % 2 == 0) {
    //             return consts.circlePOIClass
    //         } else {
    //             return consts.circleExitClass
    //         }
    //     })
    // add new nodes
    var newGs = thisGraph.circles.enter().append("g");
    newGs.attr('class', function (d) {
        if (filteredObj && d.type == filteredObj.type) {
            return thisGraph.selectedUnitProperty(d, filteredObj);
        } else {
            if (d.poiId) {
                return consts.selectedClass
            } else {
                return consts.circleGClass
            }
        }
    }).attr("id", function (d) { return "#" + d.poiId })
        .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; })
        .attr("data-content", function (d) {
            return d.poiId;
        })
        .attr("data-trigger", "hover")
        .on("mouseover", function (d) {
            if (state.shiftNodeDrag) {
                d3.select(this).classed(consts.connectClass, true);
            }
        })
        .on("mouseout", function (d) {
            d3.select(this).classed(consts.connectClass, false);
            localStorage.removeItem('poiInfo');
        })
        .on("mouseover", function (d) {
            localStorage.setItem('poiInfo', JSON.stringify(d))
        })
        .on("mousedown", function (d) {
            thisGraph.circleMouseDown.call(thisGraph, d3.select(this), d);
            $("#spanNode").val(d.id);
            $("#poiId").val(d.poiId);
            $('#nodeKind').val(d.kind);
            let poiInfo = { poiId: d.poiId, nodeId: d.id, nodeKind: d.kind, x: d.x, y: d.y, radius: d.radius }
            localStorage.setItem('onchange', JSON.stringify(poiInfo))
            //   localStorage.setItem('deletedNode',JSON.stringify(d))
        })
        // .on("dblclick",function (d) {
        //   console.log('dblclick js')
        //   thisGraph.circleMouseDown.call(thisGraph, d3.select(this), d);
        //   $("#spanNode").val(d.id);
        //   $("#poiId").val(d.poiId);
        //   $('#nodeKind').val(d.kind);
        //   let poiInfo = {poiId:d.poiId,nodeId:d.id,nodeKind:d.kind}
        //   localStorage.setItem('onchange',JSON.stringify(poiInfo))
        //   localStorage.setItem('deletedNode',JSON.stringify(d))
        // })
        .on("mouseup", function (d) {
            thisGraph.circleMouseUp.call(thisGraph, d3.select(this), d);
        })
        .call(thisGraph.drag);
    // newGs.append("rect")
    //     .attr("width", String(consts.nodeRadius))
    //     .attr("height", String(consts.nodeRadius));
    let nodeRadius = consts.nodeRadius;

    newGs.append("circle")
        .attr({
            "r": function (d) {
                if (d.radius && d.radius != 0) {
                    nodeRadius = Number(d.radius);
                } else {
                    nodeRadius = consts.nodeRadius;
                }
                return String(nodeRadius);
            }
        });

    // remove old nodes
    thisGraph.circles.exit().remove();
    // $(function (d) {return "#"+d.poiId}).popover();
    thisGraph.paths = thisGraph.paths.data(thisGraph.edges, function (d) {
        return String(d.source.id) + "+" + String(d.target.id);
        //return d.id;
    });
    var paths = thisGraph.paths;
    // update existing paths
    var selectedPathClass = 'link';
    if (smartPath && smartPath.length) {
        selectedPathClass = 'animePathLink'
    } else {
        selectedPathClass = 'link'
    }
    paths.style('marker-end', 'url(#end-arrow)')
        .classed(consts.selectedClass, function (d) {
            return d === state.selectedEdge;
        })
        .attr("d", function (d) {
            console.log('d', d)
            return "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y;
        });
    // add new paths
    paths.enter()
        .append("path")
        .style('marker-end', 'url(#end-arrow)')
        .classed(selectedPathClass, true)
        .attr("d", function (d) {
            return "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y;
        })
        .on("mousedown", function (d) {
            thisGraph.pathMouseDown.call(thisGraph, d3.select(this), d);
        })
        .on("mouseup", function (d) {
            state.mouseDownLink = null;
        });
    // remove old links
    paths.exit().remove();
};






GraphCreator.prototype.zoomed = function () {
    this.state.justScaleTransGraph = true;
    d3.select("." + this.consts.graphClass)
        .attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
};

GraphCreator.prototype.updateWindow = function (svg) {
    var docEl = document.documentElement,
        bodyEl = document.getElementsByTagName('body')[0];
    var x = window.innerWidth || docEl.clientWidth || bodyEl.clientWidth;
    var y = window.innerHeight || docEl.clientHeight || bodyEl.clientHeight;
    svg.attr("width", x).attr("height", y);
}

GraphCreator.prototype.setPOIId = function () {
    let thisGraph = this;
    let _kind = $('#nodeKind').val();
    let _type = $('#type').val();
    let _radius = $('#radius').val();
    let _style = thisGraph.consts.circleGClass;
    let _poistr = $('#poiId').val();
    if (_poistr) {
        _style = thisGraph.consts.selectedClass
    } else {
        _poistr = "";
    }
    // if (_kind === 'E') {
    //     _style = thisGraph.consts.circleExitClass
    // } else if (_kind === 'E') {
    //     _style = thisGraph.consts.circleExitClass
    // } else if (_kind === 'F') {
    //     _style = thisGraph.consts.circleFireClass
    // } else if (_kind === 'L') {
    //     _style = thisGraph.consts.circleLiftClass
    // } else if (_kind === 'S') {
    //     _style = thisGraph.consts.circleStepClass
    // } else if (_kind === 'R') {
    //     _style = thisGraph.consts.circleRampClass
    // } else if (_kind === 'Y') {
    //     _style = thisGraph.consts.circleYRHClass
    // } else if (_kind === 'X') {
    //     _style = thisGraph.consts.circleEsxClass
    // } else if (_kind === 'P') {
    //     _style = thisGraph.consts.circlePOIClass
    // }
    thisGraph.state.selectedNode.poiId = _poistr;
    thisGraph.state.selectedNode.kind = _kind;
    thisGraph.state.selectedNode.type = _type;
    thisGraph.state.selectedNode.radius = _radius;
    // thisGraph.d3SelectedNode.attr("r", String(_radius))
    thisGraph.d3SelectedNode.attr({ "r": String(_radius) });
    // $("g").children().attr("r", String(_radius))
    //   thisGraph.d3SelectedNode.children().attr("r", String(_radius))
    // thisGraph.d3SelectedNode[0][0].childNodes[0].attr("r", String(_radius));
};


GraphCreator.prototype.deleteSelected = function () {
    let thisGraph = this;
    let selectedNode = thisGraph.state.selectedNode;
    let selectedEdge = thisGraph.state.selectedEdge;
    if (selectedNode) {
        thisGraph.nodes.splice(thisGraph.nodes.indexOf(selectedNode), 1);
        thisGraph.spliceLinksForNode(selectedNode);
        thisGraph.state.selectedNode = null;
        thisGraph.updateGraph(undefined, undefined);
    } else if (selectedEdge) {
        thisGraph.edges.splice(thisGraph.edges.indexOf(selectedEdge), 1);
        thisGraph.state.selectedEdge = null;
        thisGraph.updateGraph(undefined, undefined);
    }
}
