var DG = 1;     // 有向图
var DN = 2;     // 有向网
var UDG = 3;    // 无向图
var UDN = 4;    // 无向网

function ArcCell (adj, info) {
	this.adj = typeof adj === 'number' ? adj : Infinity;
	this.info = info || null;
}