const assert=require('node:assert/strict');const {distance,standings}=require('../golf-core.js');
assert.equal(distance([0,0],[0,0]),0);assert.ok(Math.abs(distance([0,0],[0,1])-111194.9266)<.01);assert.ok(Math.abs(distance([40,-75],[40.001,-75])-111.1949)<.01);
const h=(a,b,p=4)=>({par:p,strokes:a,others:[b]});
let r=standings({players:['A','B'],mode:'match',holes:[h(3,5),h(4,4),h(5,null)]});assert.equal(r.values[0].wins,1);assert.equal(r.values[1].wins,0);assert.equal(r.tied,1);
r=standings({players:['A','B'],mode:'skins',holes:[h(4,4),h(5,5),h(3,4),h(4,4)]});assert.equal(r.values[0].wins,3);assert.equal(r.values[1].wins,0);assert.equal(r.carry-1,1);
r=standings({players:['A','B'],mode:'stableford',holes:[h(3,4),h(4,6),h(6,3)]});assert.equal(r.values[0].points,5);assert.equal(r.values[1].points,5);
r=standings({players:['A','B'],mode:'stroke',holes:[h(5,4),h(4,3),h(null,4)]});assert.equal(r.sorted[0].name,'B');
console.log('Passed: known geodesic distances, match play, incomplete holes, carried skins, gross Stableford and stroke ranking.');
