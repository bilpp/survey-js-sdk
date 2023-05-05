export function runPopup(SurveyCollectorCode) {
    // fonksiyon kodları burada
    console.log('SurveyCollectorCode', SurveyCollectorCode);


    var backgroundDiv = document.createElement("div");
    backgroundDiv.style.position = "fixed";
    backgroundDiv.style.zIndex = "9998";
    backgroundDiv.style.top = "0";
    backgroundDiv.style.left = "0";
    backgroundDiv.style.width = "100%";
    backgroundDiv.style.height = "100%";
    backgroundDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    backgroundDiv.addEventListener("click", closePopup);
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closePopup();
        }
    });

    var popupDiv = document.createElement("div");
    popupDiv.style.position = "fixed";
    popupDiv.style.zIndex = "9999";
    popupDiv.style.top = "50%";
    popupDiv.style.left = "50%";
    popupDiv.style.transform = "translate(-50%, -50%)";
    popupDiv.style.width = "80%";
    popupDiv.style.maxWidth = "800px";
    popupDiv.style.height = "80%";
    popupDiv.style.maxHeight = "600px";
    popupDiv.style.overflow = "hidden";

    var closeButton = document.createElement("button");
    closeButton.innerText = "X";
    closeButton.style.position = "absolute";
    closeButton.style.top = "0";
    closeButton.style.right = "0";
    closeButton.addEventListener("click", closePopup);

    var iframe = document.createElement("iframe");
    iframe.src = "https://bilpp.com/survey/" + SurveyCollectorCode;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.addEventListener("load", function () {
        var iframeWidth = iframe.contentWindow.document.documentElement.scrollWidth;
        var iframeHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        var windowWidth = window.innerWidth * 0.8;
        var windowHeight = window.innerHeight * 0.8;
        if (iframeWidth > windowWidth) {
            popupDiv.style.width = windowWidth + "px";
        } else {
            popupDiv.style.width = iframeWidth + "px";
        }
        if (iframeHeight > windowHeight) {
            popupDiv.style.height = windowHeight + "px";
        } else {
            popupDiv.style.height = iframeHeight + "px";
        }
        popupDiv.style.transform = "translate(-50%, -50%)";
    });

    popupDiv.appendChild(closeButton);
    popupDiv.appendChild(iframe);
    document.body.appendChild(backgroundDiv);
    document.body.appendChild(popupDiv);

    function closePopup() {
        popupDiv.remove();
        backgroundDiv.remove();
    }
}


export function runEmbed(SurveyCollectorCode) {
    // fonksiyon kodları burada
    console.log('SurveyCollectorCode', SurveyCollectorCode);

    // Get the div element and create an iframe element
    var div = document.getElementById('bilpp-' + SurveyCollectorCode);
    var iframe = document.createElement('iframe');

    // Set the source of the iframe element
    iframe.src = 'https://bilpp.com/survey/' + SurveyCollectorCode;

    // Set the style of the iframe element
    iframe.style.border = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.minWidth = '400px';
    iframe.style.minHeight = '600px';

    // Append the iframe element to the div element
    div.appendChild(iframe);

    // Set the style of the div element
    var divStyle = window.getComputedStyle(div);
    if (divStyle) {
        div.style.backgroundColor = divStyle.backgroundColor;
        div.style.padding = divStyle.padding;
        // set other CSS properties here
    }

    // Set the size of the iframe and div elements based on the screen size
    function setSize() {
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;

        var divWidth = div.offsetWidth;
        var divHeight = div.offsetHeight;

        var iframeWidth = screenWidth < divWidth ? screenWidth : divWidth;
        var iframeHeight = screenHeight < divHeight ? screenHeight : divHeight;

        iframe.style.width = iframeWidth + 'px';
        iframe.style.height = iframeHeight + 'px';

        div.style.width = iframeWidth + 'px';
        div.style.height = iframeHeight + 'px';
    }

    setSize();

    // Call setSize() function on window resize event
    window.addEventListener('resize', setSize);



}

function newFunction() {
    const width = "800px";
    const height = "600px";
    const url = "https://www.bilpp.com";

    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.width = width;
    iframe.height = height;
    iframe.sandbox = "allow-same-origin";
    iframe.style.border = "none";
    iframe.style.boxShadow = "none";

    const container = document.getElementById("bilpp-123");
    container.appendChild(iframe);
}