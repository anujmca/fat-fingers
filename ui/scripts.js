function submitForm() {
    const instrumentCode = document.getElementById('instrumentCode').value;
    const date = document.getElementById('date').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "your_ajax_service_url", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('warning').innerText = response.message;
            document.getElementById('warning').style.display = 'block';
        }
    };

    const data = {
        instrumentCode: instrumentCode,
        date: date,
        price: price,
        quantity: quantity
    };

    xhr.send(JSON.stringify(data));
}
