
document.addEventListener('DOMContentLoaded', function () {
    // Function to navigate to pay.html for subscribe-btn
    const subscribeButton = document.querySelector('.subscribe-btn');
    if (subscribeButton) {
        subscribeButton.addEventListener('click', function () {
            window.location.href = './pay.html';
        });
    }

    // Function to navigate to index.html for go-back button
    const goBackButton = document.querySelector('.go-back');
    if (goBackButton) {
        goBackButton.addEventListener('click', function () {
            window.location.href = './index.html';
        });
    }





    const cashButton = document.querySelector('.cashapp');

    if (cashButton) {
        cashButton.addEventListener('click', function () {
            const img = document.querySelector('.page1 .page-image1');
            const page1Div = document.querySelector('.page1');
            const page0Div = document.querySelector('.cashapp img');
            const tagText = document.querySelector('.tag-text-copy p');
            const tagCopyDiv = document.querySelector('.tag-text-copy');
            const copyButton = document.querySelector('.tag-text-copy .copy-btn');

            if (img && page1Div && page0Div && tagText && tagCopyDiv && copyButton) {
                img.src = './img/cash-tag.jpg';
                img.style.display = 'block';

                page1Div.style.display = 'flex';
                page1Div.style.borderColor = 'rgb(24, 255, 139)';
                page1Div.style.borderStyle = 'solid';
                page0Div.style.borderBottom = '6px solid rgb(24, 255, 139)';

                // cashButton.classList.add('active');
                // cashButton.addEventListener('click', function () {
                //     cashButton.classList.remove('active');
                // });

                tagText.textContent = '$SampleTag';
                tagText.style.display = 'block';
                tagCopyDiv.style.display = 'flex'; // Display the tag-text-copy div
                copyButton.style.display = 'block'; // Display the copy button inside tag-text-copy
            }
        });
    }

    const venmoButton = document.querySelector('.venmo');

    if (venmoButton) {
        venmoButton.addEventListener('click', function () {
            const img = document.querySelector('.page1 .page-image1');
            const page1Div = document.querySelector('.page1');
            const page0Div = document.querySelector('.venmo img');
            const tagText1 = document.querySelector('.tag-text-copy1 p');
            const tagCopyDiv1 = document.querySelector('.tag-text-copy1');
            const copyButton1 = document.querySelector('.tag-text-copy1 .copy-btn1');

            if (img && page1Div && page0Div && tagCopyDiv1 && tagText1 && copyButton1) {
                img.src = './img/venmo-tag.png';
                img.style.display = 'block';

                page1Div.style.display = 'flex';
                page1Div.style.borderColor = 'white';
                page1Div.style.borderStyle = 'solid';
                page0Div.style.borderBottom = '6px solid #fff';
                tagText1.textContent = 'useremail@email.com';
                tagText1.style.display = 'block';
                tagCopyDiv1.style.display = 'flex'; // Display the tag-text-copy div
                copyButton1.style.display = 'block'; // Display the copy button inside tag-text-copy
            }


        });
    }

    const paypalButton = document.querySelector('.paypal');

    if (paypalButton) {
        paypalButton.addEventListener('click', function () {
            const img = document.querySelector('.page1 .page-image1');
            const page1Div = document.querySelector('.page1');
            const paypalImg = document.querySelector('.paypal img');
            const tagText2 = document.querySelector('.tag-text-copy2 p');
            const tagCopyDiv2 = document.querySelector('.tag-text-copy2');
            const copyButton2 = document.querySelector('.tag-text-copy2 .copy-btn2');

            if (img && page1Div && paypalImg && tagText2 && tagCopyDiv2 && copyButton2) {
                img.src = './img/paypal-tag.png';
                img.style.display = 'block';

                page1Div.style.display = 'flex';
                page1Div.style.borderColor = '#009CDE';
                page1Div.style.borderStyle = 'solid';
                paypalImg.style.borderBottom = '6px solid #009CDE';
                tagText2.textContent = 'useremail@paypal.com';
                tagText2.style.display = 'block';
                tagCopyDiv2.style.display = 'flex'; // Display the tag-text-copy div
                copyButton2.style.display = 'block'; // Display the copy button inside tag-text-copy
            }
        });
    }

});


// Select all copy buttons
const copyButtons = document.querySelectorAll('.copy-btn');

// Loop through each copy button
copyButtons.forEach(function (copyButton) {
    // Add click event listener to each copy button
    copyButton.addEventListener('click', function () {
        // Select the <p> tag that is in the same parent div as the clicked copy button
        const textToCopy = this.parentElement.querySelector('p');

        if (textToCopy) {
            // Create a textarea element to hold the text temporarily
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy.textContent;
            textarea.setAttribute('readonly', ''); // Make it readonly to be able to copy content
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px'; // Move outside the screen to avoid visual disruption
            document.body.appendChild(textarea);

            // Copy the text from textarea
            textarea.select();
            document.execCommand('copy');

            // Clean up - remove the textarea
            document.body.removeChild(textarea);

            // Optionally, provide visual feedback or alert
            alert('CashTag copied!');
        }
    });
});


// Select all elements with class 'copy-btn1'
const copyButtons1 = document.querySelectorAll('.copy-btn1');

// Loop through each copy-btn1 button
copyButtons1.forEach(function (copyButton) {
    // Add click event listener to each copy-btn1 button
    copyButton.addEventListener('click', function () {
        // Select the <p> tag that is in the same parent div as the clicked copy-btn1 button
        const textToCopy = this.parentElement.querySelector('p');

        if (textToCopy) {
            // Create a textarea element to hold the text temporarily
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy.textContent;
            textarea.setAttribute('readonly', ''); // Make it readonly to be able to copy content
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px'; // Move outside the screen to avoid visual disruption
            document.body.appendChild(textarea);

            // Copy the text from textarea
            textarea.select();
            document.execCommand('copy');

            // Clean up - remove the textarea
            document.body.removeChild(textarea);

            // Optionally, provide visual feedback or alert
            alert('venmo email copied!');
        }
    });
});


// Function to handle copying text for copy-btn2
function setupCopyButton2() {
    const copyButtons2 = document.querySelectorAll('.copy-btn2');

    copyButtons2.forEach(function (copyButton) {
        copyButton.addEventListener('click', function () {
            const textToCopy = this.parentElement.querySelector('p');

            if (textToCopy) {
                const textarea = document.createElement('textarea');
                textarea.value = textToCopy.textContent;
                textarea.setAttribute('readonly', '');
                textarea.style.position = 'absolute';
                textarea.style.left = '-9999px';
                document.body.appendChild(textarea);

                textarea.select();
                document.execCommand('copy');

                document.body.removeChild(textarea);

                alert('paypal email copied!');
            }
        });
    });
    
}

// Call setup function for copy-btn2
setupCopyButton2();


