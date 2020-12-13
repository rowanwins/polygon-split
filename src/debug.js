export function _debugIntersectionPoints(points) {
  if (process.env.NODE_ENV !== 'development') return
  const map = window.map
  const pLayerGroup = L.layerGroup([]).addTo(map)
  L.NumberedDivIcon = createNumberDiv()

  points.forEach(function (p, index) {
    L.marker([p.p[1], p.p[0]], {
      icon: new L.NumberedDivIcon({
        number: index.toString()
      })
    }).addTo(pLayerGroup)

    L.marker([p.to.p[1], p.to.p[0]], {
      icon: new L.NumberedDivIcon({
        number: 'to'
      })
    }).addTo(pLayerGroup)

    L.marker([p.from.p[1], p.from.p[0]], {
      icon: new L.NumberedDivIcon({
        number: 'from'
      })
    }).addTo(pLayerGroup)

    debugger
    pLayerGroup.clearLayers()
  })
}

export function _debugCandidatePoly(coords) {
  if (process.env.NODE_ENV !== 'development') return
  const map = window.map
  const pLayerGroup = L.layerGroup([]).addTo(map)
  var polygon = L.polygon(coords.map(c => [c[1], c[0]]), {color: 'red'}).addTo(pLayerGroup)
  // L.circleMarker([startDot.p[1], startDot.p[0]], {
  //   color: 'green'
  // }).addTo(pLayerGroup)

  // L.circleMarker([nextDot.p[1], nextDot.p[0]], {
  //   color: 'red'
  // }).addTo(pLayerGroup)
  debugger
  pLayerGroup.clearLayers()
}


export function _debugPointsAdded(startDot, nextDot, pToAdd) {
  if (process.env.NODE_ENV !== 'development') return
  const map = window.map
  const pLayerGroup = L.layerGroup([]).addTo(map)

  L.circleMarker([pToAdd.p[1], pToAdd.p[0]], {
    color: 'grey'
  }).addTo(pLayerGroup)

  L.circleMarker([startDot.p[1], startDot.p[0]], {
    color: 'green',
    radius: 5,
    fillOpacity: 0
  }).addTo(pLayerGroup)

  L.circleMarker([nextDot.p[1], nextDot.p[0]], {
    color: 'red',
    radius: 5,
    fillOpacity: 0
  }).addTo(pLayerGroup)
  debugger
  pLayerGroup.clearLayers()
}

export function _debugFillSection(startPoint, endPoint, fillPoint) {
  if (process.env.NODE_ENV !== 'development') return
  const map = window.map
  const pLayerGroup = L.layerGroup([]).addTo(map)
  L.circleMarker([startPoint.p[1], startPoint.p[0]], {
    color: 'green'
  }).addTo(pLayerGroup)

  L.circleMarker([endPoint.p[1], endPoint.p[0]], {
    color: 'red'
  }).addTo(pLayerGroup)

  L.circleMarker([fillPoint.p[1], fillPoint.p[0]]).addTo(pLayerGroup)
  debugger
  pLayerGroup.remove()
}

export function _debugLinePoints(startDot, nextDot) {
  if (process.env.NODE_ENV !== 'development') return
  const map = window.map
  const pLayerGroup = L.layerGroup([]).addTo(map)

  L.circleMarker([startDot.p[1], startDot.p[0]], {
    color: 'green',
    radius: 5,
    fillOpacity: 0
  }).addTo(pLayerGroup)

  L.circleMarker([nextDot.p[1], nextDot.p[0]], {
    color: 'red',
    radius: 5,
    fillOpacity: 0
  }).addTo(pLayerGroup)
  debugger
  pLayerGroup.clearLayers()
}


function createNumberDiv() {
  return L.Icon.extend({
    options: {
      number: '',
      iconSize: new L.Point(25, 25),
      className: 'leaflet-div-icon'
    },
    createIcon: function () {
      var div = document.createElement('div')
      var numdiv = document.createElement('div')
      numdiv.setAttribute('class', 'number')
      numdiv.innerHTML = this.options['number'] || ''
      div.appendChild(numdiv)
      this._setIconStyles(div, 'icon')
      return div
    }
  })
}
