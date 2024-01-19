function submitForm() {

    // Create the SOAP request
    var soapRequest = <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:rat="http://ws.estesexpress.com/ratequote" xmlns:rat1="http://ws.estesexpress.com/schema/2019/01/ratequote">
    <soapenv:Header>
        <rat:auth>
            <rat:user>test</rat:user>
            <rat:password>test</rat:password>
        </rat:auth>
    </soapenv:Header>
    <soapenv:Body>
        <rat1:rateRequest>
            <rat1:requestID>test</rat1:requestID>
            <rat1:account>9999999</rat1:account>
            <rat1:originPoint>
                <rat1:countryCode>US</rat1:countryCode>
                <rat1:postalCode>23229</rat1:postalCode>
                <rat1:city>henrico</rat1:city>
                <rat1:stateProvince>va</rat1:stateProvince>
            </rat1:originPoint>
            <rat1:destinationPoint>
                <rat1:countryCode>US</rat1:countryCode>
                <rat1:postalCode>94610</rat1:postalCode>
                <rat1:city>oakland</rat1:city>
                <rat1:stateProvince>ca</rat1:stateProvince>
            </rat1:destinationPoint>
            <rat1:payor>S</rat1:payor>
            <rat1:terms>PPD</rat1:terms>
            <rat1:pickup>
                <rat1:date>2019-01-30</rat1:date>
            </rat1:pickup>
            <rat1:declaredValue>1500.00</rat1:declaredValue>
            <rat1:declaredValueWaived>N</rat1:declaredValueWaived>
            <rat1:stackable>N</rat1:stackable>
            <rat1:linearFeet>5</rat1:linearFeet>
            <rat1:foodWarehouse>Publix</rat1:foodWarehouse>
            <rat1:baseCommodities>
                <rat1:commodity>
                <rat1:class>50</rat1:class>
                <rat1:weight>1000</rat1:weight>
                </rat1:commodity>
            </rat1:baseCommodities>
        </rat1:rateRequest>
    </soapenv:Body>
    </soapenv:Envelope>;

    // Create the XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Set up the HTTP request
    xhr.open('POST', 'http://ws.estesexpress.com/your-soap-endpoint', true);
    xhr.setRequestHeader('Content-Type', 'text/xml');
    xhr.setRequestHeader('SOAPAction', 'http://ws.estesexpress.com/ratequote'); // Replace with the actual SOAPAction header

    // Send the request
    xhr.send(soapRequest);

    // Define a callback function to handle the response
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Handle the SOAP response
            console.log(xhr.responseText);
        }
    };
}