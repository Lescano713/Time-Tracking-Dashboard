const main = document.querySelector('main');

fetch('data.json')
    .then(response => response.json())
    .then(data => showContent(data[0]));

function showContent(datas){
    const articleUser = document.createElement('article');
    articleUser.classList.add('articleUser');

    const divProfile = document.createElement('div');
    divProfile.classList.add('divProfile')
    const divOptions = document.createElement('div');
    divOptions.classList.add('divOptions');

    const imgProfile = document.createElement('img');
    imgProfile.src = datas.imageProfile;
    const h1Name = document.createElement('h1');
    h1Name.textContent = datas.name;
    const smallReport = document.createElement('small');
    smallReport.textContent = "Report for";

    divProfile.append(imgProfile, smallReport, h1Name);
    const pDaily = document.createElement('p');
    pDaily.textContent = 'Daily';
    pDaily.style.color = "white";

    const pWeekly = document.createElement('p');
    pWeekly.textContent = 'Weekly';

    const pMonthly = document.createElement('p');
    pMonthly.textContent = 'Monthly';

    divOptions.append(pDaily,pWeekly,pMonthly)
    articleUser.append(divProfile, divOptions);
    main.append(articleUser);

    datas.activity.forEach(activity => {
        const article = document.createElement('article');
        const divTimer = document.createElement('div');
        divTimer.classList.add('timeframesDiv');

        const p = document.createElement('p');
        p.textContent = activity.title;

        const imgIcon = document.createElement('img');
        imgIcon.src = './images/icon-ellipsis.svg'
        article.style.backgroundColor = `${activity.color}`;
        article.style.backgroundImage = `url(${activity.image})`;
        const h2 = document.createElement('h2');
        h2.textContent = `${activity.timeframes.daily.current}hrs`;
        const smallTime = document.createElement('small')
        smallTime.textContent = `Last Daily - ${activity.timeframes.daily.previous}hrs`;
        divTimer.append(p,imgIcon,h2,smallTime);
        article.append(divTimer);
        main.append(article);


        console.log(activity.timeframes.daily.current);

        pDaily.addEventListener('click', e =>{
            typeTime(activity.timeframes.daily, "Daily");
            pDaily.style.color = "white";
            pWeekly.style.color = "hsl(236, 100%, 87%)";
            pMonthly.style.color = "hsl(236, 100%, 87%)"
        });

        pWeekly.addEventListener('click', e =>{
            typeTime(activity.timeframes.weekly, "Weekly");
            pWeekly.style.color = "white";
            pMonthly.style.color = "hsl(236, 100%, 87%)"
            pDaily.style.color = "hsl(236, 100%, 87%)";
            
        });

        pMonthly.addEventListener('click', e =>{
            typeTime(activity.timeframes.monthly, "Monthly");
            pMonthly.style.color = "white";
            pWeekly.style.color = "hsl(236, 100%, 87%)";
            pDaily.style.color = "hsl(236, 100%, 87%)";
        });
        

        function typeTime(time, name){
            h2.textContent = `${time.current}hrs`;
            smallTime.textContent = `Last ${name} - ${time.previous}hrs`;
        }

    });
    
}