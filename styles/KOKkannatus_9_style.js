var size = 0;
var placement = 'point';

var style_KOKkannatus_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("KOK   ");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 0.036000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.22799999999999998}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.036000 && value <= 0.057000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.22799999999999998}),fill: new ol.style.Fill({color: 'rgba(255,213,213,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.057000 && value <= 0.079000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.22799999999999998}),fill: new ol.style.Fill({color: 'rgba(255,170,170,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.079000 && value <= 0.102000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.22799999999999998}),fill: new ol.style.Fill({color: 'rgba(255,128,128,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.102000 && value <= 0.124000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.22799999999999998}),fill: new ol.style.Fill({color: 'rgba(255,85,85,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.124000 && value <= 0.157000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.22799999999999998}),fill: new ol.style.Fill({color: 'rgba(255,42,42,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.157000 && value <= 0.507000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.22799999999999998}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
