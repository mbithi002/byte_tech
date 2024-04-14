

// Loader animation
window.addEventListener('load', function() {
    var preloader = document.getElementById('pre-loader');
    var content = document.getElementById('body');
    
    // Check if preloader and content elements exist
    if (preloader && content) {
        setTimeout(function () {
            preloader.style.display = 'none';
            content.style.display = 'block';
        }, 1500);
    } else {
        console.error('Preloader or content element not found.');
    }
});

// body fade up animation



// Subscribe button animation
const subscribe = document.getElementById('subscribe');
const subText = document.getElementById('sub-text');
subscribe.addEventListener('click', () => {
    if (subscribe.innerText === 'SUBSCRIBE') {
        subscribe.innerText = 'SUBSCRIBED';
        subscribe.style.border = 'none';
        subscribe.style.backgroundColor = 'blue';
        subText.innerText = 'Thank you For Subscribing! ';
        subText.style.color = 'white';
    } else if (subscribe.innerText === 'SUBSCRIBED') {
        subscribe.innerText = 'SUBSCRIBE';
        subscribe.style.border = 'none';
        subscribe.style.backgroundColor = 'red';
        subscribe.style.color = 'white';
        subText.innerText = 'Subcribe for new Content!Allow Notifications for all our latest updates!';
        subText.style.color = 'white';
    } else {
        alert('error!');
    }
});


// go back action

var goBack = document.getElementById('go-back');

goBack.addEventListener('click' , () => {
  window.history.back();
} );