var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KDkannatus_1 = new ol.format.GeoJSON();
var features_KDkannatus_1 = format_KDkannatus_1.readFeatures(json_KDkannatus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KDkannatus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KDkannatus_1.addFeatures(features_KDkannatus_1);
var lyr_KDkannatus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KDkannatus_1, 
                style: style_KDkannatus_1,
                popuplayertitle: 'KD kannatus',
                interactive: true,
    title: 'KD kannatus<br />\
    <img src="styles/legend/KDkannatus_1_0.png" /> 0 - 0,009<br />\
    <img src="styles/legend/KDkannatus_1_1.png" /> 0,009 - 0,015<br />\
    <img src="styles/legend/KDkannatus_1_2.png" /> 0,015 - 0,021<br />\
    <img src="styles/legend/KDkannatus_1_3.png" /> 0,021 - 0,027<br />\
    <img src="styles/legend/KDkannatus_1_4.png" /> 0,027 - 0,034<br />\
    <img src="styles/legend/KDkannatus_1_5.png" /> 0,034 - 0,045<br />\
    <img src="styles/legend/KDkannatus_1_6.png" /> 0,045 - 0,64<br />' });
var format_RKPkannatus_2 = new ol.format.GeoJSON();
var features_RKPkannatus_2 = format_RKPkannatus_2.readFeatures(json_RKPkannatus_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RKPkannatus_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RKPkannatus_2.addFeatures(features_RKPkannatus_2);
var lyr_RKPkannatus_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RKPkannatus_2, 
                style: style_RKPkannatus_2,
                popuplayertitle: 'RKP kannatus',
                interactive: true,
    title: 'RKP kannatus<br />\
    <img src="styles/legend/RKPkannatus_2_0.png" /> 0 - 0<br />\
    <img src="styles/legend/RKPkannatus_2_1.png" /> 0 - 0<br />\
    <img src="styles/legend/RKPkannatus_2_2.png" /> 0 - 0<br />\
    <img src="styles/legend/RKPkannatus_2_3.png" /> 0 - 0,001<br />\
    <img src="styles/legend/RKPkannatus_2_4.png" /> 0,001 - 0,003<br />\
    <img src="styles/legend/RKPkannatus_2_5.png" /> 0,003 - 0,026<br />\
    <img src="styles/legend/RKPkannatus_2_6.png" /> 0,026 - 0,788<br />' });
var format_VIHRkannatus_3 = new ol.format.GeoJSON();
var features_VIHRkannatus_3 = format_VIHRkannatus_3.readFeatures(json_VIHRkannatus_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIHRkannatus_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIHRkannatus_3.addFeatures(features_VIHRkannatus_3);
var lyr_VIHRkannatus_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIHRkannatus_3, 
                style: style_VIHRkannatus_3,
                popuplayertitle: 'VIHR kannatus',
                interactive: true,
    title: 'VIHR kannatus<br />\
    <img src="styles/legend/VIHRkannatus_3_0.png" /> 0 - 0,0101<br />\
    <img src="styles/legend/VIHRkannatus_3_1.png" /> 0,0101 - 0,016<br />\
    <img src="styles/legend/VIHRkannatus_3_2.png" /> 0,016 - 0,022<br />\
    <img src="styles/legend/VIHRkannatus_3_3.png" /> 0,022 - 0,031<br />\
    <img src="styles/legend/VIHRkannatus_3_4.png" /> 0,031 - 0,044<br />\
    <img src="styles/legend/VIHRkannatus_3_5.png" /> 0,044 - 0,067<br />\
    <img src="styles/legend/VIHRkannatus_3_6.png" /> 0,067 - 0,244<br />' });
var format_VASkannatus_4 = new ol.format.GeoJSON();
var features_VASkannatus_4 = format_VASkannatus_4.readFeatures(json_VASkannatus_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VASkannatus_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VASkannatus_4.addFeatures(features_VASkannatus_4);
var lyr_VASkannatus_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VASkannatus_4, 
                style: style_VASkannatus_4,
                popuplayertitle: 'VAS kannatus',
                interactive: true,
    title: 'VAS kannatus<br />\
    <img src="styles/legend/VASkannatus_4_0.png" /> 0 - 0,012<br />\
    <img src="styles/legend/VASkannatus_4_1.png" /> 0,012 - 0,02<br />\
    <img src="styles/legend/VASkannatus_4_2.png" /> 0,02 - 0,029<br />\
    <img src="styles/legend/VASkannatus_4_3.png" /> 0,029 - 0,04<br />\
    <img src="styles/legend/VASkannatus_4_4.png" /> 0,04 - 0,054<br />\
    <img src="styles/legend/VASkannatus_4_5.png" /> 0,054 - 0,079<br />\
    <img src="styles/legend/VASkannatus_4_6.png" /> 0,079 - 0,355<br />' });
