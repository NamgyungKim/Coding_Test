// 직사각형 별찍기

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ")
    let arr = Array.from({length:n[0]},()=>'*')
    for(let j=0; j<n[1]; j++){ 
      console.log(arr.join(''))
    }
});