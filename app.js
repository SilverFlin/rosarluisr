let isRunning = false;

var cy = cytoscape({
    container: document.getElementById('cy'),
  
    boxSelectionEnabled: false,
    autounselectify: true,
  
    style: cytoscape.stylesheet()
      .selector('node')
        .style({
          'content': 'data(id)'
        })
      .selector('edge')
        .style({
          'label': 'data(weight)',
          'curve-style': 'bezier',
          'width': 4,
          'line-color': '#ddd',
          'target-arrow-color': '#ddd'
        })
      .selector('.highlighted')
        .style({
          'background-color': '#61bffc',
          'line-color': '#61bffc',
          'transition-property': 'background-color, line-color, target-arrow-color',
          'transition-duration': '0.5s'
        }),
  
    elements: {
        nodes: [
          { data: { id: '(a) Puebla' } },
          { data: { id: '(b) Tehuacan' } },
          { data: { id: '(c) Cholula de Rivadavia' } },
          { data: { id: '(d) Atlixco' } },
          { data: { id: '(e) Amozoc' } },
          { data: { id: '(f) San Martin' } },
          { data: { id: '(g) Teziutlan' } },
          { data: { id: '(h) Huauchinango' } },
          { data: { id: '(i) Tlaxcalancingo' } },
          { data: { id: '(j) Izúcar' } },
          { data: { id: '(k) San Andres Cholula' } },
          { data: { id: '(l) Xicotepec' } },
          { data: { id: '(m) Zacatlan' } },
          { data: { id: '(n) Tecamachalco' } },
          { data: { id: '(o) Ajalpan' } },
          { data: { id: '(p) Sanctórum' } },
          { data: { id: '(q) Tepeaca' } },
          { data: { id: '(r) Moyotzingo' } },
          { data: { id: '(s) Acatzingo' } },
          { data: { id: '(t) Huejotzingo' } },
          { data: { id: '(u) Cuautlancingo' } },
          { data: { id: '(v) Ciudad Serdán' } },
          { data: { id: '(w) Acajete' } },
        ],
  
        edges: [
          { data: { id: 'ob', weight: 22, source: '(o) Ajalpan', target: '(b) Tehuacan' } },
          { data: { id: 'bn', weight: 63.7, source: '(b) Tehuacan', target: '(n) Tecamachalco' } },
          { data: { id: 'nq', weight: 22.1, source: '(n) Tecamachalco', target: '(q) Tepeaca' } },
          { data: { id: 'ns', weight: 26.3, source: '(n) Tecamachalco', target: '(s) Acatzingo' } },
          { data: { id: 'se', weight: 30.3, source: '(s) Acatzingo', target: '(e) Amozoc' } },
          { data: { id: 'sg', weight: 133, source: '(s) Acatzingo', target: '(g) Teziutlan' } },
          { data: { id: 'sq', weight: 20.8, source: '(s) Acatzingo', target: '(q) Tepeaca' } },
          { data: { id: 'gm', weight: 199, source: '(g) Teziutlan', target: '(m) Zacatlan' } },
          { data: { id: 'mh', weight: 57.5, source: '(m) Zacatlan', target: '(h) Huauchinango' } },
          { data: { id: 'hl', weight: 21.5, source: '(h) Huauchinango', target: '(l) Xicotepec' } },
          { data: { id: 'qe', weight: 18.7, source: '(q) Tepeaca', target: '(e) Amozoc' } },
          { data: { id: 'qa', weight: 41.2, source: '(q) Tepeaca', target: '(a) Puebla' } },
          { data: { id: 'ea', weight: 25, source: '(e) Amozoc', target: '(a) Puebla' } },
          { data: { id: 'jd', weight: 39.4, source: '(j) Izúcar', target: '(d) Atlixco' } },
          { data: { id: 'df', weight: 55.1, source: '(d) Atlixco', target: '(f) San Martin' } },
          { data: { id: 'fr', weight: 6.2, source: '(f) San Martin', target: '(r) Moyotzingo' } },
          { data: { id: 'rt', weight: 21.9, source: '(r) Moyotzingo', target: '(t) Huejotzingo' } },
          { data: { id: 'ra', weight: 44.6, source: '(r) Moyotzingo', target: '(a) Puebla' } },
          { data: { id: 'tc', weight: 16.5, source: '(t) Huejotzingo', target: '(c) Cholula de Rivadavia' } },
          { data: { id: 'tk', weight: 19.9, source: '(t) Huejotzingo', target: '(k) San Andres Cholula' } },
          { data: { id: 'ck', weight: 3, source: '(c) Cholula de Rivadavia', target: '(k) San Andres Cholula' } },
          { data: { id: 'cp', weight: 12.8, source: '(c) Cholula de Rivadavia', target: '(p) Sanctórum' } },
          { data: { id: 'pa', weight: 14, source: '(p) Sanctórum', target: '(a) Puebla' } },
          { data: { id: 'pk', weight: 14, source: '(p) Sanctórum', target: '(k) San Andres Cholula' } },
          { data: { id: 'ka', weight: 11.3, source: '(k) San Andres Cholula', target: '(a) Puebla' } },
          { data: { id: 'di', weight: 24.5, source: '(d) Atlixco', target: '(i) Tlaxcalancingo' } },
          { data: { id: 'ia', weight: 10.2, source: '(i) Tlaxcalancingo', target: '(a) Puebla' } },
          { data: { id: 'cu', weight: 5, source: '(c) Cholula de Rivadavia', target: '(u) Cuautlancingo' } },
          { data: { id: 'pu', weight: 10, source: '(p) Sanctórum', target: '(u) Cuautlancingo' } },
          { data: { id: 'ew', weight: 13.5, source: '(e) Amozoc', target: '(w) Acajete' } },
          { data: { id: 'vs', weight: 58, source: '(v) Ciudad Serdán', target: '(s) Acatzingo' } },
          { data: { id: 'vb', weight: 68.8, source: '(v) Ciudad Serdán', target: '(b) Tehuacan' } },

        ]
      },
  
    layout: {
      name: 'null',
      directed: false,
      
      padding: 10
    }
  });

  