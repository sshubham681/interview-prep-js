const cart = ["shoes","pants", "kurta"];

// first create order ---> then payment --> show Order Summary --> update wallet

api.createOrder(cart, function () {   

    api.proceedToPayment(function (){

        api.showOrderSummary(function (){

            api.updateWallet()

        });

    })

});




// inversion of control -- when we don't have control on code --> here createOrder api may fail, in case others will not get call


// The two problems that we  faced in callbacks are:-

// 1) Callback Hell: Asynchronous operations in JavaScript can be achieved through callbacks. Whenever there are multiple dependent Asynchronous operations it will result in a lot of nested callbacks. This will cause a 'pyramid of doom' like structure.
// 2) Inversion of control: When we give the control of callbacks being called to some other API, this may create a lot of issues. That API may be buggy, written by interns, may not call our callback and create order as in the above example, may call the payment callback twice etc.

// video link - https://www.youtube.com/watch?v=yEKtJGha3yM