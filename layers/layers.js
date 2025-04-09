var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_nestmttjttneet_1 = new ol.format.GeoJSON();
var features_nestmttjttneet_1 = format_nestmttjttneet_1.readFeatures(json_nestmttjttneet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nestmttjttneet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nestmttjttneet_1.addFeatures(features_nestmttjttneet_1);
var lyr_nestmttjttneet_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nestmttjttneet_1, 
                style: style_nestmttjttneet_1,
                popuplayertitle: 'Äänestämättä jättäneet',
                interactive: true,
    title: 'Äänestämättä jättäneet<br />\
    <img src="styles/legend/nestmttjttneet_1_0.png" /> 0,112 - 0,292<br />\
    <img src="styles/legend/nestmttjttneet_1_1.png" /> 0,292 - 0,323<br />\
    <img src="styles/legend/nestmttjttneet_1_2.png" /> 0,323 - 0,344<br />\
    <img src="styles/legend/nestmttjttneet_1_3.png" /> 0,344 - 0,363<br />\
    <img src="styles/legend/nestmttjttneet_1_4.png" /> 0,363 - 0,383<br />\
    <img src="styles/legend/nestmttjttneet_1_5.png" /> 0,383 - 0,41<br />\
    <img src="styles/legend/nestmttjttneet_1_6.png" /> 0,41 - 0,621<br />' });
var format_KDkannatus_2 = new ol.format.GeoJSON();
var features_KDkannatus_2 = format_KDkannatus_2.readFeatures(json_KDkannatus_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KDkannatus_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KDkannatus_2.addFeatures(features_KDkannatus_2);
var lyr_KDkannatus_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KDkannatus_2, 
                style: style_KDkannatus_2,
                popuplayertitle: 'KD kannatus',
                interactive: true,
    title: 'KD kannatus<br />\
    <img src="styles/legend/KDkannatus_2_0.png" /> 0 - 0,009<br />\
    <img src="styles/legend/KDkannatus_2_1.png" /> 0,009 - 0,015<br />\
    <img src="styles/legend/KDkannatus_2_2.png" /> 0,015 - 0,021<br />\
    <img src="styles/legend/KDkannatus_2_3.png" /> 0,021 - 0,027<br />\
    <img src="styles/legend/KDkannatus_2_4.png" /> 0,027 - 0,034<br />\
    <img src="styles/legend/KDkannatus_2_5.png" /> 0,034 - 0,045<br />\
    <img src="styles/legend/KDkannatus_2_6.png" /> 0,045 - 0,64<br />' });
var format_RKPkannatus_3 = new ol.format.GeoJSON();
var features_RKPkannatus_3 = format_RKPkannatus_3.readFeatures(json_RKPkannatus_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RKPkannatus_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RKPkannatus_3.addFeatures(features_RKPkannatus_3);
var lyr_RKPkannatus_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RKPkannatus_3, 
                style: style_RKPkannatus_3,
                popuplayertitle: 'RKP kannatus',
                interactive: true,
    title: 'RKP kannatus<br />\
    <img src="styles/legend/RKPkannatus_3_0.png" /> 0 - 0<br />\
    <img src="styles/legend/RKPkannatus_3_1.png" /> 0 - 0<br />\
    <img src="styles/legend/RKPkannatus_3_2.png" /> 0 - 0<br />\
    <img src="styles/legend/RKPkannatus_3_3.png" /> 0 - 0,001<br />\
    <img src="styles/legend/RKPkannatus_3_4.png" /> 0,001 - 0,003<br />\
    <img src="styles/legend/RKPkannatus_3_5.png" /> 0,003 - 0,026<br />\
    <img src="styles/legend/RKPkannatus_3_6.png" /> 0,026 - 0,788<br />' });
var format_VIHRkannatus_4 = new ol.format.GeoJSON();
var features_VIHRkannatus_4 = format_VIHRkannatus_4.readFeatures(json_VIHRkannatus_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIHRkannatus_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIHRkannatus_4.addFeatures(features_VIHRkannatus_4);
var lyr_VIHRkannatus_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIHRkannatus_4, 
                style: style_VIHRkannatus_4,
                popuplayertitle: 'VIHR kannatus',
                interactive: true,
    title: 'VIHR kannatus<br />\
    <img src="styles/legend/VIHRkannatus_4_0.png" /> 0 - 0,0101<br />\
    <img src="styles/legend/VIHRkannatus_4_1.png" /> 0,0101 - 0,016<br />\
    <img src="styles/legend/VIHRkannatus_4_2.png" /> 0,016 - 0,022<br />\
    <img src="styles/legend/VIHRkannatus_4_3.png" /> 0,022 - 0,031<br />\
    <img src="styles/legend/VIHRkannatus_4_4.png" /> 0,031 - 0,044<br />\
    <img src="styles/legend/VIHRkannatus_4_5.png" /> 0,044 - 0,067<br />\
    <img src="styles/legend/VIHRkannatus_4_6.png" /> 0,067 - 0,244<br />' });
