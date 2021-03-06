$(document).ready(function() {
    // if(document.URL.indexOf("users/edit") > -1){
    //     select_wrapper = $('#order_state_code_wrapper');
    //     $('select', select_wrapper).attr('disabled', true);
    //     url = "/user/registrations/subregion_options?parent_region=US";
    //     select_wrapper.load(url);
    // }

    if($('#em').length > 0){
        $('select#user_country').val('US');
        select_wrapper = $('#order_state_code_wrapper');
        $('select', select_wrapper).attr('disabled', true);
        country_code = $(this).val();
        url = "/user/registrations/subregion_options?parent_region=US";
        select_wrapper.load(url);
    }
    $('#new_user').bootstrapValidator({
        framework: 'bootstrap',
        fields: {
            'user[first_name]': {
                validators: {
                    notEmpty: {
                        message: 'First Name is required'
                    },
                    stringLength: {
                        message: 'First Name must be less than 50 characters',
                        max: 50
                    }
                }
            },
            'user[last_name]': {
                validators: {
                    notEmpty: {
                        message: 'Last Name is required'
                    },
                    stringLength: {
                        message: 'Last Name must be less than 50 characters',
                        max: 50
                    }
                }
            },
            'user[email]': {
                validators: {
                    notEmpty: {
                        message: 'Email is required'
                    },
                    regexp: {
                        regexp: '^[^\.][^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                        message: 'This is not a valid email address'
                    }
                }
            },
            'user[password]': {
                validators: {
                    notEmpty: {
                        message: 'Password is required'
                    },
                    stringLength: {
                        message: 'Password must be greater than 8 characters',
                        min: 8
                    }
                }
            },
            'user[password_confirmation]': {
                validators: {
                    notEmpty: {
                        message: 'Confirm Password is required'
                    },
                    identical: {
                        field: 'user[password]',
                        message: 'Password and Confirm Password does not match'
                    }
                }
            },
            'user[phone]': {
                validators: {
                    stringLength: {
                        message: 'Phone Number should be less than 15 characters',
                        max: 15
                    },
                    phone: {
                        country: 'US',
                        message: 'The value is not valid %s phone number'
                    }
                }
            },
            'user[zip]': {
                validators: {
                    stringLength: {
                        message: 'Zip Code should be 7 characters long',
                        max: 7
                    }
                }
            }
        }
    });
    $('#edit_user').bootstrapValidator({
        framework: 'bootstrap',
        fields: {
            'user[email]': {
                validators: {
                    notEmpty: {
                        message: 'Email is required'
                    },
                    regexp: {
                        regexp: '^[^\.][^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                        message: 'This is not a valid email address'
                    }
                }
            },
            'user[first_name]': {
                validators: {
                    notEmpty: {
                        message: 'First Name is required'
                    },
                    stringLength: {
                        message: 'First Name must be less than 50 characters',
                        max: 50
                    }
                }
            },
            'user[last_name]': {
                validators: {
                    notEmpty: {
                        message: 'Last Name is required'
                    },
                    stringLength: {
                        message: 'Last Name must be less than 50 characters',
                        max: 50
                    }
                }
            },
            'user[address1]': {
                validators: {
                    stringLength: {
                        message: 'Address Line 1 should be less than 50 characters',
                        max: 50
                    }
                }
            },
            'user[address2]': {
                validators: {
                    stringLength: {
                        message: 'Address Line 2 should be less than 50 characters',
                        max: 50
                    }
                }
            },
            'user[address3]': {
                validators: {
                    stringLength: {
                        message: 'Address Line 3 should be less than 50 characters',
                        max: 50
                    }
                }
            },
            'user[country]': {
                validators: {
                    notEmpty: {
                        message: 'Country Name is required'
                    },
                }
            },
            'user[city]': {
                validators: {
                    stringLength: {
                        message: 'City should be less than 20 characters',
                        max: 20
                    }
                }
            },
            'user[phone]': {
                validators: {
                    stringLength: {
                        message: 'Phone Number should be less than 15 characters',
                        max: 15
                    },
                    phone: {
                        country: 'US',
                        message: 'The value is not valid %s phone number'
                    }
                }
            },
            'user[zip]': {
                validators: {
                    stringLength: {
                        message: 'Zip Code should be 7 characters long',
                        max: 7
                    }
                }
            }
        }
    });
});