var format_KESKkannatus_5 = new ol.format.GeoJSON();
var features_KESKkannatus_5 = format_KESKkannatus_5.readFeatures(json_KESKkannatus_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KESKkannatus_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KESKkannatus_5.addFeatures(features_KESKkannatus_5);
var lyr_KESKkannatus_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KESKkannatus_5, 
                style: style_KESKkannatus_5,
                popuplayertitle: 'KESK kannatus',
                interactive: true,
    title: 'KESK kannatus<br />\
    <img src="styles/legend/KESKkannatus_5_0.png" /> 0 - 0,031<br />\
    <img src="styles/legend/KESKkannatus_5_1.png" /> 0,031 - 0,086<br />\
    <img src="styles/legend/KESKkannatus_5_2.png" /> 0,086 - 0,144<br />\
    <img src="styles/legend/KESKkannatus_5_3.png" /> 0,144 - 0,188<br />\
    <img src="styles/legend/KESKkannatus_5_4.png" /> 0,188 - 0,231<br />\
    <img src="styles/legend/KESKkannatus_5_5.png" /> 0,231 - 0,27<br />\
    <img src="styles/legend/KESKkannatus_5_6.png" /> 0,27 - 0,5<br />' });
var format_SDPkannatus_6 = new ol.format.GeoJSON();
var features_SDPkannatus_6 = format_SDPkannatus_6.readFeatures(json_SDPkannatus_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDPkannatus_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDPkannatus_6.addFeatures(features_SDPkannatus_6);
var lyr_SDPkannatus_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDPkannatus_6, 
                style: style_SDPkannatus_6,
                popuplayertitle: 'SDP kannatus',
                interactive: true,
    title: 'SDP kannatus<br />\
    <img src="styles/legend/SDPkannatus_6_0.png" /> 0 - 0,051<br />\
    <img src="styles/legend/SDPkannatus_6_1.png" /> 0,051 - 0,071<br />\
    <img src="styles/legend/SDPkannatus_6_2.png" /> 0,071 - 0,097<br />\
    <img src="styles/legend/SDPkannatus_6_3.png" /> 0,097 - 0,116<br />\
    <img src="styles/legend/SDPkannatus_6_4.png" /> 0,116 - 0,136<br />\
    <img src="styles/legend/SDPkannatus_6_5.png" /> 0,136 - 0,158<br />\
    <img src="styles/legend/SDPkannatus_6_6.png" /> 0,158 - 0,259<br />' });
var format_PSkannatus_7 = new ol.format.GeoJSON();
var features_PSkannatus_7 = format_PSkannatus_7.readFeatures(json_PSkannatus_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSkannatus_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSkannatus_7.addFeatures(features_PSkannatus_7);
var lyr_PSkannatus_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PSkannatus_7, 
                style: style_PSkannatus_7,
                popuplayertitle: 'PS kannatus',
                interactive: true,
    title: 'PS kannatus<br />\
    <img src="styles/legend/PSkannatus_7_0.png" /> 0 - 0,093<br />\
    <img src="styles/legend/PSkannatus_7_1.png" /> 0,093 - 0,114<br />\
    <img src="styles/legend/PSkannatus_7_2.png" /> 0,114 - 0,127<br />\
    <img src="styles/legend/PSkannatus_7_3.png" /> 0,127 - 0,139<br />\
    <img src="styles/legend/PSkannatus_7_4.png" /> 0,139 - 0,154<br />\
    <img src="styles/legend/PSkannatus_7_5.png" /> 0,154 - 0,173<br />\
    <img src="styles/legend/PSkannatus_7_6.png" /> 0,173 - 0,307<br />' });
