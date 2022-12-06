/*Funciones auxiliares*/
function getSetValueByIndex(setObj, index) {
    return [...setObj][index]
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setCoordinates(){
    cy.nodes().getElementById('(a) Puebla').position({x:-40.83939792299752,y:569.1209626145677}) 

    cy.nodes().getElementById('(b) Tehuacan').position({x:421.90975150717793,y:822.156156302873}) 

    cy.nodes().getElementById('(c) Cholula de Rivadavia').position({x:-30.42479315557061,y:289.38216972712377}) 

    cy.nodes().getElementById('(d) Atlixco').position({x:-370.13033243896757,y:662.9682948089309}) 

    cy.nodes().getElementById('(e) Amozoc').position({x:191.94415328097477,y:445.08246701947934}) 

    cy.nodes().getElementById('(f) San Martin').position({x:-474.1452666026657,y:322.8582513696341}) 

    cy.nodes().getElementById('(g) Teziutlan').position({x:318.2506498025209,y:204.7298801958279}) 

    cy.nodes().getElementById('(h) Huauchinango').position({x:434.3636188861349,y:50.240192234371}) 

    cy.nodes().getElementById('(i) Tlaxcalancingo').position({x:-194.0207820440041,y:593.0225741769359}) 

    cy.nodes().getElementById('(j) Izúcar').position({x:-518.7095611264509,y:726.768571386702}) 

    cy.nodes().getElementById('(k) San Andres Cholula').position({x:-94.39488756353452,y:455.1786416900409}) 

    cy.nodes().getElementById('(l) Xicotepec').position({x:523.5692488222824,y:-47.78581034004362}) 

    cy.nodes().getElementById('(m) Zacatlan').position({x:362.5711067711787,y:131.03278262499427}) 

    cy.nodes().getElementById('(n) Tecamachalco').position({x:316.48656513131675,y:747.1609153063257}) 

    cy.nodes().getElementById('(o) Ajalpan').position({x:522.3235872937835,y:902.6747172819993}) 

    cy.nodes().getElementById('(p) Sanctórum').position({x:169.5568900711017,y:232.5280968362401})  
        
    cy.nodes().getElementById('(q) Tepeaca').position({x:168.79476704467257,y:634.6732741300638}) 

    cy.nodes().getElementById('(r) Moyotzingo').position({x:-363.20747175893183,y:377.26821144953647}) 

    cy.nodes().getElementById('(s) Acatzingo').position({x:381.07456267700206,y:529.6740427937517}) 

    cy.nodes().getElementById('(t) Huejotzingo').position({x:-197.07363357723028,y:305.6538476677725}) 

    cy.nodes().getElementById('(u) Cuautlancingo').position({x:63.98856123947088,y:124.00642267894268}) 

    cy.nodes().getElementById('(v) Ciudad Serdán').position({x:556.6689592715719,y:708.3850988740289}) 

    cy.nodes().getElementById('(w) Acajete').position({x:235.43853270650948,y:323.5331212715504})
}