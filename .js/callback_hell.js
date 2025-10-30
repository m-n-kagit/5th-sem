//just an example of callback_hell
bookHotel(hotelId , function(){ //the main issue in the code is that it is been 
    //expanded horizontally instead of vertically 
    if(console.error){
        handleError;
    }
    else{
        proceedToPayment(hotelId,function(){
            if(error){
                handleError;
            }
            else{
                showBookingToPayment(hotelId,function(){
                    if(error){
                        handleError;
                    }
                    else{
                        showBookingStatus(function(){
                            ///.....
                        })
                    }
                })
            }
        })

    }
})


//One more issue with this is that there is an inversion of control 
showBookingStatus(function(){
    proceedToPayment(function(){
        //....
    })
})