var format_KOKkannatus_8 = new ol.format.GeoJSON();
var features_KOKkannatus_8 = format_KOKkannatus_8.readFeatures(json_KOKkannatus_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOKkannatus_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOKkannatus_8.addFeatures(features_KOKkannatus_8);
var lyr_KOKkannatus_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOKkannatus_8, 
                style: style_KOKkannatus_8,
                popuplayertitle: 'KOK kannatus',
                interactive: true,
    title: 'KOK kannatus<br />\
    <img src="styles/legend/KOKkannatus_8_0.png" /> 0 - 0,036<br />\
    <img src="styles/legend/KOKkannatus_8_1.png" /> 0,036 - 0,057<br />\
    <img src="styles/legend/KOKkannatus_8_2.png" /> 0,057 - 0,079<br />\
    <img src="styles/legend/KOKkannatus_8_3.png" /> 0,079 - 0,102<br />\
    <img src="styles/legend/KOKkannatus_8_4.png" /> 0,102 - 0,124<br />\
    <img src="styles/legend/KOKkannatus_8_5.png" /> 0,124 - 0,157<br />\
    <img src="styles/legend/KOKkannatus_8_6.png" /> 0,157 - 0,507<br />' });
var format_KDmuutos_9 = new ol.format.GeoJSON();
var features_KDmuutos_9 = format_KDmuutos_9.readFeatures(json_KDmuutos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KDmuutos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KDmuutos_9.addFeatures(features_KDmuutos_9);
var lyr_KDmuutos_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KDmuutos_9, 
                style: style_KDmuutos_9,
                popuplayertitle: 'KD muutos',
                interactive: true,
    title: 'KD muutos<br />\
    <img src="styles/legend/KDmuutos_9_0.png" />       - 0,5<br />\
    <img src="styles/legend/KDmuutos_9_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/KDmuutos_9_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/KDmuutos_9_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/KDmuutos_9_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/KDmuutos_9_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/KDmuutos_9_6.png" /> 1,5 - <br />' });
var format_RKPmuutos_10 = new ol.format.GeoJSON();
var features_RKPmuutos_10 = format_RKPmuutos_10.readFeatures(json_RKPmuutos_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RKPmuutos_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RKPmuutos_10.addFeatures(features_RKPmuutos_10);
var lyr_RKPmuutos_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RKPmuutos_10, 
                style: style_RKPmuutos_10,
                popuplayertitle: 'RKP muutos',
                interactive: true,
    title: 'RKP muutos<br />\
    <img src="styles/legend/RKPmuutos_10_0.png" />       - 0,5<br />\
    <img src="styles/legend/RKPmuutos_10_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/RKPmuutos_10_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/RKPmuutos_10_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/RKPmuutos_10_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/RKPmuutos_10_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/RKPmuutos_10_6.png" /> 1,5 - <br />' });
var format_VIHRmuutos_11 = new ol.format.GeoJSON();
var features_VIHRmuutos_11 = format_VIHRmuutos_11.readFeatures(json_VIHRmuutos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIHRmuutos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIHRmuutos_11.addFeatures(features_VIHRmuutos_11);
var lyr_VIHRmuutos_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIHRmuutos_11, 
                style: style_VIHRmuutos_11,
                popuplayertitle: 'VIHR muutos',
                interactive: true,
    title: 'VIHR muutos<br />\
    <img src="styles/legend/VIHRmuutos_11_0.png" />       - 0,5<br />\
    <img src="styles/legend/VIHRmuutos_11_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/VIHRmuutos_11_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/VIHRmuutos_11_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/VIHRmuutos_11_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/VIHRmuutos_11_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/VIHRmuutos_11_6.png" /> 1,5 - <br />' });
var format_VASmuutos_12 = new ol.format.GeoJSON();
var features_VASmuutos_12 = format_VASmuutos_12.readFeatures(json_VASmuutos_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VASmuutos_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VASmuutos_12.addFeatures(features_VASmuutos_12);
var lyr_VASmuutos_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VASmuutos_12, 
                style: style_VASmuutos_12,
                popuplayertitle: 'VAS muutos',
                interactive: true,
    title: 'VAS muutos<br />\
    <img src="styles/legend/VASmuutos_12_0.png" />       - 0,5<br />\
    <img src="styles/legend/VASmuutos_12_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/VASmuutos_12_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/VASmuutos_12_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/VASmuutos_12_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/VASmuutos_12_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/VASmuutos_12_6.png" /> 1,5 - <br />' });