var format_VASkannatus_5 = new ol.format.GeoJSON();
var features_VASkannatus_5 = format_VASkannatus_5.readFeatures(json_VASkannatus_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VASkannatus_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VASkannatus_5.addFeatures(features_VASkannatus_5);
var lyr_VASkannatus_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VASkannatus_5, 
                style: style_VASkannatus_5,
                popuplayertitle: 'VAS kannatus',
                interactive: true,
    title: 'VAS kannatus<br />\
    <img src="styles/legend/VASkannatus_5_0.png" /> 0 - 0,012<br />\
    <img src="styles/legend/VASkannatus_5_1.png" /> 0,012 - 0,02<br />\
    <img src="styles/legend/VASkannatus_5_2.png" /> 0,02 - 0,029<br />\
    <img src="styles/legend/VASkannatus_5_3.png" /> 0,029 - 0,04<br />\
    <img src="styles/legend/VASkannatus_5_4.png" /> 0,04 - 0,054<br />\
    <img src="styles/legend/VASkannatus_5_5.png" /> 0,054 - 0,079<br />\
    <img src="styles/legend/VASkannatus_5_6.png" /> 0,079 - 0,355<br />' });
var format_KESKkannatus_6 = new ol.format.GeoJSON();
var features_KESKkannatus_6 = format_KESKkannatus_6.readFeatures(json_KESKkannatus_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KESKkannatus_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KESKkannatus_6.addFeatures(features_KESKkannatus_6);
var lyr_KESKkannatus_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KESKkannatus_6, 
                style: style_KESKkannatus_6,
                popuplayertitle: 'KESK kannatus',
                interactive: true,
    title: 'KESK kannatus<br />\
    <img src="styles/legend/KESKkannatus_6_0.png" /> 0 - 0,031<br />\
    <img src="styles/legend/KESKkannatus_6_1.png" /> 0,031 - 0,086<br />\
    <img src="styles/legend/KESKkannatus_6_2.png" /> 0,086 - 0,144<br />\
    <img src="styles/legend/KESKkannatus_6_3.png" /> 0,144 - 0,188<br />\
    <img src="styles/legend/KESKkannatus_6_4.png" /> 0,188 - 0,231<br />\
    <img src="styles/legend/KESKkannatus_6_5.png" /> 0,231 - 0,27<br />\
    <img src="styles/legend/KESKkannatus_6_6.png" /> 0,27 - 0,5<br />' });
var format_SDPkannatus_7 = new ol.format.GeoJSON();
var features_SDPkannatus_7 = format_SDPkannatus_7.readFeatures(json_SDPkannatus_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDPkannatus_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDPkannatus_7.addFeatures(features_SDPkannatus_7);
var lyr_SDPkannatus_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDPkannatus_7, 
                style: style_SDPkannatus_7,
                popuplayertitle: 'SDP kannatus',
                interactive: true,
    title: 'SDP kannatus<br />\
    <img src="styles/legend/SDPkannatus_7_0.png" /> 0 - 0,051<br />\
    <img src="styles/legend/SDPkannatus_7_1.png" /> 0,051 - 0,071<br />\
    <img src="styles/legend/SDPkannatus_7_2.png" /> 0,071 - 0,097<br />\
    <img src="styles/legend/SDPkannatus_7_3.png" /> 0,097 - 0,116<br />\
    <img src="styles/legend/SDPkannatus_7_4.png" /> 0,116 - 0,136<br />\
    <img src="styles/legend/SDPkannatus_7_5.png" /> 0,136 - 0,158<br />\
    <img src="styles/legend/SDPkannatus_7_6.png" /> 0,158 - 0,259<br />' });
