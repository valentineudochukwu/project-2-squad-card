let data =[
    {
        name: 'Valentine',
        age: '18'
    },
    {
        name: 'Gift',
        age: '32'
    },
    {
        name: 'Lebari',
        age: '29'
    },
    {
        name: 'veffery',
        age: '21'
    },
    {
        name: 'Hakeem',
        age: '27'
    },
    {
        name: 'Jayden',
        age: '37'
    },
];

const info = document.querySelector('#info')

let details = data.map(function(item){
    return '<div>' + item.name + ' ' + 'is '+ item.age + ' years old' + '</div>';
    
});

info.innerHTML = details.join('\n');