var format_KESKmuutos_13 = new ol.format.GeoJSON();
var features_KESKmuutos_13 = format_KESKmuutos_13.readFeatures(json_KESKmuutos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KESKmuutos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KESKmuutos_13.addFeatures(features_KESKmuutos_13);
var lyr_KESKmuutos_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KESKmuutos_13, 
                style: style_KESKmuutos_13,
                popuplayertitle: 'KESK muutos',
                interactive: true,
    title: 'KESK muutos<br />\
    <img src="styles/legend/KESKmuutos_13_0.png" />       - 0,5<br />\
    <img src="styles/legend/KESKmuutos_13_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/KESKmuutos_13_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/KESKmuutos_13_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/KESKmuutos_13_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/KESKmuutos_13_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/KESKmuutos_13_6.png" /> 1,5 - <br />' });
var format_SDPmuutos_14 = new ol.format.GeoJSON();
var features_SDPmuutos_14 = format_SDPmuutos_14.readFeatures(json_SDPmuutos_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDPmuutos_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDPmuutos_14.addFeatures(features_SDPmuutos_14);
var lyr_SDPmuutos_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDPmuutos_14, 
                style: style_SDPmuutos_14,
                popuplayertitle: 'SDP muutos',
                interactive: true,
    title: 'SDP muutos<br />\
    <img src="styles/legend/SDPmuutos_14_0.png" />       - 0,5<br />\
    <img src="styles/legend/SDPmuutos_14_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/SDPmuutos_14_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/SDPmuutos_14_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/SDPmuutos_14_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/SDPmuutos_14_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/SDPmuutos_14_6.png" /> 1,5 - <br />' });
var format_PSmuutos_15 = new ol.format.GeoJSON();
var features_PSmuutos_15 = format_PSmuutos_15.readFeatures(json_PSmuutos_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSmuutos_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSmuutos_15.addFeatures(features_PSmuutos_15);
var lyr_PSmuutos_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PSmuutos_15, 
                style: style_PSmuutos_15,
                popuplayertitle: 'PS muutos',
                interactive: true,
    title: 'PS muutos<br />\
    <img src="styles/legend/PSmuutos_15_0.png" />       - 0,5<br />\
    <img src="styles/legend/PSmuutos_15_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/PSmuutos_15_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/PSmuutos_15_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/PSmuutos_15_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/PSmuutos_15_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/PSmuutos_15_6.png" /> 1,5 - <br />' });
var format_KOKmuutos_16 = new ol.format.GeoJSON();
var features_KOKmuutos_16 = format_KOKmuutos_16.readFeatures(json_KOKmuutos_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOKmuutos_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOKmuutos_16.addFeatures(features_KOKmuutos_16);
var lyr_KOKmuutos_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOKmuutos_16, 
                style: style_KOKmuutos_16,
                popuplayertitle: 'KOK muutos',
                interactive: true,
    title: 'KOK muutos<br />\
    <img src="styles/legend/KOKmuutos_16_0.png" />       - 0,5<br />\
    <img src="styles/legend/KOKmuutos_16_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/KOKmuutos_16_2.png" /> 0,7 - 0,9<br />\
    <img src="styles/legend/KOKmuutos_16_3.png" /> 0,9 - 1,1<br />\
    <img src="styles/legend/KOKmuutos_16_4.png" /> 1,1 - 1,3<br />\
    <img src="styles/legend/KOKmuutos_16_5.png" /> 1,3 - 1,5<br />\
    <img src="styles/legend/KOKmuutos_16_6.png" /> 1,5 - <br />' });
var group_muutos = new ol.layer.Group({
                                layers: [lyr_KDmuutos_9,lyr_RKPmuutos_10,lyr_VIHRmuutos_11,lyr_VASmuutos_12,lyr_KESKmuutos_13,lyr_SDPmuutos_14,lyr_PSmuutos_15,lyr_KOKmuutos_16,],
                                fold: "open",
                                title: 'muutos'});
var group_kannatus = new ol.layer.Group({
                                layers: [lyr_KDkannatus_1,lyr_RKPkannatus_2,lyr_VIHRkannatus_3,lyr_VASkannatus_4,lyr_KESKkannatus_5,lyr_SDPkannatus_6,lyr_PSkannatus_7,lyr_KOKkannatus_8,],
                                fold: "open",
                                title: 'kannatus'});

