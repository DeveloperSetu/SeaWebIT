
// Select.....................
           var from = document.querySelector("#from");
           var userNane = document.querySelector("#userNane");
           var email = document.querySelector("#email");
           var password1 = document.querySelector("#password1");
           var password2 = document.querySelector("#password2");
           var btn = document.querySelector("#btn");

// Event listener................

        //    btn.addEventListener('submit', (e)=>{
        //    e.preventDefault();
        //    if (userNane.value === '') {
        //        showError(userNane, 'user name is required')
        //    }

        //    else{
        //        showSuccess(userNane);
        //    }
        //    })
        // menu
        $('#nav-icon').click(()=>{
                  $('nav').toggle(1000);
        });
      