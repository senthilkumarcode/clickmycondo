// this is implementation of dijkstras algorithm with respect to hmwayfinding map json...

var assign = make_assign()
var create = make_create()
var trim = make_trim()
var Global = (typeof window !== 'undefined' ? window : global)
var assign = assign;
var trim = trim;
var map = map;
var slice = slice;
var pluck = pluck;
var each = each;
var bind = bind;
var create = create;
var isList = isList;
var isFunction = isFunction;
var isObject = isObject;

function make_assign() {
	if (Object.assign) {
		return Object.assign
	} else {
		return function shimAssign(obj, props1, props2, etc) {
			for (var i = 1; i < arguments.length; i++) {
				each(Object(arguments[i]), function (val, key) {
					obj[key] = val
				})
			}
			return obj
		}
	}
}

function make_create() {
	if (Object.create) {
		return function create(obj, assignProps1, assignProps2, etc) {
			var assignArgsList = slice(arguments, 1)
			return assign.apply(this, [Object.create(obj)].concat(assignArgsList))
		}
	} else {
		function F() { } // eslint-disable-line no-inner-declarations
		return function create(obj, assignProps1, assignProps2, etc) {
			var assignArgsList = slice(arguments, 1)
			F.prototype = obj
			return assign.apply(this, [new F()].concat(assignArgsList))
		}
	}
}

function make_trim() {
	if (String.prototype.trim) {
		return function trim(str) {
			return String.prototype.trim.call(str)
		}
	} else {
		return function trim(str) {
			return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
		}
	}
}

function bind(obj, fn) {
	return function () {
		return fn.apply(obj, Array.prototype.slice.call(arguments, 0))
	}
}

function slice(arr, index) {
	return Array.prototype.slice.call(arr, index || 0)
}

function each(obj, fn) {
	pluck(obj, function (val, key) {
		fn(val, key)
		return false
	})
}

function map(obj, fn) {
	var res = (isList(obj) ? [] : {})
	pluck(obj, function (v, k) {
		res[k] = fn(v, k)
		return false
	})
	return res
}

function pluck(obj, fn) {
	if (isList(obj)) {
		for (var i = 0; i < obj.length; i++) {
			if (fn(obj[i], i)) {
				return obj[i]
			}
		}
	} else {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (fn(obj[key], key)) {
					return obj[key]
				}
			}
		}
	}
}

function isList(val) {
	return (val != null && typeof val != 'function' && typeof val.length == 'number')
}

function isFunction(val) {
	return val && {}.toString.call(val) === '[object Function]'
}

function isObject(val) {
	return val && {}.toString.call(val) === '[object Object]'
}

const shortestDistanceNode = (distances, visited) => {
	let shortest = null;

	for (let node in distances) {
		let currentIsShortest =
			shortest === null || distances[node] < distances[shortest];
		if (currentIsShortest && !visited.includes(node)) {
			shortest = node;
		}
	}
	return shortest;
};

const findShortestPath = (graph, startNode, endNode) => {
	// establish object for recording distances from the start node
	let distances = {};
	distances[endNode] = "Infinity";
	distances = Object.assign(distances, graph[startNode]);

	// track paths
	let parents = { endNode: null };
	for (let child in graph[startNode]) {
		parents[child] = startNode;
	}

	// track nodes that have already been visited
	let visited = [];

	// find the nearest node
	let node = shortestDistanceNode(distances, visited);

	// for that node
	while (node) {
		// find its distance from the start node & its child nodes
		let distance = distances[node];
		let children = graph[node];
		// for each of those child nodes
		for (let child in children) {
			// make sure each child node is not the start node
			if (String(child) === String(startNode)) {
				continue;
			} else {
				// save the distance from the start node to the child node
				let newdistance = distance + children[child];
				// if there's no recorded distance from the start node to the child node in the distances object
				// or if the recorded distance is shorter than the previously stored distance from the start node to the child node
				// save the distance to the object
				// record the path
				if (!distances[child] || distances[child] > newdistance) {
					distances[child] = newdistance;
					parents[child] = node;
				}
			}
		}
		// move the node to the visited set
		visited.push(node);
		// move to the nearest neighbor node
		node = shortestDistanceNode(distances, visited);
	}

	// using the stored paths from start node to end node
	// record the shortest path
	let shortestPath = [endNode];
	let parent = parents[endNode];
	while (parent) {
		shortestPath.push(parent);
		parent = parents[parent];
	}
	shortestPath.reverse();

	// return the shortest path from start node to end node & its distance
	let results = {
		distance: distances[endNode],
		path: shortestPath,
	};

	return results;
};

var wfAPI = {
	version: '1.0.0',
	sayHello: function () {
		console.log(`hello!`)
	},

	setMap: function (value) {
		console.log(`some val`)
		this._building = value
		const building = value
		const floors = building.floors
		// sample graph
		// {
		//   start: { A: 5, B: 2 },
		//   A: { start: 1, C: 4, D: 2 },
		//   B: { A: 8, D: 7 },
		//   C: { D: 6, end: 3 },
		//   D: { end: 1 },
		//   end: {},
		// };
		let graph = {} // sample graph 
		each(floors, function (floor, floorindex) {
			console.log(floorindex)
			let nodes = floor.nodes
			each(nodes, function (node) {
				// we need to check if every node id is unique otherwise have to work with team
				// we will use id as string
				let _id = `${node.id}`
				if (!graph[_id]) {
					graph[_id] = {}
				}
			})
		})

		// create connected vertices for each vertex in map    
		each(floors, function (floor) {
			let edges = floor.edges
			each(edges, function (edge) {
				let an = floor.nodes.find((n) => n.id == edge.source)
				let bn = floor.nodes.find((n) => n.id == edge.target)
				let a = an.x - bn.x
				let b = an.y - bn.y
				//distance formula 
				//dist = Mathf.Sqrt ((a * a) + (b * b));
				/////////////////// USING SQUARED DISTANCE FOR FASTER CALCULATION ///////////
				dist = ((a * a) + (b * b));
				/////////// even we can precalculate the distance and send it to here /////

				let source = `${edge.source}`
				let target = `${edge.target}`
				graph[source][target] = dist
				graph[target][source] = dist
			})
		})

		//adding floor connections
		each(building.floorConns, function (conn) {
			let source = `${conn.source}`
			let target = `${conn.target}`
			graph[source][target] = 1.0
			graph[target][source] = 1.0

			// we can have different distance weights to floor connections
		})

		// let bgraph = {}
		// Object.assign(bgraph, graph)
		this._bgraph = graph
		console.log(this._bgraph)
		return true
	},

	getBuildingMeta: function () {
		let meta = {
			buildingNo: this._building.buildingNo,
			floors: this._building.floors.length,
			totalNodes: 0
		}
		meta.totalNodes = Object.keys(this._bgraph).length
		return meta
	},

	smartPath: function (start, finish) {
		start = "" + start
		finish = "" + finish
		const shortestpath = findShortestPath(this._bgraph, start, finish)
		const floor = this._building.floors;
		let shortestPathDetails = [];
		shortestpath.path.forEach(function (e, i) {
			floor.forEach(f =>{
				f.nodes.filter(key =>{
					if(key.id == e){
						shortestPathDetails.push(key)
					}
				})
			})
		});
		return shortestPathDetails;
	}

}

function createWayFinder() {
	var _internals = {
		_building: {},
		_bgraph: {}
	}
	var wf = create(_internals, wfAPI)
	return wf
}
