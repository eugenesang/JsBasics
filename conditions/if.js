// if

const age = 10;

if(age < 18){
    console.log('Young person')
}

// if else

if(age < 18){
    console.log('young person')
} else {
    console.log('adult')
}

// nested if

const gender = 'male';

if(age < 18 && gender == 'male'){
    console.log('young boy')
} else if (age < 18 && gender != 'male'){
    console.log('young girl')
} else if ( gender == 'male'){
    console.log('adult man')
}else{
    console.log('adult woman')
}

// cleaner code

if(age < 18){
    if(gender === 'male'){
        console.log('young boy')
    }else{
        console.log('young girl');
    }
}else{
    if(gender === 'male'){
        console.log('adult man')
    }else{
        console.log('adult woman');
    }
}