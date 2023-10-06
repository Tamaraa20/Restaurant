(() => {
    "use strict";
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    
                    showSuccessPopup();
                    event.preventDefault(); 
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
    function showSuccessPopup() {
        var popup = document.getElementById('success-popup');
        popup.style.display = 'block';        
    }
})();

       
