// Language Buttons
document.getElementById('englishBtn').addEventListener('click', function () {
    // Update content for English
    document.getElementById('heroText').innerHTML = 'Welcome to Wurzburg Transport';
    document.getElementById('heroSubText').innerHTML = 'Your reliable partner for local bus and tram services in Wurzburg, Germany.';
    document.getElementById('servicesTitle').innerHTML = 'Our Services';
    document.getElementById('servicesText').innerHTML = 'We offer a wide range of transportation services to meet your needs.';
    document.getElementById('aboutTitle').innerHTML = 'About Us';
    document.getElementById('aboutText').innerHTML = 'Wurzburg Transport has been a trusted name in public transportation in Wurzburg for many years. Our mission is to provide safe and efficient transportation solutions that meet the needs of our community.';
    document.getElementById('contactTitle').innerHTML = 'Contact Us';
});

document.getElementById('germanBtn').addEventListener('click', function () {
    // Update content for Deutsch
    document.getElementById('heroText').innerHTML = 'Willkommen bei Wurzburg Transport';
    document.getElementById('heroSubText').innerHTML = 'Ihr zuverlässiger Partner für lokale Bus- und Straßenbahnverbindungen in Würzburg, Deutschland.';
    document.getElementById('servicesTitle').innerHTML = 'Unsere Dienstleistungen';
    document.getElementById('servicesText').innerHTML = 'Wir bieten eine breite Palette von Transportdienstleistungen an, um Ihre Bedürfnisse zu erfüllen.';
    document.getElementById('aboutTitle').innerHTML = 'Über uns';
    document.getElementById('aboutText').innerHTML = 'Wurzburg Transport ist seit vielen Jahren ein vertrauenswürdiger Name im Bereich öffentlicher Verkehrsmittel in Würzburg. Unsere Mission ist es, sichere und effiziente Transportlösungen anzubieten, die die Bedürfnisse unserer Gemeinschaft erfüllen.';
    document.getElementById('contactTitle').innerHTML = 'Kontakt';
});
