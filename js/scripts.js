(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';


		// DOM ready, take it away
        $('.opacity-test').on('click', function(e){
            e.preventDefault();
            if($('.full-circle').data('section', 'hospital')){
                $('.full-circle').parent().toggleClass('active')
            }
        });

        //Test of fadeOut full-circle element and fade in mini-circle
        $('.opacity-test-mini').on('click', function(e){
            e.preventDefault();
            if($('.full-circle').data('section', 'hospital')){
                $('.full-circle').parent().toggleClass('active');
                $('.mini-circle').toggleClass('active');
            }
        });

        //TURNS DEBUG
        predicataWheel.app();
        //Turn circle from Risk to Hospital - Turn left
        $('.from-risk-to-hospital').on('click', function(){
            //first lets remove all classes from #circles-wrapper
            $('#circles-wrapper').removeClass();
            $('#circles-wrapper').addClass('from-risk-to-hospital-turn');

        });
        //NEW
        $('.hospital-supply .mini-circle').on('click', function(e){
                //predicataWheel.turnHospitalToTop();
        });





        //Turn circle from Risk to Customer - Turn right
        $('.from-risk-to-customer').on('click', function(){
            //first lets remove all classes from #circles-wrapper
            $('#circles-wrapper').removeClass();
            $('#circles-wrapper').addClass('from-risk-to-customer-turn');
        });
        //NEW
        $('.customer-care .mini-circle').on('click', function(){
            //predicataWheel.turnFromRiskToCustomer();
            //predicataWheel.turnCustomerToTop();
        });


        //Turn circle from Hospital to Customer
        $('.from-hospital-to-customer').on('click', function(){
            $('#circles-wrapper').removeClass();
            $('#circles-wrapper').addClass('from-hospital-to-customer-turn');
        });
        //NEW
        $('.customer-care .mini-circle').on('click', function(){
            //predicataWheel.turnFromHospitalToCustomer();
        });


        //Turn circle from Hospital to Risk
        $('.from-hospital-to-risk').on('click', function(){
            $('#circles-wrapper').removeClass();
            $('#circles-wrapper').addClass('from-hospital-to-risk-turn');
        });
        //NEW
        $('.risk-management .mini-circle').on('click', function(){

            //predicataWheel.turnRiskToTop();
        });

        //Turn circle from Customer to Risk
        $('.from-customer-to-risk').on('click', function(){
            $('#circles-wrapper').removeClass();
            $('#circles-wrapper').addClass('from-customer-to-risk-turn');
        });

        $('.from-customer-to-hospital').on('click', function(){
            $('#circles-wrapper').removeClass();
            $('#circles-wrapper').addClass('from-customer-to-hospital-turn');
        });







//		$('.big-circle-with-children').on('click', function(e){
//			e.preventDefault();
//
//		});
//		$('.customer-service-wrapper').on('click', function(e){
//            if(!$('body').hasClass('customer-care')){
//                e.preventDefault();
//                predicataWheel.customerService();
//            }
//		});
//        $('.risk-management-wrapper').on('click', function(e){
//            if(!$('body').hasClass('risk-management')){
//                e.preventDefault();
//                predicataWheel.riskManagement();
//            }
//        });
//        $('.hospital-supply-chain-top-wrapper').on('click', function(e){
//            if(!$('body').hasClass('hospital-supply-chain')){
//                e.preventDefault();
//                predicataWheel.hospitalSupplyChain();
//            }
//        });




    });
	
})(jQuery, this);