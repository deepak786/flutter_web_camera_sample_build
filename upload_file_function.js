async function upload(data) {
    try {
        var bytes = data[0];
        var url = data[1];
        var headers = data[2];

        const response = await fetch(url, {
            method: 'PUT',
            headers: headers,
            body: bytes,
        });

        const resHeaders = new Map();
        response.headers.forEach(function(value, name) {
            resHeaders[name] = value;
        });

        var body = await response.text();

        return {
            statusCode: response.status,
            body: body,
            headers: JSON.stringify(resHeaders),
        };
    } catch (error) {
        return { err: error };
    }
}