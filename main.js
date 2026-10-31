// 1
let a = +prompt("a ni kiriting");
let b = +prompt("b ni kiriting");
let h = +prompt("h ni kiriting");

function cuboid() {
    let V = a * b * h;
    let S = 2 * (a * b + a * h + b * h );
    alert (` Hajmi (V)= ${V} \n Sirti (S)= ${S}`);
    // console.log("V =",V, "S =",S );
}
cuboid ();