var format_PSkannatus_8 = new ol.format.GeoJSON();
var features_PSkannatus_8 = format_PSkannatus_8.readFeatures(json_PSkannatus_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSkannatus_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSkannatus_8.addFeatures(features_PSkannatus_8);
var lyr_PSkannatus_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PSkannatus_8, 
                style: style_PSkannatus_8,
                popuplayertitle: 'PS kannatus',
                interactive: true,
    title: 'PS kannatus<br />\
    <img src="styles/legend/PSkannatus_8_0.png" /> 0 - 0,093<br />\
    <img src="styles/legend/PSkannatus_8_1.png" /> 0,093 - 0,114<br />\
    <img src="styles/legend/PSkannatus_8_2.png" /> 0,114 - 0,127<br />\
    <img src="styles/legend/PSkannatus_8_3.png" /> 0,127 - 0,139<br />\
    <img src="styles/legend/PSkannatus_8_4.png" /> 0,139 - 0,154<br />\
    <img src="styles/legend/PSkannatus_8_5.png" /> 0,154 - 0,173<br />\
    <img src="styles/legend/PSkannatus_8_6.png" /> 0,173 - 0,307<br />' });
var format_KOKkannatus_9 = new ol.format.GeoJSON();
var features_KOKkannatus_9 = format_KOKkannatus_9.readFeatures(json_KOKkannatus_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOKkannatus_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOKkannatus_9.addFeatures(features_KOKkannatus_9);
var lyr_KOKkannatus_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOKkannatus_9, 
                style: style_KOKkannatus_9,
                popuplayertitle: 'KOK kannatus',
                interactive: true,
    title: 'KOK kannatus<br />\
    <img src="styles/legend/KOKkannatus_9_0.png" /> 0 - 0,036<br />\
    <img src="styles/legend/KOKkannatus_9_1.png" /> 0,036 - 0,057<br />\
    <img src="styles/legend/KOKkannatus_9_2.png" /> 0,057 - 0,079<br />\
    <img src="styles/legend/KOKkannatus_9_3.png" /> 0,079 - 0,102<br />\
    <img src="styles/legend/KOKkannatus_9_4.png" /> 0,102 - 0,124<br />\
    <img src="styles/legend/KOKkannatus_9_5.png" /> 0,124 - 0,157<br />\
    <img src="styles/legend/KOKkannatus_9_6.png" /> 0,157 - 0,507<br />' });
var format_nestmttjttneetmuutos_10 = new ol.format.GeoJSON();
var features_nestmttjttneetmuutos_10 = format_nestmttjttneetmuutos_10.readFeatures(json_nestmttjttneetmuutos_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nestmttjttneetmuutos_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nestmttjttneetmuutos_10.addFeatures(features_nestmttjttneetmuutos_10);
var lyr_nestmttjttneetmuutos_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nestmttjttneetmuutos_10, 
                style: style_nestmttjttneetmuutos_10,
                popuplayertitle: 'Äänestämättä jättäneet muutos',
                interactive: true,
    title: 'Äänestämättä jättäneet muutos<br />\
    <img src="styles/legend/nestmttjttneetmuutos_10_0.png" />       - 0,5<br />\
    <img src="styles/legend/nestmttjttneetmuutos_10_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/nestmttjttneetmuutos_10_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/nestmttjttneetmuutos_10_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/nestmttjttneetmuutos_10_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/nestmttjttneetmuutos_10_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/nestmttjttneetmuutos_10_6.png" /> 1,5 - <br />' });
var format_KDmuutos_11 = new ol.format.GeoJSON();
var features_KDmuutos_11 = format_KDmuutos_11.readFeatures(json_KDmuutos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KDmuutos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KDmuutos_11.addFeatures(features_KDmuutos_11);
var lyr_KDmuutos_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KDmuutos_11, 
                style: style_KDmuutos_11,
                popuplayertitle: 'KD muutos',
                interactive: true,
    title: 'KD muutos<br />\
    <img src="styles/legend/KDmuutos_11_0.png" />       - 0,5<br />\
    <img src="styles/legend/KDmuutos_11_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/KDmuutos_11_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/KDmuutos_11_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/KDmuutos_11_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/KDmuutos_11_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/KDmuutos_11_6.png" /> 1,5 - <br />' });
var format_RKPmuutos_12 = new ol.format.GeoJSON();
var features_RKPmuutos_12 = format_RKPmuutos_12.readFeatures(json_RKPmuutos_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RKPmuutos_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RKPmuutos_12.addFeatures(features_RKPmuutos_12);
var lyr_RKPmuutos_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RKPmuutos_12, 
                style: style_RKPmuutos_12,
                popuplayertitle: 'RKP muutos',
                interactive: true,
    title: 'RKP muutos<br />\
    <img src="styles/legend/RKPmuutos_12_0.png" />       - 0,5<br />\
    <img src="styles/legend/RKPmuutos_12_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/RKPmuutos_12_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/RKPmuutos_12_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/RKPmuutos_12_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/RKPmuutos_12_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/RKPmuutos_12_6.png" /> 1,5 - <br />' });
