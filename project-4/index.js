$(document).ready(function() {
    // YOUR CODE HERE!
    $.ajax({
        url:"https://api.myjson.com/bins/2sadq?pretty=1",
        dataType:"json",
        success: function(response){
            $.each(response.apartments,function(i,apartment){

                var apartmentClass = apartment.city.toLowerCase().replace(" ", "-") ;
               var listing =" <a href='#' id=" + apartment.id + " class='list-group-item " + apartmentClass +" listings '><h4 class='list-group-item-heading'> " + apartment.description + " / " + apartment.bedrooms + " BR / " + apartment.price + " </h4><p class='list-group-item-text'> " + apartment.neighborhood + " </p></a> " ;

                $(".apartments").append(listing);
            });
        },
        
        error: function(error){
            console.log(error);
        }

    });

    $(".filter").click(function(){
        $(".filter").removeClass("active");
        $(this).addClass("active");

        $(".listings").show();

        var city = $(this).attr("id") ;
        
        if(city !== 'all'){
            // filtering the elements according to not existing ones
            // this statment means hide all of the element do not match this city
            $(".listings").not("." + city).css("display", "none");
        }
       
    });
    $(document).on('click','.listings', function(){
        var id = $(this).attr("id");

        $.ajax({
            url:"https://api.myjson.com/bins/2sadq?pretty=1",
            dataType:"json",
            success: function(response){
                var selectedApartment = $.grep(response.apartments, function(apartment){
                    return apartment.id == id ;
                });
                var adress = selectedApartment[0].address ;
                window.open("https://maps.google.com/?q="+ adress)
            },
            error: function(error){
                console.log(error);
            }
    
        });
    });
});


