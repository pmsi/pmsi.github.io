var map;
var initialize;

initialize = function(){
  var latLng = new google.maps.LatLng(45.7710823, 4.8476341); // Correspond au coordonnées de LYON
  var myOptions = {
    zoom      : 14, // Zoom par défaut
    center    : latLng, // Coordonnées de départ de la carte de type latLng 
    mapTypeId : google.maps.MapTypeId.TERRAIN, // Type de carte, différentes valeurs possible HYBRID, ROADMAP, SATELLITE, TERRAIN
    maxZoom   : 20
  };
  
  map      = new google.maps.Map(document.getElementById('map'), myOptions);
  
  var marker = new google.maps.Marker({
    position : latLng,
    map      : map,
    title    : "PMSIpilot",
    icon     : "logo/marker_PMSI.png" // Chemin de l'image du marqueur pour surcharger celui par défaut
  });
  
  var contentMarker = [
      '<div id="containerTabs">',
      '<div id="tabs">',
      '<ul>',
        '<li><a href="#tab-1"><span>PMSIpilot</span></a></li>',
        '<li><a href="#tab-2"><span>Horraire</span></a></li>',
        '<li><a href="#tab-3"><span>Information</span></a></li>',
      '</ul>',
      '<div id="tab-1">',
        '<h3>Lyon</h3><p>61 rue Sully, <a href="http://pmsipilot.com">Accès site web</a>.</p>',
      '</div>',
      '<div id="tab-2">',
       '<h3>Horraire d ouverture </h3><p>Du lundi au Vendredi</p><p>08:00 - 18:00</p><p>Fermé le week-end</p>',
      '</div>',
      '<div id="tab-3">',
        '<h3>Vous pouvez contacter nos services :</h3><ul><li>Support Tech : 04 26 10 06 36 </li><li></li><li>Acceuil : 04 26 10 06 30</li></ul>',
      '</div>',
      '</div>',
      '</div>'
  ].join('');

  var infoWindow = new google.maps.InfoWindow({
    content  : contentMarker,
    position : latLng
  });
  
  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map,marker);
  });
  
  google.maps.event.addListener(infoWindow, 'domready', function(){ // infoWindow est biensûr notre info-bulle
    jQuery("#tabs").tabs();
  });
};

initialize();
