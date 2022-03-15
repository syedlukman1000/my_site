const first = document.querySelector('.first');
const second = document.querySelector('.second');
const last = document.querySelector('.last');
const menu = document.querySelector('.menu');
const section = document.querySelector('section');
const fad1 = document.querySelector('.fad1');
const fad2 = document.querySelector('.fad2');
const fad3 = document.querySelector('.fad3');
const fad0 = document.querySelector('.fad0')
const fronthead = document.querySelector('.fronthead');
const h = document.querySelector('.h');
const e = document.querySelector('.e')
const l = document.querySelector('.l')
const l1 = document.querySelector('.l1')
const o = document.querySelector('.o')
const i = document.querySelector('.i')
const m = document.querySelector('.m');
const s = document.querySelector('.s')
const y = document.querySelector('.y')
const e1 = document.querySelector('.e1')
const d = document.querySelector('.d')
const l3 = document.querySelector('.l3');
const u = document.querySelector('.u')
const k = document.querySelector('.k')
const m1 = document.querySelector('.m1')
const a = document.querySelector('.a')
const n = document.querySelector('.n')



const i1 = document.querySelector('.i1');
const m2 = document.querySelector('.m2')
const a1 = document.querySelector('.a1')
const f = document.querySelector('.f')
const u1 = document.querySelector('.u1')
const l4 = document.querySelector('.l4')
const l5 = document.querySelector('.l5');
const s1 = document.querySelector('.s1')
const t = document.querySelector('.t')
const a2 = document.querySelector('.a2')
const c = document.querySelector('.c')
const k1 = document.querySelector('.k1');
const w = document.querySelector('.w')
const e2 = document.querySelector('.e2')
const b = document.querySelector('.b')

const d1 = document.querySelector('.d1')
const e3 = document.querySelector('.e3')
const v = document.querySelector('.v')
const e4 = document.querySelector('.e4');
const l6 = document.querySelector('.l6')
const o1 = document.querySelector('.o1')
const p = document.querySelector('.p')
const e5 = document.querySelector('.e5')
const r = document.querySelector('.r')




function displaye() {
    e.classList.add('display1')
}
function displayl() {
    l.classList.add('display1')
}
function displayl1() {
    l1.classList.add('display1')
}
function displayo() {
    o.classList.add('display1')
}
function displayi() {
    i.classList.add('display1')
}
function displaym() {
    m.classList.add('display1')
}
function displays() {
    s.classList.add('display1')
}
function displayy() {
    y.classList.add('display1')
}
function displaye1() {
    e1.classList.add('display1')
}
function displayd() {
    d.classList.add('display1')
}
function displayl3() {
    l3.classList.add('display1')
}
function displayu() {
    u.classList.add('display1')
}
function displayk() {
    k.classList.add('display1')
}
function displaym1() {
    m1.classList.add('display1')
}
function displaya() {
    a.classList.add('display1')
}
function displayn() {
    n.classList.add('display1')
}




function displayi1() {
    i1.classList.add('display1')
}
function displaym2() {
    m2.classList.add('display1')
}
function displaya1() {
    a1.classList.add('display1')
}
function displayf() {
    f.classList.add('display1')
}
function displayu1() {
    u1.classList.add('display1')
}
function displayl4() {
    l4.classList.add('display1')
}
function displayl5() {
    l5.classList.add('display1')
}
function displays1() {
    s1.classList.add('display1')
}
function displayt() {
    t.classList.add('display1')
}
function displaya2() {
    a2.classList.add('display1')
}
function displayc() {
    c.classList.add('display1')
}
function displayk1() {
    k1.classList.add('display1')
}
function displayw() {
    w.classList.add('display1')
}
function displaye2() {
    e2.classList.add('display1')
}
function displayb() {
    b.classList.add('display1')
}
function displayd1() {
    d1.classList.add('display1')
}



function displaye3() {
    e3.classList.add('display1')
}
function displayv() {
    v.classList.add('display1')
}
function displaye4() {
    e4.classList.add('display1')
}
function displayl6() {
    l6.classList.add('display1')
}
function displayo1() {
    o1.classList.add('display1')
}
function displayp() {
    p.classList.add('display1')
}
function displaye5() {
    e5.classList.add('display1')
}
function displayr() {
    r.classList.add('display1')
}



function ani() {
    h.classList.add('display1')
    setTimeout(displaye, 100);
    setTimeout(displayl, 200);
    setTimeout(displayl1, 300);
    setTimeout(displayo, 400);
    setTimeout(displayi, 500);
    setTimeout(displaym, 600);
    setTimeout(displays, 700);
    setTimeout(displayy, 800);
    setTimeout(displaye1, 900);
    setTimeout(displayd, 1000);
    setTimeout(displayl3, 1100);
    setTimeout(displayu, 1200);
    setTimeout(displayk, 1300);
    setTimeout(displaym1, 1400);
    setTimeout(displaya, 1500);
    setTimeout(displayn, 1600);


    setTimeout(displayi1, 1700);
    setTimeout(displaym2, 1800);
    setTimeout(displaya1, 1900);
    setTimeout(displayf, 2000);
    setTimeout(displayu1, 2100);
    setTimeout(displayl4, 2200);
    setTimeout(displayl5, 2300);
    setTimeout(displays1, 2400);
    setTimeout(displayt, 2500);
    setTimeout(displaya2, 2600);
    setTimeout(displayc, 2700);
    setTimeout(displayk1, 2800);
    setTimeout(displayw, 2900);
    setTimeout(displaye2, 3000);
    setTimeout(displayb, 3100);
    setTimeout(displayd1, 3200);

    setTimeout(displaye3, 3300);
    setTimeout(displayv, 3400);
    setTimeout(displaye4, 3500);
    setTimeout(displayl6, 3600);
    setTimeout(displayo1, 3700);
    setTimeout(displayp, 3800);
    setTimeout(displaye5, 3900);
    setTimeout(displayr, 4000);

}
window.addEventListener('DOMContentLoaded', ani())

var count = 1;
function translate() {
    first.classList.toggle('translate');
    last.classList.toggle('ttranslate');
}
function rotate() {
    first.classList.toggle('rotate');
    second.classList.toggle('srotate');
    last.classList.toggle('rrotate');
    fad1.classList.toggle('display');
    fad2.classList.toggle('display');
    fad3.classList.toggle('display');
    fad0.classList.toggle('display')

}


menu.addEventListener('click', function () {

    count++;
    if (count % 2 === 0) {
        translate();
        setTimeout(rotate, 1000);
        section.style.height = '250px';

    }
    else {
        rotate();
        setTimeout(translate, 1000);
        section.style.height = '0px';

    }

})
console.log("connected");