var format_VIHRmuutos_13 = new ol.format.GeoJSON();
var features_VIHRmuutos_13 = format_VIHRmuutos_13.readFeatures(json_VIHRmuutos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIHRmuutos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIHRmuutos_13.addFeatures(features_VIHRmuutos_13);
var lyr_VIHRmuutos_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIHRmuutos_13, 
                style: style_VIHRmuutos_13,
                popuplayertitle: 'VIHR muutos',
                interactive: true,
    title: 'VIHR muutos<br />\
    <img src="styles/legend/VIHRmuutos_13_0.png" />       - 0,5<br />\
    <img src="styles/legend/VIHRmuutos_13_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/VIHRmuutos_13_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/VIHRmuutos_13_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/VIHRmuutos_13_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/VIHRmuutos_13_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/VIHRmuutos_13_6.png" /> 1,5 - <br />' });
var format_VASmuutos_14 = new ol.format.GeoJSON();
var features_VASmuutos_14 = format_VASmuutos_14.readFeatures(json_VASmuutos_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VASmuutos_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VASmuutos_14.addFeatures(features_VASmuutos_14);
var lyr_VASmuutos_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VASmuutos_14, 
                style: style_VASmuutos_14,
                popuplayertitle: 'VAS muutos',
                interactive: true,
    title: 'VAS muutos<br />\
    <img src="styles/legend/VASmuutos_14_0.png" />       - 0,5<br />\
    <img src="styles/legend/VASmuutos_14_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/VASmuutos_14_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/VASmuutos_14_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/VASmuutos_14_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/VASmuutos_14_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/VASmuutos_14_6.png" /> 1,5 - <br />' });
var format_KESKmuutos_15 = new ol.format.GeoJSON();
var features_KESKmuutos_15 = format_KESKmuutos_15.readFeatures(json_KESKmuutos_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KESKmuutos_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KESKmuutos_15.addFeatures(features_KESKmuutos_15);
var lyr_KESKmuutos_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KESKmuutos_15, 
                style: style_KESKmuutos_15,
                popuplayertitle: 'KESK muutos',
                interactive: true,
    title: 'KESK muutos<br />\
    <img src="styles/legend/KESKmuutos_15_0.png" />       - 0,5<br />\
    <img src="styles/legend/KESKmuutos_15_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/KESKmuutos_15_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/KESKmuutos_15_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/KESKmuutos_15_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/KESKmuutos_15_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/KESKmuutos_15_6.png" /> 1,5 - <br />' });
var format_SDPmuutos_16 = new ol.format.GeoJSON();
var features_SDPmuutos_16 = format_SDPmuutos_16.readFeatures(json_SDPmuutos_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDPmuutos_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDPmuutos_16.addFeatures(features_SDPmuutos_16);
var lyr_SDPmuutos_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDPmuutos_16, 
                style: style_SDPmuutos_16,
                popuplayertitle: 'SDP muutos',
                interactive: true,
    title: 'SDP muutos<br />\
    <img src="styles/legend/SDPmuutos_16_0.png" />       - 0,5<br />\
    <img src="styles/legend/SDPmuutos_16_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/SDPmuutos_16_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/SDPmuutos_16_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/SDPmuutos_16_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/SDPmuutos_16_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/SDPmuutos_16_6.png" /> 1,5 - <br />' });
var format_PSmuutos_17 = new ol.format.GeoJSON();
var features_PSmuutos_17 = format_PSmuutos_17.readFeatures(json_PSmuutos_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSmuutos_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSmuutos_17.addFeatures(features_PSmuutos_17);
var lyr_PSmuutos_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PSmuutos_17, 
                style: style_PSmuutos_17,
                popuplayertitle: 'PS muutos',
                interactive: true,
    title: 'PS muutos<br />\
    <img src="styles/legend/PSmuutos_17_0.png" />       - 0,5<br />\
    <img src="styles/legend/PSmuutos_17_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/PSmuutos_17_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/PSmuutos_17_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/PSmuutos_17_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/PSmuutos_17_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/PSmuutos_17_6.png" /> 1,5 - <br />' });
var format_KOKmuutos_18 = new ol.format.GeoJSON();
var features_KOKmuutos_18 = format_KOKmuutos_18.readFeatures(json_KOKmuutos_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOKmuutos_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOKmuutos_18.addFeatures(features_KOKmuutos_18);
var lyr_KOKmuutos_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOKmuutos_18, 
                style: style_KOKmuutos_18,
                popuplayertitle: 'KOK muutos',
                interactive: true,
    title: 'KOK muutos<br />\
    <img src="styles/legend/KOKmuutos_18_0.png" />       - 0,5<br />\
    <img src="styles/legend/KOKmuutos_18_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/KOKmuutos_18_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/KOKmuutos_18_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/KOKmuutos_18_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/KOKmuutos_18_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/KOKmuutos_18_6.png" /> 1,5 - <br />' });
