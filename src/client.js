var _SurveyDelay = 2000;
var _SurveyCollectorCode = 'v8crZ';

window.onload = function () {
    // JS paketini yükle
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'dist/bundle.min.js';
    document.body.appendChild(script);
    setTimeout(function () {
        bilppSurvey.runEmbed(_SurveyCollectorCode);
        bilppSurvey.runPopup(_SurveyCollectorCode);
    }, _SurveyDelay);
};