lyr_OpenStreetMap_0.setVisible(true);lyr_KDkannatus_1.setVisible(true);lyr_RKPkannatus_2.setVisible(true);lyr_VIHRkannatus_3.setVisible(true);lyr_VASkannatus_4.setVisible(true);lyr_KESKkannatus_5.setVisible(true);lyr_SDPkannatus_6.setVisible(true);lyr_PSkannatus_7.setVisible(true);lyr_KOKkannatus_8.setVisible(true);lyr_KDmuutos_9.setVisible(true);lyr_RKPmuutos_10.setVisible(true);lyr_VIHRmuutos_11.setVisible(true);lyr_VASmuutos_12.setVisible(true);lyr_KESKmuutos_13.setVisible(true);lyr_SDPmuutos_14.setVisible(true);lyr_PSmuutos_15.setVisible(true);lyr_KOKmuutos_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_kannatus,group_muutos];
lyr_KDkannatus_1.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', });
lyr_RKPkannatus_2.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', });
lyr_VIHRkannatus_3.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', });
lyr_VASkannatus_4.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', });
lyr_KESKkannatus_5.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', });
lyr_SDPkannatus_6.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', });
lyr_PSkannatus_7.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', });
lyr_KOKkannatus_8.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', });
lyr_KDmuutos_9.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', });
lyr_RKPmuutos_10.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', });
lyr_VIHRmuutos_11.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', });
lyr_VASmuutos_12.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', });
lyr_KESKmuutos_13.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', });
lyr_SDPmuutos_14.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', });
lyr_PSmuutos_15.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', });
lyr_KOKmuutos_16.set('fieldAliases', {'fid': 'fid', 'postinumeroalue': 'postinumeroalue', 'nimi': 'nimi', 'kunta': 'kunta', 'KOK   ': 'KOK   ', 'PS    ': 'PS    ', 'SDP   ': 'SDP   ', 'KESK  ': 'KESK  ', 'VAS   ': 'VAS   ', 'VIHR  ': 'VIHR  ', 'RKP   ': 'RKP   ', 'KD    ': 'KD    ', });
lyr_KDkannatus_1.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', });
lyr_RKPkannatus_2.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', });
lyr_VIHRkannatus_3.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', });
lyr_VASkannatus_4.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', });
lyr_KESKkannatus_5.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', });
lyr_SDPkannatus_6.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', });
lyr_PSkannatus_7.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', });
lyr_KOKkannatus_8.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', });
lyr_KDmuutos_9.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', });
lyr_RKPmuutos_10.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', });
lyr_VIHRmuutos_11.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', });
lyr_VASmuutos_12.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', });
lyr_KESKmuutos_13.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', });
lyr_SDPmuutos_14.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', });
lyr_PSmuutos_15.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', });
lyr_KOKmuutos_16.set('fieldImages', {'fid': 'TextEdit', 'postinumeroalue': 'TextEdit', 'nimi': '', 'kunta': '', 'KOK   ': 'TextEdit', 'PS    ': 'TextEdit', 'SDP   ': 'TextEdit', 'KESK  ': 'TextEdit', 'VAS   ': 'TextEdit', 'VIHR  ': 'TextEdit', 'RKP   ': 'TextEdit', 'KD    ': 'TextEdit', });
lyr_KDkannatus_1.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', });
lyr_RKPkannatus_2.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', });
lyr_VIHRkannatus_3.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', });
lyr_VASkannatus_4.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', });
lyr_KESKkannatus_5.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', });
lyr_SDPkannatus_6.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', });
lyr_PSkannatus_7.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', });
lyr_KOKkannatus_8.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', });
lyr_KDmuutos_9.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', });
lyr_RKPmuutos_10.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', });
lyr_VIHRmuutos_11.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', });
lyr_VASmuutos_12.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', });
lyr_KESKmuutos_13.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', });
lyr_SDPmuutos_14.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', });
lyr_PSmuutos_15.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', });
lyr_KOKmuutos_16.set('fieldLabels', {'fid': 'hidden field', 'postinumeroalue': 'header label - visible with data', 'nimi': 'header label - visible with data', 'kunta': 'header label - visible with data', 'KOK   ': 'header label - visible with data', 'PS    ': 'header label - visible with data', 'SDP   ': 'header label - visible with data', 'KESK  ': 'header label - visible with data', 'VAS   ': 'header label - visible with data', 'VIHR  ': 'header label - visible with data', 'RKP   ': 'header label - visible with data', 'KD    ': 'header label - visible with data', });
lyr_KOKmuutos_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});