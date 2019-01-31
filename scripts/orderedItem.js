// create item

function createItem(parentID){
    var parentSelector = "#"+parentID+".order .item-container";
    $.ajax({
        	method: 'post',
        	url: '/ordered-item/new',
        	data: JSON.stringify({orderID: parentID}),
        	contentType: "application/json",
        	success: function(orderedItem){
    			createItemDiv(orderedItem._id, parentSelector);
            }
                
        });
}

function createItemDiv(item_id, parentSelector){
    var div = `<div id=${item_id} class='item'></div>`;     
    
    $(parentSelector).append(div);  
    insertInputsInto($(`#${item_id}`));
    
}

function insertInputsInto(div){
    var nameInput = '<input type="text" class="name" list="tees">';
    var codeInput = '<input type="text" class="registerCode" readonly>';
    var priceInput = '<input class="price" type="number" readonly>';
    var quantityInput = '<input class="quantity" type="number" name="quantity" min="0" value="1">';
    var typeInput = '<select class="type">\
                <option value="sztuka">sztuka</option>\
                <option value="czajnik">czajnik</option>\
                <option value="gaiwan">gaiwan</option>\
                <option value="opakowanie">opakowanie</option>\
                <option value="gram">gram</option>\
                </select>';
    var hintInput = '<input class="hint" type="text>';
    var discountedPriceInput = '<input class="discounted-price" type="number" readonly>';
    var inputElements = [
            codeInput,
            nameInput,
            typeInput,
            quantityInput,
            priceInput,
            hintInput,
            discountedPriceInput,
        ];
        
    div.append(inputElements);
    
}

        



// editing scripts
 

function updateItemName(){
    var itemID = $(this).parent()[0].id;
    var orderID = $(this).parent().parent().parent()[0].id;
    var name = $(this).val()
    sendDataToUpdate('/ordered-item/update-name', {item_id: itemID, name: name, order_id: orderID}, callback);
    
    function callback(data){
      if(data){
        $(`#${itemID}.item .price`).val(data.price);
        $(`#${itemID}.item .discounted-price`).val(data.discountedPrice);
        $(`#${itemID}.item .registercode`).val(data.registerCode);
        if(data.name != name){
          $(`#${itemID}.item .name`).val(data.name);
        }
        updateSumOfPrices(orderID);
        updateSumOfDiscountedPrices(orderID)
  
      } else {
        $(`#${itemID}.item .name`).val("");
      }
      
    }
}

function updateItemType(){
  var itemID = $(this).parent()[0].id;
  var orderID = $(this).parent().parent().parent()[0].id;

    sendDataToUpdate('/ordered-item/update-type', {item_id: itemID, type: $(this).val(), order_id: orderID}, callback);
    
    function callback(data){
      $(`#${itemID}.item .price`).val(data.price);
      $(`#${itemID}.item .discounted-price`).val(data.discountedPrice);

      updateSumOfPrices(orderID);
      updateSumOfDiscountedPrices(orderID)
    
    }
}

function updateItemQuantity(){
  var itemID = $(this).parent()[0].id;
  var orderID = $(this).parent().parent().parent()[0].id;

    sendDataToUpdate('/ordered-item/update-quantity', {item_id: itemID, quantity: $(this).val(), order_id: orderID}, callback);
    
    function callback(data){
        $(`#${itemID}.item .price`).val(data.price);
        $(`#${itemID}.item .discounted-price`).val(data.discountedPrice);

        updateSumOfPrices(orderID);
        updateSumOfDiscountedPrices(orderID)
    }
}

