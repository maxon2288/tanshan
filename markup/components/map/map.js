$(".ymap").each(function(e){
    var ya = this;
    var myMap;
    ymaps.ready(
        function() {
            var x = $(ya).attr("data-x");
            var y = $(ya).attr("data-y");
            var marker = $(".map-marker").attr("data-img");
                myMap = new ymaps.Map($(ya)[0], {
                    center: [x , y],
                    zoom: 13,
                    controls: []
                }, {
                    searchControlProvider: 'yandex#search'
                });
        
                var myPlacemark = new ymaps.Placemark([x, y], {},
            { iconLayout: '',
            iconImageHref: marker,
            iconImageSize: [22.45, 31], });    
        
            myMap.geoObjects.add(myPlacemark);
            $(".map-marker").click(function() {
                var x1 = +$(this).attr("data-x");
                var y1 = +$(this).attr("data-y");
                myMap.setCenter([x1,y1]);
                myPlacemark.geometry.setCoordinates([x1, y1]);

            });
        }
    );

})