var group_muutos = new ol.layer.Group({
                                layers: [lyr_nestmttjttneetmuutos_10,lyr_KDmuutos_11,lyr_RKPmuutos_12,lyr_VIHRmuutos_13,lyr_VASmuutos_14,lyr_KESKmuutos_15,lyr_SDPmuutos_16,lyr_PSmuutos_17,lyr_KOKmuutos_18,],
                                fold: "open",
                                title: 'muutos'});
var group_kannatus = new ol.layer.Group({
                                layers: [lyr_nestmttjttneet_1,lyr_KDkannatus_2,lyr_RKPkannatus_3,lyr_VIHRkannatus_4,lyr_VASkannatus_5,lyr_KESKkannatus_6,lyr_SDPkannatus_7,lyr_PSkannatus_8,lyr_KOKkannatus_9,],
                                fold: "open",
                                title: 'kannatus'});

lyr_OpenStreetMap_0.setVisible(true);lyr_nestmttjttneet_1.setVisible(true);lyr_KDkannatus_2.setVisible(true);lyr_RKPkannatus_3.setVisible(true);lyr_VIHRkannatus_4.setVisible(true);lyr_VASkannatus_5.setVisible(true);lyr_KESKkannatus_6.setVisible(true);lyr_SDPkannatus_7.setVisible(true);lyr_PSkannatus_8.setVisible(true);lyr_KOKkannatus_9.setVisible(true);lyr_nestmttjttneetmuutos_10.setVisible(true);lyr_KDmuutos_11.setVisible(true);lyr_RKPmuutos_12.setVisible(true);lyr_VIHRmuutos_13.setVisible(true);lyr_VASmuutos_14.setVisible(true);lyr_KESKmuutos_15.setVisible(true);lyr_SDPmuutos_16.setVisible(true);lyr_PSmuutos_17.setVisible(true);lyr_KOKmuutos_18.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_kannatus,group_muutos];
lyr_nestmttjttneet_1.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_KDkannatus_2.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_RKPkannatus_3.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_VIHRkannatus_4.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_VASkannatus_5.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_KESKkannatus_6.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_SDPkannatus_7.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_PSkannatus_8.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_KOKkannatus_9.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_nestmttjttneetmuutos_10.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_KDmuutos_11.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_RKPmuutos_12.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_VIHRmuutos_13.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_VASmuutos_14.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_KESKmuutos_15.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_SDPmuutos_16.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_PSmuutos_17.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_KOKmuutos_18.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', 'Aanestamatta_jattaneet': 'Aanestamatta_jattaneet', });
lyr_nestmttjttneet_1.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': 'TextEdit', 'kunta': 'TextEdit', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': 'TextEdit', });
lyr_KDkannatus_2.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': '', });
lyr_RKPkannatus_3.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': '', });
lyr_VIHRkannatus_4.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': '', });
lyr_VASkannatus_5.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': '', });
lyr_KESKkannatus_6.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': '', });
lyr_SDPkannatus_7.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': '', });
lyr_PSkannatus_8.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': '', });
lyr_KOKkannatus_9.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': '', });
lyr_nestmttjttneetmuutos_10.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': 'TextEdit', 'kunta': 'TextEdit', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': 'TextEdit', });
lyr_KDmuutos_11.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': '', });
lyr_RKPmuutos_12.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': '', });
lyr_VIHRmuutos_13.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': '', });
lyr_VASmuutos_14.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': '', });
lyr_KESKmuutos_15.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': '', });
lyr_SDPmuutos_16.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': '', });
lyr_PSmuutos_17.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': '', });
lyr_KOKmuutos_18.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', 'Aanestamatta_jattaneet': '', });
lyr_nestmttjttneet_1.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_KDkannatus_2.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_RKPkannatus_3.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_VIHRkannatus_4.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_VASkannatus_5.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_KESKkannatus_6.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_SDPkannatus_7.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_PSkannatus_8.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_KOKkannatus_9.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_nestmttjttneetmuutos_10.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_KDmuutos_11.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_RKPmuutos_12.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_VIHRmuutos_13.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_VASmuutos_14.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_KESKmuutos_15.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_SDPmuutos_16.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_PSmuutos_17.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_KOKmuutos_18.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', 'Aanestamatta_jattaneet': 'header label - visible with data', });
lyr_KOKmuutos_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});