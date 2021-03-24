$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Please fill in your name",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "Please fill in the subject?",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 5 digit",
                    maxlength: "your Number must consist of at most 10 digit"
                },
                email: {
                    required: "Please type in your email"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really? Please add more information"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    //url:"contact_process",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })

    $(function() {
        $('#priceForm').validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 2
                },
                lastname: {
                    required: true,
                    minlength: 2
                },
                address: {
                    required: true,
                    minlength: 6
                },
                interval: {
                    required: true,
                },
                number: {
                    required: true,
                    minlength: 5,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                firstname: {
                    required: "Please fill in your first name",
                    minlength: "your first name must consist of at least 2 characters"
                },
                lastname: {
                    required: "Please fill in your last name",
                    minlength: "your last name must consist of at least 2 characters"
                },
                 interval: {
                    required:  "Please select provided options"
                },
                address: {
                    required: "Please fill in your address",
                    minlength: "your address looks too short"
                },
                number: {
                    required: "Please add your phone number",
                    minlength: "your Number must consist of at least 5 digit",
                    maxlength: "your Number must consist of at most 10 digit"
                },
                email: {
                    required: "Please type in your email"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "that's all? really? Please add more information"
                }
            },
        })
    })
        
 })(jQuery)
})