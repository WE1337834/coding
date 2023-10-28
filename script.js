cookie_score = $.cookie('cart');
cookies_login = $.cookie('inp_l');
cookies_pass = $.cookie('inp_p');

let score = cookie_score;
let login_user = cookies_login;
let pass_user = cookies_pass;

// const item = ['Pandora box', 'Dopple Rudy', 'Gungnir', 'Gold Arabesque',
//             'Howl', 'Gamma Dopple', 'Dopple Sapphire', 'Red line',
//             'Dopple Ruby', "Crimson Web", 'iBUYPOWER', 'Dopple Sapphire'
// ]
if(score == 1){
    score = 0
}
function buy(a){
    score++;
    document.getElementById('cart').innerHTML = 'Basket: ' + score;
    document.cookie = 'cart = ' + score;
}


function login(){
    $('.block_reg').fadeToggle()
    $('.block_reg').css('display', 'block')
}

function auth(){
    let lgn = $('.inp_l').val();
    login_user = lgn
    let pass = $('.inp_p').val();
    pass_user = pass
    if(login_user != '' && login_user != 'admin123' && lgn.length <= 8 && lgn.length > 0){
        
        document.cookie = 'login_user = ' + login_user
        document.cookie = 'pass_user = ' + pass_user
        $('.block_reg').fadeOut()
        document.getElementsByClassName('but_prl_area')[0].innerHTML = `<p class="userName">${lgn}</p>`
    } if(login_user != '' && login_user == 'admin123' && lgn.length <= 8 && lgn.length > 0){
        document.cookie = 'login_user = ' + login_user
        document.cookie = 'pass_user = ' + pass_user
        $('.block_reg').fadeOut()
        document.getElementsByClassName('but_prl_area')[0].innerHTML = `<p class="userName admin">${lgn}</p>`
    }if(lgn.length > 8 || lgn.length <= 0){
        alert('login should not exceed 8 characters')
    }
    // if(login_user != null){
    //     if(lgn == login_user){
    //         alert('succses')
    //         document.cookie = 'login_user = ' + login_user
    //         document.cookie = 'pass_user = ' + pass_user
    //         $('.block_reg').fadeOut()
    //         document.getElementById('log').remove;
    //         document.getElementsByClassName('but_prl_area')[0].innerHTML = `<p class="userName">${lgn}</p>`
            
    //         if(lgn == 'admin123'){
    //             document.getElementsByClassName('but_prl_area')[0].innerHTML = `<p class="userName admin">${lgn}</p>`
    //         }
    //     }if(lgn != login_user){
    //         alert('asdfasdf')
    //     }
    // }

    if(login_user == null){
        if(lgn.length > 8 || lgn.length <= 0){
            alert('login should not exceed 8 characters')
        }
    
        if(lgn.length <= 8 && lgn.length > 0){
            
            document.cookie = 'login_user = ' + login_user
            document.cookie = 'pass_user = ' + pass_user
            $('.block_reg').fadeOut()
            document.getElementById('log').remove;
            document.getElementsByClassName('but_prl_area')[0].innerHTML = `<p class="userName">${lgn}</p>`
            
            if(lgn == 'admin123'){
                document.getElementsByClassName('but_prl_area')[0].innerHTML = `<p class="userName admin">${lgn}</p>`
            }
        }
    }
   
}

function order(){
    $('.order_block').fadeToggle()
    $('.order_block').css('display', 'block')
}
function od(){
    
    let order = document.getElementsByClassName('inp_order')[0].value;
    

    if(order.length <= 15 || order.length >= 17){
        alert('you need to enter 16 characters')
    }
    
    

    if(score <= 0 && order.length == 16){
        alert('Choose a skin')
    }
    if(order.length == 16 && score >= 1){
        $('.order_block').fadeOut()
        $('.order_block').css('display', 'block')
        alert('Thank you for your purchase! :)')
        score = 0;
        document.getElementById('cart').innerHTML = 'Basket: ' + score;
    }
    
}
// function balance{

// }