function createNavigation(){
    const   topPanel = "<div id='top-panel'></div>",
            createOrder = `<button id='create-order' onclick='order.create.empty()'><i class="fas fa-folder-plus"></i> Nowe zamówienie</button>`,
            orderDiv = "<div id='order-display'></div>";
    $('#record-view').append([topPanel, orderDiv]);
    $('#top-panel').append(createOrder);
}
