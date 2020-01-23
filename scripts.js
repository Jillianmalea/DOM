document.addEventListener("DOMContentLoaded", function () {
    let header = document.createElement('div');
    header.className = 'header-container';
    document.body.appendChild(header);
    let h1 = document.createElement('h1');
    h1.className = 'h1';
    let h1Text = document.createTextNode('This is an h1');
    h1.appendChild(h1Text);
    header.appendChild(h1);
    let h2 = document.createElement('h2');
    h2.className = "h2";
    let h2Text = document.createTextNode('This is an h2');
    h2.appendChild(h2Text);
    header.appendChild(h2);
    let h3 = document.createElement('h3');
    h3.className = "h3";
    let h3Text = document.createTextNode('This is an h3');
    h3.appendChild(h3Text);
    header.appendChild(h3);
    let h4 = document.createElement('h4');
    h4.className = "h4";
    let h4Text = document.createTextNode('This is an h4');
    h4.appendChild(h4Text);
    header.appendChild(h4);
    let h5 = document.createElement('h5');
    h5.className = "h5";
    let h5Text = document.createTextNode('This is an h5');
    h5.appendChild(h5Text);
    header.appendChild(h5);
    let h6 = document.createElement('h6');
    h6.className = "h6";
    let h6Text = document.createTextNode('This is an h6');
    h6.appendChild(h6Text);
    header.appendChild(h6);

    let headers = [h1, h2, h3, h4, h5, h6]
    let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'grey', 'pink', 'black']
    headers.forEach(function (h) {
        h.addEventListener('dblclick', function () {
            let randomNum = Math.floor((Math.random() * 7) + 1);
            let randomColor = colors[randomNum];
            h.style.color = randomColor
        });
    })
    let button = document.createElement('button');
    let btnText = document.createTextNode('Click to add new list item');
    // button.className = "button";
    button.classList.add('button');
    button.appendChild(btnText);
    document.body.appendChild(button);
    let count = 1;
    button.addEventListener("click", function () {
        let cloud = document.createElement('h1');
        let h1Text = document.createTextNode('SHIT ' + count)
        count++
        cloud.appendChild(h1Text)
        document.body.appendChild(cloud);
        cloud.addEventListener('click', function (e) {

            e.target.style.color = colors[Math.floor(Math.random() * colors.length)];

        })
        cloud.addEventListener("dblclick", function(e){
            cloud.remove();


        })









    })
})