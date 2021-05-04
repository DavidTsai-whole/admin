let toggle = document.querySelector('.toggle');
let chartSelect = document.querySelector('.chartSelect');
let table = document.querySelector('.tbody');
let select = document.querySelector('.title select')
let notify =  document.querySelector('.user i');
let body = document.querySelector('body');


function FilterBage(value) {
    if (value === 'ALL') {
        table.innerHTML =
            `
<tr>
 <td>Star Refrigerator</td>
 <td>$800</td>
 <td>Paid</td>
 <td><span class="status delivered">Delivered</span></td>
  </tr>
  <tr>
      <td>Window coolers</td>
      <td>$110</td>
      <td>Due</td>
      <td><span class="status pending">Pending</span></td>
  </tr>
  <tr>
      <td>Speakers</td>
      <td>$620</td>
      <td>Paid</td>
      <td><span class="status return">Return</span></td>
  </tr>
  <tr>
      <td>Hp Laptop</td>
      <td>$2000</td>
      <td>Due</td>
      <td><span class="status inprogress">In Progress</span></td>
  </tr>
  <tr>
      <td>Star Refrigerator</td>
      <td>$800</td>
      <td>Paid</td>
      <td><span class="status delivered">Delivered</span></td>
  </tr>
  <tr>
      <td>Window coolers</td>
      <td>$110</td>
      <td>Due</td>
      <td><span class="status pending">Pending</span></td>
  </tr>
  <tr>
      <td>Speakers</td>
      <td>$620</td>
      <td>Paid</td>
      <td><span class="status return">Return</span></td>
  </tr>
  <tr>
      <td>Hp Laptop</td>
      <td>$2000</td>
      <td>Due</td>
      <td><span class="status inprogress">In Progress</span></td>
  </tr>
`
    } else if (value === 'Delivered') {
        table.innerHTML =
            `
    <tr>
 <td>Star Refrigerator</td>
 <td>$800</td>
 <td>Paid</td>
 <td><span class="status delivered">Delivered</span></td>
  </tr>
  <tr>
      <td>Star Refrigerator</td>
      <td>$800</td>
      <td>Paid</td>
      <td><span class="status delivered">Delivered</span></td>
  </tr>
    `
    } else if (value === 'Pending') {
        table.innerHTML =
            `
       <tr>
      <td>Window coolers</td>
      <td>$110</td>
      <td>Due</td>
      <td><span class="status pending">Pending</span></td>
  </tr>
  <tr>
      <td>Window coolers</td>
      <td>$110</td>
      <td>Due</td>
      <td><span class="status pending">Pending</span></td>
  </tr>
       `
    } else if (value === 'Return') {
        table.innerHTML =
            `
       <tr>
      <td>Speakers</td>
      <td>$620</td>
      <td>Paid</td>
      <td><span class="status return">Return</span></td>
  </tr>
  <tr>
      <td>Speakers</td>
      <td>$620</td>
      <td>Paid</td>
      <td><span class="status return">Return</span></td>
  </tr>
       `

    } else {
        table.innerHTML = `<tr>
       <td>Hp Laptop</td>
       <td>$2000</td>
       <td>Due</td>
       <td><span class="status inprogress">In Progress</span></td>
   </tr><tr>
   <td>Hp Laptop</td>
   <td>$2000</td>
   <td>Due</td>
   <td><span class="status inprogress">In Progress</span></td>
</tr>`
    }

}


function FilterTable() {
    let value = this.value;
    FilterBage(value)

}

let inital = {
    bindto: ".pie",
    data: {
        columns: [
            ['REVENUE', 280, 400, 220, 290, 320, 760, 1620],
            ['INCOME', 120, 150, 80, 260, 340, 150, 100],
            ['COST', 610, 450, 500, 570, 180, 220, 160]
        ],
        type: "pie",
        colors: {
            'REVENUE': '#7ED321',
            'INCOME': '#4A90E2',
            'COST': '#D0021B'
        },
    },
}

c3.generate(inital);

function toggleMenu() {
    let sidebar = document.querySelector('.sidebar')
    let main = document.querySelector('.main')
    toggle.classList.toggle('active')
    sidebar.classList.toggle('active')
    main.classList.toggle('active')

}

function toggleChart() {
    let date = document.querySelectorAll('.date span');
    let number = document.querySelectorAll('.number');
    let value = this.value;

    switch (value) {
        case 'daily':
            date[0].textContent = '2021/4/16';
            date[1].textContent = '2021/4/22';
            number[0].textContent = '3890';
            number[1].textContent = '1200';
            number[2].textContent = '2690';
            inital.data.columns = [
                ['REVENUE', 280, 400, 220, 290, 320, 760, 1620],
                ['INCOME', 120, 150, 80, 260, 340, 150, 100],
                ['COST', 610, 450, 500, 570, 180, 220, 160]
            ];
            c3.generate(inital)
            break;
        case 'weekly':
            date[0].textContent = '2021/4/1';
            date[1].textContent = '2021/4/30';
            number[0].textContent = '12890';
            number[1].textContent = '5200';
            number[2].textContent = '7690';
            inital.data.columns = [
                ['REVENUE', 3200, 2600, 4000, 3090],
                ['INCOME', 900, 1500, 1700, 1100],
                ['COST', 2600, 1800, 1120, 2170]
            ];
            c3.generate(inital)
            break;
        case 'yearly':
            date[0].textContent = '2019';
            date[1].textContent = '2021';
            number[0].textContent = '92890';
            number[1].textContent = '62000';
            number[2].textContent = '30890';
            inital.data.columns = [
                ['REVENUE', 36500, 28790, 37600],
                ['INCOME', 19400, 32880, 9720],
                ['COST', 14380, 9600, 6910]
            ];
            c3.generate(inital)
            break;



    }
}
select.addEventListener('change', FilterTable)
toggle.addEventListener('click', toggleMenu)
chartSelect.addEventListener('change', toggleChart)
notify.addEventListener('click',function(){
    let listt = document.querySelector('.listt');
    if(listt.style.display === 'none'){
        listt.style.display = 'block'
    }else{
        listt.style.display = 'none'
    }
    

})