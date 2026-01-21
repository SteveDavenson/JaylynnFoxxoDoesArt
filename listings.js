fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSq6agTJEIFBzdBhUPsqenpbAKRZ08BkrcpeHt20hplxRa5UbYdMbrEy3uHrV1Q-RpAG8AI1IJVgDEt/pub?output=csv")
    .then (response => response.text())
    .then(csv =>{
        const rows = csv.split("\n").map(r => r.split(","));
        const container = document.getElementById("listings");

        for (let i = 1; i < rows.length; i++) {
            const [title, description, price, img1] = rows[i];

            container.innerHTML +=`
                <div class="listing">
                    <img src="${img1}" alt="${title}">
                    <h2>${title}</h2>
                    <p>$${price}</p>
                    <p>${description}</p>
                </div>
            `;
        }

    });
