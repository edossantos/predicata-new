var predicataWheel = (function($){
    var contentData = {
        "cost": [
            {
                "name": "Cost Main",
                "content": "Cost saving copy goes here. Best to keep it under ten words.",
                "link": "http://google.com",
                "btn": "Learn more"
            }
        ],

        "quality": [
            {
                "name": "Quality Main",
                "content": "Quality and risk copy goes here. Best to keep it under ten words.",
                "link": "http://chainMain.com",
                "btn": "Learn more"
            }
        ],
        "customer": [
            {
                "name": "customer care main",
                "content": "Customer support copy goes here. Best to keep it under ten words.",
                "link": "http://customermain.com",
                "btn": "Learn More"
            }
        ]
    };
	var internal = {
        hospitalTurns: function (){
            setTimeout(function() {
                if($('div.hospital-supply').attr('data-turn') == 'from-risk-to-hospital-turn'){

                    //internal.setTurnsClassToElements(customer-care-new-class, risk-management-new-class, hospital-supply-new-class)
                    internal.setTurnsClassToElements("from-hospital-to-customer-turn", "from-hospital-to-risk-turn", "");
                    //Remove all classes from circle-wrapper before adding new class
                    internal.removeAllClassesFromCircleWrapper();
                    //Add new class to circle-wrapper so it can turn
                    $('#circles-wrapper').addClass('from-risk-to-hospital-turn loaded');


                }else if($('div.hospital-supply').attr('data-turn') == 'from-customer-to-hospital-turn'){

                    //internal.setTurnsClassToElements(customer-care-new-class, risk-management-new-class, hospital-supply-new-class)
                    internal.setTurnsClassToElements("from-hospital-to-customer-turn", "from-customer-to-risk-turn", "");
                    //Remove all classes from circle before adding new class
                    internal.removeAllClassesFromCircleWrapper();
                    //Add new class to circle-wrapper so it can turn
                    $('#circles-wrapper').addClass('from-customer-to-hospital-turn loaded');

                }
            }, 200);
            //Change content when Rotate to Hospital
            content.changeContentToHospitalMain();

        },
        customerTurns: function(){
            setTimeout(function() {
                if($('div.customer-care').attr('data-turn') == 'from-hospital-to-customer-turn'){

                    //internal.setTurnsClassToElements(customer-care-new-class, risk-management-new-class, hospital-supply-new-class)
                    internal.setTurnsClassToElements("", "from-customer-to-risk-turn", "from-customer-to-hospital-turn");

                    //remove active class from last active circle
                    internal.removeAllClassesFromCircleWrapper();
                    //Add new class to circle-wrapper so it can turn

                    $('#circles-wrapper').addClass('from-hospital-to-customer-turn loaded');


                    }else if($('div.customer-care').attr('data-turn') == 'from-risk-to-customer-turn'){

                        //internal.setTurnsClassToElements(customer-care-new-class, risk-management-new-class, hospital-supply-new-class)
                        internal.setTurnsClassToElements("", "from-customer-to-risk-turn", "from-customer-to-hospital-turn");

                        //Remove all classes from circle before adding new class
                        internal.removeAllClassesFromCircleWrapper();
                        //Add new class to circle-wrapper so it can turn

                        $('#circles-wrapper').addClass('from-risk-to-customer-turn loaded');

                }
                }, 200);
            //Change content when Rotate to Customer
            content.changeContentToCustomerMain();

        },
        riskTurns: function(){
            setTimeout(function() {
                if($('div.risk-management').attr('data-turn') == 'from-hospital-to-risk-turn'){

                    //internal.setTurnsClassToElements(customer-care-new-class, risk-management-new-class, hospital-supply-new-class)
                    internal.setTurnsClassToElements("from-risk-to-customer-turn", "", "from-risk-to-hospital-turn");

                    //Remove all classes from circle before adding new class
                    internal.removeAllClassesFromCircleWrapper();
                    //Add new class to circle-wrapper so it can turn
                    $('#circles-wrapper').addClass('from-hospital-to-risk-turn loaded');


                }else if($('div.risk-management').attr('data-turn') == 'from-customer-to-risk-turn'){

                    //internal.setTurnsClassToElements(customer-care-new-class, risk-management-new-class, hospital-supply-new-class)
                    internal.setTurnsClassToElements("from-risk-to-customer-turn", "", "from-risk-to-hospital-turn");
                    //Remove all classes from circle before adding new class
                    internal.removeAllClassesFromCircleWrapper();
                    //Add new class to circle-wrapper so it can turn
                    $('#circles-wrapper').addClass('from-customer-to-risk-turn loaded');

                }
            }, 200);
            //Change content when Rotate to Risk
            content.changeContentToRiskMain();

        },

        removeAllClassesFromCircleWrapper: function(){
            $('#circles-wrapper').removeClass();
        },
        setTurnsClassToElements: function(classes){

            //now lets set classes to mini circle after turn if hospital turned from risk
            $('div.customer-care').attr('data-turn', arguments[0]);
            $('div.risk-management').attr('data-turn', arguments[1]);
            //set data-turn to '' since hospital-supply is active now
            $('div.hospital-supply').attr('data-turn', arguments[2]);
        }
	};
    var ringsAndCircleLoad = {
      loadRingsOnPageLoad: function(){
        $('.rings').addClass('loaded');
      },
      loadCircleOnPageLoad: function(){
          setTimeout(function() {
            $('#circles-wrapper').addClass('loaded');
          }, 400);
      }

    };
    var content = {

        startFirstContent: function(){
            content.changeTransition(contentData.cost[0]);
        },
        //Quality Content
        changeContentToHospitalMain: function(){
            content.changeTransition(contentData.quality[0]);
        },
        //Customer Content
        changeContentToCustomerMain: function(){
            content.changeTransition(contentData.customer[0]);
        },
        //Cost Content
        changeContentToRiskMain: function(){
            content.changeTransition(contentData.cost[0]);
        },
        //Transition Function to change content
        changeTransition: function(content){
            var arg = arguments;
            var spinContent = $('.spinner-content');
            $(spinContent).removeClass('active').queue(function() {
                setTimeout(function() {
                    spinContent.find('span.content-msg').text(arg[0].content);
                    spinContent.find('div.learn-more > a').attr('href', arg[0].link).text(arg[0].btn);
                    spinContent.addClass('active');
                }, 900);
                $(spinContent).dequeue();
            });
        }
    };

	var events = {
      turnHospitalToTop: function(){
          $('div.hospital-supply > .mini-circle').on('click', function(){
              if($('div.hospital-supply').data('turn') != ''){
                  internal.hospitalTurns();

              }

          });
      },
      turnCustomerToTop: function(){
         $('div.customer-care > .mini-circle').on('click', function(){

            if($('div.customer-care').data('turn') != '') {
                internal.customerTurns();
            }

         });
      },
      turnRiskToTop: function(){
          $('div.risk-management > .mini-circle').on('click', function(){
              if($('div.risk-management').data('turn') != '') {
                  internal.riskTurns();
              }
          });
      },
      showRiskContents: function(){
        $('div.risk-management a.full-circle.risk').on('click', function(e){
            e.preventDefault()

        });
      },
      showHospitalContents: function(){
        $('div.hospital-supply a.full-circle.hospital').on('click', function(e){
            e.preventDefault();
        });
      },
      showCustomerContents: function(){
          $('div.customer-care a.full-circle.customer').on('click', function(e){
              e.preventDefault();
          });
      }
    };
    var self = {
        app: function(){
            events.turnHospitalToTop();
            events.turnCustomerToTop();
            events.turnRiskToTop();
            //change content when circle on top are clicked
            events.showRiskContents();
            events.showHospitalContents();
            events.showCustomerContents();
            //Load rings on page load
            ringsAndCircleLoad.loadRingsOnPageLoad();
            //Load Circles on page load
            ringsAndCircleLoad.loadCircleOnPageLoad();
            //make first content animation on
            content.startFirstContent();
        }
	};
	return self;
})(jQuery);